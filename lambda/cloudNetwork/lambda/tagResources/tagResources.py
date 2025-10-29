import logging
from typing import Dict
from urllib import response
import boto3
from botocore.exceptions import ClientError
import os
import json
import time

logger = logging.getLogger(__name__)

sts = boto3.client('sts')

def create_tags_with_retry(ec2, resource_id, tags, max_retries=6):
	"""Retry CreateTags with exponential backoff for RAM propagation delays"""
	for attempt in range(max_retries):
		try:
			ec2.create_tags(Resources=[resource_id], Tags=tags)
			return
		except ClientError as e:
			if e.response['Error']['Code'] == 'InvalidSubnetID.NotFound' and attempt < max_retries - 1:
				delay = 2 ** attempt  # 1s, 2s, 4s, 8s, 16s, 32s
				print(f"Resource {resource_id} not found, retrying in {delay}s (attempt {attempt + 1}/{max_retries})")
				time.sleep(delay)
			else:
				raise

def on_event(event, context):
	
	# it is cloudformation
	if 'RequestType' in event.keys():
		request_type = event['RequestType']
		if request_type == 'Create': return on_create(event)
		if request_type == 'Update': return on_update(event)
		if request_type == 'Delete': return on_delete(event)
		raise Exception("Invalid request type: %s" % request_type)

	else:
		raise ValueError('Not a valid Request')


def on_create(event):

	props = event['ResourceProperties']

	vpc = props['VpcId']
	subnet_ids = props['SubnetIds']
	role_name = props['RoleName']
	accounts = props['Accounts']
	physical_id = f"tag-share-{vpc}-{'-'.join(sorted(accounts))}"

	
	ec2_local = boto3.client('ec2')
	vpc_tags= ec2_local.describe_tags(
		Filters=[
			{
				'Name': 'resource-id',
				'Values': [
					vpc,
				]
			},
		],
	)['Tags']
	
	for tag in vpc_tags[:]:
		# delete keys that start with aws:  tag   {"Key": "keyname", "Value": "value"}

		if tag['Key'].startswith('aws:'):
			vpc_tags.remove(tag)
			
		del tag['ResourceId']
		del tag['ResourceType']
	
	
	print('VpcTags', vpc_tags) #list of dicts

	subnets = []
	for subnet in subnet_ids:

		subnet_tags = ec2_local.describe_tags(
			Filters=[
				{
					'Name': 'resource-id',
					'Values': [
						subnet,
					]
				},
			],
		)['Tags']

		for tag in subnet_tags[:]:
			
			if tag['Key'].startswith('aws:'):
				subnet_tags.remove(tag)
				
			del tag["ResourceId"]
			del tag["ResourceType"]
		

		subnets.append({'SubnetId': subnet, "Tags": subnet_tags})
		
	print('Subnets', subnets)

	for account in accounts: 

		# get credentials
		remote_credentials=sts.assume_role(
			RoleArn=f"arn:aws:iam::{account}:role/{role_name}",
			RoleSessionName="setTags"
		)["Credentials"]
		

		ec2 = boto3.client(
    		'ec2',
    		aws_access_key_id=remote_credentials['AccessKeyId'],
    		aws_secret_access_key=remote_credentials['SecretAccessKey'],
    		aws_session_token=remote_credentials['SessionToken'],
		)

		# copy the vpc_tags from the source acount to the sharedtoAccount
		create_tags_with_retry(ec2, vpc, vpc_tags)

		# copy the subnet Tags from the source account to the sharedAccount
		for subnet in subnets:
			create_tags_with_retry(ec2, subnet['SubnetId'], subnet['Tags'])

	return {'PhysicalResourceId': physical_id}


def on_update(event):
	return {}

def on_delete(event):
	return {}
