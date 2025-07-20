import { IFirewallEndpoints } from '../../../src/network/nwfirewall/firewallEndPoints';

describe('IFirewallEndpoints', () => {
  test('interface has correct structure', () => {
    const endpoint: IFirewallEndpoints = {
      endpointId: 'vpce-12345678',
      az: 'us-east-1a',
    };

    expect(endpoint.endpointId).toBe('vpce-12345678');
    expect(endpoint.az).toBe('us-east-1a');
  });

  test('interface accepts different endpoint IDs and AZs', () => {
    const endpoints: IFirewallEndpoints[] = [
      {
        endpointId: 'vpce-11111111',
        az: 'us-east-1a',
      },
      {
        endpointId: 'vpce-22222222',
        az: 'us-east-1b',
      },
      {
        endpointId: 'vpce-33333333',
        az: 'us-west-2c',
      },
    ];

    expect(endpoints).toHaveLength(3);
    expect(endpoints[0].endpointId).toBe('vpce-11111111');
    expect(endpoints[1].az).toBe('us-east-1b');
    expect(endpoints[2].endpointId).toBe('vpce-33333333');
  });
});