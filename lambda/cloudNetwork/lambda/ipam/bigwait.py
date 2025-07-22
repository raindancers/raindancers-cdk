#import boto3
import json
import time
from datetime import datetime, timezone

def handler(event, context):
    print(event)

    request_type = event['RequestType']
    
    if request_type in ['Delete', 'Update']:
        return {
            'PhysicalResourceId': 'bigwait',
            'IsComplete': True
        }
    
    if request_type == 'Create':
        
        props = event['ResourceProperties']
        start_time_str = props['StartTimer']
        timer_duration = int(props['TimerDuration'])
        
        # Parse the ISO string to datetime
        start_time = datetime.fromisoformat(start_time_str.replace('Z', '+00:00'))
        current_time = datetime.now(timezone.utc)
        end_time = start_time.timestamp() + timer_duration
        current_timestamp = current_time.timestamp()

        print('start_time', start_time)
        print('current_time', current_timestamp)
        print('end_time', end_time)

        # Calculate end time
        
        
        if current_timestamp >= end_time:
            print('wait is over')
            return {
                'PhysicalResourceId': 'bigwait',
                'IsComplete': True
            }
        else:
            print('wait some more')
            return {
                'PhysicalResourceId': 'bigwait',
                'IsComplete': False
            }
    
    raise Exception("Invalid RequestType")


# start_time = '2025-07-22T07:50:19.829Z'
# timer_duration = 400

# print(handler({
#     'RequestType': 'Create',
#     'ResourceProperties': {
#         'StartTimer': start_time,
#         'TimerDuration': timer_duration
#     }
# },{}
# ))

