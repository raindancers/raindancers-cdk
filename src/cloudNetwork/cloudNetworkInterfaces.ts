import {
  aws_ec2 as ec2,
  aws_s3 as s3,
} from 'aws-cdk-lib';

import * as firewall from '../network/nwfirewall';
import * as transitGateway from '../network/transitGateway/transitGateway';

export enum StackType {
  IPV4_ONLY = 'IPV4',
  IPV6_ONLY = 'IPV6',
  DUAL_STACK = 'DUALSTACK'
}

export enum Services {
  NWFIREWALL_ENDPOINT = 'NWFW',
  NATGATEWAY = 'NATGW',
}

export enum SubnetPersonality {
  PRIVATE_WITH_EGRESS = 'PRIVATE_WITH_EGRESS',
  PRIVATE = 'PRIVATE',
  FIREWALL = 'FIREWALL',
  DMZ = 'DMZ',
  PUBLIC_INGRESS = 'PUBLIC_INGRESS',
  PUBLIC_EGRESS = 'PUBLIC_EGRESS',
  LINKNET = 'LINKNET',
  ZEROTRUST_INGRESS = 'ZERO_TRUST'
}

export interface ISubnetGroup {
  name?: string;
  subnetType?: ec2.SubnetType;
  stack: StackType;
  ipv4mask: number;
  services?: Services[];
  personality?: SubnetPersonality;
}

export interface IpamConfig {
  readonly ipv6ScopeId: string;
  readonly ipv6PoolId: string;
  readonly ipv4IpamScope: string;
  readonly ipv4IpamPoolId: string;
  readonly eipPool: string;
  /** Use direct API calls instead of CloudFormation for IPAM resources (for regions without full CloudFormation support) */
  readonly useDirectAPICalls?: boolean;
  readonly regionToMakeAPICalls?: string | undefined;
}

export enum ApplianceMode {
  /** enable Connecting VPC to TransitGateway in Appliance Mode */
  ENABLED = 'enable'
}

export enum IpV6Support {
  ENABLED = 'enabled'
}

export interface AttachToTransitGatewayProps {
  /** the TransitGateway to connect to */
	 readonly transitGateway: transitGateway.ITransitGateway;
	 /** Will this be connected in appliance mode ( used if you have Network Firewalls ) */
	 readonly applianceMode?: ApplianceMode | undefined;
	 //** Which Subnet Groups will the attachments be made ( defaults to 'linknet') */
	 readonly attachmentSubnetGroup?: string | undefined;
  // Enable ipv6 Support
  readonly ipv6Support?: IpV6Support | undefined;

  readonly vpc?: ec2.IVpc | undefined;

  readonly tgAttachmentSubnetGroup?: ISubnetGroup | undefined;

  readonly routesToTransitGateway: string[];

  readonly transitGatewayRoutingTable?: transitGateway.ITransitGatewayRouteTable | undefined;
}

export interface AddAwsServiceEndPointsProps {
  readonly services: ec2.InterfaceVpcEndpointAwsService[];
  readonly subnetGroup: ISubnetGroup;
  readonly dynamoDbGateway?: boolean | undefined;
  readonly s3GatewayInterface?: boolean | undefined;
  readonly vpc?: ec2.IVpc | undefined;
  /**
   * Restrict endpoint access to VPC CIDR blocks only (default: true).
   * Automatically restricts to both IPv4 and IPv6 (if available) CIDR blocks.
   * Mutually exclusive with securityGroup.
   */
  readonly restrictToVpcCidrsOnly?: boolean | undefined;
  /**
   * Custom security group for endpoints. Mutually exclusive with restrictToVpcCidrsOnly.
   * Use this if you need custom security rules beyond VPC CIDR restriction.
   */
  readonly securityGroup?: ec2.ISecurityGroup | undefined;
}

export interface FlowLogProps {
  /** the central s3 location for enterprise flow logs */
  readonly bucket?: s3.IBucket | undefined;
  /** 1 minute resolution */
  readonly oneMinuteFlowLogs?: boolean;
  /** create in Account Athena Querys for flow logs*/
  readonly localAthenaQuerys?: boolean;
  /**
   *
   */
  readonly vpc?: ec2.IVpc | undefined;
}

export interface IFirewallEndpoints {
  endpointId: string;
  az: string;
}

export interface ITransitGatewayRouteTable {
  transitGatewayId: string;
  name: string;
}


export interface ShareSubnetGroupProps {
  readonly subnetGroup?: ISubnetGroup;
  readonly subnetGroups?: ISubnetGroup[];
  readonly accounts: string[];
  readonly shareName?: string;
  /**
   * If Defined the method will attempt to use this role to Tag the shared resource in
   * the remote account with cdkTags, so the normal ec2.Vpc methods can be used, such as
   * subnetSelection
   */
  readonly cdkTagResourcesInSharedToAccountRoleName?: string | undefined;

  readonly vpc?: ec2.IVpc | undefined;
}

export interface AssociateSharedResolverRulesProps {
  readonly domainNames: string[];
  readonly vpc?: ec2.IVpc;
}

export interface AddNetworkFirewallEndpointProps {

  /**
   * default 'firewall'
   */
  readonly subnetGroup?: ISubnetGroup | undefined;
  readonly vpc?: ec2.IVpc | undefined;
  readonly firewallArn: string;
}

export interface SubnetAndRoutingTable {
  readonly routeTable: ec2.CfnRouteTable;
  readonly subnet: ec2.ISubnet;
  readonly cfnSubnet: ec2.CfnSubnet;
  readonly subnetType: ec2.SubnetType;
}
/**
 * The Destinations for Adding Routes
 */
export enum NextHop{
  /** route to the cloudwan that the vpc is alttached to */
  CLOUDWAN = 'Cloudwan',
  /** route to the transitGateway that the vpc is attached to */
  TRANSITGATEWAY = 'TransitGateway',
  //** route to a gateway loadbalancer end point */
  NWFIREWALL = 'NetworkFirewall',
  // endpoint
  EC2_INSTANCE = 'EC2',
  // internet Gateway
  INTERNET_GATEWAY = 'INTERNET_GATEWAY',
  //
  IPV6_EGREGSS_ONLY = 'EGRESS_ONLY',
  //
  GLWB_ENDPOINT = 'GATEWAYLB_ENDPOINT',
  //
  FIREWALL_ENDPOINT = 'FIREWALL_ENDPOINT',
  //
  BLACKHOLE = 'BLACK_HOLE',
}


export enum FirewallSubnetMappingIPAddressType {
  DUALSTACK = 'DUALSTACK',
  IPV4 = 'IPV4',
  IPV6 = 'IPV6'
}

export interface RouterGroup {
  readonly subnetGroup: ISubnetGroup;
  readonly routes: Route[];
}

// export interface Route {
//     readonly subnetGroup?: SubnetGroup;
//     readonly cidr?: string;
//     readonly nextHop: NextHop;
//     readonly description: string;
//     readonly ec2Instance?: ec2.IInstance | undefined;
// }

export interface AddRoutesProps {
  readonly subnetGroup: ISubnetGroup;
  readonly route: Route;
}

export interface ISubNetCidrLookup {
  ipv6cidr: string;
  ipv4cidr: string;
  subnetId: string;
}

export interface Route {
  // a list of cidrs to route
  readonly destSubnetGroup?: ISubnetGroup | undefined;
  readonly destCidr?: string | undefined;
  // description
  readonly description: string;

  // the destination for the route
  readonly nextHop: NextHop;
  // gatewayloadbalancers
  readonly networkFirewallArn?: string | undefined;
  // cloudwanName
  readonly cloudwanName?: string | undefined;
  // ec2instance
  readonly ec2Instance?: ec2.IInstance;
  // gwlbInterfaceEndpointTagName
  readonly endpointTag?: string;

}// end of addRoutetoCloudWan


export interface RouteTableMetaV2 {
  readonly routeTableId: string;
  readonly groupName: string;
  readonly az: string;
  readonly subnetId: string;
}

export interface RouterProps {
  readonly vpc: ec2.IVpc;
  readonly transitGatewayId?: string | undefined;
  readonly transitGatewayAttachmentId?: string | undefined;
  readonly firewallEndPoints?: IFirewallEndpoints[] | undefined;
  readonly firewall?: firewall.NetworkFirewall | undefined;
  readonly internetGateway?: ec2.CfnInternetGateway | undefined;
  readonly subnetRoutes: RouterGroup[];
  readonly internetGatewayRoutes: ISubnetGroup[] | undefined;
}

export enum RouterFunctions {
  TGWAITER = 'TGWaiter',
  NWFIREWALL = 'NetworkFirewall',
  CIDR_LOOKUP = 'CidrLookup',
  IPV4_LOOKUP = 'Ipv4CidrLookup'
}

export enum RoutingStrategy {
  /** Route via Network Firewall endpoints (default) */
  FIREWALL_INSPECTION = 'firewall',
  /** Route via Transit Gateway for inspection */
  TRANSIT_GATEWAY_INSPECTION = 'tgw',
  /** Route directly - respects subnet type (IGW for public, NAT for private) */
  DIRECT = 'direct'
}