import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EnterpriseZoneHelpers } from '../../../src/network/dns/enterpriseZonehelpers';

// Mock the lambda asset to avoid missing file error
jest.mock('aws-cdk-lib/aws-lambda', () => {
  const actual = jest.requireActual('aws-cdk-lib/aws-lambda');
  return {
    ...actual,
    Code: {
      ...actual.Code,
      fromAsset: jest.fn(() => actual.Code.fromInline('def on_event(event, context): return {"PhysicalResourceId": "test"}')),
    },
  };
});

describe('EnterpriseZoneHelpers', () => {
  let stack: cdk.Stack;

  beforeEach(() => {
    stack = new cdk.Stack();
  });

  test('creates enterprise zone helpers with required properties', () => {
    const helpers = new EnterpriseZoneHelpers(stack, 'TestHelpers', {
      zoneId: 'Z123456789',
      region: 'us-east-1',
      searchTag: new cdk.Tag('Environment', 'Production'),
    });

    expect(helpers.customResource).toBeDefined();

    const template = Template.fromStack(stack);

    template.hasResourceProperties('Custom::AssociateInternalZone', {
      ZoneId: 'Z123456789',
      Region: 'us-east-1',
      SearchTagKey: 'Environment',
      SearchTagValue: 'Production',
    });
  });

  test('creates singleton lambda function', () => {
    new EnterpriseZoneHelpers(stack, 'TestHelpers2', {
      zoneId: 'Z987654321',
      region: 'us-west-2',
      searchTag: new cdk.Tag('Team', 'NetworkOps'),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'associateCentralVPC.on_event',
      Runtime: 'python3.9',
    });
  });

  test('lambda has correct IAM permissions', () => {
    new EnterpriseZoneHelpers(stack, 'TestHelpers3', {
      zoneId: 'Z111111111',
      region: 'eu-west-1',
      searchTag: new cdk.Tag('Project', 'DNS'),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [{
          Action: [
            'sts:AssumeRole',
            'route53:AssociateVpcWithHostedZone',
            'route53:DisassociateVpcFromHostedZone',
            'ec2:DescribeVpcs',
          ],
          Effect: 'Allow',
          Resource: '*',
        }],
      },
    });
  });

  test('creates custom resource provider', () => {
    new EnterpriseZoneHelpers(stack, 'TestHelpers4', {
      zoneId: 'Z222222222',
      region: 'ap-southeast-1',
      searchTag: new cdk.Tag('Owner', 'Platform'),
    });

    const template = Template.fromStack(stack);

    const resources = template.findResources('Custom::AssociateInternalZone');
    const resource = Object.values(resources)[0] as any;
    expect(resource.Properties.ServiceToken).toBeDefined();
    expect(resource.Properties.ServiceToken['Fn::GetAtt']).toBeDefined();
  });
});