import urllib3
import os
import json
http = urllib3.PoolManager() 

url = os.environ['TEAMSURL']

def lambda_handler(event, context):

    eventname = event['detail']['eventName']
    user = event['detail']['userIdentity']['type']
    targetAccount = event['account']

    msg = {
        "text":  f"**SECURITY-WARNING**, root user has logged into account {targetAccount}"
    }
    encoded_msg = json.dumps(msg).encode('utf-8')
    resp = http.request('POST',url, body=encoded_msg)
    
    print({
        "message": encoded_msg, 
        "status_code": resp.status, 
        "response": resp.data
    })