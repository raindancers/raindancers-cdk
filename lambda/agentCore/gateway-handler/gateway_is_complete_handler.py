import boto3
import json

def handler(event, context):
    try:
        request_type = event.get('RequestType', 'Unknown')
        print(f"IsComplete check for {request_type} on gateway: {event['PhysicalResourceId']}")
        
        # For Delete and Update events, return complete immediately
        if request_type in ['Delete', 'Update']:
            print(f"{request_type} operation - returning complete immediately")
            return {'IsComplete': True}
        
        # Only check gateway status for Create events
        client = boto3.client('bedrock-agentcore-control')
        gateway_id = event['PhysicalResourceId']
        
        # Get gateway details
        response = client.get_gateway(gatewayIdentifier=gateway_id)
        
        status = response.get('status')
        gateway_url = response.get('gatewayUrl')
        
        print(f"Gateway {gateway_id} status: {status}, URL: {gateway_url}")
        
        # Check if gateway is ready and has URL
        is_complete = status == 'READY' and gateway_url is not None
        
        result = {
            'IsComplete': is_complete
        }
        
        # If complete, return the data
        if is_complete:
            result['Data'] = {
                'GatewayId': gateway_id,
                'GatewayUrl': gateway_url
            }
            print(f"Gateway is ready with URL: {gateway_url}")
        else:
            print(f"Gateway not ready yet. Status: {status}, URL: {gateway_url}")
        
        return result
        
    except Exception as e:
        print(f"IsComplete handler error: {e}")
        # Return not complete on error to retry
        return {'IsComplete': False}