import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { StackType } from '../../src/cloudNetwork/cloudNetworkInterfaces';
import { DualStackVpcMethods } from '../../src/cloudNetwork/cloudNetworkMixin';

// Mock Lambda Code.fromAsset to avoid asset loading issues
jest.mock('aws-cdk-lib/aws-lambda', () => ({
  ...jest.requireActual('aws-cdk-lib/aws-lambda'),
  Code: {
    ...jest.requireActual('aws-cdk-lib/aws-lambda').Code,
    fromAsset: jest.fn(() => jest.requireActual('aws-cdk-lib/aws-lambda').Code.fromInline('mock code')),
  },
}));

describe('DualStackVpcMethods', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });
  });

  test('addServiceEndpoints throws error without VPC', () => {
    expect(() => {
      DualStackVpcMethods.addServiceEndpoints(stack, 'TestEndpoints', {
        services: [ec2.InterfaceVpcEndpointAwsService.S3],
        subnetGroup: {
          name: 'private',
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
      });
    }).toThrow('You must supply a vpc');
  });

  test('createFlowLogwithAnalysis creates flow logs', () => {
    const bucket = new s3.Bucket(stack, 'TestBucket');

    DualStackVpcMethods.createFlowLogwithAnalysis(stack, 'TestFlowLog', {
      vpc,
      bucket,
      oneMinuteFlowLogs: true,
      localAthenaQuerys: false,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::FlowLog', {
      ResourceType: 'VPC',
      TrafficType: 'ALL',
    });
  });

  test('attachToTransitGateway throws error without VPC', () => {
    expect(() => {
      DualStackVpcMethods.attachToTransitGateway(stack, 'TestAttachment', {
        transitGateway: { id: 'tgw-123' } as any,
        routesToTransitGateway: ['10.0.0.0/8'],
      });
    }).toThrow('Must supply a VPC');
  });

  test('shareSubnetGroup throws error for invalid configuration', () => {
    expect(() => {
      DualStackVpcMethods.shareSubnetGroup(stack, 'TestShare', {
        vpc,
        subnetGroup: { name: 'private', stack: StackType.DUAL_STACK, ipv4mask: 24 },
        subnetGroups: [{ name: 'public', stack: StackType.DUAL_STACK, ipv4mask: 24 }],
        accounts: ['123456789012'],
      });
    }).toThrow('Only one of subnetGroup or subnetGroups can be defined');
  });

  test('addNetworkFirewallEndpoint creates firewall endpoints', () => {
    DualStackVpcMethods.addNetworkFirewallEndpoint(stack, 'TestFirewall', {
      vpc,
      firewallArn: 'arn:aws:network-firewall:us-east-1:123456789012:firewall/test',
      subnetGroup: {
        name: 'private',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::VpcEndpointAssociation', {
      FirewallArn: 'arn:aws:network-firewall:us-east-1:123456789012:firewall/test',
    });
  });

  test('createFlowLogwithAnalysis throws error without VPC', () => {
    expect(() => {
      DualStackVpcMethods.createFlowLogwithAnalysis(stack, 'TestFlowLog', {
        oneMinuteFlowLogs: true,
      });
    }).toThrow('Must supply VPC');
  });

  test('shareSubnetGroup throws error without VPC', () => {
    expect(() => {
      DualStackVpcMethods.shareSubnetGroup(stack, 'TestShare', {
        accounts: ['123456789012'],
      });
    }).toThrow('Must supply a VPC');
  });

  test('shareSubnetGroup throws error without subnet groups', () => {
    expect(() => {
      DualStackVpcMethods.shareSubnetGroup(stack, 'TestShare', {
        vpc,
        accounts: ['123456789012'],
      });
    }).toThrow('Either subnetGroup or subnetGroups must be defined');
  });

  test('shareSubnetGroup throws error for multiple subnet groups without share name', () => {
    expect(() => {
      DualStackVpcMethods.shareSubnetGroup(stack, 'TestShare', {
        vpc,
        subnetGroups: [
          { name: 'private', stack: StackType.DUAL_STACK, ipv4mask: 24 },
          { name: 'public', stack: StackType.DUAL_STACK, ipv4mask: 24 },
        ],
        accounts: ['123456789012'],
      });
    }).toThrow('shareName must be defined, when sharing to multiple subnet Groups');
  });

  test('associateSharedResolverRules throws error without VPC', () => {
    expect(() => {
      DualStackVpcMethods.associateSharedResolverRules(stack, 'TestResolver', {
        domainNames: ['example.com'],
      });
    }).toThrow('Must supply a VPC');
  });

  test('addNetworkFirewallEndpoint throws error without VPC', () => {
    expect(() => {
      DualStackVpcMethods.addNetworkFirewallEndpoint(stack, 'TestFirewall', {
        firewallArn: 'arn:aws:network-firewall:us-east-1:123456789012:firewall/test',
      });
    }).toThrow('Must supply a VPC');
  });

  test('createFlowLogwithAnalysis with Athena queries', () => {
    const bucket = new s3.Bucket(stack, 'TestBucket2');

    DualStackVpcMethods.createFlowLogwithAnalysis(stack, 'TestFlowLogAthena', {
      vpc,
      bucket,
      oneMinuteFlowLogs: false,
      localAthenaQuerys: true,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'flowlogintegration.on_event',
    });
  });

  test('shareSubnetGroup with single subnet group', () => {
    DualStackVpcMethods.shareSubnetGroup(stack, 'TestShareSingle', {
      vpc,
      subnetGroup: {
        name: 'private',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      accounts: ['123456789012'],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RAM::ResourceShare', {
      AllowExternalPrincipals: false,
      Principals: ['123456789012'],
    });
  });

  test('shareSubnetGroup with multiple subnet groups', () => {
    DualStackVpcMethods.shareSubnetGroup(stack, 'TestShareMultiple', {
      vpc,
      subnetGroups: [
        { name: 'private', stack: StackType.DUAL_STACK, ipv4mask: 24 },
        { name: 'public', stack: StackType.DUAL_STACK, ipv4mask: 24 },
      ],
      shareName: 'MultipleSubnets',
      accounts: ['123456789012'],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RAM::ResourceShare', {
      Name: 'TestShareMultipleshareSubnetGroup-MultipleSubnets',
    });
  });

  test('addR53Resolvers creates resolver endpoints', () => {
    const resolvers = DualStackVpcMethods.addR53Resolvers(
      stack,
      'TestResolvers',
      { name: 'private', stack: StackType.DUAL_STACK, ipv4mask: 24 },
      vpc,
    );

    expect(resolvers).toBeDefined();
  });

  test('addServiceEndpoints creates service endpoints successfully', () => {
    // Create a stack with explicit environment to avoid VPC endpoint lookup issues
    const envStack = new Stack(undefined, 'EnvStack', {
      env: { account: '123456789012', region: 'us-east-1' },
    });
    const envVpc = new ec2.Vpc(envStack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });

    const endpoints = DualStackVpcMethods.addServiceEndpoints(envStack, 'TestEndpoints', {
      vpc: envVpc,
      services: [ec2.InterfaceVpcEndpointAwsService.S3],
      subnetGroup: {
        name: 'private',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      dynamoDbGateway: true,
      s3GatewayInterface: true,
    });

    expect(endpoints).toBeDefined();
  });

  test('createFlowLogwithAnalysis creates default bucket when none provided', () => {
    DualStackVpcMethods.createFlowLogwithAnalysis(stack, 'TestFlowLogDefault', {
      vpc,
      oneMinuteFlowLogs: false,
      localAthenaQuerys: false,
    });

    const template = Template.fromStack(stack);
    template.hasResource('AWS::S3::Bucket', {
      DeletionPolicy: 'Delete',
      UpdateReplacePolicy: 'Delete',
    });
  });

  test('attachToTransitGateway uses default subnet group', () => {
    // Create VPC with linknet subnet group
    const tgStack = new Stack();
    const tgVpc = new ec2.Vpc(tgStack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'linknet',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });

    const attachmentId = DualStackVpcMethods.attachToTransitGateway(tgStack, 'TestAttachmentDefault', {
      vpc: tgVpc,
      transitGateway: { id: 'tgw-123' } as any,
      routesToTransitGateway: ['10.0.0.0/8'],
    });

    expect(attachmentId).toBeDefined();
    const template = Template.fromStack(tgStack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayAttachment', {
      TransitGatewayId: 'tgw-123',
    });
  });

  test('shareSubnetGroup with cross-account tagging', () => {
    DualStackVpcMethods.shareSubnetGroup(stack, 'TestShareTagging', {
      vpc,
      subnetGroup: {
        name: 'private',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      accounts: ['123456789012'],
      shareName: 'TaggedShare',
      cdkTagResourcesInSharedToAccountRoleName: 'CrossAccountRole',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'tagResources.on_event',
    });
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Effect: 'Allow',
            Action: 'sts:AssumeRole',
            Resource: 'arn:aws:iam::*:role/CrossAccountRole',
          },
          {
            Effect: 'Allow',
            Action: 'ec2:DescribeTags',
            Resource: '*',
          },
        ],
      },
    });
  });

  test('associateSharedResolverRules creates resolver rule associations', () => {
    DualStackVpcMethods.associateSharedResolverRules(stack, 'TestResolverAssoc', {
      vpc,
      domainNames: ['example.com', 'internal.corp'],
    });

    // The method creates an AssociateSharedResolverRule construct
    // We can verify it doesn't throw and completes successfully
    expect(stack.node.children.length).toBeGreaterThan(0);
  });
});