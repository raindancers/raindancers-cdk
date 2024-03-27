import boto3
from pyzscaler import ZPA
import json
import os


autoscaling = boto3.client('autoscaling')
ec2 = boto3.client('ec2')
sm = boto3.client('secretsmanager')

def disable_component_to_drain_traffic(event, context):
    
    detail = event['detail']

    # find the private IP of the instance being scaled in
    private_ip = ec2.describe_instances(
        InstanceIds=[
            detail['EC2InstanceId']
        ]
    )['Reservations'][0]['Instances'][0]['PrivateIpAddress']

    #get the API Key 
    zpa_api_key = json.loads(sm.get_secret_value(SecretId=os.getenv('API_KEY_SECRET_NAME'))['SecretString'])
    print("ZPA API KEY:")
    print(zpa_api_key)
    zpa = ZPA(
        client_id=zpa_api_key['clientId'],
        client_secret=zpa_api_key['clientSecret'],
        customer_id=zpa_api_key['customerId'],
    )
    
    # disable the Component
    if os.getenv('TYPE') == 'AppConnector':

        connectors = zpa.connectors.list_connectors()
        target = next(connector for connector in connectors if connector["private_ip"] == private_ip)
        print(target['id'], target['control_channel_status'], target['enabled'])

        # disable connector.
        zpa.connectors.update_connector(target['id'], enabled=False)


    elif os.getenv('TYPE') == 'PrivateServiceEdge':
        
        edges = zpa.service_edges.list_service_edges()
        target = next(edge for edge in edges if edge["private_ip"] == private_ip)
        
        # disable connector.
        zpa.service_edges.update_service_edge(target['id'], enabled=False)
        
    else:
        raise ValueError("The Type does not exist")

    # pass output so for delete_component_continue can 
    return {

        'Target': target['id'],
        'StatusCode': 200,
        'Body': 'SUCESS',
        'LifecycleEventDetail': {
            'LifeCycleHookName': detail['LifecycleHookName'],
            'AutoscalingGroupName': detail['AutoScalingGroupName'],
            'LifecycleActionToken': detail['LifecycleActionToken'],
            'EC2InstanceId': detail['EC2InstanceId']
        }
    }
    

def delete_component_continue(event, context):
    
    payload = event['Payload']

    # Get the ZPA key
    zpa_api_key = json.loads(sm.get_secret_value(SecretId=os.getenv('API_KEY_SECRET_NAME'))['SecretString'])
    print("ZPA API KEY:")
    print(zpa_api_key)
    zpa = ZPA(
        client_id=zpa_api_key['clientId'],
        client_secret=zpa_api_key['clientSecret'],
        customer_id=zpa_api_key['customerId'],
    )

    # delete the component from Zscaler
    if os.getenv('TYPE') == 'AppConnector':

            zpa.connectors.delete_connector(payload['Target'])


    elif os.getenv('TYPE') == 'PrivateServiceEdge':
            
        zpa.service_edges.delete_service_edge(payload['Target'])
           
    else:
        raise ValueError("The Type does not exist")

    # complete the lifecycle event. 
    lifecycle = payload['LifecycleEventDetail']

    autoscaling.complete_lifecycle_action(
        LifecycleHookName=lifecycle['LifeCycleHookName'],
        AutoScalingGroupName=lifecycle['AutoScalingGroupName'],
        LifecycleActionToken=lifecycle['LifecycleActionToken'],
        LifecycleActionResult='CONTINUE',
        InstanceId=lifecycle['EC2InstanceId']
    )


