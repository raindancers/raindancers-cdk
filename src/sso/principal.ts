
import {
  custom_resources as cr,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';


export enum SSOPrincipalType {
  USER = 'USER',
  GROUP = 'GROUP',
}

export interface ISSOPrincipal {
  /**
   * The id of the principal.
   */
  readonly principalId: string;
  /**
   * The type of the principal.
   */
  readonly principalType: SSOPrincipalType;
}

export abstract class SSOUser implements ISSOPrincipal {

  public static fromEmailAdddress(scope: constructs.Construct, identityStoreId: string, email: string): ISSOPrincipal {

    const getUserId = new cr.AwsCustomResource(scope, 'getUserIdbyEmail', {
      onCreate: {
        service: 'IdentityStore',
        action: 'listUsers',
        parameters: {
          IdentityStoreId: identityStoreId,
          Filters: [
            {
              AttributePath: 'Email',
              AttributeValue: email,
            },
          ],
        },
        physicalResourceId: cr.PhysicalResourceId.of('getUserIdbyEmail'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    return {
      principalId: getUserId.getResponseField('Users.0.UsersId'),
      principalType: SSOPrincipalType.USER,
    };
  }

  public static fromUserName(scope: constructs.Construct, identityStoreId: string, userName: string): ISSOPrincipal {

    const getUserId = new cr.AwsCustomResource(scope, 'GetUserByName', {
      onCreate: {
        service: 'IdentityStore',
        action: 'listUsers',
        parameters: {
          IdentityStoreId: identityStoreId,
          Filters: [
            {
              AttributePath: 'UserName',
              AttributeValue: userName,
            },
          ],
        },
        physicalResourceId: cr.PhysicalResourceId.of('getUserbyName'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    return {
      principalId: getUserId.getResponseField('Users.0.UsersId'),
      principalType: SSOPrincipalType.USER,
    };
  }

  /**
  * The principalId
  */
  public abstract readonly principalId: string;
  /**
   * The type of the principalType
   */
  public abstract readonly principalType: SSOPrincipalType;

  protected constructor() {};
}

export abstract class SSOGroup implements ISSOPrincipal {

  public static fromDisplayName(scope: constructs.Construct, identityStoreId: string, displayName: string): ISSOPrincipal {

    const getUserId = new cr.AwsCustomResource(scope, 'GetGroupByName', {
      onCreate: {
        service: 'IdentityStore',
        action: 'listGroups',
        parameters: {
          IdentityStoreId: identityStoreId,
          Filters: [
            {
              AttributePath: 'DisplayName',
              AttributeValue: displayName,
            },
          ],
        },
        physicalResourceId: cr.PhysicalResourceId.of('getGroupbyName'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    return {
      principalId: getUserId.getResponseField('Groups.0.UsersId'),
      principalType: SSOPrincipalType.USER,
    };
  }

  /**
  * The principalId
  */
  public abstract readonly principalId: string;
  /**
   * The type of the principalType
   */
  public abstract readonly principalType: SSOPrincipalType;

  protected constructor() {};
}
