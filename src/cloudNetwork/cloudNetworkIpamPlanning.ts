import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_iam as iam,
  aws_lambda as lambda,
  aws_logs as logs,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import * as interfaces from './cloudNetworkInterfaces';


const DEFAULT_IPV6_SUBNET_MASK = 64;
const DEFAULT_IPV6_VPC_MASK = 56;

/**
 * Properties for IPAM VPC planning tools
 */
export interface IpamPlanningTools {
  /** IPAM configuration for the VPC */
  readonly ipamConfig: interfaces.IpamConfig;
  /** The VPC ID for which planning pools are created */
  readonly vpc: ec2.CfnVPC;
  /** The name of the VPC */
  readonly vpcName: string;
  /** Default IPv4 allocation netmask length */
  readonly defaultipv4allocation?: number | undefined;
  /**
   *
   */
  //scopeId: string

  // ipv6IpamPoolId: string,
  readonly ipv6NetmaskLength?: number | undefined;

  // no cloudformationSupport
  readonly useDirectAPICalls?: boolean | undefined;

  // region
  readonly regionToCreatePlanningPools?: string | undefined;


}

export interface IIpamPlanningTool {
  ipv6PlanningPool: ec2.CfnIPAMPool | cr.AwsCustomResource;
  /** IPv4 IPAM pool for subnet allocation */
  ipv4PlanningPool: ec2.CfnIPAMPool | cr.AwsCustomResource;
  waiter: core.CustomResource;
}

/**
 * Creates IPAM planning pools for VPC subnet allocation.
 *
 * This construct creates IPv4 and IPv6 IPAM pools that are used to allocate
 * IP addresses to subnets within the VPC. The pools are configured as planning
 * pools with the VPC as the source resource.
 */
export class IpamVPCPlanningTools extends constructs.Construct implements IIpamPlanningTool {

  /** IPv6 IPAM pool for subnet allocation */
  ipv6PlanningPool: ec2.CfnIPAMPool | cr.AwsCustomResource;
  /** IPv4 IPAM pool for subnet allocation */
  ipv4PlanningPool: ec2.CfnIPAMPool | cr.AwsCustomResource;
  waiter: core.CustomResource;
  // vpcCidrBlock: string;
  // ipv6CidrBlock: string;


  /**
   * Creates IPAM planning pools for the specified VPC.
   *
   * @param scope - The parent construct
   * @param id - The construct ID
   * @param props - Configuration properties
   */
  constructor(scope: constructs.Construct, id: string, props: IpamPlanningTools) {
    super(scope, id);

    let ipv6Cidr: constructs.IDependable;


    // 1 Associate ipv6 with the VPC.
    ipv6Cidr = new ec2.CfnVPCCidrBlock(this, 'vpcIpv6Cidr', {
      vpcId: props.vpc.attrVpcId,
      ipv6IpamPoolId: props.ipamConfig.ipv6PoolId,
      ipv6NetmaskLength: props.ipv6NetmaskLength ?? DEFAULT_IPV6_VPC_MASK,
    });
    // }

    // create a waiter, that
    const ipamWaiter = this.createIpamWaiter(
      props.vpc.attrVpcId,
      props.ipamConfig.ipv4IpamScope,
      props.ipamConfig.ipv6ScopeId,
      props.regionToCreatePlanningPools ?? core.Aws.REGION,
    );

    ipamWaiter.node.addDependency(ipv6Cidr);

    // Create IPv6 IPAM planning pool for subnet allocation
    // These cna't be assignged untill the IPamWaiter is comppleted
    if (props.useDirectAPICalls ?? false) {
      this.ipv6PlanningPool = new cr.AwsCustomResource(this, 'ipv6IpamAPI', {
        resourceType: 'Custom::CreateIpamPlanningPoolIpv6',
        onCreate: {
          service: 'EC2',
          action: 'createIpamPool',
          region: props.ipamConfig.regionToMakeAPICalls,
          parameters: {
            IpamScopeId: props.ipamConfig.ipv6ScopeId,
            AddressFamily: 'ipv6',
            Locale: core.Stack.of(this).region,
            SourceIpamPoolId: props.ipamConfig.ipv6PoolId,
            Description: `IPv6 planning pool for vpc ${props.vpcName} | ${props.vpc.attrVpcId}`,
            AllocationDefaultNetmaskLength: DEFAULT_IPV6_SUBNET_MASK,
            AutoImport: false,
            AwsService: 'ec2',
            PublicIpSource: 'amazon',
            SourceResource: {
              ResourceId: props.vpc.attrVpcId,
              ResourceOwner: core.Stack.of(this).account,
              ResourceRegion: core.Stack.of(this).region,
              ResourceType: 'vpc',
            },
          },
          physicalResourceId: cr.PhysicalResourceId.fromResponse('IpamPool.IpamPoolId'),
        },
        onDelete: {
          service: 'EC2',
          action: 'deleteIpamPool',
          region: props.ipamConfig.regionToMakeAPICalls,
          parameters: {
            IpamPoolId: new cr.PhysicalResourceIdReference(),
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromStatements([
          new iam.PolicyStatement({
            actions: [
              'ec2:CreateIpamPool',
              'ec2:DeleteIpamPool',
              'ec2:DescribeIpamPools',
              'ec2:AllocateIpamPoolCidr',
              'ec2:ReleaseIpamPoolAllocation',
            ],
            resources: ['*'],
          }),
        ]),
      });
    } else {
      this.ipv6PlanningPool = new ec2.CfnIPAMPool(this, 'ipv6Ipam', {
        awsService: 'ec2',
        addressFamily: 'ipv6',
        publicIpSource: 'amazon',
        ipamScopeId: props.ipamConfig.ipv6ScopeId,
        locale: core.Stack.of(this).region,
        sourceIpamPoolId: props.ipamConfig.ipv6PoolId,
        description: `IPv6 planning pool for vpc ${props.vpcName} | ${props.vpc.attrVpcId}`,
        allocationDefaultNetmaskLength: DEFAULT_IPV6_SUBNET_MASK,
        autoImport: false,
        sourceResource: {
          resourceId: props.vpc.attrVpcId,
          resourceOwner: core.Stack.of(this).account,
          resourceRegion: core.Stack.of(this).region,
          resourceType: 'vpc',
        },
      });
    }

    // the planning pool can't be started untill the the vpc and waiter arec completed.
    this.ipv6PlanningPool.node.addDependency(props.vpc);
    this.ipv6PlanningPool.node.addDependency(ipamWaiter);


    // do the IPV4

    // Create IPv4 IPAM planning pool for subnet allocation
    if (props.useDirectAPICalls ?? false) {
      this.ipv4PlanningPool = new cr.AwsCustomResource(this, 'ipv4IpamAPI', {
        resourceType: 'Custom::CreateIpamPlanningPoolIpv4',
        onCreate: {
          service: 'EC2',
          action: 'createIpamPool',
          region: props.ipamConfig.regionToMakeAPICalls, // sydney.
          parameters: {
            IpamScopeId: props.ipamConfig.ipv4IpamScope,
            AddressFamily: 'ipv4',
            Locale: core.Stack.of(this).region,
            SourceIpamPoolId: props.ipamConfig.ipv4IpamPoolId,
            Description: `IPv4 planning pool for vpc ${props.vpcName} | ${props.vpc.attrVpcId}`,
            AllocationDefaultNetmaskLength: props.defaultipv4allocation ?? 24,
            AutoImport: false,
            SourceResource: {
              ResourceId: props.vpc.attrVpcId,
              ResourceOwner: core.Stack.of(this).account,
              ResourceRegion: core.Stack.of(this).region, // auckland
              ResourceType: 'vpc',
            },
          },
          physicalResourceId: cr.PhysicalResourceId.fromResponse('IpamPool.IpamPoolId'),
        },
        onDelete: {
          service: 'EC2',
          action: 'deleteIpamPool',
          region: props.ipamConfig.regionToMakeAPICalls,
          parameters: {
            IpamPoolId: new cr.PhysicalResourceIdReference(),
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromStatements([
          new iam.PolicyStatement({
            actions: [
              'ec2:CreateIpamPool',
              'ec2:DeleteIpamPool',
              'ec2:DescribeIpamPools',
              'ec2:AllocateIpamPoolCidr',
              'ec2:ReleaseIpamPoolAllocation',
            ],
            resources: ['*'],
          }),
        ]),
      });
    } else {
      this.ipv4PlanningPool = new ec2.CfnIPAMPool(this, 'ipv4Ipam', {
        addressFamily: 'ipv4',
        ipamScopeId: props.ipamConfig.ipv4IpamScope,
        locale: core.Stack.of(this).region,
        sourceIpamPoolId: props.ipamConfig.ipv4IpamPoolId,
        description: `IPv4 planning pool for vpc ${props.vpcName} | ${props.vpc.attrVpcId}`,
        allocationDefaultNetmaskLength: props.defaultipv4allocation ?? 24,
        autoImport: false,
        sourceResource: {
          resourceId: props.vpc.attrVpcId,
          resourceOwner: core.Stack.of(this).account,
          resourceRegion: core.Stack.of(this).region,
          resourceType: 'vpc',
        },
      });
    }
    this.ipv4PlanningPool.node.addDependency(props.vpc);
    this.ipv4PlanningPool.node.addDependency(ipamWaiter);


    // Wait for pool CIDRs before starting the waiter.
    const ipv4PoolId = props.useDirectAPICalls ?
      (this.ipv4PlanningPool as cr.AwsCustomResource).getResponseField('IpamPool.IpamPoolId') :
      (this.ipv4PlanningPool as ec2.CfnIPAMPool).attrIpamPoolId;

    const ipv6PoolId = props.useDirectAPICalls ?
      (this.ipv6PlanningPool as cr.AwsCustomResource).getResponseField('IpamPool.IpamPoolId') :
      (this.ipv6PlanningPool as ec2.CfnIPAMPool).attrIpamPoolId;

    this.waiter = this.createPoolCidrWaiter(
      ipv4PoolId,
      ipv6PoolId,
      props.vpc.attrCidrBlock,
      core.Fn.select(0, props.vpc.attrIpv6CidrBlocks),
      props.regionToCreatePlanningPools ?? core.Aws.REGION,
    );

  }

  private createIpamWaiter(vpcId: string, ipv4ScopeId: string, ipv6ScopeId: string, region?: string): core.CustomResource {

    const ipamWaiterFn = new lambda.Function(this, 'ipamWaitFn', {
      // amazonq-ignore-next-line
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'ipv6ipam.handler',
      timeout: core.Duration.minutes(2),
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudNetwork/lambda/ipam/')),
      logGroup: new logs.LogGroup(this, 'ipv6ipam', {
        retention: logs.RetentionDays.ONE_WEEK,
      }),
    });

    ipamWaiterFn.addToRolePolicy(new iam.PolicyStatement({
      actions: ['ec2:GetIpamResourceCidrs'],
      // amazonq-ignore-next-line
      resources: ['*'],
    }));

    const provider = new cr.Provider(this, 'ipamWaitProvider', {
      onEventHandler: ipamWaiterFn,
      isCompleteHandler: ipamWaiterFn,
      queryInterval: core.Duration.seconds(30),
      totalTimeout: core.Duration.minutes(25),
      logGroup: new logs.LogGroup(this, 'ipamWaitProviderLogGroup', {
        retention: logs.RetentionDays.ONE_WEEK,
      }),
    });

    return new core.CustomResource(this, 'ipamWaitResource', {
      resourceType: 'Custom::CidrAllocationWaiter1',
      serviceToken: provider.serviceToken,
      properties: {
        Region: region ?? core.Aws.REGION,
        VpcId: vpcId,
        Ipv4ScopeId: ipv4ScopeId,
        Ipv6ScopeId: ipv6ScopeId,
      },
    });
  }

  // this is for creating the Planning Pools.

  private createPoolCidrWaiter(
    ipv4PoolId: string,
    ipv6PoolId: string,
    vpcIpv4Cidr: string,
    vpcIpv6Cidr: string,
    region?: string ): core.CustomResource {

    const poolCidrWaiterFn = new lambda.Function(this, 'poolCidrWaiterFn', {
      // amazonq-ignore-next-line
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'poolready.handler',
      timeout: core.Duration.minutes(2),
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudNetwork/lambda/ipam/')),
      logGroup: new logs.LogGroup(this, 'poolCidrWaiterLogGroup', {
        retention: logs.RetentionDays.ONE_WEEK,
      }),

    });

    poolCidrWaiterFn.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'ec2:GetIpamPoolCidrs',
        'ec2:DescribeIpamPools',
        'ec2:ProvisionIpamPoolCidr',
        'ec2:DeprovisionIpamPoolCidr',
      ],
      resources: ['*'],
    }));

    // When IPAM pools are configured with a VPC as sourceResource, they automatically
    // inherit the VPC's CIDR blocks, but this happens asynchronously.
    //  The waiter now uses get_ipam_pool_cidrs to verify that both pools actually have CIDRs available
    //  before allowing subnet creation to proceed.

    const provider = new cr.Provider(this, 'poolCidrWaiterProvider', {
      onEventHandler: poolCidrWaiterFn,
      isCompleteHandler: poolCidrWaiterFn,
      queryInterval: core.Duration.seconds(30),
      totalTimeout: core.Duration.minutes(10),
      logGroup: new logs.LogGroup(this, 'poolCidrWaiterProviderLogGroup', {
        retention: logs.RetentionDays.ONE_WEEK,
      }),
    });

    return new core.CustomResource(this, 'poolCidrWaiterResource', {
      resourceType: 'Custom::ResourcePoolWaiter2',
      serviceToken: provider.serviceToken,
      properties: {
        Ipv4PoolId: ipv4PoolId,
        Ipv6PoolId: ipv6PoolId,
        Region: region ?? core.Aws.REGION,
        VpcIpv4Cidr: vpcIpv4Cidr,
        VpcIpv6Cidr: vpcIpv6Cidr,
      },
    });
  }
}