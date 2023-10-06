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

    // create a transferServer, by default this will create a log group, and logging role

    const sftpServer = new transfer.TransferServer(this, 'sftpserver', {
      domain: 'mysftpserver.domain.com',
      endpointType: transfer.EndpointType.PUBLIC,
      protocols: [
        transfer.Protocol.SFTP,
      ],
      securityPolicy: transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05,
      identityProviderType: transfer.IdentityProviderType.SERVICE_MANAGED,
    });

    const user1 = sftpServer.adduser({
      userName: 'abc',
      publicKeys: ['key1', 'key2'],
      permissions: transfer.Permission.READ_WRITE,
    });

  }
}
