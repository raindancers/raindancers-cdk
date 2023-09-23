import * as path from 'path';
import * as core from 'aws-cdk-lib';

import {
  aws_servicecatalog as servicecatalog,
  custom_resources as cr,
  aws_logs as logs,
  CustomResource,
  aws_lambda as lambda,
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

/**
 * Provisioning Parameters for creating an AWS Account
 */
export interface AccountProvisioningParameters {
  /**
   * SSO user Email
   */
  readonly sSOUserEmail: string;
  /**
   * SSO user First Name
   */
  readonly sSOUserFirstName: string;
  /**
   * SSO User Last Name
   */
  readonly sSOUserLastName: string;
  /**
   * OU where to place this account
   */
  readonly managedOrganizationalUnit: string;
  /**
   *  What to call the account
   */
  readonly accountName: string;
  /**
   * What Email address to use for the root user
   */
  readonly accountEmail: string;
}

/**
 * Propertys for AccountFactory
 */
export interface AccountFactoryProps extends core.ResourceProps {
  /**
   * arn of the AccountFactory Service Catalog
  */
  readonly accountFactoryProductArn: string;
  /**
   * Parameters to create a new account with
   */
  readonly awsAccount: AccountProvisioningParameters;
}

/**
 * Creates a remailing service for an entire Domain. Typical use case is to collate al
 */
export class AccountFactory extends core.Resource {

  accountId: string;
  arn: string;
  name: string;

  constructor(scope: constructs.Construct, id: string, props: AccountFactoryProps) {
    super(scope, id, props);

    // import the Account Factory Service Catalog Product
    const accountFactoryProduct = servicecatalog.Product.fromProductArn(this, 'MyProduct', props.accountFactoryProductArn);

    // find the latest provisioningArtifact Id ( version of product )
    const artifactId = new cr.AwsCustomResource(this, 'GetProvisioningArtificactId', {
      onCreate: {
        service: 'ServiceCatalog',
        action: 'describeProduct',
        parameters: {
          Id: accountFactoryProduct.productId,
        },
        physicalResourceId: cr.PhysicalResourceId.of('artifactId'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    // create a new account  using the parameters provided.
    const createAccount = new cr.AwsCustomResource(this, 'CreateNewAccount', {
      onCreate: {
        service: 'ServiceCatalog',
        action: 'provisionProduct',
        parameters: {
          ProductId: accountFactoryProduct.productId,
          ProvisioningArtifactId: artifactId.getResponseField('ProvisioningArtifacts.[-1].Id'),
          ProvisionedProductName: `awsAccount-${props.awsAccount.accountName}`,
          ProvisioningParameters: [upperCaseKeys(props.awsAccount)],
        },
        physicalResourceId: cr.PhysicalResourceId.of('NewAccount'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    // scan provisioned products to see if the account is finished building.  Waiter will be co
    const onEvent = new lambda.Function(this, 'onEvent', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'accountFactory.on_event',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/accountFactory')),
      timeout: core.Duration.seconds(3),
    });

    const isComplete = new lambda.Function(this, 'isComplete', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'accountFactory.is_complete',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/accountFactory')),
      timeout: core.Duration.seconds(30),
    });

    isComplete.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'serviceCatalog:SearchProvisionedProducts',
        'organizations:ListAccountsForParent',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    }));

    const myProvider = new cr.Provider(this, 'MyProvider', {
      onEventHandler: onEvent,
      isCompleteHandler: isComplete, // optional async "waiter"
      queryInterval: core.Duration.seconds(30),
      logRetention: logs.RetentionDays.ONE_DAY, // default is INFINITE
      totalTimeout: core.Duration.minutes(20),
    });

    const waiter = new CustomResource(this, 'WaitUntillAccountisComplete', {
      serviceToken: myProvider.serviceToken,
      resourceType: 'Custom::AccountCreateWaiter',
      properties: {
        ProvisionedProductId: createAccount.getResponseField('RecordDetail.ProvisionedProductId'),
        ParentOU: props.awsAccount.managedOrganizationalUnit,
        AccountEmail: props.awsAccount.accountEmail,
      },
    });

    this.accountId = waiter.getAttString('AccountId');
    this.arn = waiter.getAttString('Arn');
    this.name = waiter.getAttString('Name');

  }
}

export function upperCaseKeys(obj: any): any {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(upperCaseKeys);
  }
  if (obj === null) {
    return null;
  }
  const entries = Object.entries(obj);
  const mappedEntries = entries.map(
    ([k, v]) => [`${k.substr(0, 1).toUpperCase()}${k.substr(1)}`, upperCaseKeys(v)] as const,
  );
  return Object.fromEntries(mappedEntries);
}