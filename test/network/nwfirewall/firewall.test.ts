import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as firewall from 'aws-cdk-lib/aws-networkfirewall';
import { NetworkFirewall, FirewallSubnetMappingIPAddressType } from '../../../src/network/nwfirewall/firewall';

describe('NetworkFirewall', () => {
  let app: cdk.App;
  let stack: cdk.Stack;
  let vpc: ec2.Vpc;
  let firewallPolicy: firewall.CfnFirewallPolicy;

  beforeEach(() => {
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');

    vpc = new ec2.Vpc(stack, 'TestVpc', {
      subnetConfiguration: [
        {
          name: 'firewall',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
    });

    firewallPolicy = new firewall.CfnFirewallPolicy(stack, 'TestPolicy', {
      firewallPolicyName: 'test-policy',
      firewallPolicy: {
        statelessDefaultActions: ['aws:pass'],
        statelessFragmentDefaultActions: ['aws:pass'],
      },
    });
  });

  test('creates NetworkFirewall with default settings', () => {
    const nwFirewall = new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
    });

    expect(nwFirewall.firewallArn).toBeDefined();
    expect(nwFirewall.firewallId).toBeDefined();
    expect(nwFirewall.endPointIds).toBeDefined();
    expect(nwFirewall.flowLogs).toBeDefined();
    expect(nwFirewall.alertLogs).toBeDefined();

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::Firewall', {
      FirewallName: 'test-firewall',
    });

    template.hasResourceProperties('AWS::Logs::LogGroup', {
      LogGroupName: 'test-firewallFlowLogs',
    });

    template.hasResourceProperties('AWS::Logs::LogGroup', {
      LogGroupName: 'test-firewallAlertLogs',
    });

    template.hasResourceProperties('AWS::NetworkFirewall::LoggingConfiguration', {
      LoggingConfiguration: {
        LogDestinationConfigs: [
          {
            LogDestinationType: 'CloudWatchLogs',
            LogType: 'FLOW',
          },
          {
            LogDestinationType: 'CloudWatchLogs',
            LogType: 'ALERT',
          },
        ],
      },
    });
  });

  test('creates NetworkFirewall with IPv4 stack mode', () => {
    new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
      iPStackMode: FirewallSubnetMappingIPAddressType.IPV4,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::Firewall', {
      FirewallName: 'test-firewall',
    });

    // Check that at least one subnet mapping has the correct IP address type
    const resources = template.findResources('AWS::NetworkFirewall::Firewall');
    const firewallResource = Object.values(resources)[0] as any;
    expect(firewallResource.Properties.SubnetMappings.some((mapping: any) => mapping.IPAddressType === 'IPV4')).toBe(true);
  });

  test('creates NetworkFirewall with IPv6 stack mode', () => {
    new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
      iPStackMode: FirewallSubnetMappingIPAddressType.IPV6,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::Firewall', {
      FirewallName: 'test-firewall',
    });

    // Check that at least one subnet mapping has the correct IP address type
    const resources = template.findResources('AWS::NetworkFirewall::Firewall');
    const firewallResource = Object.values(resources)[0] as any;
    expect(firewallResource.Properties.SubnetMappings.some((mapping: any) => mapping.IPAddressType === 'IPV6')).toBe(true);
  });

  test('creates NetworkFirewall with DUALSTACK mode (default)', () => {
    new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::Firewall', {
      FirewallName: 'test-firewall',
    });

    // Check that at least one subnet mapping has the correct IP address type
    const resources = template.findResources('AWS::NetworkFirewall::Firewall');
    const firewallResource = Object.values(resources)[0] as any;
    expect(firewallResource.Properties.SubnetMappings.some((mapping: any) => mapping.IPAddressType === 'DUALSTACK')).toBe(true);
  });
});