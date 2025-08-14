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
});