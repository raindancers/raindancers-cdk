import logging
from typing import Dict
from urllib import response
import boto3
import os
import json

logger = logging.getLogger(__name__)

sts = boto3.client('sts')

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
	region = props['region']

	
	ec2_local = boto3.client('ec2')
	paginator = ec2_local.get_paginator('describe_tags')

	vpc_tags = paginator.paginate(
		Filters=[
			{
				'Name': 'resource-id',
				'Values': [
					vpc,
				]
			},
		],
	)["Tags"]
	
	# remove the keys we dont' want
	for tag in vpc_tags:
		del tag["ResourceId"]
		del tag["ResourceType"]


	# 
	subnets = []
	for subnet in subnet_ids:

		subnet_tags = paginator.paginate(
			Filters=[
				{
					'Name': 'resource-id',
					'Values': [
						vpc,
					]
				},
			],
		)["Tags"]

		for tag in subnet_tags:
			del tag["ResourceId"]
			del tag["ResourceType"]


		subnets.push(
			{
				'SubnetId': subnet,
				'Tags': subnet_tags
			}
		)


	for account in accounts: 

		# get credentials
		remote_credentials=sts_client.assume_role(
			RoleArn=f"arn:aws:iam::{account}:role/{role_name}",
			RoleSessionName="setTags"
		)['Credentials']

		# create a session
		session = boto3.session.Session(
			aws_access_key_id=remote_credentials['AccessKeyId'],
			aws_secret_access_key=credentials['SecretAccessKey'],
			aws_session_token=credentials['SessionToken'],
			region_name=region,
		),

		ec2 = session.client("ec2")

		# copy the vpc_tags from the source acount to the sharedtoAccount
		ec2.create_tags(
			Resources=[
				vpc,
			],
			Tags= vpc_tags		
		)

		# copy the subnet Tags from the source account to the sharedAccount
		for subnet in subnets:
			ec2.create_tags(
				Resources=[
					subnet['SubnetId']
				],
				Tags = subnet['Tags']
			)



def on_update(event):

	props = event['ResourceProperties']


def on_delete(event):

	props = event['ResourceProperties']
