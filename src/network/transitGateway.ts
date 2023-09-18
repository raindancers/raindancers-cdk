import {
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


/**
 * Implmented by `TransitGateway`
 * Obtainable by `TransitGateway.fromTransitGatewayId`
 *
 * TO DO: Add all the possible attributes of a TransitGateway here.   Think carefully about if they will *always*
 * exist, or if they may only exisit sometimes
 * https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.CfnTransitGateway.html#properties
 * Create proper doc strings
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
  amazonSideAsn?: number | undefined;
}


/**
 * Define a TransitGateway.
 * Implements ITransitGateway
 */
export class TransitGateway extends constructs.Construct implements ITransitGateway {

  // these are the attributes for the construct. The attributes here, must include *ALL* of the attributes in ITransitGateway
  // as we are implmenting ITransitGateway

  /**
   * The id of the transitGateway
   */
  public readonly id: string;

  /**
   * The Private ASN of the TransitGateway
   */
  public readonly amazonSideAsn: number;

  constructor(scope: constructs.Construct, id: string, props: TransitGatewayProps ) {
    super(scope, id);

    //validate the props if appropriate, and throw an error if the values are bogus.
    //make the errors meanginful and informative. Dont' be that guy!

    if ( props.amazonSideAsn ) {
      if (!(props.amazonSideAsn >= 64512 && props.amazonSideAsn <= 65534)) {
        throw new Error('The ASN of a Transit Gateway must be in the range 64512 to 65534');
      }
    }


    // Expand this out so, it will take all the props you want to give it.
    // Note that this resources is Resource. This is CDK convention, to name the main resource 'Resource'
    // this makes it possible to use Escape Hatches, when you need to. You can only have one thing called Resource in a construct

    const transitGateway = new ec2.CfnTransitGateway(scope, 'Resource', {
      amazonSideAsn: props.amazonSideAsn,
    });

    // set the values for the attributes of the class.    Line 87 has an error. ( on purpose ). Resolve it.
    this.amazonSideAsn = props.amazonSideAsn ?? 64512;
    this.id = transitGateway.attrId;
  }
}