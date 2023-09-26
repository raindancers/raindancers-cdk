import boto3
import json

servicecatalog = boto3.client('servicecatalog')
orgs = boto3.client('organizations')

# do nothing but return
def on_event(event, context):

	props = event["ResourceProperties"]


	provisioning_artifact_id = servicecatalog.describe_product(
		Id=props['ProductId']
	)

	provisioning_parameters = json.loads(props["ProvisioningParameters"])
	# convert provisioning_parameters to a list of dicts
	provisioning_parameters = [{'Key': k, 'Value': v} for k, v in provisioning_parameters.items()]
	

	provisioned_product = servicecatalog.provision_product(
		ProductId=props['ProductId'],
		ProvisioningArtifactId=provisioning_artifact_id['ProvisioningArtifacts'][-1]['Id'],
		ProvisionedProductName=f"awsAccount-{props['ProvisionedProductName']}",
		ProvisioningParameters=provisioning_parameters
	)['RecordDetail']['ProvisionedProductId']
	
	return { 
		'PhysicalResourceId': provisioned_product,
	}

def is_complete(event, context):

	props = event["ResourceProperties"]

	# find the provisioned product
	state = servicecatalog.search_provisioned_products(
		Filters={
			'SearchQuery': [f"id:{event['PhysicalResourceId']}"]
		},
	)

	if state['ProvisionedProducts'][0]['Status'] == 'ERROR':
		raise Exception(f"ProvisionedProduct {event['PhysicalResourceId']} has failed to provision")


	# if its AVAIALABLE, its complete.
	if state['ProvisionedProducts'][0]['Status'] == 'AVAILABLE':

		getAccountId = orgs.list_accounts_for_parent(
			ParentId = props["ProvisioningParameters"]["ParentOU"]
		)

		account = next(account for account in getAccountId["Accounts"] if account["Email"] == props["ProvisioningParameters"]["AccountEmail"])

		
		return { 
			'Data': { 
				'AccountId': account['Email'],
				'Arn': account['Arn'],
				'Name': account['Name'] 
			},
			'IsComplete': True 
		}
	
	return { 'IsComplete': False }

