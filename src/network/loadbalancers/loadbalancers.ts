import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_elasticloadbalancingv2 as elbv2,
  aws_elasticloadbalancingv2_targets as elbv2_targets,
  aws_route53 as route53,
  aws_route53_targets as route53_targets,
  aws_certificatemanager as acm,
  aws_iam as iam,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as zscaler from '../../zscaler';
import * as enterprisevpc from '../enterprisevpc';

export interface DelegatedZone {
  readonly delegationRole: iam.IRole;
  readonly parentZone: string;
  readonly zoneName: string;
}

export interface LoadBalancersProps {
  readonly vpc: ec2.IVpc;
  readonly subnetGroupName: enterprisevpc.SubnetGroup;
  readonly ingressVpc: ec2.IVpc;
  readonly privateLoadbalancerDomain: string;
  readonly sslPolicy?: elbv2.SslPolicy;
  readonly delegatedZone?: DelegatedZone;
  readonly zone?: route53.HostedZone;
}


export interface Actions {
  readonly id: string;
  readonly loadbalancerActions: elbv2.AddApplicationActionProps;
}

export interface AddApplicationProps {
  readonly delegatedZone?: DelegatedZone;
  readonly zone?: route53.HostedZone;
  readonly domainName: string;
  /**
   * @default elbv2.SslPolicy.RECOMMENDED_TLS
   * @description The security policy that defines which ciphers and protocols are supported. The default is the recommended policy. You must set a value.
  */
  readonly actions: Actions[];
}

export class EnterpriseLoadBalancer extends constructs.Construct {

  privateLoadbalancer: elbv2.ApplicationLoadBalancer;
  tlsListener: elbv2.ApplicationListener;
  vpc: ec2.IVpc;
  subnets: enterprisevpc.SubnetGroup;
  ingressVpc: ec2.IVpc;
  interfaceEndpoint: ec2.InterfaceVpcEndpoint | undefined;
  domains: string[] | undefined;
  loadbalancerZone: route53.HostedZone;

  constructor(scope: constructs.Construct, id: string, props: LoadBalancersProps) {
    super(scope, id);

    this.domains = [];
    this.subnets = props.subnetGroupName;
    this.ingressVpc = props.ingressVpc;

    //
    this.privateLoadbalancer = new elbv2.ApplicationLoadBalancer(this, 'Sharedprivateloadbalancer', {
      vpc: props.vpc,
      vpcSubnets: { subnetGroupName: props.subnetGroupName.subnet.name },
      internetFacing: false,
    });

    validateProps(props);


    if (props.delegatedZone) {
      this.loadbalancerZone = new route53.HostedZone(this, 'HostedZone', {
        zoneName: props.privateLoadbalancerDomain,
      });

      new route53.CrossAccountZoneDelegationRecord(this, 'delegateRecords', {
        delegatedZone: this.loadbalancerZone,
        parentHostedZoneName: props.delegatedZone.parentZone,
        delegationRole: props.delegatedZone.delegationRole,
      });
    } else {
      this.loadbalancerZone = props.zone!;
    }

    const defaultCert = new acm.Certificate(this, 'defaultCertificate', {
      domainName: props.privateLoadbalancerDomain,
      validation: acm.CertificateValidation.fromDns(this.loadbalancerZone),
    });

    this.tlsListener = this.privateLoadbalancer.addListener('Listener443', {
      port: 443,
      protocol: elbv2.ApplicationProtocol.HTTPS,
      sslPolicy: props.sslPolicy ?? elbv2.SslPolicy.RECOMMENDED_TLS,
      open: true,
      certificates: [defaultCert],
      defaultAction: elbv2.ListenerAction.fixedResponse(200, {
        contentType: 'text/plain',
        messageBody: `This is a default action for ${props.privateLoadbalancerDomain}`,
      }),
    });


    // add a listener on port 80, for any rebels trying to use HTTP, and redirect them to use HTTPS
    this.privateLoadbalancer.addListener('Listener80', {
      port: 80,
      protocol: elbv2.ApplicationProtocol.HTTP,
      open: true,
      defaultAction: elbv2.ListenerAction.redirect({
        protocol: 'HTTPS',
        port: '443',
        permanent: true,
      }),
    });

    this.vpc = props.vpc;

  }


  /**
   * This method provides a way to add an application, to the Loadbalancer.
   *
   */
  public addApplicationToPrivateLoadBalancer(props: AddApplicationProps): void {

    let hostingZone: route53.HostedZone;

    // if theres a domain to created create it,
    if (props.delegatedZone) {
      this.domains?.push(props.delegatedZone.zoneName);

      hostingZone = new route53.HostedZone(this, `HostedZone-${props.domainName}`, {
        zoneName: props.domainName,
      });

      new route53.CrossAccountZoneDelegationRecord(this, `delegateRecords-${props.domainName}`, {
        delegatedZone: hostingZone,
        parentHostedZoneName: props.delegatedZone.parentZone,
        delegationRole: props.delegatedZone.delegationRole,
      });
    } else {
      // otherwise use the one provided.
      hostingZone = props.zone!;
    }

    // add cert.
    this.tlsListener.addCertificates(`Certificate-${props.domainName}`, [
      new acm.Certificate(this, `Certificate-${props.domainName}`, {
        domainName: props.domainName,
        validation: acm.CertificateValidation.fromDns(hostingZone),
      }),
    ]);

    props.actions.forEach(action => {
      this.tlsListener.addAction(action.id, action.loadbalancerActions);
    });

    // add a CNAME record for props.domainName pointing to this.endpointURL
    if (this.interfaceEndpoint) {
      new route53.ARecord(this, `ARecord-${props.domainName}`, {
        recordName: props.domainName,
        zone: hostingZone,
        target: route53.RecordTarget.fromAlias(new route53_targets.InterfaceVpcEndpointTarget(this.interfaceEndpoint)),
      });
    }
  }

  //https://aws.amazon.com/blogs/networking-and-content-delivery/application-load-balancer-type-target-group-for-network-load-balancer/

  public createPrivateLinkService(accounts: string[], vpc: ec2.IVpc, subnets: ec2.SubnetSelection): void {

    const nlb = new elbv2.NetworkLoadBalancer(this, 'NLB', {
      vpc: this.vpc,
      internetFacing: false,
      vpcSubnets: { subnetGroupName: this.subnets.subnet.name },
    });

    // Add a listener on a particular port.
    const listener443 = nlb.addListener('Listener443', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
    });

    // Add targets on a particular port.
    listener443.addTargets('targets443', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
      targets: [new elbv2_targets.AlbTarget(this.privateLoadbalancer, 443)],
    });

    const listener80 = nlb.addListener('Listener80', {
      port: 80,
      protocol: elbv2.Protocol.TCP,
    });

    // Add targets on a particular port.
    listener80.addTargets('targets80', {
      port: 80,
      protocol: elbv2.Protocol.TCP,
      targets: [new elbv2_targets.AlbTarget(this.privateLoadbalancer, 80)],
    });

    const endpoint = new ec2.VpcEndpointService(this, 'PrivateLinkService', {
      vpcEndpointServiceLoadBalancers: [nlb],
      acceptanceRequired: false,
      allowedPrincipals: accounts.map(account => new iam.ArnPrincipal(`arn:${core.Aws.PARTITION}:iam::${account}:root`)),
      contributorInsights: true,
    });

    this.interfaceEndpoint = new ec2.InterfaceVpcEndpoint(this, 'VPC Endpoint', {
      vpc: vpc,
      service: new ec2.InterfaceVpcEndpointService(endpoint.vpcEndpointServiceName, 443),
      subnets: subnets,
    });
  }

  public addZscalerAppSegmentForLoadbalancer(props: zscaler.ZscalerAppSegmentProps): void {
    new zscaler.ZscalerAppSegment(this, 'ZscalerAppSegment', {
      ...props,
      domainNames: this.domains,
    });
  }
}

function validateProps(props: LoadBalancersProps) {
  if (props.delegatedZone && props.zone) {
    throw new Error('Only one of props.delegatedZone and props.zone can be provided');
  }

  if (!props.delegatedZone && !props.zone) {
    throw new Error('One of props.delegatedZone and props.zone must be provided');
  }
}