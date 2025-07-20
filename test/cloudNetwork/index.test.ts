import * as cloudNetwork from '../../src/cloudNetwork';

describe('CloudNetwork Index', () => {
  test('exports CloudNetwork class', () => {
    expect(cloudNetwork.CloudNetwork).toBeDefined();
    expect(typeof cloudNetwork.CloudNetwork).toBe('function');
  });

  test('exports DualStackVpcMethods class', () => {
    expect(cloudNetwork.DualStackVpcMethods).toBeDefined();
    expect(typeof cloudNetwork.DualStackVpcMethods).toBe('function');
  });

  test('exports Router class', () => {
    expect(cloudNetwork.Router).toBeDefined();
    expect(typeof cloudNetwork.Router).toBe('function');
  });

  test('exports IpamVPCPlanningTools class', () => {
    expect(cloudNetwork.IpamVPCPlanningTools).toBeDefined();
    expect(typeof cloudNetwork.IpamVPCPlanningTools).toBe('function');
  });

  test('exports NestedRouteStack class', () => {
    expect(cloudNetwork.NestedRouteStack).toBeDefined();
    expect(typeof cloudNetwork.NestedRouteStack).toBe('function');
  });

  test('exports enums', () => {
    expect(cloudNetwork.StackType).toBeDefined();
    expect(cloudNetwork.Services).toBeDefined();
    expect(cloudNetwork.SubnetPersonality).toBeDefined();
    expect(cloudNetwork.NextHop).toBeDefined();
    expect(cloudNetwork.ApplianceMode).toBeDefined();
    expect(cloudNetwork.IpV6Support).toBeDefined();
    expect(cloudNetwork.FirewallSubnetMappingIPAddressType).toBeDefined();
    expect(cloudNetwork.RouterFunctions).toBeDefined();
  });
});