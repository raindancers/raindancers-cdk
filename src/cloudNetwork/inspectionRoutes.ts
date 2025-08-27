import {
  aws_ec2 as ec2,
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

    // Create inspection routes in the local TG route table towards the firewall
    props.inspectionRoutes.forEach((route) => {
      const routeId = route.replace(/[^a-zA-Z0-9]/g, '');
      new ec2.CfnTransitGatewayRoute(this, `inspectionRoute${routeId}`, {
        transitGatewayRouteTableId: props.localTgRouteTable.transitGatewayRouteTableId,
        destinationCidrBlock: route,
        transitGatewayAttachmentId: props.firewallAttachmentId,
      });
    });

    // Note: ipv6 routes do not propogate, so we have to add them explicity,
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