import boto3

servicecatalog = boto3.client('servicecatalog')
orgs = boto3.client('organizations')

# do nothing but return
def on_event(event, context):
	return { 
		'PhysicalResourceId': 'oneventHandler',
	}

def is_complete(event, context):

	props = event["ResourceProperties"]

	# find the provisioned product
	state = servicecatalog.search_provisioned_products(
		Filters={
			'string': [f'provisioningArtifactId:{props["ProvisionedProductId"]}']
		},
	)

	# if its AVAIALABLE, its complete.
	if state['ProvisionedProducts'][0]['Status'] == 'AVAILABLE':

		getAccountId = orgs.list_accounts_for_parent(
			ParentId = props["ParentOU"]
		)

		account = next(account for account in getAccountId["Accounts"] if account["Email"] == props["AccountEmail"])

		
		return { 
			'Data': { 
				'AccountId': account['Email'],
				'Arn': account['Arn'],
				'Name': account['Name'] 
			},
			'IsComplete': True 
		}
	
	return { 'IsComplete': False }

