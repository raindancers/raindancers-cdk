import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CentralNotificationTopic } from '../../src/cloudtrailMonitor/centralNotificationTopic';

describe('CentralNotificationTopic', () => {
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'TestStack');
  });

  test('creates SNS topic with default configuration', () => {
    new CentralNotificationTopic(stack, 'TestTopic');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::SNS::Topic', {
      DisplayName: 'CloudTrail Policy Violations',
    });
  });

  test('creates SNS topic with custom name', () => {
    new CentralNotificationTopic(stack, 'TestTopic', {
      topicName: 'CustomAlerts',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::SNS::Topic', {
      DisplayName: 'CustomAlerts',
      TopicName: 'CustomAlerts',
    });
  });

  test('adds organization permissions', () => {
    new CentralNotificationTopic(stack, 'TestTopic', {
      organizationId: 'o-1234567890',
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::SNS::TopicPolicy', 1);
  });

  test('adds account-specific permissions', () => {
    new CentralNotificationTopic(stack, 'TestTopic', {
      allowedAccounts: ['123456789012', '234567890123'],
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::SNS::TopicPolicy', 1);
  });

  test('always includes EventBridge permissions', () => {
    new CentralNotificationTopic(stack, 'TestTopic');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::SNS::TopicPolicy', {
      PolicyDocument: {
        Statement: [
          {
            Sid: 'AllowEventBridgePublish',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Action: 'sns:Publish',
          },
        ],
      },
    });
  });
});