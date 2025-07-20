import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { R53Resolverendpoints } from '../../../src/network/dns/dnsResolvers';
import { CentralResolverRules } from '../../../src/network/dns/resolverRules';

describe('CentralResolverRules', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;
  let resolvers: R53Resolverendpoints;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc', {
      subnetConfiguration: [
        { name: 'Private', subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      ],
    });
    resolvers = new R53Resolverendpoints(stack, 'TestResolvers', {
      vpc,
      subnetGroup: 'Private',
    });
  });

  test('creates central resolver rules', () => {
    new CentralResolverRules(stack, 'TestCentralRules', {
      domains: ['corp.example.com', 'internal.test.com'],
      resolvers,
      vpc,
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Route53Resolver::ResolverRule', 2);
  });

  test('creates resolver rules with correct properties', () => {
    new CentralResolverRules(stack, 'TestRuleProps', {
      domains: ['example.internal'],
      resolvers,
      vpc,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Route53Resolver::ResolverRule', {
      DomainName: 'example.internal',
      RuleType: 'FORWARD',
    });
  });
});