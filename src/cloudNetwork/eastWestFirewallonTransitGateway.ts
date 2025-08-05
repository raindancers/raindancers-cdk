import {
  aws_ec2 as ec2,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

import * as cloudNetwork from './index';
import * as nwFirewall from '../network/nwfirewall';
import * as transitGateway from '../network/transitGateway';


export interface EastWestFirewallOnTgProps {
  readonly transitGateway: transitGateway.TransitGateway;
  readonly ipamConfig: cloudNetwork.IpamConfig;
  readonly firewallName: string;
  readonly availabilityZones: string[];
  readonly transitGatewayRoutingTable: transitGateway.ITransitGatewayRouteTable;
}

/**
 * Router construct that manages routing configuration for VPC subnets.
 * Handles routing to Transit Gateway, Internet Gateway, Firewall Endpoints, and other destinations.
 */
export class EastWestFirewallOnTg extends constructs.Construct {

  firewall: nwFirewall.NetworkFirewall | undefined;
  attachmentId: string;

  constructor(scope: constructs.Construct, id: string, props: EastWestFirewallOnTgProps) {
    super(scope, id);

    const firewall: cloudNetwork.ISubnetGroup = {
      ipv4mask: 28,
      name: 'firewall',
      subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      stack: cloudNetwork.StackType.DUAL_STACK,
    };

    const linknet: cloudNetwork.ISubnetGroup = {
      ipv4mask: 28,
      name: 'linknet',
      stack: cloudNetwork.StackType.DUAL_STACK,
      subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
    };

    const network = new cloudNetwork.CloudNetwork(this, 'vpc', {
      vpcName: `${props.firewallName}-EastWestInSpector`,
      subnetConfiguration: [
        linknet,
        firewall,
      ],
      availabilityZones: props.availabilityZones,
      ipamConfig: props.ipamConfig,
    });

    network.createFlowLogwithAnalysis('testflowlogs', {
      oneMinuteFlowLogs: true,
      localAthenaQuerys: true,
    });


    const attachment = network.attachToTransitGateway('tgattach', {
      transitGateway: props.transitGateway,
      applianceMode: cloudNetwork.ApplianceMode.ENABLED,
      ipv6Support: cloudNetwork.IpV6Support.ENABLED,
      routesToTransitGateway: [
        '0.0.0.0/0',
        '::/0',
      ],
      transitGatewayRoutingTable: props.transitGatewayRoutingTable,
    });

    this.attachmentId = attachment;

    // need to create a firewall and place it in this vpc.

    const policy = new nwFirewall.FirewallPolicy(this, 'policy', {
      policyName: `${props.firewallName}-policy`,
      statelessDefaultActions: [
        nwFirewall.StatelessActions.PASS,
      ],
      statelessFragmentDefaultActions: [
        nwFirewall.StatelessActions.PASS,
      ],
    });

    network.addNetworkFirewall(
      props.firewallName,
      policy.firewallpolicy,
      firewall,
    );


    if (network.networkFirewall) {
      this.firewall = network.networkFirewall;
    }

    const routes: cloudNetwork.RouterGroup[] = [
      {
        subnetGroup: firewall,
        routes: [
          { destCidr: '0.0.0.0/0', description: 'defaultipv4', nextHop: cloudNetwork.NextHop.TRANSITGATEWAY },
          { destCidr: '::/0', description: 'defaultipv6', nextHop: cloudNetwork.NextHop.TRANSITGATEWAY },
          { destSubnetGroup: linknet, description: 'blackholelinknet', nextHop: cloudNetwork.NextHop.BLACKHOLE },
        ],
      },
      {
        subnetGroup: linknet,
        routes: [
          { destCidr: '0.0.0.0/0', description: 'defaultipv4', nextHop: cloudNetwork.NextHop.FIREWALL_ENDPOINT },
          { destCidr: '::/0', description: 'defaultipv6', nextHop: cloudNetwork.NextHop.FIREWALL_ENDPOINT },
          { destSubnetGroup: firewall, description: 'blackholefirewall', nextHop: cloudNetwork.NextHop.FIREWALL_ENDPOINT },
        ],
      },
    ];

    new cloudNetwork.NestedRouteStack(this, 'routing', {
      vpc: network,
      subnetRoutes: routes,
      nwfirewall: network.networkFirewall,
      transitGatewayId: props.transitGateway.id,
      transitGatewayAttachmentId: network.transitGatewayAttachment,
    });
  }
}
