import {
  StackType,
  Services,
  SubnetPersonality,
  NextHop,
  ApplianceMode,
  IpV6Support,
  FirewallSubnetMappingIPAddressType,
  RouterFunctions,
} from '../../src/cloudNetwork/cloudNetworkInterfaces';

describe('CloudNetworkInterfaces', () => {
  test('StackType enum has correct values', () => {
    expect(StackType.IPV4_ONLY).toBe('IPV4');
    expect(StackType.IPV6_ONLY).toBe('IPV6');
    expect(StackType.DUAL_STACK).toBe('DUALSTACK');
  });

  test('Services enum has correct values', () => {
    expect(Services.NWFIREWALL_ENDPOINT).toBe('NWFW');
    expect(Services.NATGATEWAY).toBe('NATGW');
  });

  test('SubnetPersonality enum has correct values', () => {
    expect(SubnetPersonality.PRIVATE).toBe('PRIVATE');
    expect(SubnetPersonality.FIREWALL).toBe('FIREWALL');
    expect(SubnetPersonality.DMZ).toBe('DMZ');
    expect(SubnetPersonality.PUBLIC_INGRESS).toBe('PUBLIC_INGRESS');
    expect(SubnetPersonality.PUBLIC_EGRESS).toBe('PUBLIC_EGRESS');
    expect(SubnetPersonality.LINKNET).toBe('LINKNET');
  });

  test('NextHop enum has correct values', () => {
    expect(NextHop.CLOUDWAN).toBe('Cloudwan');
    expect(NextHop.TRANSITGATEWAY).toBe('TransitGateway');
    expect(NextHop.NWFIREWALL).toBe('NetworkFirewall');
    expect(NextHop.EC2_INSTANCE).toBe('EC2');
    expect(NextHop.INTERNET_GATEWAY).toBe('INTERNET_GATEWAY');
    expect(NextHop.IPV6_EGREGSS_ONLY).toBe('EGRESS_ONLY');
    expect(NextHop.GLWB_ENDPOINT).toBe('GATEWAYLB_ENDPOINT');
    expect(NextHop.FIREWALL_ENDPOINT).toBe('FIREWALL_ENDPOINT');
    expect(NextHop.BLACKHOLE).toBe('BLACK_HOLE');
  });

  test('ApplianceMode enum has correct values', () => {
    expect(ApplianceMode.ENABLED).toBe('enable');
  });

  test('IpV6Support enum has correct values', () => {
    expect(IpV6Support.ENABLED).toBe('enabled');
  });

  test('FirewallSubnetMappingIPAddressType enum has correct values', () => {
    expect(FirewallSubnetMappingIPAddressType.DUALSTACK).toBe('DUALSTACK');
    expect(FirewallSubnetMappingIPAddressType.IPV4).toBe('IPV4');
    expect(FirewallSubnetMappingIPAddressType.IPV6).toBe('IPV6');
  });

  test('RouterFunctions enum has correct values', () => {
    expect(RouterFunctions.TGWAITER).toBe('TGWaiter');
    expect(RouterFunctions.NWFIREWALL).toBe('NetworkFirewall');
    expect(RouterFunctions.CIDR_LOOKUP).toBe('CidrLookup');
  });
});