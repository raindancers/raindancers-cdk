import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_networkfirewall as network_firewall,
} from 'aws-cdk-lib';
import { Policy } from 'aws-cdk-lib/aws-iam';
import * as constructs from 'constructs';

import {
  enterprisevpc,
  nwFirewall,
}
  from '../../src/index';
import { NetworkFirewall } from '../../src/network/nwfirewall';

export interface EnterpriseVPCProps extends core.StackProps {

}

export class EnterpriseVPC extends core.Stack {

  constructor(scope: constructs.Construct, id: string, props: EnterpriseVPCProps) {
    super(scope, id, props);


    const outside = new enterprisevpc.SubnetGroup(this, 'outside',
      {
        name: 'outside',
        subnetType: ec2.SubnetType.PUBLIC,
        cidrMask: 23,
      },
    );

    const inside = new enterprisevpc.SubnetGroup(this, 'inside',
      {
        name: 'inside',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        cidrMask: 23,
      },
    );

    const dmz = new enterprisevpc.SubnetGroup(this, 'dmz',
      {
        name: 'dmz',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        cidrMask: 23,
      },
    );
    const firewall = new enterprisevpc.SubnetGroup(this, 'firewall',
      {
        name: 'firewall',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        cidrMask: 28,
      },
    );

    const vpc = new ec2.Vpc(this, 'vpc', {
      vpcName: 'vpc',
      ipAddresses: ec2.IpAddresses.cidr('10.128.0.0/20'),
      natGateways: 2,
      availabilityZones: ['ap-southeast-2a', 'ap-southeast-2b'],
      subnetConfiguration: [
        inside.subnet,
        outside.subnet,
        dmz.subnet,
        firewall.subnet,
      ],
    });

    const eVpc = new enterprisevpc.EnterpriseVpc(this, 'enterpriseVPC', {
      vpc: vpc,
    });

    eVpc.attachAWSManagedDNSFirewallRules();

    eVpc.addServiceEndpoints({
      services: [
        ec2.InterfaceVpcEndpointAwsService.SSM,
      ],
      dynamoDbGateway: true,
      s3GatewayInterface: true,
      subnetGroup: inside,
    });

    const policy = new nwFirewall.FirewallPolicy(this, 'firewallpolicy', {
      policyName: 'policyName',
      // if there is not a stateless rule match drop the packet.
      statelessDefaultActions: [nwFirewall.StatelessActions.DROP],
      statelessFragmentDefaultActions: [nwFirewall.StatelessActions.DROP],
    });

    policy.addStatelessRuleGroup(
      {
        priority: 10,
        groupName: 'ICMP',
        rules: [
          {
            priority: 10,
            ruleDefinition: {
              actions: [nwFirewall.StatelessActions.PASS],
              matchAttributes: {
                protocols: [
                  nwFirewall.Protocol.ICMP,
                ],
                sources: [
                  { addressDefinition: '10.0.0.0/8' },
                ],
              },
            },
          },
        ],
        description: 'Allow ICMP from inside networks',
      },
    );

    policy.addStatelessRuleGroup({
      priority: 20,
      groupName: 'HTTPS',
      rules: [
        {
          priority: 20,
          ruleDefinition: {
            actions: [nwFirewall.StatelessActions.STATEFUL],
            matchAttributes: {
              protocols: [
                nwFirewall.Protocol.TCP,
              ],
              sources: [
                { addressDefinition: '10.0.0.0/8' },
              ],
              destinationPorts: [
                { fromPort: 443, toPort: 443 },
              ],
            },
          },
        },
      ],
      description: 'HTTPS is permitted outbound, but requires stateful inspection',
    });

    policy.addManagedStatefulRules({
      awsManagedRules: [
        nwFirewall.ManagedAwsFirewallRules.ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.MALWARE_DOMAINS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_DOS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_FUP_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_IOC_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_PHISHING_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SCANNERS_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SUSPECT_ACTION_ORDER,
        nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER,
      ],
    });

    // adds a stateful rule to deny specific websites
    policy.addStatefulRules({
      priority: 100,
      capacity: 40,
      groupName: 'DenyBadWebsites',
      description: 'Deny specific Websites',
      rulesSourceList: {
        generatedRulesType: nwFirewall.GeneratedRulesType.DENYLIST,
        targets: [
          '.bad.com', // a domain wildcard blocks the domain and any subdomains
        ],
        targetTypes: [
          nwFirewall.TargetTypes.HTTP_HOST,
          nwFirewall.TargetTypes.TLS_SNI,
        ],
      },
    });

    // add a specific rule.
    policy.addStatefulRules({
      priority: 110,
      capacity: 200,
      groupName: 'specificRule',
      description: 'specificRule for some funny odd thing',
      statefuleRules: [
        {
          action: nwFirewall.StatefulAction.PASS,
          header: {
            destination: 'ANY',
            destinationPort: '22',
            direction: 'ANY',
            protocol: 'TCP',
            source: '10.10.10.10/32',
            sourcePort: 'ANY',
          },
          ruleOptions: [
            {
              keyword: 'sid: 123456',
            },
          ],
        },
      ],
    });

    // add a specific rule.
    policy.addStatefulRules({
      priority: 120,
      capacity: 200,
      groupName: 'suricataRule',
      description: 'a suricatarule',
      suricataRule: 'pass tls "10.10.10.0/24" any -> "0.0.0.0/0" any (tls.sni; content:"ssm."; startswith; content:".amazonaws.com"; endswith; nocase; flow: to_server; sid:202308311;)',
    });


    // adds a stateful rule to allow specific websites


    eVpc.addNetworkFirewall(
      'firewallname', // firewall name
      policy.firewallpolicy, // polcy
      firewall, // subnet
    );

    eVpc.router(
      [
        {
          subnetGroup: inside,
          routes: [
            {
              cidr: '0.0.0.0/0',
              description: 'default route',
              destination: enterprisevpc.Destination.NWFIREWALL,
            },
          ],
        },
      ],
    );


    // The code below shows an example of how to instantiate this type.
    // The values are placeholders you should change.


  }
}