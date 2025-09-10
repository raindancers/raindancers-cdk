import boto3
import json

def handler(event, context):
    cf = boto3.client('cloudformation')
    
    if event['RequestType'] == 'Create' or event['RequestType'] == 'Update':
        cf.create_stack_instances(
            StackSetName=event['ResourceProperties']['StackSetName'],
            Accounts=event['ResourceProperties']['Accounts'],
            Regions=event['ResourceProperties']['Regions'],
            OperationPreferences={
                'RegionConcurrencyType': 'PARALLEL',
                'MaxConcurrentPercentage': 100
            }
        )
    elif event['RequestType'] == 'Delete':
        cf.delete_stack_instances(
            StackSetName=event['ResourceProperties']['StackSetName'],
            Accounts=event['ResourceProperties']['Accounts'],
            Regions=event['ResourceProperties']['Regions'],
            RetainStacks=False
        )
    
    return {'PhysicalResourceId': 'stack-instances'}