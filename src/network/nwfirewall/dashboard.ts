import * as path from 'path';
import {
  aws_cloudformation as cloudformation,
  aws_s3_assets as s3_assets,
  aws_logs as logs,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface FirewallDashboardProps {
  /**
   * The name of the firewall as seen in the firewall console
   */
  readonly firewallName: string;

  /**
   * The firewall subnet IDs
   */
  readonly firewallSubnets: string[];

  /**
   * Name of the CloudWatch log group where firewall flow logs are stored
   */
  readonly firewallFlowLog: logs.LogGroup;

  /**
   * Name of the CloudWatch log group where firewall alert logs are stored
   */
  readonly firewallAlertLog: logs.LogGroup;

  /**
   * State of the Contributor Insights rules (ENABLED or DISABLED)
   * @default ENABLED
   */
  readonly contributorInsightsRuleState?: string;
}

export class FirewallDashboard extends constructs.Construct {
  constructor(scope: constructs.Construct, id: string, props: FirewallDashboardProps) {
    super(scope, id);

    // Create an asset from the CloudFormation template
    const templateAsset = new s3_assets.Asset(this, 'DashboardTemplateAsset', {
      path: path.join(__dirname, '../../../assets/firewalldashboard/dashboard.yaml'),
    });

    // get the subnet Ids from props.firewallSubnetGroup

    // Deploy the CloudFormation template
    new cloudformation.CfnStack(this, 'FirewallDashboardTemplate', {
      templateUrl: templateAsset.httpUrl,
      parameters: {
        FirewallName: props.firewallName,
        FirewallSubnetList: props.firewallSubnets.join(','),
        FirewallFlowLogGroupName: props.firewallFlowLog.logGroupName,
        FirewallAlertLogGroupName: props.firewallAlertLog.logGroupName,
        ContributorInsightsRuleState: props.contributorInsightsRuleState || 'ENABLED',
      },
    });
  }
}