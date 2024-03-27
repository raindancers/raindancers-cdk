import boto3
from pyzscaler import ZPA
import json
import os

#https://pyzscaler.readthedocs.io/en/latest/zs/zpa/app_segments.html

sm = boto3.client('secretsmanager')

def on_event(event, context):
    print(event)
    request_type = event['RequestType']
    if request_type == 'Create': return on_create(event)
    if request_type == 'Update': return on_update(event)
    if request_type == 'Delete': return on_delete(event)
    raise Exception("Invalid request type: %s" % request_type)

def on_create(event):
    props = event['ResourceProperties']
    zpa_api_key = json.loads(sm.get_secret_value(SecretId=os.getenv('API_KEY_SECRET_NAME'))['SecretString'])
    zpa = ZPA(
        client_id=zpa_api_key['clientId'],
        client_secret=zpa_api_key['clientSecret'],
        customer_id=zpa_api_key['customerId'],
    )
  
    # first create a segment, so we can modifiy it. 
    # the zscaler API has an inconsistent use of tcp_ports 
    # in its API.

    create_segment = zpa.app_segments.add_segment(
        name = props['SegmentName'],
        domain_names = ['not.real.domain.com'],
        segment_group_id = props['SegmentGroupId'],
        tcp_ports = ['443','443'],
        server_group_ids = [props['ServerGroupId']],
        description = props['Description']
    )

    if 'TcpPorts' in props.keys(): 
        tcp_ports = []
        for pairs in props['TcpPorts']:
            tcp_ports.append(tuple(pairs))   
    else:
        tcp_ports = None

    if 'UdpPorts' in props.keys():
        tcp_ports = []
        for pairs in props['UdpPorts']:
            tcp_ports.append(tuple(pairs))  
    else:
        udp_ports = None


    segment = zpa.app_segments.update_segment(
        segment_id = create_segment['id'],
        domain_names = props['DomainNames'],
        tcp_ports = tcp_ports,
        udp_ports = udp_ports
    )

    return { 'PhysicalResourceId': segment['id'] }


def on_update(event):
    zpa_api_key = json.loads(sm.get_secret_value(SecretId=os.getenv('API_KEY_SECRET_NAME'))['SecretString'])
    zpa = ZPA(
        client_id=zpa_api_key['clientId'],
        client_secret=zpa_api_key['clientSecret'],
        customer_id=zpa_api_key['customerId'],
    )
    physical_id = event['PhysicalResourceId']
    props = event['ResourceProperties']

    if 'TcpPorts' in props.keys():
        tcp_ports = props['TcpPorts']
    else:
        tcp_ports = None

    if 'UdpPorts' in props.keys():
        udp_ports = props['UdpPorts']
    else:
        udp_ports = None

    zpa.app_segments.update_segment(
        segment_id = physical_id,
        domain_names = props['DomainNames'],
        tcp_ports = tcp_ports,
        udp_ports = udp_ports
    )
  

def on_delete(event):
    zpa_api_key = json.loads(sm.get_secret_value(SecretId=os.getenv('API_KEY_SECRET_NAME'))['SecretString'])
    zpa = ZPA(
        client_id=zpa_api_key['clientId'],
        client_secret=zpa_api_key['clientSecret'],
        customer_id=zpa_api_key['customerId'],
    )
    props = event["ResourceProperties"]
    zpa.app_segments.delete_segment(
        segment_id = event["PhysicalResourceId"],
        force_delete = True,
    )



