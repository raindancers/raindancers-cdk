import * as fs from 'fs';
import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_iam as iam,
  aws_cognito as cognito,
  aws_s3 as s3,
  aws_s3_deployment as s3deploy,
  aws_lambda as lambda,
  aws_secretsmanager as sm,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface ApiKey {
  readonly secret: sm.ISecret;
  readonly key: string;
}


/**
 * Properties for the AgentCore construct
 */
export interface AgentCoreOpenAPIProps {
  /** The name prefix for all resources */
  readonly name: string;
  /** Path to the OpenAPI specification file */
  readonly pathToOpenApiSpec?: string;
  /** S3 URI to the OpenAPI specification file */
  readonly s3Uri?: string;
  /** Secret containing the API token */
  readonly apiKey: ApiKey;
  /** Optional description for the gateway */
  readonly gatewayDescription?: string | undefined;
}

/**
 * A construct that creates a complete AgentCore Gateway setup with Cognito authentication,
 * S3 storage for OpenAPI specs, and Bedrock AgentCore integration
 */
export class AgentCoreOpenAPI extends constructs.Construct {

  /** The Cognito User Pool ID */
  public readonly userPoolId: string;
  /** The Cognito User Pool Client ID */
  public readonly userPoolClientId: string;
  /** The Bedrock AgentCore Gateway ID */
  public readonly gatewayId: string;

  /** The Bedrock AgentCore Gateway URL */
  public readonly gatewayUrl: string;
  /** The S3 bucket name containing the OpenAPI spec */
  public readonly s3BucketName: string;
  /** The IAM role used for target execution */
  public readonly targetExecutionRole: iam.IRole;

  constructor(scope: constructs.Construct, id: string, props: AgentCoreOpenAPIProps) {
    super(scope, id);

    // Validate that exactly one of pathToOpenApiSpec or s3Uri is provided
    const hasPath = !!props.pathToOpenApiSpec;
    const hasS3Uri = !!props.s3Uri;

    if (!hasPath && !hasS3Uri) {
      throw new Error('Either pathToOpenApiSpec or s3Uri must be provided');
    }
    if (hasPath && hasS3Uri) {
      throw new Error('Only one of pathToOpenApiSpec or s3Uri can be provided');
    }

    if (props.pathToOpenApiSpec) {
      this.validateAssetExists(props.pathToOpenApiSpec);
    }

    const normalizedName = this.normalizeBucketName(props.name);

    // IAM Role for AgentCore Gateway
    const gatewayRole = new iam.Role(this, 'AgentCoreGatewayRole', {
      roleName: `${props.name}-gateway`,
      assumedBy: new iam.ServicePrincipal('bedrock-agentcore.amazonaws.com', {
        conditions: {
          StringEquals: {
            'aws:SourceAccount': core.Stack.of(this).account,
          },
          ArnLike: {
            'aws:SourceArn': `arn:aws:bedrock-agentcore:${core.Stack.of(this).region}:${core.Stack.of(this).account}:*`,
          },
        },
      }),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
      ],
    });

    // Add inline policy to gateway role (matching working Python deployment exactly - no S3 permissions)
    gatewayRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'bedrock-agentcore:*',
        'bedrock:*',
        'agent-credential-provider:*',
        'iam:PassRole',
        'secretsmanager:GetSecretValue',
        'lambda:InvokeFunction',
      ],
      resources: ['*'],
    }));

    // Cognito User Pool
    const userPool = new cognito.UserPool(this, 'AgentCoreUserPool', {
      userPoolName: `${props.name}-gateway-pool`,
      removalPolicy: core.RemovalPolicy.DESTROY,
    });

    // Create User Pool Domain
    //const userPoolDomain =
    userPool.addDomain('AgentCoreUserPoolDomain', {
      cognitoDomain: {
        domainPrefix: props.name.replace('_', '').toLowerCase(),
      },
    });

    // Cognito Resource Server
    const resourceServer = userPool.addResourceServer('AgentCoreResourceServer', {
      identifier: `${props.name}-gateway-id`,
      userPoolResourceServerName: `${props.name}-gateway-name`,
      scopes: [
        new cognito.ResourceServerScope({ scopeName: 'gateway:read', scopeDescription: 'Read access' }),
        new cognito.ResourceServerScope({ scopeName: 'gateway:write', scopeDescription: 'Write access' }),
      ],
    });

    // Cognito User Pool Client (M2M)
    const userPoolClient = userPool.addClient('AgentCoreClient', {
      userPoolClientName: `${props.name}-gateway-client`,
      generateSecret: true,
      oAuth: {
        flows: {
          clientCredentials: true,
        },
        scopes: [
          cognito.OAuthScope.resourceServer(resourceServer,
            new cognito.ResourceServerScope({ scopeName: 'gateway:read', scopeDescription: 'Read access' }),
          ),
          cognito.OAuthScope.resourceServer(resourceServer,
            new cognito.ResourceServerScope({ scopeName: 'gateway:write', scopeDescription: 'Write access' }),
          ),
        ],
      },
      authFlows: {
        userPassword: false,
        userSrp: false,
        custom: false,
        adminUserPassword: false,
      },
      supportedIdentityProviders: [cognito.UserPoolClientIdentityProvider.COGNITO],
    });

    // S3 Bucket for OpenAPI spec (only if pathToOpenApiSpec is provided)
    let openApiBucket: s3.IBucket | undefined;
    let s3Uri: string;

    if (props.pathToOpenApiSpec) {
      openApiBucket = new s3.Bucket(this, 'AgentCoreOpenApiBucket', {
        bucketName: `${normalizedName}-gateway-${core.Stack.of(this).account}-${core.Stack.of(this).region}`,
        removalPolicy: core.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      });

      // Deploy OpenAPI spec to S3
      new s3deploy.BucketDeployment(this, 'DeployOpenApiSpec', {
        sources: [s3deploy.Source.asset(path.dirname(props.pathToOpenApiSpec))],
        destinationBucket: openApiBucket,
        destinationKeyPrefix: '',
        retainOnDelete: false,
        include: [path.basename(props.pathToOpenApiSpec)],
      });

      s3Uri = `s3://${openApiBucket.bucketName}/${path.basename(props.pathToOpenApiSpec)}`;
    } else {
      s3Uri = props.s3Uri!;
    }

    //Custom Resource for Bedrock AgentCore Gateway
    const gatewayCustomResource = new core.CustomResource(this, 'BedrockGateway', {
      serviceToken: this.createGatewayProvider().serviceToken,
      properties: {
        GatewayName: `${props.name}Gateway`,
        RoleArn: gatewayRole.roleArn,
        ProtocolType: 'MCP',
        AuthorizerType: 'CUSTOM_JWT',
        AuthorizerConfiguration: {
          customJWTAuthorizer: {
            allowedClients: [userPoolClient.userPoolClientId],
            discoveryUrl: `https://cognito-idp.${core.Aws.REGION}.amazonaws.com/${userPool.userPoolId}/.well-known/openid-configuration`,
          },
        },
        Description: props.gatewayDescription ?? `AgentCore Gateway for ${props.name}`,
      },
    });

    // Custom Resource for API Key Credential Provider
    const credentialProvider = new core.CustomResource(this, 'ApiKeyCredentialProvider', {
      serviceToken: this.createCredentialProviderProvider().serviceToken,
      properties: {
        Name: `${props.name}APIKey`,
        SecretArn: props.apiKey.secret.secretArn,
        SecretKey: props.apiKey.key,
      },
    });

    // Custom Resource for Gateway Target
    //const gatewayTarget =
    new core.CustomResource(this, 'GatewayTarget', {
      serviceToken: this.createGatewayTargetProvider(openApiBucket, props.s3Uri).serviceToken,
      properties: {
        GatewayIdentifier: gatewayCustomResource.ref,
        Name: `${props.name}Target`,
        Description: 'OpenAPI Target with S3Uri using SDK',
        TargetConfiguration: {
          mcp: {
            openApiSchema: {
              s3: {
                uri: s3Uri,
              },
            },
          },
        },
        CredentialProviderConfigurations: [{
          credentialProviderType: 'API_KEY',
          credentialProvider: {
            apiKeyCredentialProvider: {
              credentialParameterName: 'api_key',
              providerArn: credentialProvider.getAttString('CredentialProviderArn'),
              credentialLocation: 'QUERY_PARAMETER',
            },
          },
        }],
      },
    });


    // Set public properties
    this.userPoolId = userPool.userPoolId;
    this.userPoolClientId = userPoolClient.userPoolClientId;
    this.gatewayId = gatewayCustomResource.ref;
    this.gatewayUrl = gatewayCustomResource.getAttString('GatewayUrl');
    this.s3BucketName = openApiBucket?.bucketName ?? '';
    this.targetExecutionRole = gatewayRole;
  }

  /**
   * Creates a custom resource provider for managing Bedrock AgentCore Gateways
   */
  private createGatewayProvider(): cr.Provider {
    const onEventHandler = new lambda.Function(this, 'GatewayHandler', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'gateway_handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../lambda/agentCore/gateway-handler'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      timeout: core.Duration.minutes(5),
      logRetention: 7,
      environment: {
        LOG_LEVEL: 'DEBUG',
      },
    });

    onEventHandler.addToRolePolicy(new iam.PolicyStatement({
      actions: ['bedrock-agentcore:*', 'iam:PassRole'],
      resources: ['*'],
    }));

    const isCompleteHandler = new lambda.Function(this, 'GatewayIsCompleteHandler', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'gateway_is_complete_handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../lambda/agentCore/gateway-handler'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      timeout: core.Duration.minutes(2),
      logRetention: 7,
      environment: {
        LOG_LEVEL: 'DEBUG',
      },
    });

    isCompleteHandler.addToRolePolicy(new iam.PolicyStatement({
      actions: ['bedrock-agentcore:*'],
      resources: ['*'],
    }));

    return new cr.Provider(this, 'GatewayProvider', {
      onEventHandler: onEventHandler,
      isCompleteHandler: isCompleteHandler,
    });
  }

  /**
   * Creates a custom resource provider for managing API key credential providers
   */
  private createCredentialProviderProvider(): cr.Provider {
    const onEventHandler = new lambda.Function(this, 'CredentialProviderHandler', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'credential_provider_handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../lambda/agentCore/credential-provider-handler'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      timeout: core.Duration.minutes(5),
      logRetention: 7,
      environment: {
        LOG_LEVEL: 'DEBUG',
      },
    });

    onEventHandler.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'bedrock-agentcore:*',
        'secretsmanager:GetSecretValue',
        'secretsmanager:CreateSecret',
      ],
      resources: ['*'],
    }));

    return new cr.Provider(this, 'CredentialProviderProvider', {
      onEventHandler,
    });
  }

  /**
   * Creates a custom resource provider for managing gateway targets
   */
  private createGatewayTargetProvider(bucket?: s3.IBucket, s3Uri?: string): cr.Provider {
    const onEventHandler = new lambda.Function(this, 'GatewayTargetHandler', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'gateway_target_handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../lambda/agentCore/gateway-target-handler'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      timeout: core.Duration.minutes(5),
      logRetention: 7,
      environment: {
        LOG_LEVEL: 'DEBUG',
      },
    });

    if (bucket) {
      bucket.grantRead(onEventHandler);
    } else if (s3Uri) {
      // Grant S3 read permissions for external S3 URI
      onEventHandler.addToRolePolicy(new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [s3Uri.replace('s3://', 'arn:aws:s3:::').replace('/', '/*')],
      }));
    }

    onEventHandler.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'bedrock-agentcore:*',
      ],
      resources: ['*'],
    }));

    return new cr.Provider(this, 'GatewayTargetProvider', {
      onEventHandler,
    });
  }

  /**
   * Normalizes a name to comply with S3 bucket naming requirements
   */
  private normalizeBucketName(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9.-]/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-+/g, '-');
  }

  /**
   * Validates that the asset path exists
   */
  private validateAssetExists(assetPath: string): void {
    if (!fs.existsSync(assetPath)) {
      throw new Error(`Asset path does not exist: ${assetPath}`);
    }
  }
}