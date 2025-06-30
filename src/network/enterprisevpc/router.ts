import * as core from 'aws-cdk-lib';
import {
  aws_logs as logs,
  aws_ec2 as ec2,
  custom_resources as cr,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

import * as enterpriseVpc from './enterpriseVpc';

export interface AddRoutesPropsV2 {
  // a list of cidrs to route
  readonly cidr: string;
  // description
  readonly description: string;
  // the subnet Group to add routes to
  readonly subnetGroup: string;
  // the destination for the route
  readonly destination: enterpriseVpc.Destination;
  // gatewayloadbalancers
  readonly networkFirewallArn?: string | undefined;
  // cloudwanName
  readonly cloudwanName?: string | undefined;
  // ec2instance
  readonly ec2Instance?: ec2.IInstance;
  // gwlbInterfaceEndpointTagName
  readonly endpointTag?: string;
  // firewallendpoitns.
  readonly fwEndpoints?: enterpriseVpc.IFirewallEndpoints[];

}// end of addRoutetoCloudWan


export interface RouteTableMetaV2 {
  readonly routeTableId: string;
  readonly groupName: string;
  readonly az: string;
}

export interface RouterProps {
  readonly vpc: ec2.IVpc;
  readonly routerGroups: enterpriseVpc.RouterGroup[];
  readonly addRoutesProvider: cr.Provider;
  readonly cloudWan?: any | undefined;
  readonly vpcAttachmentCR: core.CustomResource;
  readonly twWaiterProvider: cr.Provider;
  readonly gwlbEndpoints: cr.Provider;
  readonly transitGatewayId?: string | undefined;
  readonly transitGatewayAttachmentId?: string | undefined;
  readonly firewallArn?: string | undefined;

}

export class Router extends constructs.Construct {

  readonly vpc: ec2.IVpc;
  readonly addRoutesProvider: cr.Provider;
  readonly gwlbEndpoints: cr.Provider;
  readonly vpcAttachmentCR: core.CustomResource;
  readonly tgWaiterProvider: cr.Provider;
  readonly cloudWanName: any | undefined;
  readonly transitGatewayId: string | undefined;
  readonly transitGatewayAttachmentId: string | undefined;
  readonly firewallArn: string | undefined;


  constructor(scope: constructs.Construct, id: string, props: RouterProps) {
    super(scope, id);

    this.vpc = props.vpc;
    this.addRoutesProvider = props.addRoutesProvider;
    this.cloudWanName = props.cloudWan;
    this.vpcAttachmentCR = props.vpcAttachmentCR;
    this.tgWaiterProvider = props.twWaiterProvider;
    this.transitGatewayId = props.transitGatewayId;
    this.transitGatewayAttachmentId = props.transitGatewayAttachmentId;
    this.firewallArn = props.firewallArn;
    this.gwlbEndpoints = props.gwlbEndpoints;


    // what is this code used for????
    // Extract all the subnets, these will be tokens
    // let allSubnetGroups: enterpriseVpc.SubnetGroup[] = [];
    // props.routerGroups.forEach((routerGroup)=> {
    //   allSubnetGroups.push(routerGroup.subnetGroup);
    // });

    // subnetGroup: sandpit.alpha,
    //{ cidr: '::/0', description: `${sandpit.name}-alpha->default`, destination: enterprisevpc.Destination.FIREWALL_ENDPOINT },

    props.routerGroups.forEach((routerGroup) => {
      routerGroup.routes.forEach((route) => {

        this.addRoutes({
          cidr: route.cidr,
          description: route.description,
          subnetGroup: routerGroup.subnetGroup.subnet.name,
          destination: route.destination,
          ec2Instance: route.ec2Instance,
        });
      });
    });
  }

  public addRoutes (props: AddRoutesPropsV2): void {

    // validate that the cidrs are valid.
    const ipRegex = new RegExp('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([1-3][0-2]$|[0-2][0-9]$|0?[0-9]$)');
    const ipv6Regex = new RegExp('(?:(?:(?:[A-F0-9]{1,4}:){6}|(?=(?:[A-F0-9]{0,4}:){0,6}(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?![:.\w]))(([0-9A-F]{1,4}:){0,5}|:)((:[0-9A-F]{1,4}){1,5}:|:)|::(?:[A-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}|(?=(?:[A-F0-9]{0,4}:){0,7}[A-F0-9]{0,4}(?![:.\w]))(([0-9A-F]{1,4}:){1,7}|:)((:[0-9A-F]{1,4}){1,7}|:)|(?:[A-F0-9]{1,4}:){7}:|:(:[A-F0-9]{1,4}){7})(?![:.\w])\/(?:12[0-8]|1[01][0-9]|[1-9]?[0-9])');

    if (!(ipRegex.test(props.cidr) || (ipv6Regex.test(props.cidr)))) {
      throw new Error(`cidr ${props.cidr} is invalid`);
    }


    const selection = this.vpc.selectSubnets({ subnetGroupName: props.subnetGroup });

    // get the routeTables that are assocaited with this Group.
    var routeTables: RouteTableMetaV2[] = [];
    selection.subnets.forEach((subnet) => {
      routeTables.push({
        routeTableId: subnet.routeTable.routeTableId,
        groupName: props.subnetGroup,
        az: subnet.availabilityZone,
      });
    });

    // we need to do this for each route table, which is effectively each AZ
    routeTables.forEach((routeTable, index) => {


      switch (props.destination) {

        /**
             * add Routes to CloudWan
             */
        case enterpriseVpc.Destination.CLOUDWAN: {
          const cloudwanroute = new core.CustomResource(this, `${routeTable.groupName}${index}cloudwanroute${props.cidr}`, {
            serviceToken: this.addRoutesProvider.serviceToken,
            properties: {
              cidr: props.cidr,
              RouteTableId: routeTable.routeTableId,
              Destination: props.destination,
              CloudWanName: this.cloudWanName,
            },
          });

          cloudwanroute.node.addDependency(this.vpcAttachmentCR);
          break;
        }

        /**
             * add routes To Transit Gateway
             */
        case enterpriseVpc.Destination.TRANSITGATEWAY: {

          const waiter = new core.CustomResource(this, `t${routeTable.groupName}${index}tgwaiter${props.cidr}`, {
            serviceToken: this.tgWaiterProvider.serviceToken,
            properties: {
              transitGatewayId: this.transitGatewayId,
              transitGatewayAttachmentId: this.transitGatewayAttachmentId,
            },
          });

          const transitgatewayroute = new ec2.CfnRoute(this, `${routeTable.groupName}${index}tgroute${props.cidr}`, {
            routeTableId: routeTable.routeTableId,
            transitGatewayId: this.transitGatewayId,
            ...(props.cidr.includes('::') ? { destinationIpv6CidrBlock: props.cidr } : { destinationCidrBlock: props.cidr }),
          });
          transitgatewayroute.node.addDependency(waiter);

          break;
        }

        /**
             * Add Routes to the NEtwork Firewall
             */
        case enterpriseVpc.Destination.NWFIREWALL: {

          /**
               * the respose from the API call, exceeds 4096, so need to limit it with an output path
               */
          const outputPaths: string[] = [];
          const azlist = core.Stack.of(this).availabilityZones;
          azlist.forEach ((az) => {
            outputPaths.push(`FirewallStatus.SyncStates.${az}.Attachment.EndpointId`);
          });

          const fwDescription = new cr.AwsCustomResource(this, `DescribeFirewall${enterpriseVpc.hashProps(props)}${props.description}`, {
            onCreate: {
              service: 'NetworkFirewall',
              action: 'describeFirewall',
              parameters: {
                FirewallArn: this.firewallArn,
              },
              region: core.Aws.REGION,
              physicalResourceId: cr.PhysicalResourceId.of('DescribeFirewall'),
              outputPaths: outputPaths,
            },
            logRetention: logs.RetentionDays.SEVEN_YEARS,
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
              resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
            }),
          });

          new ec2.CfnRoute(this, 'FirewallRoute-' + enterpriseVpc.hashProps(props) + props.description + index, {
            ...(props.cidr.includes('::') ? { destinationIpv6CidrBlock: props.cidr } : { destinationCidrBlock: props.cidr }),
            routeTableId: routeTable.routeTableId,
            vpcEndpointId: fwDescription.getResponseField(`FirewallStatus.SyncStates.${routeTable.az}.Attachment.EndpointId`),
          });

          break;
        }

        case enterpriseVpc.Destination.EC2_INSTANCE: {

          if (!(props.ec2Instance)) {
            throw new Error('if destination is an EC2_Instance then the instance must be supplied. ');
          }

          new ec2.CfnRoute(this, 'hostRoute-'+ props.description + index, {
            ...(props.cidr.includes('::') ? { destinationIpv6CidrBlock: props.cidr } : { destinationCidrBlock: props.cidr }),
            routeTableId: routeTable.routeTableId,
            instanceId: props.ec2Instance?.instanceId,
          });

          break;
        }

        case enterpriseVpc.Destination.INTERNET_GATEWAY:{

          const igwLookup = new cr.AwsCustomResource(this, `IGWLookup-${enterpriseVpc.hashProps(props)}${props.description}`, {
            onCreate: {
              service: 'EC2',
              action: 'describeInternetGateways',
              parameters: {
                Filters: [
                  {
                    Name: 'attachment.vpc-id',
                    Values: [this.vpc.vpcId],
                  },
                ],
              },
              physicalResourceId: cr.PhysicalResourceId.of('IGWLookup'),
              region: core.Aws.REGION,
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
              resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
            }),
          });

          const igwId = igwLookup.getResponseField('InternetGateways.0.InternetGatewayId');

          new ec2.CfnRoute(this, 'igwRoute-'+ index + props.description, {
            ...(props.cidr.includes('::') ? { destinationIpv6CidrBlock: props.cidr } : { destinationCidrBlock: props.cidr }),
            routeTableId: routeTable.routeTableId,
            gatewayId: igwId,
          });

          break;
        }

        case enterpriseVpc.Destination.GLWB_ENDPOINT: {
          if (!props.endpointTag) {
            throw new Error('endpointTag must be provided when destination is GLWB_ENDPOINT');
          }

          const endPointId = new core.CustomResource(this, `GetEndpointsId${index}${routeTable.az}}${props.cidr}`, {
            serviceToken: this.gwlbEndpoints.serviceToken,
            properties: {
              Name: props.endpointTag,
              AvailabilityZone: routeTable.az,
            },
          }).getAttString('EndpointId');

          new ec2.CfnRoute(this, 'GWLBRoute' + enterpriseVpc.hashProps(props) + props.description + index, {
            ...(props.cidr.includes('::') ? { destinationIpv6CidrBlock: props.cidr } : { destinationCidrBlock: props.cidr }),
            routeTableId: routeTable.routeTableId,
            vpcEndpointId: endPointId,
          });

          break;
        }

        case enterpriseVpc.Destination.FIREWALL_ENDPOINT: {

          if (!props.fwEndpoints) {
            throw new Error('fwEndpoints must be supplied');
          }


          const matchingEndpoint = props.fwEndpoints!.find(endpoint => endpoint.az === routeTable.az);
          if (!matchingEndpoint) {
            throw new Error(`No firewall endpoint found for availability zone: ${routeTable.az}`);
          }
          const endPointId = matchingEndpoint.endpointId;

          new ec2.CfnRoute(this, 'GWLBRoute' + enterpriseVpc.hashProps(props) + props.description + index, {
            ...(props.cidr.includes('::') ? { destinationIpv6CidrBlock: props.cidr } : { destinationCidrBlock: props.cidr }),
            routeTableId: routeTable.routeTableId,
            vpcEndpointId: endPointId,
          });

          break;
        }

        case enterpriseVpc.Destination.IPV6_EGREGSS_ONLY: {
          break;
        }

      }

    });


  } // end of add routes
}