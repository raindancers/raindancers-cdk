# Fix: Routing Without Network Firewall

## Problem
The `NestedRouteStack` (Router) requires firewall endpoints when any route uses `NextHop.FIREWALL_ENDPOINT`, even if you don't want firewall inspection.

## Root Cause
Your route configuration likely contains routes with `NextHop.FIREWALL_ENDPOINT` in the `addPersonalityRoutes()` method.

## Solution 1: Check Route Configuration
Examine what `network.addPersonalityRoutes()` returns:

```typescript
// Debug the routes being created
const routes = network.addPersonalityRoutes();
console.log('Routes:', routes);
```

Look for routes with `nextHop: NextHop.FIREWALL_ENDPOINT`.

## Solution 2: Override Routes for ap-southeast-6
Create custom routes without firewall inspection:

```typescript
// Custom routes without firewall for ap-southeast-6
const customRoutes = [
  {
    subnetGroup: dmz,
    routes: [
      {
        destCidr: '0.0.0.0/0',
        nextHop: NextHop.INTERNET_GATEWAY,
        description: 'Default route to IGW'
      },
      {
        destCidr: '10.0.0.0/8',
        nextHop: NextHop.TRANSITGATEWAY,
        description: 'Private networks via TGW'
      }
    ]
  }
];

new cloudNetwork.NestedRouteStack(this, 'routing', {
  vpc: network,
  subnetRoutes: customRoutes, // Use custom routes instead
  internetGateway: network.igw,
  internetGatewayRoutes: [dmz],
  transitGatewayId: props.transitGateway.id,
  transitGatewayAttachmentId: network.transitGatewayAttachment,
});
```

## Solution 3: Modify CloudNetwork for No-Firewall Regions
Add a parameter to skip firewall routes:

```typescript
// In CloudNetwork construct
addPersonalityRoutes(skipFirewall?: boolean): RouterGroup[] {
  // Return routes without FIREWALL_ENDPOINT nextHop when skipFirewall=true
}
```

The issue is in your route definitions, not the Router construct itself.