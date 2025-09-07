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
        response = ec2.describe_vpcs(VpcIds=[vpc_id])
        vpc = response['Vpcs'][0]
        
        has_ipv4 = bool(vpc.get('CidrBlock'))
        has_ipv6 = bool(vpc.get('Ipv6CidrBlockAssociationSet'))
        
        print(f"VPC {vpc_id}: IPv4={has_ipv4}, IPv6={has_ipv6}")
        
        if has_ipv4 and has_ipv6:
            print("VPC has both IPv4 and IPv6 CIDRs - resource ready")
            return {
                'PhysicalResourceId': physical_id,
                'IsComplete': True,
            }
        else:
            print("VPC missing IPv4 or IPv6 CIDRs - waiting...")
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
