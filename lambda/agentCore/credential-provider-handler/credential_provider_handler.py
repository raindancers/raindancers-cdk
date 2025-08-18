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
                'PhysicalResourceId': f"{event['ResourceProperties']['Name']}#{arn}",
                'Data': {
                    'CredentialProviderArn': arn
                }
            }
            
            # Print exact data being returned
            result_json = json.dumps(result, indent=2)
            print(f"RETURNING DATA: {result_json}")
            print(f"Response size: {len(result_json)} bytes")
            
            return result
            
        elif event['RequestType'] == 'Update':
            # For updates, recreate the credential provider
            # Get API key from Secrets Manager
            secret_response = secrets_client.get_secret_value(
                SecretId=event['ResourceProperties']['SecretArn']
            )
            api_key = json.loads(secret_response['SecretString'])[event['ResourceProperties']['SecretKey']]
            
            # Delete old provider if name changed
            old_props = event.get('OldResourceProperties', {})
            old_name = old_props.get('Name')
            new_name = event['ResourceProperties']['Name']
            
            if old_name and old_name != new_name:
                try:
                    bedrock_client.delete_api_key_credential_provider(name=old_name)
                except Exception as e:
                    print(f"Failed to delete old provider {old_name}: {e}")
            
            # Create/update credential provider
            try:
                response = bedrock_client.create_api_key_credential_provider(
                    name=new_name,
                    apiKey=api_key
                )
            except Exception as e:
                if 'already exists' in str(e).lower():
                    # Provider exists, get existing one
                    existing_providers = bedrock_client.list_api_key_credential_providers()
                    for provider in existing_providers.get('items', []):
                        if provider['name'] == new_name:
                            response = {'credentialProviderArn': provider['credentialProviderArn']}
                            break
                else:
                    raise e
            
            arn = str(response['credentialProviderArn'])[:500]
            return {
                'PhysicalResourceId': f"{new_name}#{arn}",
                'Data': {
                    'CredentialProviderArn': arn
                }
            }
            
        elif event['RequestType'] == 'Delete':
            try:
                # Extract name from PhysicalResourceId (format: "name#arn")
                physical_id = event['PhysicalResourceId']
                if '#' in physical_id:
                    provider_name = physical_id.split('#')[0]
                else:
                    # Fallback to ResourceProperties if available
                    provider_name = event.get('ResourceProperties', {}).get('Name')
                
                if not provider_name:
                    print(f"No provider name found, cannot delete credential provider")
                    return {'PhysicalResourceId': event['PhysicalResourceId']}
                
                bedrock_client.delete_api_key_credential_provider(name=provider_name)
                print(f"Successfully deleted API key credential provider: {provider_name}")
            except bedrock_client.exceptions.ResourceNotFoundException:
                print(f"API key credential provider {provider_name} not found - already deleted")
            except Exception as e:
                print(f"Delete failed: {e}")
                # Don't raise - allow stack deletion to continue
            return {'PhysicalResourceId': event['PhysicalResourceId']}
        
        return {'PhysicalResourceId': event.get('PhysicalResourceId', 'unknown')}
    except Exception as e:
        print(f"Handler error: {e}")
        raise e