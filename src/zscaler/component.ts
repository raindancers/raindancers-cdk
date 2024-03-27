import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_iam as iam,
  aws_secretsmanager as sm,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';


export enum ComponentType {
  APP_CONNECTOR = 'AppConnector',
  PRIVATE_SERVICE_EDGE = 'PrivateServiceEdge',
}

export interface LaunchTemplateProps {
  readonly name: string;
  readonly componentType: ComponentType;
  readonly vpc: ec2.IVpc;
  readonly componentAPIKeySecretName: string;
  readonly instanceType?: ec2.InstanceType | undefined;
}

export class ComponentLaunchTemplate extends constructs.Construct {

  launchTemplate: ec2.LaunchTemplate;

  constructor(scope: constructs.Construct, id: string, props: LaunchTemplateProps) {
    super(scope, id);

    const zScalerSG = new ec2.SecurityGroup(this, 'zScalerSG', {
      vpc: props.vpc,
      allowAllOutbound: false,
    });

    let machineImage: ec2.IMachineImage = ec2.MachineImage.latestAmazonLinux2023();

    switch (props.componentType) {
      case ComponentType.APP_CONNECTOR:
        zScalerSG.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80));
        zScalerSG.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443));
        zScalerSG.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.udp(443));
        zScalerSG.addEgressRule(ec2.Peer.ipv4('10.0.0.0/8'), ec2.Port.allTraffic());

        break;

      case ComponentType.PRIVATE_SERVICE_EDGE:
        zScalerSG.addIngressRule(ec2.Peer.ipv4('10.0.0.0/8'), ec2.Port.allTraffic());
        zScalerSG.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443));

        break;

      default:
        throw new Error('Unknown component type');
    }

    const keyPair = new ec2.KeyPair(this, 'keyPair', {
      type: ec2.KeyPairType.RSA,
    });

    // onst apiKey = sm.Secret.fromSecretNameV2(this, 'apiKey', props.apiKeySecretName);

    const userData = ec2.UserData.forLinux();

    switch (props.componentType) {
      case ComponentType.APP_CONNECTOR:
        userData?.addCommands(
          'echo "[zscaler]\nname=Zscaler Private Access Repository\nbaseurl=https://yum.private.zscaler.com/yum/el7\nenabled=1\ngpgcheck=1\ngpgkey=https://yum.private.zscaler.com/gpg\n" > /etc/yum.repos.d/zscaler.repo',
          'yum update -y',
          'yum install zpa-connector -y',
          'systemctl stop zpa-connector',
          'touch /opt/zscaler/var/provision_key',
          'chmod 644 /opt/zscaler/var/provision_key',
          `aws secretsmanager get-secret-value --region ${core.Aws.REGION} --secret-id ${props.componentAPIKeySecretName} --query SecretString --output text > /opt/zscaler/var/provision_key`,
          'systemctl start zpa-connector',
          'sleep 60',
        );

        break;

      case ComponentType.PRIVATE_SERVICE_EDGE:
        userData?.addCommands(
          'echo "[zscaler]\nname=Zscaler Private Access Repository\nbaseurl=https://yum.private.zscaler.com/yum/el7\nenabled=1\ngpgcheck=1\ngpgkey=https://yum.private.zscaler.com/gpg\n" > /etc/yum.repos.d/zscaler.repo',
          'yum update -y',
          'yum install zpa-service-edge -y',
          'systemctl stop zpa-service-edge',
          'touch /opt/zscaler/var/service-edge/provision_key',
          'chmod 644 /opt/zscaler/var/service-edge/provision_key',
          `aws secretsmanager get-secret-value --region ${core.Aws.REGION} --secret-id ${props.componentAPIKeySecretName}  --query SecretString --output text > /opt/zscaler/var/service-edge/provision_key`,
          'systemctl start zpa-service-edge',
          'sleep 60',
        );

        break;

      default:
        throw new Error('Unknown component type');

    }
    const launchRole = new iam.Role(this, 'MyRole', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    });

    launchRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));

    this.launchTemplate = new ec2.LaunchTemplate(this, 'launchTemplate', {
      associatePublicIpAddress: false,
      instanceType: props.instanceType ?? ec2.InstanceType.of(ec2.InstanceClass.M5, ec2.InstanceSize.XLARGE2),
      machineImage: machineImage,
      keyPair: keyPair,
      launchTemplateName: `zscalerClusterTemplate-${props.name}`,
      requireImdsv2: true,
      securityGroup: zScalerSG,
      userData: userData,
      role: launchRole,

    });

    const apiKey = sm.Secret.fromSecretNameV2(this, 'apiKey', props.componentAPIKeySecretName);
    apiKey.grantRead(this.launchTemplate);

  }
};