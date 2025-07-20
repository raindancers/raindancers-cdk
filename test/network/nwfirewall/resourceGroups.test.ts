import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DynamicTagResourceGroup } from '../../../src/network/nwfirewall/resourceGroups';

describe('DynamicTagResourceGroup', () => {
  let app: cdk.App;
  let stack: cdk.Stack;

  beforeEach(() => {
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');
  });

  test('creates basic resource group', () => {
    const resourceGroup = new DynamicTagResourceGroup(stack, 'TestGroup', {
      name: 'test-resource-group',
      description: 'Test resource group',
    });

    expect(resourceGroup.groupArn).toBeDefined();
    expect(resourceGroup.name).toBe('test-resource-group');

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ResourceGroups::Group', {
      Name: 'test-resource-group',
      Description: 'Test resource group',
      Configuration: [
        {
          Type: 'AWS::NetworkFirewall::RuleGroup',
          Parameters: [],
        },
      ],
      ResourceQuery: {
        Type: 'TAG_FILTERS_1_0',
        Query: {
          ResourceTypeFilters: [
            'AWS::EC2::Instance',
            'AWS::EC2::NetworkInterface',
          ],
          TagFilters: [],
        },
      },
    });
  });

  test('creates resource group without description', () => {
    const resourceGroup = new DynamicTagResourceGroup(stack, 'TestGroup', {
      name: 'test-resource-group',
    });

    expect(resourceGroup.name).toBe('test-resource-group');

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ResourceGroups::Group', {
      Name: 'test-resource-group',
    });
  });

  test('adds tag filters', () => {
    const resourceGroup = new DynamicTagResourceGroup(stack, 'TestGroup', {
      name: 'test-resource-group',
    });

    resourceGroup.addTagFilter({
      key: 'Environment',
      values: ['prod', 'staging'],
    });

    resourceGroup.addTagFilter({
      key: 'Team',
      values: ['security'],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ResourceGroups::Group', {
      ResourceQuery: {
        Query: {
          TagFilters: [
            {
              Key: 'Environment',
              Values: ['prod', 'staging'],
            },
            {
              Key: 'Team',
              Values: ['security'],
            },
          ],
        },
      },
    });
  });

  test('supports multiple tag filters', () => {
    const resourceGroup = new DynamicTagResourceGroup(stack, 'TestGroup', {
      name: 'multi-filter-group',
    });

    // Add multiple filters
    for (let i = 0; i < 3; i++) {
      resourceGroup.addTagFilter({
        key: `Key${i}`,
        values: [`Value${i}`],
      });
    }

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ResourceGroups::Group', {
      ResourceQuery: {
        Query: {
          TagFilters: [
            { Key: 'Key0', Values: ['Value0'] },
            { Key: 'Key1', Values: ['Value1'] },
            { Key: 'Key2', Values: ['Value2'] },
          ],
        },
      },
    });
  });
});