import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsManagedDNSFirewallRuleGroup, DNSFirewallActions, DNSFirewallBlockResponse } from '../../../src/network/dns/dnsfirewall';

// Mock the lambda asset to avoid missing file error
jest.mock('aws-cdk-lib/aws-lambda', () => {
  const actual = jest.requireActual('aws-cdk-lib/aws-lambda');
  return {
    ...actual,
    Code: {
      ...actual.Code,
      fromAsset: jest.fn(() => actual.Code.fromInline('def on_event(event, context): return {"PhysicalResourceId": "test", "Data": {"ManagedRuleIds": ["id1", "id2", "id3"]}}')),
    },
  };
});

describe('AwsManagedDNSFirewallRuleGroup', () => {
  let stack: cdk.Stack;

  beforeEach(() => {
    stack = new cdk.Stack();
  });

  test('creates DNS firewall rule group with AWS managed rules', () => {
    const firewallRuleGroup = new AwsManagedDNSFirewallRuleGroup(stack, 'TestFirewallRuleGroup');

    expect(firewallRuleGroup.resolverRuleId).toBeDefined();

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Route53Resolver::FirewallRuleGroup', {
      Name: 'AWS Managed Rules',
    });

    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'managedAWSRules.on_event',
      Runtime: 'python3.9',
    });
  });

  test('creates custom resource for rule lookup', () => {
    new AwsManagedDNSFirewallRuleGroup(stack, 'TestFirewallRuleGroup2');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('Custom::Lookup', {
      awsManagedRules: [
        'AWSManagedDomainsMalwareDomainList',
        'AWSManagedDomainsAggregateThreatList',
        'AWSManagedDomainsBotnetCommandandControl',
      ],
    });
  });

  test('lambda has correct IAM permissions', () => {
    new AwsManagedDNSFirewallRuleGroup(stack, 'TestFirewallRuleGroup3');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [{
          Action: 'route53resolver:ListFirewallDomainLists',
          Effect: 'Allow',
          Resource: '*',
        }],
      },
    });
  });
});

describe('DNSFirewallActions enum', () => {
  test('has correct values', () => {
    expect(DNSFirewallActions.ALLOW).toBe('ALLOW');
    expect(DNSFirewallActions.BLOCK).toBe('BLOCK');
    expect(DNSFirewallActions.ALERT).toBe('ALERT');
  });
});

describe('DNSFirewallBlockResponse enum', () => {
  test('has correct values', () => {
    expect(DNSFirewallBlockResponse.NODATA).toBe('NODATA');
    expect(DNSFirewallBlockResponse.NXDOMAIN).toBe('NXDOMAIN');
    expect(DNSFirewallBlockResponse.OVERRIDE).toBe('OVERRIDE');
  });
});