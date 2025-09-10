import * as constructs from 'constructs';
import { CentralNotificationTopic } from './centralNotificationTopic';
import { CloudTrailStackSet, Severity } from './cloudTrailStackSet';

export class CloudTrailMonitoringExample extends constructs.Construct {
  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    // Central SNS topic for all notifications
    const centralTopic = new CentralNotificationTopic(this, 'CentralNotificationTopic', {
      organizationId: 'o-1234567890',
    });

    // Deploy monitoring to all accounts and regions via StackSet
    new CloudTrailStackSet(this, 'GlobalMonitoring', {
      eventRules: CloudTrailStackSet.COMMON_VIOLATION_RULES,
      targetAccounts: ['123456789012', '234567890123', '345678901234'],
      targetRegions: ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'],
      notificationTopicArn: centralTopic.topic.topicArn,
      organizationId: 'o-1234567890',
    });

    // Custom monitoring rules
    new CloudTrailStackSet(this, 'CustomMonitoring', {
      eventRules: [
        {
          eventNames: ['CreateUser'],
          description: 'IAM User Creation Violation',
          severity: Severity.CRITICAL,
        },
      ],
      targetAccounts: ['123456789012'],
      targetRegions: ['us-east-1'],
      notificationTopicArn: centralTopic.topic.topicArn,
    });
  }
}