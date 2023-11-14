import * as cdk from 'aws-cdk-lib';
import {
  aws_networkfirewall as firewall,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';

export enum StatelessActions {
  PASS = 'aws:pass',
  DROP = 'aws:drop',
  STATEFUL = 'aws:forward_to_sfe'
}

export enum StatefulAction {
  PASS = 'PASS',
  DROP = 'DROP',
  STATEFUL = 'REJECT',
  ALERT = 'ALERT',
}

export enum StatefulDefaultActions {
  DROP_STRICT = 'aws:drop_strict',
  DROP_ESTABLISHED = 'aws:drop_established',
  ALERT_STRICT = 'aws:alert_strict',
  ALERT_ESTABLISHED = 'aws:alert_established'
}


export enum ManagedAwsFirewallRules {
  ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER = 'AbusedLegitMalwareDomainsActionOrder',
  ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER = 'AbusedLegitBotNetCommandAndControlDomainsActionOrder',
  MALWARE_DOMAINS_ACTION_ORDER = 'MalwareDomainsActionOrder',
  BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER = 'BotNetCommandAndControlDomainsActionOrder',
  THREAT_SIGNATURES_BOTNET_ACTION_ORDER = 'ThreatSignaturesBotnetActionOrder',
  THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER = 'ThreatSignaturesBotnetWebActionOrder',
  THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER = 'ThreatSignaturesBotnetWindowsActionOrder',
  THREAT_SIGNATURES_DOS_ACTION_ORDER ='ThreatSignaturesDoSActionOrder',
  THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER = 'ThreatSignaturesEmergingEventsActionOrder',
  THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER = 'ThreatSignaturesExploitsActionOrder',
  THREAT_SIGNATURES_FUP_ACTION_ORDER = 'ThreatSignaturesFUPActionOrder',
  THREAT_SIGNATURES_IOC_ACTION_ORDER = 'ThreatSignaturesIOCActionOrder',
  THREAT_SIGNATURES_MALWARE_ACTION_ORDER = 'ThreatSignaturesMalwareActionOrder',
  THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER = 'ThreatSignaturesMalwareCoinminingActionOrder',
  THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER = 'ThreatSignaturesMalwareWebActionOrder',
  THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER = 'ThreatSignaturesMalwareMobileActionOrder',
  THREAT_SIGNATURES_PHISHING_ACTION_ORDER = 'ThreatSignaturesPhishingActionOrder',
  THREAT_SIGNATURES_SCANNERS_ACTION_ORDER = 'ThreatSignaturesScannersActionOrder',
  THREAT_SIGNATURES_SUSPECT_ACTION_ORDER = 'ThreatSignaturesSuspectActionOrder',
  THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER = 'ThreatSignaturesWebAttacksActionOrder'
}


export interface AddStatefulRulesProps {
  readonly awsManagedRules: ManagedAwsFirewallRules[];
}


export interface IFirewallPolicyProperty {
  statefulDefaultActions?: string[];
  statefulEngineOptions?: firewall.CfnFirewallPolicy.StatefulEngineOptionsProperty | cdk.IResolvable;
  statefulRuleGroupReferences?: Array<firewall.CfnFirewallPolicy.StatefulRuleGroupReferenceProperty>;
  statelessCustomActions?: Array<firewall.CfnFirewallPolicy.CustomActionProperty | cdk.IResolvable> | cdk.IResolvable;
  statelessDefaultActions: string[];
  statelessFragmentDefaultActions: string[];
  statelessRuleGroupReferences?: firewall.CfnFirewallPolicy.StatelessRuleGroupReferenceProperty[];
}

export enum RuleGroupType {
  STATEFUL = 'STATEFUL',
  STATELESS = 'STATELESS'
}

export enum Protocol {
  ICMP = 1,
  TCP = 6,
  UDP = 17
}

export enum WellKnownPorts {
  SSH = 22,
  HTTP = 80,
  HTTPS = 443,
  RDP = 3389
}

export interface StatelessRuleProps{
  readonly actions: StatelessActions[];
  readonly priority: number;
  readonly destinationPorts?: undefined | (string|number|WellKnownPorts)[];
  readonly destinations?: undefined | firewall.CfnRuleGroup.AddressProperty[];
  readonly protocols?: undefined | Protocol[];
  readonly sourcePorts?: undefined | (string|number)[];
  readonly sources?: undefined | firewall.CfnRuleGroup.AddressProperty[];
  readonly tcpFlags?: undefined | firewall.CfnRuleGroup.TCPFlagFieldProperty[];
}


export interface FirewallPolicyProps {
  readonly policyName: string;

  readonly statelessDefaultActions: StatelessActions[];
  readonly statelessFragmentDefaultActions: StatelessActions[];
  readonly statefulEngineOptions?: undefined | firewall.CfnFirewallPolicy.StatefulEngineOptionsProperty;

  //readonly statefulRuleGroupReferences? undefined
  //readonly statelessRuleGroupReferences?


  //TODO:readonly statelessCustomActions?

}

export interface AddStatelessRulesProps{
  readonly groupName: string;
  readonly rules: firewall.CfnRuleGroup.StatelessRuleProperty[];
  readonly description: string;
  readonly priority: number;
  readonly capacity?: number | undefined;
}


export class FirewallPolicy extends constructs.Construct {

  policy: IFirewallPolicyProperty;

  public readonly firewallpolicy: firewall.CfnFirewallPolicy;

  constructor(scope: constructs.Construct, id: string, props: FirewallPolicyProps) {
    super(scope, id);

    var policy = {
      statelessDefaultActions: props.statelessDefaultActions,
      statelessFragmentDefaultActions: props.statelessFragmentDefaultActions,
      statefulEngineOptions: props.statefulEngineOptions,
    };
    this.policy = policy;

    this.firewallpolicy = new firewall.CfnFirewallPolicy(this, 'Fwpolicy', {
      firewallPolicyName: props.policyName,
      firewallPolicy: policy as firewall.CfnFirewallPolicy.FirewallPolicyProperty,
    });
  }


  public addManagedStatefulRules(props: AddStatefulRulesProps): void {
    props.awsManagedRules.forEach((rule) => {

      if (this.policy.statefulRuleGroupReferences) {
        this.policy.statefulRuleGroupReferences.push(
          {
            resourceArn: `arn:aws:network-firewall:${cdk.Aws.REGION}:aws-managed:stateful-rulegroup/${rule}`,
          },
        );
      } else {
        this.policy.statefulRuleGroupReferences = [];
        this.policy.statefulRuleGroupReferences.push(
          {
            resourceArn: `arn:aws:network-firewall:${cdk.Aws.REGION}:aws-managed:stateful-rulegroup/${rule}`,
          },
        );
      }
    },
    );
  }

  public addStatelessRuleGroup(props: AddStatelessRulesProps ): void {

    const rule = new firewall.CfnRuleGroup(this, props.groupName, {
      capacity: props.capacity ?? 100,
      ruleGroupName: props.groupName,
      type: RuleGroupType.STATELESS,
      description: props.description,
      ruleGroup: {
        rulesSource: {
          statelessRulesAndCustomActions: {
            statelessRules: props.rules,
          },
        },
      },
    });

    if (this.policy.statelessRuleGroupReferences) {
      this.policy.statelessRuleGroupReferences.push(
        {
          priority: props.priority,
          resourceArn: rule.attrRuleGroupArn,
        },
      );
    } else {
      this.policy.statelessRuleGroupReferences = [];
      this.policy.statelessRuleGroupReferences.push(
        {
          resourceArn: rule.attrRuleGroupArn,
          priority: props.priority,
        },
      );
    }
  }

  public addStatefulRules(props: StatefulRuleProps): void {


    const rule = new firewall.CfnRuleGroup(this, props.groupName, {
      capacity: props.capacity ?? 100,
      ruleGroupName: props.groupName,
      type: RuleGroupType.STATEFUL,
      description: props.description,
      ruleGroup: {
        ruleVariables: props.ruleVariables,
        rulesSource: {
          rulesString: props.suricataRule,
          statefulRules: props.statefuleRules,
          rulesSourceList: props.rulesSourceList,
        },
      },
    });

    if (this.policy.statefulRuleGroupReferences) {
      this.policy.statefulRuleGroupReferences.push(
        {
          resourceArn: rule.attrRuleGroupArn,
          priority: props.priority,
        },
      );
    } else {
      this.policy.statefulRuleGroupReferences = [];
      this.policy.statefulRuleGroupReferences.push(
        {
          resourceArn: rule.attrRuleGroupArn,
          priority: props.priority,
        },
      );
    }


  }


}

export enum GeneratedRulesType {
  ALLOWLIST = 'ALLOWLIST',
  DENYLIST = 'DENYLIST'
}

export enum TargetTypes {
  TLS_SNI = 'TLS_SNI',
  HTTP_HOST = 'HTTP_HOST'
}

export interface StatefulRuleProps {
  readonly capacity?: number | undefined;
  readonly groupName: string;
  readonly description: string;
  // https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-examples.html
  readonly ruleVariables?: cdk.aws_networkfirewall.CfnRuleGroup.RuleVariablesProperty;
  readonly suricataRule? : string | undefined;
  readonly statefuleRules?: firewall.CfnRuleGroup.StatefulRuleProperty[];
  readonly rulesSourceList?: firewall.CfnRuleGroup.RulesSourceListProperty;
  readonly priority: number;
}

export class StatelessRule {

  public readonly statelessRuleProperty: firewall.CfnRuleGroup.StatelessRuleProperty;

  constructor(props: StatelessRuleProps) {

    var destinationPorts: firewall.CfnRuleGroup.PortRangeProperty[] | undefined;
    var sourcePorts: firewall.CfnRuleGroup.PortRangeProperty[] | undefined;

    // validate destinationPorts
    if (props.destinationPorts) {
      destinationPorts = [];
      props.destinationPorts.forEach((port) => {
        destinationPorts?.push(checkports(port));
      });
    }

    // validate Source Ports
    if (props.sourcePorts) {
      if (!(props.protocols)) {
        throw new Error('The rule must specify using TCP and/or UDP protocols');
      }

      if ( Protocol.ICMP in props.protocols ) {
        throw new Error('Only TCP and UDP are supported for rules that specify source ports');
      }

      sourcePorts = [];
      props.sourcePorts.forEach((port) => {
        sourcePorts?.push(checkports(port));
      });
    }

    this.statelessRuleProperty = {
      priority: props.priority,
      ruleDefinition: {
        actions: props.actions,
        matchAttributes: {
          destinationPorts: destinationPorts,
          destinations: props.destinations,
          protocols: props.protocols,
          sourcePorts: sourcePorts,
          sources: props.sources,
          tcpFlags: props.tcpFlags,
        },
      },
    };
  }
}


function checkports(port: string | number) {

  var toPort: number;
  var fromPort: number;

  if (typeof(port) === 'string') {
    if (port.split(':').length == 2) {
      fromPort = parseInt(port.split(':')[0]);

      if (!(fromPort >= 0 && (fromPort <= 65536))) {
        throw new Error('from ports must be a integer in the range 0 to 65536');
      }

      toPort = parseInt(port.split(':')[1]);
      if (!(toPort >= 0 && toPort <= 65536)) {
        throw new Error('from ports must be a integer in the range 0 to 65536');
      }
      if (fromPort >= toPort) {
        throw new Error('the from port must not be higher than the to port');
      }
      return {
        fromPort: fromPort,
        toPort: toPort,
      };
    } else {
      fromPort = toPort = parseInt(port);
      if (!(fromPort >= 0 && fromPort <= 65536)) {
        throw new Error('Port must be an integer between 0 and 65536');
      }
      return {
        fromPort: fromPort,
        toPort: toPort,
      };
    }
  } else {
    if (!((port >=0) && (port <=65536))) {
      throw new Error('Port must be between 0 and 65536');
    }
    fromPort = toPort = port as number;
    return {
      fromPort: fromPort,
      toPort: toPort,
    };
  }
}