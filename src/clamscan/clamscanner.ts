// This work is derived from https://github.com/awslabs/cdk-serverless-clamscan/blob/main/src/index.ts

import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_iam as iam,
  aws_lambda as lambda,
  aws_efs as efs,
  aws_events as events,
  aws_events_targets as events_targets,
  aws_lambda_destinations as lambda_destinations,
  aws_s3 as s3,
  aws_s3_notifications as s3n,
  aws_sqs as sqs,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


/**
 * Interface for ServerlessClamscan Virus Definitions S3 Bucket Logging.
 */
export interface ServerlessClamscanLoggingProps {
  /**
   * Destination bucket for the server access logs (Default: Creates a new S3 Bucket for access logs).
   */
  readonly logsBucket?: boolean | s3.IBucket;
  /**
   * Optional log file prefix to use for the bucket's access logs, option is ignored if logs_bucket is set to false.
   */
  readonly logsPrefix?: string;
}

/**
 * Interface for creating a ServerlessClamscan.
 */
export interface ServerlessClamscanProps {
  /**
   * An optional list of S3 buckets to configure for ClamAV Virus Scanning; buckets can be added later by calling addSourceBucket.
   */
  readonly buckets?: s3.IBucket[];
  /**
   * Optionally set a reserved concurrency for the virus scanning Lambda.
   * @see https://docs.aws.amazon.com/lambda/latest/operatorguide/reserved-concurrency.html
   */
  readonly reservedConcurrency?: number;
  /**
   * Optionally set the memory allocation for the scan function. Note that low memory allocations may cause errors. (Default: 10240).
   * @see https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html
   */
  readonly scanFunctionMemorySize?: number;
  /**
   * The Lambda Destination for files marked 'CLEAN' or 'INFECTED' based on the ClamAV Virus scan or 'N/A' for scans triggered by S3 folder creation events marked (Default: Creates and publishes to a new Event Bridge Bus if unspecified).
   */
  readonly onResult?: lambda.IDestination;
  /**
   * The Lambda Destination for files that fail to scan and are marked 'ERROR' or stuck 'IN PROGRESS' due to a Lambda timeout (Default: Creates and publishes to a new SQS queue if unspecified).
   */
  readonly onError?: lambda.IDestination;
  /**
   * Whether or not to enable encryption on EFS filesystem (Default: enabled).
   */
  readonly efsEncryption?: boolean;
  /**
   * Set the performance mode of the EFS file system (Default: GENERAL_PURPOSE).
   */
  readonly efsPerformanceMode?: efs.PerformanceMode;
  /**
   * Whether or not to enable Access Logging for the Virus Definitions bucket, you can specify an existing bucket and prefix (Default: Creates a new S3 Bucket for access logs).
   */
  readonly defsBucketAccessLogsConfig?: ServerlessClamscanLoggingProps;
  /**
   * Allows the use of imported buckets. When using imported buckets the user is responsible for adding the required policy statement to the bucket policy: `getPolicyStatementForBucket()` can be used to retrieve the policy statement required by the solution.
   */
  readonly acceptResponsibilityForUsingImportedBucket?: boolean;
  /**
   * RaiseSecurityHubAlerts?:
   */
  readonly raiseSecurityHubAlerts?: boolean | undefined;

}

/**
  An [aws-cdk](https://github.com/aws/aws-cdk) construct that uses [ClamAV®](https://www.clamav.net/).
  to scan objects in Amazon S3 for viruses. The construct provides a flexible interface for a system
  to act based on the results of a ClamAV virus scan.

  The construct creates a Lambda function with EFS integration to support larger files.
  A VPC with isolated subnets, a S3 Gateway endpoint will also be created.

  Additionally creates an twice-daily job to download the latest ClamAV definition files to the
  Virus Definitions S3 Bucket by utilizing an EventBridge rule and a Lambda function and
  publishes CloudWatch Metrics to the 'serverless-clamscan' namespace.

  __Important O&M__:
  When ClamAV publishes updates to the scanner you will see “Your ClamAV installation is OUTDATED” in your scan results.
  While the construct creates a system to keep the database definitions up to date, you must update the scanner to
  detect all the latest Viruses.

  Update the docker images of the Lambda functions with the latest version of ClamAV by re-running `cdk deploy`.

  Successful Scan Event format
  ```json
  {
     "source": "serverless-clamscan",
     "input_bucket": <input_bucket_name>,
     "input_key": <object_key>,
     "status": <"CLEAN"|"INFECTED"|"N/A">,
     "message": <scan_summary>,
   }
  ```

  Note: The Virus Definitions bucket policy will likely cause a deletion error if you choose to delete
  the stack associated in the construct. However since the bucket itself gets deleted, you can delete
  the stack again to resolve the error.
 */
export class ServerlessClamscan extends constructs.Construct {
  /**
    The Lambda Destination for failed on erred scans [ERROR, IN PROGRESS (If error is due to Lambda timeout)].
   */
  public readonly errorDest: lambda.IDestination;

  /**
    The Lambda Destination for completed ClamAV scans [CLEAN, INFECTED].
   */
  public readonly resultDest: lambda.IDestination;

  /**
    Conditional: The SQS Queue for erred scans if a failure (onError) destination was not specified.
   */
  public readonly errorQueue?: sqs.Queue;

  /**
    Conditional: The SQS Dead Letter Queue for the errorQueue if a failure (onError) destination was not specified.
   */
  public readonly errorDeadLetterQueue?: sqs.Queue;

  /**
    Conditional: The Event Bridge Bus for completed ClamAV scans if a success (onResult) destination was not specified.
   */
  public readonly resultBus?: events.EventBus;

  /**
    Conditional: An Event Bridge Rule for files that are marked 'CLEAN' by ClamAV if a success destination was not specified.
   */
  public readonly cleanRule?: events.Rule;

  /**
    Conditional: An Event Bridge Rule for files that are marked 'INFECTED' by ClamAV if a success destination was not specified.
   */
  public readonly infectedRule?: events.Rule;

  /**
    Conditional: The Bucket for access logs for the virus definitions bucket if logging is enabled (defsBucketAccessLogsConfig).
   */
  public readonly defsAccessLogsBucket?: s3.IBucket;

  /**
    Conditional: When true, the user accepted the responsibility for using imported buckets.
   */
  public readonly useImportedBuckets?: boolean;

  private _scanFunction: lambda.DockerImageFunction;
  private _s3Gw: ec2.GatewayVpcEndpoint;
  private _efsRootPath = '/lambda';
  private _efsMountPath = `/mnt${this._efsRootPath}`;
  private _efsDefsPath = 'virus_database/';

  /**
   * Creates a ServerlessClamscan construct.
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param props A `ServerlessClamscanProps` interface.
   */
  constructor(scope: constructs.Construct, id: string, props: ServerlessClamscanProps) {
    super(scope, id);

    this.useImportedBuckets = props.acceptResponsibilityForUsingImportedBucket;

    if (props.raiseSecurityHubAlerts) {

    }

    if (!props.onResult) {
      this.resultBus = new events.EventBus(this, 'ScanResultBus');
      this.resultDest = new lambda_destinations.EventBridgeDestination(this.resultBus);
      this.infectedRule = new events.Rule(this, 'InfectedRule', {
        eventBus: this.resultBus,
        description: 'Event for when a file is marked INFECTED',
        eventPattern: {
          detail: {
            responsePayload: {
              source: ['serverless-clamscan'],
              status: ['INFECTED'],
            },
          },
        },
      });
      this.cleanRule = new events.Rule(this, 'CleanRule', {
        eventBus: this.resultBus,
        description: 'Event for when a file is marked CLEAN',
        eventPattern: {
          detail: {
            responsePayload: {
              source: ['serverless-clamscan'],
              status: ['CLEAN'],
            },
          },
        },
      });
    } else {
      this.resultDest = props.onResult;
    }

    if (!props.onError) {
      this.errorDeadLetterQueue = new sqs.Queue(this, 'ScanErrorDeadLetterQueue', {
        encryption: sqs.QueueEncryption.KMS_MANAGED,
      });
      this.errorDeadLetterQueue.addToResourcePolicy(new iam.PolicyStatement({
        actions: ['sqs:*'],
        effect: iam.Effect.DENY,
        principals: [new iam.AnyPrincipal()],
        conditions: { Bool: { 'aws:SecureTransport': false } },
        resources: [this.errorDeadLetterQueue.queueArn],
      }));
      this.errorQueue = new sqs.Queue(this, 'ScanErrorQueue', {
        encryption: sqs.QueueEncryption.KMS_MANAGED,
        deadLetterQueue: {
          maxReceiveCount: 3,
          queue: this.errorDeadLetterQueue,
        },
      });
      this.errorQueue.addToResourcePolicy(new iam.PolicyStatement({
        actions: ['sqs:*'],
        effect: iam.Effect.DENY,
        principals: [new iam.AnyPrincipal()],
        conditions: { Bool: { 'aws:SecureTransport': false } },
        resources: [this.errorQueue.queueArn],
      }));
      this.errorDest = new lambda_destinations.SqsDestination(this.errorQueue);
    } else {
      this.errorDest = props.onError;
    }

    const vpc = new ec2.Vpc(this, 'ScanVPC', {
      subnetConfiguration: [
        {
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          name: 'Isolated',
        },
      ],
    });

    vpc.addFlowLog('FlowLogs');

    this._s3Gw = vpc.addGatewayEndpoint('S3Endpoint', {
      service: ec2.GatewayVpcEndpointAwsService.S3,
    });

    const fileSystem = new efs.FileSystem(this, 'ScanFileSystem', {
      vpc: vpc,
      encrypted: props.efsEncryption === false ? false : true,
      lifecyclePolicy: efs.LifecyclePolicy.AFTER_7_DAYS,
      performanceMode: props.efsPerformanceMode ?? efs.PerformanceMode.GENERAL_PURPOSE,
      removalPolicy: core.RemovalPolicy.DESTROY,
      securityGroup: new ec2.SecurityGroup(this, 'ScanFileSystemSecurityGroup', {
        vpc: vpc,
        allowAllOutbound: false,
      }),
    });

    const lambda_ap = fileSystem.addAccessPoint('ScanLambdaAP', {
      createAcl: {
        ownerGid: '1000',
        ownerUid: '1000',
        permissions: '755',
      },
      posixUser: {
        gid: '1000',
        uid: '1000',
      },
      path: this._efsRootPath,
    });

    const logs_bucket = props.defsBucketAccessLogsConfig?.logsBucket;
    const logs_bucket_prefix = props.defsBucketAccessLogsConfig?.logsPrefix;
    if (logs_bucket === true || logs_bucket === undefined) {
      this.defsAccessLogsBucket = new s3.Bucket(
        this,
        'VirusDefsAccessLogsBucket',
        {
          encryption: s3.BucketEncryption.S3_MANAGED,
          removalPolicy: core.RemovalPolicy.RETAIN,
          blockPublicAccess: {
            blockPublicAcls: true,
            blockPublicPolicy: true,
            ignorePublicAcls: true,
            restrictPublicBuckets: true,
          },
          objectOwnership: s3.ObjectOwnership.OBJECT_WRITER,
        },
      );
      this.defsAccessLogsBucket.addToResourcePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          actions: ['s3:*'],
          resources: [
            this.defsAccessLogsBucket.arnForObjects('*'),
            this.defsAccessLogsBucket.bucketArn,
          ],
          principals: [new iam.AnyPrincipal()],
          conditions: {
            Bool: {
              'aws:SecureTransport': false,
            },
          },
        }),
      );
    } else if (logs_bucket != false) {
      this.defsAccessLogsBucket = logs_bucket;
    }

    const defs_bucket = new s3.Bucket(this, 'VirusDefsBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: core.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      serverAccessLogsBucket: this.defsAccessLogsBucket,
      serverAccessLogsPrefix:
        logs_bucket === false ? undefined : logs_bucket_prefix,
      blockPublicAccess: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      },
    });

    defs_bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.DENY,
        actions: ['s3:*'],
        resources: [defs_bucket.arnForObjects('*'), defs_bucket.bucketArn],
        principals: [new iam.AnyPrincipal()],
        conditions: {
          Bool: {
            'aws:SecureTransport': false,
          },
        },
      }),
    );
    defs_bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject', 's3:ListBucket'],
        resources: [defs_bucket.arnForObjects('*'), defs_bucket.bucketArn],
        principals: [new iam.AnyPrincipal()],
        conditions: {
          StringEquals: {
            'aws:SourceVpce': this._s3Gw.vpcEndpointId,
          },
        },
      }),
    );
    defs_bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.DENY,
        actions: ['s3:PutBucketPolicy', 's3:DeleteBucketPolicy'],
        resources: [defs_bucket.bucketArn],
        notPrincipals: [new iam.AccountRootPrincipal()],
      }),
    );
    this._s3Gw.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject', 's3:ListBucket'],
        resources: [defs_bucket.arnForObjects('*'), defs_bucket.bucketArn],
        principals: [new iam.AnyPrincipal()],
      }),
    );

    this._scanFunction = new lambda.DockerImageFunction(this, 'ServerlessClamscan', {
      code: lambda. DockerImageCode.fromImageAsset(
        path.join(__dirname, '../../assets/calmscan/scan'),
        {
          buildArgs: {
            // Only force update the docker layer cache once a day
            CACHE_DATE: new Date().toDateString(),
          },
          extraHash: Date.now().toString(),
        },
      ),
      onSuccess: this.resultDest,
      onFailure: this.errorDest,
      filesystem: lambda.FileSystem.fromEfsAccessPoint(
        lambda_ap,
        this._efsMountPath,
      ),
      vpc: vpc,
      vpcSubnets: { subnets: vpc.isolatedSubnets },
      allowAllOutbound: false,
      timeout: core.Duration.minutes(15),
      memorySize: props.scanFunctionMemorySize ?? 10240,
      reservedConcurrentExecutions: props.reservedConcurrency,
      environment: {
        EFS_MOUNT_PATH: this._efsMountPath,
        EFS_DEF_PATH: this._efsDefsPath,
        DEFS_URL: defs_bucket.virtualHostedUrlForObject(),
        POWERTOOLS_METRICS_NAMESPACE: 'serverless-clamscan',
        POWERTOOLS_SERVICE_NAME: 'virus-scan',
      },
    });
    this._scanFunction.connections.allowToAnyIpv4(
      ec2.Port.tcp(443),
      'Allow outbound HTTPS traffic for S3 access.',
    );

    if (props.raiseSecurityHubAlerts) {
      this._scanFunction.addEnvironment('SEND_SECURITY_HUB_EVENT', 'true');
    }

    defs_bucket.grantRead(this._scanFunction);

    const download_defs = new lambda.DockerImageFunction(this, 'DownloadDefs', {
      code: lambda.DockerImageCode.fromImageAsset(
        path.join(__dirname, '../../assets/clamscan/download_defs'),
        {
          buildArgs: {
            // Only force update the docker layer cache once a day
            CACHE_DATE: new Date().toDateString(),
          },
          extraHash: Date.now().toString(),
        },
      ),
      timeout: core.Duration.minutes(5),
      memorySize: 1024,
      environment: {
        DEFS_BUCKET: defs_bucket.bucketName,
        POWERTOOLS_SERVICE_NAME: 'freshclam-update',
      },
    });
    const stack = core.Stack.of(this);

    if (download_defs.role) {
      const download_defs_role = `arn:${stack.partition}:sts::${stack.account}:assumed-role/${download_defs.role.roleName}/${download_defs.functionName}`;
      const download_defs_assumed_principal = new iam.ArnPrincipal(
        download_defs_role,
      );
      defs_bucket.addToResourcePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          actions: ['s3:PutObject*'],
          resources: [defs_bucket.arnForObjects('*')],
          notPrincipals: [download_defs.role, download_defs_assumed_principal],
        }),
      );
      defs_bucket.grantReadWrite(download_defs);
    }

    new events.Rule(this, 'VirusDefsUpdateRule', {
      schedule: events.Schedule.rate(core.Duration.hours(12)),
      targets: [new events_targets.LambdaFunction(download_defs)],
    });

    const init_defs_cr = new lambda.Function(this, 'InitDefs', {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset(
        path.join(__dirname, '../assets/clamscan/initialize_defs_cr'),
      ),
      handler: 'lambda.lambda_handler',
      timeout: core.Duration.minutes(5),
    });
    download_defs.grantInvoke(init_defs_cr);
    new core.CustomResource(this, 'InitDefsCr', {
      serviceToken: init_defs_cr.functionArn,
      properties: {
        FnName: download_defs.functionName,
      },
    });

    if (props.buckets) {
      props.buckets.forEach((bucket) => {
        this.addSourceBucket(bucket);
      });
    }
  }

  /**
   * @returns ArnPrincipal the ARN of the assumed role principal for the scan function
   */
  get scanAssumedPrincipal(): iam.ArnPrincipal {
    if (this._scanFunction.role) {
      const stack = core.Stack.of(this);
      const scan_assumed_role = `arn:${stack.partition}:sts::${stack.account}:assumed-role/${this._scanFunction.role.roleName}/${this._scanFunction.functionName}`;
      return new iam.ArnPrincipal(scan_assumed_role);
    } else {
      throw new Error('The scan function role is undefined');
    }
  }


  /**
   * Returns the statement that should be added to the bucket policy
     in order to prevent objects to be accessed when they are not clean
     or there have been scanning errors: this policy should be added
     manually if external buckets are passed to addSourceBucket()
   * @param bucket The bucket which you need to protect with the policy
   * @returns PolicyStatement the policy statement if available
   */
  getPolicyStatementForBucket(bucket: s3.IBucket): iam.PolicyStatement {
    if (this._scanFunction.role) {
      const scan_assumed_principal = this.scanAssumedPrincipal;
      return new iam.PolicyStatement({
        effect: iam.Effect.DENY,
        actions: ['s3:GetObject'],
        resources: [bucket.arnForObjects('*')],
        principals: [new iam.AnyPrincipal()],
        conditions: {
          StringEquals: {
            's3:ExistingObjectTag/scan-status': [
              'IN PROGRESS',
              'INFECTED',
              'ERROR',
            ],
          },
          ArnNotEquals: {
            'aws:PrincipalArn': [this._scanFunction.role.roleArn, scan_assumed_principal.arn],
          },
        },
      });
    } else {
      throw new Error("Can't generate a valid S3 bucket policy, the scan function role is undefined");
    }
  }

  /**
   * Sets the specified S3 Bucket as a s3:ObjectCreate* for the ClamAV function.
     Grants the ClamAV function permissions to get and tag objects.
     Adds a bucket policy to disallow GetObject operations on files that are tagged 'IN PROGRESS', 'INFECTED', or 'ERROR'.
   * @param bucket The bucket to add the scanning bucket policy and s3:ObjectCreate* trigger to.
   */
  addSourceBucket(bucket: s3.IBucket) {
    bucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(this._scanFunction),
    );

    bucket.grantRead(this._scanFunction);
    this._scanFunction.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:PutObjectTagging', 's3:PutObjectVersionTagging'],
        resources: [bucket.arnForObjects('*')],
      }),
    );

    if (this._scanFunction.role) {
      const scan_assumed_principal = this.scanAssumedPrincipal;
      this._s3Gw.addToPolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject*', 's3:GetBucket*', 's3:List*'],
          resources: [bucket.bucketArn, bucket.arnForObjects('*')],
          principals: [this._scanFunction.role, scan_assumed_principal],
        }),
      );
      this._s3Gw.addToPolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:PutObjectTagging', 's3:PutObjectVersionTagging'],
          resources: [bucket.arnForObjects('*')],
          principals: [this._scanFunction.role, scan_assumed_principal],
        }),
      );

      const result: iam.AddToResourcePolicyResult = bucket.addToResourcePolicy(
        this.getPolicyStatementForBucket(bucket),
      );

      if (!result.statementAdded && !this.useImportedBuckets) {
        throw new Error('acceptResponsibilityForUsingImportedBucket must be set when adding an imported bucket. When using imported buckets the user is responsible for adding the required policy statement to the bucket policy: `getPolicyStatementForBucket()` can be used to retrieve the policy statement required by the solution');
      }
    }
  }
}