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
}

/**
 * Router construct that manages routing configuration for VPC subnets.
 * Handles routing to Transit Gateway, Internet Gateway, Firewall Endpoints, and other destinations.
 */
export class EastWestFirewallOnTg extends constructs.Construct {

  firewall: nwFirewall.NetworkFirewall | undefined;

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
      vpcName: 'dualstackTest',
      subnetConfiguration: [
        linknet,
        firewall,
      ],
      availabilityZones: [
        'ap-southeast-2a',
        'ap-southeast-2b',
      ],
      ipamConfig: props.ipamConfig,
    });

    network.createFlowLogwithAnalysis('testflowlogs', {
      oneMinuteFlowLogs: true,
      localAthenaQuerys: true,
    });


    network.attachToTransitGateway('tgattach', {
      transitGateway: props.transitGateway,
      applianceMode: cloudNetwork.ApplianceMode.ENABLED,
      ipv6Support: cloudNetwork.IpV6Support.ENABLED,
      routesToTransitGateway: [
        '0.0.0.0/0',
        '::/0',
      ],
    });

    // need to create a firewall and place it in this vpc.

    const policy = new nwFirewall.FirewallPolicy(this, 'policy', {
      policyName: 'test',
      statelessDefaultActions: [
        nwFirewall.StatelessActions.PASS,
      ],
      statelessFragmentDefaultActions: [
        nwFirewall.StatelessActions.PASS,
      ],
    });

    network.addNetworkFirewall(
      'testFW',
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
