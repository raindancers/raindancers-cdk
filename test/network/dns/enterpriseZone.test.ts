import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { EnterpriseZone, CentralAccountAssnRole } from '../../../src/network/dns/enterpriseZone';

describe('EnterpriseZone', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc');
  });

  test('creates enterprise zone without hub VPCs', () => {
    new EnterpriseZone(stack, 'TestZone', {
      localVpc: vpc,
      enterpriseDomainName: 'example.com',
      hubVpcs: undefined,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Route53::HostedZone', {
      Name: 'example.com.',
    });
  });

  test('creates CFN output for domain', () => {
    new EnterpriseZone(stack, 'TestZoneOutput', {
      localVpc: vpc,
      enterpriseDomainName: 'output.test.com',
      hubVpcs: undefined,
    });

    const template = Template.fromStack(stack);
    template.hasOutput('*', {
      Value: 'output.test.com',
    });
  });
});

describe('CentralAccountAssnRole', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc');
  });

  test('creates central account association role', () => {
    new CentralAccountAssnRole(stack, 'TestRole', {
      vpc,
      orgId: 'o-1234567890abcdef12',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'r53assnRole',
    });
  });

  test('creates role with custom name', () => {
    new CentralAccountAssnRole(stack, 'TestCustomRole', {
      vpc,
      orgId: 'o-abcdef1234567890ab',
      roleName: 'CustomR53Role',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'CustomR53Role',
    });
  });
});