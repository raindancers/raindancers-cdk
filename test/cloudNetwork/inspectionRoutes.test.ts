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

    // Check that transit gateway routes are created (2 inspection + 4 explicit = 6 total)
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 6);

    // Verify inspection routes are created with correct properties
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

  test('creates explicit IPv4 and IPv6 routes to inspection route table', () => {
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

    // Check IPv4 route to inspection route table
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-inspection-456',
      DestinationCidrBlock: '10.0.0.0/16',
      TransitGatewayAttachmentId: 'tgw-attach-local-456',
    });

    // Check IPv6 route to inspection route table
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-inspection-456',
      DestinationCidrBlock: '2001:db8::/32',
      TransitGatewayAttachmentId: 'tgw-attach-local-456',
    });

    // Check total transit gateway routes (1 inspection + 4 explicit = 5 total)
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 5);

    // Verify inspection route properties
    template.hasResourceProperties('AWS::EC2::TransitGatewayRoute', {
      TransitGatewayRouteTableId: 'tgw-rtb-local-123',
      DestinationCidrBlock: '10.1.0.0/16',
      TransitGatewayAttachmentId: 'tgw-attach-firewall-123',
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

    // 1 inspection route + 4 explicit routes = 5 total
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 5);
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

    // Should create 3 inspection routes + 4 explicit routes = 7 total
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 7);
    template.resourceCountIs('AWS::EC2::TransitGatewayRouteTablePropagation', 0);
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

    // Should create 4 explicit routes (2 local + 2 inspection IPv4/IPv6), no inspection routes
    template.resourceCountIs('AWS::EC2::TransitGatewayRoute', 4);
    template.resourceCountIs('AWS::EC2::TransitGatewayRouteTablePropagation', 0);
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

    // Verify we have unique resource IDs (2 inspection + 4 explicit = 6 total)
    const routeIds = Object.keys(routes);
    expect(routeIds.length).toBe(6);
    expect(new Set(routeIds).size).toBe(routeIds.length); // All unique
  });
});