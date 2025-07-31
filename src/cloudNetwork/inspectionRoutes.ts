import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_iam as iam,
  aws_lambda as lambda,
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as transitGateway from '../network/transitGateway';

export interface InspectionRoutesProps {

  readonly firewallAttachmentId: string;
  readonly localAttachmentId: string;
  readonly inspectionRoutes: string[];
  readonly localTgRouteTable: transitGateway.ITransitGatewayRouteTable;
  readonly inspectionTgRouteTable: transitGateway.ITransitGatewayRouteTable;
  readonly vpcIpv4Cidr: string;
  readonly vpcIpv6Cidr: string;
}

/**
 * Inspection routes will propogate this VPC's Cidrs into the Inspection VPC's route table so it has a return path.
 * HOwever the reverse is not true, We do not need the routes of the Inspection VPC, as data is only passing through it,
 * and it is not an actual endpoint.
 *
 * In most caases what you need to do is pass a list of routes to the firewall.
 */
export class InspectionRoutes extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: InspectionRoutesProps) {
    super(scope, id);

    // routes in the local TG route table to reach all other internal destinations.

    const routeExistsFn = new lambda.Function(this, 'routeExistsFn', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'route_exists.handler',
      timeout: core.Duration.minutes(2),
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudNetwork/lambda/inspectionRoutes/')),
      logGroup: new logs.LogGroup(this, 'routeExists', {
        retention: logs.RetentionDays.ONE_WEEK,
      }),
      loggingFormat: lambda.LoggingFormat.JSON,
      systemLogLevelV2: lambda.SystemLogLevel.INFO,
      applicationLogLevelV2: lambda.ApplicationLogLevel.INFO,
    });

    routeExistsFn.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['ec2:SearchTransitGatewayRoutes', 'ec2:CreateTransitGatewayRoute'],
        resources: ['*'],
      }),
    );

    const provider = new cr.Provider(this, 'routeProvider', {
      onEventHandler: routeExistsFn,
    });

    props.inspectionRoutes.forEach((route, index) => {
      new core.CustomResource(this, `routeCreator${index}`, {
        serviceToken: provider.serviceToken,
        properties: {
          Route: route,
          TgRouteTableId: props.localTgRouteTable.transitGatewayRouteTableId,
          AttachmentId: props.firewallAttachmentId,
          Action: 'CREATE_ROUTE_IF_NOT_EXISTS',
        },
      });
    });

    // Note: ipv6 routes do not propogate, so we have to add them explicity.
    /**
     * Add routes in the local TG route table, for the VpcsCidr. This gets used if there
     * are multiple TG's attached to the same routing table.
     */

    // ipv6 routes in Transitgateway
    new ec2.CfnTransitGatewayRoute(this, 'tginspectionrouteIpv6local', {
      transitGatewayRouteTableId: props.localTgRouteTable.transitGatewayRouteTableId,
      destinationCidrBlock: props.vpcIpv6Cidr,
      transitGatewayAttachmentId: props.localAttachmentId,
    });

    // ipv4 routes in Transitgateway
    new ec2.CfnTransitGatewayRoute(this, 'tginspectionrouteIpv4local', {
      transitGatewayRouteTableId: props.localTgRouteTable.transitGatewayRouteTableId,
      destinationCidrBlock: props.vpcIpv4Cidr,
      transitGatewayAttachmentId: props.localAttachmentId,
    });


    /**
     * Add routes in the inspection TG route table, for the VpcsCidr
     */
    // ipv6 routes in Transitgateway
    new ec2.CfnTransitGatewayRoute(this, 'tginspectionrouteIpv6', {
      transitGatewayRouteTableId: props.inspectionTgRouteTable.transitGatewayRouteTableId,
      destinationCidrBlock: props.vpcIpv6Cidr,
      transitGatewayAttachmentId: props.localAttachmentId,
    });

    // ipv4 routes in Transitgateway
    new ec2.CfnTransitGatewayRoute(this, 'tginspectionrouteIpv4', {
      transitGatewayRouteTableId: props.inspectionTgRouteTable.transitGatewayRouteTableId,
      destinationCidrBlock: props.vpcIpv4Cidr,
      transitGatewayAttachmentId: props.localAttachmentId,
    });
  }
}