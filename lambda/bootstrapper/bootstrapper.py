import boto3
import json
import os
import yaml

codebuild = boto3.client('codebuild')
ssm = boto3.client('ssm')

CDK_BOOTSTRAP_QUALIFER = os.environ['CDK_BOOTSTRAP_QUALIFER']
CDK_BOOTSTRAP_REGIONS = json.loads(os.environ['CDK_BOOTSTRAP_REGIONS'])
ROOT_ACCOUNT_ID = json.loads(os.environ['ROOT_ACCOUNT_ID'])
CODEBUILD_PROJECT_NAME = os.environ['CODEBUILD_PROJECT_NAME']
TEMPLATE_BOOTSTRAP_STACKS = json.loads(os.environ['TEMPLATE_BOOTSTRAP_STACKS'])
LOCAL_BOOTSTRAP_STACKS = json.loads(os.environ['LOCAL_BOOTSTRAP_STACKS'])

def on_event(event, context):

	if 'source' in event.keys():
		if event['source'] == 'aws.controltower' and event['detail']['serviceEventDetails']['createManagedAccountStatus']['message'] == 'AWS Control Tower successfully created an enrolled account.':
			 # this was invoked by eventbridge
			account_name = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountName']
			account_id = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountId']
		else:
			return		# do nothing this was not an event we care about.

	else: # this was invoked by a test event.
		account_id = event['accountId']
		account_name = event['account_name']
	
	# update the packages
	build_commands = [
		'npm update -g npm@latest',
		'npm install',
	]
	
	# boostrap the account in regions as required.
	for region in CDK_BOOTSTRAP_REGIONS:
		build_commands.extend(
			[
				f'npx cdk boostrap aws://{account_id}/{region} --qualifer {CDK_BOOTSTRAP_QUALIFER} --trust {ROOT_ACCOUNT_ID}
			]
		)
	
	build_commands.extend(
		[
			'echo Finished CDK Bootstrapping'
		]
	)
		
	# TEMPLATE_BOOTSTRAP_STACKS and LOCAL_BOOTSTRAP_STACK 
	# [ 
	# 	{ 
	# 		"stackName" : 'name',
	# 		"regions": [
	# 			'region'
	# 		]	
	# 	}
	# ]
	
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