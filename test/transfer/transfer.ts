import * as core from 'aws-cdk-lib';
import {
  aws_iam as iam,
  aws_logs as logs,
  aws_s3 as s3,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';
import { transfer } from '../../src/index';

export class TransferTest extends core.Stack {

  constructor(scope: constructs.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // create a role for logging for the service
    const loggingRole = new iam.Role(this, 'loggingRole', {
      assumedBy: new iam.ServicePrincipal('transfer.amazonaws.com'),
      description: 'logging role for SFTP server',
    });

    // create a log grou for the service
    const transferLogs = new logs.LogGroup(this, 'transferLogs', {
      logGroupName: '/aws/transfer/Server',
      retention: logs.RetentionDays.TWO_YEARS,
    });

    // grant the role access to the loggroup
    transferLogs.grantWrite(loggingRole);

    // create a transferServer
    const sftpServer = new transfer.TransferServer(this, 'sftpserver', {
      domain: 'mysftpserver.domain.com',
      endpointType: transfer.EndpointType.PUBLIC,
      loggingRole: loggingRole,
      protocols: [transfer.Protocol.SFTP],
      securityPolicy: transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05,
      logDestinations: [transferLogs],
      identityProviderType: transfer.IdentityProviderType.SERVICE_MANAGED,
    });

    // create a bucket, where the user's data will reside
    const sftpBucket = new s3.Bucket(this, 'sftpBucket', {
      enforceSSL: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    const userRole = new iam.Role(this, 'userRole', {
      assumedBy: new iam.ServicePrincipal('transfer.amazonaws.com'),
      description: 'SFTP standard user role',
    });

    sftpBucket.grantReadWrite(userRole);

    const user = new transfer.TransferUser(this, 'transferUser', {
      role: userRole,
      transferServer: sftpServer,
      userName: 'MyUserName',
      bucket: sftpBucket,
      publicKeys: ['key1', 'key2'],
    });
  }
}
