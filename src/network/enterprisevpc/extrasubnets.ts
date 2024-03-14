/**
 * THis requires work to cover the aync nature these calls. It is beta.
 */

import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_ram as ram,
  aws_iam as iam,
  custom_resources as cr,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface ExtraSubnetsProps {
  readonly vpc: ec2.IVpc;
  readonly vpcAccount?: string | undefined;
  readonly vpcRegion?: string | undefined;
  readonly ipamScopeId: string;
  readonly ipamSourcePoolId: string;
  readonly subnetSize: number;
  readonly addToSubnetGroupName: string;
  readonly shareToAccounts?: iam.AccountPrincipal[] | undefined;
}

export class ExtraSubnets extends constructs.Construct {

  subnets: ec2.ISubnet[] = [];

  constructor(scope: constructs.Construct, id: string, props: ExtraSubnetsProps) {
    super(scope, id);

    // create a pool within the pool.
    const vpcIpamPool = new ec2.CfnIPAMPool(this, 'vpcpool', {
      ipamScopeId: props.ipamScopeId,
      sourceIpamPoolId: props.ipamSourcePoolId,
      description: `Extra Subnets for vpc${props.vpc.vpcId}`,
      addressFamily: 'ipv4',
      locale: core.Aws.REGION,
    });

    // check to see if the IpamPool is ready, this is async


    let poolCidrSize: number;

    // work out how big the pool should be.. this works as long as there are no more than four zones. some Az's acahave
    if (props.vpc.availabilityZones.length > 2) {
      poolCidrSize = props.subnetSize - 2;
    } else if (props.vpc.availabilityZones.length == 2) {
      poolCidrSize = props.subnetSize - 1;
    } else {
      poolCidrSize = props.subnetSize;
    }

    //allocate some ip space to it.
    const space = new ec2.CfnIPAMPoolCidr(this, 'vpcpoolcidr', {
      ipamPoolId: vpcIpamPool.attrIpamPoolId,
      netmaskLength: poolCidrSize,
    });


    //get the cidr allocations from vpcIpamPool
    const poolAllocation = new cr.AwsCustomResource(this, 'vpcpoolcidrallocations', {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
      onCreate: {
        service: 'EC2',
        action: 'getIpamPoolCidrs',
        parameters: {
          IpamPoolId: vpcIpamPool.attrIpamPoolId,
        },
        physicalResourceId: cr.PhysicalResourceId.of(vpcIpamPool.ref),
      },
    });
    //dont' look up the allocation untill space has been allocated to it.
    poolAllocation.node.addDependency(space);


    //add the cidr to the vpc
    new ec2.CfnVPCCidrBlock(this, 'cidrBlock', {
      vpcId: props.vpc.vpcId,
      cidrBlock: poolAllocation.getResponseField('IpamPoolCidrs.0.Cidr'),
    });

    const selection = props.vpc.selectSubnets({
      subnetGroupName: props.addToSubnetGroupName,
    });

    selection.subnets.forEach((subnet) => {

      const subnetCidr = new ec2.CfnIPAMAllocation(this, `subnetcidr-${subnet.availabilityZone}`, {
        ipamPoolId: vpcIpamPool.attrIpamPoolId,
        netmaskLength: props.subnetSize,
        description: `Subnet Cidr for ${subnet.availabilityZone}`,
      });


      //get the cidr from the allocation
      const cidrAllocation = new cr.AwsCustomResource(this, `allocation-${subnet.availabilityZone}`, {
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
        onCreate: {
          service: 'EC2',
          action: 'getIpamPoolAllocations',
          parameters: {
            IpamPoolId: vpcIpamPool.attrIpamPoolId,
            IpamPoolAllocationId: subnetCidr.attrIpamPoolAllocationId,
          },
          physicalResourceId: cr.PhysicalResourceId.of('SubnetAllocation'),
        },
      });

      cidrAllocation.node.addDependency(subnetCidr);


      let newSubnet = new ec2.Subnet(this, `subnet-${subnet.availabilityZone}`, {
        vpcId: props.vpc.vpcId,
        availabilityZone: subnet.availabilityZone,
        cidrBlock: cidrAllocation.getResponseField('IpamPoolAllocations.0.Cidr'),
      });

      core.Tags.of(newSubnet).add('aws-cdk:extra-subnet-name', `${props.addToSubnetGroupName}`);

      new ec2.CfnSubnetRouteTableAssociation(this, `routeTableAssn-${subnet.availabilityZone}`, {
        subnetId: newSubnet.subnetId,
        routeTableId: subnet.routeTable.routeTableId,
      });


      this.subnets.push(
        ec2.Subnet.fromSubnetAttributes(this, `Isubnet-${subnet.availabilityZone}`, {
          availabilityZone: subnet.availabilityZone,
          subnetId: newSubnet.subnetId,
          routeTableId: subnet.routeTable.routeTableId,
          ipv4CidrBlock: newSubnet.ipv4CidrBlock,
        }),
      );
    });

    if (props.shareToAccounts) {

      let resourceArns: string[] = [];
      this.subnets.forEach((subnet) => {
        resourceArns.push(`arn:aws:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
      });

      let principals: string[] = [];
      props.shareToAccounts.forEach((principal) => {
        principals.push(principal.accountId);
      });

      new ram.CfnResourceShare(this, 'sharedsubnets', {
        name: `shared_subnets-from-${props.vpc.vpcId}`,
        allowExternalPrincipals: false,
        principals: principals,
        resourceArns: resourceArns,
        tags: [{
          key: 'key',
          value: 'value',
        }],
      });
    }

  }
};