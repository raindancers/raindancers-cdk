import boto3
import json

def handler(event, context):
    print(f"Event: {json.dumps(event)}")
    
    # Get region from properties, default to current region
    region = event['ResourceProperties'].get('Region')
    print(f"Using region: {region}")
    ec2 = boto3.client('ec2', region_name=region) if region else boto3.client('ec2')
    
    request_type = event['RequestType']
    print(f"Request type: {request_type}")
    
    # Use existing physical ID for consistency
    physical_id = event.get('PhysicalResourceId', 'poolcidr-waiter')
    
    if request_type == 'Delete':
        print("Delete request - returning complete")
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': True
        }
    
    ipv4_pool_id = event['ResourceProperties']['Ipv4PoolId']
    ipv6_pool_id = event['ResourceProperties']['Ipv6PoolId']
    print(f"Checking pools - IPv4: {ipv4_pool_id}, IPv6: {ipv6_pool_id}")
    
    try:
        # First check if pools are in available state
        print(f"Checking pool states")
        pools_response = ec2.describe_ipam_pools(IpamPoolIds=[ipv4_pool_id, ipv6_pool_id])
        
        ipv4_state = None
        ipv6_state = None
        for pool in pools_response['IpamPools']:
            if pool['IpamPoolId'] == ipv4_pool_id:
                ipv4_state = pool['State']
            elif pool['IpamPoolId'] == ipv6_pool_id:
                ipv6_state = pool['State']
        
        print(f"Pool states - IPv4: {ipv4_state}, IPv6: {ipv6_state}")
        
        if ipv4_state != 'create-complete' or ipv6_state != 'create-complete':
            print("Pools not yet available - waiting...")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': False
            }
        
        # Check if pools have CIDRs available
        print(f"Getting IPv4 pool CIDRs for {ipv4_pool_id}")
        ipv4_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv4_pool_id)
        
        print(f"Getting IPv6 pool CIDRs for {ipv6_pool_id}")
        ipv6_cidrs = ec2.get_ipam_pool_cidrs(IpamPoolId=ipv6_pool_id)
        
        # Pools are ready when they have at least one provisioned CIDR
        ipv4_ready = any(cidr.get('State') == 'provisioned' for cidr in ipv4_cidrs['IpamPoolCidrs'])
        ipv6_ready = any(cidr.get('State') == 'provisioned' for cidr in ipv6_cidrs['IpamPoolCidrs'])
        
        print(f"Pool CIDR status - IPv4: {ipv4_ready} ({len(ipv4_cidrs['IpamPoolCidrs'])} CIDRs), IPv6: {ipv6_ready} ({len(ipv6_cidrs['IpamPoolCidrs'])} CIDRs)")
        
        # For cross-region (AutoImport=false), manually provision CIDRs
        # For same-region (autoImport=true), CIDRs auto-import from VPC sourceResource
        if not ipv4_ready:
            vpc_ipv4_cidr = event['ResourceProperties'].get('VpcIpv4Cidr')
            if vpc_ipv4_cidr:
                print(f"Provisioning IPv4 CIDR {vpc_ipv4_cidr} to pool {ipv4_pool_id}")
                ec2.provision_ipam_pool_cidr(
                    IpamPoolId=ipv4_pool_id,
                    Cidr=vpc_ipv4_cidr
                )
            else:
                print("Waiting for IPv4 CIDR to be auto-imported...")

        if not ipv6_ready:
            vpc_ipv6_cidr = event['ResourceProperties'].get('VpcIpv6Cidr')
            if vpc_ipv6_cidr:
                print(f"Provisioning IPv6 CIDR {vpc_ipv6_cidr} to pool {ipv6_pool_id}")
                ec2.provision_ipam_pool_cidr(
                    IpamPoolId=ipv6_pool_id,
                    Cidr=vpc_ipv6_cidr
                )
            else:
                print("Waiting for IPv6 CIDR to be auto-imported...")

        if not ipv4_ready or not ipv6_ready:
            print("Waiting for CIDRs to be provisioned...")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': False
            }
        
        if ipv4_ready and ipv6_ready:
            print("Both pools ready - returning complete")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': True
            }
    except Exception as e:
        print(f"Error checking pool CIDRs: {str(e)}")
        print(f"Exception type: {type(e).__name__}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': False
        }