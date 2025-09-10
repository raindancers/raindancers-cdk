import {
  aws_sns as sns,
  aws_iam as iam,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface CentralNotificationTopicProps {
  readonly topicName?: string;
  readonly organizationId?: string;
  readonly allowedAccounts?: string[];
}

export class CentralNotificationTopic extends constructs.Construct {
  readonly topic: sns.Topic;

  constructor(scope: constructs.Construct, id: string, props: CentralNotificationTopicProps = {}) {
    super(scope, id);

    this.topic = new sns.Topic(this, 'Topic', {
      displayName: props.topicName ?? 'CloudTrail Policy Violations',
      topicName: props.topicName,
    });

    if (props.organizationId) {
      this.topic.addToResourcePolicy(new iam.PolicyStatement({
        sid: 'AllowOrganizationPublish',
        effect: iam.Effect.ALLOW,
        principals: [new iam.OrganizationPrincipal(props.organizationId)],
        actions: ['sns:Publish'],
        resources: [this.topic.topicArn],
      }));
    }

    if (props.allowedAccounts) {
      this.topic.addToResourcePolicy(new iam.PolicyStatement({
        sid: 'AllowAccountsPublish',
        effect: iam.Effect.ALLOW,
        principals: props.allowedAccounts.map(account => new iam.AccountPrincipal(account)),
        actions: ['sns:Publish'],
        resources: [this.topic.topicArn],
      }));
    }

    this.topic.addToResourcePolicy(new iam.PolicyStatement({
      sid: 'AllowEventBridgePublish',
      effect: iam.Effect.ALLOW,
      principals: [new iam.ServicePrincipal('events.amazonaws.com')],
      actions: ['sns:Publish'],
      resources: [this.topic.topicArn],
    }));
  }
}