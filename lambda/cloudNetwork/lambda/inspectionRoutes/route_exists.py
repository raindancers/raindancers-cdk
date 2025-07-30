import boto3
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):
    """
    Check if a route exists in a Transit Gateway route table
    
    Properties:
    - Route: CIDR block to check
    - TgRouteTableId: Transit Gateway route table ID
    
    Returns:
    - RouteExists: 'True' or 'False'
    """
    
    
    request_type = event['RequestType']
    properties = event['ResourceProperties']
    
    route_cidr = properties['Route']
    tg_route_table_id = properties['TgRouteTableId']
    
    logger.info(f"Checking route {route_cidr} in route table {tg_route_table_id}")
    
    if request_type in ['Create', 'Update']:
        ec2_client = boto3.client('ec2')
        
        # Search for the route in the transit gateway route table
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
        logger.info(f"Route {route_cidr} exists: {route_exists}")
        
        return {
            'PhysicalResourceId': f"{tg_route_table_id}-{route_cidr}",
            'Data': {
                'RouteExists': 'True' if route_exists else 'False'
            }
        }
    
    elif request_type == 'Delete':
        # Nothing to do on delete
        return {}
        
        
    