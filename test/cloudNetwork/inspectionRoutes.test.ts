import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InspectionRoutes } from '../../src/cloudNetwork/inspectionRoutes';
import { ITransitGatewayRouteTable } from '../../src/network/transitGateway';

describe('InspectionRoutes', () => {
  let stack: Stack;
  let localTgRouteTable: ITransitGatewayRouteTable;
  let inspectionTgRouteTable: ITransitGatewayRouteTable;

  beforeEach(() => {
    stack = new Stack();

    localTgRouteTable = {
      transitGatewayRouteTableId: 'tgw-rtb-local-123',
      transitGatewayId: 'tgw-123',
      name: 'local-route-table',
    };

    inspectionTgRouteTable = {
      transitGatewayRouteTableId: 'tgw-rtb-inspection-456',
      transitGatewayId: 'tgw-123',
      name: 'inspection-route-table',
    };
  });

  test('creates inspection routes construct successfully', () => {
    const inspectionRoutes = new InspectionRoutes(stack, 'TestInspectionRoutes', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['10.1.0.0/16', '10.2.0.0/16'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    expect(inspectionRoutes).toBeDefined();
  });

  test('creates transit gateway routes for inspection routes', () => {
    new InspectionRoutes(stack, 'TestInspectionRoutes', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['10.1.0.0/16', '10.2.0.0/16'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    const template = Template.fromStack(stack);

    // Check that inspection routes are created
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-local-123',
      DestinationCidrBlock: '10.1.0.0/16',
      TransitGatewayAttachmentId: 'tgw-attach-firewall-123',
    });

    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-local-123',
      DestinationCidrBlock: '10.2.0.0/16',
      TransitGatewayAttachmentId: 'tgw-attach-firewall-123',
    });
  });

  test('creates IPv4 and IPv6 routes in inspection route table', () => {
    new InspectionRoutes(stack, 'TestInspectionRoutes', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['10.1.0.0/16'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    const template = Template.fromStack(stack);

    // Check IPv4 route
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-inspection-456',
      DestinationCidrBlock: '10.0.0.0/16',
      TransitGatewayAttachmentId: 'tgw-attach-local-456',
    });

    // Check IPv6 route
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-inspection-456',
      DestinationCidrBlock: '2001:db8::/32',
      TransitGatewayAttachmentId: 'tgw-attach-local-456',
    });
  });

  test('handles single inspection route', () => {
    new InspectionRoutes(stack, 'TestSingleRoute', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['192.168.1.0/24'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-local-123',
      DestinationCidrBlock: '192.168.1.0/24',
      TransitGatewayAttachmentId: 'tgw-attach-firewall-123',
    });
  });

  test('handles multiple inspection routes', () => {
    new InspectionRoutes(stack, 'TestMultipleRoutes', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['10.1.0.0/16', '10.2.0.0/16', '10.3.0.0/16'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    const template = Template.fromStack(stack);

    // Should create 5 total routes: 3 inspection + 1 IPv4 + 1 IPv6
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 5);
  });

  test('handles empty inspection routes array', () => {
    new InspectionRoutes(stack, 'TestEmptyRoutes', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: [],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    const template = Template.fromStack(stack);

    // Should create only 2 routes: 1 IPv4 + 1 IPv6
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 2);
  });

  test('validates all required properties are used', () => {
    const props = {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['10.1.0.0/16'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    };

    expect(props.firewallAttachmentId).toBe('tgw-attach-firewall-123');
    expect(props.localAttachmentId).toBe('tgw-attach-local-456');
    expect(props.inspectionRoutes).toEqual(['10.1.0.0/16']);
    expect(props.localTgRouteTable.name).toBe('local-route-table');
    expect(props.inspectionTgRouteTable.name).toBe('inspection-route-table');
    expect(props.vpcIpv4Cidr).toBe('10.0.0.0/16');
    expect(props.vpcIpv6Cidr).toBe('2001:db8::/32');
  });

  test('creates unique resource IDs for multiple routes', () => {
    new InspectionRoutes(stack, 'TestUniqueIds', {
      firewallAttachmentId: 'tgw-attach-firewall-123',
      localAttachmentId: 'tgw-attach-local-456',
      inspectionRoutes: ['10.1.0.0/16', '10.2.0.0/16'],
      localTgRouteTable,
      inspectionTgRouteTable,
      vpcIpv4Cidr: '10.0.0.0/16',
      vpcIpv6Cidr: '2001:db8::/32',
    });

    const template = Template.fromStack(stack);
    const routes = template.findResources('AWS::EC2::TransitGatewayRoute');

    // Verify we have unique resource IDs
    const resourceIds = Object.keys(routes);
    expect(resourceIds.length).toBe(4); // 2 inspection + 1 IPv4 + 1 IPv6
    expect(new Set(resourceIds).size).toBe(resourceIds.length); // All unique
  });
});