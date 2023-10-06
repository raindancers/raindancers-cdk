import * as core from 'aws-cdk-lib';
import * as constructs from 'constructs';
import { transfer } from '../../src/index';

export class TransferTest extends core.Stack {

  constructor(scope: constructs.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // create a SFTP transferServer, by default this will create a log group, and logging role

    const sftpServer = new transfer.TransferServer(this, 'sftpserver', {
      domain: 'mysftpserver.domain.com',
      endpointType: transfer.EndpointType.PUBLIC,
      protocols: [
        transfer.Protocol.SFTP,
      ],
      securityPolicy: transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05,
      identityProviderType: transfer.IdentityProviderType.SERVICE_MANAGED,
    });

    // this will create a home directory that is is
    // 'hosted' in a S3 bucket
    // the sftp user will have permissions as supplied.
    // authentication is by keys  
    const user1 = sftpServer.adduser({
      userName: 'abc',
      publicKeys: ['key1', 'key2'],
      permissions: transfer.Permission.READ_WRITE,
    });
  }
}
