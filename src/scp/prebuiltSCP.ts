import {
  aws_organizations as organizations,
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import {
  PolicyType,
  IServiceControlPolicy,
} from './index';


export abstract class PreBuiltServiceControlPolicy {

  /**
   * Restrict Actions to all allowed list
   * @param scope
   * @param id
   * @param regions array of valid regions
   * @returns
   */
  public static allowedRegions(scope: constructs.Construct, id: string, regions: string[]): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();
    policy.addStatements(
      new iam.PolicyStatement({
        notActions: [
          'a4b:*',
          'acm:*',
          'aws-marketplace-management:*',
          'aws-marketplace:*',
          'aws-portal:*',
          'awsbillingconsole:*',
          'budgets:*',
          'ce:*',
          'chime:*',
          'cloudfront:*',
          'config:*',
          'cur:*',
          'directconnect:*',
          'ec2:DescribeRegions',
          'ec2:DescribeTransitGateways',
          'ec2:DescribeVpnGateways',
          'fms:*',
          'globalaccelerator:*',
          'health:*',
          'iam:*',
          'importexport:*',
          'kms:*',
          'mobileanalytics:*',
          'networkmanager:*',
          'organizations:*',
          'pricing:*',
          'route53:*',
          'route53domains:*',
          's3:GetAccountPublic*',
          's3:ListAllMyBuckets',
          's3:PutAccountPublic*',
          'shield:*',
          'sts:*',
          'support:*',
          'trustedadvisor:*',
          'waf-regional:*',
          'waf:*',
          'wafv2:*',
          'wellarchitected:*',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringNotEquals: {
            'aws:RequestedRegion': regions,
          },
        },
      }),
    );

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'only permit activity in selected regions',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   * RestrictRootUser in Account. This should ideally be applyed at the account leel
   * @param scope
   * @param id
   * @returns
   */
  public static restrictRootUser(scope: constructs.Construct, id: string): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();
    policy.addStatements(
      new iam.PolicyStatement({
        actions: ['*'],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringEquals: {
            'aws:PrincipalArn': ['arn:aws:iam::*:root'],
          },
        },
      }),
    );

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Deny Root Activity',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   * Prevent creating new IAM user Accounts
   *
   * @param scope
   * @param id
   * @param excludedRoleArns, Roles which are excluded from the SCP
   * @returns
   */
  public static preventNewIamUser(scope: constructs.Construct, id: string, excludedRoleArns?: string[]): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();

    if ( excludedRoleArns ) {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'iam:CreateUser',
          'iam:CreateAccessKey',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringNotEquals: {
            'aws:PrincipalARN': excludedRoleArns,
          },
        },
      }));
    } else {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'iam:CreateUser',
          'iam:CreateAccessKey',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
      }));
    }

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Creation of IAM Users',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   *
   * @param scope
   * @param id
   * @param excludedRoleArns
   * @returns
   */
  public static preventVPCWithInternetAccess(scope: constructs.Construct, id: string, excludedRoleArns?: string[]): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();

    if (excludedRoleArns) {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'ec2:AttachInternetGateway',
          'ec2:CreateInternetGateway',
          'ec2:AttachEgressOnlyInternetGateway',
          'ec2:CreateVpcPeeringConnection',
          'ec2:AcceptVpcPeeringConnection',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringNotEquals: {
            'aws:PrincipalARN': excludedRoleArns,
          },
        },
      }));
    } else {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'ec2:AttachInternetGateway',
          'ec2:CreateInternetGateway',
          'ec2:AttachEgressOnlyInternetGateway',
          'ec2:CreateVpcPeeringConnection',
          'ec2:AcceptVpcPeeringConnection',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
      }));
    }

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Creation of VPC With InternetAccess',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   *
   * @param scope
   * @param id
   * @param excludedRoleArns
   * @returns
   */
  public static preventVPCSettingsChange(scope: constructs.Construct, id: string, excludedRoleArns?: string[]): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();
    if (excludedRoleArns) {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'ec2:CreateNatGateway',
          'ec2:CreateInternetGateway',
          'ec2:DeleteNatGateway',
          'ec2:AttachInternetGateway',
          'ec2:DeleteInternetGateway',
          'ec2:DetachInternetGateway',
          'ec2:CreateClientVpnRoute',
          'ec2:AttachVpnGateway',
          'ec2:DisassociateClientVpnTargetNetwork',
          'ec2:DeleteClientVpnEndpoint',
          'ec2:DeleteVpcPeeringConnection',
          'ec2:AcceptVpcPeeringConnection',
          'ec2:CreateNatGateway',
          'ec2:ModifyClientVpnEndpoint',
          'ec2:CreateVpnConnectionRoute',
          'ec2:RevokeClientVpnIngress',
          'ec2:RejectVpcPeeringConnection',
          'ec2:DetachVpnGateway',
          'ec2:DeleteVpnConnectionRoute',
          'ec2:CreateClientVpnEndpoint',
          'ec2:AuthorizeClientVpnIngress',
          'ec2:DeleteVpnGateway',
          'ec2:TerminateClientVpnConnections',
          'ec2:DeleteClientVpnRoute',
          'ec2:ModifyVpcPeeringConnectionOptions',
          'ec2:CreateVpnGateway',
          'ec2:DeleteNatGateway',
          'ec2:DeleteVpnConnection',
          'ec2:CreateVpcPeeringConnection',
          'ec2:CreateVpnConnection',
          'directconnect:CreatePrivateVirtualInterface',
          'directconnect:DeleteBGPPeer',
          'directconnect:DeleteLag',
          'directconnect:AssociateHostedConnection',
          'directconnect:CreateInterconnect',
          'directconnect:CreatePublicVirtualInterface',
          'directconnect:CreateLag',
          'directconnect:CreateDirectConnectGateway',
          'directconnect:AssociateVirtualInterface',
          'directconnect:AllocateConnectionOnInterconnect',
          'directconnect:AssociateConnectionWithLag',
          'directconnect:AllocatePrivateVirtualInterface',
          'directconnect:DeleteInterconnect',
          'directconnect:AllocateHostedConnection',
          'directconnect:DeleteDirectConnectGateway',
          'directconnect:DeleteVirtualInterface',
          'directconnect:DeleteDirectConnectGatewayAssociation',
          'directconnect:CreateDirectConnectGatewayAssociation',
          'directconnect:DeleteConnection',
          'directconnect:CreateBGPPeer',
          'directconnect:AllocatePublicVirtualInterface',
          'directconnect:CreateConnection',
          'globalaccelerator:DeleteListener',
          'globalaccelerator:DeleteAccelerator',
          'globalaccelerator:UpdateListener',
          'globalaccelerator:UpdateAccelerator',
          'globalaccelerator:CreateEndpointGroup',
          'globalaccelerator:UpdateAcceleratorAttributes',
          'globalaccelerator:UpdateEndpointGroup',
          'globalaccelerator:CreateListener',
          'globalaccelerator:CreateAccelerator',
          'globalaccelerator:DeleteEndpointGroup',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringNotEquals: {
            'aws:PrincipalARN': excludedRoleArns,
          },
        },
      }));
    } else {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'ec2:CreateNatGateway',
          'ec2:CreateInternetGateway',
          'ec2:DeleteNatGateway',
          'ec2:AttachInternetGateway',
          'ec2:DeleteInternetGateway',
          'ec2:DetachInternetGateway',
          'ec2:CreateClientVpnRoute',
          'ec2:AttachVpnGateway',
          'ec2:DisassociateClientVpnTargetNetwork',
          'ec2:DeleteClientVpnEndpoint',
          'ec2:DeleteVpcPeeringConnection',
          'ec2:AcceptVpcPeeringConnection',
          'ec2:CreateNatGateway',
          'ec2:ModifyClientVpnEndpoint',
          'ec2:CreateVpnConnectionRoute',
          'ec2:RevokeClientVpnIngress',
          'ec2:RejectVpcPeeringConnection',
          'ec2:DetachVpnGateway',
          'ec2:DeleteVpnConnectionRoute',
          'ec2:CreateClientVpnEndpoint',
          'ec2:AuthorizeClientVpnIngress',
          'ec2:DeleteVpnGateway',
          'ec2:TerminateClientVpnConnections',
          'ec2:DeleteClientVpnRoute',
          'ec2:ModifyVpcPeeringConnectionOptions',
          'ec2:CreateVpnGateway',
          'ec2:DeleteNatGateway',
          'ec2:DeleteVpnConnection',
          'ec2:CreateVpcPeeringConnection',
          'ec2:CreateVpnConnection',
          'directconnect:CreatePrivateVirtualInterface',
          'directconnect:DeleteBGPPeer',
          'directconnect:DeleteLag',
          'directconnect:AssociateHostedConnection',
          'directconnect:CreateInterconnect',
          'directconnect:CreatePublicVirtualInterface',
          'directconnect:CreateLag',
          'directconnect:CreateDirectConnectGateway',
          'directconnect:AssociateVirtualInterface',
          'directconnect:AllocateConnectionOnInterconnect',
          'directconnect:AssociateConnectionWithLag',
          'directconnect:AllocatePrivateVirtualInterface',
          'directconnect:DeleteInterconnect',
          'directconnect:AllocateHostedConnection',
          'directconnect:DeleteDirectConnectGateway',
          'directconnect:DeleteVirtualInterface',
          'directconnect:DeleteDirectConnectGatewayAssociation',
          'directconnect:CreateDirectConnectGatewayAssociation',
          'directconnect:DeleteConnection',
          'directconnect:CreateBGPPeer',
          'directconnect:AllocatePublicVirtualInterface',
          'directconnect:CreateConnection',
          'globalaccelerator:DeleteListener',
          'globalaccelerator:DeleteAccelerator',
          'globalaccelerator:UpdateListener',
          'globalaccelerator:UpdateAccelerator',
          'globalaccelerator:CreateEndpointGroup',
          'globalaccelerator:UpdateAcceleratorAttributes',
          'globalaccelerator:UpdateEndpointGroup',
          'globalaccelerator:CreateListener',
          'globalaccelerator:CreateAccelerator',
          'globalaccelerator:DeleteEndpointGroup',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
      }));
    }

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Modification of VPC Settings',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   *
   * @param scope
   * @param id
   * @param excludedRoleArns
   * @returns
   */
  public static preventDeletingFlowLogs(scope: constructs.Construct, id: string, excludedRoleArns?: string[]): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();

    if (excludedRoleArns) {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'ec2:DeleteFlowLogs',
          'logs:DeleteLogGroup',
          'logs:DeleteLogStream',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringNotEquals: {
            'aws:PrincipalARN': excludedRoleArns,
          },
        },
      }));
    } else {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'ec2:DeleteFlowLogs',
          'logs:DeleteLogGroup',
          'logs:DeleteLogStream',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
      }));
    }

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Flow Log Deletion',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   *
   * @param scope
   * @param id
   * @returns
   */
  public static preventCreatingDefaultSubnet(scope: constructs.Construct, id: string) : IServiceControlPolicy {

    const policy = new iam.PolicyDocument();

    policy.addStatements(new iam.PolicyStatement({
      actions: [
        'ec2:CreateDefaultSubnet',
        'ec2:CreateDefaultVpc',
      ],
      resources: ['*'],
      effect: iam.Effect.DENY,
    }));

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Creating Default Subnet',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }

  /**
   *
   * @param scope
   * @param id
   * @returns
   */
  public static preventChangingPublicS3(scope: constructs.Construct, id: string): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();

    policy.addStatements(new iam.PolicyStatement({
      actions: [
        's3:PutAccountPublicAccessBlock',
      ],
      resources: ['*'],
      effect: iam.Effect.DENY,
    }));

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Changing Public S3',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }


  /**
   * An SCP that prevents KMS Keys from being modified.
   * @param scope
   * @param id
   * @param excludedRoleArns
   * @returns ISCPPolicy
   */
  public static preventDeletingKMSKeys(scope: constructs.Construct, id: string, excludedRoleArns?: iam.Role[] | undefined ): IServiceControlPolicy {

    const policy = new iam.PolicyDocument();

    if (excludedRoleArns) {

      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'kms:ScheduleKeyDeletion',
          'kms:Delete',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
        conditions: {
          StringNotEquals: {
            'aws:PrincipalARN': excludedRoleArns,
          },
        },
      }));
    } else {
      policy.addStatements(new iam.PolicyStatement({
        actions: [
          'kms:ScheduleKeyDeletion',
          'kms:Delete',
        ],
        resources: ['*'],
        effect: iam.Effect.DENY,
      }));
    }

    const cfnPolicy = new organizations.CfnPolicy(scope, id, {
      content: policy.toJSON(),
      name: id,
      type: PolicyType.SERVICE_CONTROL_POLICY,
      description: 'Prevent Deleting KMS Keys',
    });

    return {
      id: cfnPolicy.attrId,
      arn: cfnPolicy.attrArn,
    };
  }
}