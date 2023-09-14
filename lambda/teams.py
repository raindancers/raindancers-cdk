import urllib3
import os
import json
import boto3
import time
from datetime import datetime, timedelta

http = urllib3.PoolManager() 

url = os.environ['TEAMSURL']
teams_image = os.environ['TEAMSIMAGE']
log_group_name = os.environ['LOGGROUPNAME']

# we need to managle up the dictionary to make it work with teams.  This probalby could be improved
# if need be, but it works for the purpose in hand
def teamsformatdict(d):
    formated = '<pre>\n'
    for k, v in d.items():
        if isinstance(v, dict):
            formated = formated + "\""+ k + "\"" + ': {' + "\n"
            for k2, v2 in v.items():
                formated = formated + "    " + "\"{0}\" : \"{1}\"".format(k2, v2) + "," +"\n"
            formated = formated + '},' + '\n'
        else:
            formated = formated + "\"{0}\" : \"{1}\"".format(k, v) + "," + "\n"
    formated = formated + '</pre>'
    
    return(formated)

def lambda_handler(event, context):
    
    logs = boto3.client("logs")

    subject = (event["Records"][0]["Sns"]["Subject"])
    message = (event["Records"][0]["Sns"]["Message"])
    
    if "ConsoleSignInWithoutMFA" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = "ConsoleLogin") && ($.additionalEventData.MFAUsed != "Yes")  && ($.userIdentity.type !="AssumedRole")  }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000

        print(queryString, startTime, endTime)

    elif "RootAccountUse" in subject:
        print('creating queryString')
        queryString = '{ $.userIdentity.type = "Root" && $.userIdentity.invokedBy NOT EXISTS && $.eventType != "AwsServiceEvent" }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000

        print(queryString, startTime, endTime)

    elif "IAMUserChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName=AddUserToGroup)||($.eventName=ChangePassword)||($.eventName=CreateAccessKey)||($.eventName=CreateUser)||($.eventName=UpdateAccessKey)||($.eventName=UpdateGroup)||($.eventName=UpdateUser)||($.eventName=AttachGroupPolicy)||($.eventName=AttachUserPolicy)||($.eventName=DeleteUserPolicy)||($.eventName=DetachGroupPolicy)||($.eventName=DetachUserPolicy)||($.eventName=PutUserPolicy) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000

        print(queryString, startTime, endTime)

    elif "iamUserChangesWithSSO" in subject:
        print('creating queryString')
        queryString = '{ (($.eventName=AddUserToGroup)||($.eventName=ChangePassword)||($.eventName=CreateAccessKey)||($.eventName=CreateUser)||($.eventName=UpdateAccessKey)||($.eventName=UpdateGroup)||($.eventName=UpdateUser)||($.eventName=AttachGroupPolicy)||($.eventName=AttachUserPolicy)||($.eventName=DeleteUserPolicy)||($.eventName=DetachGroupPolicy)||($.eventName=DetachUserPolicy)||($.eventName=PutUserPolicy) )&& ($.eventSource!="sso-directory.amazonaws.com") }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000

        print(queryString, startTime, endTime)

    elif "IAMRoleChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = DeleteRolePolicy) || ($.eventName = PutRolePolicy) || ($.eventName = AttachRolePolicy) || ($.eventName = DetachRolePolicy) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000

        print(queryString, startTime, endTime)

    elif "signInFailures" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    elif "DisabledCustomerKeys" in subject:
        print('creating queryString')
        queryString = '{ ($.eventSource = kms.amazonaws.com) && (($.eventName=DisableKey)||($.eventName=ScheduleKeyDeletion)) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    elif "s3PolicyChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventSource = s3.amazonaws.com) && (($.eventName = PutBucketAcl) || ($.eventName = PutBucketPolicy) || ($.eventName = PutBucketCors) || ($.eventName = PutBucketLifecycle) || ($.eventName = PutBucketReplication) || ($.eventName = DeleteBucketPolicy) || ($.eventName = DeleteBucketCors) || ($.eventName = DeleteBucketLifecycle) || ($.eventName = DeleteBucketReplication)) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)
    
    elif "securityGroupChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    elif "networkACLChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    elif "networkGWChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    elif "routeTableChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = CreateRoute) || ($.eventName = CreateRouteTable) || ($.eventName = ReplaceRoute) || ($.eventName = ReplaceRouteTableAssociation) || ($.eventName = DeleteRouteTable) || ($.eventName = DeleteRoute) || ($.eventName = DisassociateRouteTable) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    elif "vpcChanges" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }'
        startTime=int((datetime.now() - timedelta(minutes=5)).timestamp()) * 1000
        endTime=int(datetime.now().timestamp()) * 1000
        print(queryString, startTime, endTime)

    try:
    #if queryString doe'stn exsist this will fail, on purpose and will just create the generic result.
        queryString
        
        # build a query to look for triggering events from the last 5 minutes.
        filtered_logs = logs.filter_log_events(
            logGroupName=log_group_name,
            startTime=startTime,
            endTime=endTime,
            filterPattern=queryString,
        )
        
        parsed_response = ''
        for result in filtered_logs["events"]:
            parsed_response = parsed_response + teamsformatdict(json.loads(result["message"]))
        print(parsed_response)
        
        msg = {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            "themeColor": "0076D7",
            "summary": "SECURITY WARNING",
            "sections": [
                {
                    "activityTitle": subject,
                    "activitySubtitle": parsed_response,
                    "activityImage": teams_image
                }
            ]
        }
        encoded_msg = json.dumps(msg).encode('utf-8')
        resp = http.request('POST',url, body=encoded_msg)
        
        print({
                "status_code": resp.status, 
                "response": resp.data
            })
            
    
    # just send the generic alarm without a search
    except:

        msg = {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            "themeColor": "0076D7",
            "summary": "SECURITY WARNING",
            "sections": [
                {
                    "activityTitle": subject,
                    "activitySubtitle": message,
                    "activityImage": teams_image,
                }
            ]
        }
        encoded_msg = json.dumps(msg).encode('utf-8')
        resp = http.request('POST',url, body=encoded_msg)