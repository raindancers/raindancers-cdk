import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_autoscaling as autoscaling,
  aws_iam as iam,
  aws_lambda as lambda,
  aws_logs as logs,
  aws_stepfunctions as stepFunctions,
  aws_stepfunctions_tasks as stepFunctionTasks,
  aws_secretsmanager as sm,
}

  from 'aws-cdk-lib';


// import { LifecycleHook } from 'aws-cdk-lib/aws-autoscaling';

import * as constructs from 'constructs';


export enum ComponentType {
  APP_CONNECTOR = 'AppConnector',
  PRIVATE_SERVICE_EDGE = 'PrivateServiceEdge',
}

export interface StepFunctionLambdaProps {
  componentType: ComponentType;
  controlAPIKeySecretName: string;
  asg: autoscaling.AutoScalingGroup;
  drainTime: core.Duration;
}

export class DrainAndDeleteComponent extends constructs.Construct {

  stateMachine: stepFunctions.StateMachine;

  constructor(scope: constructs.Construct, id: string, props: StepFunctionLambdaProps) {
    super(scope, id);


    const apiKey = sm.Secret.fromSecretNameV2(this, 'apiKey', props.controlAPIKeySecretName);


    const disableFunction = new lambda.Function(this, 'disableFunction', {
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/zscaler/'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_12.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      environment: {
        API_KEY_SECRET_NAME: props.controlAPIKeySecretName,
        TYPE: props.componentType,
      },
      handler: 'drainDeleteComponents.disable_component_to_drain_traffic',
      timeout: core.Duration.seconds(60),
      logRetention: logs.RetentionDays.ONE_MONTH,

    });

    disableFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['ec2:describeInstances'],
      resources: ['*'],
    }));

    apiKey.grantRead(disableFunction);

    const deleteFunction = new lambda.Function(this, 'deleteFunction', {
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../projectAssets/lambda/zscaler/'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_12.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      environment: {
        API_KEY_SECRET_NAME: props.controlAPIKeySecretName,
        TYPE: props.componentType,
      },
      handler: 'drainDeleteComponents.delete_component_continue',
      timeout: core.Duration.seconds(60),
      logRetention: logs.RetentionDays.ONE_MONTH,

    });

    deleteFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['autoscaling:CompleteLifecycleAction'],
      resources: [`arn:aws:autoscaling:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:autoScalingGroup:*:autoScalingGroupName/${props.asg.autoScalingGroupName}`],
    }));

    apiKey.grantRead(deleteFunction);


    // build the step function
    const disableJob = new stepFunctionTasks.LambdaInvoke(this, 'disable-job-fn', {
      lambdaFunction: disableFunction,
    });

    const waitTask = new stepFunctions.Wait(this, 'state-machine-wait-job', {
      time: stepFunctions.WaitTime.duration(props.drainTime),
    });

    const deleteJob = new stepFunctionTasks.LambdaInvoke(this, 'delete-job-fn', {
      lambdaFunction: deleteFunction,
    });

    this.stateMachine = new stepFunctions.StateMachine(this, 'state-machine', {
      definitionBody: stepFunctions.DefinitionBody.fromChainable(
        disableJob
          .next(waitTask)
          .next(deleteJob),
      ),
      timeout: props.drainTime.plus(core.Duration.minutes(3)),
    });


  }
};

