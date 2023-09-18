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
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface BootstrapStacks {
  readonly stackName: string;
  readonly regions: string[];
}


export interface CdkOrgBootstrapperProps {
  readonly cdkBootstrapRootQualifier: string;// what to qualify the cdkbootstrap with
  readonly cdkBootstrapRootRegions: string[];// what regions to boostrap
}

export class CdkOrgBootstrapper extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: CdkOrgBootstrapperProps ) {
    super(scope, id);

    // Create an asset for the Codebuild Job
    const codebuildAsset = new s3assets.Asset(this, 'codebuildAssets', {
      path: './bootstraptemplates',
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

    // This allows the code build job permission to use the ControlTowerExecutionRole
    bootStrapperCodeBuild.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['sts:AssumeRole'],
        resources: ['arn:aws:iam::*:role/AWSControlTowerExecution'],
        effect: iam.Effect.ALLOW,
      }),
    );

    // this is the lambda that processes the data and starts the codebuild project
    const bootStrapperLambda = new lambda.SingletonFunction(this, 'BootstrapLambda', {
      uuid: 'a7e4f740-4ff1-11e8-4c3d-fd7ae01bbebc',
      code: lambda.Code.fromAsset(path.join('../../lambda/bootstrapper'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_11.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      environment: {
        CDK_BOOTSTRAP_QUALIFER: props.cdkBootstrapRootQualifier,
        CDK_BOOTSTRAP_REGIONS: JSON.stringify(props.cdkBootstrapRootRegions),
        ROOT_ACCOUNT_ID: core.Aws.ACCOUNT_ID,
        CODEBUILD_PROJECT_NAME: bootStrapperCodeBuild.projectName,
      },
      handler: 'bootstrapper.on_event',
      timeout: core.Duration.seconds(300),
      runtime: lambda.Runtime.PYTHON_3_9,
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