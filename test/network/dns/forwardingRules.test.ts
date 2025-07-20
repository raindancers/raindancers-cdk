import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { ForwardingRules, AssociateSharedResolverRule } from '../../../src/network/dns/forwardingRules';

describe('ForwardingRules', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc');
  });

  test('creates forwarding rules', () => {
    new ForwardingRules(stack, 'TestRules', {
      vpc,
      domains: ['example.com'],
      resolverIP: ['10.0.0.1'],
      resolverId: 'resolver-123',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Route53Resolver::ResolverRule', {
      DomainName: 'example.com',
    });
  });

  test('creates resolver rule associations', () => {
    new ForwardingRules(stack, 'TestAssociations', {
      vpc,
      domains: ['test.com', 'example.org'],
      resolverIP: ['10.0.0.1', '10.0.0.2'],
      resolverId: 'resolver-456',
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Route53Resolver::ResolverRuleAssociation', 2);
  });
});

describe('AssociateSharedResolverRule', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc');
  });

  test('creates shared resolver rule association', () => {
    new AssociateSharedResolverRule(stack, 'TestSharedRule', {
      vpc,
      domainNames: ['shared.example.com'],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('Custom::AWS', {});
  });
});