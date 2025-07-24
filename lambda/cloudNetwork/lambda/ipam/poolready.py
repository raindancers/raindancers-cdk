import boto3
import json
import time

def handler(event, context):
    ec2 = boto3.client('ec2')
    
    # session = boto3.Session(region_name='ap-southeast-2', profile_name='network')
    # ec2 = session.client('ec2')

    print(event)

    request_type = event['RequestType']
    
    if request_type == 'Delete':
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            'IsComplete': True
        }
    
    ipv4_pool_id = event['ResourceProperties']['Ipv4PoolId']
    ipv6_pool_id = event['ResourceProperties']['Ipv6PoolId']
    
    
    if request_type == 'Create' or request_type == 'Update':
        # Check if both pools have CIDRs allocated
        try:

            ipv4_pool = ec2.describe_ipam_pools(IpamPoolIds=[ipv4_pool_id])['IpamPools'][0]['State']
            ipv6_pool = ec2.describe_ipam_pools(IpamPoolIds=[ipv6_pool_id])['IpamPools'][0]['State']
            
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
        except Exception as e:
            return {
                'PhysicalResourceId': 'poolcidr-waiter',
                'IsComplete': False
            }


