import * as fs from 'fs';
import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_s3 as s3,
  aws_lambda as lambda,
  aws_s3_deployment as s3deploy,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface OpenAPIProxyProps {
  readonly pathToOpenApiSpec: string;
  readonly proxyFunctionName: string;
  // this is a work around for the time being.
  readonly authHeaderOveride?: string | undefined;
}

export class OpenAPIProxy extends constructs.Construct {
  public readonly objectUri: string;
  public readonly proxyFunction: lambda.Function;
  public readonly functionUrl: lambda.FunctionUrl;

  constructor(scope: constructs.Construct, id: string, props: OpenAPIProxyProps) {
    super(scope, id);

    // Read base URL and extract API key header from OpenAPI spec
    const openApiSpec = JSON.parse(fs.readFileSync(props.pathToOpenApiSpec, 'utf8'));
    let baseUrl = openApiSpec.servers[0].url;

    // Handle server variables by substituting with default values
    if (openApiSpec.servers[0].variables) {
      for (const [varName, varConfig] of Object.entries(openApiSpec.servers[0].variables)) {
        const defaultValue = (varConfig as any).default;
        baseUrl = baseUrl.replace(`{${varName}}`, defaultValue);
      }
    }

    let apiKeyHeaderName = 'X-API-Key';
    if (props.authHeaderOveride) {
      apiKeyHeaderName = props.authHeaderOveride;
    } else {
    // Extract API key header name from security schemes
      if (openApiSpec.components?.securitySchemes) {
        for (const [, scheme] of Object.entries(openApiSpec.components.securitySchemes)) {
          const s = scheme as any;
          if (s.type === 'apiKey' && s.in === 'header') {
            apiKeyHeaderName = s.name;
            break;
          }
        }
      }
    }

    // Lambda proxy function to handle Bearer token authentication
    this.proxyFunction = new lambda.Function(this, 'ProxyFunction', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'mcp_proxy.handler',
      functionName: props.proxyFunctionName,
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../lambda/agentCore/openapi_proxy')),
      timeout: core.Duration.seconds(30),
      environment: {
        BASE_URL: baseUrl,
        API_KEY_HEADER: apiKeyHeaderName,
      },
    });

    // No need for Secrets Manager permissions - AgentCore provides the API key

    // Create Lambda function URL with no auth for direct access
    this.functionUrl = this.proxyFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    // Create S3 bucket
    const bucket = new s3.Bucket(this, 'OpenApiBucket', {
      removalPolicy: core.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Upload original OpenAPI spec to S3
    const deployment = new s3deploy.BucketDeployment(this, 'DeploySpec', {
      sources: [s3deploy.Source.asset(path.dirname(props.pathToOpenApiSpec))],
      destinationBucket: bucket,
      destinationKeyPrefix: 'specs/',
    });

    // Lambda to modify the OpenAPI spec
    const modifierFunction = new lambda.Function(this, 'ModifierFunction', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'modifier.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../lambda/agentCore')),
      timeout: core.Duration.seconds(60),

    });

    // Grant permissions
    bucket.grantReadWrite(modifierFunction);

    const fileName = path.basename(props.pathToOpenApiSpec);


    // Custom resource to trigger modification
    const customResource = new core.CustomResource(this, 'ModifySpec', {
      serviceToken: modifierFunction.functionArn,
      properties: {
        BucketName: bucket.bucketName,
        OriginalKey: `specs/${fileName}`,
        ModifiedKey: `modified/${fileName}`,
        FunctionUrl: this.functionUrl.url,

      },
    });

    customResource.node.addDependency(deployment);

    // Set the object URI
    this.objectUri = `s3://${bucket.bucketName}/modified/${fileName}`;
  }
}