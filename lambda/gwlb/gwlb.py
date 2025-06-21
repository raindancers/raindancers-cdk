import boto3
import json


    # {
    #     'Endpoints': [
    #         {'AvailablityZone': 'ap-southeast-2a', 'EndpointId': 'vpce-052a857719dd775f9'},
    #         {'AvailablityZone': 'ap-southeast-2b', 'EndpointId': 'vpce-0ece688aca35d0825'}
    #     ]
    # }

def handler(event, context):
    if event['RequestType'] == 'Delete':
        return {'PhysicalResourceId': 'delete'}

    props = event['ResourceProperties']

        
    session = boto3.Session(profile_name='network', region_name = 'ap-southeast-2')
    elbv2 = session.client('elbv2')
    ec2 = session.client('ec2')

    # elbv2 = boto3.client('elbv2')
    # ec2 = boto3.client('ec2')
    
    # Find VPC endpoints related to the Gateway Load Balancer
    vpc_endpoints = ec2.describe_vpc_endpoints(
        Filters=[
            {'Name': 'tag:Name', 'Values': [props['Name']]},
        ]
    )['VpcEndpoints']



    for endpoint in vpc_endpoints:

        if ec2.describe_subnets(SubnetIds=[endpoint['SubnetIds'][0]])['Subnets'][0]['AvailabilityZone'] == props['AvailabilityZone']:

            return {
                'PhysicalResourceId': props['Name'],
                'Data': {
                    'Endpoint': endpoint['VpcEndpointId']
                }
            }


