import boto3
import json

def handler(event, context):
    try:
        print(f"RequestType: {event['RequestType']}")
        client = boto3.client('bedrock-agentcore-control')
        
        if event['RequestType'] == 'Create':
            props = event['ResourceProperties']
            
            # Explicitly pass only required parameters
            response = client.create_gateway(
                name=props['GatewayName'],
                roleArn=props['RoleArn'],
                protocolType=props['ProtocolType'],
                authorizerType=props['AuthorizerType'],
                authorizerConfiguration=props['AuthorizerConfiguration'],
                description=props.get('Description', '')
            )
            
            # Only extract gateway ID - isComplete handler will provide URL when ready
            gw_id = response['gatewayId']
            print(f"Created gateway: {gw_id}")
            
            # Return just the ID - isComplete handler will provide the URL and data
            return {
                'PhysicalResourceId': gw_id
            }
            
        elif event['RequestType'] == 'Update':
            # For gateway updates, try to update or recreate
            props = event['ResourceProperties']
            
            try:
                # Try to update the gateway
                response = client.update_gateway(
                    gatewayIdentifier=event['PhysicalResourceId'],
                    name=props['GatewayName'],
                    description=props.get('Description', '')
                )
                
                return {
                    'PhysicalResourceId': event['PhysicalResourceId']
                }
            except Exception as e:
                print(f"Update failed, attempting recreate: {e}")
                # If update fails, delete and recreate
                try:
                    client.delete_gateway(gatewayIdentifier=event['PhysicalResourceId'])
                except:
                    pass
                
                # Recreate gateway
                response = client.create_gateway(
                    name=props['GatewayName'],
                    roleArn=props['RoleArn'],
                    protocolType=props['ProtocolType'],
                    authorizerType=props['AuthorizerType'],
                    authorizerConfiguration=props['AuthorizerConfiguration'],
                    description=props.get('Description', '')
                )
                
                gw_id = response['gatewayId']
                return {
                    'PhysicalResourceId': gw_id
                }
            
        elif event['RequestType'] == 'Delete':
            try:
                client.delete_gateway(gatewayIdentifier=event['PhysicalResourceId'])
                print(f"Successfully deleted gateway: {event['PhysicalResourceId']}")
            except client.exceptions.ResourceNotFoundException:
                print(f"Gateway {event['PhysicalResourceId']} not found - already deleted")
            except Exception as e:
                print(f"Delete failed: {e}")
                # Don't raise - allow stack deletion to continue
            return {'PhysicalResourceId': event['PhysicalResourceId']}
        
        return {'PhysicalResourceId': event.get('PhysicalResourceId', 'unknown')}
    except Exception as e:
        print(f"Handler error: {e}")
        raise e