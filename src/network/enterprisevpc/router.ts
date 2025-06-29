import * as core from 'aws-cdk-lib';
import {
  aws_logs as logs,
  aws_ec2 as ec2,
  custom_resources as cr,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

import * as enterpriseVpc from './enterpriseVpc';


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


    // Extract all the subnets, these will be tokens
    let allSubnetGroups: enterpriseVpc.SubnetGroup[] = [];
    props.routerGroups.forEach((routerGroup)=> {
      allSubnetGroups.push(routerGroup.subnetGroup);
    });

    props.routerGroups.forEach((routerGroup) => {
      routerGroup.routes.forEach((route) => {

        let routecidr: string[] = [];

        if (route.cidr) {
          routecidr.push(route.cidr as string);
        }

        this.addRoutes({
          cidr: routecidr,
          description: route.description,
          subnetGroups: [routerGroup.subnetGroup.subnet.name],
          destination: route.destination,
        });
      });
    });
  }

  public addRoutes (props: enterpriseVpc.AddRoutesProps): void {

    if ( props.destination === enterpriseVpc.Destination.TRANSITGATEWAY || props.destination === enterpriseVpc.Destination.CLOUDWAN ) {

      var routeTableIds: enterpriseVpc.RouteTableMeta[] = [];

      // get all the routeTableIds for the subnets
      props.subnetGroups.forEach((groupName) => {

        // array of subnets
        const selection = this.vpc.selectSubnets({ subnetGroupName: groupName });

        selection.subnets.forEach((subnet) => {
          routeTableIds.push({
            routeTableId: subnet.routeTable.routeTableId,
            groupName: groupName,
          });
        });
      });


      // check that the cidrs are valid
      const ipRegex = new RegExp('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([1-3][0-2]$|[0-2][0-9]$|0?[0-9]$)');
      const ipv6Regex = new RegExp('(?:(?:(?:[A-F0-9]{1,4}:){6}|(?=(?:[A-F0-9]{0,4}:){0,6}(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?![:.\w]))(([0-9A-F]{1,4}:){0,5}|:)((:[0-9A-F]{1,4}){1,5}:|:)|::(?:[A-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}|(?=(?:[A-F0-9]{0,4}:){0,7}[A-F0-9]{0,4}(?![:.\w]))(([0-9A-F]{1,4}:){1,7}|:)((:[0-9A-F]{1,4}){1,7}|:)|(?:[A-F0-9]{1,4}:){7}:|:(:[A-F0-9]{1,4}){7})(?![:.\w])\/(?:12[0-8]|1[01][0-9]|[1-9]?[0-9])');


      // iterate over the route tables.
      routeTableIds.forEach((routeTableId, index) => {
        props.cidr.forEach((network) => {
          if (!(ipRegex.test(network) || (ipv6Regex.test(network)))) {
            throw new Error(`cidr ${network} is invalid`);
          }

          switch (props.destination) {
            case enterpriseVpc.Destination.CLOUDWAN: {


              const cloudwanroute = new core.CustomResource(this, `${routeTableId.groupName}${index}cloudwanroute${network}`, {
                serviceToken: this.addRoutesProvider.serviceToken,
                properties: {
                  cidr: network,
                  RouteTableId: routeTableId.routeTableId,
                  Destination: props.destination,
                  CloudWanName: this.cloudWanName,
                },
              });

              cloudwanroute.node.addDependency(this.vpcAttachmentCR);

              break;
            }
            case enterpriseVpc.Destination.TRANSITGATEWAY: {

              const waiter = new core.CustomResource(this, `t${routeTableId.groupName}${index}tgwaiter${network}`, {
                serviceToken: this.tgWaiterProvider.serviceToken,
                properties: {
                  transitGatewayId: this.transitGatewayId,
                  transitGatewayAttachmentId: this.transitGatewayAttachmentId,
                },
              });

              if (network.includes('::')) {
                const transitgatewayroute = new ec2.CfnRoute(this, `${routeTableId.groupName}${index}tgroute${network}`, {
                  routeTableId: routeTableId.routeTableId,
                  destinationIpv6CidrBlock: network,
                  transitGatewayId: this.transitGatewayId,
                });
                transitgatewayroute.node.addDependency(waiter);
              } else {
                const transitgatewayroute = new ec2.CfnRoute(this, `${routeTableId.groupName}${index}tgroute${network}`, {
                  routeTableId: routeTableId.routeTableId,
                  destinationCidrBlock: network,
                  transitGatewayId: this.transitGatewayId,
                });
                transitgatewayroute.node.addDependency(waiter);
              }

              break;

            }
            default: {
              throw new Error('No valid destinations for this method. ');
            }
          }
        });
      });
    } else if (props.destination === enterpriseVpc.Destination.NWFIREWALL) {

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

      props.subnetGroups.forEach((subnetGroup) => {
        props.cidr.forEach((destinationCidr) => {


          this.vpc.selectSubnets({ subnetGroupName: subnetGroup }).subnets.forEach((subnet, index) => {

            if (destinationCidr.includes('::')) {
              new ec2.CfnRoute(this, 'FirewallRoute-' + enterpriseVpc.hashProps(props) + subnet.node.path.split('/').pop() + index, {
                destinationIpv6CidrBlock: destinationCidr,
                routeTableId: subnet.routeTable.routeTableId,
                vpcEndpointId: fwDescription.getResponseField(`FirewallStatus.SyncStates.${subnet.availabilityZone}.Attachment.EndpointId`),
              });
            } else {
              new ec2.CfnRoute(this, 'FirewallRoute-' + enterpriseVpc.hashProps(props) + subnet.node.path.split('/').pop() + index, {
                destinationCidrBlock: destinationCidr,
                routeTableId: subnet.routeTable.routeTableId,
                vpcEndpointId: fwDescription.getResponseField(`FirewallStatus.SyncStates.${subnet.availabilityZone}.Attachment.EndpointId`),
              });
            }
          });
        });
      });

    } else if (props.destination === enterpriseVpc.Destination.EC2_INSTANCE ) {

      if (!(props.ec2Instance)) {
        throw new Error('if destination is an EC2_Instance then the instance must be supplied. ');
      }

      props.subnetGroups.forEach((subnetGroup) => {
        props.cidr.forEach((destinationCidr) => {


          this.vpc.selectSubnets({ subnetGroupName: subnetGroup }).subnets.forEach((subnet, index) => {


            new ec2.CfnRoute(this, 'hostRoute-'+ index + subnetGroup, {
              destinationCidrBlock: destinationCidr,
              routeTableId: subnet.routeTable.routeTableId,
              instanceId: props.ec2Instance?.instanceId,
            });
          });
        });
      });

    } else if (props.destination === enterpriseVpc.Destination.INTERNET_GATEWAY ) {

      // Get the Internet Gateway ID using an AWS Custom Resource
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

      props.subnetGroups.forEach((subnetGroup) => {
        props.cidr.forEach((destinationCidr) => {

          this.vpc.selectSubnets({ subnetGroupName: subnetGroup }).subnets.forEach((subnet, index) => {

            if (destinationCidr.includes('::')) {
              console.log('ipv6', destinationCidr);
              new ec2.CfnRoute(this, 'igwRoute-'+ index + subnetGroup, {
                destinationIpv6CidrBlock: destinationCidr,
                routeTableId: subnet.routeTable.routeTableId,
                gatewayId: igwId,
              });
            } else {
              console.log('ipv4', destinationCidr),
              new ec2.CfnRoute(this, 'igwRoute-'+ index + subnetGroup, {
                destinationCidrBlock: destinationCidr,
                routeTableId: subnet.routeTable.routeTableId,
                gatewayId: igwId,
              });
            }
          });
        });
      });

    } else if (props.destination === enterpriseVpc.Destination.GLWB_ENDPOINT) {

      if (!props.endpointTag) {
        throw new Error('endpointTag must be provided when destination is GLWB_ENDPOINT');
      }


      props.subnetGroups.forEach((subnetGroup) => {
        props.cidr.forEach((destinationCidr) => {

          this.vpc.selectSubnets({ subnetGroupName: subnetGroup }).subnets.forEach((subnet, index) => {

            const endPointId = new core.CustomResource(this, `GetEndpointsId${index}${subnet.availabilityZone}${props.cidr}`, {
              serviceToken: this.gwlbEndpoints.serviceToken,
              properties: {
                Name: props.endpointTag,
                AvailabilityZone: subnet.availabilityZone,
              },
            }).getAttString('EndpointId');

            if (destinationCidr.includes('::')) {
              new ec2.CfnRoute(this, 'GWLBRoute' + enterpriseVpc.hashProps(props) + subnet.node.path.split('/').pop() + index, {
                destinationIpv6CidrBlock: destinationCidr,
                routeTableId: subnet.routeTable.routeTableId,
                vpcEndpointId: endPointId,
              });
            } else {
              new ec2.CfnRoute(this, 'GWLBRoute-' + enterpriseVpc.hashProps(props) + subnet.node.path.split('/').pop() + index, {
                destinationCidrBlock: destinationCidr,
                routeTableId: subnet.routeTable.routeTableId,
                vpcEndpointId: endPointId,
              });
            }
          });
        });
      });


      // create a lambda, and service token


    } else {
      throw new Error('Unsupported Destination for Route');
    };

  } // end of add routes
}