import {
  aws_events as events,
  aws_events_targets as eventTargets,
  aws_iam as iam,
  aws_sns as sns,
  aws_lambda,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface TargetProps {
  readonly topics?: sns.Topic[] | undefined;
  readonly lambda?: aws_lambda.Function[] | undefined;
  readonly eventbus?: events.EventBus[] | undefined;
}

export interface IMonitoringRule {
  arn: string;
}


export abstract class MonitoringRule {

  // will detect activity by the root account.
  public static rootActivity(scope: constructs.Construct, props: TargetProps): IMonitoringRule {

    const deliveryRole = new iam.Role(scope, 'deliveryRole', {
      assumedBy: new iam.ServicePrincipal('events.amazonaws.com'),
    });

    const deliveryTargets: events.IRuleTarget[] = [];

    if (props.topics) {
      props.topics.forEach((topic) => {
        deliveryTargets.push(new eventTargets.SnsTopic(topic));
        topic.grantPublish(deliveryRole);
      });
    };

    if (props.lambda) {
      props.lambda.forEach((lambda) => {
        deliveryTargets.push(new eventTargets.LambdaFunction(lambda));
        lambda.grantInvoke(deliveryRole);
      });
    }

    if (props.eventbus) {
      props.eventbus.forEach((bus) => {
        deliveryTargets.push(new eventTargets.EventBus(bus));
        // if using a bus, the resouce policy will need elsewhere
      });
    }


    const rule = new events.Rule(scope, 'Resource', {
      description: 'Monitor Root activity',

      eventPattern: {
        detailType: [
          'AWS API Call via CloudTrail',
          'AWS Console Sign In via CloudTrail',
        ],
        detail: {
          userIdentity: {
            type: ['Root'],
          },
        },
      },
      targets: deliveryTargets,
    });


    const cfnRule = rule.node.defaultChild as events.CfnRule;
    cfnRule.roleArn = deliveryRole.roleArn;

    return {
      arn: rule.ruleArn,
    };
  }

  protected constructor() {};

}