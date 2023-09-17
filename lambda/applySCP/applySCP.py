import boto3
import os
import json

def lambda_handler(event, context):

    organizations = boto3.client('organizations')

    if 'source' in event.keys():
        if event['source'] == 'aws.events': # this was invoked by eventbridge
            account_name = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountName']
            account_id = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountId']

    scpId = json.loads(os.environ['SCP_ID'])

    for id in scpId:
        organizations.attach_policy(
            PolicyId=id,
            TargetId=account_id    
        )
