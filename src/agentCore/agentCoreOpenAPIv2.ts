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

export enum CredentialLocation {
  HEADER = 'HEADER',
  QUERY_PARAMETER = 'QUERY_PARAMETER'
}

export interface GatewayTarget {
  /** Target name */
  readonly name: string;
  /** Path to the OpenAPI specification file */
  readonly pathToOpenApiSpec?: string;
  /** S3 URI to the OpenAPI specification file */
  readonly s3Uri?: string;
  /** Secret containing the API token */
  readonly apiKey: ApiKey;
  /** Target description */
  readonly description?: string;
  /** Credential Location */
  readonly credentialLocation?: CredentialLocation;
  /** Credential parameter name */
  readonly credentialParameterName?: string;
}

/**
 * Properties for the AgentCoreOpenAPIv2 construct
 */
export interface AgentCoreOpenAPIv2Props {
  /** The name prefix for all resources */
  readonly name: string;
  /** Optional description for the gateway */
  readonly gatewayDescription?: string;
}


/**
 * A construct that creates a complete AgentCore Gateway setup with Cognito authentication,
 * S3 storage for OpenAPI specs, and Bedrock AgentCore integration with support for multiple targets
 */
export class AgentCoreOpenAPIv2 extends constructs.Construct {

  /** The Cognito User Pool ID */
  public readonly userPoolId: string;
  /** The Cognito User Pool Client ID */
  public readonly userPoolClientId: string;
  /** The Bedrock AgentCore Gateway ID */
  public readonly gatewayId: string;
  /** The Bedrock AgentCore Gateway URL */
  public readonly gatewayUrl: string;
  /** The IAM role used for target execution */
  public readonly targetExecutionRole: iam.IRole;
  /** Array of target IDs */
  public readonly targetIds: string[];

  private sharedBucket?: s3.IBucket;

  constructor(scope: constructs.Construct, id: string, props: AgentCoreOpenAPIv2Props) {
    super(scope, id);

    //const normalizedName = this.normalizeBucketName(props.name);

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

    // Custom Resource for Bedrock AgentCore Gateway
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

    // Store gateway ID for addTarget method
    this.gatewayId = gatewayCustomResource.ref;

    // Set public properties
    this.userPoolId = userPool.userPoolId;
    this.userPoolClientId = userPoolClient.userPoolClientId;
    this.gatewayUrl = gatewayCustomResource.getAttString('GatewayUrl');
    this.targetExecutionRole = gatewayRole;
    this.targetIds = [];
  }

  /**
   * Adds a new target to the gateway
   */
  public addTarget(target: GatewayTarget): string {
    // Validate target
    const hasPath = !!target.pathToOpenApiSpec;
    const hasS3Uri = !!target.s3Uri;

    if (!hasPath && !hasS3Uri) {
      throw new Error('Either pathToOpenApiSpec or s3Uri must be provided');
    }
    if (hasPath && hasS3Uri) {
      throw new Error('Only one of pathToOpenApiSpec or s3Uri can be provided');
    }

    if (target.pathToOpenApiSpec) {
      this.validateAssetExists(target.pathToOpenApiSpec);

      // Create shared bucket if it doesn't exist and we need it
      if (!this.sharedBucket) {
        const normalizedName = this.normalizeBucketName(this.node.id);
        this.sharedBucket = new s3.Bucket(this, 'OpenApiSpecsBucket', {
          bucketName: `${normalizedName}-gateway-${core.Stack.of(this).account}-${core.Stack.of(this).region}`,
          removalPolicy: core.RemovalPolicy.DESTROY,
          autoDeleteObjects: true,
        });
      }
    }

    // Handle S3 URI for this target
    let s3Uri: string;

    if (target.pathToOpenApiSpec) {
      // Use target name as path prefix for logical separation
      const targetPath = `targets/${target.name}`;

      new s3deploy.BucketDeployment(this, `${target.name}DeployOpenApiSpec`, {
        sources: [s3deploy.Source.asset(path.dirname(target.pathToOpenApiSpec))],
        destinationBucket: this.sharedBucket!,
        destinationKeyPrefix: targetPath,
        retainOnDelete: false,
        include: [path.basename(target.pathToOpenApiSpec)],
      });

      s3Uri = `s3://${this.sharedBucket!.bucketName}/${targetPath}/${path.basename(target.pathToOpenApiSpec)}`;
    } else {
      s3Uri = target.s3Uri!;
    }

    // Create credential provider for this target
    const credentialProvider = new core.CustomResource(this, `${target.name}CredentialProvider`, {
      serviceToken: this.createCredentialProviderProvider().serviceToken,
      properties: {
        Name: `${target.name}APIKey`,
        SecretArn: target.apiKey.secret.secretArn,
        SecretKey: target.apiKey.key,
      },
    });

    // Create gateway target
    const gatewayTarget = new core.CustomResource(this, `${target.name}GatewayTarget`, {
      serviceToken: this.createGatewayTargetProvider(this.sharedBucket, target.s3Uri).serviceToken,
      properties: {
        GatewayIdentifier: this.gatewayId,
        Name: target.name,
        Description: target.description ?? `OpenAPI Target ${target.name}`,
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
              credentialParameterName: target.credentialParameterName ?? 'api_key',
              providerArn: credentialProvider.getAttString('CredentialProviderArn'),
              credentialLocation: target.credentialLocation ?? CredentialLocation.HEADER,
            },
          },
        }],
      },
    });

    const targetId = gatewayTarget.getAttString('TargetId');
    this.targetIds.push(targetId);
    return targetId;
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

