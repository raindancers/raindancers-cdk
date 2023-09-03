import urllib3
import json
import os

http = urllib3.PoolManager()

url = os.environ['SLACKURL']

def lambda_handler(event, context):

    msg = {
        "channel": os.environ['CHANNELNAME'],
        "username": os.environ['USERNAME'],
        "text": event['Records'][0]['Sns']['Message'],
        "icon_emoji": ""
    }
    
    encoded_msg = json.dumps(msg).encode('utf-8')
    resp = http.request('POST',url, body=encoded_msg)

    print({
        "message": event['Records'][0]['Sns']['Message'], 
        "status_code": resp.status, 
        "response": resp.data
    })