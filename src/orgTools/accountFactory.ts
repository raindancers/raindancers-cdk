import * as core from 'aws-cdk-lib';

import {
  aws_servicecatalog as servicecatalog,
  custom_resources as cr,
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
  readonly SSOUserEmail: string;
  /**
   * SSO user First Name
   */
  readonly SSOUserFirstName: string;
  /**
   * SSO User Last Name
   */
  readonly SSOUserLastName: string;
  /**
   * OU where to place this account
   */
  readonly ManagedOrganizationalUnit: string;
  /**
   *  What to call the account
   */
  readonly AccountName: string;
  /**
   * What Email address to use for the root user
   */
  readonly AccountEmail: string;
}

/**
 * Propertys for AccountFactory
 */
export interface AccountFactoryProps extends core.ResourceProps {
  // arn of the AccountFactory Service Catalog
  accountFactoryProductArn: string;
  awsAccount: AccountProvisioningParameters;
}

/**
 * Creates a remailing service for an entire Domain. Typical use case is to collate al
 */
export class AccountFactory extends core.Resource {

  constructor(scope: constructs.Construct, id: string, props: AccountFactoryProps) {
    super(scope, id, props);

    const accountFactoryProduct = servicecatalog.Product.fromProductArn(this, 'MyProduct', 'productArn');

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


    new cr.AwsCustomResource(this, 'CreateNewAccount', {
      onCreate: {
        service: 'ServiceCatalog',
        action: 'provisionProduct',
        parameters: {
          ProductId: accountFactoryProduct.productId,
          ProvisioningArtifactId: artifactId.getResponseField('ProvisioningArtifacts.[-1].Id'),
          ProvisionedProductName: `awsAccount-${props.awsAccount.AccountName}`,
          ProvisioningParameters: [props.awsAccount],
        },
        physicalResourceId: cr.PhysicalResourceId.of('NewAccount'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

  }
}