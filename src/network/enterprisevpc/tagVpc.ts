import {
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface TagVpcRoleProps {
  /**
     * @default tagSharedResources
     */
  readonly roleName?: string | undefined;
  /**
     * Account which owns Resource
     */
  readonly assumedby: string;
}

export class TagVpcRole extends constructs.Construct {

  role: iam.IRole;

  constructor(scope: constructs.Construct, id: string, props: TagVpcRoleProps) {
    super(scope, id);

    this.role = new iam.Role(this, 'TaggingRole', {
      assumedBy: new iam.AccountPrincipal(props.assumedby),
      description: 'Assumed by lambda in network account to Tag Shared Resources',
      roleName: props.assumedby ?? 'tagSharedResources',
    });

    this.role.addToPrincipalPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['ec2:CreateTags'],
        resources: ['*'],
      }),
    );
  }
}