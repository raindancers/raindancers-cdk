import {
  custom_resources as cr,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';

export enum LocalZones {
  AUCKLAND = 'ap-southeast-2-akl-1'
}

export interface LocalZoneOptInProps {
  //vpc: ec2.IVpc
  readonly zone: LocalZones;
}

//

export class LocalZoneOptIn extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: LocalZoneOptInProps) {
    super(scope, id);

    new cr.AwsCustomResource(this, 'OptinToZone', {
      resourceType: 'Custom::ZoneOptIn',
      onCreate: {
        service: 'EC2',
        action: 'modifyAvailabilityZoneGroup',
        parameters: {
          GroupName: props.zone,
          OptInStatus: 'opted-in',
        },
        physicalResourceId: cr.PhysicalResourceId.of('Optin'),
      },
      onDelete: {
        service: 'EC2',
        action: 'modifyAvailabilityZoneGroup',
        parameters: {
          GroupName: props.zone,
          OptInStatus: 'not-opted-in',
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

  };
}