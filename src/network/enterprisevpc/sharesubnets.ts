import {
  aws_ec2 as ec2,
  aws_iam as iam,
  aws_ram as ram,
} from 'aws-cdk-lib';


import * as core from 'aws-cdk-lib';

import * as constructs from 'constructs';

import { SubnetGroup } from './subnets';

export interface ShareSubnetGroupProps {
  readonly subnetGroups: SubnetGroup[];
  readonly accountPrincipals: iam.AccountPrincipal[];
  readonly vpc: ec2.IVpc;
}

export class ShareSubnetGroups extends constructs.Construct {


  constructor(scope: constructs.Construct, id: string, props: ShareSubnetGroupProps) {
    super(scope, id);

    let accountPrincipals: string[] = [];
    props.accountPrincipals.forEach((principal) => {
      accountPrincipals.push(principal.accountId);
    });

    let subnetIds: string[] = [];
    props.subnetGroups.forEach((selection) => {
      subnetIds.concat(props.vpc.selectSubnets({ subnetGroupName: selection.subnet.name }).subnetIds);
    });

    let resourceArns: string[] = [];
    subnetIds.forEach((subnetId) => {
      resourceArns.push(`arn:aws:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:subnet/${subnetId}`);
    });

    new ram.CfnResourceShare(this, 'subnetshare', {
      name: id,
      allowExternalPrincipals: false,
      principals: accountPrincipals,
      resourceArns: resourceArns,
    });

  }
}