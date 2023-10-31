import { awscdk, DependencyType } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'mrpackethead',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  cdkVersion: '2.93.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'raindancers-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://git.us-west-2.github.source.3p.codecatalyst.aws/v1/aws-cdk-lib/raindancers-cdk/raindancers-cdk',

  /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.deps.addDependency('@aws-cdk/integ-runner@latest', DependencyType.DEVENV);
project.deps.addDependency('@aws-cdk/integ-tests-alpha@latest', DependencyType.DEVENV);

project.addGitIgnore('!lambda/**');
project.addGitIgnore('!bootstraptemplates/**');
project.addGitIgnore('!src/geneve/appcode**');
project.addGitIgnore('!src/geneve/userdata**');
project.addGitIgnore('!src/geneve/scripts**');

project.addGitIgnore('!bootstrap/**');

project.synth();