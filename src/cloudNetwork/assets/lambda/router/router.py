import boto3
import os

def on_event(event, context):
    print(event)

    request_type = event['RequestType']
    function = event["ResourceProperties"]["Function"]

    if function == 'TGWaiter': return transitgateway_is_ready(event, request_type)
    if function == 'CidrLookup': return vpc_subnet_lookup(event, request_type)

    raise Exception("Invalid function type: %s" % function)

def vpc_subnet_lookup(event, request_type):
    if request_type in ['Delete']:
        return { 'IsComplete': True } 
    else:
        ec2 = boto3.client('ec2')
        data = {}
        subnets = ec2.describe_subnets(Filters=[{'Name': 'vpc-id', 'Values': [os.environ['VPC_ID']]}])['Subnets']

        for subnet in subnets:
            # Get subnet group name from tags
            group_name = None
            for tag in subnet.get('Tags', []):
                if tag['Key'] == 'aws-cdk:subnet-name':
                    group_name = tag['Value']
                    break
            
            if group_name:
                az = subnet['AvailabilityZone']
                
                # IPv4 CIDR
                key_ipv4 = f"{group_name}_{az}_ipv4"
                data[key_ipv4] = subnet['CidrBlock']
                
                # IPv6 CIDR if available
                if 'Ipv6CidrBlockAssociationSet' in subnet and subnet['Ipv6CidrBlockAssociationSet']:
                    key_ipv6 = f"{group_name}_{az}_ipv6"
                    data[key_ipv6] = subnet['Ipv6CidrBlockAssociationSet'][0]['Ipv6CidrBlock']

        return {
            'IsComplete': True,
            'Data': data
        }
        
def transitgateway_is_ready(event, request_type):
    ec2 = boto3.client('ec2')

    if request_type in ['Delete', 'Update']:
        return { 'IsComplete': True }
    else:
        tg_state = ec2.describe_transit_gateways(
            TransitGatewayIds=[os.environ['TRANSITGATEWAY_ID']]
        )['TransitGateways'][0]['State']

        attachment_state = ec2.describe_transit_gateway_vpc_attachments(
            TransitGatewayAttachmentIds=[os.environ['TRANSITGATEWAY_ATTACHMENT_ID']]
        )['TransitGatewayVpcAttachments'][0]['State']

        if attachment_state == 'available' and tg_state == 'available':
            return { 'IsComplete': True }
        else:
            return { 'IsComplete': False }
