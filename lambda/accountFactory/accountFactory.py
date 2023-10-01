import boto3
import json

servicecatalog = boto3.client('servicecatalog')
orgs = boto3.client('organizations')

def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)

def on_update(event):
	print('immutable resource, no changes')

def on_delete(event):

	props = event["ResourceProperties"]
	print('resourceId', event['PhysicalResourceId'])
	print('deleting resource')

	# TODO: fix this actual deletion.
	# response = servicecatalog.terminate_provisioned_product(
	# 	ProvisionedProductName=f"awsAccount-{props['ProvisionedProductName']}",
	# 	ProvisionedProductId=event['PhysicalResourceId'],
	# 	IgnoreErrors=True
	# )
	print('Response from deleting Product:')
	print(response)


def on_create(event):

	props = event["ResourceProperties"]
	provisioning_artifact_id = servicecatalog.describe_product(
		Id=props['ProductId']
	)

	provisioning_parameters = json.loads(props["ProvisioningParameters"])
	provisioning_parameters = [{'Key': k, 'Value': v} for k, v in provisioning_parameters.items()]
	
	provisioned_product = servicecatalog.provision_product(
		ProductId=props['ProductId'],
		ProvisioningArtifactId=provisioning_artifact_id['ProvisioningArtifacts'][-1]['Id'],
		ProvisionedProductName=f"awsAccount-{props['ProvisionedProductName']}",
		ProvisioningParameters=provisioning_parameters
	)['RecordDetail']['ProvisionedProductId']
	
	print(f"ProvisioningParameters:\n {provisioning_parameters}")

	return { 
		'PhysicalResourceId': provisioned_product,
	}

def is_complete(event, context):
	print('iscompleteevent:',event)
	request_type = event['RequestType']
	

	if request_type == 'Create':
  
		props = event["ResourceProperties"]
		provisioning_parameters = json.loads(props["ProvisioningParameters"])
		print(provisioning_parameters)
		

		# find the provisioned product
		state = servicecatalog.search_provisioned_products(
			Filters={
				'SearchQuery': [f"id:{event['PhysicalResourceId']}"]
			},
		)

		print(state['ProvisionedProducts'][0]['Status'])

		if state['ProvisionedProducts'][0]['Status'] == 'ERROR':
			raise Exception(f"ProvisionedProduct has failed to provision")


		# if its AVAIALABLE, its complete.
		if state['ProvisionedProducts'][0]['Status'] in ['AVAILABLE', 'TAINTED']:

			allaccounts = []
			paginator = orgs.get_paginator('list_accounts')
			getAccounts = paginator.paginate()
			
			
			for page in getAccounts:
				for account in page['Accounts']:
					if account["Email"] == provisioning_parameters["AccountEmail"]:
						print(account["Email"])
						return { 
							'Data': { 
								'AccountId': account['Id'],
								'Arn': account['Arn'],
								'Name': account['Name'] 
							},
							'IsComplete': True 
						}
		

			raise Exception(f"Account {props['ProvisioningParameters']['AccountEmail']} not  found")

		else:
			return { 'IsComplete': False }

	if request_type == 'Update': 
		return { 'IsComplete': True }

	if request_type == 'Delete': 
		return { 'IsComplete': True }
	
	raise Exception("Invalid request type: %s" % request_type)