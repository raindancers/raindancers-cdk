import * as path from 'path';

import {
  aws_ec2 as ec2,
  custom_resources as cr,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';
import { Document } from './document';

export interface JoinActiveDirectoryAutomationProps {
  readonly name: string;
  readonly domainName: string;
  readonly joinUsername: string;
  readonly joinUserPasswordSSMParameterName: string;
  readonly targetOU: string;
  readonly instances: ec2.IInstance[];
}


export class JoinActiveDirectory extends constructs.Construct {


  constructor(scope: constructs.Construct, id: string, props: JoinActiveDirectoryAutomationProps) {
    super(scope, id);

    const document = new Document(this, 'JoinActiveDirectorySSMDoc', {
      name: props.name,
      path: path.join(__dirname, '../../../assets/ssmautomation/domainjoinunjoin.yaml'),
    });

    props.instances.forEach((instance) => {

      const join = new cr.AwsCustomResource(this, `JoinDomain${instance.node.id}`, {
        onCreate: {
          service: 'SSM',
          action: 'startAutomationExecution',
          parameters: {
            DocumentName: props.name,
            Parameters: {
              InstanceId: instance.instanceId,
              DomainJoinActivity: 'Join',
              TargetOU: props.targetOU,
              DomainName: props.domainName,
              JoinUserName: props.joinUsername,
              JoinUserPassWordSSMParameterName: props.joinUserPasswordSSMParameterName,
            },
          },
          physicalResourceId: cr.PhysicalResourceId.of('JoinDomain'),
        },
        onDelete: {
          service: 'SSM',
          action: 'startAutomationExecution',
          parameters: {
            DocumentName: props.name,
            Parameters: {
              InstanceId: instance.instanceId,
              DomainJoinActivity: 'UnJoin',
              TargetOU: props.targetOU,
              DomainName: props.domainName,
              JoinUserName: props.joinUsername,
              JoinUserPassWordSSMParameter: props.joinUserPasswordSSMParameterName,
            },
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });

      join.node.addDependency(document);

    });
  };
};