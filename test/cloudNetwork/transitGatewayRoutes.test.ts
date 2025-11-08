import { Stack } from 'aws-cdk-lib';
import { CloudNetwork } from '../../src/cloudNetwork/cloudNetwork';
import { SubnetPersonality, StackType, RoutingStrategy, NextHop, Services } from '../../src/cloudNetwork/cloudNetworkInterfaces';

describe('Transit Gateway Routes', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('does not add TG routes when tgRoutes set but no attachment', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC', {
      vpcName: 'test-vpc',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        personality: SubnetPersonality.PRIVATE,
        name: 'private-subnet',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    // Set tgRoutes but no attachment
    vpc.tgRoutes = ['10.0.0.0/8'];
    vpc.transitGatewayAttachment = undefined;

    const routes = vpc.addPersonalityRoutes(RoutingStrategy.DIRECT);
    const privateRoutes = routes.find(r => r.subnetGroup.name === 'private-subnet');

    // Should not have any TG routes
    const tgRoutes = privateRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);
    expect(tgRoutes?.length).toBe(0);
  });

  test('adds TG routes when both tgRoutes and attachment exist', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC2', {
      vpcName: 'test-vpc-2',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        personality: SubnetPersonality.PRIVATE,
        name: 'private-subnet',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    // Set both tgRoutes and attachment
    vpc.tgRoutes = ['10.0.0.0/8', '172.16.0.0/12'];
    vpc.transitGatewayAttachment = 'tgw-attach-12345';

    const routes = vpc.addPersonalityRoutes(RoutingStrategy.DIRECT);
    const privateRoutes = routes.find(r => r.subnetGroup.name === 'private-subnet');

    // Should have TG routes
    const tgRoutes = privateRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);
    expect(tgRoutes?.length).toBe(2);
    expect(tgRoutes?.[0].destCidr).toBe('10.0.0.0/8');
    expect(tgRoutes?.[1].destCidr).toBe('172.16.0.0/12');
  });

  test('FIREWALL personality: no TG routes without attachment', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC3', {
      vpcName: 'test-vpc-3',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [
        {
          personality: SubnetPersonality.PUBLIC_EGRESS,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NATGATEWAY],
        },
        {
          personality: SubnetPersonality.FIREWALL,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
      ],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    vpc.tgRoutes = ['10.0.0.0/8'];

    const routes = vpc.addPersonalityRoutes();
    const firewallRoutes = routes.find(r => r.subnetGroup.name === 'firewall');
    const tgRoutes = firewallRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);

    expect(tgRoutes?.length).toBe(0);
  });

  test('LINKNET personality: no TG routes without attachment (isolated subnet)', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC4', {
      vpcName: 'test-vpc-4',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        personality: SubnetPersonality.LINKNET,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    vpc.tgRoutes = ['10.0.0.0/8'];

    const routes = vpc.addPersonalityRoutes();
    const linknetRoutes = routes.find(r => r.subnetGroup.name === 'linknet');
    const tgRoutes = linknetRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);

    expect(tgRoutes?.length).toBe(0);
  });

  test('PUBLIC_INGRESS personality: no TG routes without attachment', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC5', {
      vpcName: 'test-vpc-5',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        personality: SubnetPersonality.PUBLIC_INGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    vpc.tgRoutes = ['10.0.0.0/8'];

    const routes = vpc.addPersonalityRoutes();
    const ingressRoutes = routes.find(r => r.subnetGroup.name === 'ingress');
    const tgRoutes = ingressRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);

    expect(tgRoutes?.length).toBe(0);
  });


  test('ZEROTRUST_INGRESS personality: no TG routes without attachment', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC7', {
      vpcName: 'test-vpc-7',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        personality: SubnetPersonality.ZEROTRUST_INGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    vpc.tgRoutes = ['10.0.0.0/8'];

    const routes = vpc.addPersonalityRoutes();
    const ztnRoutes = routes.find(r => r.subnetGroup.name === 'ztn');
    const tgRoutes = ztnRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);

    expect(tgRoutes?.length).toBe(0);
  });

  test('all personalities: TG routes added when attachment exists', () => {
    const vpc = new CloudNetwork(stack, 'TestVPC8', {
      vpcName: 'test-vpc-8',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [
        {
          personality: SubnetPersonality.PRIVATE,
          name: 'private',
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.LINKNET,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
      ],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    vpc.tgRoutes = ['10.0.0.0/8'];
    vpc.transitGatewayAttachment = 'tgw-attach-12345';

    const routes = vpc.addPersonalityRoutes();

    // Both personalities should have TG routes
    const privateRoutes = routes.find(r => r.subnetGroup.name === 'private');
    const privateTgRoutes = privateRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);
    expect(privateTgRoutes?.length).toBe(1);

    const linknetRoutes = routes.find(r => r.subnetGroup.name === 'linknet');
    const linknetTgRoutes = linknetRoutes?.routes.filter(r => r.nextHop === NextHop.TRANSITGATEWAY);
    expect(linknetTgRoutes?.length).toBe(1);
  });
});
