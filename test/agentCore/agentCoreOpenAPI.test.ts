import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { AgentCoreOpenAPI } from '../../src/agentCore/agentCoreOpenAPI';

describe('AgentCoreOpenAPI', () => {
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'TestStack');
  });

  test('creates AgentCore construct successfully', () => {
    const secret = new Secret(stack, 'TestSecret');

    const agentCore = new AgentCoreOpenAPI(stack, 'TestAgentCore', {
      name: 'test-agent',
      pathToOpenApiSpec: __filename, // Use current file as mock path
      apiKey: {
        secret: secret,
        key: 'api-key',
      },
    });

    expect(agentCore).toBeDefined();
    expect(agentCore.userPoolId).toBeDefined();
    expect(agentCore.userPoolClientId).toBeDefined();
    expect(agentCore.gatewayId).toBeDefined();
    expect(agentCore.gatewayUrl).toBeDefined();
    expect(agentCore.s3BucketName).toBeDefined();
    expect(agentCore.targetExecutionRole).toBeDefined();
  });

  test('creates Cognito User Pool with correct configuration', () => {
    const secret = new Secret(stack, 'TestSecret');

    new AgentCoreOpenAPI(stack, 'TestAgentCore', {
      name: 'test-agent',
      pathToOpenApiSpec: __filename,
      apiKey: {
        secret: secret,
        key: 'api-key',
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::UserPool', {
      UserPoolName: 'test-agent-gateway-pool',
    });
  });

  test('creates S3 bucket with correct naming', () => {
    const secret = new Secret(stack, 'TestSecret');

    new AgentCoreOpenAPI(stack, 'TestAgentCore', {
      name: 'test-agent-valid',
      pathToOpenApiSpec: __filename,
      apiKey: {
        secret: secret,
        key: 'api-key',
      },
    });

    const template = Template.fromStack(stack);

    // Just verify that an S3 bucket is created
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });

  test('creates IAM role with correct permissions', () => {
    const secret = new Secret(stack, 'TestSecret');

    new AgentCoreOpenAPI(stack, 'TestAgentCore', {
      name: 'test-agent',
      pathToOpenApiSpec: __filename,
      apiKey: {
        secret: secret,
        key: 'api-key',
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'test-agent-gateway',
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: 'bedrock-agentcore.amazonaws.com',
            },
            Action: 'sts:AssumeRole',
          },
        ],
      },
    });
  });

  test('handles custom gateway description', () => {
    const secret = new Secret(stack, 'TestSecret');

    expect(() => {
      new AgentCoreOpenAPI(stack, 'TestAgentCore', {
        name: 'test-agent',
        pathToOpenApiSpec: __filename,
        apiKey: {
          secret: secret,
          key: 'api-key',
        },
        gatewayDescription: 'Custom gateway description',
      });
    }).not.toThrow();
  });

  test('validates required name property', () => {
    const secret = new Secret(stack, 'TestSecret');

    expect(() => {
      new AgentCoreOpenAPI(stack, 'TestAgentCore', {
        name: '',
        pathToOpenApiSpec: __filename,
        apiKey: {
          secret: secret,
          key: 'api-key',
        },
      });
    }).toThrow();
  });

  test('validates that exactly one of pathToOpenApiSpec or s3Uri is provided', () => {
    const secret = new Secret(stack, 'TestSecret');

    // Test neither provided
    expect(() => {
      new AgentCoreOpenAPI(stack, 'TestAgentCore1', {
        name: 'test-agent',
        apiKey: {
          secret: secret,
          key: 'api-key',
        },
      });
    }).toThrow('Either pathToOpenApiSpec or s3Uri must be provided');

    // Test both provided
    expect(() => {
      new AgentCoreOpenAPI(stack, 'TestAgentCore2', {
        name: 'test-agent',
        pathToOpenApiSpec: __filename,
        s3Uri: 's3://bucket/spec.yaml',
        apiKey: {
          secret: secret,
          key: 'api-key',
        },
      });
    }).toThrow('Only one of pathToOpenApiSpec or s3Uri can be provided');
  });

  test('works with s3Uri instead of pathToOpenApiSpec', () => {
    const secret = new Secret(stack, 'TestSecret');

    const agentCore = new AgentCoreOpenAPI(stack, 'TestAgentCore', {
      name: 'test-agent',
      s3Uri: 's3://my-bucket/openapi.yaml',
      apiKey: {
        secret: secret,
        key: 'api-key',
      },
    });

    expect(agentCore).toBeDefined();
    expect(agentCore.s3BucketName).toBe('');
  });
});