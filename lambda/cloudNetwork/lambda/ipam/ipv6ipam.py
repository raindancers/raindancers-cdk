import boto3
import json

def handler(event, context):
    print(f"Event: {json.dumps(event)}")
    
    ec2 = boto3.client('ec2')
    
    request_type = event['RequestType']
    vpc_id = event['ResourceProperties']['VpcId']
    scope_id = event['ResourceProperties']['ScopeId']
    
    physical_id = 'ipam-wait'
    
    if request_type == 'Delete':
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': True,
        }
    
    try:
        response = ec2.get_ipam_resource_cidrs(
            IpamScopeId=scope_id,
            ResourceId=vpc_id,
        )
        
        print(f"IPAM Resource CIDRs: {response['IpamResourceCidrs']}")
        
        # Check if IPAM is monitoring both IPv4 and IPv6 CIDRs for this VPC
        ipv4_monitored = False
        ipv6_monitored = False
        
        for cidr_info in response['IpamResourceCidrs']:
            if ':' in cidr_info['ResourceCidr']:
                ipv6_monitored = True
            else:
                ipv4_monitored = True
        
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
        print(f"Error checking VPC CIDRs: {str(e)}")
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': False
        }
