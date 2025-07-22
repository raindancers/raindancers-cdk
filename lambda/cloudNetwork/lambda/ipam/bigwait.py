import boto3
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
        
        # Calculate end time
        end_time = start_time.timestamp() + timer_duration
        current_timestamp = current_time.timestamp()
        
        if current_timestamp >= end_time:
            return {
                'PhysicalResourceId': 'bigwait',
                'IsComplete': True
            }
        else:
            return {
                'PhysicalResourceId': 'bigwait',
                'IsComplete': False
            }
    
    raise Exception("Invalid RequestType")