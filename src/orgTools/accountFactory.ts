import * as core from 'aws-cdk-lib';

import {
  aws_servicecatalog as servicecatalog,
  custom_resources as cr,
  CustomResource,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import {
  helpers,
  organizations,
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
  readonly managedOrganizationalUnit: organizations.IOrganizationalUnit;
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
  /**
   * Provider
   */
  readonly provider: cr.Provider;
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

    // Account Factory requires the format of the managed OU to be 'name (ou-id)' so, this needs to managle it into shape.
    const provisioningParameters: any = props.awsAccount;

    const ou = `${provisioningParameters.managedOrganizationalUnit.name} (${provisioningParameters.managedOrganizationalUnit.id})`;
    provisioningParameters.managedOrganizationalUnit = ou;


    const waiter = new CustomResource(this, 'WaitUntillAccountisComplete', {
      serviceToken: props.provider.serviceToken,
      resourceType: 'Custom::AccountCreateWaiter',
      properties: {
        ProductId: accountFactoryProduct.productId,
        ProvisionedProductName: `awsAccount-${props.awsAccount.accountName}`,
        ProvisioningParameters: JSON.stringify(helpers.upperCaseKeys(provisioningParameters)),
      },
    });

    this.accountId = waiter.getAttString('AccountId');
    this.arn = waiter.getAttString('Arn');
    this.name = waiter.getAttString('Name');

  }
}
