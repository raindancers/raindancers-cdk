import boto3
import json

def handler(event, context):
    try:
        print(f"RequestType: {event['RequestType']}, ResourceType: {event.get('ResourceType', 'Unknown')}")
        client = boto3.client('bedrock-agentcore-control')
        
        if event['RequestType'] == 'Create':
            props = event['ResourceProperties']
            
            # Map CDK properties to AWS API parameters
            response = client.create_gateway_target(
                gatewayIdentifier=props['GatewayIdentifier'],
                name=props['Name'],
                description=props.get('Description', ''),
                targetConfiguration=props['TargetConfiguration'],
                credentialProviderConfigurations=props['CredentialProviderConfigurations']
            )
            print(f"API Response keys: {list(response.keys())}")
            
            # Extract only the target ID
            target_id = response['targetId']
            result = {
                'PhysicalResourceId': target_id,
                'Data': {
                    'TargetId': target_id
                }
            }
            
            # Print exact data being returned
            result_json = json.dumps(result, indent=2)
            print(f"RETURNING DATA: {result_json}")
            print(f"Response size: {len(result_json)} bytes")
            
            return result
            
        elif event['RequestType'] == 'Delete':
            try:
                client.delete_gateway_target(
                    gatewayIdentifier=event['ResourceProperties']['GatewayIdentifier'],
                    targetId=event['PhysicalResourceId']
                )
                print(f"Successfully deleted gateway target: {event['PhysicalResourceId']}")
            except client.exceptions.ResourceNotFoundException:
                print(f"Gateway target {event['PhysicalResourceId']} not found - already deleted")
            except Exception as e:
                print(f"Delete failed: {e}")
                # Don't raise - allow stack deletion to continue
            return {'PhysicalResourceId': event['PhysicalResourceId']}
        
        return {'PhysicalResourceId': event.get('PhysicalResourceId', 'unknown')}
    except Exception as e:
        print(f"Handler error: {e}")
        raise e