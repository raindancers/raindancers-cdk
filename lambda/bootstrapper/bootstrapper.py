import boto3
import json
import os
import yaml

codebuild = boto3.client('codebuild')
ssm = boto3.client('ssm')

CDK_BOOTSTRAP_QUALIFER = os.environ['CDK_BOOTSTRAP_QUALIFER']
CDK_BOOTSTRAP_REGIONS = json.loads(os.environ['CDK_BOOTSTRAP_REGIONS'])
TRUSTS = json.loads(os.environ['TRUSTS'])
CODEBUILD_PROJECT_NAME = os.environ['CODEBUILD_PROJECT_NAME']
TEMPLATE_BOOTSTRAP_STACKS = json.loads(os.environ['TEMPLATE_BOOTSTRAP_STACKS'])
LOCAL_BOOTSTRAP_STACKS = json.loads(os.environ['LOCAL_BOOTSTRAP_STACKS'])

def on_event(event, context):

	if 'source' in event.keys():
		if event['source'] == 'aws.controltower' and event['detail']['serviceEventDetails']['createManagedAccountStatus']['message'] == 'AWS Control Tower successfully created an enrolled account.':
			 # this was invoked by eventbridge
			account_id = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountId']
		else:
			return		# do nothing this was not an event we care about.

	else if 'ResourceProperties' in event.keys():
		account_id = event['ResourceProperties']['AccountId']
		

	else:
		account_id = event['accountId']
	
		
	# update the packages
	build_commands = [
		'npm update -g npm@latest',
		'npm install',
	]

	# this will set the default creds to the role in the remote account. 
	build_commands.extend([
		f'export $(printf "AWS_ACCESS_KEY_ID=%s AWS_SECRET_ACCESS_KEY=%s AWS_SESSION_TOKEN=%s" \
		$(aws sts assume-role \
		--role-arn arn:aws:iam::{account_id}:role/AWSControlTowerExecution \
		--role-session-name MySessionName \
		--query "Credentials.[AccessKeyId,SecretAccessKey,SessionToken]" \
		--output text))'
	])
	
	trust_string = ''
	for account in TRUSTS:
		trust_string = trust_string + ','

	# boostrap the account in regions as required.
	for region in CDK_BOOTSTRAP_REGIONS:
		build_commands.extend(
			[
				f'npx cdk bootstrap aws://{account_id}/{region} --qualifer {CDK_BOOTSTRAP_QUALIFER} --trust {truststring}'
			]
		)
	
	build_commands.extend(
		[
			'echo Finished CDK Bootstrapping'
		]
	)
	
	
	for stack in TEMPLATE_BOOTSTRAP_STACKS:
		for region in stack['Regions']:
			build_commands.extend(
				[
					f'cd {stack["StackName"]}',
					'npm install',
					f'npx cdk deploy --require-approval never --region {region}',
					'cd ..'
				]
			)
	
	for stack in LOCAL_BOOTSTRAP_STACKS:
		for region in stack['Regions']:
			build_commands.extend(
				[
					f'cd $CODEBUILD_SRC_DIR_localstacks/{stack["StackName"]}',
					'npm install',
					f'npx cdk deploy --require-approval never --region {region}',
					'cd ..'
				]
			)

	build_commands.append('echo "Finished Deploying Boostrap Stacks"')
	
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
				'commands':build_commands
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
			],
			'secondary-artifacts': { 
				'artifact1': {
					'base-directory': '$CODEBUILD_SRC_DIR_localstacks',
					'files': [
						'**.*'
					]
				} 
			}
		}
	}
	
	codebuild.start_build(
		projectName = CODEBUILD_PROJECT_NAME,
		buildspecOverride = yaml.dump(buildspec)
	)	