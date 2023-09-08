import * as integ from '@aws-cdk/integ-tests-alpha';
import * as core from 'aws-cdk-lib';
import { ServiceControlPolicys } from './scp/scp';

const app = new core.App();
const stack = new ServiceControlPolicys(app, 'ServiceControlPolicyStack');

new integ.IntegTest(app, 'ServiceControlPolicyTest', {
  testCases: [stack],
});

app.synth();
