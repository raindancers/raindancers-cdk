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

def lambda_handler(event, context):
    
    logs = boto3.client("logs")

    subject = (event["Records"][0]["Sns"]["Subject"])
    message = (event["Records"][0]["Sns"]["Message"])
    
    if "ConsoleSignInWithoutMFA" in subject:
        print('creating queryString')
        queryString = '{ ($.eventName = "ConsoleLogin") && ($.additionalEventData.MFAUsed != "Yes")  && ($.userIdentity.type !="AssumedRole")  }'
    
    try:
        queryString
        
        # build a query to look for triggering events from the last 5 minutes.
        filtered_logs = logs.filter_log_events(
            logGroupName=log_group_name,
            startTime=int((datetime.today() - timedelta(minutes=5)).timestamp()),
            endTime=int(datetime.now().timestamp()),
            queryString=queryString,
            limit=10,
        )
        
        parsed_response = []    
        for result in filtered_logs["events"]:
            parsed_response.append(
                { 
                    "timestamp": result["timestamp"],
                    "message": result["message"]        
                }
            )
        
        msg = {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            "themeColor": "0076D7",
            "summary": "SECURITY WARNING",
            "sections": [
                {
                    "activityTitle": subject,
                    "activitySubtitle": json.dumps(parsed_response),
                    "activityImage": teams_image
                }
            ]
        }
        encoded_msg = json.dumps(msg).encode('utf-8')
        resp = http.request('POST',url, body=encoded_msg)
        
        print({
            "message": encoded_msg, 
            "status_code": resp.status, 
            "response": resp.data
        })

    
    # just send the generic alarm without a search
    except:

        print('generic')

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
        
        print({
            "message": encoded_msg, 
            "status_code": resp.status, 
            "response": resp.data
        })
