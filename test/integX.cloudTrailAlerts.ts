import * as integ from '@aws-cdk/integ-tests-alpha';
import * as core from 'aws-cdk-lib';
import { CloudTrailAlarms } from './cloudTrailAlerts/cloudTrailAlerts';

const app = new core.App();
const stack = new CloudTrailAlarms(app, 'RootMonitoring');

new integ.IntegTest(app, 'RootApiActivity', {
  testCases: [stack],
});

app.synth();
