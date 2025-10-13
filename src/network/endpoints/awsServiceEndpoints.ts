import {
  aws_ec2 as ec2,
} from 'aws-cdk-lib';
import * as core from 'aws-cdk-lib';
import * as constructs from 'constructs';


/** Properties to create a set of AWS service Endpoints */
export interface AwsServiceEndPointsProps {
  /**
	   * The vpc in which the service is created
	   */
  readonly vpc: ec2.Vpc | ec2.IVpc;
  /**
	   * Subnet Group in which to create the service. Typically a subnet Dedicated to the task
	   */
  readonly subnetGroup: string;
  /**
	   * An arry of InterfaceVPCEndpoints
	   */
  readonly services: ec2.InterfaceVpcEndpointAwsService[];

  /** indicate true for a S3 Gateway Interface  */
  readonly s3GatewayInterface?: boolean;

  /** indicate true for a Dynamo Gateway Interface */
  readonly dynamoDBGatewayInterface?: boolean;

  /**
   * Restrict endpoint access to VPC CIDR blocks only (default: true).
   * Automatically restricts to both IPv4 and IPv6 (if available) CIDR blocks.
   * Mutually exclusive with securityGroup.
   */
  readonly restrictToVpcCidrsOnly?: boolean;

  /**
   * Custom security group for endpoints. Mutually exclusive with restrictToVpcCidrsOnly.
   * Use this if you need custom security rules beyond VPC CIDR restriction.
   */
  readonly securityGroup?: ec2.ISecurityGroup;
}


/**
   * Provisions a set of AWS Service Endpoints in a VPC
   */
export class AwsServiceEndPoints extends constructs.Construct {

  /**
	   * @param scope The scope that this construct is created in
	   * @param id Id for the construct
	   * @param props AWSServiceEndpoints
	   */
  constructor(scope: constructs.Construct, id: string, props: AwsServiceEndPointsProps) {
	  super(scope, id);

	  // Validate mutually exclusive options
	  if (props.securityGroup && props.restrictToVpcCidrsOnly !== undefined) {
	    throw new Error('securityGroup and restrictToVpcCidrsOnly are mutually exclusive. Provide only one.');
	  }

	  let endpoint_sg: ec2.ISecurityGroup;

	  if (props.securityGroup) {
	    endpoint_sg = props.securityGroup;
	  } else {
	    const newSg = new ec2.SecurityGroup(this, 'Endpointsg', {
	      vpc: props.vpc,
	    });

	    const restrictToVpc = props.restrictToVpcCidrsOnly ?? true;

	    if (restrictToVpc) {
	      newSg.addIngressRule(
	        ec2.Peer.ipv4(props.vpc.vpcCidrBlock),
	        ec2.Port.tcp(443),
	        'HTTPS from VPC IPv4',
	      );

	      if (props.vpc instanceof ec2.Vpc && props.vpc.vpcIpv6CidrBlocks && props.vpc.vpcIpv6CidrBlocks.length > 0) {
	        new ec2.CfnSecurityGroupIngress(this, 'Ipv6Ingress', {
	          groupId: newSg.securityGroupId,
	          ipProtocol: 'tcp',
	          fromPort: 443,
	          toPort: 443,
	          cidrIpv6: core.Fn.select(0, props.vpc.vpcIpv6CidrBlocks),
	          description: 'HTTPS from VPC IPv6',
	        });
	      }
	    } else {
	      console.warn('WARNING: VPC endpoint security group allows unrestricted access (0.0.0.0/0). Consider using restrictToVpcCidrsOnly=true or providing a custom securityGroup.');
	      newSg.addIngressRule(
	        ec2.Peer.anyIpv4(),
	        ec2.Port.tcp(443),
	      );
	    }

	    // Remove all egress rules - VPC endpoints are ingress only
	    newSg.connections.allowToAnyIpv4(ec2.Port.tcp(443));
	    const cfnSg = newSg.node.defaultChild as ec2.CfnSecurityGroup;
	    cfnSg.securityGroupEgress = [];

	    endpoint_sg = newSg;
	  }

	  props.services.forEach((service) => {

      new ec2.InterfaceVpcEndpoint(this, `Endpoint${service.shortName}`, {
		  service: service,
		  vpc: props.vpc,
		  lookupSupportedAzs: true,
		  privateDnsEnabled: true,
		  subnets: {
          subnetGroupName: props.subnetGroup,
		  },
		  securityGroups: [endpoint_sg],
      });
	  });

	  if (props.s3GatewayInterface) {
      props.vpc.addGatewayEndpoint('S3GatewayEndpoint', {
		  service: ec2.GatewayVpcEndpointAwsService.S3,
      });
	  };

	  if (props.dynamoDBGatewayInterface) {
      props.vpc.addGatewayEndpoint('DynamoDBGatewayEndpoint', {
		  service: ec2.GatewayVpcEndpointAwsService.DYNAMODB,
      });
	  };
  }
}