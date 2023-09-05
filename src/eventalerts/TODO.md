healthcheck
 - expiring certs
securityhub

https://www.intelligentdiscovery.io/controls/cloudwatch


CW.01 Unauthorized API Calls
{ ($.errorCode"*UnauthorizedOperation") || ($.errorCode = "AccessDenied*") }

CW.02 Sign in Without MFA
{ ($.eventName = ConsoleLogin) && ($.additionalEventData.MFAUsed != Yes) }

CW.03 Root Account Usage
{ $.userIdentity.type = Root && $.userIdentity.invokedBy NOT EXISTS && $.eventType != AwsServiceEvent }




CW.04 Iam user Changes
{ ($.eventName = DeleteUserPolicy) || ($.eventName = PutUserPolicy) || ($.eventName = AttachUserPolicy) || ($.eventName = DetachUserPolicy) }

cw.05 iam rOLE cHANGES
{ ($.eventName = DeleteRolePolicy) || ($.eventName = PutRolePolicy) || ($.eventName = AttachRolePolicy) || ($.eventName = DetachRolePolicy) }

CW.06 IAM GROUP CHANGE
{ ($.eventName = DeleteGroupPolicy) || ($.eventName = PutGroupPolicy) || ($.eventName = AttachGroupPolicy) || ($.eventName = DetachGroupPolicy) }

cw.07 iam POLICY cHANE
{ ($.eventName = DeleteGroupPolicy) || ($.eventName = PutGroupPolicy) || ($.eventName = AttachGroupPolicy) || ($.eventName = DetachGroupPolicy) }

CW.08 CLOUDtRAIL configuratin CHanges
{ ($.eventName = CreateTrail) || ($.eventName = UpdateTrail) || ($.eventName = DeleteTrail) || ($.eventName = StartLogging) || ($.eventName = StopLogging) }

CW.09 SigninFailures
{ ($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") }

CW.10 Disabled Customer Managed Keys
{($.eventSource = kms.amazonaws.com) && (($.eventName=DisableKey)||($.eventName=ScheduleKeyDeletion)) }

CW11. s3 Policy Changes
{ ($.eventSource = s3.amazonaws.com) && (($.eventName = PutBucketAcl) || ($.eventName = PutBucketPolicy) || ($.eventName = PutBucketCors) || ($.eventName = PutBucketLifecycle) || ($.eventName = PutBucketReplication) || ($.eventName = DeleteBucketPolicy) || ($.eventName = DeleteBucketCors) || ($.eventName = DeleteBucketLifecycle) || ($.eventName = DeleteBucketReplication)) }


Cw12 config service changes
{($.eventSource = config.amazonaws.com) && (($.eventName=StopConfigurationRecorder)||($.eventName=DeleteDeliveryChannel)||($.eventName=PutDeliveryChannel)||($.eventName=PutConfigurationRecorder))}

cw13. securiyt group chnages
{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup)}

cw14. network acls change
{ ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }

cw15. nework gw changes
{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }

cw16. route table changes
{ ($.eventName = CreateRoute) || ($.eventName = CreateRouteTable) || ($.eventName = ReplaceRoute) || ($.eventName = ReplaceRouteTableAssociation) || ($.eventName = DeleteRouteTable) || ($.eventName = DeleteRoute) || ($.eventName = DisassociateRouteTable) }

cw17. VC changes.
{ ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }
