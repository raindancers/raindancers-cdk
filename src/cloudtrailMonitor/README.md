# CloudTrail StackSet Monitor

Deploy CloudTrail event monitoring across all AWS accounts and regions using CloudFormation StackSets.

## Architecture

```
StackSet → EventBridge Rules (per account/region) → SNS Topic → Notifications
```

**Benefits:**
- **True Cross-Account/Region**: Deploys monitoring to each target account/region
- **Centralized Notifications**: All events route to a single SNS topic
- **Organization Support**: Auto-deploy to new accounts with AWS Organizations
- **Declarative Management**: Full lifecycle management via CDK

## Deployment Location

**Deploy this construct in your AWS Organization's Management Account** or a dedicated Security/Audit account with StackSet administration permissions.

**Why Management Account:**
- Has permissions to deploy StackSets across all organization accounts
- Can use `SERVICE_MANAGED` permission model with `organizationId`
- Centralized security monitoring and alerting
- Simplified cross-account IAM role management

## Features

- **StackSet Deployment**: Uses CloudFormation StackSets for multi-account deployment
- **Custom Resource**: Lambda-backed resource manages stack instances
- **Predefined Rules**: Common security violation patterns included
- **Direct SNS Integration**: EventBridge rules publish directly to SNS

## Usage

```typescript
import { CloudTrailStackSet, CentralNotificationTopic, Severity } from './cloudtrailMonitor';

// Create central SNS topic with cross-account permissions
const centralTopic = new CentralNotificationTopic(this, 'CentralTopic', {
  organizationId: 'o-1234567890', // Allows all org accounts to publish
});

// Deploy monitoring with common rules
new CloudTrailStackSet(this, 'GlobalMonitoring', {
  eventRules: CloudTrailStackSet.COMMON_VIOLATION_RULES,
  targetAccounts: ['123456789012', '234567890123'],
  targetRegions: ['us-east-1', 'us-west-2', 'eu-west-1'],
  notificationTopicArn: centralTopic.topic.topicArn,
  organizationId: 'o-1234567890',
});

// Custom monitoring rules
new CloudTrailStackSet(this, 'CustomMonitoring', {
  eventRules: [
    {
      eventNames: ['CreateUser', 'CreateAccessKey'],
      description: 'IAM User Creation Violation',
      severity: Severity.CRITICAL,
    },
  ],
  targetAccounts: ['123456789012'],
  targetRegions: ['us-east-1'],
  notificationTopicArn: centralTopic.topic.topicArn,
});
```

## Central Notification Topic

The `CentralNotificationTopic` construct creates an SNS topic with proper cross-account permissions:

```typescript
// Organization-wide permissions
new CentralNotificationTopic(this, 'OrgTopic', {
  organizationId: 'o-1234567890',
});

// Specific account permissions
new CentralNotificationTopic(this, 'AccountTopic', {
  allowedAccounts: ['123456789012', '234567890123'],
});
```

## Common Violation Rules

Pre-configured rules monitor:
- **IAM User Creation**: CreateUser, CreateAccessKey (HIGH severity)
- **IAM Policy Changes**: Policy attachments and modifications (MEDIUM)
- **CloudTrail Tampering**: Trail deletion, logging changes (CRITICAL)
- **Network Security**: VPC and security group changes (MEDIUM)
- **S3 Security**: Bucket policy and ACL changes (HIGH)

## Message Format

Notifications include severity, event details, and context:

`[CRITICAL] CloudTrail Policy Violation: CreateUser by IAMUser from 192.168.1.1 in 123456789012/us-east-1 at 2024-01-01T12:00:00Z`