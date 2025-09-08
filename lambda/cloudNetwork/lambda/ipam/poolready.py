import boto3
import json

def handler(event, context):
    print(f"Event: {json.dumps(event)}")
    print(f"Context: {context}")
    
    # Get region from properties, default to current region
    region = event['ResourceProperties'].get('Region')
    print(f"Using region: {region}")
    ec2 = boto3.client('ec2', region_name=region) if region else boto3.client('ec2')
    
    request_type = event['RequestType']
    print(f"Request type: {request_type}")
    
    if request_type == 'Delete':
        print("Delete request - returning complete")
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            'IsComplete': True
        }
    
    ipv4_pool_id = event['ResourceProperties']['Ipv4PoolId']
    ipv6_pool_id = event['ResourceProperties']['Ipv6PoolId']
    print(f"Checking pools - IPv4: {ipv4_pool_id}, IPv6: {ipv6_pool_id}")
    
    try:
        # Check if pools have CIDRs available
        print(f"Getting IPv4 pool CIDRs for {ipv4_pool_id}")
        ipv4_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv4_pool_id)
        print(f"IPv4 pool response: {json.dumps(ipv4_cidrs, default=str)}")
        
        print(f"Getting IPv6 pool CIDRs for {ipv6_pool_id}")
        ipv6_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv6_pool_id)
        print(f"IPv6 pool response: {json.dumps(ipv6_cidrs, default=str)}")
        
        # Pools are ready when they have at least one CIDR
        ipv4_ready = len(ipv4_cidrs['IpamPoolCidrs']) > 0
        ipv6_ready = len(ipv6_cidrs['IpamPoolCidrs']) > 0
        
        print(f"Pool status - IPv4 ready: {ipv4_ready} ({len(ipv4_cidrs['IpamPoolCidrs'])} CIDRs), IPv6 ready: {ipv6_ready} ({len(ipv6_cidrs['IpamPoolCidrs'])} CIDRs)")
        
        if ipv4_ready and ipv6_ready:
            print("Both pools ready - returning complete")
            return {
                'PhysicalResourceId': 'poolcidr-waiter',
                'IsComplete': True
            }
        else:
            print("Pools not ready - waiting...")
            return {
                'PhysicalResourceId': 'poolcidr-waiter',
                'IsComplete': False
            }
    except Exception as e:
        print(f"Error checking pool CIDRs: {str(e)}")
        print(f"Exception type: {type(e).__name__}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return {
            'PhysicalResourceId': 'poolcidr-waiter',
            'IsComplete': False
        }