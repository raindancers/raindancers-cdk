# CloudFormation IPAM Support Status

## Current Situation
- **AWS IPAM**: Available in all regions ✅
- **BYOIP**: Successfully established ✅
- **CloudFormation**: IPAM resources not yet available in new regions ⏳

## Expected Timeline
- **CloudFormation support**: 1-2 days after IPAM API availability
- **CDK support**: Immediate (once CloudFormation catches up)

## Interim Strategy
Continue with lookup strategy until CloudFormation support arrives:

```typescript
const aucklandConfig: IpamConfig = {
  allocationStrategy: 'lookup',
  lookupConfig: {
    vpcName: 'auckland-vpc',
    parameterPrefix: '/ipam/auckland',
    masterRegion: 'ap-southeast-2'
  }
};
```

## Migration Plan
Once CloudFormation supports IPAM in ap-southeast-6:

1. **Update to IPAM strategy**:
```typescript
const aucklandConfig: IpamConfig = {
  allocationStrategy: 'ipam',
  ipamConfig: {
    ipamId: 'ipam-xxxxxxxxx',
    ipv4PoolId: 'pool-with-byoip',
    supernet: '192.206.153.0/24',
    ipv6Supernet: '2001:DF4:DF40::/48'
  }
};
```

2. **Test deployment**
3. **Remove parameter store dependencies**

## Monitoring CloudFormation Support
Check AWS CloudFormation documentation for:
- `AWS::EC2::IPAM`
- `AWS::EC2::IPAMPool` 
- `AWS::EC2::IPAMScope`

Support typically follows within 24-48 hours of API availability.