import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_lambda as lambda,
  aws_iam as iam,
  aws_codebuild as codebuild,
  aws_s3_assets as s3assets,
  aws_events as events,
  aws_events_targets as targets,
  aws_sqs as sqs,
  custom_resources as cr,
  aws_logs as logs,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

export enum TemplateStack {
  IAM_ALIAS = 'iamAlias'
}

export interface Template {
  readonly stackName: string | TemplateStack;
  readonly regions: string[];
}

export interface CdkOrgBootstrapperProps {
  readonly cdkBootstrapRootQualifier?: string | undefined;// what to qualify the cdkbootstrap with
  readonly cdkBootstrapRootRegions: string[];// what regions to boostrap
  readonly templateStacks?: Template[] | undefined;
  readonly localStacksPath?: string | undefined;
  readonly localTemplateStacks?: Template[] | undefined;
  /**
   * @default Just trust this account
   */
  readonly trustAccounts?: string[] | undefined; // if this is set, do not use this account as
  readonly account?: string | undefined;
}

export class CdkOrgBootstrapper extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: CdkOrgBootstrapperProps ) {
    super(scope, id);

    if (props.localStacksPath || props.localTemplateStacks) {
      throw new Error('Both localStacksPath and LocalTemplateStacks must been specified if local stacks are used');
    }

    // Create an asset for the Codebuild Job
    const codebuildAsset = new s3assets.Asset(this, 'codebuildAssets', {
      path: path.join(__dirname, '../../bootstraptemplates'),
    });

    // create the codebuild project that uses the asset
    let bootStrapperCodeBuild = new codebuild.Project(this, 'Codebuildproject', {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
        computeType: codebuild.ComputeType.MEDIUM,
      },
      source: codebuild.Source.s3({
        bucket: codebuildAsset.bucket,
        path: codebuildAsset.s3ObjectKey,
      }),
    });

    let localStacks: string[] = [];
    if (props.localTemplateStacks && props.localStacksPath) {

      const secondaryCodebuildAsset = new s3assets.Asset(this, 'codebuildAssets', {
        path: path.join(__dirname, props.localStacksPath),
      });

      bootStrapperCodeBuild.addSecondarySource(
        codebuild.Source.s3({
          bucket: secondaryCodebuildAsset.bucket,
          path: codebuildAsset.s3ObjectKey,
          identifier: 'localstacks',
        }),
      );
      localStacks = props.localTemplateStacks;
    }

    // This allows the code build job permission to use the ControlTowerExecutionRole
    bootStrapperCodeBuild.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['sts:AssumeRole'],
        resources: ['arn:aws:iam::*:role/AWSControlTowerExecution'],
        effect: iam.Effect.ALLOW,
      }),
    );

    // can't pass undefined to environment
    let templateStacks: Template[] = [];
    if (props.templateStacks) {
      templateStacks = props.templateStacks;
    }


    // this is the lambda that processes the data and starts the codebuild project
    const bootStrapperLambda = new lambda.SingletonFunction(this, 'BootstrapLambda', {
      uuid: 'a7e4f740-4ff1-11e8-4c3d-fd7ae01bbebc',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/bootstrapper'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_11.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      environment: {
        CDK_BOOTSTRAP_QUALIFER: props.cdkBootstrapRootQualifier ?? 'hnb659fds',
        CDK_BOOTSTRAP_REGIONS: JSON.stringify(props.cdkBootstrapRootRegions),
        TRUSTS: JSON.stringify(props.trustAccounts ?? [core.Aws.ACCOUNT_ID] ),
        CODEBUILD_PROJECT_NAME: bootStrapperCodeBuild.projectName,
        TEMPLATE_BOOTSTRAP_STACKS: JSON.stringify(templateStacks),
        LOCAL_BOOTSTRAP_STACKS: JSON.stringify(localStacks),
      },
      handler: 'bootstrapper.on_event',
      timeout: core.Duration.seconds(300),
      runtime: lambda.Runtime.PYTHON_3_11,
      logRetention: logs.RetentionDays.ONE_MONTH,
    });

    // allow it to find the AccountId
    bootStrapperLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'organizations:ListAccounts',
          'organizations:DescribeAccount',
          'ssm:PutParameter',
        ],
        resources: ['*'],
      }),
    );

    // allow it to start the code build job.
    bootStrapperLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'codebuild:StartBuild',
        ],
        resources: [bootStrapperCodeBuild.projectArn],
      }),
    );

    // if there is an account to bootstrap, then this is will be a applicaiton bootstrap
    // and we should start the lambda with a custom resource.
    if (props.account) {

      const myProvider = new cr.Provider(this, 'MyProvider', {
        onEventHandler: bootStrapperLambda,
        logRetention: logs.RetentionDays.ONE_DAY, // default is INFINITE
      });

      // start the codebuild via the lambda.
      new core.CustomResource(this, 'startCodebuildViaLambda', {
        serviceToken: myProvider.serviceToken,
        resourceType: 'Custom::StartCodeBuildviaLambda',
        properties: {
          AccountId: props.account,
        },
      });

    } else {

      //create a rule to trigger on new account creation
      const cTNewAccountRule = new events.Rule(this, 'ControlTowerEventRule', {
        eventPattern: {
          source: ['aws.controltower'],
          detail: {
            eventName: ['CreateManagedAccount'],
          },
        },
      });

      const eventDLQ = new sqs.Queue(this, 'eventDLQ');

      cTNewAccountRule.addTarget(new targets.LambdaFunction(bootStrapperLambda, {
        deadLetterQueue: eventDLQ,
        maxEventAge: core.Duration.hours(2),
        retryAttempts: 2,
      }));

    }

  }
}