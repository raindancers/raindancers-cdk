import boto3
import json
import os
import yaml

codebuild = boto3.client('codebuild')
ssm = boto3.client('ssm')

def on_event(event, context):

	CDK_BOOTSTRAP_QUALIFER = os.environ['CDK_BOOTSTRAP_QUALIFER']
	CDK_BOOTSTRAP_REGIONS = json.loads(os.environ['CDK_BOOTSTRAP_REGIONS'])
	ROOT_ACCOUNT_ID = json.loads(os.environ['ROOT_ACCOUNT_ID'])
	CODEBUILD_PROJECT_NAME = os.environ['CODEBUILD_PROJECT_NAME']
	
	print('EVENT:')
	print(event)


	if 'source' in event.keys():
		if event['source'] == 'aws.controltower' and event['detail']['serviceEventDetails']['createManagedAccountStatus']['message'] == 'AWS Control Tower successfully created an enrolled account.':
			 # this was invoked by eventbridge
			account_name = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountName']
			account_id = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountId']

		else:
			return		# do nothing this was not an event we care about.

	else: # this was invoked by a test event
		account_id = event['accountId']
		account_name = event['account_name']
	
	# build the buildspec Bit
	# link packages, authenticate and set the iam alias
	build_commands = [

		f'export $(printf "AWS_ACCESS_KEY_ID=%s AWS_SECRET_ACCESS_KEY=%s AWS_SESSION_TOKEN=%s" \
		$(aws sts assume-role \
		--role-arn arn:aws:iam::{account_id}:role/AWSControlTowerExecution \
		--role-session-name MySessionName \
		--query "Credentials.[AccessKeyId,SecretAccessKey,SessionToken]" \
		--output text))',
		f'aws iam create-account-alias --account-alias {account_name} || echo Did not set Alias'
	]

	# commands to cdk bootstrap the account
	cdk_bootstrap_env = [
		'npm update -g npm@latest',
		'npm install',
		'npx cdk bootstrap --show-template > lib/cfn/bootstrap-template.yaml',
		'npx cdk synth'
	]
	
	for region in CDK_BOOTSTRAP_REGIONS:
		cdk_bootstrap_env.extend(
			[
				f'export AWS_DEFAULT_REGION={region}',
				f'( aws cloudformation create-stack --stack-name CDKToolKit --template-body file://cdk.out/IncludelabStack.template.json --parameters \
				ParameterKey=TrustedAccounts,ParameterValue={ROOT_ACCOUNT_ID} \
				ParameterKey=CloudFormationExecutionPolicies,ParameterValue=arn:aws:iam::aws:policy/AdministratorAccess \
				ParameterKey=Qualifier,ParameterValue={CDK_BOOTSTRAP_QUALIFER} --capabilities=CAPABILITY_NAMED_IAM && \
				aws cloudformation wait stack-create-complete --stack-name CDKToolKit ) || \
				( aws cloudformation update-stack --stack-name CDKToolKit --template-body file://cdk.out/IncludelabStack.template.json --parameters \
				ParameterKey=TrustedAccounts,ParameterValue={ROOT_ACCOUNT_ID} \
				ParameterKey=CloudFormationExecutionPolicies,ParameterValue=arn:aws:iam::aws:policy/AdministratorAccess \
				ParameterKey=Qualifier,ParameterValue={CDK_BOOTSTRAP_QUALIFER} --capabilities=CAPABILITY_NAMED_IAM && \
				aws cloudformation wait stack-update-complete --stack-name CDKToolKit ) || \
				echo no updates to the boostrap where required'
			]
		)
	
	cdk_bootstrap_env.extend(
		[
			'cd ..',
			'echo Finished CDK Bootstrapping'
		]
	)
	
	print('bootstrap_cmds:', cdk_bootstrap_env)

	buildspec = {
		'version': '0.2',
		'phases': {
			'install': {
				'runtime-versions': {
					'nodejs': 'latest'
				},
				'commands': [
					'n 16'
				]
			},
			'build': {
				'commands': build_commands + cdk_bootstrap_env
			},
			'post_build': {
				'commands': [
					'echo project built'
				]
			}
		},
		'artifacts': {
			'files': [
				'**/*',
				'dist/**/*',
				'package.json',
				'package-lock.json',
				'node_modules/**/*'
			]
		}
	}
	
	codebuild.start_build(
		projectName = CODEBUILD_PROJECT_NAME,
		buildspecOverride = yaml.dump(buildspec)
	)