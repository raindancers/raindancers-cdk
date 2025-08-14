import boto3
import json

def handler(event, context):
    try:
        print(f"RequestType: {event['RequestType']}")
        bedrock_client = boto3.client('bedrock-agentcore-control')
        secrets_client = boto3.client('secretsmanager')
        
        if event['RequestType'] == 'Create':
            # Get API key from Secrets Manager
            secret_response = secrets_client.get_secret_value(
                SecretId=event['ResourceProperties']['SecretArn']
            )
            api_key = json.loads(secret_response['SecretString'])[event['ResourceProperties']['SecretKey']]
            
            # Check if credential provider already exists
            try:
                existing_providers = bedrock_client.list_api_key_credential_providers()
                existing_names = [provider['name'] for provider in existing_providers.get('items', [])]
                
                if event['ResourceProperties']['Name'] in existing_names:
                    print(f"Credential provider {event['ResourceProperties']['Name']} already exists, using existing one")
                    # Get the existing provider details
                    for provider in existing_providers['items']:
                        if provider['name'] == event['ResourceProperties']['Name']:
                            response = {'credentialProviderArn': provider['credentialProviderArn']}
                            break
                else:
                    # Create new credential provider
                    response = bedrock_client.create_api_key_credential_provider(
                        name=event['ResourceProperties']['Name'],
                        apiKey=api_key
                    )
            except Exception as e:
                print(f"Error checking existing providers: {e}")
                # Try to create anyway
                response = bedrock_client.create_api_key_credential_provider(
                    name=event['ResourceProperties']['Name'],
                    apiKey=api_key
                )
            
            # Only extract the ARN string - no other data
            arn = str(response['credentialProviderArn'])[:500]  # Truncate if too long
            print(f"Created: {arn[:100]}...")
            
            result = {
                'PhysicalResourceId': arn,
                'Data': {
                    'CredentialProviderArn': arn
                }
            }
            
            # Print exact data being returned
            result_json = json.dumps(result, indent=2)
            print(f"RETURNING DATA: {result_json}")
            print(f"Response size: {len(result_json)} bytes")
            
            return result
            
        elif event['RequestType'] == 'Delete':
            try:
                bedrock_client.delete_credential_provider(credentialProviderArn=event['PhysicalResourceId'])
                print(f"Successfully deleted credential provider: {event['PhysicalResourceId']}")
            except bedrock_client.exceptions.ResourceNotFoundException:
                print(f"Credential provider {event['PhysicalResourceId']} not found - already deleted")
            except Exception as e:
                print(f"Delete failed: {e}")
                # Don't raise - allow stack deletion to continue
            return {'PhysicalResourceId': event['PhysicalResourceId']}
        
        return {'PhysicalResourceId': event.get('PhysicalResourceId', 'unknown')}
    except Exception as e:
        print(f"Handler error: {e}")
        raise e