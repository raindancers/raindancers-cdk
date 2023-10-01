import * as core from 'aws-cdk-lib';

import {
  aws_organizations,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface IOrganizationalUnit {

  readonly id: string;
  readonly arn: string;
  readonly parentId: string;
  readonly name: string;
}

export interface OrganizationalUnitProps extends core.ResourceProps {
  readonly name: string;
  readonly parentId: string;
}

export interface OrganizationalUnitAttributes {

  readonly name: string;
  readonly parentId: string;
  readonly arn: string;
}


export class OrganizationalUnit extends constructs.Construct implements IOrganizationalUnit {

  public static fromAttributes(props: OrganizationalUnitAttributes): IOrganizationalUnit {

    return {
      id: props.arn.split('/')[2],
      arn: props.arn,
      parentId: props.parentId,
      name: props.name,
    };
  }

  readonly id: string;
  readonly arn: string;
  readonly parentId: string;
  readonly name: string;


  constructor(scope: constructs.Construct, id: string, props: OrganizationalUnitProps) {
    super(scope, id);

    const oU= new aws_organizations.CfnOrganizationalUnit(this, 'MyCfnOrganizationalUnit', {
      name: props.name,
      parentId: props.parentId,
    });

    this.id = oU.attrId;
    this.arn = oU.attrArn;
    this.parentId = oU.parentId;
    this.name = oU.name;

  }
};

