import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_ram as ram,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

export enum AutoAcceptSharedAttachments {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

export enum DefaultRouteTableAssociation {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

export enum DefaultRouteTablePropagation {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

export enum DnsSupport {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

export enum MulticastSupport {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

export enum VpnEcmpSupport {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

export enum ApplianceModeSupport {
  ENABLE = 'enable',
  DISABLE = 'disable'
}

export enum Ipv6Support {
  ENABLE = 'enable',
  DISABLE = 'disable'
}

export interface TransitGatewayAttachmentOptions {
  readonly applianceModeSupport?: ApplianceModeSupport | undefined;
  readonly dnsSupport?: DnsSupport | undefined;
  readonly ipv6Support?: Ipv6Support | undefined;
}


/**
 * Implmented by `TransitGateway`
 * Obtainable by `TransitGateway.fromTransitGatewayId`
 */
export interface ITransitGateway {
  /**
   * The ID of the transit gateway
   */
  id: string;
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   */
  amazonSideAsn: number;
  /**
   * Arn
   */
  arn: string;
}

/**
 * Transit Gateway Properties
 * TODO: Add all the properties, you think you need.. Document it properly, with defaults
 *  What properties do you need if you are going to CREATE a new TG?  What is optional? what is required?
 * https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.CfnTransitGateway.html#construct-props
 */
export interface TransitGatewayProps {
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   * The range is 64512 to 65534
   *
   * @default 64512
   */
  readonly amazonSideAsn?: number | undefined;

  /**
   * @default disabled
   */
  readonly autoAcceptSharedAttachments?: AutoAcceptSharedAttachments | undefined;

  /**
   * @default enabled
   */
  readonly defaultRouteTableAssociation?: DefaultRouteTableAssociation | undefined;

  /**
   * @default enabled
   */
  readonly defaultRouteTablePropagation?: DefaultRouteTablePropagation | undefined;

  readonly description?: string | undefined;

  /**
   * @default enabled
   */
  readonly dnsSupport?: DnsSupport | undefined;

  /**
   * @default enabled
   */
  readonly multicastSupport?: MulticastSupport | undefined;


  readonly propagationDefaultRouteTableId: string | undefined;

  readonly tags?: core.CfnTag[];


  readonly transitGatewayCidrBlocks?: string[] | undefined;

  /**
   * @default enabled
   */
  readonly vpnEcmpSupport?: VpnEcmpSupport | undefined;

  /**
   * name
   */
  readonly name: string;


}


/**
 * Define a TransitGateway.
 * Implements ITransitGateway
 */
export class TransitGateway extends constructs.Construct implements ITransitGateway {

  public static fromAttributes(id: string, amazonSideAsn: number): ITransitGateway {
    return {
      id: id,
      amazonSideAsn: amazonSideAsn,
      arn: `arn:aws:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:transit-gateway/${id}`,
    };
  }

  // these are the attributes for the construct. The attributes here, must include *ALL* of the attributes in ITransitGateway
  // as we are implmenting ITransitGateway

  /**
   * The id of the transitGateway
   */
  public id: string;

  /**
   * The Private ASN of the TransitGateway
   */
  public amazonSideAsn: number;

  /**
   * The arn of the transitGateway
   */
  public arn: string;

  /**
   * A Name for the TransitGateway
   */
  public name: string;

  /**
   *
   * Default Routing Table.
   */
  public readonly defaultRoutingTableId: string;

  constructor(scope: constructs.Construct, id: string, props: TransitGatewayProps ) {
    super(scope, id);

    //validate the props if appropriate, and throw an error if the values are bogus.
    //make the errors meanginful and informative. Dont' be that guy!

    if ( props.amazonSideAsn ) {
      if (!(props.amazonSideAsn >= 64512 && props.amazonSideAsn <= 65534)) {
        throw new Error('The ASN of a Transit Gateway must be in the range 64512 to 65534');
      }
    }

    const transitGateway = new ec2.CfnTransitGateway(scope, 'Resource', {
      amazonSideAsn: props.amazonSideAsn,
      autoAcceptSharedAttachments: props.autoAcceptSharedAttachments ?? AutoAcceptSharedAttachments.ENABLE,
      defaultRouteTableAssociation: props.defaultRouteTableAssociation ?? DefaultRouteTableAssociation.ENABLE,
      defaultRouteTablePropagation: props.defaultRouteTablePropagation ?? DefaultRouteTablePropagation.ENABLE,
      description: props.description,
      dnsSupport: props.dnsSupport ?? DnsSupport.ENABLE,
      multicastSupport: props.multicastSupport ?? MulticastSupport.ENABLE,
      tags: props.tags,
      vpnEcmpSupport: props.vpnEcmpSupport ?? VpnEcmpSupport.ENABLE,
      transitGatewayCidrBlocks: props.transitGatewayCidrBlocks,
    });


    this.defaultRoutingTableId = new cr.AwsCustomResource(this, 'GetTransitGatewayDefaultRoutingTableId', {
      onCreate: {
        service: 'EC2',
        action: 'describeTransitGatewayDefaultRouteTables',
        parameters: {
          TransitGatewayIds: [transitGateway.attrId],
        },
        physicalResourceId: cr.PhysicalResourceId.of('TransitGatewayDefaultRoutingTableId'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE }),
    }).getResponseField('TransitGatewayDefaultRouteTables[0].RouteTableId');


    this.amazonSideAsn = props.amazonSideAsn ?? 64512;
    this.id = transitGateway.attrId;
    this.arn = `arn:aws:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:transit-gateway/${transitGateway.attrId}`;
    this.name = props.name;
  }

  public shareTransitGateway(accounts: string[]): void {
    new ram.CfnResourceShare(this, `ShareTG-${this.name}`, {
      name: `${this.name}-Share`,
      principals: accounts,
      resourceArns: [this.arn],
      allowExternalPrincipals: false,
      tags: [{
        key: 'r53rshare',
        value: 'cloudsink.net',
      }],
    });
  }

  public attachVpc(vpc: ec2.IVpc, subnets: ec2.SubnetSelection, options?: TransitGatewayAttachmentOptions ): void {

    var subnetIds: string[] = [];
    subnets.subnets?.forEach((subnet) => {
      subnetIds.push(subnet.subnetId);
    });

    new ec2.CfnTransitGatewayAttachment(this, 'MyCfnTransitGatewayAttachment', {
      subnetIds: subnetIds,
      transitGatewayId: this.id,
      vpcId: vpc.vpcId,
      options: options,
    });
  };

  public addRouteToRoutingTable(route: TransitGatewayRoute): void {

    if (route.blackhole && route.transitGatewayAttachmentId) {
      throw new Error('A route can not be both blackholed and have a destination');
    }

    if (!(route.blackhole && route.transitGatewayAttachmentId)) {
      throw new Error('A route must be blackholed or have a destination');
    }

    new ec2.CfnTransitGatewayRoute(this, `tgroute-${route.destinationCidrBlock}`, {
      transitGatewayRouteTableId: route.transitGatewayRouteTableId ?? this.defaultRoutingTableId,
      blackhole: route.blackhole,
      destinationCidrBlock: route.destinationCidrBlock,
      transitGatewayAttachmentId: route.transitGatewayAttachmentId,
    });
  };

  public createDirectConnectGatewayAssociation(dxGatewayId: string, allowedPrefixes: AllowedPrefixes[]): void {

    new cr.AwsCustomResource(this, 'AssociateDXGateway', {
      onCreate: {
        service: 'DirectConnect',
        action: 'createDirectConnectAssociation',
        parameters: {
          DirectConnectGatewayId: dxGatewayId,
          GatewayId: this.id,
          AddAllowedPrefixesToDirectConnectGateway: allowedPrefixes,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('directConnectGatewayAssociation.associationId'),
      },
      onDelete: {
        service: 'DirectConnect',
        action: 'deleteDirectConnectAssociation',
        parameters: {
          associationId: new cr.PhysicalResourceIdReference(),
          addAllowedPrefixesToDirectConnectGateway: allowedPrefixes,
        },
      },
      onUpdate: {
        service: 'DirectConnect',
        action: 'updateDirectConnectGatewayAssociation',
        parameters: {
          associationId: new cr.PhysicalResourceIdReference(),
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE }),
    });
  }

}

export interface TransitGatewayRoute {
  readonly transitGatewayRouteTableId?: string | undefined;
  readonly destinationCidrBlock: string;
  readonly blackhole?: boolean;
  readonly transitGatewayAttachmentId?: string | undefined;
}

export interface AllowedPrefixes {
  readonly cidr: string;
}