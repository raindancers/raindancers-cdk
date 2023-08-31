import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'mrpackethead',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'raindancers-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://git.us-west-2.github.source.3p.codecatalyst.aws/v1/aws-cdk-lib/raindancers-cdk/raindancers-cdk',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();