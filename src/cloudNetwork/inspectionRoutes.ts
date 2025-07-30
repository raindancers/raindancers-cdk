
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

    // routes in the local TG route table
    props.inspectionRoutes.forEach((route) => {
      new ec2.CfnTransitGatewayRoute(this, `tglocalroute${route}`, {
        transitGatewayRouteTableId: props.localTgRouteTable.transitGatewayRouteTableId,
        destinationCidrBlock: route,
        transitGatewayAttachmentId: props.firewallAttachmentId,
      });
    });

    // ipv6 routes do not propogate :-()
    // propogate the VPC routes to the INspection TG routing table.
    // new ec2.CfnTransitGatewayRouteTablePropagation(this, 'propogationToInspection', {
    //   transitGatewayRouteTableId: props.inspectionTgRouteTable.transitGatewayRouteTableId,
    //   transitGatewayAttachmentId: props.localAttachmentId,
    // });

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