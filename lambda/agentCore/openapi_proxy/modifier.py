import json
import boto3
import urllib3

s3 = boto3.client('s3')
http = urllib3.PoolManager()

def send_response(event, context, status, data=None):
    response_body = {
        'Status': status,
        'Reason': f'See CloudWatch Log Stream: {context.log_stream_name}',
        'PhysicalResourceId': context.log_stream_name,
        'StackId': event['StackId'],
        'RequestId': event['RequestId'],
        'LogicalResourceId': event['LogicalResourceId'],
        'Data': data or {}
    }
    
    http.request('PUT', event['ResponseURL'], body=json.dumps(response_body))

def handler(event, context):
    try:
        if event['RequestType'] == 'Delete':
            send_response(event, context, 'SUCCESS')
            return
            
        props = event['ResourceProperties']
        bucket_name = props['BucketName']
        original_key = props['OriginalKey']
        modified_key = props['ModifiedKey']
        function_url = props['FunctionUrl']
        
        # Read original spec
        response = s3.get_object(Bucket=bucket_name, Key=original_key)
        spec = json.loads(response['Body'].read())
        
        # Modify spec to point to Lambda proxy for authentication
        spec['servers'] = [{'url': function_url.rstrip('/')}]
        
        # Add API key security scheme for AgentCore
        api_key_header_name = props.get('ApiKeyHeaderName', 'X-API-Key')
        
        if 'components' not in spec:
            spec['components'] = {}
        
        spec['components']['securitySchemes'] = {
            'ApiKeyAuth': {
                'type': 'apiKey',
                'in': 'header',
                'name': api_key_header_name
            }
        }
        
        # Set security requirement for all operations
        spec['security'] = [{'ApiKeyAuth': []}]
        
        # Add timestamp to force update
        spec['x-modified-at'] = context.aws_request_id
        
        # Save modified spec
        s3.put_object(
            Bucket=bucket_name,
            Key=modified_key,
            Body=json.dumps(spec, indent=2),
            ContentType='application/json'
        )
        
        send_response(event, context, 'SUCCESS')
        
    except Exception as e:
        print(f'Error: {str(e)}')
        send_response(event, context, 'FAILED')