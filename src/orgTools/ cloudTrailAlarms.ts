import * as core from 'aws-cdk-lib';
import {
  aws_logs as logs,
  aws_cloudwatch as cloudwatch,
  aws_sns as sns,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface FilterProps {
  readonly logGroup: logs.ILogGroup;
  readonly nameSpace: string;
  readonly alarmSNSTopic: sns.Topic;
}

export interface IMetricFilter {
  name: string;
  logGroup: logs.ILogGroup;
  nameSpace: string;
  alarm: string;
}

export enum OrgAlarms {
  UNAUTHORIZED_API_CALL = 'UNAUTHORIZED_API_CALL',
  SIGNIN_WITHOUT_MFA = 'SIGNIN_WITHOUT_MFA',
  ROOT_ACCOUNT_USE = 'ROOT_ACCOUNT_USE',
  IAM_USER_CHANGES = 'IAM_USER_CHANGES',
  IAM_ROLE_CHANGES = 'IAM_ROLE_CHANGES',
  IAM_GROUP_CHANGES = 'IAM_GROUP_CHANGES',
  IAM_POLICY_CHANGES = 'IAM_POLICY_CHANGES',
  CLOUDTRAIL_CONFIGURATION_CHANGE = 'CLOUDTRAIL_CONFIGURATION_CHANGE',
  SIGNIN_FAILURE = 'SIGNIN_FAILURE',
  DISABLED_CUSTOMER_KEYS = 'DISABLED_CUSTOMER_KEYS',
  S3_POLICY_CHANGE = 'S3_POLICY_CHANGE',
  CONFIG_SERVICE_CHANGE = 'CONFIG_SERVICE_CHANGE',
  SECURITY_GROUP_CHANGE = 'SECURITY_GROUP_CHANGE',
  NETWORK_ACL_CHANGE = 'NETWORK_ACL_CHANGE',
  NETWORK_GATEWAY_CHANGE = 'NETWORK_GATEWAY_CHANGE',
  ROUTE_TABLE_CHANGE = 'ROUTE_TABLE_CHANGE',
  VPC_CHANGE = 'VPC_CHANGE',
}

export interface CloudTrailAlarmsProps extends core.StackProps {
  readonly alarms: OrgAlarms[];
  readonly logGroup: logs.ILogGroup;
  readonly nameSpace: string;
  readonly alarmSNSTopicName?: string | undefined;
}

export class CloudTrailAlarms extends core.Resource {

  snsTopic: sns.Topic;

  constructor(scope: constructs.Construct, id: string, props: CloudTrailAlarmsProps) {
    super(scope, id);

    // create an SNS Topic.

    if (props.alarmSNSTopicName) {
      this.snsTopic = new sns.Topic(this, 'monitoringTopic', {
        topicName: props.alarmSNSTopicName,
      });
    } else {
      this.snsTopic = new sns.Topic(this, 'monitoringTopic', {});
    }
    // TO DO, expand happens with this topic

    props.alarms.forEach((alarm) => {
      switch (alarm) {

        case OrgAlarms.UNAUTHORIZED_API_CALL:
          CloudTrailAlarm.unAuthorizedAPICall(scope, 'unauthorisedAPICall', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;

        case OrgAlarms.SIGNIN_WITHOUT_MFA:
          CloudTrailAlarm.signInWithoutMFA(scope, 'SignInWithoutMFA', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;

        case OrgAlarms.ROOT_ACCOUNT_USE:
          CloudTrailAlarm.rootAccountUse(scope, 'RootAccountUse', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;

        case OrgAlarms.IAM_USER_CHANGES:
          CloudTrailAlarm.iamUserChanges(scope, 'IamUserChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;

        case OrgAlarms.IAM_ROLE_CHANGES:
          CloudTrailAlarm.iamRoleChanges(scope, 'IamRoleChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;

        case OrgAlarms.IAM_GROUP_CHANGES:
          CloudTrailAlarm.iamGroupChanges(scope, 'IamGroupChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.IAM_POLICY_CHANGES:
          CloudTrailAlarm.iamPolicyChanges(scope, 'IamPolicyChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.CLOUDTRAIL_CONFIGURATION_CHANGE:
          CloudTrailAlarm.cloudTrailConfiguration(scope, 'cloudTrailChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.SIGNIN_FAILURE:
          CloudTrailAlarm.signInFailures(scope, 'signInFailures', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.DISABLED_CUSTOMER_KEYS:
          CloudTrailAlarm.disabledCustomerKeys(scope, 'disabledCustomerKeys', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.S3_POLICY_CHANGE:
          CloudTrailAlarm.s3PolicyChanges(scope, 's3PolicyChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.CONFIG_SERVICE_CHANGE:
          CloudTrailAlarm.configServiceChanges(scope, 'configServiceChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.SECURITY_GROUP_CHANGE:
          CloudTrailAlarm.securityGroupChanges(scope, 'securityGroupChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.NETWORK_ACL_CHANGE:
          CloudTrailAlarm.networkACLChanges(scope, 'NetworkACLchange', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.NETWORK_GATEWAY_CHANGE:
          CloudTrailAlarm.networkGWChanges(scope, 'networkgwChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.ROUTE_TABLE_CHANGE:
          CloudTrailAlarm.routeTableChanges(scope, 'routeTableChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;
        case OrgAlarms.VPC_CHANGE:
          CloudTrailAlarm.vpcChanges(scope, 'vpcChanges', {
            logGroup: props.logGroup,
            nameSpace: props.nameSpace,
            alarmSNSTopic: this.snsTopic,
          });
          break;

        default:
          break;
      };
    });
  }
}

abstract class CloudTrailAlarm {

  // will detect activity by the root account.
  public static unAuthorizedAPICall(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'UnAuthorized API Call';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ $.errorCode = "*UnauthorizedOperation") || ($.errorCode = "AccessDenied*" }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'unauthAPI', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Sign in Without MFA',
      alarmName: 'SignInWithoutMFA',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 3,
      period: 60,
      alarmActions: [props.alarmSNSTopic.topicArn],
    });


    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static signInWithoutMFA(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'Sign In Without MFA';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = ConsoleLogin) && ($.additionalEventData.MFAUsed != Yes) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'noMFAalarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Sign in Without MFA',
      alarmName: 'SignInWithoutMFA',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
      alarmActions: [props.alarmSNSTopic.topicArn],
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static rootAccountUse(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'Root Account Use';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ $.userIdentity.type = Root && $.userIdentity.invokedBy NOT EXISTS && $.eventType != AwsServiceEvent }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'rootAccountUseAlarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Root Account Use',
      alarmName: 'Root Account has been used',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static iamUserChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'IAM User Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = DeleteUserPolicy) || ($.eventName = PutUserPolicy) || ($.eventName = AttachUserPolicy) || ($.eventName = DetachUserPolicy) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'IamUserChangealarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Iam User Changes',
      alarmName: 'IAMUserChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static iamRoleChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'IAM Role Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = DeleteRolePolicy) || ($.eventName = PutRolePolicy) || ($.eventName = AttachRolePolicy) || ($.eventName = DetachRolePolicy) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'IamRolealarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Iam Role Changes',
      alarmName: 'IAMRoleChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static iamGroupChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'IAM Group Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = DeleteGroupPolicy) || ($.eventName = PutGroupPolicy) || ($.eventName = AttachGroupPolicy) || ($.eventName = DetachGroupPolicy) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'IamGroupalarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Iam Group Changes',
      alarmName: 'IAMGroupChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static iamPolicyChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'IAM Policy Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = DeleteGroupPolicy) || ($.eventName = PutGroupPolicy) || ($.eventName = AttachGroupPolicy) || ($.eventName = DetachGroupPolicy) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'IamPolicyalarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Iam Policy Changes',
      alarmName: 'IAMPolicyChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static cloudTrailConfiguration(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'Cloud Trail Configuration';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = CreateTrail) || ($.eventName = UpdateTrail) || ($.eventName = DeleteTrail) || ($.eventName = StartLogging) || ($.eventName = StopLogging) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'CloudTrailConfigurationChange', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'CloudTrail Configuration Changes',
      alarmName: 'CloudTrailConfigurationchanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static signInFailures(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'signInFailures';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'signinFailure', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'CloudTrail Configuration Changes',
      alarmName: 'CloudTrailConfigurationchanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 5,
      period: 180,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static disabledCustomerKeys(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'Disabled Customer Keys';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{($.eventSource = kms.amazonaws.com) && (($.eventName=DisableKey)||($.eventName=ScheduleKeyDeletion)) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'DisabledCustomerKeysArn', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Disabled Customer Keys',
      alarmName: 'DisabledCustomerKeys',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static s3PolicyChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 's3 Policy Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventSource = s3.amazonaws.com) && (($.eventName = PutBucketAcl) || ($.eventName = PutBucketPolicy) || ($.eventName = PutBucketCors) || ($.eventName = PutBucketLifecycle) || ($.eventName = PutBucketReplication) || ($.eventName = DeleteBucketPolicy) || ($.eventName = DeleteBucketCors) || ($.eventName = DeleteBucketLifecycle) || ($.eventName = DeleteBucketReplication)) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'S3PolicyChangeAlarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 's3PolicyChange',
      alarmName: 's3PolicyChange',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static configServiceChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'config Service Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{($.eventSource = config.amazonaws.com) && (($.eventName=StopConfigurationRecorder)||($.eventName=DeleteDeliveryChannel)||($.eventName=PutDeliveryChannel)||($.eventName=PutConfigurationRecorder))}'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'ConfigServiceChangeAlarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'configServiceChange',
      alarmName: 'configServiceChange',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static securityGroupChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'security Group Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup)}'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'SecurityGroupChanges', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Security Group Changes',
      alarmName: 'Security Group Changes',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static networkACLChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'network ACL Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'NEtworkACLChanges', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Network ACL Changes',
      alarmName: 'NetworkACLChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static networkGWChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'network GW Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'NEtworkGWChanges', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Network Gateway Changes',
      alarmName: 'NetworkGatewayChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static routeTableChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'route Table Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = CreateRoute) || ($.eventName = CreateRouteTable) || ($.eventName = ReplaceRoute) || ($.eventName = ReplaceRouteTableAssociation) || ($.eventName = DeleteRouteTable) || ($.eventName = DeleteRoute) || ($.eventName = DisassociateRouteTable) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'RouteTableChanges', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'RouteTableChanges',
      alarmName: 'RouteTableChanges',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }

  public static vpcChanges(scope: constructs.Construct, id: string, props: FilterProps): IMetricFilter {

    const name = 'vpc Changes';

    new logs.MetricFilter(scope, id, {
      logGroup: props.logGroup,
      metricNamespace: props.nameSpace,
      metricName: name,
      filterPattern: logs.FilterPattern.exists('{ ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }'),
      metricValue: '1',
    });

    const alarm = new cloudwatch.CfnAlarm(scope, 'VpcChangesAlarm', {
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      actionsEnabled: true,
      alarmDescription: 'Vpc Changes Alarm',
      alarmName: 'VpcChangeAlarm',
      metricName: name,
      namespace: props.nameSpace,
      threshold: 1,
      period: 60,
    });

    return {
      logGroup: props.logGroup,
      name: name,
      nameSpace: props.nameSpace,
      alarm: alarm.logicalId,
    };
  }


  protected constructor() {};

}