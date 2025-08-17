import json
import os
import urllib3
from urllib.parse import urlencode

def handler(event, context):
    print(f"Event: {json.dumps(event)}")
    
    # Handle different request formats (direct Lambda URL vs AgentCore Gateway)
    if 'requestContext' in event and 'http' in event['requestContext']:
        # Direct Lambda URL format
        method = event['requestContext']['http']['method']
        path = event['requestContext']['http']['path']
        query_params = event.get('queryStringParameters') or {}
        headers = event.get('headers') or {}
        body = event.get('body')
    else:
        # AgentCore Gateway format or other formats
        method = event.get('httpMethod', 'GET')
        path = event.get('path', '/')
        query_params = event.get('queryStringParameters') or {}
        headers = event.get('headers') or {}
        body = event.get('body')
    
    print(f"Method: {method}, Path: {path}")
    print(f"Headers: {headers}")
    
    # Build target API URL from environment
    base_url = os.environ.get('BASE_URL')
    if not base_url:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'BASE_URL environment variable not set'})
        }
    url = f"{base_url}{path}"
    if query_params:
        url += '?' + urlencode(query_params)
    
    print(f"Target URL: {url}")
    
    # Get API key from request (support both AgentCore and direct calls)
    api_key = None
    
    # Look for API key in headers first
    api_key_header = os.environ.get('API_KEY_HEADER', 'X-API-Key')
    for key, value in headers.items():
        if key.lower() == api_key_header.lower():
            api_key = value
            print(f"Found API key in headers: {api_key[:10]}...")
            break
    
    # If not in headers, check query parameters (AgentCore sends it as 'api_key')
    if not api_key and query_params:
        api_key = query_params.get('api_key')
        if api_key:
            print(f"Found API key in query params: {api_key[:10]}...")
            # Remove api_key from query params so it's not forwarded to target API
            query_params = {k: v for k, v in query_params.items() if k != 'api_key'}
    
    if not api_key:
        print(f"No API key found in headers or query params")
        print(f"Available headers: {list(headers.keys())}")
        print(f"Available query params: {list(query_params.keys())}")
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Missing API key'})
        }
    
    # Build target API URL (after cleaning query params)
    base_url = os.environ.get('BASE_URL')
    url = f"{base_url}{path}"
    if query_params:
        url += '?' + urlencode(query_params)
    
    print(f"Target URL: {url}")
    
    # Set up headers for target API
    api_key_header = os.environ.get('API_KEY_HEADER', 'X-API-Key')
    proxy_headers = {
        api_key_header: api_key,
        'Content-Type': 'application/json',
        'User-Agent': 'AgentCore-Lambda-Proxy/1.0'
    }
    
    # Copy only safe headers to avoid conflicts
    safe_headers = ['accept', 'accept-encoding']
    for key, value in headers.items():
        if key.lower() in safe_headers:
            proxy_headers[key] = value
    
    print(f"Proxy headers: {dict((k, v[:10] + '...' if k.lower() == api_key_header.lower() else v) for k, v in proxy_headers.items())}")
    
    # Forward request to target API
    http = urllib3.PoolManager()
    
    try:
        if method == 'GET':
            response = http.request('GET', url, headers=proxy_headers)
        elif method == 'POST':
            response = http.request('POST', url, body=body, headers=proxy_headers)
        elif method == 'PUT':
            response = http.request('PUT', url, body=body, headers=proxy_headers)
        elif method == 'DELETE':
            response = http.request('DELETE', url, headers=proxy_headers)
        else:
            return {
                'statusCode': 405,
                'body': json.dumps({'error': 'Method not allowed'})
            }
        
        response_body = response.data.decode('utf-8')
        print(f"Target API response status: {response.status}")
        print(f"Target API response body: {response_body[:200]}...")
        
        return {
            'statusCode': response.status,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': response_body
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }