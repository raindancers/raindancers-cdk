import * as integ from '@aws-cdk/integ-tests-alpha';
import * as core from 'aws-cdk-lib';
import { RootApiStack } from './rootapi/rootapi';

const app = new core.App();
const stack = new RootApiStack(app, 'RootMonitoring', {
  emails: ['andrew.frazer@raindancers.cloud'],
});

new integ.IntegTest(app, 'RootApiActivity', {
  testCases: [stack],
});

app.synth();
