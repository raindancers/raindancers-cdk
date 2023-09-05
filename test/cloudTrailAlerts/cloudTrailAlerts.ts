import * as core from 'aws-cdk-lib';
import {
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';

import {
  orgTools,
  eventalerts,
}
  from '../../src/index';


export class CloudTrailAlarms extends core.Stack {

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    // import the cloudTrailLogs
    const logGroup = logs.LogGroup.fromLogGroupName(this, 'logroup', 'aws-controltower/CloudTrailLogs');

    // a namespace to use to group the event together.
    const namespace = 'securityEvents';

    /**
     * Create CloudTrail Metrics, and Alarms that will be forwarded to an SNS Topic
     */
    const alarms = new orgTools.CloudTrailAlarms(this, namespace, {
      logGroup: logGroup,
      nameSpace: namespace,
      alarms: [
        orgTools.OrgAlarms.ROOT_ACCOUNT_USE,
        orgTools.OrgAlarms.SIGNIN_WITHOUT_MFA,
        orgTools.OrgAlarms.UNAUTHORIZED_API_CALL,
        orgTools.OrgAlarms.IAM_GROUP_CHANGES,
        orgTools.OrgAlarms.IAM_POLICY_CHANGES,
        orgTools.OrgAlarms.IAM_ROLE_CHANGES,
        orgTools.OrgAlarms.IAM_USER_CHANGES,
        orgTools.OrgAlarms.CLOUDTRAIL_CONFIGURATION_CHANGE,
        orgTools.OrgAlarms.SIGNIN_FAILURE,
        orgTools.OrgAlarms.DISABLED_CUSTOMER_KEYS,
        orgTools.OrgAlarms.S3_POLICY_CHANGE,
        orgTools.OrgAlarms.CONFIG_SERVICE_CHANGE,
        orgTools.OrgAlarms.SECURITY_GROUP_CHANGE,
        orgTools.OrgAlarms.NETWORK_ACL_CHANGE,
        orgTools.OrgAlarms.NETWORK_GATEWAY_CHANGE,
        orgTools.OrgAlarms.ROUTE_TABLE_CHANGE,
        orgTools.OrgAlarms.VPC_CHANGE,
      ],
    });

    // creates a lambda that listens to the sns topic, and forwards to a teams channel
    const teamsChannel = new eventalerts.EventToTeams(this, 'teamsChannel', {
      teamsUrl: 'https://raindancers.webhook.office.com/webhookb2/ed51609a-3baa-4859-afce-6b268fec875a@52887873-e218-4271-8946-5cf5efb40e73/IncomingWebhook/384da214ba934c2abf3c53cf95c60606/ac8377f0-0cc3-4af0-b350-0ec0009f2252',
      snsTopic: alarms.snsTopic,
    });
  }
}