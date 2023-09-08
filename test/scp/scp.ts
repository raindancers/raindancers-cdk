import * as core from 'aws-cdk-lib';
import * as constructs from 'constructs';

import {
  serviceControlPolicy,
}
  from '../../src/index';


export class ServiceControlPolicys extends core.Stack {

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);


    /**
     * Restrict the regions to the the array
     */
    serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions(this, 'regions', [
      'ap-southeast-2',
    ]);

    /**
     * restrict the root accounts
     */
    serviceControlPolicy.PreBuiltServiceControlPolicy.restrictRootUser(this, 'restrictRoot');

    /*
    * prevent the creation of IAM User Accounts
    */
    serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser(this, 'noiamusers');

    /**
     * prevent creating VPC with INternet Access
     */

    serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess(this, 'nointernet');

    /**
     * prevent VPC Change
     */
    serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange(this, 'preventVPCchange');


    /**
	 * prevent deletingFlowLogs
	 */
    serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs(this, 'preventDeleteflowLog');

    /**
	 * prevent public s3
	 */
    serviceControlPolicy.PreBuiltServiceControlPolicy.preventChangingPublicS3(this, 'noPublicS3');

    /**
	 * prevent deletingKMS
	 */
    serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys(this, 'nokms');

  }
}