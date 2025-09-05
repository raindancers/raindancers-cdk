import boto3
import json

def handler(event, context):

    # Get region from properties, default to current region
    region = event['ResourceProperties'].get('Region')
    ec2 = boto3.client('ec2', region_name=region) if region else boto3.client('ec2')
    
    request_type = event['RequestType']
    vpc_id = event['ResourceProperties']['VpcId']
    scope_id = event['ResourceProperties']['ScopeId']
    
    if request_type == 'Delete': return {
        'IsComplete': True,
    }
        
    print(event)

    try:
        response = ec2.get_ipam_resource_cidrs(
            IpamScopeId=scope_id,
            ResourceId=vpc_id,
        )
        
        if response['IpamResourceCidrs']:
            return {
                'PhysicalResourceId': 'ipam-wait',
                'IsComplete': True,
            }
        else:
            return {
                'PhysicalResourceId': 'ipam-wait',
                'IsComplete': False
            }
            
    except Exception as e:
        return {
            'PhysicalResourceId': 'ipam-wait',
            'IsComplete': False
        }