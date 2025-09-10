import * as path from 'path';
import {
  aws_cloudformation as cfn,
  aws_iam as iam,
  aws_lambda as lambda,
  CustomResource,
  Duration,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

export enum Severity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface CloudTrailEventRule {
  readonly eventNames: string[];
  readonly description: string;
  readonly severity: Severity;
}

export interface CloudTrailStackSetProps {
  readonly eventRules: CloudTrailEventRule[];
  readonly targetAccounts: string[];
  readonly targetRegions: string[];
  readonly notificationTopicArn: string;
  readonly stackSetName?: string;
  readonly organizationId?: string;
}

export class CloudTrailStackSet extends constructs.Construct {

  public static readonly COMMON_VIOLATION_RULES: CloudTrailEventRule[] = [
    {
      eventNames: ['CreateUser', 'CreateAccessKey'],
      description: 'IAM User Creation - Policy Violation',
      severity: Severity.CRITICAL,
    },
    {
      eventNames: ['PutUserPolicy', 'AttachUserPolicy', 'CreateRole'],
      description: 'IAM Policy Changes',
      severity: Severity.MEDIUM,
    },
    {
      eventNames: ['DeleteTrail', 'StopLogging', 'PutEventSelectors'],
      description: 'CloudTrail Configuration Changes',
      severity: Severity.CRITICAL,
    },
    {
      eventNames: ['CreateVpc', 'DeleteVpc', 'AuthorizeSecurityGroupIngress'],
      description: 'Network Security Changes',
      severity: Severity.MEDIUM,
    },
    {
      eventNames: ['PutBucketPolicy', 'DeleteBucketPolicy', 'PutBucketAcl'],
      description: 'S3 Security Policy Changes',
      severity: Severity.HIGH,
    },
  ];

  readonly stackSet: cfn.CfnStackSet;
  readonly stackSetRole: iam.Role;

  constructor(scope: constructs.Construct, id: string, props: CloudTrailStackSetProps) {
    super(scope, id);

    this.stackSetRole = new iam.Role(this, 'StackSetRole', {
      assumedBy: new iam.ServicePrincipal('cloudformation.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSCloudFormationFullAccess'),
      ],
    });

    if (props.organizationId) {
      this.stackSetRole.addToPolicy(new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['organizations:ListAccounts', 'organizations:DescribeOrganization'],
        resources: ['*'],
      }));
    }

    const resources: any = {};
    props.eventRules.forEach((rule, index) => {
      resources[`EventRule${index}`] = {
        Type: 'AWS::Events::Rule',
        Properties: {
          Description: rule.description,
          EventPattern: {
            'source': ['aws.cloudtrail'],
            'detail-type': ['AWS API Call via CloudTrail'],
            'detail': {
              eventName: rule.eventNames,
            },
          },
          Targets: [{
            Id: 'SNSTarget',
            Arn: props.notificationTopicArn,
            InputTransformer: {
              InputPathsMap: {
                eventName: '$.detail.eventName',
                userType: '$.detail.userIdentity.type',
                sourceIP: '$.detail.sourceIPAddress',
                account: '$.account',
                region: '$.region',
                eventTime: '$.detail.eventTime',
              },
              InputTemplate: `[${rule.severity}] CloudTrail Policy Violation: <eventName> by <userType> from <sourceIP> in <account>/<region> at <eventTime>`,
            },
          }],
        },
      };
    });

    const template = {
      AWSTemplateFormatVersion: '2010-09-09',
      Description: 'CloudTrail Event Monitor Stack',
      Resources: resources,
    };

    this.stackSet = new cfn.CfnStackSet(this, 'StackSet', {
      stackSetName: props.stackSetName ?? 'CloudTrailEventMonitor',
      description: 'CloudTrail event monitoring across accounts and regions',
      templateBody: JSON.stringify(template),
      capabilities: ['CAPABILITY_IAM'],
      permissionModel: props.organizationId ? 'SERVICE_MANAGED' : 'SELF_MANAGED',
      autoDeployment: props.organizationId ? {
        enabled: true,
        retainStacksOnAccountRemoval: false,
      } : undefined,
      operationPreferences: {
        regionConcurrencyType: 'PARALLEL',
        maxConcurrentPercentage: 100,
      },
      administrationRoleArn: this.stackSetRole.roleArn,
    });

    const stackInstancesFunction = new lambda.Function(this, 'StackInstancesFunction', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'stackInstances.handler',
      timeout: Duration.minutes(15),
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudTrailStackSet')),
    });

    stackInstancesFunction.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'cloudformation:CreateStackInstances',
        'cloudformation:DeleteStackInstances',
        'cloudformation:DescribeStackSetOperation',
      ],
      resources: ['*'],
    }));

    new CustomResource(this, 'StackInstances', {
      resourceType: 'Custom::StackInstances',
      serviceToken: stackInstancesFunction.functionArn,
      properties: {
        StackSetName: this.stackSet.stackSetName,
        Accounts: props.targetAccounts,
        Regions: props.targetRegions,
      },
    });
  }

}