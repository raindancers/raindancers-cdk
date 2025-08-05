import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_networkfirewall as firewall,
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';

export enum FirewallSubnetMappingIPAddressType {
  DUALSTACK = 'DUALSTACK',
  IPV4 = 'IPV4',
  IPV6 = 'IPV6',
}

/**
 * Propertys of a Network Firewall
 */
export interface NetworkFirewallProps {
  /**
   * the the vpc where the Network firewall is placed
   */
  readonly vpc: ec2.Vpc | ec2.IVpc;
  /**
   * the subnetGroup where the firewall will be created.
   */
  readonly subnetGroup: string;
  /**
   * the name that will be given to the firewall
   */
  readonly firewallName: string;
  /**
   * the firewalls policy
   */
  readonly firewallPolicy: firewall.CfnFirewallPolicy;
  /**
   * Determine how the Firewall stacks will behave.
   */
  readonly iPStackMode?: FirewallSubnetMappingIPAddressType | undefined;
}

export interface INetworkFirewall {

  /**
   * Gateway Endpoints for the Firewalls
   */
  readonly endPointIds: string[];
  /**
   * Arn of the firewall
   */
  readonly firewallArn: string;
  /**
   * Firewall ID
   */
  readonly firewallId: string;

  /**
   * flow log
   */
  readonly flowLogs: logs.LogGroup;

  /**
   * alert log
   */
  readonly alertLogs: logs.LogGroup;


}

/**
 * Creates Network Firewalls
 */
export class NetworkFirewall extends constructs.Construct implements INetworkFirewall {

  /**
   * Gateway Endpoints for the Firewalls
   */
  public readonly endPointIds: string[];
  /**
   * Arn of the firewall
   */
  public readonly firewallArn: string;
  /**
   * Firewall ID
   */
  public readonly firewallId: string;

  /**
   * flow log
   */
  public readonly flowLogs: logs.LogGroup;

  /**
   * alert log
   */
  public readonly alertLogs: logs.LogGroup;

  public readonly firewallSubnetIds: string[];
  /**
   *
   * @param scope Scope
   * @param id id
   * @param props props
   */
  constructor(scope: constructs.Construct, id: string, props: NetworkFirewallProps) {
    super(scope, id);

    let firewallSubnetList: firewall.CfnFirewall.SubnetMappingProperty[] = [];
    	firewallSubnetList = props.vpc.selectSubnets({ subnetGroupName: props.subnetGroup }).subnets.map(subnet =>
      	(
        {
          subnetId: subnet.subnetId,
          ipAddressType: props.iPStackMode ?? FirewallSubnetMappingIPAddressType.DUALSTACK,
        }
      ),
    	);


    const fw = new firewall.CfnFirewall(this, 'Resource', {
      firewallName: props.firewallName,
      firewallPolicyArn: props.firewallPolicy.attrFirewallPolicyArn,
      subnetMappings: firewallSubnetList,
      vpcId: props.vpc.vpcId,
    });


    // CloudWatch Logs group to store Network Firewall flow logs
    const fwFlowLogsGroup = new logs.LogGroup(this, 'FWFlowLogsGroup', {
      logGroupName: `${props.firewallName}FlowLogs`,
      removalPolicy: core.RemovalPolicy.DESTROY,
    });

    this.flowLogs = fwFlowLogsGroup;

    // CloudWatch Logs group to store Network Firewall alert logs
    const fwAlertLogsGroup = new logs.LogGroup(this, 'FWAlertLogsGroup', {
      logGroupName: `${props.firewallName}AlertLogs`,
      removalPolicy: core.RemovalPolicy.DESTROY,
    });

    this.alertLogs = fwAlertLogsGroup;


    // Firewall logging configuration to enable both flow and alert logs
    new firewall.CfnLoggingConfiguration(this, 'FirewallLogConf', {
      firewallArn: fw.ref,
      loggingConfiguration: {
        logDestinationConfigs: [
          {
            logDestination: { logGroup: fwFlowLogsGroup.logGroupName },
            logDestinationType: 'CloudWatchLogs',
            logType: 'FLOW',
          },
          {
            logDestination: { logGroup: fwAlertLogsGroup.logGroupName },
            logDestinationType: 'CloudWatchLogs',
            logType: 'ALERT',
          },
        ],
      },
    });


    this.firewallArn = fw.attrFirewallArn;
    this.firewallId = fw.attrFirewallId;
    this.endPointIds = fw.attrEndpointIds;
    this.firewallSubnetIds = firewallSubnetList.map(subnet => subnet.subnetId);


  }
}// end of class

