import * as path from 'path';
import {
  aws_ec2 as ec2,
  aws_lambda as lambda,
  aws_iam as iam,
  aws_s3 as s3,
  custom_resources as cr,
  aws_logs as logs,
  aws_ram as ram,
  aws_networkfirewall as nwfw,
} from 'aws-cdk-lib';
import * as core from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as interfaces from './cloudNetworkInterfaces';
import * as dns from '../network/dns';
import * as endpoints from '../network/endpoints';


/**
 * In programming, a mixin is a class or module that provides a set of methods that can be included in other classes to add functionality without using inheritance.
 * Mixins are a way to reuse code and share behavior between classes that may not have a direct hierarchical relationship.
 * They are particularly useful when multiple classes need to share the same functionality but don't share a common parent class
 */

export class DualStackVpcMethods {


  /**
 * Creates AWS service endpoints for the specified VPC and subnet group.
 *
 * This static method provides a convenient way to add multiple AWS service endpoints
 * (both interface and gateway endpoints) to a VPC in a single operation. It validates
 * the required VPC parameter and delegates to the AwsServiceEndPoints construct.
 *
 * @param scope - The construct scope where the endpoints will be created
 * @param id - Unique identifier for the endpoint construct
 * @param props - Configuration properties for the service endpoints
 *
 * @returns AwsServiceEndPoints construct containing the created endpoints
 *
 * @throws Error if VPC is not provided in props
 *
 * @example
 * const endpoints = DualStackVpcMethods.addServiceEndpoints(this, 'ServiceEndpoints', {
 *   vpc: myVpc,
 *   services: [AwsService.S3, AwsService.EC2],
 *   subnetGroup: privateSubnetGroup,
 *   s3GatewayInterface: true
 * });
 */
  static addServiceEndpoints(scope: constructs.Construct, id: string, props: interfaces.AddAwsServiceEndPointsProps): endpoints.AwsServiceEndPoints {

    if (!props.vpc) {
      throw Error('You must supply a vpc');
    }

    return new endpoints.AwsServiceEndPoints(scope, id, {
      services: props.services,
      subnetGroup: props.subnetGroup.name!, // TODO. This class needs updating so it can take the SubnetNetGroup Type
      vpc: props.vpc!,
      dynamoDBGatewayInterface: props.dynamoDbGateway,
      s3GatewayInterface: props.s3GatewayInterface,
    });
  }


  /**
   * Creates Route 53 resolver endpoints for DNS resolution in the specified VPC.
   *
   * This static method provides a convenient way to add Route 53 resolver endpoints
   * to enable DNS resolution between on-premises networks and AWS VPC. The resolver
   * endpoints are deployed in the specified subnet group to handle DNS queries.
   *
   * @param scope - The construct scope where the resolver endpoints will be created
   * @param id - Unique identifier for the resolver endpoints construct
   * @param subnet - Subnet group configuration where resolver endpoints will be deployed
   * @param vpc - The VPC where resolver endpoints will be created
   *
   * @returns R53Resolverendpoints construct containing the created resolver endpoints
   *
   * @example
   * const resolvers = DualStackVpcMethods.addR53Resolvers(
   *   this,
   *   'DnsResolvers',
   *   privateSubnetGroup,
   *   myVpc
   * );
   *
   * @remarks
   * Route 53 resolver endpoints enable:
   * - Inbound endpoints: Allow on-premises DNS queries to resolve AWS resources
   * - Outbound endpoints: Allow AWS resources to resolve on-premises DNS names
   * - Hybrid DNS resolution between cloud and on-premises environments
   */
  static addR53Resolvers(scope: constructs.Construct, id: string, subnet: interfaces.ISubnetGroup, vpc: ec2.IVpc): dns.R53Resolverendpoints {
    const r53Resolvers = new dns.R53Resolverendpoints(
      scope, id,
      {
        vpc: vpc,
        subnetGroup: subnet.name!,
      },
    );
    return r53Resolvers;
  }


  /**
 * Creates VPC Flow Logs with optional Athena analysis capabilities.
 *
 * This static method sets up comprehensive VPC Flow Log monitoring by creating flow logs
 * stored in S3 with Parquet format for efficient querying. Optionally configures Athena
 * integration for advanced log analysis and querying capabilities.
 *
 * @param scope - The construct scope where the flow log resources will be created
 * @param id - Unique identifier used as prefix for all created resources
 * @param props - Configuration properties for the flow log setup
 *
 * @throws Error if VPC is not provided in props
 *
 * @example
 * DualStackVpcMethods.createFlowLogwithAnalysis(this, 'VpcFlowLogs', {
 *   vpc: myVpc,
 *   oneMinuteFlowLogs: true,
 *   localAthenaQuerys: true,
 *   bucket: existingLogBucket
 * });
 *
 * @remarks
 * Features provided:
 * - Flow logs stored in S3 with Parquet format for cost-effective storage
 * - Per-hour partitioning for efficient querying
 * - Optional 1-minute granularity for detailed analysis
 * - Optional Athena integration with custom Lambda function for automated query setup
 * - Automatic creation of Athena results bucket when analysis is enabled
 * - Custom resource for flow log integration template deployment
 */
  static createFlowLogwithAnalysis(scope: constructs.Construct, id: string, props: interfaces.FlowLogProps): void {

    if (!props.vpc) {
      throw Error('Must supply VPC');
    }

    const flowLogBucket = props.bucket ?? new s3.Bucket(scope, `${id}flowlogbucket`,
      {
        autoDeleteObjects: true,
        removalPolicy: core.RemovalPolicy.DESTROY,
      },
    );


    const flowlog = new ec2.FlowLog(scope, `${id}-VpcFlowLog`, {
      destination: ec2.FlowLogDestination.toS3(
			  flowLogBucket, `${id}VpcFlowLogs`, {
          fileFormat: ec2.FlowLogFileFormat.PARQUET,
          hiveCompatiblePartitions: false,
          perHourPartition: true,
			  }),
      trafficType: ec2.FlowLogTrafficType.ALL,
      flowLogName: `${id}VpcFlowLogs`,
      resourceType: ec2.FlowLogResourceType.fromVpc(props.vpc),
    });

    // allow for more grandular flowlog at the minimum increment.
    if (props.oneMinuteFlowLogs === true) {
      const CfnFlowLog = flowlog.node.defaultChild as ec2.CfnFlowLog;
      CfnFlowLog.addPropertyOverride('MaxAggregationInterval', 60);
    }

    if (props.localAthenaQuerys === true) {
      const athenaResultsBucket = new s3.Bucket(scope, `${id}AthenaFlowLogResults`, {
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        removalPolicy: core.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      });


      // set up athena querys with a custom resource
      const athenaLogsHandler = new lambda.Function(scope, `${id}Function`, {
        code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudNetwork/lambda/flowlog/')),
        runtime: lambda.Runtime.PYTHON_3_13,
        handler: 'flowlogintegration.on_event',
        timeout: core.Duration.seconds(300),
      });

      athenaLogsHandler.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          resources: ['*'],
          actions: [
            '*',
            'ec2:ListCoreNetworks',
            'ec2:GetFlowLogsIntegrationTemplate',
            'cloudformation:CreateStack',
            'cloudformation:DeleteStack',
          ],
        }),
      );

      new core.CustomResource(scope, `${id}CustomResource`, {
        serviceToken: new cr.Provider(scope, 'flowlogBuilderCR', {
          onEventHandler: athenaLogsHandler,
        }).serviceToken,
        properties: {
          AthenaBucket: athenaResultsBucket.bucketArn,
          FlowLogId: flowlog.flowLogId,
          VpcName: props.vpc.vpcId,
        },
      });
    }
  }//end of createFlowLog

  /**
   * Attaches a VPC to an AWS Transit Gateway for inter-VPC connectivity.
   *
   * This static method creates a Transit Gateway VPC attachment to enable routing
   * between the specified VPC and other resources connected to the Transit Gateway.
   * The attachment is created using subnets from the specified subnet group.
   *
   * @param scope - The construct scope where the attachment will be created
   * @param id - Unique identifier for the attachment construct
   * @param props - Configuration properties for the Transit Gateway attachment
   *
   * @returns The Transit Gateway attachment ID
   *
   * @throws Error if VPC is not provided in props
   *
   * @example
   * const attachmentId = DualStackVpcMethods.attachToTransitGateway(this, 'TgAttachment', {
   *   vpc: myVpc,
   *   transitGateway: transitGw,
   *   attachmentSubnetGroup: 'private',
   *   applianceMode: 'enable'
   * });
   *
   * @remarks
   * Features:
   * - Creates VPC attachment to Transit Gateway using CloudFormation
   * - Automatically selects subnets from specified subnet group
   * - Supports appliance mode for network appliances
   * - Supports IPv6 connectivity
   * - Returns attachment ID for further configuration (routes, etc.)
   * - Uses 'linknet' as default subnet group if not specified
   */
  static attachToTransitGateway(scope: constructs.Construct, id: string, props: interfaces.AttachToTransitGatewayProps): string {

    if (!props.vpc) {
      throw Error('Must supply a VPC');
    }

    const attachmentSubnetName = props.attachmentSubnetGroup ?? 'linknet';

    const tgAttachment = new ec2.CfnTransitGatewayAttachment(scope, `${id}tgAttach`, {
      transitGatewayId: props.transitGateway.id,
      vpcId: props.vpc.vpcId,
      subnetIds: props.vpc.selectSubnets({ subnetGroupName: attachmentSubnetName }).subnetIds,
      options: {
        ApplianceModeSupport: props.applianceMode,
        IpV6Support: props.attachmentSubnetGroup,
      },
    });

    if (props.transitGatewayRoutingTable) {
      new ec2.CfnTransitGatewayRouteTableAssociation(scope, 'AssociateWithRoutingTable', {
        transitGatewayAttachmentId: tgAttachment.attrId,
        transitGatewayRouteTableId: props.transitGatewayRoutingTable.transitGatewayRouteTableId,
      });
    }


    return tgAttachment.attrId;


  }

  /**
   * Shares subnet groups with other AWS accounts using AWS Resource Access Manager (RAM).
   *
   * This static method creates a RAM resource share to allow other AWS accounts to use
   * subnets from the specified subnet groups. Optionally configures cross-account tagging
   * of shared resources using a custom Lambda function.
   *
   * @param scope - The construct scope where the resource share will be created
   * @param id - Unique identifier for the resource share
   * @param props - Configuration properties for sharing subnet groups
   *
   * @throws Error if VPC is not provided or if both/neither subnetGroup and subnetGroups are specified
   *
   * @example
   * DualStackVpcMethods.shareSubnetGroup(this, 'SharePrivateSubnets', {
   *   vpc: myVpc,
   *   subnetGroup: privateSubnetGroup,
   *   accounts: ['123456789012', '987654321098'],
   *   shareName: 'PrivateSubnetShare',
   *   cdkTagResourcesInSharedToAccountRoleName: 'CrossAccountTaggingRole'
   * });
   *
   * @remarks
   * Features:
   * - Creates RAM resource share for subnet groups
   * - Supports sharing single or multiple subnet groups
   * - Automatically generates subnet ARNs for sharing
   * - Optional cross-account resource tagging via Lambda function
   * - Validates mutually exclusive subnet group parameters
   * - Uses internal principals only (no external sharing)
   */
  static shareSubnetGroup (scope: constructs.Construct, id: string, props: interfaces.ShareSubnetGroupProps): void {

    if (!props.vpc) {
      throw Error('Must supply a VPC');
    }


    if (props.subnetGroup && props.subnetGroups) {
      throw Error('Only one of subnetGroup or subnetGroups can be defined');
    }

    if (!(props.subnetGroup || props.subnetGroups )) {
      throw Error('Either subnetGroup or subnetGroups must be defined');
    }

    var subnetarns: string[] = [];
    var subnetIds: string[] = [];
    var share: ram.CfnResourceShare;


    if (props.subnetGroup) {

      const selection = props.vpc.selectSubnets({
        subnetGroupName: props.subnetGroup!.name,
      });

      selection.subnets.forEach((subnet) => {
        subnetarns.push(`arn:${core.Aws.PARTITION}:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
        subnetIds.push(subnet.subnetId);
      });

      share = new ram.CfnResourceShare(scope, props.shareName ?? `${id}ramshare${props.subnetGroup.name}`, {
        name: props.shareName ?? `${id}ramshare${props.subnetGroup.name}`,
        allowExternalPrincipals: false,
        principals: props.accounts,
        resourceArns: subnetarns,
      });
    }

    if (props.subnetGroups) {

      if (!(props.shareName)) {
        throw Error('shareName must be defined, when sharing to multiple subnet Groups');
      }


      props.subnetGroups.forEach((group) => {

        const selection = props.vpc!.selectSubnets({
          subnetGroupName: group.name,
        });

        selection.subnets.forEach((subnet) => {
          subnetarns.push(`arn:${core.Aws.PARTITION}:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
          subnetIds.push(subnet.subnetId);
        });

      });

      share = new ram.CfnResourceShare(scope, `${id}${props.shareName}`, {
        name: `${id}shareSubnetGroup-${props.shareName}`,
        allowExternalPrincipals: false,
        principals: props.accounts,
        resourceArns: subnetarns,
      });

    }

    if (props.cdkTagResourcesInSharedToAccountRoleName) {

      const tagResources = new lambda.SingletonFunction(scope, `tagRemoteResources${id}${props.shareName}`, {
        logRetention: logs.RetentionDays.FIVE_DAYS,
        uuid: '37FEAC0011422A0',
        code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudNetwork/lambda/tagResources/')),
        timeout: core.Duration.seconds(180),
        runtime: lambda.Runtime.PYTHON_3_13,
        handler: 'tagResources.on_event',
      });

      tagResources.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['sts:AssumeRole'],
          resources: [`arn:aws:iam::*:role/${props.cdkTagResourcesInSharedToAccountRoleName}`],
        }),
      );

      tagResources.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['ec2:DescribeTags'],
          resources: ['*'],
        }),
      );


      const tagSharedResoruces = new core.CustomResource(scope, `${id}tagRoutes${props.shareName}`, {
        serviceToken: new cr.Provider(scope, `${id}Provider${props.shareName}`, {
          onEventHandler: tagResources,
        }).serviceToken,
        properties: {
          VpcId: props.vpc.vpcId,
          SubnetIds: subnetIds,
          RoleName: props.cdkTagResourcesInSharedToAccountRoleName,
          Accounts: props.accounts,
          Region: core.Aws.REGION,
        },
      });


      tagSharedResoruces.node.addDependency(share!);

    }
  }

  /**
   * Associates shared Route 53 resolver rules with the VPC for DNS resolution.
   *
   * This static method creates associations between the VPC and shared Route 53 resolver
   * rules for specified domain names. This enables the VPC to resolve DNS queries for
   * domains that have been configured with shared resolver rules from other accounts.
   *
   * @param scope - The construct scope where the resolver rule associations will be created
   * @param id - Unique identifier for the resolver rule associations
   * @param props - Configuration properties for associating resolver rules
   *
   * @throws Error if VPC is not provided
   *
   * @example
   * DualStackVpcMethods.associateSharedResolverRules(this, 'ResolverRules', {
   *   vpc: myVpc,
   *   domainNames: ['example.com', 'internal.corp']
   * });
   *
   * @remarks
   * This method is typically used in hub-and-spoke DNS architectures where:
   * - Central DNS resolver rules are shared from a hub account
   * - Spoke VPCs need to associate with these shared rules
   * - Enables consistent DNS resolution across multiple accounts
   * - Supports hybrid cloud DNS resolution scenarios
   */
  static associateSharedResolverRules(scope: constructs.Construct, id: string, props: interfaces.AssociateSharedResolverRulesProps ): void {

    if (!props.vpc) {
      throw Error('Must supply a VPC');
    }

    new dns.AssociateSharedResolverRule(scope, `${id}r53associationRules`, {
      domainNames: props.domainNames,
      vpc: props.vpc,
    });
  }

  /**
   * Adds AWS Network Firewall endpoints to the VPC for traffic inspection.
   *
   * This static method creates Network Firewall VPC endpoint associations to enable
   * traffic inspection and filtering. The firewall endpoints are deployed across
   * multiple availability zones using subnets from the specified subnet group.
   *
   * @param scope - The construct scope where the firewall endpoints will be created
   * @param id - Unique identifier for the firewall endpoint associations
   * @param props - Configuration properties for the firewall endpoints
   *
   * @returns Array of firewall endpoint objects with endpoint IDs and availability zones
   *
   * @throws Error if VPC is not provided
   *
   * @example
   * const endpoints = DualStackVpcMethods.addNetworkFirewallEndpoint(this, 'FirewallEndpoints', {
   *   vpc: myVpc,
   *   firewallArn: 'arn:aws:network-firewall:region:account:firewall/my-firewall',
   *   subnetGroup: firewallSubnetGroup
   * });
   *
   * // Use endpoint IDs for route table configuration
   * endpoints.forEach(endpoint => {
   *   console.log(`Endpoint ${endpoint.endpointId} in AZ ${endpoint.az}`);
   * });
   *
   * @remarks
   * Features:
   * - Creates firewall endpoints in each subnet of the specified group
   * - Supports dual-stack (IPv4/IPv6) IP addressing
   * - Returns endpoint details for route table configuration
   * - Enables centralized traffic inspection and filtering
   * - Supports high availability across multiple AZs
   * - Uses 'firewall' as default subnet group name
   */
  static addNetworkFirewallEndpoint(
    scope: constructs.Construct,
    id: string,
    props: interfaces.AddNetworkFirewallEndpointProps)
    : interfaces.IFirewallEndpoints[] {

    if (!props.vpc) {
      throw Error('Must supply a VPC');
    }

    const firewallSubnetGroup = props.subnetGroup?.name ?? 'firewall';

    const firewallSubnets = props.vpc.selectSubnets({ subnetGroupName: firewallSubnetGroup });

    let firewallendpoints: interfaces.IFirewallEndpoints[] = [];

    firewallSubnets.subnets.forEach((subnet, index) => {
      const endpoint = new nwfw.CfnVpcEndpointAssociation(scope, `${id}FirewallEndpointAssoc${index}`, {
        firewallArn: props.firewallArn,
        subnetMapping: {
          subnetId: subnet.subnetId,
          ipAddressType: interfaces.FirewallSubnetMappingIPAddressType.DUALSTACK,
        },
        vpcId: props.vpc!.vpcId,
      });

      firewallendpoints.push({
        endpointId: endpoint.attrEndpointId,
        az: subnet.availabilityZone,
      });
    });

    return firewallendpoints;
  }
}


