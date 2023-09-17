import boto3

def lambda_handler(event, context):

    support = boto3.client('support', region_name='us-east-1')

    if 'source' in event.keys():
        if event['source'] == 'aws.events': # this was invoked by eventbridge
            account_name = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountName']
            account_id = event['detail']['serviceEventDetails']['createManagedAccountStatus']['account']['accountId']

    response = support.create_case(
        subject='Enable Enterprise Support on new Accounts',
        severityCode='low',
        categoryCode='other-account-issues',
        serviceCode='customer-account',
        communicationBody= f"""
        Hi AWS Support, We have just created a new account: {account_id}, which is part of 
        the same support plan as this Payer account. Can you please add this new account to the plan.
        ** Please Note ** This case was created automatically, as part of an account creating process.
        Please resolve, and close the case when done, unless there a problem """,
        ccEmailAddresses=os.environ['SUPPORT_EMAIL']
        language='en',
        issueType='customer-service'
    )

    # Print Case ID to return.

    case = support_client.describe_cases(
        caseIdList=[response['caseId']]
    )

    print(f'Case {case['cases'][0]['displayId']} opened for accounts {accounts}.')

