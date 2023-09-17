import * as path from 'path';
import * as core from 'aws-cdk-lib';

import {
  aws_iam as iam,
  aws_lambda,
  aws_route53 as r53,
  aws_s3 as s3,
  aws_ses as ses,
  aws_ses_actions as ses_actions,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Forward mail sent to an address to an array of of address
 */
export interface ForwardingRule {
  /**
   * a regex expression forthe address of the incoming mail to match on.  This
   * should only be the portion of the address before the '@'
   */
  readonly sentTo: string;
  /**
   * where to forward the mail to. These should be fully specified
   * eg.   someaddress@somedomain.com
   */
  readonly forwardTo: string[];
  /**
   * The priority of the rule, lower has a higher priority
   */
  readonly priority: number;
}

/**
 * Propertys for Remailer
 */
export interface RemailerProps extends core.ResourceProps {
  /**
   * the Zone where the Remailer's DNS records are
   */
  readonly zone: r53.IPublicHostedZone;
  /**
   * Forwarding rules for the zone
   */
  readonly forwardingRules: ForwardingRule[];
  /**
   * What is the address of the remailer, should only be specifed as the portion before the '@'
   */
  readonly sender: string;
}

/**
 * Creates a remailing service for an entire Domain. Typical use case is to collate al
 */
export class ReMailer extends core.Resource {

  constructor(scope: constructs.Construct, id: string, props: RemailerProps) {
    super(scope, id, props);

    // this bucket will hold store incoming email for the domain
    const mailboxBucket = new s3.Bucket(this, 'RxBucket', {
      removalPolicy: core.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,

      // delete objects after 3 year, move to IA after  days, and archive after 30
      lifecycleRules: [
        {
          abortIncompleteMultipartUploadAfter: core.Duration.days(90),
          expiration: core.Duration.days(1095), // three years
          transitions: [
            {
              storageClass: s3.StorageClass.INFREQUENT_ACCESS,
              transitionAfter: core.Duration.days(7),
            },
            {
              storageClass: s3.StorageClass.DEEP_ARCHIVE,
              transitionAfter: core.Duration.days(30),
            },
          ],
        },
      ],
    });

    mailboxBucket.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.ServicePrincipal('ses.amazonaws.com')],
      actions: ['s3:PutObject'],
      conditions: {
        StringEquals: {
          'aws:Referer': `${core.Aws.ACCOUNT_ID}`,
        },
      },
    }));

    // add DKIM and MAIL FROM records
    const identity = new ses.EmailIdentity(this, 'Identity', {
      identity: ses.Identity.publicHostedZone(props.zone),
    });

    // add a MX record in the DNS
    new r53.MxRecord(this, 'mxRecord', {
      zone: props.zone,
      values: [{
        hostName: `inbound-smtp.${core.Aws.REGION}.amazonaws.com`,
        priority: 10,
      }],
    });

    const remailerFn = new aws_lambda.Function(this, 'Resource', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'remailer.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/remailer/')),
      timeout: core.Duration.seconds(60),
      memorySize: 256,
      environment: {
        MAIL_BUCKET: mailboxBucket.bucketName,
        MAIL_PREFIX: 'rxmail',
        FORWARDING_RULE: JSON.stringify(props.forwardingRules),
        SENDER: props.sender,

      },
    });

    // allow the lambda to send emails
    remailerFn.addToRolePolicy(new iam.PolicyStatement({
      actions: ['ses:SendRawEmail'],
      effect: iam.Effect.ALLOW,
      resources: [`arn:${core.Aws.PARTITION}:ses:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:identity/${identity.emailIdentityName}`],
    }));

    mailboxBucket.grantRead(remailerFn);

    const receiptRules = new ses.ReceiptRuleSet(this, 'mailRx', {
      dropSpam: true,
    });

    // receive email for the entire domain
    receiptRules.addRule(props.zone.zoneName, {
      enabled: true,
      recipients: [props.zone.zoneName],
      actions: [
        new ses_actions.S3({
          bucket: mailboxBucket,
          objectKeyPrefix: 'rxmail/',
        }),
        new ses_actions.Lambda({
          function: remailerFn,
        }),
      ],
    });
  }
}