import * as path from 'path';
import * as core from 'aws-cdk-lib';

import * as constructs from 'constructs';
import {
  serviceControlPolicy,
  orgTools,
}
  from '../../src/index';

export interface NewAccountSetupProps extends core.StackProps {
  restrictRootSCP: serviceControlPolicy.IServiceControlPolicy;
}


/**
 * When a new account is added to the account stack, send a ticket to enterprise support to add it
 */
export class NewAccountSetup extends core.Stack {

  constructor(scope: constructs.Construct, id: string, props: NewAccountSetupProps) {
    super(scope, id, props);

    // Bootstrap the new account with cdk, with a trust to the management account
    new orgTools.CdkOrgBootstrapper(this, 'orgcdkbootstrap', {
      cdkBootstrapRootQualifier: 'thing',
      cdkBootstrapRootRegions: ['ap-southeast-2'],
      templateBootStrapStacks: [
        orgTools.TemplateBootstrapStack.THING,
      ],
      localStacksPath: path.join(__dirname, './localtemplates'),
      localBootStrapStacks: [
        'kms',
        's3',
      ],
    });

  }
}
