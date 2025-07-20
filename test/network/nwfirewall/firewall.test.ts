import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as firewall from 'aws-cdk-lib/aws-networkfirewall';
import { NetworkFirewall, FirewallSubnetMappingIPAddressType } from '../../../src/network/nwfirewall/firewall';

// Mock the lambda asset to avoid missing file error
jest.mock('aws-cdk-lib/aws-lambda', () => {
  const actual = jest.requireActual('aws-cdk-lib/aws-lambda');
  return {
    ...actual,
    Code: {
      ...actual.Code,
      fromAsset: jest.fn(() => actual.Code.fromInline('def handler(event, context): return {"PhysicalResourceId": "test"}')),
    },
  };
});

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
    expect(nwFirewall.flowLogs).toBeDefined();
    expect(nwFirewall.alertLogs).toBeDefined();
  });

  test('creates NetworkFirewall with IPv4 stack mode', () => {
    const nwFirewall = new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
      iPStackMode: FirewallSubnetMappingIPAddressType.IPV4,
    });

    expect(nwFirewall.firewallArn).toBeDefined();
    expect(nwFirewall.firewallId).toBeDefined();
  });

  test('creates NetworkFirewall with IPv6 stack mode', () => {
    const nwFirewall = new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
      iPStackMode: FirewallSubnetMappingIPAddressType.IPV6,
    });

    expect(nwFirewall.firewallArn).toBeDefined();
    expect(nwFirewall.firewallId).toBeDefined();
  });

  test('creates NetworkFirewall with DUALSTACK mode (default)', () => {
    const nwFirewall = new NetworkFirewall(stack, 'TestFirewall', {
      vpc,
      subnetGroup: 'firewall',
      firewallName: 'test-firewall',
      firewallPolicy,
    });

    expect(nwFirewall.firewallArn).toBeDefined();
    expect(nwFirewall.firewallId).toBeDefined();
  });
});