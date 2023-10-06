
import {
  aws_transfer as transfer,
  aws_certificatemanager as certificatemanager,
  aws_iam as iam,
  aws_logs as logs,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


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
  SFTP = 'STFP',
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
  readonly domain: string;
  /**
   * The endpoint type that you want your transfer server to be.
   * @default  EndpointType.PUBLIC
   */
  readonly endpointType?: EndpointType | undefined;
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
   * The Private ASN of the TransitGateway
   */
  public readonly arn: string;

  constructor(scope: constructs.Construct, id: string, props: TransferServerProps) {
    super(scope, id);

    // create a regex expression to check that a string is a valid domainname
    const domainRegex = /^(?=.{1,253}$)[a-zA-Z0-9][a-zA-Z0-9-]{0,62}[a-zA-Z0-9]$/;
    if (!domainRegex.test(props.domain)) {
      throw new Error('domain name is not valid');
    };

    let logDestinations: string[] = [];
    if (props.logDestinations) {
      props.logDestinations.forEach((logGroup) => {
        logDestinations.push(logGroup.logGroupArn);
      });
    }

    const server = new transfer.CfnServer(this, 'Resource', {
      certificate: props.certificate?.certificateArn,
      domain: props.domain,
      endpointType: props.endpointType ?? EndpointType.PUBLIC,
      identityProviderType: props.identityProviderType ?? IdentityProviderType.SERVICE_MANAGED,
      loggingRole: props.loggingRole?.roleArn,
      postAuthenticationLoginBanner: props.postAuthenticationLoginBanner ?? 'This server is subject to Acceptable Use Policy. All actions are logged',
      preAuthenticationLoginBanner: props.preAuthenticationLoginBanner ?? 'This system is for authorized purposes only',
      protocols: props.protocols,
      securityPolicyName: props.securityPolicy ?? SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05,
      structuredLogDestinations: logDestinations,
    });

    this.id = server.attrServerId;
    this.arn = server.attrArn;

  }
}