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
import {
  helpers,
}
  from '../index';


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
 *  Invoke the Service Catalog Account Factory.
 */
export class AccountFactory extends core.Resource {

  accountId: string;
  arn: string;
  name: string;

  constructor(scope: constructs.Construct, id: string, props: AccountFactoryProps) {
    super(scope, id, props);

    // import the Account Factory Service Catalog Product
    const accountFactoryProduct = servicecatalog.Product.fromProductArn(this, 'MyProduct', props.accountFactoryProductArn);
    const servicePortfolio = servicecatalog.Portfolio.fromPortfolioArn(this, 'Portfolio', 'arn:aws:catalog:ap-southeast-2:783214964527:portfolio/port-5bngtygfwmma6');

    // scan provisioned products to see if the account is finished building.  Waiter will be co
    const onEvent = new lambda.Function(this, 'onEvent', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'accountFactory.on_event',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/accountFactory')),
      timeout: core.Duration.seconds(3),
    });

    // permit this role to access the service catalog
    servicePortfolio.giveAccessToRole(onEvent.role as iam.Role);

    onEvent.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'servicecatalog:DescribeProduct',
        'servicecatalog:ProvisionProduct',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    }));

    const isComplete = new lambda.Function(this, 'isComplete', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'accountFactory.is_complete',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/accountFactory')),
      timeout: core.Duration.seconds(30),
    });

    // permit this lambdas role to access the service catalog
    servicePortfolio.giveAccessToRole(isComplete.role as iam.Role);

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
        ProductId: accountFactoryProduct.productId,
        ProvisionedProductName: `awsAccount-${props.awsAccount.accountName}`,
        ProvisioningParameters: JSON.stringify([helpers.upperCaseKeys(props.awsAccount)]),
      },
    });

    this.accountId = waiter.getAttString('AccountId');
    this.arn = waiter.getAttString('Arn');
    this.name = waiter.getAttString('Name');

  }
}
