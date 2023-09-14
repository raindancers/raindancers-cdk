import urllib3
import os
import json
import boto3
import time
from datetime import datetime, timedelta

http = urllib3.PoolManager() 

url = os.environ['TEAMSURL']
teams_image = os.environ['TEAMSIMAGE']

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
        start_query_response = logs.start_query(
            logGroupName='aws-controltower/CloudTrailLogs',
            startTime=int((datetime.today() - timedelta(minutes=5)).timestamp()),
            endTime=int(datetime.now().timestamp()),
            queryString=queryString,
            limit=10,
        )
        
        query_id = start_query_response["queryId"]
        
        response = {}
        while response == {} or response["status"] == "Running":
            print("Waiting for query to complete ...")
            time.sleep(1)
            response = logs.get_query_results(queryId=query_id)
        
        parsed_response = []    
        for result in range(len(response["results"])):
            element = {
                "timestamp": response["results"][result][0]["value"],
                "username": response["results"][result][1]["value"],
                "action": response["results"][result][2]["value"],
                "service": response["results"][result][3]["value"],
            }

            parsed_response.append(element)
        
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
