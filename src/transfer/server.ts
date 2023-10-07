
import {
  aws_transfer as transfer,
  aws_certificatemanager as certificatemanager,
  aws_iam as iam,
  aws_logs as logs,
  aws_s3 as s3,
  aws_transfer,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import {
  ITransferUser,
} from './index';

export enum StorageType {
  S3 = 'S3',
  //EFS = 'EFS',  not yet implemented
}

export enum SecurityPolicy {
  /**
   * https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html#pq-policies
   */
  TRANSFER_SECURITY_POLICY_2023_05 = 'TransferSecurityPolicy-2023-05',
  TRANSFER_SECURITY_POLICY_2022_03 = 'TransferSecurityPolicy-2022-03',
  TRANSFER_SECURITY_POLICY_2020_06 = 'TransferSecurityPolicy-2020-06',
  TRANSFER_SECURITY_POLICY_2018_11 = 'TransferSecurityPolicy-2018-11',
  TRANSFER_SECURITY_POLICY_PQ_SSH_EXPERIMENTAL_2023_04 = 'TransferSecurityPolicy-PQ-SSH-Experimental-2023-04',
  TRANSFER_SECURITY_POLICY_PQ_SSH_FIPS_2023_04 = 'TransferSecurityPolicy-PQ-SSH-FIPS-Experimental-2023-04'
}

export enum IdentityProviderType {
  SERVICE_MANAGED = 'SERVICE_MANAGED',
  // To implement
  // AWS_DIRECTORY_SERVICE = 'AWS_DIRECTORY_SERVICE',
  // API_GATEWAY = 'API_GATEWAY',
  // AWS_LAMBDA = 'AWS_LAMBDA'
}

export enum EndpointType {
  PUBLIC = 'PUBLIC',
  // To implement
  // VPC = 'VPC',
  // VPC_ENDPOINT = 'VPC_ENDPOINT'
}

export enum Protocol {
  /**
   * SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH
   */
  SFTP = 'SFTP',
  /**
   * FTP (File Transfer Protocol): Unencrypted file transfer
   * DO Not use this, its likely that you will not be compliant with security requiremtns
   */
  // FTP = 'FTP',
  /**
   * FTPS (File Transfer Protocol Secure): File transfer with TLS encryption
   */
  // FTPS = 'FTPS',
  /**
   * AS2 (Applicability Statement 2): used for transporting structured business-to-business data
   */
  //AS2 = 'AS2'
}

/**
 * Implmented by `ITransferServer`
*/

export interface ITransferServer {
  /**
   * The ID of the transfer server
   */
  readonly id: string;
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   * See also: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-certificate
   */
  readonly arn: string;
}

export enum Permission {
  READ = 'READ',
  WRITE = 'WRITE',
  READ_WRITE = 'READ_WRITE'
}

export interface AddUserProps {

  readonly userName: string;
  readonly publicKeys: string[];
  readonly permissions?: Permission;
  readonly role?: iam.IRole | undefined;
  readonly bucket?: s3.IBucket | undefined;
  /**
   * Policy
   * @default Default Policy statement.
   */
  readonly policy?: iam.PolicyDocument | undefined;
}

export interface TransferServerProps {

  /**
   * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate
   * A certificate is required if the protocol is set to FTP
   */
  readonly certificate?: certificatemanager.ICertificate | undefined;
  /**
   * Specifies the domain of the storage system that is used for file transfers.
   * See also: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-domain
   */
  readonly domain: StorageType;
  /**
   * The endpoint type that you want your transfer server to be.
   * @default  EndpointType.PUBLIC
   */
  readonly endpointType?: EndpointType | undefined;
  /**
   * disable logging. We have to explicity opt out of logging.
   * @default: false
   */
  readonly disableLogging?: boolean | undefined;
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging
   *  for Amazon S3 or Amazon EFSevents.
   */
  readonly loggingRole?: iam.IRole | undefined;
  /**
   * This string is displayed after the user authenticates.
   */
  readonly postAuthenticationLoginBanner?: string | undefined;
  /**
   * This string is displayed before the user authenticates.
   */
  readonly preAuthenticationLoginBanner?: string | undefined;
  /**
   * Protocols The protocol settings that are configured for your server.
   */
  readonly protocols: Protocol[];
  /**
   * Security Policy
   * @ default TRANSFER_SECURITY_POLICY_2023_05
   */
  readonly securityPolicy?: SecurityPolicy | undefined;
  /**
   * log destination
   */
  readonly logDestinations?: logs.ILogGroup[];
  /**
   * identity Provider Type
   * @default SERVICE_MANAGED
   */
  readonly identityProviderType?: IdentityProviderType | undefined;
}


/**
 * Define a TransitGateway.
 * Implements ITransitGateway
 */
export class TransferServer extends constructs.Construct implements ITransferServer {

  // these are the attributes for the construct. The attributes here, must include *ALL* of the attributes in ITransitGateway
  // as we are implmenting ITransitGateway

  /**
   * The id of the transitGateway
   */
  public readonly id: string;

  /**
   * The Arn of the Transfer Server
   */
  public readonly arn: string;

  constructor(scope: constructs.Construct, id: string, props: TransferServerProps) {
    super(scope, id);

    var loggingRole: iam.IRole | undefined;
    var logGroupArns: string[] =[];

    if (!props.disableLogging ?? false) {

      if (props.loggingRole) {
        loggingRole = props.loggingRole;
      } else {
        loggingRole = new iam.Role(this, 'loggingRole', {
          assumedBy: new iam.ServicePrincipal('transfer.amazonaws.com'),
          description: 'logging role for SFTP server',
        });
      }

      if (props.logDestinations) {
        props.logDestinations.forEach((logGroup) => {
          logGroupArns.push(logGroup.logGroupArn);
        });
      } else {
        logGroupArns = [
          new logs.LogGroup(this, 'transferLogs', {
            logGroupName: `/aws/transfer/${id}`,
            retention: logs.RetentionDays.TWO_YEARS,
          }).logGroupArn,
        ];
      }
    }


    const server = new transfer.CfnServer(this, 'Resource', {
      certificate: props.certificate?.certificateArn,
      domain: props.domain,
      endpointType: props.endpointType ?? EndpointType.PUBLIC,
      identityProviderType: props.identityProviderType ?? IdentityProviderType.SERVICE_MANAGED,
      loggingRole: loggingRole?.roleArn,
      postAuthenticationLoginBanner: props.postAuthenticationLoginBanner ?? 'This server is subject to Acceptable Use Policy. All actions are logged',
      preAuthenticationLoginBanner: props.preAuthenticationLoginBanner ?? 'This system is for authorized purposes only',
      protocols: props.protocols,
      securityPolicyName: props.securityPolicy ?? SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05,
      structuredLogDestinations: logGroupArns,
    });


    this.id = server.attrServerId;
    this.arn = server.attrArn;

  }

  public adduser(props: AddUserProps): ITransferUser {

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

    if (props.permissions) {
      if (props.permissions in [Permission.READ, Permission.READ_WRITE] ) {
        defaultPolicy.addStatements(new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            's3:GetObject',
            's3:GetObjectVersion',
          ],
          resources: ['arn:aws:s3:::${transfer:HomeDirectory}*'],
        }));
      };

      if (props.permissions in [Permission.WRITE, Permission.READ_WRITE]) {
        defaultPolicy.addStatements(new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            's3:PutObject',
            's3:GetObject',
            's3:GetObjectVersion',
          ],
          resources: ['arn:aws:s3:::${transfer:HomeDirectory}*'],
        }));
      }
    }

    const policy = props.policy ?? defaultPolicy;

    const userRole = props.role ?? new iam.Role(this, 'userRole', {
      assumedBy: new iam.ServicePrincipal('transfer.amazonaws.com'),
      description: 'SFTP standard user role',
    });

    const sftpBucket = props.bucket ?? new s3.Bucket(this, 'sftpBucket', {
      enforceSSL: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    sftpBucket.grantReadWrite(userRole);

    const user = new aws_transfer.CfnUser(this, 'user', {
      role: userRole.roleArn,
      serverId: this.id,
      userName: props.userName,
      sshPublicKeys: props.publicKeys,
      homeDirectory: `/${sftpBucket.bucketArn}`,
      policy: JSON.stringify(policy),
    });

    return {
      id: user.attrId,
      arn: user.attrArn,
      bucket: sftpBucket,

    };
  }
}