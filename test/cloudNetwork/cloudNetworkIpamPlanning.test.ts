import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { IpamVPCPlanningTools } from '../../src/cloudNetwork/cloudNetworkIpamPlanning';

describe('IpamVPCPlanningTools', () => {
  let stack: Stack;
  let vpc: ec2.CfnVPC;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.CfnVPC(stack, 'TestVPC', {
      ipv4IpamPoolId: 'ipam-pool-456',
      ipv4NetmaskLength: 19,
    });
  });

  test('creates IPAM planning pools', () => {
    new IpamVPCPlanningTools(stack, 'IpamTools', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc',
    });

    const template = Template.fromStack(stack);

    // Check IPv6 IPAM pool
    template.hasResourceProperties('AWS::EC2::IPAMPool', {
      AddressFamily: 'ipv6',
      IpamScopeId: 'ipam-scope-123',
      SourceIpamPoolId: 'ipam-pool-123',
    });

    // Check IPv4 IPAM pool
    template.hasResourceProperties('AWS::EC2::IPAMPool', {
      AddressFamily: 'ipv4',
      IpamScopeId: 'ipam-scope-456',
      SourceIpamPoolId: 'ipam-pool-456',
    });
  });

  test('creates VPC IPv6 CIDR block', () => {
    new IpamVPCPlanningTools(stack, 'IpamTools', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPCCidrBlock', {
      Ipv6IpamPoolId: 'ipam-pool-123',
      Ipv6NetmaskLength: 56,
    });
  });

  test('creates Lambda function for IPAM waiter', () => {
    new IpamVPCPlanningTools(stack, 'IpamTools', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'ipv6ipam.handler',
      Runtime: 'python3.13',
    });
  });

  test('creates IPAM tools with custom IPv6 netmask length', () => {
    new IpamVPCPlanningTools(stack, 'IpamToolsCustom', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc-custom',
      ipv6NetmaskLength: 60,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPCCidrBlock', {
      Ipv6NetmaskLength: 60,
    });
  });

  test('creates IPAM tools with custom IPv4 allocation', () => {
    new IpamVPCPlanningTools(stack, 'IpamToolsIPv4', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc-ipv4',
      defaultipv4allocation: 28,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::IPAMPool', {
      AllocationDefaultNetmaskLength: 28,
    });
  });

  test('creates IPAM tools with direct API calls', () => {
    new IpamVPCPlanningTools(stack, 'IpamToolsDirectAPI', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
        useDirectAPICalls: true,
      },
      vpc: vpc,
      vpcName: 'test-vpc-direct-api',
      useDirectAPICalls: true,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('Custom::CidrAllocationWaiter1', {});
    template.hasResourceProperties('Custom::ResourcePoolWaiter2', {});
    template.resourceCountIs('AWS::EC2::IPAMPool', 0);
    template.resourceCountIs('AWS::EC2::VPCCidrBlock', 1);
  });

  test('creates custom resources with correct IAM permissions', () => {
    new IpamVPCPlanningTools(stack, 'IpamToolsPermissions', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc-permissions',
      useDirectAPICalls: true,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [{
          Action: 'sts:AssumeRole',
          Effect: 'Allow',
          Principal: { Service: 'lambda.amazonaws.com' },
        }],
      },
    });
  });

  test('creates log groups with retention policy', () => {
    new IpamVPCPlanningTools(stack, 'IpamToolsLogs', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
      vpc: vpc,
      vpcName: 'test-vpc-logs',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Logs::LogGroup', {
      RetentionInDays: 7,
    });
  });

  test('creates IPAM tools with custom region', () => {
    new IpamVPCPlanningTools(stack, 'IpamToolsRegion', {
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
        regionToMakeAPICalls: 'us-west-2',
      },
      vpc: vpc,
      vpcName: 'test-vpc-region',
      regionToCreatePlanningPools: 'us-west-2',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('Custom::CidrAllocationWaiter1', {});
  });
});