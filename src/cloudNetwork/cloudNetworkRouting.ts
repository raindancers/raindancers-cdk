import * as path from 'path';
import * as core from 'aws-cdk-lib';
import {
  aws_logs as logs,
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_lambda as lambda,
  aws_iam as iam,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

import * as interfaces from './cloudNetworkInterfaces';

/**
 * Router construct that manages routing configuration for VPC subnets.
 * Handles routing to Transit Gateway, Internet Gateway, Firewall Endpoints, and other destinations.
 */
export class Router extends constructs.Construct {

  readonly vpc: ec2.IVpc;
  readonly transitGatewayId: string | undefined;
  readonly transitGatewayAttachmentId: string | undefined;
  readonly firewallEndpoints: interfaces.IFirewallEndpoints[] | undefined;
  readonly internetGateway?: ec2.CfnInternetGateway | undefined;
  blackhole?: ec2.CfnNetworkInterface | undefined;
  readonly cidrLookup: core.CustomResource;
  readonly routerProvider: cr.Provider;

  /**
   * Creates a new Router construct.
   *
   * @param scope - The parent construct
   * @param id - The construct identifier
   * @param props - Router configuration properties
   */
  constructor(scope: constructs.Construct, id: string, props: interfaces.RouterProps) {
    super(scope, id);

    this.vpc = props.vpc;

    if (props.transitGatewayId) {
      this.transitGatewayAttachmentId = props.transitGatewayAttachmentId;
      this.transitGatewayId = props.transitGatewayId;

      if (props.transitGatewayId && !props.transitGatewayAttachmentId) {
        throw Error('If TransitGateway is supplied, TransitGatewayAttachment must be provided as well');
      }
    }

    if (props.internetGateway) {
      this.internetGateway = props.internetGateway;
    }

    if (props.firewallEndPoints) {
      this.firewallEndpoints = props.firewallEndPoints;
    }


    let environmentVariables: { [key: string]: string } = {};
    if (props.transitGatewayId) {
      environmentVariables.TRANSITGATEWAY_ID = props.transitGatewayId;
    }
    if (props.transitGatewayAttachmentId) {
      environmentVariables.TRANSITGATEWAY_ATTACHMENT_ID = props.transitGatewayAttachmentId;
    }
    environmentVariables.VPC_ID = props.vpc.vpcId;


    this.routerProvider = this.createLambdaProvider(this, 'routerProvider', environmentVariables);

    this.cidrLookup = new core.CustomResource(this, 'cidrLookup', {
      serviceToken: this.routerProvider.serviceToken,
      properties: {
        Function: interfaces.RouterFunctions.CIDR_LOOKUP,
        // this will force the custom resource to update every time CF executes. This
        // is important because the underlying subnets may change, but the properties
        //otherwise have not changed.
        Timestamp: Date.now().toString(),
      },
    });

    // for each Group create a stack
    props.subnetRoutes.forEach((routerGroup) => {
      this.subnetRoutes(routerGroup);
    });

    // if there are routes on the internet gateway add them.
    if (props.internetGatewayRoutes) {
      this.addInternetGatewayRoutesToNWFirewall(props.internetGatewayRoutes);
    }
  }

  /**
   * Adds routes from Internet Gateway to Network Firewall endpoints.
   *
   * @param routes - Array of subnet groups to route through firewall
   * @throws Error if Internet Gateway or Network Firewall endpoints are not configured
   */
  private addInternetGatewayRoutesToNWFirewall(routes: interfaces.ISubnetGroup[] ): void {

    if (!this.internetGateway) {
      throw Error('An internet Gateway is required before Routes can be added');
    }

    if (!this.firewallEndpoints) {
      throw Error('Network Firewall Endpoints ');
    }

    new InternetGatewayRoutes(this, 'igwRoutes', {
      vpc: this.vpc,
      firewallEndpoints: this.firewallEndpoints,
      routes: routes,
      cidrLookup: this.cidrLookup,
      internetGateway: this.internetGateway,
    });
  }


  /**
   * Creates routing configuration for a specific subnet group.
   *
   * @param routerGroup - The router group containing subnet and route definitions
   * @throws Error if route validation fails
   */
  private subnetRoutes(routerGroup: interfaces.RouterGroup): void {

    // validate the routes and create a blackhole if/when needed.
    routerGroup.routes.forEach((route) => {
      if (!route.destCidr && !route.destSubnetGroup) {
        throw new Error('Either a cidr or subnetGroup must be supplied');
      } else if (route.destCidr && route.destSubnetGroup) {
        throw new Error('Only one of cidr or subnetGroup must be supplied');
      }

      if (route.destCidr) {
        this.validateCidr(route.destCidr);
      }

      if (route.nextHop == interfaces.NextHop.BLACKHOLE && !this.blackhole) {
        this.blackhole = new ec2.CfnNetworkInterface(this, 'blackhole', {
          description: 'blackhole',
          subnetId: this.vpc.selectSubnets({ subnetGroupName: routerGroup.subnetGroup.name }).subnetIds[0],
        });
      }

    });

    new SubnetRoutes(this, `${routerGroup.subnetGroup.name}Routes`, {
      routerGroup: routerGroup,
      vpc: this.vpc,
      cidrLookup: this.cidrLookup,
      routerProvider: this.routerProvider,
      internetGateway: this.internetGateway,
      transitGatewayId: this.transitGatewayId,
      firewallEndpoints: this.firewallEndpoints,
      blackhole: this.blackhole,
    });

  }

  /**
   * Creates a Lambda-based custom resource provider for routing operations.
   *
   * @param scope - The parent construct
   * @param id - The provider identifier
   * @param envar - Environment variables for the Lambda function
   * @returns Custom resource provider
   */
  private createLambdaProvider(scope: constructs.Construct, id: string, envar: { [key: string]: string }): cr.Provider {

    const handler = new lambda.Function(scope, `${id}Handler`, {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'router.on_event',
      code: lambda.Code.fromAsset(path.join(__dirname, './assets/lambda/router')),
      timeout: core.Duration.minutes(3),
      environment: envar,
    });


    handler.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['ec2:*', 'logs:*'],
        resources: ['*'],
      }),
    );

    return new cr.Provider(scope, `${id}Provider`, {
      onEventHandler: handler,
      logRetention: logs.RetentionDays.ONE_WEEK,
      isCompleteHandler: handler,
      totalTimeout: core.Duration.minutes(30),
      queryInterval: core.Duration.seconds(30),
    });
  }

  /**
   * Validates IPv4 and IPv6 CIDR notation.
   *
   * @param cidr - The CIDR block to validate
   * @throws Error if CIDR format is invalid
   */
  private validateCidr(cidr: string): void {

    const ipRegex = new RegExp('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([1-3][0-2]$|[0-2][0-9]$|0?[0-9]$)');
    const ipv6Regex = new RegExp('(?:(?:(?:[A-F0-9]{1,4}:){6}|(?=(?:[A-F0-9]{0,4}:){0,6}(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?![:.\w]))(([0-9A-F]{1,4}:){0,5}|:)((:[0-9A-F]{1,4}){1,5}:|:)|::(?:[A-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}|(?=(?:[A-F0-9]{0,4}:){0,7}[A-F0-9]{0,4}(?![:.\w]))(([0-9A-F]{1,4}:){1,7}|:)((:[0-9A-F]{1,4}){1,7}|:)|(?:[A-F0-9]{1,4}:){7}:|:(:[A-F0-9]{1,4}){7})(?![:.\w])\/(?:12[0-8]|1[01][0-9]|[1-9]?[0-9])');

    if (!(ipRegex.test(cidr) || (ipv6Regex.test(cidr)))) {
      throw new Error(`cidr ${cidr} is invalid`);
    }
  }
}


/**
 * Properties for InternetGatewayRoutes nested stack.
 */
interface InternetGatewayRoutesProps extends core.NestedStackProps {
  /** Subnet groups to create routes for */
  routes: interfaces.ISubnetGroup[];
  /** VPC containing the subnets */
  vpc: ec2.IVpc;
  /** Internet Gateway to associate routes with */
  internetGateway: ec2.CfnInternetGateway;
  /** Network Firewall endpoints for routing */
  firewallEndpoints: interfaces.IFirewallEndpoints[];
  /** Custom resource for CIDR lookups */
  cidrLookup: core.CustomResource;
}

/**
 * Nested stack that manages routes from Internet Gateway to Network Firewall endpoints.
 * Creates route table associations and individual routes for each subnet group.
 */
class InternetGatewayRoutes extends core.NestedStack {

  /**
   * Creates Internet Gateway routes to Network Firewall.
   *
   * @param scope - The parent construct
   * @param id - The construct identifier
   * @param props - Configuration properties
   */
  constructor(scope: constructs.Construct, id: string, props: InternetGatewayRoutesProps) {
    super(scope, id, props);

    const routeTable = new ec2.CfnRouteTable(this, 'rt-internetGateway', {
      vpcId: props.vpc.vpcId,
      tags: [{
        key: 'Name',
        value: 'InternetGateway',
      }],
    });

    new core.CfnOutput(this, 'IGWRouteTable', {
      value: routeTable.attrRouteTableId,
    });

    new ec2.CfnGatewayRouteTableAssociation(this, 'rt-igw-assn', {
      gatewayId: props.internetGateway.attrInternetGatewayId,
      routeTableId: routeTable.attrRouteTableId,
    });

    props.routes.forEach((route) => {


      props.firewallEndpoints.forEach((endpoint: { endpointId: string; az: string}) => {


        const destSubnetGroup = props.vpc.selectSubnets(
          {
            subnetGroupName: route.name,
            availabilityZones: [endpoint.az],
          },
        );

        destSubnetGroup.subnets.forEach((subnet, index) => {

          const ipv4Key = `${route.name}_${subnet.availabilityZone}_ipv4`;
          const ipv6Key = `${route.name}_${subnet.availabilityZone}_ipv6`;

          new ec2.CfnRoute(this, `ipv4${route.name}-${endpoint.az}-${index}`, {
            routeTableId: routeTable.attrRouteTableId,
            destinationCidrBlock: props.cidrLookup.getAttString(ipv4Key),
            vpcEndpointId: endpoint.endpointId,
          });

          new ec2.CfnRoute(this, `ipv6${route.name}-${endpoint.az}-${index}`, {
            routeTableId: routeTable.attrRouteTableId,
            destinationIpv6CidrBlock: props.cidrLookup.getAttString(ipv6Key),
            vpcEndpointId: endpoint.endpointId,
          });

        });
      });
    });

  }
}


/**
 * Properties for SubnetRoutes nested stack.
 */
interface SubnetRoutesProps extends core.NestedStackProps {
  /** Router group containing subnet and route definitions */
  routerGroup: interfaces.RouterGroup;
  /** VPC containing the subnets */
  vpc: ec2.IVpc;
  /** Custom resource for CIDR lookups */
  cidrLookup: core.CustomResource;
  /** Custom resource provider for routing operations */
  routerProvider: cr.Provider;
  /** Optional Internet Gateway for IGW routes */
  internetGateway?: ec2.CfnInternetGateway | undefined;
  /** Optional Transit Gateway ID for TGW routes */
  transitGatewayId?: string | undefined;
  /** Optional firewall endpoints for firewall routes */
  firewallEndpoints?: interfaces.IFirewallEndpoints[] | undefined;
  /** Optional blackhole network interface for blackhole routes */
  blackhole?: ec2.CfnNetworkInterface | undefined;
}

/**
 * Nested stack that creates routes for a specific subnet group.
 * Handles different route types including Transit Gateway, Internet Gateway,
 * Firewall Endpoints, EC2 instances, and blackhole routes.
 */
class SubnetRoutes extends core.NestedStack {

  /**
   * Creates routes for a subnet group based on the router group configuration.
   *
   * @param scope - The parent construct
   * @param id - The construct identifier
   * @param props - Configuration properties
   */
  constructor(scope: constructs.Construct, id: string, props: SubnetRoutesProps) {
    super(scope, id, props);


    props.routerGroup.routes.forEach((route) => {

      // build meta for the routes
      const selection = props.vpc.selectSubnets({ subnetGroupName: props.routerGroup.subnetGroup.name });
      // get the routeTables that are associated with this Group
      var routeTables: interfaces.RouteTableMetaV2[] = [];
      selection.subnets.forEach((subnet) => {
        routeTables.push({
          routeTableId: subnet.routeTable.routeTableId,
          groupName: props.routerGroup.subnetGroup.name!,
          az: subnet.availabilityZone,
          subnetId: subnet.subnetId,
        });
      });


      routeTables.forEach((routeTable, index) => {

        let ipV4subnetCidrs: string[] = [];
        let ipV6subnetCidrs: string[] = [];

        if (route.destSubnetGroup) {
          // Get individual subnet CIDRs for each AZ
          const destSubnetGroup = props.vpc.selectSubnets({ subnetGroupName: route.destSubnetGroup.name });

          destSubnetGroup.subnets.forEach((subnet) => {
            const ipv4Key = `${route.destSubnetGroup!.name}_${subnet.availabilityZone}_ipv4`;
            const ipv6Key = `${route.destSubnetGroup!.name}_${subnet.availabilityZone}_ipv6`;

            ipV4subnetCidrs.push(props.cidrLookup.getAttString(ipv4Key));
            ipV6subnetCidrs.push(props.cidrLookup.getAttString(ipv6Key));
          });
        }

        switch (route.nextHop) {

          /**
          * add routes To Transit Gateway
          */
          case interfaces.NextHop.TRANSITGATEWAY: {

            if (!route.destCidr) {
              throw Error('Routes to TransitGateway must have a cidr');
            }


            const waiter = new core.CustomResource(this, `t${routeTable.groupName}${index}tgwaiter${route.destCidr}`, {
              serviceToken: props.routerProvider.serviceToken,
              properties: {
                Function: interfaces.RouterFunctions.TGWAITER,
              },
            });

            const transitgatewayroute = new ec2.CfnRoute(this, `${routeTable.groupName}${index}tgroute${route.destCidr}`, {
              routeTableId: routeTable.routeTableId,
              transitGatewayId: props.transitGatewayId,
              ...(route.destCidr!.includes('::') ? { destinationIpv6CidrBlock: route.destCidr } : { destinationCidrBlock: route.destCidr }),
            });
            transitgatewayroute.node.addDependency(waiter);

            break;
          }

          case interfaces.NextHop.EC2_INSTANCE: {

            if (!(route.ec2Instance)) {
              throw new Error('if destination is an EC2_Instance then the instance must be supplied. ');
            }

            if (!route.destCidr) {
              throw Error('Routes to EC2 must have a cidr');
            }

            new ec2.CfnRoute(this, 'hostRoute-'+ route.description + index, {
              ...(route.destCidr!.includes('::') ? { destinationIpv6CidrBlock: route.destCidr } : { destinationCidrBlock: route.destCidr }),
              routeTableId: routeTable.routeTableId,
              instanceId: route.ec2Instance?.instanceId,
            });

            break;
          }

          case interfaces.NextHop.INTERNET_GATEWAY:{
            if (!props.internetGateway) {
              throw Error('Can not route to internet gateway as non exisits.');
            }

            if (!route.destCidr) {
              throw Error('Routes to InternetGateway must have a cidr');
            }
            new ec2.CfnRoute(this, 'igwRoute-'+ index + route.description, {
              ...(route.destCidr.includes('::') ? { destinationIpv6CidrBlock: route.destCidr } : { destinationCidrBlock: route.destCidr }),
              routeTableId: routeTable.routeTableId,
              gatewayId: props.internetGateway.attrInternetGatewayId,
            });
            break;
          }

          case interfaces.NextHop.FIREWALL_ENDPOINT: {


            if (!props.firewallEndpoints) {
              throw new Error('fwEndpoints must be supplied');
            }
            const matchingEndpoint = props.firewallEndpoints!.find((endpoint: { az: string }) => endpoint.az === routeTable.az);
            if (!matchingEndpoint) {
              throw new Error(`No firewall endpoint found for availability zone: ${routeTable.az}`);
            }

            if (route.destCidr) {


              new ec2.CfnRoute(this, 'FWCidr' + route.description + index + routeTable.az, {
                ...(route.destCidr.includes('::/') ? { destinationIpv6CidrBlock: route.destCidr } : { destinationCidrBlock: route.destCidr }),
                routeTableId: routeTable.routeTableId,
                vpcEndpointId: matchingEndpoint.endpointId,
              });

            } else {

              ipV4subnetCidrs.forEach((subnetCidr, index2) => {

                new ec2.CfnRoute(this, 'FWSubnetsipv4' + route.description + index + index2, {
                  destinationCidrBlock: subnetCidr,
                  routeTableId: routeTable.routeTableId,
                  vpcEndpointId: matchingEndpoint.endpointId,
                });
              });

              ipV6subnetCidrs.forEach((subnetCidr, index2) => {

                new ec2.CfnRoute(this, 'FWSubnetsipv6' + route.description + index + index2, {
                  destinationIpv6CidrBlock: subnetCidr,
                  routeTableId: routeTable.routeTableId,
                  vpcEndpointId: matchingEndpoint.endpointId,
                });
              });
            }
            break;
          }

          case interfaces.NextHop.BLACKHOLE: {


            if (!props.blackhole) {
              throw Error('A blackHole Must exisit');
            }

            if (route.destCidr) {


              new ec2.CfnRoute(this, 'BlackHoleRoute' + route.description + index + routeTable.az, {
                ...(route.destCidr.includes('::') ? { destinationIpv6CidrBlock: route.destCidr } : { destinationCidrBlock: route.destCidr }),
                routeTableId: routeTable.routeTableId,
                networkInterfaceId: props.blackhole.attrId,
              });

            } else {
              ipV4subnetCidrs.forEach((subnetCidr, index2) => {
                new ec2.CfnRoute(this, 'BlackHoleSubnetRouteIpv4' + route.description + index + index2, {
                  ...(subnetCidr.includes('::') ? { destinationIpv6CidrBlock: subnetCidr } : { destinationCidrBlock: subnetCidr }),
                  routeTableId: routeTable.routeTableId,
                  networkInterfaceId: props.blackhole!.attrId,
                });
              });

              ipV6subnetCidrs.forEach((subnetCidr, index2) => {
                new ec2.CfnRoute(this, 'BlackHoleSubnetRouteIpv6' + route.description + index + index2, {
                  destinationIpv6CidrBlock: subnetCidr,
                  routeTableId: routeTable.routeTableId,
                  networkInterfaceId: props.blackhole!.attrId,
                });
              });
            }
            break;
          }

          case interfaces.NextHop.IPV6_EGREGSS_ONLY: {
            break;
          }
        }
      });
    });
  }
}