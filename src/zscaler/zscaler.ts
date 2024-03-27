import * as core from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_autoscaling as autoscaling,
  aws_events as events,
  aws_events_targets as event_targets,
}

  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import { ComponentLaunchTemplate } from './component';
import { DrainAndDeleteComponent } from './drainAndDelete';

// import { LifecycleHook } from 'aws-cdk-lib/aws-autoscaling';


export interface Capacity {
  /**
   * How many instances of the componet are required during working hours
   * @default 2
   */
  readonly workingHoursMin: number | undefined;
  /**
   * How many instances of the componet are required during non working hours
   * @default 1
   */
  readonly nonWorkingHoursMin: number | undefined;
  /**
   * Maximum Number of instances of the component that can be scaled up.
   */
  readonly max: number;
  /**
   * Bandwidth to scale on in Mbs
   */
  readonly networkBandwidthTarget: number;
}

export enum ComponentType {
  APP_CONNECTOR = 'AppConnector',
  PRIVATE_SERVICE_EDGE = 'PrivateServiceEdge',
}

export interface PrivateInfrastructureClusterProps {
  readonly name: string;
  readonly componentType: ComponentType;
  readonly vpc: ec2.IVpc;
  readonly subnets: ec2.SubnetSelection;
  readonly capacity: Capacity;

  /**
   * The name of the secret that contains the API key, that is used for general API calls to Zscaler
   */
  readonly controlApiKeySecretName: string;
  /**
   * The name of the secret that contains the API Key, that is used to create Components
   */
  readonly componentAPIKeySecretName: string;

  /**
   * the amount of time required to drain the Zscaler Component
   * @default 16 minutes
   */
  readonly draintime?: core.Duration | undefined;
  /**
   * The working day will by default start at 7:30am Monday to Friday
   * @default  hour: '7', minute: '30', weekDay: '1,2,3,4,5' })
   */
  readonly workDayStart?: autoscaling.Schedule | undefined;
  /**
   * The working day will be default finish at 5:30pm Monday to Firday
   * @default  hour: '17', minute: '30', weekDay: '1,2,3,4,5' })
   */
  readonly workDayEnd?: autoscaling.Schedule | undefined;

  readonly timezone?: string | undefined;

  /**
   * @default  ec2.InstanceClass.M7I_FLEX ec2.InstanceSize.XLARGE2
   */
  readonly instanceType?: ec2.InstanceType | undefined;

  /**
   * How long should the instance be in service, before being replaced
   * @default 7 days
   */
  readonly maximumLifeTime?: core.Duration | undefined;

}

export class PrivateInfrastructureCluster extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: PrivateInfrastructureClusterProps) {
    super(scope, id);


    // creates a Launch Template for either a App Connector or Service Edge
    const launchTemplate = new ComponentLaunchTemplate(this, 'launchTemplate', {
      vpc: props.vpc,
      instanceType: props.instanceType,
      componentType: props.componentType,
      componentAPIKeySecretName: props.componentAPIKeySecretName,
      name: props.name,
    }).launchTemplate;

    // create Applicaiton Scaling Group.
    const asg = new autoscaling.AutoScalingGroup(this, 'asg', {
      vpc: props.vpc,
      launchTemplate: launchTemplate,
      minCapacity: props.capacity.workingHoursMin,
      maxCapacity: props.capacity.max,
      vpcSubnets: props.subnets,
      cooldown: core.Duration.minutes(10),
      maxInstanceLifetime: props.maximumLifeTime ?? core.Duration.days(7),
      updatePolicy: autoscaling.UpdatePolicy.rollingUpdate(),
      terminationPolicies: [autoscaling.TerminationPolicy.OLDEST_INSTANCE],
      ssmSessionPermissions: true,
    });

    // Scale up to the min working capacity
    asg.scaleOnSchedule('PrescaleInTheMorningWorkdays', {
      schedule: props.workDayStart ?? autoscaling.Schedule.cron({ hour: '7', minute: '30', weekDay: '1-5' }),
      minCapacity: props.capacity.workingHoursMin ?? 2,
      timeZone: props.timezone ?? 'Pacific/Auckland',
    });

    // scale down at night time.
    asg.scaleOnSchedule('AllowDownscalingAtNight', {
      schedule: props.workDayEnd ?? autoscaling.Schedule.cron({ hour: '17', minute: '30', weekDay: '1-5' }),
      minCapacity: props.capacity.nonWorkingHoursMin ?? 1,
      timeZone: props.timezone ?? 'Pacific/Auckland',
    });

    asg.scaleOnIncomingBytes('Limit Ingress per instance', {
      targetBytesPerSecond: props.capacity.networkBandwidthTarget * 2**20,
    });

    asg.scaleOnOutgoingBytes('Limit Egress per instance', {
      targetBytesPerSecond: props.capacity.networkBandwidthTarget * 2**20,
    });

    const stepfunction = new DrainAndDeleteComponent(this, 'StepFunction', {
      asg: asg,
      componentType: props.componentType,
      controlAPIKeySecretName: props.controlApiKeySecretName,
      drainTime: props.draintime ?? core.Duration.minutes(16),
    });


    new events.Rule(this, 'rule', {
      eventPattern: {
        source: ['aws.autoscaling'],
        detailType: ['EC2 Instance-terminate Lifecycle Action'],
        detail: {
          AutoScalingGroupName: [asg.autoScalingGroupName],
        },
      },
      targets: [new event_targets.SfnStateMachine(stepfunction.stateMachine)],
    });

    new autoscaling.LifecycleHook(this, 'lifecycleHook', {
      autoScalingGroup: asg,
      lifecycleTransition: autoscaling.LifecycleTransition.INSTANCE_TERMINATING,
      heartbeatTimeout: core.Duration.minutes(40),
    });
  }
};
