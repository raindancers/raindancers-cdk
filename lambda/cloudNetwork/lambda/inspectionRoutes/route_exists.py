import boto3
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):
    """
    Create a route in Transit Gateway route table if it doesn't exist
    
    Properties:
    - Route: CIDR block
    - TgRouteTableId: Transit Gateway route table ID
    - AttachmentId: Transit Gateway attachment ID
    - Action: CREATE_ROUTE_IF_NOT_EXISTS
    """
    
    request_type = event['RequestType']
    properties = event['ResourceProperties']
    
    route_cidr = properties['Route']
    tg_route_table_id = properties['TgRouteTableId']
    attachment_id = properties['AttachmentId']
    
    logger.info(f"Processing route {route_cidr} in route table {tg_route_table_id}")
    
    if request_type in ['Create', 'Update']:
        ec2_client = boto3.client('ec2')
        
        # Check if route exists
        response = ec2_client.search_transit_gateway_routes(
            TransitGatewayRouteTableId=tg_route_table_id,
            Filters=[
                {
                    'Name': 'route-search.exact-match',
                    'Values': [route_cidr]
                }
            ]
        )
        
        route_exists = len(response['Routes']) > 0
        
        if not route_exists:
            logger.info(f"Creating route {route_cidr}")
            ec2_client.create_transit_gateway_route(
                DestinationCidrBlock=route_cidr,
                TransitGatewayRouteTableId=tg_route_table_id,
                TransitGatewayAttachmentId=attachment_id
            )
        else:
            logger.info(f"Route {route_cidr} already exists")
        
        return {
            'PhysicalResourceId': f"{tg_route_table_id}-{route_cidr}"
        }
    
    elif request_type == 'Delete':
        # Don't delete routes on stack deletion to avoid breaking other resources
        return {
            'PhysicalResourceId': f"{tg_route_table_id}-{route_cidr}"
        }
        
        
    