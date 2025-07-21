
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

export class InspectionRoutes extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: InspectionRoutesProps) {
    super(scope, id);

    // routes in the local TG route table
    props.inspectionRoutes.forEach((route) => {
      new ec2.CfnTransitGatewayRoute(this, `tglocalroute${route}`, {
        transitGatewayRouteTableId: props.localTgRouteTable.transitGatewayRouteTableId,
        destinationCidrBlock: route,
        transitGatewayAttachmentId: props.firewallAttachmentId,
      });
    });

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