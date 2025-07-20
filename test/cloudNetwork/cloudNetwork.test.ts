import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { CloudNetwork, NestedRouteStack } from '../../src/cloudNetwork/cloudNetwork';
import { SubnetPersonality, StackType, Services } from '../../src/cloudNetwork/cloudNetworkInterfaces';

describe('CloudNetwork', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('creates VPC with basic configuration', () => {
    new CloudNetwork(stack, 'TestVPC', {
      vpcName: 'test-vpc',
      availabilityZones: ['us-east-1a', 'us-east-1b'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPC', {
      Tags: [{ Key: 'Name', Value: 'test-vpc' }],
    });
  });

  test('throws error for missing availability zones', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC', {
        vpcName: 'test-vpc',
        availabilityZones: [],
        subnetConfiguration: [{
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
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
    }).toThrow('At least one availability zone must be specified');
  });

  test('creates subnets with personality configuration', () => {
    new CloudNetwork(stack, 'TestVPC', {
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

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Subnet', {
      Tags: [
        { Key: 'aws-cdk:subnet-name', Value: 'private-subnet' },
        { Key: 'aws-cdk:subnet-type', Value: 'Isolated' },
      ],
    });
  });

  test('throws error for duplicate personalities', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC', {
        vpcName: 'test-vpc',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [
          {
            personality: SubnetPersonality.FIREWALL,
            stack: StackType.DUAL_STACK,
            ipv4mask: 24,
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
    }).toThrow('Only one subnet with personality FIREWALL is allowed');
  });

  test('throws error for missing subnet configuration', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC', {
        vpcName: 'test-vpc',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [],
        ipamConfig: {
          ipv6ScopeId: 'ipam-scope-123',
          ipv6PoolId: 'ipam-pool-123',
          ipv4IpamScope: 'ipam-scope-456',
          ipv4IpamPoolId: 'ipam-pool-456',
          eipPool: 'eip-pool-123',
        },
      });
    }).toThrow('At least one subnet configuration must be specified');
  });

  test('throws error for both subnetType and personality', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC', {
        vpcName: 'test-vpc',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [{
          name: 'test',
          subnetType: ec2.SubnetType.PUBLIC,
          personality: SubnetPersonality.PRIVATE,
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
    }).toThrow('must not have both subnetType and personality properties');
  });

  test('throws error for neither subnetType nor personality', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC', {
        vpcName: 'test-vpc',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [{
          name: 'test',
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
    }).toThrow('must have either subnetType or personality property');
  });

  test('creates NAT Gateway with services configuration', () => {
    new CloudNetwork(stack, 'TestVPC2', {
      vpcName: 'test-vpc-2',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
        services: [Services.NATGATEWAY],
      }],
      ipamConfig: {
        ipv6ScopeId: 'ipam-scope-123',
        ipv6PoolId: 'ipam-pool-123',
        ipv4IpamScope: 'ipam-scope-456',
        ipv4IpamPoolId: 'ipam-pool-456',
        eipPool: 'eip-pool-123',
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::NatGateway', {});
    template.hasResourceProperties('AWS::EC2::EIP', {
      Domain: 'vpc',
    });
  });

  test('throws error for invalid public subnet services', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC3', {
        vpcName: 'test-vpc-3',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [{
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NWFIREWALL_ENDPOINT],
        }],
        ipamConfig: {
          ipv6ScopeId: 'ipam-scope-123',
          ipv6PoolId: 'ipam-pool-123',
          ipv4IpamScope: 'ipam-scope-456',
          ipv4IpamPoolId: 'ipam-pool-456',
          eipPool: 'eip-pool-123',
        },
      });
    }).toThrow('Public subnet public can only have NATGATEWAY service');
  });

  test('creates VPC with custom IPv4 netmask', () => {
    new CloudNetwork(stack, 'TestVPC4', {
      vpcName: 'test-vpc-4',
      availabilityZones: ['us-east-1a'],
      ipv4NetmaskLength: 20,
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPC', {
      Ipv4NetmaskLength: 20,
    });
  });

  test('creates VPC without internet gateway', () => {
    new CloudNetwork(stack, 'TestVPC5', {
      vpcName: 'test-vpc-5',
      availabilityZones: ['us-east-1a'],
      createInternetGateway: false,
      subnetConfiguration: [{
        name: 'isolated',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
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

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::InternetGateway', 0);
  });

  test('creates private subnet with egress', () => {
    new CloudNetwork(stack, 'TestVPC6', {
      vpcName: 'test-vpc-6',
      availabilityZones: ['us-east-1a', 'us-east-1b'],
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NATGATEWAY],
        },
        {
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
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

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Route', {
      DestinationCidrBlock: '0.0.0.0/0',
    });
  });

  test('throws error for private subnet without NAT Gateway', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPC7', {
        vpcName: 'test-vpc-7',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [
          {
            name: 'public',
            subnetType: ec2.SubnetType.PUBLIC,
            stack: StackType.DUAL_STACK,
            ipv4mask: 24,
          },
          {
            name: 'private',
            subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
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
    }).toThrow('NAT Gateway not found for zone us-east-1a');
  });

  test('creates VPC with all personality types', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCPersonalities', {
      vpcName: 'test-vpc-personalities',
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
        {
          personality: SubnetPersonality.DMZ,
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

    expect(vpc.publicSubnets.length).toBeGreaterThan(0);
    expect(vpc.privateSubnets.length).toBeGreaterThan(0);
    expect(vpc.isolatedSubnets.length).toBeGreaterThan(0);
  });

  test('generates personality routes', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCRoutes', {
      vpcName: 'test-vpc-routes',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [
        {
          personality: SubnetPersonality.PUBLIC_EGRESS,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NATGATEWAY],
        },
        {
          personality: SubnetPersonality.PRIVATE,
          name: 'private-subnet',
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

    const routes = vpc.addPersonalityRoutes();
    expect(routes.length).toBeGreaterThan(0);
    expect(routes[0].routes.length).toBeGreaterThan(0);
  });

  test('tests VPC interface methods', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCInterface', {
      vpcName: 'test-vpc-interface',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    // Test subnet selection
    const subnets = vpc.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC });
    expect(subnets.subnets.length).toBeGreaterThan(0);

    // Test VPN gateway
    vpc.enableVpnGateway({ type: ec2.VpnConnectionType.IPSEC_1 });

    // Test VPN connection
    const vpnConnection = vpc.addVpnConnection('TestVPN', {
      ip: '1.2.3.4',
    });
    expect(vpnConnection).toBeDefined();

    // Test gateway endpoint
    const gatewayEndpoint = vpc.addGatewayEndpoint('TestGateway', {
      service: ec2.GatewayVpcEndpointAwsService.S3,
    });
    expect(gatewayEndpoint).toBeDefined();

    // Test interface endpoint
    const interfaceEndpoint = vpc.addInterfaceEndpoint('TestInterface', {
      service: ec2.InterfaceVpcEndpointAwsService.EC2,
    });
    expect(interfaceEndpoint).toBeDefined();

    // Test flow log
    const flowLog = vpc.addFlowLog('TestFlowLog');
    expect(flowLog).toBeDefined();
  });

  test('tests extended VPC methods', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCExtended', {
      vpcName: 'test-vpc-extended',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
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

    // Test flow log with analysis
    vpc.createFlowLogwithAnalysis('TestFlowLogAnalysis', {
      oneMinuteFlowLogs: true,
    });

    // Test resolver rules
    vpc.associateSharedResolverRules('TestResolver', {
      domainNames: ['example.com'],
    });

    // Test subnet sharing
    vpc.shareSubnetGroup('TestShare', {
      subnetGroup: {
        name: 'private',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      accounts: ['123456789012'],
    });

    expect(vpc.vpcId).toBeDefined();
    expect(vpc.vpcArn).toBeDefined();
  });

  test('throws error for private personality without name', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPCPrivateName', {
        vpcName: 'test-vpc-private-name',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [{
          personality: SubnetPersonality.PRIVATE,
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
    }).toThrow('A Subnet with a Private personality must have a name');
  });

  test('creates VPC with custom DNS settings', () => {
    new CloudNetwork(stack, 'TestVPCDNS', {
      vpcName: 'test-vpc-dns',
      availabilityZones: ['us-east-1a'],
      enableDnsSupport: false,
      enableDnsHostNames: false,
      subnetConfiguration: [{
        name: 'isolated',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
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

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPC', {
      EnableDnsHostnames: false,
      EnableDnsSupport: false,
    });
  });

  test('creates all personality route types', () => {
    const vpc = new CloudNetwork(stack, 'TestAllPersonalities', {
      vpcName: 'test-all-personalities',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [
        {
          personality: SubnetPersonality.PUBLIC_EGRESS,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NATGATEWAY],
        },
        {
          personality: SubnetPersonality.PUBLIC_INGRESS,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.FIREWALL,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.DMZ,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.LINKNET,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.PRIVATE,
          name: 'private-test',
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

    // Set transit gateway routes to test more routing logic
    vpc.tgRoutes = ['10.0.0.0/8'];

    const routes = vpc.addPersonalityRoutes();
    expect(routes.length).toBe(6); // All 6 personality types

    // Test each personality type has routes
    const privateRoutes = routes.find(r => r.subnetGroup.name === 'private-test');
    expect(privateRoutes?.routes.length).toBeGreaterThan(0);

    const firewallRoutes = routes.find(r => r.subnetGroup.name === 'firewall');
    expect(firewallRoutes?.routes.length).toBeGreaterThan(0);

    const dmzRoutes = routes.find(r => r.subnetGroup.name === 'dmz');
    expect(dmzRoutes?.routes.length).toBeGreaterThan(0);

    const ingressRoutes = routes.find(r => r.subnetGroup.name === 'ingress');
    expect(ingressRoutes?.routes.length).toBeGreaterThan(0);

    const egressRoutes = routes.find(r => r.subnetGroup.name === 'egress');
    expect(egressRoutes?.routes.length).toBeGreaterThan(0);

    const linknetRoutes = routes.find(r => r.subnetGroup.name === 'linknet');
    expect(linknetRoutes?.routes.length).toBeGreaterThan(0);
  });

  test('creates client VPN endpoint', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCClientVPN', {
      vpcName: 'test-vpc-client-vpn',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    const clientVpn = vpc.addClientVpnEndpoint('TestClientVPN', {
      cidr: '10.1.0.0/16',
      serverCertificateArn: 'arn:aws:acm:us-east-1:123456789012:certificate/test',
      userBasedAuthentication: ec2.ClientVpnUserBasedAuthentication.activeDirectory('d-123456789'),
    });
    expect(clientVpn).toBeDefined();
  });

  test('tests removal policy method exists', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCRemoval', {
      vpcName: 'test-vpc-removal',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    expect(typeof vpc.applyRemovalPolicy).toBe('function');
    expect(vpc.vpcId).toBeDefined();
  });

  test('tests network firewall endpoint', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCFirewall', {
      vpcName: 'test-vpc-firewall',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NATGATEWAY],
        },
        {
          name: 'firewall',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
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

    const endpoints = vpc.addNetworkFirewallEndpoint('TestFirewall', {
      firewallArn: 'arn:aws:network-firewall:us-east-1:123456789012:firewall/test',
    });
    expect(endpoints.length).toBeGreaterThan(0);
  });

  test('tests transit gateway attachment', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCTGW', {
      vpcName: 'test-vpc-tgw',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'linknet',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
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

    vpc.attachToTransitGateway('TestTGW', {
      transitGateway: { id: 'tgw-12345' } as any,
      routesToTransitGateway: ['10.0.0.0/8'],
    });

    expect(vpc.transitGatewayAttachment).toBeDefined();
    expect(vpc.tgRoutes).toEqual(['10.0.0.0/8']);
  });

  test('creates VPC with IPv6 netmask length', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCIPv6', {
      vpcName: 'test-vpc-ipv6',
      availabilityZones: ['us-east-1a'],
      ipv6NetmaskLength: 60,
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    expect(vpc.vpcId).toBeDefined();
  });

  test('creates VPC without NAT gateways', () => {
    new CloudNetwork(stack, 'TestVPCNoNAT', {
      vpcName: 'test-vpc-no-nat',
      availabilityZones: ['us-east-1a'],
      createNatGateways: false,
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::NatGateway', 0);
  });

  test('tests service endpoints method exists', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCServiceEndpoints', {
      vpcName: 'test-vpc-service-endpoints',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
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

    expect(typeof vpc.addServiceEndpoints).toBe('function');
    expect(vpc).toBeDefined();
  });

  test('tests VPN gateway enablement', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCVPNGateway', {
      vpcName: 'test-vpc-vpn-gateway',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    vpc.enableVpnGateway({ type: ec2.VpnConnectionType.IPSEC_1 });
    expect(vpc).toBeDefined();
  });

  test('creates deprecated flow log', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCDeprecatedFlowLog', {
      vpcName: 'test-vpc-deprecated-flow-log',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    const flowLog = vpc.addFlowLog('TestDeprecatedFlowLog');
    expect(flowLog).toBeDefined();
  });

  test('throws error for invalid personality in personality routes', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCInvalidPersonality', {
      vpcName: 'test-vpc-invalid-personality',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    // Manually set an invalid personality to test error handling
    vpc.subnetConfigurations[0].personality = 'INVALID' as any;

    expect(() => {
      vpc.addPersonalityRoutes();
    }).toThrow('has an invalid personality property: INVALID');
  });

  test('throws error for unsupported subnet type', () => {
    expect(() => {
      new CloudNetwork(stack, 'TestVPCUnsupportedSubnet', {
        vpcName: 'test-vpc-unsupported',
        availabilityZones: ['us-east-1a'],
        subnetConfiguration: [{
          name: 'test',
          // @ts-ignore - Testing invalid subnet type
          subnetType: 'INVALID_TYPE' as any,
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
    }).toThrow('does not a support the subnet type');
  });

  test('creates nested route stack', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCNestedRoute', {
      vpcName: 'test-vpc-nested-route',
      availabilityZones: ['us-east-1a'],
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    const nestedStack = new NestedRouteStack(stack, 'NestedRoutes', {
      vpc: vpc,
      subnetRoutes: [],
    });

    expect(nestedStack).toBeDefined();
  });

  test('validates DNS settings correctly', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCDNSSettings', {
      vpcName: 'test-vpc-dns-settings',
      availabilityZones: ['us-east-1a'],
      enableDnsSupport: true,
      enableDnsHostNames: false,
      subnetConfiguration: [{
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
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

    expect(vpc.vpcId).toBeDefined();
  });

  test('creates VPC with multiple AZs and complex routing', () => {
    const vpc = new CloudNetwork(stack, 'TestVPCComplexRouting', {
      vpcName: 'test-vpc-complex-routing',
      availabilityZones: ['us-east-1a', 'us-east-1b', 'us-east-1c'],
      subnetConfiguration: [
        {
          personality: SubnetPersonality.PUBLIC_EGRESS,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
          services: [Services.NATGATEWAY],
        },
        {
          personality: SubnetPersonality.PUBLIC_INGRESS,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.FIREWALL,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.DMZ,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.LINKNET,
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        {
          personality: SubnetPersonality.PRIVATE,
          name: 'private-complex',
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

    // Test that all subnet types are created
    expect(vpc.publicSubnets.length).toBe(6); // 2 public personalities * 3 AZs
    expect(vpc.privateSubnets.length).toBe(3); // 1 firewall personality * 3 AZs
    expect(vpc.isolatedSubnets.length).toBe(9); // 3 isolated personalities * 3 AZs

    // Test complex routing
    vpc.tgRoutes = ['10.0.0.0/8', '172.16.0.0/12'];
    const routes = vpc.addPersonalityRoutes();
    expect(routes.length).toBe(6);

    // Verify each personality has appropriate routes
    const privateRoutes = routes.find(r => r.subnetGroup.name === 'private-complex');
    expect(privateRoutes?.routes.length).toBeGreaterThan(5); // Should have multiple routes

    const firewallRoutes = routes.find(r => r.subnetGroup.name === 'firewall');
    expect(firewallRoutes?.routes.length).toBeGreaterThan(2);

    const dmzRoutes = routes.find(r => r.subnetGroup.name === 'dmz');
    expect(dmzRoutes?.routes.length).toBeGreaterThan(6); // Should route all subnets via firewall
  });
});

describe('NestedRouteStack', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
    });
  });

  test('creates nested route stack with all options', () => {
    const igw = new ec2.CfnInternetGateway(stack, 'TestIGW');
    const firewallEndpoints = [{
      endpointId: 'vpce-12345',
      az: 'us-east-1a',
    }];

    const nestedStack = new NestedRouteStack(stack, 'NestedRoutes', {
      vpc: vpc,
      transitGatewayId: 'tgw-12345',
      transitGatewayAttachmentId: 'tgw-attach-12345',
      firewallEndpoints: firewallEndpoints,
      internetGateway: igw,
      subnetRoutes: [],
      internetGatewayRoutes: [{
        name: 'Public',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
    });

    expect(nestedStack).toBeDefined();
  });
});