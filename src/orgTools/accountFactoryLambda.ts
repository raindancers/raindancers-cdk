import * as path from 'path';
import * as core from 'aws-cdk-lib';

import {
  aws_servicecatalog as servicecatalog,
  custom_resources as cr,
  aws_logs as logs,
  aws_lambda as lambda,
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


/**
 * Propertys for AccountFactory
 */
export interface AccountFactoryLambdaProps extends core.ResourceProps {
  /**
   * arn of the AccountFactory Service Catalog
  */
  readonly portfolioArn: string;
}

/**
 *  Invoke the Service Catalog Account Factory.
 */
export class AccountFactoryLambda extends core.Resource {

  provider: cr.Provider;

  constructor(scope: constructs.Construct, id: string, props: AccountFactoryLambdaProps) {
    super(scope, id, props);

    // import the Account Factory Service Catalog Product
    const servicePortfolio = servicecatalog.Portfolio.fromPortfolioArn(this, 'Portfolio', props.portfolioArn);

    // scan provisioned products to see if the account is finished building.  Waiter will be co
    const onEvent = new lambda.SingletonFunction(this, 'onEvent', {
      uuid: 'ffaaee11001',
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'accountFactory.on_event',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/accountFactory')),
      timeout: core.Duration.seconds(300),
    });

    // permit this role to access the service catalog
    servicePortfolio.giveAccessToRole(onEvent.role as iam.Role);

    onEvent.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'servicecatalog:DescribeProduct',
        'servicecatalog:ProvisionProduct',
        'controltower:CreateManagedAccount',
        'controltower:DescribeManagedAccount',
        'servicecatalog:TerminateProvisionedProduct',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    }));

    const isComplete = new lambda.SingletonFunction(this, 'isComplete', {
      uuid: 'ffaaee11002',
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'accountFactory.is_complete',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/accountFactory')),
      timeout: core.Duration.seconds(300),
    });

    // permit this lambdas role to access the service catalog
    servicePortfolio.giveAccessToRole(isComplete.role as iam.Role);

    isComplete.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'serviceCatalog:SearchProvisionedProducts',
        'organizations:ListAccounts',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    }));

    this.provider = new cr.Provider(this, 'MyProvider', {
      onEventHandler: onEvent,
      isCompleteHandler: isComplete, // optional async "waiter"
      queryInterval: core.Duration.seconds(30),
      logRetention: logs.RetentionDays.ONE_DAY, // default is INFINITE
      totalTimeout: core.Duration.minutes(90),
    });
  }
}
