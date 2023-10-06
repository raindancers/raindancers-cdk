
import {
  aws_transfer,
  aws_iam as iam,
  aws_s3 as s3,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

import { ITransferServer }
  from './index';


export interface ITransferUser {
  /**
   * The ID of the transfer user
   */
  readonly id: string;
  /**
   *
   */
  readonly arn: string;
}

export interface TransferUserProps {

  readonly role: iam.IRole;
  readonly transferServer: ITransferServer;
  readonly userName: string;
  readonly bucket: s3.IBucket;
  /**
   * ssh publickeys
   */
  readonly publicKeys: string[];
  /**
   * Policy
   * @default Default Policy statement.
   */
  readonly policy?: iam.PolicyDocument | undefined;
}


/**
 * Define a TransitGateway.
 * Implements ITransitGateway
 */
export class TransferUser extends constructs.Construct implements ITransferUser {

  // these are the attributes for the construct. The attributes here, must include *ALL* of the attributes in ITransitGateway
  // as we are implmenting ITransitGateway

  /**
   * The id of the transfer User
   */
  public readonly id: string;

  /**
   * The arn of the transfer user
   */
  public readonly arn: string;

  constructor(scope: constructs.Construct, id: string, props: TransferUserProps) {
    super(scope, id);

    const defaultPolicy = new iam.PolicyDocument({});
    defaultPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:ListBucket'],
      resources: ['arn:aws:s3:::${transfer:HomeBucket}'],
      conditions: {
        StringLike: {
          's3:prefix': [
            'home/${transfer:UserName}/*',
            'home/${transfer:UserName}',
          ],
        },
      },
    }));

    defaultPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        's3:PutObject',
        's3:GetObject',
        's3:GetObjectVersion',
      ],
      resources: ['arn:aws:s3:::${transfer:HomeDirectory}*'],
    }));

    const policy = props.policy ?? defaultPolicy;

    const user = new aws_transfer.CfnUser(this, 'resource', {
      role: props.role.roleArn,
      serverId: props.transferServer.id,
      userName: props.userName,
      homeDirectory: `/${props.bucket.bucketArn}`,
      sshPublicKeys: props.publicKeys,
      policy: policy.toJSON(),
    });

    this.id = user.attrId;
    this.arn = user.attrArn;

  }
}