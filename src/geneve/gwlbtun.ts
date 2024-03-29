import { readFileSync } from 'fs';
import * as path from 'path';
import {
  aws_ec2 as ec2,
  aws_iam as iam,
  aws_s3_assets as s3Assets,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface GwLBTunnelProps {
  readonly vpc: ec2.IVpc;
  readonly instanceType: ec2.InstanceType; // ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
  readonly subnets: ec2.SubnetSelection;
}

export class GwLBTunnel extends constructs.Construct {

  readonly instanceId: string;
  readonly instanceAvailabilityZone: string;
  readonly instancePrivateDnsName: string;
  readonly instancePrivateIp: string;
  readonly instancePublicDnsName: string;
  readonly instancePublicIp: string;


  constructor(scope: constructs.Construct, id: string, props: GwLBTunnelProps) {
    super(scope, id);

    const instanceSg = new ec2.SecurityGroup(this, 'securityGroup', {
      vpc: props.vpc,
      allowAllOutbound: true,
      description: 'Security group for GWLBTun',
      securityGroupName: 'GWLBTun',
    });

    instanceSg.addIngressRule(ec2.Peer.ipv4(props.vpc.vpcCidrBlock), ec2.Port.udp(6081), 'permit tunnels from gwlb');

    // create the appcode as an S3 asset
    const appCode = new s3Assets.Asset(this, 'appcode', {
      path: path.join(__dirname, '../../system/geneve/appCode/aws-gateway-load-balancer-tunnel-handler/'),
    });

    // create the scripts as an S3 bucket
    const scripts = new s3Assets.Asset(this, 'scripts', {
      path: path.join(__dirname, '../../system/geneve/scripts/'),
    });

    // create the systemd definition
    const systemd = new s3Assets.Asset(this, 'systemd', {
      path: path.join(__dirname, '../../system/geneve/appCode/gwlbtun.service'),
    });


    const instance = new ec2.Instance(this, 'Resource', {
      vpc: props.vpc,
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
      instanceType: props.instanceType,
      vpcSubnets: props.subnets,
      sourceDestCheck: false,
      requireImdsv2: true,
      associatePublicIpAddress: true,
      blockDevices: [{
        deviceName: '/dev/xvda',
        volume: ec2.BlockDeviceVolume.ebs(8),
      }],
      ssmSessionPermissions: true,
      securityGroup: instanceSg,
      init: ec2.CloudFormationInit.fromElements(
        ec2.InitFile.fromExistingAsset('/tmp/geneve.zip', appCode, {}),
        ec2.InitFile.fromExistingAsset('/tmp/scripts.zip', scripts, {}),
        ec2.InitFile.fromExistingAsset('/usr/lib/systemd/system/gwlbtun.service', systemd, {}),
      ),
    });


    // add the user data
    instance.addUserData(readFileSync(path.join(__dirname, '../../system/geneve/userdata/userdata.sh'), 'utf8'));


    ///
    instance.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMPatchAssociation'));
    instance.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2ReadOnlyAccess'));
    instance.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess'));

    this.instanceId = instance.instanceId;
    this.instanceAvailabilityZone = instance.instanceAvailabilityZone;
    this.instancePrivateDnsName = instance.instancePrivateDnsName;
    this.instancePrivateIp = instance.instancePrivateIp;
    this.instancePublicDnsName = instance.instancePublicDnsName;
    this.instancePublicIp = instance.instancePublicIp;

  }
}


