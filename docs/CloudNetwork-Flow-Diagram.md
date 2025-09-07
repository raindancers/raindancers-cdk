# CloudNetwork Construct Flow Diagram

## Overview
The CloudNetwork construct creates a dual-stack VPC with IPAM-managed IP addressing, supporting cross-region IPAM deployments and automatic subnet/routing configuration.

## Main Flow

### 1. Initialization Phase
```
CloudNetwork Constructor
├── Validate Props
├── Set Stack Environment (account/region)
├── Store Configuration (AZs, IPAM config, subnet configs)
└── Continue to VPC Creation
```

### 2. VPC Creation Phase
```
VPC Creation
├── Create VPC with IPAM IPv4 allocation
├── Set VPC ID, ARN, CIDR block
├── Establish internet connectivity dependency
└── Continue to Gateway Setup
```

### 3. Gateway Setup Phase
```
Gateway Setup
├── Create Internet Gateway? (default: true)
│   ├── Yes → Attach Internet Gateway
│   └── No → Skip
└── Continue to IPAM Planning
```

### 4. IPAM Planning Phase
```
IPAM Planning Tools Creation
├── Associate IPv6 CIDR Block (cross-region if needed)
├── Create IPAM Waiter (checks IPv6 CIDR allocation)
├── Create IPv6 Planning Pool (in IPAM region)
├── Provision IPv6 Pool CIDR
├── Create IPv4 Planning Pool (in IPAM region)
├── Provision IPv4 Pool CIDR
└── Create Pool CIDR Waiter (checks pool readiness)
```

**Cross-Region Behavior:**
- If `useDirectAPICalls` is true, all IPAM operations use custom resources with `region` parameter
- Custom resources make API calls to IPAM region (e.g., ap-southeast-2)
- VPC remains in local region (e.g., ap-southeast-6)

### 5. Subnet Configuration Processing
```
Process Subnet Configurations
├── Validate each subnet config
├── Convert personality to subnetType if needed
├── Ensure unique names and valid properties
└── Continue to Optional Wait
```

### 6. Optional Wait Phase
```
Wait Duration Check
├── Wait Duration specified?
│   ├── Yes → Create Big Wait Custom Resource
│   └── No → Skip
└── Continue to Subnet Creation
```

### 7. Subnet and Route Creation Phase
```
Create Subnets and Routes
├── Sort subnet configs (PUBLIC first)
├── For each subnet configuration:
│   ├── For each availability zone:
│   │   ├── Create subnet with IPAM pool IDs
│   │   ├── Create route table
│   │   ├── Associate subnet to route table
│   │   ├── Add type-specific routes
│   │   └── Update subnet arrays
│   └── Continue to next AZ
└── Validate subnet count (max 200)
```

**Subnet Creation Details:**
- Uses IPAM pool IDs from planning phase
- IPv4 and IPv6 addresses allocated from respective pools
- Dependencies ensure waiters complete before subnet creation

### 8. Route Configuration by Type
```
Add Type-Specific Routes
├── PUBLIC Subnets:
│   ├── Add default routes (0.0.0.0/0, ::/0) to Internet Gateway
│   ├── Create NAT Gateway if NATGATEWAY service specified
│   └── Create EIP from IPAM EIP pool
├── PRIVATE_WITH_EGRESS Subnets:
│   ├── Add IPv4 default route (0.0.0.0/0) to NAT Gateway
│   └── Add IPv6 default route (::/0) to Internet Gateway
└── PRIVATE_ISOLATED Subnets:
    └── No default routes added
```

### 9. Final VPC Attributes Creation
```
Create VPC Attributes Object
├── Map all created subnets by type
├── Map route table IDs by type
├── Create ec2.IVpc interface object
└── Construction Complete
```

## Custom Resource Waiters

### IPAM Waiter
- **Purpose**: Waits for IPv6 CIDR allocation on VPC
- **Lambda**: `ipv6ipam.handler`
- **API Call**: `ec2:GetIpamResourceCidrs`
- **Region**: Makes calls to IPAM region
- **Timeout**: 15 minutes

### Pool CIDR Waiter
- **Purpose**: Waits for IPAM pools to have CIDRs available
- **Lambda**: `poolready.handler`
- **API Call**: `ec2:GetIpamPoolCidrs`
- **Region**: Makes calls to IPAM region
- **Timeout**: 30 minutes

## Key Features

### Cross-Region Support
- IPAM pools created in IPAM-supported region
- VPC and subnets created in target region
- Custom resources handle cross-region API calls
- Proper region parameters passed to Lambda functions

### Dual-Stack Networking
- IPv4 allocation from IPAM IPv4 pools
- IPv6 allocation from IPAM IPv6 pools
- Both address families configured on all subnets
- Automatic route configuration for both protocols

### Automatic Dependency Management
- VPC creation before IPAM planning
- IPAM waiters before pool creation
- Pool waiters before subnet creation
- Proper CloudFormation dependencies

### Subnet Type Support
- **PUBLIC**: Internet access via IGW, optional NAT Gateway
- **PRIVATE_WITH_EGRESS**: Internet access via NAT Gateway (IPv4) and IGW (IPv6)
- **PRIVATE_ISOLATED**: No internet access, local routing only

## Error Handling
- Validates maximum 200 subnets per VPC
- Ensures unique subnet names
- Validates subnet configuration properties
- Handles cross-region API failures with retries
- Comprehensive timeout handling for waiters

## Output
The construct provides a fully configured `ec2.IVpc` interface with:
- All subnet arrays populated by type
- Route table IDs mapped correctly
- Proper availability zone distribution
- IPAM-managed IP address allocation
- Cross-region compatibility