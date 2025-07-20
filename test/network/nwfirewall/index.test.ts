import * as nwfirewall from '../../../src/network/nwfirewall';

describe('nwfirewall index exports', () => {
  test('exports all firewall classes and interfaces', () => {
    expect(nwfirewall.NetworkFirewall).toBeDefined();
    expect(nwfirewall.FirewallPolicy).toBeDefined();
    expect(nwfirewall.StatelessRule).toBeDefined();
    expect(nwfirewall.DynamicTagResourceGroup).toBeDefined();
    expect(nwfirewall.TLSInspectionConfiguration).toBeDefined();
  });

  test('exports all enums', () => {
    expect(nwfirewall.FirewallSubnetMappingIPAddressType).toBeDefined();
    expect(nwfirewall.StatelessActions).toBeDefined();
    expect(nwfirewall.StatefulAction).toBeDefined();
    expect(nwfirewall.StatefulDefaultActions).toBeDefined();
    expect(nwfirewall.ManagedAwsFirewallRules).toBeDefined();
    expect(nwfirewall.RuleGroupType).toBeDefined();
    expect(nwfirewall.Protocol).toBeDefined();
    expect(nwfirewall.WellKnownPorts).toBeDefined();
    expect(nwfirewall.GeneratedRulesType).toBeDefined();
    expect(nwfirewall.TargetTypes).toBeDefined();
    expect(nwfirewall.ResourceGroupQueryTypes).toBeDefined();
    expect(nwfirewall.Protocols).toBeDefined();
    expect(nwfirewall.RevokedAction).toBeDefined();
  });

  test('enum values are correct', () => {
    expect(nwfirewall.FirewallSubnetMappingIPAddressType.DUALSTACK).toBe('DUALSTACK');
    expect(nwfirewall.FirewallSubnetMappingIPAddressType.IPV4).toBe('IPV4');
    expect(nwfirewall.FirewallSubnetMappingIPAddressType.IPV6).toBe('IPV6');

    expect(nwfirewall.StatelessActions.PASS).toBe('aws:pass');
    expect(nwfirewall.StatelessActions.DROP).toBe('aws:drop');
    expect(nwfirewall.StatelessActions.STATEFUL).toBe('aws:forward_to_sfe');

    expect(nwfirewall.Protocol.TCP).toBe(6);
    expect(nwfirewall.Protocol.UDP).toBe(17);
    expect(nwfirewall.Protocol.ICMP).toBe(1);

    expect(nwfirewall.WellKnownPorts.HTTP).toBe(80);
    expect(nwfirewall.WellKnownPorts.HTTPS).toBe(443);
    expect(nwfirewall.WellKnownPorts.SSH).toBe(22);
    expect(nwfirewall.WellKnownPorts.RDP).toBe(3389);
  });
});