import boto3
import json

def handler(event, context):
    print(f"Event: {json.dumps(event)}")
    
    region = event['ResourceProperties'].get('Region')
    ec2 = boto3.client('ec2', region_name=region) if region else boto3.client('ec2')
    
    request_type = event['RequestType']
    vpc_id = event['ResourceProperties']['VpcId']
    ipv4_scope_id = event['ResourceProperties']['Ipv4ScopeId']
    ipv6_scope_id = event['ResourceProperties']['Ipv6ScopeId']
    
    print(f"Using region: {region}")
    
    physical_id = 'ipam-wait'
    
    if request_type == 'Delete':
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': True,
        }
    
    try:
        # Check IPv4 scope
        ipv4_response = ec2.get_ipam_resource_cidrs(
            IpamScopeId=ipv4_scope_id,
            ResourceId=vpc_id,
        )
        ipv4_monitored = len(ipv4_response['IpamResourceCidrs']) > 0
        
        # Check IPv6 scope
        ipv6_response = ec2.get_ipam_resource_cidrs(
            IpamScopeId=ipv6_scope_id,
            ResourceId=vpc_id,
        )
        ipv6_monitored = len(ipv6_response['IpamResourceCidrs']) > 0
        
        print(f"IPv4 CIDRs: {ipv4_response['IpamResourceCidrs']}")
        print(f"IPv6 CIDRs: {ipv6_response['IpamResourceCidrs']}")
        print(f"IPAM monitoring - IPv4: {ipv4_monitored}, IPv6: {ipv6_monitored}")
        
        if ipv4_monitored and ipv6_monitored:
            print("IPAM is monitoring both IPv4 and IPv6 CIDRs - resource ready")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': True,
            }
        else:
            print("IPAM not yet monitoring all CIDRs - waiting...")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': False
            }
            
    except Exception as e:
        print(f"Error checking IPAM CIDRs: {str(e)}")
        print(f"Region: {region}, VPC: {vpc_id}, IPv4 Scope: {ipv4_scope_id}, IPv6 Scope: {ipv6_scope_id}")
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': False
        }
