import boto3
import json

def handler(event, context):

    ec2 = boto3.client('ec2')
    
    request_type = event['RequestType']
    vpc_id = event['ResourceProperties']['VpcId']
    scope_id = event['ResourceProperties']['ScopeId']
    
    if request_type == 'Delete': return {
        'IsComplete': True,
    }
        
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