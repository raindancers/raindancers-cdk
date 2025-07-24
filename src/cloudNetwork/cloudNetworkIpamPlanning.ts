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


}

export interface IIpamPlanningTool {
  ipv6PlanningPool: ec2.CfnIPAMPool;
  /** IPv4 IPAM pool for subnet allocation */
  ipv4PlanningPool: ec2.CfnIPAMPool;
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
  ipv6PlanningPool: ec2.CfnIPAMPool;
  /** IPv4 IPAM pool for subnet allocation */
  ipv4PlanningPool: ec2.CfnIPAMPool;
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


    new ec2.CfnVPCCidrBlock(this, 'vpcIpv6Cidr', {
      vpcId: props.vpc.attrVpcId,
      ipv6IpamPoolId: props.ipamConfig.ipv6PoolId,
      ipv6NetmaskLength: props.ipv6NetmaskLength ?? DEFAULT_IPV6_VPC_MASK,
    });


    const ipamWaiter = this.createIpamWaiter(props.vpc.attrVpcId, props.ipamConfig.ipv6ScopeId);

    // Create IPv6 IPAM planning pool for subnet allocation
    // These cna't be assignged untill the IPamWaiter is comppleted
    this.ipv6PlanningPool = new ec2.CfnIPAMPool(this, 'ipv6Ipam', {
      awsService: 'ec2',
      addressFamily: 'ipv6',
      publicIpSource: 'amazon',
      ipamScopeId: props.ipamConfig.ipv6ScopeId,
      locale: core.Stack.of(this).region,
      sourceIpamPoolId: props.ipamConfig.ipv6PoolId,
      description: `IPv6 planning pool for vpc ${props.vpcName} | ${props.vpc.attrVpcId}`,
      allocationDefaultNetmaskLength: DEFAULT_IPV6_SUBNET_MASK,
      autoImport: true,
      sourceResource: {
        resourceId: props.vpc.attrVpcId,
        resourceOwner: core.Stack.of(this).account,
        resourceRegion: core.Stack.of(this).region,
        resourceType: 'vpc',
      },
    });

    this.ipv6PlanningPool.node.addDependency(ipamWaiter);

    // Create IPv4 IPAM planning pool for subnet allocation
    this.ipv4PlanningPool = new ec2.CfnIPAMPool(this, 'ipv4Ipam', {
      addressFamily: 'ipv4',
      ipamScopeId: props.ipamConfig.ipv4IpamScope,
      locale: core.Stack.of(this).region,
      sourceIpamPoolId: props.ipamConfig.ipv4IpamPoolId,
      description: `IPv6 planning pool for vpc ${props.vpcName} | ${props.vpc.attrVpcId}`,
      allocationDefaultNetmaskLength: props.defaultipv4allocation ?? 24,
      autoImport: true,
      sourceResource: {
        resourceId: props.vpc.attrVpcId,
        resourceOwner: core.Stack.of(this).account,
        resourceRegion: core.Stack.of(this).region,
        resourceType: 'vpc',
      },
    });

    this.ipv4PlanningPool.node.addDependency(ipamWaiter);


    // Wait for pool CIDRs before starting the waiter.
    this.waiter = this.createPoolCidrWaiter(this.ipv4PlanningPool.attrIpamPoolId, this.ipv6PlanningPool.attrIpamPoolId);

  }

  private createIpamWaiter(vpcId: string, scopeId: string): core.CustomResource {
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
      totalTimeout: core.Duration.minutes(15),
    });

    return new core.CustomResource(this, 'ipamWaitResource', {
      serviceToken: provider.serviceToken,
      properties: {
        VpcId: vpcId,
        ScopeId: scopeId,
      },
    });
  }


  private createPoolCidrWaiter(ipv4PoolId: string, ipv6PoolId: string): core.CustomResource {
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
      actions: ['ec2:GetIpamPoolCidrs'],
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
      totalTimeout: core.Duration.minutes(30),
    });

    return new core.CustomResource(this, 'poolCidrWaiterResource', {
      serviceToken: provider.serviceToken,
      properties: {
        Ipv4PoolId: ipv4PoolId,
        Ipv6PoolId: ipv6PoolId,
      },
    });
  }
}