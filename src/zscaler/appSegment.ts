import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_lambda as lambda,
  aws_logs as logs,
  aws_secretsmanager as sm,
  custom_resources as cr,
  aws_kms as kms,
}

  from 'aws-cdk-lib';


// import { LifecycleHook } from 'aws-cdk-lib/aws-autoscaling';

import * as constructs from 'constructs';


export type PortList = string[]

export interface ZscalerAppSegmentProps {
  readonly zscalerAPIKeySecret: sm.ISecret;
  /**
   * If the Secret Is being called cross account, then you must also, provide the KmsKey
   * @default none
   */
  readonly zscalerAPIKmsKey?: kms.IKey | undefined;
  readonly segmentName: string;
  readonly domainNames?: string[] | undefined;
  readonly tcpPorts?: PortList[] | undefined;
  readonly udpPorts?: PortList[] | undefined;
  readonly description: string;
  readonly segmentGroupId: string;
  readonly serverGroupId: string;
}

[];

export class ZscalerAppSegment extends constructs.Construct {

  appSegment: core.CustomResource;

  constructor(scope: constructs.Construct, id: string, props: ZscalerAppSegmentProps) {
    super(scope, id);

    // check to see that at least of one of props.tcpPorts or props.udpPorts is defined
    if ((props.tcpPorts == undefined) && (props.udpPorts == undefined)) {
      throw new Error('Either props.tcpPorts or props.udpPorts must be defined');
    }


    const appSegmentLambda = new lambda.Function(this, 'appSegmentLambda', {
      runtime: lambda.Runtime.PYTHON_3_12,
      environment: {
        API_KEY_ARN: props.zscalerAPIKeySecret.secretArn,
      },
      handler: 'appsegment.on_event',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/zscaler/'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_12.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      timeout: core.Duration.seconds(60),
      logRetention: logs.RetentionDays.ONE_WEEK,
    });


    // allow the lambda to read the secret
    props.zscalerAPIKeySecret.grantRead(appSegmentLambda);

    if ( props.zscalerAPIKmsKey ) {
      props.zscalerAPIKmsKey.grantDecrypt(appSegmentLambda);
    }


    this.appSegment = new core.CustomResource(this, 'ZscalerAppSegment', {
      resourceType: 'Custom::ZscalerAppSegment',
      properties: {
        SegmentName: props.segmentName,
        DomainNames: props.domainNames,
        TcpPorts: props.tcpPorts,
        UdpPorts: props.udpPorts,
        Description: props.description,
        SegmentGroupId: props.segmentGroupId,
        ServerGroupId: props.serverGroupId,
      },
      serviceToken: new cr.Provider(this, 'appSegmentProvider', {
        onEventHandler: appSegmentLambda,
        providerFunctionName: core.PhysicalName.GENERATE_IF_NEEDED,
      }).serviceToken,

    });

  }
}