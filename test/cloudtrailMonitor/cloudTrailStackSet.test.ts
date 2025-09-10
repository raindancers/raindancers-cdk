import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CloudTrailStackSet, Severity } from '../../src/cloudtrailMonitor/cloudTrailStackSet';

describe('CloudTrailStackSet', () => {
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'TestStack');
  });

  test('creates StackSet with basic configuration', () => {
    new CloudTrailStackSet(stack, 'TestStackSet', {
      eventRules: [{
        eventNames: ['CreateUser'],
        description: 'Test rule',
        severity: Severity.HIGH,
      }],
      targetAccounts: ['123456789012'],
      targetRegions: ['us-east-1'],
      notificationTopicArn: 'arn:aws:sns:us-east-1:123456789012:test-topic',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudFormation::StackSet', {
      StackSetName: 'CloudTrailEventMonitor',
      Description: 'CloudTrail event monitoring across accounts and regions',
      PermissionModel: 'SELF_MANAGED',
    });
  });

  test('creates StackSet with organization configuration', () => {
    new CloudTrailStackSet(stack, 'TestStackSet', {
      eventRules: CloudTrailStackSet.COMMON_VIOLATION_RULES,
      targetAccounts: ['123456789012'],
      targetRegions: ['us-east-1'],
      notificationTopicArn: 'arn:aws:sns:us-east-1:123456789012:test-topic',
      organizationId: 'o-1234567890',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudFormation::StackSet', {
      PermissionModel: 'SERVICE_MANAGED',
      AutoDeployment: {
        Enabled: true,
        RetainStacksOnAccountRemoval: false,
      },
    });
  });

  test('creates Lambda function for stack instances', () => {
    new CloudTrailStackSet(stack, 'TestStackSet', {
      eventRules: [{
        eventNames: ['CreateUser'],
        description: 'Test rule',
        severity: Severity.CRITICAL,
      }],
      targetAccounts: ['123456789012'],
      targetRegions: ['us-east-1'],
      notificationTopicArn: 'arn:aws:sns:us-east-1:123456789012:test-topic',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
      Runtime: 'python3.11',
      Handler: 'stackInstances.handler',
      Timeout: 900,
    });
  });

  test('creates custom resource for stack instances', () => {
    new CloudTrailStackSet(stack, 'TestStackSet', {
      eventRules: [{
        eventNames: ['CreateUser'],
        description: 'Test rule',
        severity: Severity.LOW,
      }],
      targetAccounts: ['123456789012', '234567890123'],
      targetRegions: ['us-east-1', 'us-west-2'],
      notificationTopicArn: 'arn:aws:sns:us-east-1:123456789012:test-topic',
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs('Custom::StackInstances', 1);
  });
});