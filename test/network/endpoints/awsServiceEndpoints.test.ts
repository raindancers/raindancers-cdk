import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { AwsServiceEndPoints } from '../../../src/network/endpoints/awsServiceEndpoints';

jest.spyOn(console, 'warn').mockImplementation();

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

  test('restricts access to VPC CIDR by default', () => {
    new AwsServiceEndPoints(stack, 'TestRestrictedEndpoints', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.S3],
      subnetGroup: 'Private',
    });

    const template = Template.fromStack(stack);
    const sgResources = template.findResources('AWS::EC2::SecurityGroup');
    const sgValues = Object.values(sgResources);
    const hasVpcCidrRule = sgValues.some((sg: any) =>
      sg.Properties.SecurityGroupIngress?.some((rule: any) =>
        rule.CidrIp && typeof rule.CidrIp === 'object' && rule.CidrIp['Fn::GetAtt'] && rule.Description === 'Allow from VPC IPv4',
      ),
    );
    expect(hasVpcCidrRule).toBe(true);
  });

  test('allows custom security group', () => {
    const customSg = new ec2.SecurityGroup(stack, 'CustomSG', { vpc });
    new AwsServiceEndPoints(stack, 'TestCustomSG', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.S3],
      subnetGroup: 'Private',
      securityGroup: customSg,
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 1);
  });

  test('throws error when both securityGroup and restrictToVpcCidrsOnly are provided', () => {
    const customSg = new ec2.SecurityGroup(stack, 'CustomSG', { vpc });
    expect(() => {
      new AwsServiceEndPoints(stack, 'TestConflict', {
        vpc,
        services: [ec2.InterfaceVpcEndpointAwsService.S3],
        subnetGroup: 'Private',
        securityGroup: customSg,
        restrictToVpcCidrsOnly: true,
      });
    }).toThrow('securityGroup and restrictToVpcCidrsOnly are mutually exclusive');
  });

  test('allows unrestricted access when restrictToVpcCidrsOnly is false', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    new AwsServiceEndPoints(stack, 'TestUnrestricted', {
      vpc,
      services: [ec2.InterfaceVpcEndpointAwsService.S3],
      subnetGroup: 'Private',
      restrictToVpcCidrsOnly: false,
    });

    const template = Template.fromStack(stack);
    const sgResources = template.findResources('AWS::EC2::SecurityGroup');
    const sgValues = Object.values(sgResources);
    const hasUnrestrictedRule = sgValues.some((sg: any) =>
      sg.Properties.SecurityGroupIngress?.some((rule: any) => rule.CidrIp === '0.0.0.0/0'),
    );
    expect(hasUnrestrictedRule).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('WARNING: VPC endpoint security group allows unrestricted access'),
    );
    consoleWarnSpy.mockRestore();
  });
});