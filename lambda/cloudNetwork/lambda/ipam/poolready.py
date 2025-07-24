import boto3
import json

def handler(event, context):
    ec2 = boto3.client('ec2')
    
    request_type = event['RequestType']
    
    if request_type == 'Delete':
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            'IsComplete': True
        }
    
    ipv4_pool_id = event['ResourceProperties']['Ipv4PoolId']
    ipv6_pool_id = event['ResourceProperties']['Ipv6PoolId']
    
    
        
    ipv4_pool = ec2.describe_ipam_pools(IpamPoolIds=[ipv4_pool_id])['IpamPools'][0]['State']
    ipv6_pool = ec2.describe_ipam_pools(IpamPoolIds=[ipv6_pool_id])['IpamPools'][0]['State']
    
    print("ipv4:",ipv4_pool)
    print("ipv6:",ipv6_pool)

    if ipv4_pool == 'create-complete' and ipv6_pool == 'create-complete':
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            
            'IsComplete': True
        }
    else:
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            'IsComplete': False
        }