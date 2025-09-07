import boto3
import json

def handler(event, context):
    print(f"Event: {json.dumps(event)}")
    
    region = event['ResourceProperties'].get('Region')
    ec2 = boto3.client('ec2', region_name=region) if region else boto3.client('ec2')
    
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
        
        if response['IpamResourceCidrs']:
            print("IPAM CIDRs found - resource ready")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': True,
            }
        else:
            print("No IPAM CIDRs found - waiting...")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': False
            }
            
    except Exception as e:
        print(f"Error checking IPAM CIDRs: {str(e)}")
        return {
            'PhysicalResourceId': physical_id,
            'IsComplete': False
        }
