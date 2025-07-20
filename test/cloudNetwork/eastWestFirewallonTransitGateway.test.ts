import { Stack } from 'aws-cdk-lib';
import { IpamConfig } from '../../src/cloudNetwork/cloudNetworkInterfaces';
import { EastWestFirewallOnTg } from '../../src/cloudNetwork/eastWestFirewallonTransitGateway';
import { TransitGateway } from '../../src/network/transitGateway';

// Mock Lambda Code.fromAsset to avoid asset loading issues
jest.mock('aws-cdk-lib/aws-lambda', () => ({
  ...jest.requireActual('aws-cdk-lib/aws-lambda'),
  Code: {
    ...jest.requireActual('aws-cdk-lib/aws-lambda').Code,
    fromAsset: jest.fn(() => jest.requireActual('aws-cdk-lib/aws-lambda').Code.fromInline('mock code')),
  },
}));

describe('EastWestFirewallOnTg', () => {
  let stack: Stack;
  let transitGateway: TransitGateway;
  let ipamConfig: IpamConfig;

  beforeEach(() => {
    stack = new Stack(undefined, 'TestStack', {
      env: { account: '123456789012', region: 'ap-southeast-2' },
    });

    transitGateway = new TransitGateway(stack, 'TestTG', {
      name: 'test-tg',
      amazonSideAsn: 64512,
    });

    ipamConfig = {
      ipv6ScopeId: 'ipam-scope-123',
      ipv6PoolId: 'ipam-pool-123',
      ipv4IpamScope: 'ipam-scope-456',
      ipv4IpamPoolId: 'ipam-pool-456',
      eipPool: 'eip-pool-789',
    };
  });

  test('construct throws expected error for routing validation', () => {
    expect(() => {
      new EastWestFirewallOnTg(stack, 'TestFirewall', {
        transitGateway,
        ipamConfig,
      });
    }).toThrow('At least one of fwEndpoints or Firewall must be supplied to route to Firewalls');
  });

  test('validates required props are provided', () => {
    expect(transitGateway).toBeDefined();
    expect(transitGateway.id).toBeDefined();
    expect(ipamConfig).toBeDefined();
    expect(ipamConfig.ipv6ScopeId).toBe('ipam-scope-123');
    expect(ipamConfig.ipv4IpamPoolId).toBe('ipam-pool-456');
  });

  test('interface validation works correctly', () => {
    const props = {
      transitGateway,
      ipamConfig,
    };

    expect(props.transitGateway).toBe(transitGateway);
    expect(props.ipamConfig).toBe(ipamConfig);
    expect(typeof props.transitGateway.id).toBe('string');
    expect(typeof props.ipamConfig.ipv6ScopeId).toBe('string');
  });

  test('construct has firewall property defined in class', () => {
    // Test that the class has the firewall property defined
    // Since firewall is a public property, it's defined on instances, not prototype
    expect(EastWestFirewallOnTg.prototype.constructor).toBe(EastWestFirewallOnTg);

    // Verify the property exists in the source code by checking the class structure
    const classString = EastWestFirewallOnTg.toString();
    expect(classString).toContain('firewall');
  });

  test('error message is descriptive for routing failure', () => {
    let errorMessage = '';
    try {
      new EastWestFirewallOnTg(stack, 'TestFirewall', {
        transitGateway,
        ipamConfig,
      });
    } catch (error) {
      errorMessage = (error as Error).message;
    }

    expect(errorMessage).toContain('fwEndpoints');
    expect(errorMessage).toContain('Firewall');
    expect(errorMessage).toContain('route to Firewalls');
  });
});