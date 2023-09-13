import * as path from 'path';
import * as core from 'aws-cdk-lib';

import {
  aws_iam as iam,
  aws_sns as sns,
  aws_sns_subscriptions as sns_subscriptions,
  aws_lambda,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface EventToSNSProps {
  readonly topic: sns.Topic;
}

export interface EventToSlackProps {
  readonly slackUrl: string;
  readonly channelName: string;
  readonly webhookUsername: string;
}

export interface EventToTeamsProps {
  readonly teamsUrl: string;
  readonly snsTopic?: sns.Topic | undefined;
  readonly teamsImage: string;
}


export class EventToSNS extends core.Resource {

  function: aws_lambda.Function;

  constructor(scope: constructs.Construct, id: string, props: EventToSNSProps) {
    super(scope, id);

    this.function = new aws_lambda.Function(this, 'Resource', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'processEvent.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/')),
      timeout: core.Duration.seconds(15),
      memorySize: 256,
      environment: {
        SNSARN: props.topic.topicArn,
      },
    });
    this.function.addToRolePolicy(new iam.PolicyStatement({
      actions: ['sns:Publish'],
      resources: [props.topic.topicArn],
      effect: iam.Effect.ALLOW,
    }));

    // add the lambda to the resouce polic of the topic
    props.topic.grantPublish(this.function);
  }
}

export class EventToSlack extends core.Resource {

  function: aws_lambda.Function;

  constructor(scope: constructs.Construct, id: string, props: EventToSlackProps) {
    super(scope, id);

    this.function = new aws_lambda.Function(this, 'Resource', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'slack.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/')),
      timeout: core.Duration.seconds(15),
      memorySize: 256,
      environment: {
        SLACKURL: props.slackUrl,
        CHANNELNAME: props.channelName,
        USERNAME: props.webhookUsername,
      },
    });
  }
}

export class EventToTeams extends core.Resource {

  function: aws_lambda.Function;

  constructor(scope: constructs.Construct, id: string, props: EventToTeamsProps) {
    super(scope, id);

    this.function = new aws_lambda.Function(this, 'Resource', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'teams.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/')),
      timeout: core.Duration.seconds(15),
      memorySize: 256,
      environment: {
        TEAMSURL: props.teamsUrl,
        TEAMSIMAGE: props.teamsImage,
      },
    });

    if (props.snsTopic) {
      props.snsTopic.addSubscription(new sns_subscriptions.LambdaSubscription(this.function) );
    }
  }
}