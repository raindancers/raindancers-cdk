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
            ipv4_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv4_pool_id)
            ipv6_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv6_pool_id)
            
            ipv4_ready = len(ipv4_cidrs['IpamPoolCidrs']) > 0 and ipv4_cidrs['IpamPoolCidrs'][0]['State'] == 'provisioned'
            ipv6_ready = len(ipv6_cidrs['IpamPoolCidrs']) > 0 and ipv6_cidrs['IpamPoolCidrs'][0]['State'] == 'provisioned'
            
            if ipv4_ready and ipv6_ready:
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
