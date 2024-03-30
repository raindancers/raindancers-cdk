import { awscdk, DependencyType } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'mrpackethead',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  cdkVersion: '2.134.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: 'raindancers-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/raindancers/raindancers-cdk'

  /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.deps.addDependency('@aws-cdk/integ-runner@latest', DependencyType.DEVENV);
project.deps.addDependency('@aws-cdk/integ-tests-alpha@latest', DependencyType.DEVENV);
project.deps.addDependency('cdk-serverless-clamscan', DependencyType.RUNTIME);

project.addGitIgnore('!lambda/**');
project.addGitIgnore('!bootstraptemplates/**');
project.addGitIgnore('!system/**');
project.addGitIgnore('!bootstrap/**');
project.addGitIgnore('!assets/**');


project.synth();