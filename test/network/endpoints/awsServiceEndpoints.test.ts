import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { AwsServiceEndPoints } from '../../../src/network/endpoints/awsServiceEndpoints';

describe('AwsServiceEndPoints', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack(undefined, undefined, {
      env: { account: '123456789012', region: 'us-east-1' },
    });
    vpc = new ec2.Vpc(stack, 'TestVpc', {
      subnetConfiguration: [
        { name: 'Private', subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      ],
    });
  });

  test('creates interface VPC endpoints', () => {
    new AwsServiceEndPoints(stack, 'TestEndpoints', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.S3],
      subnetGroup: 'Private',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPCEndpoint', {
      VpcEndpointType: 'Interface',
    });
  });

  test('creates S3 gateway endpoint when enabled', () => {
    new AwsServiceEndPoints(stack, 'TestS3Gateway', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.S3],
      subnetGroup: 'Private',
      s3GatewayInterface: true,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPCEndpoint', {
      VpcEndpointType: 'Gateway',
    });
  });

  test('creates DynamoDB gateway endpoint when enabled', () => {
    new AwsServiceEndPoints(stack, 'TestDynamoGateway', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.DYNAMODB],
      subnetGroup: 'Private',
      dynamoDBGatewayInterface: true,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPCEndpoint', {
      VpcEndpointType: 'Gateway',
    });
  });

  test('creates multiple service endpoints', () => {
    new AwsServiceEndPoints(stack, 'TestMultipleEndpoints', {
      vpc,
      services: [
        ec2.InterfaceVpcEndpointAwsService.S3,
        ec2.InterfaceVpcEndpointAwsService.EC2,
        ec2.InterfaceVpcEndpointAwsService.LAMBDA,
      ],
      subnetGroup: 'Private',
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::VPCEndpoint', 3);
  });

  test('creates endpoints with security group', () => {
    new AwsServiceEndPoints(stack, 'TestEndpointsSG', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.EC2],
      subnetGroup: 'Private',
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 1);
  });
});