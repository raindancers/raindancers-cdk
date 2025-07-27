import boto3
import os

def on_event(event, context):
    print(event)

    request_type = event['RequestType']
    function = event["ResourceProperties"]["Function"]

    if function == 'TGWaiter': return transitgateway_is_ready(event, request_type)
    if function == 'CidrLookup': return vpc_subnet_lookup(event, request_type)
    if function == 'Ipv4CidrLookup': return vpc_ipv4_subnet_lookup(event, request_type)


    raise Exception("Invalid function type: %s" % function)

def vpc_ipv4_subnet_lookup(event, request_type):
    if request_type in ['Delete']:
        return { 'IsComplete': True } 
    else:
        ec2 = boto3.client('ec2')
        data = {}
        
        # Get VPC CIDR first
        vpc_info = ec2.describe_vpcs(VpcIds=[os.environ['VPC_ID']])['Vpcs'][0]
        vpc_cidr = vpc_info['CidrBlock']
        
        vpc_prefix = '.'.join(vpc_cidr.split('.')[:2])  # e.g., "10.0" from "10.0.0.0/16"
        data['VpcIpv4Prefix'] = vpc_prefix
        
        subnets = ec2.describe_subnets(Filters=[{'Name': 'vpc-id', 'Values': [os.environ['VPC_ID']]}])['Subnets']
        
        for subnet in subnets:
            group_name = None
            for tag in subnet.get('Tags', []):
                if tag['Key'] == 'aws-cdk:subnet-name':
                    group_name = tag['Value']
                    break
            
            if group_name:
                az = subnet['AvailabilityZone'][-1]
                key_ipv4 = f"{group_name}{az}"
                
                # Extract variable part and mask
                # Extract variable part (3rd and 4th octets) and mask
                subnet_cidr = subnet['CidrBlock']
                subnet_parts = subnet_cidr.split('/')[0].split('.')
                third_fourth = f"{subnet_parts[2]}.{subnet_parts[3]}"
                data[key_ipv4] = f"{third_fourth}"  # e.g., "0.0" or "1.128"
                
                   
        return {
            'IsComplete': True,
            'Data': data
        }


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
                az = subnet['AvailabilityZone'][-1]
                
                # IPv6 CIDR if available
                if 'Ipv6CidrBlockAssociationSet' in subnet and subnet['Ipv6CidrBlockAssociationSet']:
                    key_ipv6 = f"{group_name}{az}"
                    ipv6_full = subnet['Ipv6CidrBlockAssociationSet'][0]['Ipv6CidrBlock'].split('/')[0]
                    data[key_ipv6] = ipv6_full.split(':')[3]  # Just the 4th group (variable part)

                if 'VpcCidr' not in data:
                    data['VpcCidr'] = subnet['Ipv6CidrBlockAssociationSet'][0]['Ipv6CidrBlock'][:14]

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
