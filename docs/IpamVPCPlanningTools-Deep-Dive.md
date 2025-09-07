# IpamVPCPlanningTools Deep Dive

## Overview
`IpamVPCPlanningTools` is the core construct that creates IPAM planning pools for VPC subnet allocation. It handles both IPv4 and IPv6 address management and supports cross-region IPAM deployments.

## Purpose
Creates "planning pools" that are child pools of your main IPAM pools, specifically configured for a single VPC. These planning pools automatically inherit the VPC's CIDR blocks and are used to allocate IP addresses to individual subnets.

## Key Concepts

### What are Planning Pools?
- **Parent Pools**: Your main IPAM pools (e.g., 10.0.0.0/8 for IPv4, 2001:db8::/32 for IPv6)
- **Planning Pools**: Child pools created for each VPC that inherit specific CIDR blocks
- **Subnet Allocation**: Individual subnets get their CIDRs from these planning pools

### Why Planning Pools?
1. **Isolation**: Each VPC gets its own dedicated pools
2. **Automatic Allocation**: Pools automatically inherit VPC CIDR blocks
3. **Subnet Management**: Provides pool IDs for subnet creation
4. **Cross-Region Support**: Can be created in different regions than the VPC

## Detailed Flow

### 1. IPv6 CIDR Association
```
IPv6 CIDR Association
├── useDirectAPICalls?
│   ├── Yes → Custom Resource: associateVpcCidrBlock (cross-region)
│   └── No → CloudFormation: CfnVPCCidrBlock
├── Parameters:
│   ├── VpcId: The VPC to associate with
│   ├── Ipv6IpamPoolId: Parent IPv6 pool ID
│   └── Ipv6NetmaskLength: /56 (default)
└── Result: VPC gets IPv6 CIDR block from IPAM
```

### 2. IPAM Waiter (First Waiter)
```
IPAM Waiter Creation
├── Purpose: Wait for IPv6 CIDR allocation to complete
├── Lambda Function: ipv6ipam.handler
├── API Call: ec2:GetIpamResourceCidrs
├── Parameters:
│   ├── VpcId: The VPC to check
│   ├── ScopeId: IPv6 IPAM scope ID
│   └── Region: IPAM region (cross-region)
├── Timeout: 15 minutes
└── Success Condition: VPC has IPv6 CIDR allocated
```

### 3. IPv6 Planning Pool Creation
```
IPv6 Planning Pool
├── useDirectAPICalls?
│   ├── Yes → Custom Resource: createIpamPool (cross-region)
│   └── No → CloudFormation: CfnIPAMPool
├── Configuration:
│   ├── IpamScopeId: IPv6 scope
│   ├── AddressFamily: ipv6
│   ├── Locale: VPC region (where pool will be used)
│   ├── SourceIpamPoolId: Parent IPv6 pool
│   ├── AutoImport: true
│   ├── AwsService: ec2
│   └── SourceResource: VPC details
├── Dependencies: VPC + IPAM Waiter
└── Result: IPv6 planning pool for subnet allocation
```

### 4. IPv6 Pool CIDR Provisioning
```
IPv6 Pool CIDR Provisioning
├── useDirectAPICalls?
│   ├── Yes → Custom Resource: provisionIpamPoolCidr (cross-region)
│   └── No → CloudFormation: CfnIPAMPoolCidr
├── Parameters:
│   ├── IpamPoolId: IPv6 planning pool ID
│   └── Cidr: VPC's IPv6 CIDR block
├── Dependencies: IPv6 CIDR Association
└── Result: Planning pool has VPC's IPv6 CIDR available
```

### 5. IPv4 Planning Pool Creation
```
IPv4 Planning Pool
├── useDirectAPICalls?
│   ├── Yes → Custom Resource: createIpamPool (cross-region)
│   └── No → CloudFormation: CfnIPAMPool
├── Configuration:
│   ├── IpamScopeId: IPv4 scope
│   ├── AddressFamily: ipv4
│   ├── Locale: VPC region
│   ├── SourceIpamPoolId: Parent IPv4 pool
│   └── SourceResource: VPC details
├── Dependencies: IPAM Waiter
└── Result: IPv4 planning pool for subnet allocation
```

### 6. IPv4 Pool CIDR Provisioning
```
IPv4 Pool CIDR Provisioning
├── useDirectAPICalls?
│   ├── Yes → Custom Resource: provisionIpamPoolCidr (cross-region)
│   └── No → CloudFormation: CfnIPAMPoolCidr
├── Parameters:
│   ├── IpamPoolId: IPv4 planning pool ID
│   └── Cidr: VPC's IPv4 CIDR block
└── Result: Planning pool has VPC's IPv4 CIDR available
```

### 7. Pool CIDR Waiter (Second Waiter)
```
Pool CIDR Waiter Creation
├── Purpose: Wait for both pools to have CIDRs available
├── Lambda Function: poolready.handler
├── API Call: ec2:GetIpamPoolCidrs
├── Parameters:
│   ├── Ipv4PoolId: IPv4 planning pool ID
│   ├── Ipv6PoolId: IPv6 planning pool ID
│   └── Region: IPAM region (cross-region)
├── Timeout: 30 minutes
├── Success Condition: Both pools have at least one CIDR
└── Result: Pools ready for subnet allocation
```

## Cross-Region Behavior

### When useDirectAPICalls = true
- All IPAM operations use `AwsCustomResource` with `region` parameter
- Lambda functions make API calls to IPAM region (e.g., ap-southeast-2)
- VPC remains in local region (e.g., ap-southeast-6)
- Custom resources handle the cross-region complexity

### When useDirectAPICalls = false
- Uses standard CloudFormation resources
- All resources created in same region as stack
- Only works in regions with full IPAM CloudFormation support

## Key Properties

### Inputs (IpamPlanningTools interface)
```typescript
interface IpamPlanningTools {
  ipamConfig: IpamConfig;           // IPAM configuration
  vpc: ec2.CfnVPC;                  // The VPC to create pools for
  vpcName: string;                  // VPC name for descriptions
  defaultipv4allocation?: number;   // Default IPv4 subnet mask
  ipv6NetmaskLength?: number;       // IPv6 VPC mask (default /56)
  useDirectAPICalls?: boolean;      // Cross-region mode
  regionToCreatePlanningPools?: string; // Target region
}
```

### Outputs (IIpamPlanningTool interface)
```typescript
interface IIpamPlanningTool {
  ipv6PlanningPool: ec2.CfnIPAMPool | cr.AwsCustomResource;
  ipv4PlanningPool: ec2.CfnIPAMPool | cr.AwsCustomResource;
  waiter: core.CustomResource;
}
```

## Usage in Subnet Creation

When creating subnets, the CloudNetwork construct uses:
```typescript
const subnet = new ec2.CfnSubnet(this, `${subnetConfig.name}-${zone}`, {
  vpcId: this.vpc.attrVpcId,
  availabilityZone: zone,
  ipv6IpamPoolId: this.getPoolId(ipamPools.ipv6PlanningPool, useDirectAPICalls),
  ipv6NetmaskLength: 64, // /64 for subnets
  ipv4IpamPoolId: this.getPoolId(ipamPools.ipv4PlanningPool, useDirectAPICalls),
  ipv4NetmaskLength: subnetConfig.ipv4mask,
  // ... other properties
});
```

## Error Scenarios

### Common Issues
1. **IPAM Waiter Timeout**: IPv6 CIDR allocation fails or takes too long
2. **Pool CIDR Waiter Timeout**: Pools don't receive CIDRs from VPC
3. **Cross-Region API Failures**: IPAM APIs not supported in target region
4. **Permission Issues**: Lambda functions lack required IPAM permissions

### Troubleshooting
- Check CloudWatch logs for waiter Lambda functions
- Verify IPAM region supports required APIs
- Ensure proper IAM permissions for cross-region calls
- Validate IPAM pool IDs and scope IDs are correct

## Dependencies

### Creation Order
1. VPC creation
2. IPv6 CIDR association
3. IPAM waiter (waits for IPv6 allocation)
4. Planning pools creation (depends on IPAM waiter)
5. Pool CIDR provisioning
6. Pool CIDR waiter (waits for pool readiness)
7. Subnet creation (depends on pool CIDR waiter)

### CloudFormation Dependencies
- Planning pools depend on VPC and IPAM waiter
- Pool CIDR provisioning depends on CIDR association
- Final waiter depends on all pool operations
- Subnets depend on final waiter completion

## Benefits

1. **Automatic IP Management**: No manual CIDR planning required
2. **Cross-Region Support**: Works in regions without IPAM CloudFormation support
3. **Dual-Stack**: Handles both IPv4 and IPv6 automatically
4. **Isolation**: Each VPC gets dedicated planning pools
5. **Scalability**: Supports up to 200 subnets per VPC
6. **Reliability**: Comprehensive waiting and error handling