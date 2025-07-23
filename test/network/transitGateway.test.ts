import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {
  TransitGateway,
  AutoAcceptSharedAttachments,
  DefaultRouteTableAssociation,
  DefaultRouteTablePropagation,
  DnsSupport,
  MulticastSupport,
  VpnEcmpSupport,
  ApplianceModeSupport,
  Ipv6Support,
  SecurityGroupReferencingSupport,
  TransitGatewayRoute,
} from '../../src/network/transitGateway/transitGateway';

describe('TransitGateway', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('creates transit gateway with minimal configuration', () => {
    new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGateway', {
      AutoAcceptSharedAttachments: 'enable',
      DefaultRouteTableAssociation: 'enable',
      DefaultRouteTablePropagation: 'enable',
      DnsSupport: 'enable',
      MulticastSupport: 'enable',
      VpnEcmpSupport: 'enable',
    });
  });

  test('creates transit gateway with custom ASN', () => {
    new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
      amazonSideAsn: 65000,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGateway', {
      AmazonSideAsn: 65000,
    });
  });

  test('throws error for invalid ASN', () => {
    expect(() => {
      new TransitGateway(stack, 'TestTGW', {
        name: 'test-tgw',
        amazonSideAsn: 64000,
      });
    }).toThrow('The ASN of a Transit Gateway must be in the range 64512 to 65534');

    expect(() => {
      new TransitGateway(stack, 'TestTGW2', {
        name: 'test-tgw-2',
        amazonSideAsn: 66000,
      });
    }).toThrow('The ASN of a Transit Gateway must be in the range 64512 to 65534');
  });

  test('creates transit gateway with all options disabled', () => {
    new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
      autoAcceptSharedAttachments: AutoAcceptSharedAttachments.DISABLE,
      defaultRouteTableAssociation: DefaultRouteTableAssociation.DISABLE,
      defaultRouteTablePropagation: DefaultRouteTablePropagation.DISABLE,
      dnsSupport: DnsSupport.DISABLE,
      multicastSupport: MulticastSupport.DISABLE,
      vpnEcmpSupport: VpnEcmpSupport.DISABLE,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGateway', {
      AutoAcceptSharedAttachments: 'disable',
      DefaultRouteTableAssociation: 'disable',
      DefaultRouteTablePropagation: 'disable',
      DnsSupport: 'disable',
      MulticastSupport: 'disable',
      VpnEcmpSupport: 'disable',
    });
  });

  test('creates transit gateway with description and CIDR blocks', () => {
    new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
      description: 'Test Transit Gateway',
      transitGatewayCidrBlocks: ['10.0.0.0/16', '172.16.0.0/12'],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGateway', {
      Description: 'Test Transit Gateway',
      TransitGatewayCidrBlocks: ['10.0.0.0/16', '172.16.0.0/12'],
    });
  });

  test('creates transit gateway with tags', () => {
    new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
      tags: [
        { key: 'Environment', value: 'test' },
        { key: 'Project', value: 'test-project' },
      ],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGateway', {
      Tags: [
        { Key: 'Environment', Value: 'test' },
        { Key: 'Project', Value: 'test-project' },
      ],
    });
  });

  test('shares transit gateway with accounts', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    tgw.shareTransitGateway(['123456789012', '123456789013']);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RAM::ResourceShare', {
      Name: 'test-tgw-Share',
      Principals: ['123456789012', '123456789013'],
      AllowExternalPrincipals: false,
      Tags: [{ Key: 'r53rshare', Value: 'cloudsink.net' }],
    });
  });

  test('adds routing table', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const routeTable = tgw.addRoutingTable('test-route-table');

    expect(routeTable.name).toBe('test-route-table');
    expect(routeTable.transitGatewayId).toBe(tgw.id);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayRouteTable', {
      TransitGatewayId: { 'Fn::GetAtt': ['Resource', 'Id'] },
      Tags: [{ Key: 'Name', Value: 'test-route-table' }],
    });
  });

  test('attaches VPC with default options', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const vpc = new ec2.Vpc(stack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
    });

    const attachment = tgw.attachVpc(vpc, {
      subnets: vpc.privateSubnets,
    });

    expect(attachment).toBeDefined();

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayAttachment', {
      TransitGatewayId: { 'Fn::GetAtt': ['Resource', 'Id'] },
    });
    template.resourceCountIs('AWS::EC2::TransitGatewayAttachment', 1);
  });

  test('attaches VPC with custom options', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const vpc = new ec2.Vpc(stack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
    });

    tgw.attachVpc(vpc, {
      subnets: vpc.privateSubnets,
    }, {
      applianceModeSupport: ApplianceModeSupport.ENABLE,
      dnsSupport: DnsSupport.DISABLE,
      ipv6Support: Ipv6Support.ENABLE,
      securityGroupReferencingSupport: SecurityGroupReferencingSupport.ENABLE,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayAttachment', {
      Options: {
        applianceModeSupport: 'enable',
        dnsSupport: 'disable',
        ipv6Support: 'enable',
        securityGroupReferencingSupport: 'enable',
      },
    });
  });

  test('adds route to default routing table', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const route: TransitGatewayRoute = {
      destinationCidrBlock: '10.0.0.0/16',
      transitGatewayAttachmentId: 'tgw-attach-12345',
    };

    tgw.addRouteToRoutingTable(route);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      DestinationCidrBlock: '10.0.0.0/16',
      TransitGatewayAttachmentId: 'tgw-attach-12345',
    });
  });

  test('adds blackhole route', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const route: TransitGatewayRoute = {
      destinationCidrBlock: '192.168.0.0/16',
      blackhole: true,
    };

    tgw.addRouteToRoutingTable(route);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      DestinationCidrBlock: '192.168.0.0/16',
      Blackhole: true,
    });
  });

  test('throws error for route with both blackhole and attachment', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const route: TransitGatewayRoute = {
      destinationCidrBlock: '10.0.0.0/16',
      blackhole: true,
      transitGatewayAttachmentId: 'tgw-attach-12345',
    };

    expect(() => {
      tgw.addRouteToRoutingTable(route);
    }).toThrow('A route can not be both blackholed and have a destination');
  });

  test('adds route to custom routing table', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const routeTable = tgw.addRoutingTable('custom-table');

    const route: TransitGatewayRoute = {
      id: 'custom-route',
      transitGatewayRouteTableId: routeTable.transitGatewayRouteTableId,
      destinationCidrBlock: '172.16.0.0/12',
      transitGatewayAttachmentId: 'tgw-attach-67890',
    };

    tgw.addRouteToRoutingTable(route);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      DestinationCidrBlock: '172.16.0.0/12',
      TransitGatewayAttachmentId: 'tgw-attach-67890',
    });
  });

  test('creates direct connect gateway association', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const allowedPrefixes = [
      { cidr: '10.0.0.0/16' },
      { cidr: '172.16.0.0/12' },
    ];

    tgw.createDirectConnectGatewayAssociation('dxgw-12345', allowedPrefixes);

    // Check that the method creates the association without errors
    expect(tgw.id).toBeDefined();
    expect(tgw.name).toBe('test-tgw');
  });

  test('fromAttributes creates ITransitGateway correctly', () => {
    const tgw = TransitGateway.fromAttributes('tgw-12345', 65001);

    expect(tgw.id).toBe('tgw-12345');
    expect(tgw.amazonSideAsn).toBe(65001);
    expect(tgw.arn).toMatch(/arn:aws:ec2:.*:.*:transit-gateway\/tgw-12345/);
  });

  test('sets correct properties on construct', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
      amazonSideAsn: 65100,
      description: 'Test description',
    });

    expect(tgw.name).toBe('test-tgw');
    expect(tgw.amazonSideAsn).toBe(65100);
    expect(tgw.id).toBeDefined();
    expect(tgw.arn).toBeDefined();
    expect(tgw.defaultRoutingTableId).toBeDefined();
  });

  test('creates custom resource for default routing table ID', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    // The custom resource is created internally for getting the default routing table ID
    expect(tgw.defaultRoutingTableId).toBeDefined();
    expect(typeof tgw.defaultRoutingTableId).toBe('string');
  });

  test('uses default ASN when not provided', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    expect(tgw.amazonSideAsn).toBe(64512);
  });

  test('validates ASN boundary values', () => {
    // Test minimum valid ASN
    const tgw1 = new TransitGateway(stack, 'TestTGW1', {
      name: 'test-tgw-1',
      amazonSideAsn: 64512,
    });
    expect(tgw1.amazonSideAsn).toBe(64512);

    // Test maximum valid ASN in separate stack
    const stack2 = new Stack();
    const tgw2 = new TransitGateway(stack2, 'TestTGW2', {
      name: 'test-tgw-2',
      amazonSideAsn: 65534,
    });
    expect(tgw2.amazonSideAsn).toBe(65534);
  });

  test('creates multiple routing tables', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const rt1 = tgw.addRoutingTable('table-1');
    const rt2 = tgw.addRoutingTable('table-2');

    expect(rt1.name).toBe('table-1');
    expect(rt2.name).toBe('table-2');
    expect(rt1.transitGatewayId).toBe(rt2.transitGatewayId);

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::TransitGatewayRouteTable', 2);
  });

  test('attaches multiple VPCs', () => {
    const stack1 = new Stack();
    const stack2 = new Stack();

    const tgw1 = new TransitGateway(stack1, 'TestTGW1', {
      name: 'test-tgw-1',
    });

    const tgw2 = new TransitGateway(stack2, 'TestTGW2', {
      name: 'test-tgw-2',
    });

    const vpc1 = new ec2.Vpc(stack1, 'TestVpc1', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
    });

    const vpc2 = new ec2.Vpc(stack2, 'TestVpc2', {
      ipAddresses: ec2.IpAddresses.cidr('172.16.0.0/16'),
      maxAzs: 2,
    });

    tgw1.attachVpc(vpc1, { subnets: vpc1.privateSubnets });
    tgw2.attachVpc(vpc2, { subnets: vpc2.privateSubnets });

    const template1 = Template.fromStack(stack1);
    const template2 = Template.fromStack(stack2);
    template1.resourceCountIs('AWS::EC2::TransitGatewayAttachment', 1);
    template2.resourceCountIs('AWS::EC2::TransitGatewayAttachment', 1);
  });

  test('creates routes with custom IDs', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const route1: TransitGatewayRoute = {
      id: 'custom-route-1',
      destinationCidrBlock: '10.1.0.0/16',
      transitGatewayAttachmentId: 'tgw-attach-1',
    };

    const route2: TransitGatewayRoute = {
      id: 'custom-route-2',
      destinationCidrBlock: '10.2.0.0/16',
      transitGatewayAttachmentId: 'tgw-attach-2',
    };

    tgw.addRouteToRoutingTable(route1);
    tgw.addRouteToRoutingTable(route2);

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 2);
  });

  test('handles propagation default route table ID', () => {
    new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
      propagationDefaultRouteTableId: 'tgw-rtb-12345',
    });

    const template = Template.fromStack(stack);
    // The propagationDefaultRouteTableId is not directly set in the CloudFormation template
    // It's used internally by the construct
    template.resourceCountIs('AWS::EC2::TransitGateway', 1);
  });

  test('creates transit gateway with all enum values', () => {
    // Test all enum values are properly handled
    new TransitGateway(stack, 'TestTGWEnums', {
      name: 'test-tgw-enums',
      autoAcceptSharedAttachments: AutoAcceptSharedAttachments.ENABLE,
      defaultRouteTableAssociation: DefaultRouteTableAssociation.ENABLE,
      defaultRouteTablePropagation: DefaultRouteTablePropagation.ENABLE,
      dnsSupport: DnsSupport.ENABLE,
      multicastSupport: MulticastSupport.ENABLE,
      vpnEcmpSupport: VpnEcmpSupport.ENABLE,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGateway', {
      AutoAcceptSharedAttachments: 'enable',
      DefaultRouteTableAssociation: 'enable',
      DefaultRouteTablePropagation: 'enable',
      DnsSupport: 'enable',
      MulticastSupport: 'enable',
      VpnEcmpSupport: 'enable',
    });
  });

  test('attachment options enum values work correctly', () => {
    const tgw = new TransitGateway(stack, 'TestTGW', {
      name: 'test-tgw',
    });

    const vpc = new ec2.Vpc(stack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
    });

    // Test all attachment option enum values
    tgw.attachVpc(vpc, {
      subnets: vpc.privateSubnets,
    }, {
      applianceModeSupport: ApplianceModeSupport.DISABLE,
      dnsSupport: DnsSupport.ENABLE,
      ipv6Support: Ipv6Support.DISABLE,
      securityGroupReferencingSupport: SecurityGroupReferencingSupport.DISABLE,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::TransitGatewayAttachment', {
      Options: {
        applianceModeSupport: 'disable',
        dnsSupport: 'enable',
        ipv6Support: 'disable',
        securityGroupReferencingSupport: 'disable',
      },
    });
  });
});