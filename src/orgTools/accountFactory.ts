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
          ProvisionedProductName: `awsAccount-${props.awsAccount.accountName}`,
          ProvisioningParameters: [upperCaseKeys(props.awsAccount)],
        },
        physicalResourceId: cr.PhysicalResourceId.of('NewAccount'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

  }
}

function upperCaseKeys(obj: any): any {
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