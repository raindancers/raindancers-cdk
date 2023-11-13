import * as integ from '@aws-cdk/integ-tests-alpha';
import * as core from 'aws-cdk-lib';
import { EnterpriseVPC } from './enterpriseVPC/enterpriseVPC';

const app = new core.App();
const stack = new EnterpriseVPC(app, 'ServiceControlPolicyStack', {});

new integ.IntegTest(app, 'EnterpriseVPCTest', {
  testCases: [stack],
});

app.synth();
