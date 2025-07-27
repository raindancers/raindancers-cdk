import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_networkfirewall as nwfw,
  custom_resources as cr,
  aws_lambda as lambda,
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as interfaces from './cloudNetworkInterfaces';
import * as ipamPlanning from './cloudNetworkIpamPlanning';
import * as mixins from './cloudNetworkMixin';
import * as routing from './cloudNetworkRouting';
import * as firewall from '../network/nwfirewall';

const DEFAULT_IPV6_SUBNET_MASK = 64;
const DEFAULT_IPV4_VPC_MASK = 19;

/**
 * Properties for creating a dual-stack VPC with IPAM-managed IP addressing
 */
export interface CloudNetworkProps {
  /** The name of the VPC */
  readonly vpcName: string;
  /** Configuration for subnet groups to be created in the VPC */
  readonly subnetConfiguration: interfaces.ISubnetGroup[];
  /** List of availability zones where subnets will be created */
  readonly availabilityZones: string[];
  /** IPAM configuration for IPv4 and IPv6 address allocation */
  readonly ipamConfig: interfaces.IpamConfig;
  /**
   * IPv4 netmask length for the VPC CIDR block
   * @default 19
   */
  // amazonq-ignore-next-line
  readonly ipv4NetmaskLength?: number | undefined;
  /**
   * IPv6 netmask length for the VPC CIDR block
   * @default 56
   */
  readonly ipv6NetmaskLength?: number | undefined;
  /**
   * Whether to create an Internet Gateway for the VPC
   * @default true
   */
  readonly createInternetGateway?: boolean | undefined;
  /**
   * Whether to create NAT Gateways in public subnets
   * @default undefined
   */
  readonly createNatGateways?: boolean | undefined;
  /**
   * enable dnsSupport
   */
  readonly enableDnsSupport?: boolean | undefined;
  /**
   * enable DnsHostNames
   */
  readonly enableDnsHostNames?: boolean | undefined;

  readonly waitDuration?: core.Duration | undefined;
}

/**
 * A dual-stack VPC construct that supports both IPv4 and IPv6 addressing using AWS IPAM.
 *
 * This construct creates a VPC with IPAM-managed IP address allocation, supporting multiple
 * subnet types across availability zones with automatic routing configuration.
 *
 * Features:
 * - IPv4 and IPv6 dual-stack networking
 * - IPAM-managed address allocation
 * - Automatic subnet and route table creation
 * - NAT Gateway support for private subnet egress
 * - Internet Gateway for public subnet access
 */
export class CloudNetwork extends constructs.Construct implements ec2.IVpc {
  /** The VPC ID */
  // amazonq-ignore-next-line
  readonly vpcId: string;
  /** The VPC ARN */
  readonly vpcArn: string;
  /** The IPv4 CIDR block assigned to the VPC */
  readonly vpcCidrBlock: string;
  /** List of public subnets in the VPC */

  readonly publicSubnets: ec2.ISubnet[] = [];
  /** List of isolated subnets in the VPC */
  readonly isolatedSubnets: ec2.ISubnet[] = [];
  /** List of private subnets with egress capability */
  readonly privateSubnets: ec2.ISubnet[] = [];
  /** Route table IDs for public subnets */
  readonly publicRouteTableIds: string[] = [];
  /** Route table IDs for isolated subnets */
  readonly isolatedRouteTableIds: string[] = [];
  /** Route table IDs for private subnets */
  readonly privateRouteTableIds: string[] = [];
  /** List of availability zones used by the VPC */
  readonly availabilityZones: string[];
  /** Dependency representing when internet connectivity is established */
  readonly internetConnectivityEstablished: constructs.IDependable;
  /** The CDK stack containing this VPC */
  readonly stack: core.Stack;
  /** The environment (account/region) for this VPC */
  readonly env : core.ResourceEnvironment;
  /** VPN Gateway ID if one is attached */
  readonly vpnGatewayId?: string;
  /** The IPv6 CIDR block assigned to the VPC */
  readonly ipv6CidrBlock: string | undefined;

  subnetCidrLookup: interfaces.ISubNetCidrLookup[] = [];

  /** Map of NAT Gateways by availability zone */
  private readonly natGateways: Map<string, ec2.CfnNatGateway> = new Map();
  /** Internal VPC reference for delegation */
  private readonly _vpc: ec2.IVpc;

  transitGatewayAttachment?: string | undefined;

  tgRoutes?: string[] | undefined;

  /** The Internet Gateway attached to the VPC */
  igw?: ec2.CfnInternetGateway | undefined;

  readonly vpc: ec2.CfnVPC;

  readonly subnetConfigurations: interfaces.ISubnetGroup[];

  networkFirewallEndpoints?: interfaces.IFirewallEndpoints[] | undefined;

  networkFirewall?: firewall.NetworkFirewall | undefined;

  ipamConfig: interfaces.IpamConfig;

  readonly implementBigWait: core.CustomResource | undefined;


  /**
   * Creates a new dual-stack VPC with IPAM-managed addressing.
   *
   * @param scope - The parent construct
   * @param id - The construct ID
   * @param props - Configuration properties for the VPC
   */
  constructor(scope: constructs.Construct, id: string, props: CloudNetworkProps) {
    super(scope, id);


    this.validateProps(props);
    this.stack = core.Stack.of(this);
    this.env = {
      account: this.stack.account,
      region: this.stack.region,
    };
    this.availabilityZones = props.availabilityZones;
    this.ipamConfig = props.ipamConfig;

    this.subnetConfigurations = props.subnetConfiguration;

    // create a vpc
    this.vpc = this.createVpc(props);
    this.vpcId = this.vpc.attrVpcId;
    this.vpcArn = `arn:${core.Aws.PARTITION}:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:vpc/${this.vpc.attrVpcId}`;
    this.internetConnectivityEstablished = constructs.Dependable.of(this.vpc).dependencyRoots;
    this.vpcCidrBlock = this.vpc.attrCidrBlock;

    // attach internet gateway
    if (props.createInternetGateway ?? true) {
      this.attachInternetGateway();
    }

    // create ipam Planning pools for Ipv4 and IPv6
    const ipamPools = new ipamPlanning.IpamVPCPlanningTools(this, 'PlanningTools', {
      ipamConfig: props.ipamConfig,
      vpc: this.vpc,
      vpcName: props.vpcName,
    });

    //this.ipv6CidrBlock = ipamPools.ipv6CidrBlock;


    this.processSubnetConfigurations(props.subnetConfiguration);

    if (props.waitDuration) {
      this.implementBigWait = this.bigWait(props.waitDuration);
    }
    this.createSubnetsAndRoutes(props.subnetConfiguration, props.availabilityZones, ipamPools, this.implementBigWait);


    this._vpc = ec2.Vpc.fromVpcAttributes(this, 'ImportedVpc', {
      vpcId: this.vpc.attrVpcId,
      vpcCidrBlock: this.vpcCidrBlock,
      availabilityZones: this.availabilityZones,

      publicSubnetIds: this.publicSubnets.map(s => s.subnetId),
      publicSubnetNames: props.subnetConfiguration.filter(
        subnet => subnet.subnetType === ec2.SubnetType.PUBLIC).map(subnet => subnet.name!),
      publicSubnetRouteTableIds: this.publicRouteTableIds,

      privateSubnetIds: this.privateSubnets.map(s => s.subnetId),
      privateSubnetNames: props.subnetConfiguration.filter(
        subnet => subnet.subnetType === ec2.SubnetType.PRIVATE_WITH_EGRESS).map(subnet => subnet.name!),
      privateSubnetRouteTableIds: this.privateRouteTableIds,


      isolatedSubnetIds: this.isolatedSubnets.map(s => s.subnetId),
      isolatedSubnetNames: props.subnetConfiguration.filter(
        subnet => subnet.subnetType === ec2.SubnetType.PRIVATE_ISOLATED).map(subnet => subnet.name!),
      isolatedSubnetRouteTableIds: this.isolatedRouteTableIds,
    });
  }

  private createSubnetsAndRoutes(
    subnetConfigurations: interfaces.ISubnetGroup[],
    availabilityZones: string[],
    ipamPools: ipamPlanning.IIpamPlanningTool,
    wait?: core.CustomResource | undefined,
  ): void {
    const sortedSubnetConfig = [...subnetConfigurations].sort((a, b) => {
      if (a.subnetType === ec2.SubnetType.PUBLIC) return -1;
      if (b.subnetType === ec2.SubnetType.PUBLIC) return 1;
      return 0;
    });

    let lastSubnet: ec2.CfnSubnet | undefined;

    let subnetCount: number = 0;

    sortedSubnetConfig.forEach((subnetConfig) => {
      availabilityZones.forEach((zone) => {

        subnetCount += 1;

        const subnetRT = this.createSubnetAndRoutingTable(subnetConfig, zone, ipamPools, wait, lastSubnet);

        lastSubnet = subnetRT.cfnSubnet;

        this.subnetCidrLookup.push({
          ipv6cidr: subnetRT.cfnSubnet.ipv6CidrBlock!,
          ipv4cidr: subnetRT.cfnSubnet.cidrBlock!,
          subnetId: subnetRT.cfnSubnet.attrSubnetId,
        });


        this.addTypeRoutes(subnetConfig, subnetRT, zone);


      });
    });

    if (subnetCount > 200) {
      throw Error(`maximum number of subnets per Vpc is 200, you have ${subnetCount}`);
    }

  }

  private processSubnetConfigurations(subnetConfigurations: interfaces.ISubnetGroup[]): void {
    subnetConfigurations.forEach((subnetConfig) => {
      if (subnetConfig.subnetType && subnetConfig.personality) {
        throw new Error(`Subnet ${subnetConfig.name} must not have both subnetType and personality properties`);
      }

      if (!subnetConfig.subnetType && !subnetConfig.personality) {
        throw new Error(`Subnet ${subnetConfig.name} must have either subnetType or personality property`);
      }

      let subnetType: ec2.SubnetType;
      let subnetName: string | undefined;

      if (subnetConfig.subnetType) {
        subnetType = subnetConfig.subnetType;
      } else {
        switch (subnetConfig.personality) {
          case interfaces.SubnetPersonality.PRIVATE:
            subnetType = ec2.SubnetType.PRIVATE_ISOLATED;
            if (!subnetConfig.name) {
              throw Error('A Subnet with a Private personality must have a name');
            }
            break;
          case interfaces.SubnetPersonality.DMZ:
            subnetType = ec2.SubnetType.PRIVATE_ISOLATED;
            subnetName = 'dmz';
            break;
          case interfaces.SubnetPersonality.PUBLIC_EGRESS:
            subnetType = ec2.SubnetType.PUBLIC;
            subnetName = 'egress';
            break;
          case interfaces.SubnetPersonality.PUBLIC_INGRESS:
            subnetType = ec2.SubnetType.PUBLIC;
            subnetName = 'ingress';
            break;
          case interfaces.SubnetPersonality.LINKNET:
            subnetType = ec2.SubnetType.PRIVATE_ISOLATED;
            subnetName = 'linknet';
            break;
          case interfaces.SubnetPersonality.FIREWALL:
            subnetType = ec2.SubnetType.PRIVATE_WITH_EGRESS;
            subnetName = 'firewall';
            break;
          case interfaces.SubnetPersonality.ZEROTRUST_INGRESS:
            subnetType = ec2.SubnetType.PUBLIC;
            subnetName = 'ztn';
            break;
          default:
            throw new Error(`Subnet ${subnetConfig.name} has an invalid personality property: ${subnetConfig.personality}`);
        }
      }

      subnetConfig.subnetType = subnetType;
      if (subnetName) {
        subnetConfig.name = subnetName;
      }
    });
  }

  private addTypeRoutes(subnetConfig: interfaces.ISubnetGroup, subnetRT:interfaces.SubnetAndRoutingTable, zone: string): void {

    switch (subnetRT.subnetType) {

      case ec2.SubnetType.PUBLIC:

        this.publicRouteTableIds.push(subnetRT.routeTable.attrRouteTableId);
        this.publicSubnets.push(subnetRT.subnet);

        if (this.igw ?? true) {
          // add ipv4 default route
          new ec2.CfnRoute(this, `ipv4_defaultRoute${subnetConfig.name}${zone}`, {
            routeTableId: subnetRT.routeTable.attrRouteTableId,
            destinationCidrBlock: '0.0.0.0/0',
            gatewayId: this.igw?.attrInternetGatewayId,
          });
          // add ipv6 default route
          new ec2.CfnRoute(this, `ipv6_defaultRoute${subnetConfig.name}${zone}`, {
            routeTableId: subnetRT.routeTable.attrRouteTableId,
            destinationIpv6CidrBlock: '::/0',
            gatewayId: this.igw?.attrInternetGatewayId,
          });
        }
        if (subnetConfig.services) {

          // check to see if the only service in subnetConfig.services is interfaces.Services.NATGATEWAY otherwise throw an error
          if (subnetConfig.services.length !== 1 || !subnetConfig.services.includes(interfaces.Services.NATGATEWAY)) {
            throw new Error(`Public subnet ${subnetConfig.name} can only have NATGATEWAY service, found: ${subnetConfig.services.join(', ')}`);
          }

          if (subnetConfig.services.includes(interfaces.Services.NATGATEWAY)) {
            // Create NAT Gateway in public subnet
            // we need to create an eip first, that comes from our public BYOIP address's
            const eip = new ec2.CfnEIP(this, `eip-${subnetConfig.name}-${zone}`, {
              domain: 'vpc',
              ipamPoolId: this.ipamConfig.eipPool,
            });

            const natGateway = new ec2.CfnNatGateway(this, `nat-${subnetConfig.name}-${zone}`, {
              subnetId: subnetRT.subnet.subnetId,
              allocationId: eip.attrAllocationId,
            });
            this.natGateways.set(zone, natGateway);
          }
        }

        break;

        // there are no implicit routes in a private_isolated
      case ec2.SubnetType.PRIVATE_ISOLATED:
        this.isolatedSubnets.push(subnetRT.subnet);
        this.isolatedRouteTableIds.push(subnetRT.routeTable.attrRouteTableId);
        break;

      case ec2.SubnetType.PRIVATE_WITH_EGRESS:
        this.privateSubnets.push(subnetRT.subnet);
        this.privateRouteTableIds.push(subnetRT.routeTable.attrRouteTableId);

        const natGateway = this.natGateways.get(zone);

        if (natGateway) {
          new ec2.CfnRoute(this, `natRoute${subnetConfig.name}${zone}`, {
            routeTableId: subnetRT.routeTable.attrRouteTableId,
            destinationCidrBlock: '0.0.0.0/0',
            natGatewayId: natGateway.attrNatGatewayId,
          });


        } else {
          // amazonq-ignore-next-line
          throw new Error(`NAT Gateway not found for zone ${zone}. Ensure public subnets with NAT Gateway services are created first.`);
        }
        // ipv6 goes directly.
        new ec2.CfnRoute(this, `ipv6_defaultRoute${subnetConfig.name}${zone}`, {
          routeTableId: subnetRT.routeTable.attrRouteTableId,
          destinationIpv6CidrBlock: '::/0',
          gatewayId: this.igw?.attrInternetGatewayId,
        });
        break;

      default:
        throw Error(` does not a support the subnet type ${subnetConfig.subnetType}`);
    }
  };


  private createSubnetAndRoutingTable(
    subnetConfig: interfaces.ISubnetGroup,
    zone: string,
    ipamPools: ipamPlanning.IIpamPlanningTool,
    wait: core.CustomResource | undefined,
    lastSubnet: ec2.CfnSubnet | undefined,
  ): interfaces.SubnetAndRoutingTable {


    let subnetType: ec2.SubnetType;

    if (subnetConfig.subnetType) {
      subnetType = subnetConfig.subnetType;
    } else {
      switch (subnetConfig.personality) {
        case interfaces.SubnetPersonality.PRIVATE:
          subnetType = ec2.SubnetType.PRIVATE_ISOLATED;
          break;
        case interfaces.SubnetPersonality.FIREWALL:
          subnetType = ec2.SubnetType.PRIVATE_WITH_EGRESS;
          break;
        case interfaces.SubnetPersonality.DMZ:
          subnetType = ec2.SubnetType.PRIVATE_ISOLATED;
          break;
        case interfaces.SubnetPersonality.PUBLIC_EGRESS:
          subnetType = ec2.SubnetType.PUBLIC;
          break;
        case interfaces.SubnetPersonality.PUBLIC_INGRESS:
          subnetType = ec2.SubnetType.PUBLIC;
          break;
        case interfaces.SubnetPersonality.LINKNET:
          subnetType = ec2.SubnetType.PRIVATE_ISOLATED;
          break;
        case interfaces.SubnetPersonality.ZEROTRUST_INGRESS:
          subnetType = ec2.SubnetType.PUBLIC;
          break;
        default:
          throw new Error(`Subnet ${subnetConfig.name} has an invalid personality property: ${subnetConfig.personality}`);
      }
    }


    const subnet = new ec2.CfnSubnet(this, `${subnetConfig.name}-${zone}`, {
      vpcId: this.vpc.attrVpcId,
      availabilityZone: zone,
      ipv6IpamPoolId: ipamPools.ipv6PlanningPool.attrIpamPoolId,
      ipv6NetmaskLength: DEFAULT_IPV6_SUBNET_MASK,
      assignIpv6AddressOnCreation: true,
      ipv4IpamPoolId: ipamPools.ipv4PlanningPool.attrIpamPoolId,
      ipv4NetmaskLength: subnetConfig.ipv4mask,
      tags: [
        {
          key: 'Name',
          value: subnetConfig.name!,
        },
        {
          key: 'aws-cdk:subnet-name',
          value: subnetConfig.name!,
        },
        {
          key: 'aws-cdk:subnet-type',
          value: subnetType,
        },
      ],
    });

    if (lastSubnet) {
      subnet.node.addDependency(lastSubnet);
    }

    if (wait) {
      subnet.node.addDependency(wait);
    };
    subnet.node.addDependency(ipamPools.waiter);

    // create a route table
    const routeTable = new ec2.CfnRouteTable(this, `rt-${subnetConfig.name}-${zone}`, {
      vpcId: this.vpcId,
      tags: [{
        key: 'Name',
        value: `${subnetConfig.name}-${zone}`,
      }],
    });
    // associate it with the subnet
    new ec2.CfnSubnetRouteTableAssociation(this, `rtassn-${subnetConfig.name}-${zone}`, {
      routeTableId: routeTable.attrRouteTableId,
      subnetId: subnet.attrSubnetId,
    });

    return {
      routeTable: routeTable,
      subnet: ec2.Subnet.fromSubnetAttributes(this, `isubnet-${subnetConfig.name}-${zone}`, {
        subnetId: subnet.attrSubnetId,
        availabilityZone: zone,
        ipv4CidrBlock: subnet.attrCidrBlock,
        routeTableId: routeTable.attrRouteTableId,
      }),
      cfnSubnet: subnet,
      subnetType: subnetType,
    };
  }


  private createVpc(props: CloudNetworkProps): ec2.CfnVPC {

    const vpc = new ec2.CfnVPC(this, 'vpc', {
      ipv4IpamPoolId: props.ipamConfig.ipv4IpamPoolId,
      ipv4NetmaskLength: props.ipv4NetmaskLength ?? DEFAULT_IPV4_VPC_MASK,
      tags: [{
        key: 'Name',
        value: props.vpcName,
      }],
      enableDnsHostnames: props.enableDnsHostNames ?? true,
      enableDnsSupport: props.enableDnsHostNames ?? true,
    });

    return vpc;
  }

  private attachInternetGateway(): void {
    this.igw = new ec2.CfnInternetGateway(this, 'InternetGateway', {});
    new ec2.CfnVPCGatewayAttachment(this, 'IGWAttachemnet', {
      vpcId: this.vpc.attrVpcId,
      internetGatewayId: this.igw.attrInternetGatewayId,
    });
  }


  private validateProps(props: CloudNetworkProps): void {
    if (!props.availabilityZones || props.availabilityZones.length === 0) {
      throw new Error('At least one availability zone must be specified');
    }
    if (!props.subnetConfiguration || props.subnetConfiguration.length === 0) {
      throw new Error('At least one subnet configuration must be specified');
    }

    const uniquePersonalities = [
      interfaces.SubnetPersonality.FIREWALL,
      interfaces.SubnetPersonality.DMZ,
      interfaces.SubnetPersonality.PUBLIC_INGRESS,
      interfaces.SubnetPersonality.PUBLIC_EGRESS,
      interfaces.SubnetPersonality.LINKNET,
      interfaces.SubnetPersonality.ZEROTRUST_INGRESS,
    ];
    uniquePersonalities.forEach(personality => {
      if (props.subnetConfiguration.filter(subnet => subnet.personality === personality).length > 1) {
        throw new Error(`Only one subnet with personality ${personality} is allowed`);
      }
    });

    // Check for unique subnet names
    const names = props.subnetConfiguration.map(subnet => subnet.name).filter(name => name);
    const duplicateNames = names.filter((name, index) => names.indexOf(name) !== index);
    if (duplicateNames.length > 0) {
      throw new Error(`Duplicate subnet names found: ${duplicateNames.join(', ')}`);
    }

    // Count characters in subnet names

    let namecount: number = 0;
    names.forEach(name => {
      if (name && name.length > 16) {
        throw new Error(`Subnet name '${name}' exceeds 12 character limit (${name.length} characters)`);
      }
      if (name) {
        namecount = namecount + name.length;
      }
    });
    if (namecount > 600) {
      console.warn(`Warning: The total of all subnet name characters (${namecount}) exceeds 600, if you have a large number of subnets
        consider making subnet names as short as possible. You may have issues with the creation of routes as 
        there is a cloudformation limit of 4000 bytes for the subnet Lookups`);
    }


  }


  /**
   * Generates routing configurations based on subnet personalities.
   *
   * This method creates routing rules for each subnet based on its personality type,
   * defining how traffic flows between different subnet types and external destinations.
   * It handles complex routing scenarios including firewall inspection, transit gateway
   * routing, and security isolation between subnet types.
   *
   * @returns Array of router groups containing subnet-specific routing configurations
   *
   * @remarks
   * Routing behaviors by personality:
   * - PRIVATE: Routes internet traffic via firewall, internal traffic via Transit Gateway
   * - FIREWALL: Routes Transit Gateway traffic directly, blackholes ingress traffic
   * - DMZ: Routes all traffic via firewall for inspection
   * - PUBLIC_INGRESS: Blackholes internal subnets, routes internal via Transit Gateway
   * - PUBLIC_EGRESS: Blackholes most internal traffic, routes private subnets via firewall
   * - LINKNET: Routes via Transit Gateway and firewall as appropriate
   */
  public addPersonalityRoutes(): interfaces.RouterGroup[] {

    let routerGroups: interfaces.RouterGroup[] = [];

    // amazonq-ignore-next-line
    const firewallSubnet = this.subnetConfigurations.find(config => config.personality === interfaces.SubnetPersonality.FIREWALL );
    // // amazonq-ignore-next-line
    const dmz = this.subnetConfigurations.find(config => config.personality === interfaces.SubnetPersonality.DMZ);
    // // amazonq-ignore-next-line
    const egress = this.subnetConfigurations.find(config => config.personality === interfaces.SubnetPersonality.PUBLIC_EGRESS);
    // // amazonq-ignore-next-line
    const ingress = this.subnetConfigurations.find(config => config.personality === interfaces.SubnetPersonality.PUBLIC_INGRESS);
    // // amazonq-ignore-next-line
    const linknet = this.subnetConfigurations.find(config => config.personality === interfaces.SubnetPersonality.LINKNET);
    const privateSubnets = this.subnetConfigurations.filter(config => config.personality === interfaces.SubnetPersonality.PRIVATE);

    const ztn = this.subnetConfigurations.find(config => config.personality === interfaces.SubnetPersonality.ZEROTRUST_INGRESS);

    this.subnetConfigurations.forEach((subnetConfig) => {

      if (subnetConfig.personality) {
        switch (subnetConfig.personality) {

          case interfaces.SubnetPersonality.PRIVATE: {
            routerGroups.push({
              subnetGroup: subnetConfig,
              // routes to other private subnet are via Local
              // the routes to igress are local
              routes: [
                // TODO:  these routes can only exisit if there is a firewall Endpoint.
                { destCidr: '0.0.0.0/0', description: `p-ipv4${subnetConfig.name}->internet`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT },
                { destCidr: '::/0', description: `p-ipv6${subnetConfig.name}->internet`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT },


                //Add Routes to the TransitGateway if they exist
                ...(this.tgRoutes ? this.tgRoutes.map(destCidr => ({ destCidr, description: `${subnetConfig.name} to ${destCidr} via Transit Gateway`, nextHop: interfaces.NextHop.TRANSITGATEWAY })) : []),
                // if firewallSubnetGroup is defined, we need to add a route to the blackhole for the firewall subnet
                ...(ztn ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${ztn.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
                ...(linknet ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${linknet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(firewallSubnet ? [{ destSubnetGroup: firewallSubnet, description: `${subnetConfig.name} to  ${firewallSubnet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                //if dmz is defined, we add a route via the FIREWALL_ENDPOINT
                ...(dmz ? [{ destSubnetGroup: dmz, description: `${subnetConfig.name} to  ${dmz.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
                ...(egress ? [{ destSubnetGroup: egress, description: `${subnetConfig.name} to  ${egress.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
              ],
            });
            break;
          }

          case interfaces.SubnetPersonality.FIREWALL: {
            routerGroups.push({
              subnetGroup: subnetConfig,
              // routes to all subnets are via local, does not need to reach ingress or linknet
              // routes to internet are allready established becuase Firewall is a Private with Egress Subnet
              routes: [
                // Add Routes to the TransitGateway if they exist
                ...(this.tgRoutes ? this.tgRoutes.map(destCidr => ({ destCidr, description: `f-Route to ${destCidr} via Transit Gateway`, nextHop: interfaces.NextHop.TRANSITGATEWAY })) : []),
                // if ingress is defined,  for the Blackhole it
                ...(ingress ? [{ destSubnetGroup: ingress, description: `${subnetConfig.name} to  ${ingress.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                // if linkent is defined, blackhole it
                ...(linknet ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${linknet.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
              ],
            });
            break;
          }

          case interfaces.SubnetPersonality.DMZ: {
            routerGroups.push({
              subnetGroup: subnetConfig,
              routes: [
                { destCidr: '0.0.0.0/0', description: `d-ipv4${subnetConfig.name}->internet`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT },
                { destCidr: '::/0', description: `d-ipv6${subnetConfig.name}->internet`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT },
                // All local subnets must route via the firewall.
                ...(this.subnetConfigurations.map(destSubnetGroup => ({ destSubnetGroup, description: `${subnetConfig.name} to  ${destSubnetGroup.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }))),
              ],
            });
            break;
          }

          // ingress is to allow traffic orginating from the internet.
          case interfaces.SubnetPersonality.PUBLIC_INGRESS: {
            // routes to Internet are included because this is a public subnet
            routerGroups.push({
              subnetGroup: subnetConfig,
              routes: [
                ...(egress ? [{ destSubnetGroup: egress, description: `${subnetConfig.name} to  ${egress.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(firewallSubnet ? [{ destSubnetGroup: firewallSubnet, description: `${subnetConfig.name} to  ${firewallSubnet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(dmz ? [{ destSubnetGroup: dmz, description: `${subnetConfig.name} to  ${dmz.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(linknet ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${linknet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                // internal routes should be sent via the Transit Gateway, ( note not via Firewall!)
                ...(this.tgRoutes ? this.tgRoutes.map(destCidr => ({ destCidr, description: `${subnetConfig.name} to ${destCidr} via Transit Gateway`, nextHop: interfaces.NextHop.TRANSITGATEWAY })) : []),
              ],
            });
            break;
          }

          case interfaces.SubnetPersonality.PUBLIC_EGRESS: {
            // routes to Transit Gateway are included because this is a public subnet
            routerGroups.push({
              subnetGroup: subnetConfig,
              // routes to all subnets are via local, does not need to reach ingress or linknet
              // routes to internet are allready established becuase Firewall is a Private with Egress Subnet
              routes: [
                ...(ztn ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${ztn.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(ingress ? [{ destSubnetGroup: ingress, description: `${subnetConfig.name} to  ${ingress.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(firewallSubnet ? [{ destSubnetGroup: firewallSubnet, description: `${subnetConfig.name} to  ${firewallSubnet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(linknet ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${linknet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(dmz ? [{ destSubnetGroup: dmz, description: `${subnetConfig.name} to  ${dmz.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
                // all private subnets shoudl be via the firewall
                ...(privateSubnets.map(destSubnetGroup => ({ destSubnetGroup, description: `${subnetConfig.name} to  ${destSubnetGroup.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }))),
              ],
            });
            break;
          }

          case interfaces.SubnetPersonality.LINKNET: {
            routerGroups.push({
              subnetGroup: subnetConfig,
              routes: [
                ...(this.tgRoutes ? this.tgRoutes.map(destCidr => ({ destCidr, description: `l-Route to ${destCidr} via Transit Gateway`, nextHop: interfaces.NextHop.TRANSITGATEWAY })) : []),
                ...(firewallSubnet ? [{ destSubnetGroup: firewallSubnet, description: `${subnetConfig.name} to  ${firewallSubnet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(egress ? [{ destSubnetGroup: egress, description: `${subnetConfig.name} to  ${egress.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
                ...(dmz ? [{ destSubnetGroup: dmz, description: `${subnetConfig.name} to  ${dmz.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
              ],
            });
            break;
          }

          case interfaces.SubnetPersonality.ZEROTRUST_INGRESS: {
            routerGroups.push({
              subnetGroup: subnetConfig,
              routes: [
                ...(this.tgRoutes ? this.tgRoutes.map(destCidr => ({ destCidr, description: `l-Route to ${destCidr} via Transit Gateway`, nextHop: interfaces.NextHop.TRANSITGATEWAY })) : []),
                ...(firewallSubnet ? [{ destSubnetGroup: firewallSubnet, description: `${subnetConfig.name} to  ${firewallSubnet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(egress ? [{ destSubnetGroup: firewallSubnet, description: `${subnetConfig.name} to  ${egress.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(linknet ? [{ destSubnetGroup: linknet, description: `${subnetConfig.name} to  ${linknet.name}`, nextHop: interfaces.NextHop.BLACKHOLE }] : []),
                ...(dmz ? [{ destSubnetGroup: dmz, description: `${subnetConfig.name} to  ${dmz.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }] : []),
                // all private subnets shoudl be via the firewall
                ...(privateSubnets.map(destSubnetGroup => ({ destSubnetGroup, description: `${subnetConfig.name} to  ${destSubnetGroup.name}`, nextHop: interfaces.NextHop.FIREWALL_ENDPOINT }))),
              ],
            });
            break;
          }


          default:
            throw new Error(`Subnet ${subnetConfig.name} has an invalid personality property: ${subnetConfig.personality}`);
        }
      }
    });
    return routerGroups;
  }


  /**
   * Selects subnets from the VPC based on the provided criteria.
   *
   * @param selection - Criteria for selecting subnets
   * @returns Selected subnets matching the criteria
   */
  public selectSubnets(selection: ec2.SubnetSelection = {}): ec2.SelectedSubnets {
    // amazonq-ignore-next-line
    // amazonq-ignore-next-line
    return this._vpc.selectSubnets(selection);
  }


  /**
   * Adds a VPN Gateway to this VPC for site-to-site connectivity.
   *
   * @param options - Configuration options for the VPN Gateway
   */
  public enableVpnGateway(options: ec2.EnableVpnGatewayOptions): void {
    // amazonq-ignore-next-line
    return this._vpc.enableVpnGateway(options);
  }

  /**
   * Adds a new VPN connection to this VPC for site-to-site connectivity.
   *
   * @param id - Unique identifier for the VPN connection
   * @param options - Configuration options for the VPN connection
   * @returns The created VPN connection
   */
  public addVpnConnection(id: string, options: ec2.VpnConnectionOptions): ec2.VpnConnection {
    return this._vpc.addVpnConnection(id, options);
  }

  /**
   * Adds a new client VPN endpoint to this VPC for remote user access.
   *
   * @param id - Unique identifier for the client VPN endpoint
   * @param options - Configuration options for the client VPN endpoint
   * @returns The created client VPN endpoint
   */
  // amazonq-ignore-next-line
  public addClientVpnEndpoint(id: string, options: ec2.ClientVpnEndpointOptions): ec2.ClientVpnEndpoint {
    return this._vpc.addClientVpnEndpoint(id, options);
  }

  /**
   * Adds a new gateway endpoint to this VPC for AWS service access.
   *
   * @param id - Unique identifier for the gateway endpoint
   * @param options - Configuration options for the gateway endpoint
   * @returns The created gateway VPC endpoint
   */
  public addGatewayEndpoint(id: string, options: ec2.GatewayVpcEndpointOptions): ec2.GatewayVpcEndpoint {
    return this._vpc.addGatewayEndpoint(id, options);
  }

  /**
   * Adds a new interface endpoint to this VPC for private AWS service access.
   *
   * @param id - Unique identifier for the interface endpoint
   * @param options - Configuration options for the interface endpoint
   * @returns The created interface VPC endpoint
   */
  public addInterfaceEndpoint(id: string, options: ec2.InterfaceVpcEndpointOptions): ec2.InterfaceVpcEndpoint {
    return this._vpc.addInterfaceEndpoint(id, options);
  }
  /**
   * Adds a new Flow Log to this VPC
   * @deprecated use createFlowLogwithAnalysis()
   */
  // amazonq-ignore-next-line
  public addFlowLog(id: string, options?: ec2.FlowLogOptions): ec2.FlowLog {
    return this._vpc.addFlowLog(id, options);
  }

  /**
   * Applies a removal policy to the VPC resources.
   *
   * @param policy - The removal policy to apply
   */
  public applyRemovalPolicy(policy: core.RemovalPolicy): void {
    this._vpc.applyRemovalPolicy(policy);
  }


  /** Extended methods beyond standard IVpc interface */

  /**
   * Adds multiple AWS service endpoints to the VPC in a single operation.
   *
   */
  public addServiceEndpoints(id: string, endpoints: interfaces.AddAwsServiceEndPointsProps): void {
    mixins.DualStackVpcMethods.addServiceEndpoints(this, id, {
      ...endpoints,
      vpc: this._vpc,
    });
  }

  /**
   * Creates VPC Flow Logs with optional Athena analysis capabilities.
   *
   * @param id - Unique identifier for the flow log resources
   * @param props - Configuration properties for flow log creation
   */
  public createFlowLogwithAnalysis(id: string, props: interfaces.FlowLogProps): void {
    mixins.DualStackVpcMethods.createFlowLogwithAnalysis(this, id, {
      ...props,
      vpc: this._vpc,
    });
  }

  /**ToAttaches this VPC to a Transit Gateway for inter-VPC connectivity.
   *
   * @param id - Unique identifier for the Transit Gateway attachment
   * @param props - Configuration properties for the attachment
   */
  public attachToTransitGateway(id: string, props: interfaces.AttachToTransitGatewayProps): string {

    this.transitGatewayAttachment = mixins.DualStackVpcMethods.attachToTransitGateway(this, id, {
      ...props,
      vpc: this._vpc,
    });

    this.tgRoutes = props.routesToTransitGateway;

    return this.transitGatewayAttachment;
  }

  /**
   * Shares subnet groups with other AWS accounts using Resource Access Manager.
   *
   * @param id - Unique identifier for the resource share
   * @param props - Configuration properties for sharing subnet groups
   */
  public shareSubnetGroup( id: string, props: interfaces.ShareSubnetGroupProps): void {
    mixins.DualStackVpcMethods.shareSubnetGroup(this, id, {
      ...props,
      vpc: this._vpc,
    });
  }

  /**
   * Associates shared Route 53 resolver rules with this VPC for DNS resolution.
   *
   * @param id - Unique identifier for the resolver rule associations
   * @param props - Configuration properties for associating resolver rules
   */
  public associateSharedResolverRules(id: string, props: interfaces.AssociateSharedResolverRulesProps ): void {

    mixins.DualStackVpcMethods.associateSharedResolverRules(this, id, {
      ...props,
      vpc: this._vpc,
    });
  }

  /**
   * Adds AWS Network Firewall endpoints to this VPC for traffic inspection.
   *
   * @param id - Unique identifier for the firewall endpoint associations
   * @param props - Configuration properties for the firewall endpoints
   * @returns Array of firewall endpoint objects with endpoint IDs and availability zones
   */
  public addNetworkFirewallEndpoint(id: string, props: interfaces.AddNetworkFirewallEndpointProps): interfaces.IFirewallEndpoints[] {

    this.networkFirewallEndpoints = mixins.DualStackVpcMethods.addNetworkFirewallEndpoint(this, id, {
      ...props,
      vpc: this._vpc,
    });

    return this.networkFirewallEndpoints;

  }

  public addNetworkFirewall(
    firewallName: string,
    firewallPolicy: nwfw.CfnFirewallPolicy,
    subnet: interfaces.ISubnetGroup,
    ipStackMode?: firewall.FirewallSubnetMappingIPAddressType | undefined,
  ): void {

    this.networkFirewall = new firewall.NetworkFirewall(this, 'NetworkFirewall', {
      firewallName: firewallName,
      firewallPolicy: firewallPolicy,
      subnetGroup: subnet.name!,
      iPStackMode: ipStackMode ?? firewall.FirewallSubnetMappingIPAddressType.DUALSTACK,
      vpc: this._vpc,
    });
  }

  private bigWait(duration: core.Duration): core.CustomResource {

    const poolCidrWaiterFn = new lambda.Function(this, 'poolCidrWaiterFn', {
      // amazonq-ignore-next-line
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'bigwait.handler',
      timeout: core.Duration.minutes(2),
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudNetwork/lambda/ipam/')),
      logGroup: new logs.LogGroup(this, 'poolCidrWaiterLogGroup', {
        retention: logs.RetentionDays.ONE_WEEK,
      }),
      loggingFormat: lambda.LoggingFormat.JSON,
      systemLogLevelV2: lambda.SystemLogLevel.INFO,
      applicationLogLevelV2: lambda.ApplicationLogLevel.INFO,
    });

    const provider = new cr.Provider(this, 'poolCidrWaiterProvider', {
      onEventHandler: poolCidrWaiterFn,
      isCompleteHandler: poolCidrWaiterFn,
      queryInterval: core.Duration.seconds(30),
      totalTimeout: core.Duration.minutes(30),
    });

    return new core.CustomResource(this, 'bigWait', {
      serviceToken: provider.serviceToken,
      properties: {
        TimerDuration: duration.toSeconds(),
        StartTimer: new Date().toISOString(),
      },
    });
  }

}

/**
 * Properties for creating a nested stack containing routing configurations.
 */
export interface NestedRouteStackProps extends core.NestedStackProps {
  /** The VPC to configure routing for */
  readonly vpc: ec2.IVpc;
  /** Transit Gateway ID for inter-VPC routing */
  readonly transitGatewayId?: string | undefined;
  /** Transit Gateway attachment ID for this VPC */
  readonly transitGatewayAttachmentId?: string | undefined;
  /** Network Firewall endpoints for traffic inspection */
  readonly firewallEndpoints?: interfaces.IFirewallEndpoints[] | undefined;
  /** Internet Gateway for public subnet routing */
  readonly nwfirewall?: firewall.NetworkFirewall | undefined;
  readonly internetGateway?: ec2.CfnInternetGateway | undefined;
  /** Subnet-specific routing configurations */
  readonly subnetRoutes: interfaces.RouterGroup[];
  /** Subnet groups that should route via Internet Gateway */
  readonly internetGatewayRoutes?: interfaces.ISubnetGroup[] | undefined;
}

/**
 * A nested stack that contains routing configurations for a VPC.
 *
 * This nested stack creates and manages all routing tables and routes for a VPC,
 * including Transit Gateway routes, firewall inspection routes, and internet routing.
 * Using a nested stack helps organize complex routing configurations separately
 * from the main VPC infrastructure.
 */
export class NestedRouteStack extends core.NestedStack {

  /**
   * Creates a new nested routing stack.
   *
   * @param scope - The parent construct
   * @param id - The construct ID
   * @param props - Configuration properties for the routing stack
   */
  constructor(scope: constructs.Construct, id: string, props: NestedRouteStackProps) {
    super(scope, id, props);

    new routing.Router(this, 'Router', {
      vpc: props.vpc,
      transitGatewayId: props.transitGatewayId,
      transitGatewayAttachmentId: props.transitGatewayAttachmentId,
      subnetRoutes: props.subnetRoutes,
      firewallEndPoints: props.firewallEndpoints,
      firewall: props.nwfirewall,
      internetGateway: props.internetGateway,
      internetGatewayRoutes: props.internetGatewayRoutes,
    });
  }
}