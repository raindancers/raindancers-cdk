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
    
    
        
    try:
        # Check if pools have CIDRs available
        ipv4_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv4_pool_id)
        ipv6_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv6_pool_id)
        
        # Pools are ready when they have at least one CIDR
        ipv4_ready = len(ipv4_cidrs['IpamPoolCidrs']) > 0
        ipv6_ready = len(ipv6_cidrs['IpamPoolCidrs']) > 0
        
        print(f"IPv4 CIDRs: {len(ipv4_cidrs['IpamPoolCidrs'])}, IPv6 CIDRs: {len(ipv6_cidrs['IpamPoolCidrs'])}")
        
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
        print(f"Error checking pool CIDRs: {e}")
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            'IsComplete': False
        }