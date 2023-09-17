import * as path from 'path';
import * as core from 'aws-cdk-lib';

import {
  aws_iam as iam,
  aws_lambda,
  aws_events as events,
  aws_sqs as sqs,
  aws_events_targets as events_targets,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


/**
 * Propertys for EnableEnterpriseSupport
 */
export interface EnableEnterpriseSupport extends core.ResourceProps {
  /**
   * the Zone where the Remailer's DNS records are
   */
  readonly ccEmail: string;
}

/**
 * Creates A support case to enable Enterprise Support, when a new account is created with Control Tower
 * A Lambda is listening to event bridge
 */
export class ReMailer extends core.Resource {

  constructor(scope: constructs.Construct, id: string, props: EnableEnterpriseSupport) {
    super(scope, id, props);

    const addSupportFn = new aws_lambda.Function(this, 'Resource', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'enterpriseSupport.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/enterpriseSupport/')),
      timeout: core.Duration.seconds(60),
      memorySize: 256,
      environment: {
        SUPPORT_EMAIL: props.ccEmail,
      },
    });

    // allow the lambda to send emails
    addSupportFn.addToRolePolicy(new iam.PolicyStatement({
      actions: ['support:createCase'],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    }));

    // create a rule to trigger on new account creation
    const cTNewAccountRule = new events.Rule(this, 'ControlTowerEventRule', {
      eventPattern: {
        source: ['aws.controltower'],
        detail: {
          eventName: ['CreateManagedAccount'],
        },
      },
    });

    const eventDLQ = new sqs.Queue(this, 'eventDLQ');

    cTNewAccountRule.addTarget(new events_targets.LambdaFunction(addSupportFn, {
      deadLetterQueue: eventDLQ,
      maxEventAge: core.Duration.hours(2),
      retryAttempts: 2,
    }));

  }
}