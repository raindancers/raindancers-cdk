import * as path from 'path';
import {
  aws_route53 as r53,
  aws_s3 as s3,
  aws_certificatemanager as acm,
  aws_cloudfront as cloudfront,
  aws_s3_deployment as s3deploy,
  aws_route53_targets as targets,
  aws_cloudfront_origins as cloudfront_origins,
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as core from 'aws-cdk-lib';

import { Construct } from 'constructs';

export interface StaticSiteProps {
  readonly domainName: string;
  readonly sitePath: string;
  readonly delegationRole: iam.IRole;
  readonly parentZone: string;
}

/**
   * Static site infrastructure, which deploys site content to an S3 bucket.
   *
   * The site redirects from HTTP to HTTPS, using a CloudFront distribution,
   * Route53 alias record, and ACM certificate.
   */
export class StaticSite extends Construct {
  constructor(scope: core.Stack, id: string, props: StaticSiteProps) {
    super(scope, id);

    const zone = new r53.PublicHostedZone(this, 'publicZone', {
      zoneName: props.domainName,
    });

    //const delegationRole = iam.Role.fromRoleArn(this, 'delegationRole', 'arn:aws:iam::752860630792:role/depconCloudZoneDelegation');

    const delegation = new r53.CrossAccountZoneDelegationRecord(this, 'delegateRecords', {
      delegatedZone: zone,
      parentHostedZoneName: props.parentZone,
      delegationRole: props.delegationRole,
    });


    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(this, 'cloudfront-OAI', {
      comment: `OAI for ${id}`,
    });

    new core.CfnOutput(this, 'Site', { value: 'https://' + props.domainName });

    // Content bucket
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,

      /**
         * The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
         * the new bucket, and it will remain in your account until manually deleted. By setting the policy to
         * DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
         */
      removalPolicy: core.RemovalPolicy.DESTROY, // NOT recommended for production code

      /**
         * For sample purposes only, if you create an S3 bucket then populate it, stack destruction fails.  This
         * setting will enable full cleanup of the demo.
         */
      autoDeleteObjects: true, // NOT recommended for production code
    });

    // Grant access to cloudfront
    siteBucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [siteBucket.arnForObjects('*')],
      principals: [new iam.CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)],
    }));
    new core.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });

    // TLS certificate
    const certificate = new acm.Certificate(this, 'SiteCertificate', {
      domainName: props.domainName,
      validation: acm.CertificateValidation.fromDns(zone),
    });

    certificate.node.addDependency(delegation);


    // CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
      certificate: certificate,
      defaultRootObject: 'index.html',
      domainNames: [props.domainName],
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 403,
          responsePagePath: '/error.html',
          ttl: core.Duration.minutes(30),
        },
      ],
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(siteBucket, { originAccessIdentity: cloudfrontOAI }),
        compress: true,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });

    new core.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });

    // Route53 alias record for the CloudFront distribution
    new r53.ARecord(this, 'SiteAliasRecord', {
      recordName: props.domainName,
      target: r53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      zone,
    });

    // Deploy site contents to S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [s3deploy.Source.asset(path.join(__dirname, props.sitePath))],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}