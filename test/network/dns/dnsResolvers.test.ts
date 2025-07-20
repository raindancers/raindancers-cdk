import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { R53Resolverendpoints } from '../../../src/network/dns/dnsResolvers';

describe('R53Resolverendpoints', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc', {
      subnetConfiguration: [
        { name: 'Private', subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      ],
    });
  });

  test('creates inbound resolver endpoints', () => {
    new R53Resolverendpoints(stack, 'TestResolvers', {
      vpc,
      subnetGroup: 'Private',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Route53Resolver::ResolverEndpoint', {
      Direction: 'inbound',
    });
  });

  test('creates outbound resolver endpoints', () => {
    new R53Resolverendpoints(stack, 'TestResolverSG', {
      vpc,
      subnetGroup: 'Private',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Route53Resolver::ResolverEndpoint', {
      Direction: 'outbound',
    });
  });
});