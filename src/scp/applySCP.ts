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

import {
  IServiceControlPolicy,
} from './index';


export interface ApplySCPOnAccountCreationProps extends core.ResourceProps {
  /**
   * ServiceControlPolicys To Be applied when an account is created
   */
  readonly scp: IServiceControlPolicy[];
}

/**
 * Applys SCP to account when it is created
 */
export class ApplySCPOnAccountCreation extends core.Resource {

  constructor(scope: constructs.Construct, id: string, props: ApplySCPOnAccountCreationProps) {
    super(scope, id, props);

    let scpToApply: string[] = [];
    props.scp.forEach((scp) => {
      scpToApply.push(scp.id);
    });

    const attachPolicyFn = new aws_lambda.Function(this, 'Resource', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'applySCP.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/applySCP/')),
      timeout: core.Duration.seconds(60),
      memorySize: 256,
      environment: {
        SCP_ID: JSON.stringify(scpToApply),
      },
    });

    // allow the lambda to send emails
    attachPolicyFn.addToRolePolicy(new iam.PolicyStatement({
      actions: ['organizations:attachPolicy'],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    }));

    // create a rule to trigger on new account creation
    const cTNewAccountRule = new events.Rule(this, 'ControlTowerEventRuleApplySCPonNewAccount', {
      eventPattern: {
        source: ['aws.controltower'],
        detail: {
          eventName: ['CreateManagedAccount'],
        },
      },
    });

    const eventDLQ = new sqs.Queue(this, 'eventDLQ');

    cTNewAccountRule.addTarget(new events_targets.LambdaFunction(attachPolicyFn, {
      deadLetterQueue: eventDLQ,
      maxEventAge: core.Duration.hours(2),
      retryAttempts: 2,
    }));

  }
}