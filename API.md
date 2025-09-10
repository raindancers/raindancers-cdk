# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountFactory <a name="AccountFactory" id="raindancers-cdk.orgTools.AccountFactory"></a>

Invoke the Service Catalog Account Factory.

#### Initializers <a name="Initializers" id="raindancers-cdk.orgTools.AccountFactory.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

new orgTools.AccountFactory(scope: Construct, id: string, props: AccountFactoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.orgTools.AccountFactoryProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.orgTools.AccountFactory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.orgTools.AccountFactory.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.orgTools.AccountFactory.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.orgTools.AccountFactoryProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.orgTools.AccountFactory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.orgTools.AccountFactory.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.orgTools.AccountFactory.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.orgTools.AccountFactory.isConstruct"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.AccountFactory.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.orgTools.AccountFactory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.orgTools.AccountFactory.isOwnedResource"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.AccountFactory.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.orgTools.AccountFactory.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.orgTools.AccountFactory.isResource"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.AccountFactory.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.orgTools.AccountFactory.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.AccountFactory.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.orgTools.AccountFactory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.orgTools.AccountFactory.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.orgTools.AccountFactory.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="raindancers-cdk.orgTools.AccountFactory.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.orgTools.AccountFactory.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.orgTools.AccountFactory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### AccountFactoryLambda <a name="AccountFactoryLambda" id="raindancers-cdk.orgTools.AccountFactoryLambda"></a>

Invoke the Service Catalog Account Factory.

#### Initializers <a name="Initializers" id="raindancers-cdk.orgTools.AccountFactoryLambda.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

new orgTools.AccountFactoryLambda(scope: Construct, id: string, props: AccountFactoryLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.orgTools.AccountFactoryLambdaProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.orgTools.AccountFactoryLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.orgTools.AccountFactoryLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.orgTools.AccountFactoryLambda.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.orgTools.AccountFactoryLambdaProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.orgTools.AccountFactoryLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.orgTools.AccountFactoryLambda.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.orgTools.AccountFactoryLambda.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.orgTools.AccountFactoryLambda.isConstruct"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.AccountFactoryLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.orgTools.AccountFactoryLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.orgTools.AccountFactoryLambda.isOwnedResource"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.AccountFactoryLambda.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.orgTools.AccountFactoryLambda.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.orgTools.AccountFactoryLambda.isResource"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.AccountFactoryLambda.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.orgTools.AccountFactoryLambda.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambda.property.provider">provider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.orgTools.AccountFactoryLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.orgTools.AccountFactoryLambda.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.orgTools.AccountFactoryLambda.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `provider`<sup>Required</sup> <a name="provider" id="raindancers-cdk.orgTools.AccountFactoryLambda.property.provider"></a>

```typescript
public readonly provider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---


### ADDomainJoinedWindowsNode <a name="ADDomainJoinedWindowsNode" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode"></a>

An AD Domain Node represents one Windows EC2 instance configured with Active Directory.

The DomainWindowsNode can be customized to different instance sizes and additional permissions set just like any other EC2 Instance.
You can use this construct to run elevated domain tasks with domain permissions or run your application in a single instance setup.
* The machine will be joined to the provided Active Directory domain using a custom CloudFormation bootstrap that will wait until the required reboot to join the domain. Then it will register the machine in SSM and pull tasks from the SSM State manager.
* You can send tasks to that machine using the provided methods: runPsCommands() and runPSwithDomainAdmin()

#### Initializers <a name="Initializers" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer"></a>

```typescript
import { microsoft } from 'raindancers-cdk'

new microsoft.ADDomainJoinedWindowsNode(scope: Construct, id: string, props: IADJoinedNodeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.microsoft.IADJoinedNodeProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.microsoft.IADJoinedNodeProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPsCommands">runPsCommands</a></code> | Running PowerShell scripts on the Node with SSM Document. |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPSwithDomainAdmin">runPSwithDomainAdmin</a></code> | Running PowerShell scripts on the Node with SSM Document with Domain Admin (Using the Secret used to join the machine to the domain) i.e: runPsCommands(["Write-host 'Hello world'", "Write-host 'Second command'"], "myScript") The provided psCommands will be stored in C:\Scripts and will be run with scheduled task with Domain Admin rights. |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runShellCommands">runShellCommands</a></code> | Running bash scripts on the Node with SSM Document. |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.startInstance">startInstance</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `runPsCommands` <a name="runPsCommands" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPsCommands"></a>

```typescript
public runPsCommands(psCommands: string[], id: string): void
```

Running PowerShell scripts on the Node with SSM Document.

i.e: runPsCommands(["Write-host 'Hello world'", "Write-host 'Second command'"], "myScript")

###### `psCommands`<sup>Required</sup> <a name="psCommands" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPsCommands.parameter.psCommands"></a>

- *Type:* string[]

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPsCommands.parameter.id"></a>

- *Type:* string

---

##### `runPSwithDomainAdmin` <a name="runPSwithDomainAdmin" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPSwithDomainAdmin"></a>

```typescript
public runPSwithDomainAdmin(psCommands: string[], id: string): void
```

Running PowerShell scripts on the Node with SSM Document with Domain Admin (Using the Secret used to join the machine to the domain) i.e: runPsCommands(["Write-host 'Hello world'", "Write-host 'Second command'"], "myScript") The provided psCommands will be stored in C:\Scripts and will be run with scheduled task with Domain Admin rights.

###### `psCommands`<sup>Required</sup> <a name="psCommands" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPSwithDomainAdmin.parameter.psCommands"></a>

- *Type:* string[]

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runPSwithDomainAdmin.parameter.id"></a>

- *Type:* string

---

##### `runShellCommands` <a name="runShellCommands" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runShellCommands"></a>

```typescript
public runShellCommands(ShellCommands: string[], id: string): void
```

Running bash scripts on the Node with SSM Document.

i.e: runPsCommands(["echo 'hello world'", "echo 'Second command'"], "myScript")

###### `ShellCommands`<sup>Required</sup> <a name="ShellCommands" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runShellCommands.parameter.ShellCommands"></a>

- *Type:* string[]

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.runShellCommands.parameter.id"></a>

- *Type:* string

---

##### `startInstance` <a name="startInstance" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.startInstance"></a>

```typescript
public startInstance(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.isConstruct"></a>

```typescript
import { microsoft } from 'raindancers-cdk'

microsoft.ADDomainJoinedWindowsNode.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.Instance</code> | *No description.* |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.nodeRole">nodeRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.passwordObject">passwordObject</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `instance`<sup>Required</sup> <a name="instance" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.instance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* aws-cdk-lib.aws_ec2.Instance

---

##### `nodeRole`<sup>Required</sup> <a name="nodeRole" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.nodeRole"></a>

```typescript
public readonly nodeRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `passwordObject`<sup>Optional</sup> <a name="passwordObject" id="raindancers-cdk.microsoft.ADDomainJoinedWindowsNode.property.passwordObject"></a>

```typescript
public readonly passwordObject: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### AgentCoreOpenAPI <a name="AgentCoreOpenAPI" id="raindancers-cdk.agentCore.AgentCoreOpenAPI"></a>

A construct that creates a complete AgentCore Gateway setup with Cognito authentication, S3 storage for OpenAPI specs, and Bedrock AgentCore integration.

#### Initializers <a name="Initializers" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

new agentCore.AgentCoreOpenAPI(scope: Construct, id: string, props: AgentCoreOpenAPIProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.agentCore.AgentCoreOpenAPIProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.agentCore.AgentCoreOpenAPIProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.isConstruct"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

agentCore.AgentCoreOpenAPI.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.gatewayId">gatewayId</a></code> | <code>string</code> | The Bedrock AgentCore Gateway ID. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.gatewayUrl">gatewayUrl</a></code> | <code>string</code> | The Bedrock AgentCore Gateway URL. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | The S3 bucket name containing the OpenAPI spec. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.targetExecutionRole">targetExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used for target execution. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | The Cognito User Pool Client ID. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPI.property.userPoolId">userPoolId</a></code> | <code>string</code> | The Cognito User Pool ID. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The Bedrock AgentCore Gateway ID.

---

##### `gatewayUrl`<sup>Required</sup> <a name="gatewayUrl" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.gatewayUrl"></a>

```typescript
public readonly gatewayUrl: string;
```

- *Type:* string

The Bedrock AgentCore Gateway URL.

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

The S3 bucket name containing the OpenAPI spec.

---

##### `targetExecutionRole`<sup>Required</sup> <a name="targetExecutionRole" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.targetExecutionRole"></a>

```typescript
public readonly targetExecutionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used for target execution.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

The Cognito User Pool Client ID.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="raindancers-cdk.agentCore.AgentCoreOpenAPI.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The Cognito User Pool ID.

---


### AgentCoreOpenAPIv2 <a name="AgentCoreOpenAPIv2" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2"></a>

A construct that creates a complete AgentCore Gateway setup with Cognito authentication, S3 storage for OpenAPI specs, and Bedrock AgentCore integration with support for multiple targets.

#### Initializers <a name="Initializers" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

new agentCore.v2.AgentCoreOpenAPIv2(scope: Construct, id: string, props: AgentCoreOpenAPIv2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.addTarget">addTarget</a></code> | Adds a new target to the gateway. |

---

##### `toString` <a name="toString" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addTarget` <a name="addTarget" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.addTarget"></a>

```typescript
public addTarget(target: GatewayTarget): string
```

Adds a new target to the gateway.

###### `target`<sup>Required</sup> <a name="target" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.addTarget.parameter.target"></a>

- *Type:* raindancers-cdk.agentCore.v2.GatewayTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.isConstruct"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

agentCore.v2.AgentCoreOpenAPIv2.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.gatewayId">gatewayId</a></code> | <code>string</code> | The Bedrock AgentCore Gateway ID. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.gatewayUrl">gatewayUrl</a></code> | <code>string</code> | The Bedrock AgentCore Gateway URL. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.targetExecutionRole">targetExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used for target execution. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.targetIds">targetIds</a></code> | <code>string[]</code> | Array of target IDs. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | The Cognito User Pool Client ID. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.userPoolId">userPoolId</a></code> | <code>string</code> | The Cognito User Pool ID. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The Bedrock AgentCore Gateway ID.

---

##### `gatewayUrl`<sup>Required</sup> <a name="gatewayUrl" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.gatewayUrl"></a>

```typescript
public readonly gatewayUrl: string;
```

- *Type:* string

The Bedrock AgentCore Gateway URL.

---

##### `targetExecutionRole`<sup>Required</sup> <a name="targetExecutionRole" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.targetExecutionRole"></a>

```typescript
public readonly targetExecutionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used for target execution.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

Array of target IDs.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

The Cognito User Pool Client ID.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The Cognito User Pool ID.

---


### ApplySCPOnAccountCreation <a name="ApplySCPOnAccountCreation" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation"></a>

Applys SCP to account when it is created.

#### Initializers <a name="Initializers" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

new serviceControlPolicy.ApplySCPOnAccountCreation(scope: Construct, id: string, props: ApplySCPOnAccountCreationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isConstruct"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.ApplySCPOnAccountCreation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isOwnedResource"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.ApplySCPOnAccountCreation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isResource"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.ApplySCPOnAccountCreation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### Assignment <a name="Assignment" id="raindancers-cdk.sso.Assignment"></a>

- *Implements:* raindancers-cdk.sso.IAssignment

The assignment construct.

Has no import method because there is no attributes to import.

#### Initializers <a name="Initializers" id="raindancers-cdk.sso.Assignment.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

new sso.Assignment(scope: Construct, id: string, props: AssignmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.Assignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.sso.Assignment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.sso.Assignment.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.sso.AssignmentProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.sso.Assignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.sso.Assignment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.sso.Assignment.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.sso.AssignmentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.Assignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.sso.Assignment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.sso.Assignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.sso.Assignment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.sso.Assignment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.Assignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.sso.Assignment.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.sso.Assignment.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.sso.Assignment.isConstruct"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.Assignment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.sso.Assignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.sso.Assignment.isOwnedResource"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.Assignment.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.sso.Assignment.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.sso.Assignment.isResource"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.Assignment.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.sso.Assignment.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.Assignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.sso.Assignment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.sso.Assignment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.sso.Assignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.sso.Assignment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.sso.Assignment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### AssociateSharedResolverRule <a name="AssociateSharedResolverRule" id="raindancers-cdk.dns.AssociateSharedResolverRule"></a>

Associate a resolver rule that has been shared to this account.

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.AssociateSharedResolverRule.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.AssociateSharedResolverRule(scope: Construct, id: string, props: AssociateSharedResolverRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRule.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.AssociateSharedResolverRuleProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.AssociateSharedResolverRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.AssociateSharedResolverRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.AssociateSharedResolverRule.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.AssociateSharedResolverRuleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.AssociateSharedResolverRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.AssociateSharedResolverRule.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.AssociateSharedResolverRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.AssociateSharedResolverRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.AssociateSharedResolverRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### AwsManagedDNSFirewallRuleGroup <a name="AwsManagedDNSFirewallRuleGroup" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.AwsManagedDNSFirewallRuleGroup(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.AwsManagedDNSFirewallRuleGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.property.resolverRuleId">resolverRuleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `resolverRuleId`<sup>Required</sup> <a name="resolverRuleId" id="raindancers-cdk.dns.AwsManagedDNSFirewallRuleGroup.property.resolverRuleId"></a>

```typescript
public readonly resolverRuleId: string;
```

- *Type:* string

---


### AwsServiceEndPoints <a name="AwsServiceEndPoints" id="raindancers-cdk.endpoints.AwsServiceEndPoints"></a>

Provisions a set of AWS Service Endpoints in a VPC.

#### Initializers <a name="Initializers" id="raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer"></a>

```typescript
import { endpoints } from 'raindancers-cdk'

new endpoints.AwsServiceEndPoints(scope: Construct, id: string, props: AwsServiceEndPointsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope that this construct is created in. |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer.parameter.id">id</a></code> | <code>string</code> | Id for the construct. |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.endpoints.AwsServiceEndPointsProps</code> | AWSServiceEndpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope that this construct is created in.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer.parameter.id"></a>

- *Type:* string

Id for the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.endpoints.AwsServiceEndPoints.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.endpoints.AwsServiceEndPointsProps

AWSServiceEndpoints.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPoints.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.endpoints.AwsServiceEndPoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.endpoints.AwsServiceEndPoints.isConstruct"></a>

```typescript
import { endpoints } from 'raindancers-cdk'

endpoints.AwsServiceEndPoints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.endpoints.AwsServiceEndPoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.endpoints.AwsServiceEndPoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CdkOrgBootstrapper <a name="CdkOrgBootstrapper" id="raindancers-cdk.orgTools.CdkOrgBootstrapper"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

new orgTools.CdkOrgBootstrapper(scope: Construct, id: string, props: CdkOrgBootstrapperProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.orgTools.CdkOrgBootstrapperProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.orgTools.CdkOrgBootstrapperProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapper.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.isConstruct"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.CdkOrgBootstrapper.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.orgTools.CdkOrgBootstrapper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CentralAccountAssnRole <a name="CentralAccountAssnRole" id="raindancers-cdk.dns.CentralAccountAssnRole"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.CentralAccountAssnRole.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.CentralAccountAssnRole(scope: Construct, id: string, props: CentralAccountAssnRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.CentralAccountAssnRoleProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.CentralAccountAssnRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.CentralAccountAssnRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.CentralAccountAssnRole.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.CentralAccountAssnRoleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.CentralAccountAssnRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.CentralAccountAssnRole.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.CentralAccountAssnRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.CentralAccountAssnRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRole.property.assnRole">assnRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.CentralAccountAssnRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `assnRole`<sup>Required</sup> <a name="assnRole" id="raindancers-cdk.dns.CentralAccountAssnRole.property.assnRole"></a>

```typescript
public readonly assnRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---


### CentralNotificationTopic <a name="CentralNotificationTopic" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

new cloudtrailMonitor.CentralNotificationTopic(scope: Construct, id: string, props?: CentralNotificationTopicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.isConstruct"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

cloudtrailMonitor.CentralNotificationTopic.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `topic`<sup>Required</sup> <a name="topic" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopic.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---


### CentralResolverRules <a name="CentralResolverRules" id="raindancers-cdk.dns.CentralResolverRules"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.CentralResolverRules.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.CentralResolverRules(scope: Construct, id: string, props: CentralResolverRulesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralResolverRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralResolverRules.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralResolverRules.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.CentralResolverRulesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.CentralResolverRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.CentralResolverRules.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.CentralResolverRules.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.CentralResolverRulesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralResolverRules.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.CentralResolverRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralResolverRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.CentralResolverRules.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.CentralResolverRules.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.CentralResolverRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralResolverRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.CentralResolverRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CloudNetwork <a name="CloudNetwork" id="raindancers-cdk.cloudNetwork.CloudNetwork"></a>

- *Implements:* aws-cdk-lib.aws_ec2.IVpc

A dual-stack VPC construct that supports both IPv4 and IPv6 addressing using AWS IPAM.

This construct creates a VPC with IPAM-managed IP address allocation, supporting multiple
subnet types across availability zones with automatic routing configuration.

Features:
- IPv4 and IPv6 dual-stack networking
- IPAM-managed address allocation
- Automatic subnet and route table creation
- NAT Gateway support for private subnet egress
- Internet Gateway for public subnet access

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.CloudNetwork.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.CloudNetwork(scope: Construct, id: string, props: CloudNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The parent construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct ID. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudNetwork.CloudNetworkProps</code> | - Configuration properties for the VPC. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.CloudNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.CloudNetwork.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.CloudNetworkProps

Configuration properties for the VPC.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addClientVpnEndpoint">addClientVpnEndpoint</a></code> | Adds a new client VPN endpoint to this VPC for remote user access. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addFlowLog">addFlowLog</a></code> | Adds a new Flow Log to this VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addGatewayEndpoint">addGatewayEndpoint</a></code> | Adds a new gateway endpoint to this VPC for AWS service access. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addInterfaceEndpoint">addInterfaceEndpoint</a></code> | Adds a new interface endpoint to this VPC for private AWS service access. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewall">addNetworkFirewall</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewallEndpoint">addNetworkFirewallEndpoint</a></code> | Adds AWS Network Firewall endpoints to this VPC for traffic inspection. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addPersonalityRoutes">addPersonalityRoutes</a></code> | Generates routing configurations based on subnet personalities. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addServiceEndpoints">addServiceEndpoints</a></code> | Adds multiple AWS service endpoints to the VPC in a single operation. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.addVpnConnection">addVpnConnection</a></code> | Adds a new VPN connection to this VPC for site-to-site connectivity. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.applyRemovalPolicy">applyRemovalPolicy</a></code> | Applies a removal policy to the VPC resources. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.associateSharedResolverRules">associateSharedResolverRules</a></code> | Associates shared Route 53 resolver rules with this VPC for DNS resolution. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.attachToTransitGateway">attachToTransitGateway</a></code> | ToAttaches this VPC to a Transit Gateway for inter-VPC connectivity. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.createFlowLogwithAnalysis">createFlowLogwithAnalysis</a></code> | Creates VPC Flow Logs with optional Athena analysis capabilities. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.enableVpnGateway">enableVpnGateway</a></code> | Adds a VPN Gateway to this VPC for site-to-site connectivity. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.selectSubnets">selectSubnets</a></code> | Selects subnets from the VPC based on the provided criteria. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.shareSubnetGroup">shareSubnetGroup</a></code> | Shares subnet groups with other AWS accounts using Resource Access Manager. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudNetwork.CloudNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addClientVpnEndpoint` <a name="addClientVpnEndpoint" id="raindancers-cdk.cloudNetwork.CloudNetwork.addClientVpnEndpoint"></a>

```typescript
public addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint
```

Adds a new client VPN endpoint to this VPC for remote user access.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addClientVpnEndpoint.parameter.id"></a>

- *Type:* string

Unique identifier for the client VPN endpoint.

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-cdk.cloudNetwork.CloudNetwork.addClientVpnEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnEndpointOptions

Configuration options for the client VPN endpoint.

---

##### ~~`addFlowLog`~~ <a name="addFlowLog" id="raindancers-cdk.cloudNetwork.CloudNetwork.addFlowLog"></a>

```typescript
public addFlowLog(id: string, options?: FlowLogOptions): FlowLog
```

Adds a new Flow Log to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addFlowLog.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="raindancers-cdk.cloudNetwork.CloudNetwork.addFlowLog.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.FlowLogOptions

---

##### `addGatewayEndpoint` <a name="addGatewayEndpoint" id="raindancers-cdk.cloudNetwork.CloudNetwork.addGatewayEndpoint"></a>

```typescript
public addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint
```

Adds a new gateway endpoint to this VPC for AWS service access.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addGatewayEndpoint.parameter.id"></a>

- *Type:* string

Unique identifier for the gateway endpoint.

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-cdk.cloudNetwork.CloudNetwork.addGatewayEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions

Configuration options for the gateway endpoint.

---

##### `addInterfaceEndpoint` <a name="addInterfaceEndpoint" id="raindancers-cdk.cloudNetwork.CloudNetwork.addInterfaceEndpoint"></a>

```typescript
public addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint
```

Adds a new interface endpoint to this VPC for private AWS service access.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addInterfaceEndpoint.parameter.id"></a>

- *Type:* string

Unique identifier for the interface endpoint.

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-cdk.cloudNetwork.CloudNetwork.addInterfaceEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointOptions

Configuration options for the interface endpoint.

---

##### `addNetworkFirewall` <a name="addNetworkFirewall" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewall"></a>

```typescript
public addNetworkFirewall(firewallName: string, firewallPolicy: CfnFirewallPolicy, subnet: ISubnetGroup, ipStackMode?: FirewallSubnetMappingIPAddressType): void
```

###### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewall.parameter.firewallName"></a>

- *Type:* string

---

###### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewall.parameter.firewallPolicy"></a>

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

---

###### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewall.parameter.subnet"></a>

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

###### `ipStackMode`<sup>Optional</sup> <a name="ipStackMode" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewall.parameter.ipStackMode"></a>

- *Type:* raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType

---

##### `addNetworkFirewallEndpoint` <a name="addNetworkFirewallEndpoint" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewallEndpoint"></a>

```typescript
public addNetworkFirewallEndpoint(id: string, props: AddNetworkFirewallEndpointProps): IFirewallEndpoints[]
```

Adds AWS Network Firewall endpoints to this VPC for traffic inspection.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewallEndpoint.parameter.id"></a>

- *Type:* string

Unique identifier for the firewall endpoint associations.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.CloudNetwork.addNetworkFirewallEndpoint.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps

Configuration properties for the firewall endpoints.

---

##### `addPersonalityRoutes` <a name="addPersonalityRoutes" id="raindancers-cdk.cloudNetwork.CloudNetwork.addPersonalityRoutes"></a>

```typescript
public addPersonalityRoutes(routingStrategy?: RoutingStrategy): RouterGroup[]
```

Generates routing configurations based on subnet personalities.

This method creates routing rules for each subnet based on its personality type,
defining how traffic flows between different subnet types and external destinations.
It handles complex routing scenarios including firewall inspection, transit gateway
routing, and security isolation between subnet types.

###### `routingStrategy`<sup>Optional</sup> <a name="routingStrategy" id="raindancers-cdk.cloudNetwork.CloudNetwork.addPersonalityRoutes.parameter.routingStrategy"></a>

- *Type:* raindancers-cdk.cloudNetwork.RoutingStrategy

Strategy for routing internet-bound traffic (0.0.0.0/0 and ::/0).

---

##### `addServiceEndpoints` <a name="addServiceEndpoints" id="raindancers-cdk.cloudNetwork.CloudNetwork.addServiceEndpoints"></a>

```typescript
public addServiceEndpoints(id: string, endpoints: AddAwsServiceEndPointsProps): void
```

Adds multiple AWS service endpoints to the VPC in a single operation.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addServiceEndpoints.parameter.id"></a>

- *Type:* string

---

###### `endpoints`<sup>Required</sup> <a name="endpoints" id="raindancers-cdk.cloudNetwork.CloudNetwork.addServiceEndpoints.parameter.endpoints"></a>

- *Type:* raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps

---

##### `addVpnConnection` <a name="addVpnConnection" id="raindancers-cdk.cloudNetwork.CloudNetwork.addVpnConnection"></a>

```typescript
public addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection
```

Adds a new VPN connection to this VPC for site-to-site connectivity.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.addVpnConnection.parameter.id"></a>

- *Type:* string

Unique identifier for the VPN connection.

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-cdk.cloudNetwork.CloudNetwork.addVpnConnection.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpnConnectionOptions

Configuration options for the VPN connection.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.cloudNetwork.CloudNetwork.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Applies a removal policy to the VPC resources.

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.cloudNetwork.CloudNetwork.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

The removal policy to apply.

---

##### `associateSharedResolverRules` <a name="associateSharedResolverRules" id="raindancers-cdk.cloudNetwork.CloudNetwork.associateSharedResolverRules"></a>

```typescript
public associateSharedResolverRules(id: string, props: AssociateSharedResolverRulesProps): void
```

Associates shared Route 53 resolver rules with this VPC for DNS resolution.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.associateSharedResolverRules.parameter.id"></a>

- *Type:* string

Unique identifier for the resolver rule associations.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.CloudNetwork.associateSharedResolverRules.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps

Configuration properties for associating resolver rules.

---

##### `attachToTransitGateway` <a name="attachToTransitGateway" id="raindancers-cdk.cloudNetwork.CloudNetwork.attachToTransitGateway"></a>

```typescript
public attachToTransitGateway(id: string, props: AttachToTransitGatewayProps): string
```

ToAttaches this VPC to a Transit Gateway for inter-VPC connectivity.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.attachToTransitGateway.parameter.id"></a>

- *Type:* string

Unique identifier for the Transit Gateway attachment.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.CloudNetwork.attachToTransitGateway.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps

Configuration properties for the attachment.

---

##### `createFlowLogwithAnalysis` <a name="createFlowLogwithAnalysis" id="raindancers-cdk.cloudNetwork.CloudNetwork.createFlowLogwithAnalysis"></a>

```typescript
public createFlowLogwithAnalysis(id: string, props: FlowLogProps): void
```

Creates VPC Flow Logs with optional Athena analysis capabilities.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.createFlowLogwithAnalysis.parameter.id"></a>

- *Type:* string

Unique identifier for the flow log resources.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.CloudNetwork.createFlowLogwithAnalysis.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.FlowLogProps

Configuration properties for flow log creation.

---

##### `enableVpnGateway` <a name="enableVpnGateway" id="raindancers-cdk.cloudNetwork.CloudNetwork.enableVpnGateway"></a>

```typescript
public enableVpnGateway(options: EnableVpnGatewayOptions): void
```

Adds a VPN Gateway to this VPC for site-to-site connectivity.

###### `options`<sup>Required</sup> <a name="options" id="raindancers-cdk.cloudNetwork.CloudNetwork.enableVpnGateway.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.EnableVpnGatewayOptions

Configuration options for the VPN Gateway.

---

##### `selectSubnets` <a name="selectSubnets" id="raindancers-cdk.cloudNetwork.CloudNetwork.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): SelectedSubnets
```

Selects subnets from the VPC based on the provided criteria.

###### `selection`<sup>Optional</sup> <a name="selection" id="raindancers-cdk.cloudNetwork.CloudNetwork.selectSubnets.parameter.selection"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Criteria for selecting subnets.

---

##### `shareSubnetGroup` <a name="shareSubnetGroup" id="raindancers-cdk.cloudNetwork.CloudNetwork.shareSubnetGroup"></a>

```typescript
public shareSubnetGroup(id: string, props: ShareSubnetGroupProps): void
```

Shares subnet groups with other AWS accounts using Resource Access Manager.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.CloudNetwork.shareSubnetGroup.parameter.id"></a>

- *Type:* string

Unique identifier for the resource share.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.CloudNetwork.shareSubnetGroup.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.ShareSubnetGroupProps

Configuration properties for sharing subnet groups.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudNetwork.CloudNetwork.isConstruct"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.CloudNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.CloudNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | List of availability zones used by the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment (account/region) for this VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.internetConnectivityEstablished">internetConnectivityEstablished</a></code> | <code>constructs.IDependable</code> | Dependency representing when internet connectivity is established. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.isolatedRouteTableIds">isolatedRouteTableIds</a></code> | <code>string[]</code> | Route table IDs for isolated subnets. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of isolated subnets in the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.privateRouteTableIds">privateRouteTableIds</a></code> | <code>string[]</code> | Route table IDs for private subnets. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of private subnets with egress capability. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.publicRouteTableIds">publicRouteTableIds</a></code> | <code>string[]</code> | Route table IDs for public subnets. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of public subnets in the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The CDK stack containing this VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.subnetConfigurations">subnetConfigurations</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.CfnVPC</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.vpcArn">vpcArn</a></code> | <code>string</code> | The VPC ARN. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.vpcCidrBlock">vpcCidrBlock</a></code> | <code>string</code> | The IPv4 CIDR block assigned to the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.vpcId">vpcId</a></code> | <code>string</code> | The VPC ID. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.implementBigWait">implementBigWait</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | The IPv6 CIDR block assigned to the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | VPN Gateway ID if one is attached. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.ipamConfig">ipamConfig</a></code> | <code>raindancers-cdk.cloudNetwork.IpamConfig</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.subnetCidrLookup">subnetCidrLookup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubNetCidrLookup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.igw">igw</a></code> | <code>aws-cdk-lib.aws_ec2.CfnInternetGateway</code> | The Internet Gateway attached to the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.networkFirewall">networkFirewall</a></code> | <code>raindancers-cdk.nwFirewall.NetworkFirewall</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.networkFirewallEndpoints">networkFirewallEndpoints</a></code> | <code>raindancers-cdk.cloudNetwork.IFirewallEndpoints[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.tgRoutes">tgRoutes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetwork.property.transitGatewayAttachment">transitGatewayAttachment</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

List of availability zones used by the VPC.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment (account/region) for this VPC.

---

##### `internetConnectivityEstablished`<sup>Required</sup> <a name="internetConnectivityEstablished" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.internetConnectivityEstablished"></a>

```typescript
public readonly internetConnectivityEstablished: IDependable;
```

- *Type:* constructs.IDependable

Dependency representing when internet connectivity is established.

---

##### `isolatedRouteTableIds`<sup>Required</sup> <a name="isolatedRouteTableIds" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.isolatedRouteTableIds"></a>

```typescript
public readonly isolatedRouteTableIds: string[];
```

- *Type:* string[]

Route table IDs for isolated subnets.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of isolated subnets in the VPC.

---

##### `privateRouteTableIds`<sup>Required</sup> <a name="privateRouteTableIds" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.privateRouteTableIds"></a>

```typescript
public readonly privateRouteTableIds: string[];
```

- *Type:* string[]

Route table IDs for private subnets.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of private subnets with egress capability.

---

##### `publicRouteTableIds`<sup>Required</sup> <a name="publicRouteTableIds" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.publicRouteTableIds"></a>

```typescript
public readonly publicRouteTableIds: string[];
```

- *Type:* string[]

Route table IDs for public subnets.

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of public subnets in the VPC.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The CDK stack containing this VPC.

---

##### `subnetConfigurations`<sup>Required</sup> <a name="subnetConfigurations" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.subnetConfigurations"></a>

```typescript
public readonly subnetConfigurations: ISubnetGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.vpc"></a>

```typescript
public readonly vpc: CfnVPC;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnVPC

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.vpcArn"></a>

```typescript
public readonly vpcArn: string;
```

- *Type:* string

The VPC ARN.

---

##### `vpcCidrBlock`<sup>Required</sup> <a name="vpcCidrBlock" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.vpcCidrBlock"></a>

```typescript
public readonly vpcCidrBlock: string;
```

- *Type:* string

The IPv4 CIDR block assigned to the VPC.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VPC ID.

---

##### `implementBigWait`<sup>Optional</sup> <a name="implementBigWait" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.implementBigWait"></a>

```typescript
public readonly implementBigWait: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

The IPv6 CIDR block assigned to the VPC.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

VPN Gateway ID if one is attached.

---

##### `ipamConfig`<sup>Required</sup> <a name="ipamConfig" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.ipamConfig"></a>

```typescript
public readonly ipamConfig: IpamConfig;
```

- *Type:* raindancers-cdk.cloudNetwork.IpamConfig

---

##### `subnetCidrLookup`<sup>Required</sup> <a name="subnetCidrLookup" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.subnetCidrLookup"></a>

```typescript
public readonly subnetCidrLookup: ISubNetCidrLookup[];
```

- *Type:* raindancers-cdk.cloudNetwork.ISubNetCidrLookup[]

---

##### `igw`<sup>Optional</sup> <a name="igw" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.igw"></a>

```typescript
public readonly igw: CfnInternetGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnInternetGateway

The Internet Gateway attached to the VPC.

---

##### `networkFirewall`<sup>Optional</sup> <a name="networkFirewall" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.networkFirewall"></a>

```typescript
public readonly networkFirewall: NetworkFirewall;
```

- *Type:* raindancers-cdk.nwFirewall.NetworkFirewall

---

##### `networkFirewallEndpoints`<sup>Optional</sup> <a name="networkFirewallEndpoints" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.networkFirewallEndpoints"></a>

```typescript
public readonly networkFirewallEndpoints: IFirewallEndpoints[];
```

- *Type:* raindancers-cdk.cloudNetwork.IFirewallEndpoints[]

---

##### `tgRoutes`<sup>Optional</sup> <a name="tgRoutes" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.tgRoutes"></a>

```typescript
public readonly tgRoutes: string[];
```

- *Type:* string[]

---

##### `transitGatewayAttachment`<sup>Optional</sup> <a name="transitGatewayAttachment" id="raindancers-cdk.cloudNetwork.CloudNetwork.property.transitGatewayAttachment"></a>

```typescript
public readonly transitGatewayAttachment: string;
```

- *Type:* string

---


### CloudTrailAlarms <a name="CloudTrailAlarms" id="raindancers-cdk.orgTools.CloudTrailAlarms"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.orgTools.CloudTrailAlarms.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

new orgTools.CloudTrailAlarms(scope: Construct, id: string, props: CloudTrailAlarmsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.orgTools.CloudTrailAlarmsProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.orgTools.CloudTrailAlarms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.orgTools.CloudTrailAlarms.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.orgTools.CloudTrailAlarms.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.orgTools.CloudTrailAlarmsProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.orgTools.CloudTrailAlarms.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.orgTools.CloudTrailAlarms.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.orgTools.CloudTrailAlarms.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.orgTools.CloudTrailAlarms.isConstruct"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.CloudTrailAlarms.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.orgTools.CloudTrailAlarms.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.orgTools.CloudTrailAlarms.isOwnedResource"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.CloudTrailAlarms.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.orgTools.CloudTrailAlarms.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.orgTools.CloudTrailAlarms.isResource"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

orgTools.CloudTrailAlarms.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.orgTools.CloudTrailAlarms.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarms.property.snsTopic">snsTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.orgTools.CloudTrailAlarms.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.orgTools.CloudTrailAlarms.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.orgTools.CloudTrailAlarms.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `snsTopic`<sup>Required</sup> <a name="snsTopic" id="raindancers-cdk.orgTools.CloudTrailAlarms.property.snsTopic"></a>

```typescript
public readonly snsTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---


### CloudTrailStackSet <a name="CloudTrailStackSet" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

new cloudtrailMonitor.CloudTrailStackSet(scope: Construct, id: string, props: CloudTrailStackSetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.isConstruct"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

cloudtrailMonitor.CloudTrailStackSet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.stackSet">stackSet</a></code> | <code>aws-cdk-lib.aws_cloudformation.CfnStackSet</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.stackSetRole">stackSetRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stackSet`<sup>Required</sup> <a name="stackSet" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.stackSet"></a>

```typescript
public readonly stackSet: CfnStackSet;
```

- *Type:* aws-cdk-lib.aws_cloudformation.CfnStackSet

---

##### `stackSetRole`<sup>Required</sup> <a name="stackSetRole" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.stackSetRole"></a>

```typescript
public readonly stackSetRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.COMMON_VIOLATION_RULES">COMMON_VIOLATION_RULES</a></code> | <code>raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule[]</code> | *No description.* |

---

##### `COMMON_VIOLATION_RULES`<sup>Required</sup> <a name="COMMON_VIOLATION_RULES" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSet.property.COMMON_VIOLATION_RULES"></a>

```typescript
public readonly COMMON_VIOLATION_RULES: CloudTrailEventRule[];
```

- *Type:* raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule[]

---

### ComponentLaunchTemplate <a name="ComponentLaunchTemplate" id="raindancers-cdk.zscaler.ComponentLaunchTemplate"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer"></a>

```typescript
import { zscaler } from 'raindancers-cdk'

new zscaler.ComponentLaunchTemplate(scope: Construct, id: string, props: LaunchTemplateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.zscaler.LaunchTemplateProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.zscaler.LaunchTemplateProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.isConstruct"></a>

```typescript
import { zscaler } from 'raindancers-cdk'

zscaler.ComponentLaunchTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.zscaler.ComponentLaunchTemplate.property.launchTemplate">launchTemplate</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplate</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="raindancers-cdk.zscaler.ComponentLaunchTemplate.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: LaunchTemplate;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplate

---


### ConditionalForwarder <a name="ConditionalForwarder" id="raindancers-cdk.dns.ConditionalForwarder"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.ConditionalForwarder.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.ConditionalForwarder(scope: Construct, id: string, props: ConditionalForwarderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarder.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarder.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.ConditionalForwarderProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.ConditionalForwarder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.ConditionalForwarder.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.ConditionalForwarder.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.ConditionalForwarderProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarder.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.ConditionalForwarder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.ConditionalForwarder.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.ConditionalForwarder.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.ConditionalForwarder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.ConditionalForwarder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Document <a name="Document" id="raindancers-cdk.ssm.automation.Document"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.ssm.automation.Document.Initializer"></a>

```typescript
import { ssm } from 'raindancers-cdk'

new ssm.automation.Document(scope: Construct, id: string, props: DocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.Document.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.Document.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.Document.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.ssm.automation.DocumentProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.ssm.automation.Document.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.ssm.automation.Document.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.ssm.automation.Document.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.ssm.automation.DocumentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.Document.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.ssm.automation.Document.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.Document.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.ssm.automation.Document.isConstruct"></a>

```typescript
import { ssm } from 'raindancers-cdk'

ssm.automation.Document.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.ssm.automation.Document.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.Document.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.ssm.automation.Document.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.ssm.automation.Document.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.ssm.automation.Document.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### DynamicTagResourceGroup <a name="DynamicTagResourceGroup" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

new nwFirewall.DynamicTagResourceGroup(scope: Construct, id: string, props: DynamicTagResourceGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.addTagFilter">addTagFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addTagFilter` <a name="addTagFilter" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.addTagFilter"></a>

```typescript
public addTagFilter(props: TagFilter): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.addTagFilter.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.TagFilter

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.isConstruct"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

nwFirewall.DynamicTagResourceGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.property.groupArn">groupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `groupArn`<sup>Required</sup> <a name="groupArn" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.property.groupArn"></a>

```typescript
public readonly groupArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### EastWestFirewallOnTg <a name="EastWestFirewallOnTg" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg"></a>

Router construct that manages routing configuration for VPC subnets.

Handles routing to Transit Gateway, Internet Gateway, Firewall Endpoints, and other destinations.

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.EastWestFirewallOnTg(scope: Construct, id: string, props: EastWestFirewallOnTgProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.isConstruct"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.EastWestFirewallOnTg.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.property.firewall">firewall</a></code> | <code>raindancers-cdk.nwFirewall.NetworkFirewall</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTg.property.firewall"></a>

```typescript
public readonly firewall: NetworkFirewall;
```

- *Type:* raindancers-cdk.nwFirewall.NetworkFirewall

---


### EnableEnterpriseSupport <a name="EnableEnterpriseSupport" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport"></a>

Creates A support case to enable Enterprise Support, when a new account is created with Control Tower A Lambda is listening to event bridge.

#### Initializers <a name="Initializers" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer"></a>

```typescript
import { enterpriseSupport } from 'raindancers-cdk'

new enterpriseSupport.EnableEnterpriseSupport(scope: Construct, id: string, props: EnableEnterpriseSupportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isConstruct"></a>

```typescript
import { enterpriseSupport } from 'raindancers-cdk'

enterpriseSupport.EnableEnterpriseSupport.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isOwnedResource"></a>

```typescript
import { enterpriseSupport } from 'raindancers-cdk'

enterpriseSupport.EnableEnterpriseSupport.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isResource"></a>

```typescript
import { enterpriseSupport } from 'raindancers-cdk'

enterpriseSupport.EnableEnterpriseSupport.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupport.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### EnterpriseLoadBalancer <a name="EnterpriseLoadBalancer" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer"></a>

```typescript
import { loadbalancer } from 'raindancers-cdk'

new loadbalancer.EnterpriseLoadBalancer(scope: Construct, id: string, props: LoadBalancersProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.loadbalancer.LoadBalancersProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.loadbalancer.LoadBalancersProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.addApplicationToPrivateLoadBalancer">addApplicationToPrivateLoadBalancer</a></code> | This method provides a way to add an application, to the Loadbalancer. |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.addZscalerAppSegmentForLoadbalancer">addZscalerAppSegmentForLoadbalancer</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.createPrivateLinkService">createPrivateLinkService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addApplicationToPrivateLoadBalancer` <a name="addApplicationToPrivateLoadBalancer" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.addApplicationToPrivateLoadBalancer"></a>

```typescript
public addApplicationToPrivateLoadBalancer(props: AddApplicationProps): void
```

This method provides a way to add an application, to the Loadbalancer.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.addApplicationToPrivateLoadBalancer.parameter.props"></a>

- *Type:* raindancers-cdk.loadbalancer.AddApplicationProps

---

##### `addZscalerAppSegmentForLoadbalancer` <a name="addZscalerAppSegmentForLoadbalancer" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.addZscalerAppSegmentForLoadbalancer"></a>

```typescript
public addZscalerAppSegmentForLoadbalancer(props: ZscalerAppSegmentProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.addZscalerAppSegmentForLoadbalancer.parameter.props"></a>

- *Type:* raindancers-cdk.zscaler.ZscalerAppSegmentProps

---

##### `createPrivateLinkService` <a name="createPrivateLinkService" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.createPrivateLinkService"></a>

```typescript
public createPrivateLinkService(accounts: string[], vpc: IVpc, subnets: SubnetSelection): void
```

###### `accounts`<sup>Required</sup> <a name="accounts" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.createPrivateLinkService.parameter.accounts"></a>

- *Type:* string[]

---

###### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.createPrivateLinkService.parameter.vpc"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.createPrivateLinkService.parameter.subnets"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.isConstruct"></a>

```typescript
import { loadbalancer } from 'raindancers-cdk'

loadbalancer.EnterpriseLoadBalancer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.ingressVpc">ingressVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.loadbalancerZone">loadbalancerZone</a></code> | <code>aws-cdk-lib.aws_route53.HostedZone</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.privateLoadbalancer">privateLoadbalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.subnets">subnets</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.tlsListener">tlsListener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.interfaceEndpoint">interfaceEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ingressVpc`<sup>Required</sup> <a name="ingressVpc" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.ingressVpc"></a>

```typescript
public readonly ingressVpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `loadbalancerZone`<sup>Required</sup> <a name="loadbalancerZone" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.loadbalancerZone"></a>

```typescript
public readonly loadbalancerZone: HostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZone

---

##### `privateLoadbalancer`<sup>Required</sup> <a name="privateLoadbalancer" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.privateLoadbalancer"></a>

```typescript
public readonly privateLoadbalancer: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.subnets"></a>

```typescript
public readonly subnets: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `tlsListener`<sup>Required</sup> <a name="tlsListener" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.tlsListener"></a>

```typescript
public readonly tlsListener: ApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `domains`<sup>Optional</sup> <a name="domains" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `interfaceEndpoint`<sup>Optional</sup> <a name="interfaceEndpoint" id="raindancers-cdk.loadbalancer.EnterpriseLoadBalancer.property.interfaceEndpoint"></a>

```typescript
public readonly interfaceEndpoint: InterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint

---


### EnterpriseVpc <a name="EnterpriseVpc" id="raindancers-cdk.enterprisevpc.EnterpriseVpc"></a>

Enteprise VPC's take the stock ec2.Vpc and provide numerous convience methods primarly related to connecting to internal networks.

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.EnterpriseVpc(scope: Construct, id: string, props: EnterpriseVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.EnterpriseVpcProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.EnterpriseVpcProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addCentralResolverRules">addCentralResolverRules</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addConditionalFowardingRules">addConditionalFowardingRules</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addCoreRoutes">addCoreRoutes</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addCrossAccountR53AssociationRole">addCrossAccountR53AssociationRole</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addNetworkFirewall">addNetworkFirewall</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addPrivateHostedZone">addPrivateHostedZone</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addR53Resolvers">addR53Resolvers</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addR53Zone">addR53Zone</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addRoutes">addRoutes</a></code> | Add routes to SubnetGroups ( by implication their routing tables ). |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.addServiceEndpoints">addServiceEndpoints</a></code> | Add a collection of service endpopints to the VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.associateSharedResolverRules">associateSharedResolverRules</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.attachAWSManagedDNSFirewallRules">attachAWSManagedDNSFirewallRules</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.attachToCloudWan">attachToCloudWan</a></code> | attachToCloudWan will attach a VPC to CloudWan, in a particular Segment. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.attachToTransitGateway">attachToTransitGateway</a></code> | Attach a vpc to a transit gateway, possibly in appliance mode Its intended purpose is provide a. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.cloudWanRoutingProtocol">cloudWanRoutingProtocol</a></code> | Enable CloudWanRoutingProtocol. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndAttachR53EnterprizeZone">createAndAttachR53EnterprizeZone</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndAttachR53PrivateZone">createAndAttachR53PrivateZone</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndShareSubnetPrefixList">createAndShareSubnetPrefixList</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.createFlowLog">createFlowLog</a></code> | Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.router">router</a></code> | This is a convience method to present the routing for the Vpc in a simpler format, than the addRoutes Method, which it calls. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.shareSubnetGroup">shareSubnetGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addCentralResolverRules` <a name="addCentralResolverRules" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCentralResolverRules"></a>

```typescript
public addCentralResolverRules(domains: string[], searchTag?: Tag): void
```

###### `domains`<sup>Required</sup> <a name="domains" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCentralResolverRules.parameter.domains"></a>

- *Type:* string[]

---

###### `searchTag`<sup>Optional</sup> <a name="searchTag" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCentralResolverRules.parameter.searchTag"></a>

- *Type:* aws-cdk-lib.Tag

---

##### `addConditionalFowardingRules` <a name="addConditionalFowardingRules" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addConditionalFowardingRules"></a>

```typescript
public addConditionalFowardingRules(forwardingRules: OutboundForwardingRule[]): void
```

###### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addConditionalFowardingRules.parameter.forwardingRules"></a>

- *Type:* raindancers-cdk.dns.OutboundForwardingRule[]

---

##### `addCoreRoutes` <a name="addCoreRoutes" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCoreRoutes"></a>

```typescript
public addCoreRoutes(props: AddCoreRoutesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCoreRoutes.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AddCoreRoutesProps

---

##### `addCrossAccountR53AssociationRole` <a name="addCrossAccountR53AssociationRole" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCrossAccountR53AssociationRole"></a>

```typescript
public addCrossAccountR53AssociationRole(rolename?: string): void
```

###### `rolename`<sup>Optional</sup> <a name="rolename" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addCrossAccountR53AssociationRole.parameter.rolename"></a>

- *Type:* string

---

##### `addNetworkFirewall` <a name="addNetworkFirewall" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addNetworkFirewall"></a>

```typescript
public addNetworkFirewall(firewallName: string, firewallPolicy: CfnFirewallPolicy, subnet: SubnetGroup, ipStackMode?: FirewallSubnetMappingIPAddressType): INetworkFirewall
```

###### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addNetworkFirewall.parameter.firewallName"></a>

- *Type:* string

---

###### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addNetworkFirewall.parameter.firewallPolicy"></a>

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

---

###### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addNetworkFirewall.parameter.subnet"></a>

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

###### `ipStackMode`<sup>Optional</sup> <a name="ipStackMode" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addNetworkFirewall.parameter.ipStackMode"></a>

- *Type:* raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType

---

##### `addPrivateHostedZone` <a name="addPrivateHostedZone" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addPrivateHostedZone"></a>

```typescript
public addPrivateHostedZone(zonename: string): HostedZone
```

###### `zonename`<sup>Required</sup> <a name="zonename" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addPrivateHostedZone.parameter.zonename"></a>

- *Type:* string

---

##### `addR53Resolvers` <a name="addR53Resolvers" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addR53Resolvers"></a>

```typescript
public addR53Resolvers(subnet: SubnetGroup): R53Resolverendpoints
```

###### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addR53Resolvers.parameter.subnet"></a>

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `addR53Zone` <a name="addR53Zone" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addR53Zone"></a>

```typescript
public addR53Zone(props: AddR53ZoneProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addR53Zone.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AddR53ZoneProps

---

##### `addRoutes` <a name="addRoutes" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addRoutes"></a>

```typescript
public addRoutes(props: AddRoutesProps): void
```

Add routes to SubnetGroups ( by implication their routing tables ).

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addRoutes.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AddRoutesProps

---

##### `addServiceEndpoints` <a name="addServiceEndpoints" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addServiceEndpoints"></a>

```typescript
public addServiceEndpoints(props: AddAwsServiceEndPointsProps): void
```

Add a collection of service endpopints to the VPC.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.addServiceEndpoints.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps

---

##### `associateSharedResolverRules` <a name="associateSharedResolverRules" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.associateSharedResolverRules"></a>

```typescript
public associateSharedResolverRules(domainNames: string[]): void
```

###### `domainNames`<sup>Required</sup> <a name="domainNames" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.associateSharedResolverRules.parameter.domainNames"></a>

- *Type:* string[]

---

##### `attachAWSManagedDNSFirewallRules` <a name="attachAWSManagedDNSFirewallRules" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.attachAWSManagedDNSFirewallRules"></a>

```typescript
public attachAWSManagedDNSFirewallRules(): void
```

##### `attachToCloudWan` <a name="attachToCloudWan" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.attachToCloudWan"></a>

```typescript
public attachToCloudWan(props: AttachToCloudWanProps): string
```

attachToCloudWan will attach a VPC to CloudWan, in a particular Segment.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.attachToCloudWan.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AttachToCloudWanProps

---

##### `attachToTransitGateway` <a name="attachToTransitGateway" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.attachToTransitGateway"></a>

```typescript
public attachToTransitGateway(props: AttachToTransitGatewayProps): string
```

Attach a vpc to a transit gateway, possibly in appliance mode Its intended purpose is provide a.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.attachToTransitGateway.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps

---

##### `cloudWanRoutingProtocol` <a name="cloudWanRoutingProtocol" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.cloudWanRoutingProtocol"></a>

```typescript
public cloudWanRoutingProtocol(props: CloudWanRoutingProtocolProps): void
```

Enable CloudWanRoutingProtocol.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.cloudWanRoutingProtocol.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps

---

##### `createAndAttachR53EnterprizeZone` <a name="createAndAttachR53EnterprizeZone" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndAttachR53EnterprizeZone"></a>

```typescript
public createAndAttachR53EnterprizeZone(props: AddEnterprizeZoneProps): PrivateHostedZone
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndAttachR53EnterprizeZone.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps

---

##### `createAndAttachR53PrivateZone` <a name="createAndAttachR53PrivateZone" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndAttachR53PrivateZone"></a>

```typescript
public createAndAttachR53PrivateZone(zoneName: string): PrivateHostedZone
```

###### `zoneName`<sup>Required</sup> <a name="zoneName" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndAttachR53PrivateZone.parameter.zoneName"></a>

- *Type:* string

---

##### `createAndShareSubnetPrefixList` <a name="createAndShareSubnetPrefixList" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndShareSubnetPrefixList"></a>

```typescript
public createAndShareSubnetPrefixList(name: string, subnets: SubnetSelection, orgArn: string): CfnPrefixList
```

###### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndShareSubnetPrefixList.parameter.name"></a>

- *Type:* string

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndShareSubnetPrefixList.parameter.subnets"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

###### `orgArn`<sup>Required</sup> <a name="orgArn" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createAndShareSubnetPrefixList.parameter.orgArn"></a>

- *Type:* string

---

##### `createFlowLog` <a name="createFlowLog" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createFlowLog"></a>

```typescript
public createFlowLog(props: FlowLogProps): void
```

Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.createFlowLog.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.FlowLogProps

---

##### ~~`router`~~ <a name="router" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.router"></a>

```typescript
public router(routerGroups: RouterGroup[]): void
```

This is a convience method to present the routing for the Vpc in a simpler format, than the addRoutes Method, which it calls.

###### `routerGroups`<sup>Required</sup> <a name="routerGroups" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.router.parameter.routerGroups"></a>

- *Type:* raindancers-cdk.enterprisevpc.RouterGroup[]

---

##### `shareSubnetGroup` <a name="shareSubnetGroup" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.shareSubnetGroup"></a>

```typescript
public shareSubnetGroup(props: ShareSubnetGroupProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.shareSubnetGroup.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.ShareSubnetGroupProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.EnterpriseVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.attachToCloudwanProvider">attachToCloudwanProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.gwlbEndpoints">gwlbEndpoints</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.tgWaiterProvider">tgWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | the ec2.Vpc that is passed in as property. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.subnetConfiguration">subnetConfiguration</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanCoreId">cloudWanCoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanName">cloudWanName</a></code> | <code>string</code> | the Name of the cloudwan that the VPC is attached to. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanSegment">cloudWanSegment</a></code> | <code>string</code> | the Name of the Cloudwan segment that the vpc is attached to. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanVpcAttachmentId">cloudWanVpcAttachmentId</a></code> | <code>string</code> | AttachmentId when the vpc is attached to a Cloudwan. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.r53endpointResolvers">r53endpointResolvers</a></code> | <code>raindancers-cdk.dns.R53Resolverendpoints</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.transitGWAttachmentID">transitGWAttachmentID</a></code> | <code>string</code> | AttachmentId when the vpc is attached to a transitGateway. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.transitGWID">transitGWID</a></code> | <code>string</code> | The Id of the transitgateway that the VPC is attached to. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpcAttachmentCR">vpcAttachmentCR</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpcAttachmentId">vpcAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpcAttachmentSegmentName">vpcAttachmentSegmentName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `attachToCloudwanProvider`<sup>Required</sup> <a name="attachToCloudwanProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.attachToCloudwanProvider"></a>

```typescript
public readonly attachToCloudwanProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `gwlbEndpoints`<sup>Required</sup> <a name="gwlbEndpoints" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.gwlbEndpoints"></a>

```typescript
public readonly gwlbEndpoints: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `tgWaiterProvider`<sup>Required</sup> <a name="tgWaiterProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.tgWaiterProvider"></a>

```typescript
public readonly tgWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

the ec2.Vpc that is passed in as property.

---

##### `subnetConfiguration`<sup>Required</sup> <a name="subnetConfiguration" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetGroup[];
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup[]

---

##### `cloudWanCoreId`<sup>Optional</sup> <a name="cloudWanCoreId" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanCoreId"></a>

```typescript
public readonly cloudWanCoreId: string;
```

- *Type:* string

---

##### `cloudWanName`<sup>Optional</sup> <a name="cloudWanName" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanName"></a>

```typescript
public readonly cloudWanName: string;
```

- *Type:* string

the Name of the cloudwan that the VPC is attached to.

---

##### `cloudWanSegment`<sup>Optional</sup> <a name="cloudWanSegment" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanSegment"></a>

```typescript
public readonly cloudWanSegment: string;
```

- *Type:* string

the Name of the Cloudwan segment that the vpc is attached to.

---

##### `cloudWanVpcAttachmentId`<sup>Optional</sup> <a name="cloudWanVpcAttachmentId" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.cloudWanVpcAttachmentId"></a>

```typescript
public readonly cloudWanVpcAttachmentId: string;
```

- *Type:* string

AttachmentId when the vpc is attached to a Cloudwan.

---

##### `firewallArn`<sup>Optional</sup> <a name="firewallArn" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `r53endpointResolvers`<sup>Optional</sup> <a name="r53endpointResolvers" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.r53endpointResolvers"></a>

```typescript
public readonly r53endpointResolvers: R53Resolverendpoints;
```

- *Type:* raindancers-cdk.dns.R53Resolverendpoints

---

##### `transitGWAttachmentID`<sup>Optional</sup> <a name="transitGWAttachmentID" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.transitGWAttachmentID"></a>

```typescript
public readonly transitGWAttachmentID: string;
```

- *Type:* string

AttachmentId when the vpc is attached to a transitGateway.

---

##### `transitGWID`<sup>Optional</sup> <a name="transitGWID" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.transitGWID"></a>

```typescript
public readonly transitGWID: string;
```

- *Type:* string

The Id of the transitgateway that the VPC is attached to.

---

##### `vpcAttachmentCR`<sup>Optional</sup> <a name="vpcAttachmentCR" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpcAttachmentCR"></a>

```typescript
public readonly vpcAttachmentCR: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `vpcAttachmentId`<sup>Optional</sup> <a name="vpcAttachmentId" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpcAttachmentId"></a>

```typescript
public readonly vpcAttachmentId: string;
```

- *Type:* string

---

##### `vpcAttachmentSegmentName`<sup>Optional</sup> <a name="vpcAttachmentSegmentName" id="raindancers-cdk.enterprisevpc.EnterpriseVpc.property.vpcAttachmentSegmentName"></a>

```typescript
public readonly vpcAttachmentSegmentName: string;
```

- *Type:* string

---


### EnterpriseVpcLambda <a name="EnterpriseVpcLambda" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.EnterpriseVpcLambda(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.EnterpriseVpcLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | A custom resource to use for adding routes. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.attachToCloudwanProvider">attachToCloudwanProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | attach to cloudwan with a water. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.gwlbEndpointProvider">gwlbEndpointProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | gwlb endpoint provider. |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.tgWaiterProvider">tgWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | A check to see if transitgateway is ready to route to. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

A custom resource to use for adding routes.

---

##### `attachToCloudwanProvider`<sup>Required</sup> <a name="attachToCloudwanProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.attachToCloudwanProvider"></a>

```typescript
public readonly attachToCloudwanProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

attach to cloudwan with a water.

---

##### `gwlbEndpointProvider`<sup>Required</sup> <a name="gwlbEndpointProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.gwlbEndpointProvider"></a>

```typescript
public readonly gwlbEndpointProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

gwlb endpoint provider.

---

##### `tgWaiterProvider`<sup>Required</sup> <a name="tgWaiterProvider" id="raindancers-cdk.enterprisevpc.EnterpriseVpcLambda.property.tgWaiterProvider"></a>

```typescript
public readonly tgWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

A check to see if transitgateway is ready to route to.

---


### EnterpriseZone <a name="EnterpriseZone" id="raindancers-cdk.dns.EnterpriseZone"></a>

create forwarding rules and associate them with a vpc.

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.EnterpriseZone.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.EnterpriseZone(scope: Construct, id: string, props: EnterpriseZoneProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.EnterpriseZoneProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.EnterpriseZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.EnterpriseZone.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.EnterpriseZone.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.EnterpriseZoneProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.EnterpriseZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.EnterpriseZone.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.EnterpriseZone.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.EnterpriseZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.dns.EnterpriseZone.property.privateZone">privateZone</a></code> | <code>aws-cdk-lib.aws_route53.PrivateHostedZone</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.EnterpriseZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `privateZone`<sup>Required</sup> <a name="privateZone" id="raindancers-cdk.dns.EnterpriseZone.property.privateZone"></a>

```typescript
public readonly privateZone: PrivateHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.PrivateHostedZone

---


### EventToSlack <a name="EventToSlack" id="raindancers-cdk.eventalerts.EventToSlack"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.eventalerts.EventToSlack.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

new eventalerts.EventToSlack(scope: Construct, id: string, props: EventToSlackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.eventalerts.EventToSlackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.eventalerts.EventToSlack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.eventalerts.EventToSlack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.eventalerts.EventToSlack.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.eventalerts.EventToSlackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.eventalerts.EventToSlack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.eventalerts.EventToSlack.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.eventalerts.EventToSlack.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.eventalerts.EventToSlack.isConstruct"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToSlack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.eventalerts.EventToSlack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.eventalerts.EventToSlack.isOwnedResource"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToSlack.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.eventalerts.EventToSlack.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.eventalerts.EventToSlack.isResource"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToSlack.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.eventalerts.EventToSlack.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlack.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.eventalerts.EventToSlack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.eventalerts.EventToSlack.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.eventalerts.EventToSlack.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `function`<sup>Required</sup> <a name="function" id="raindancers-cdk.eventalerts.EventToSlack.property.function"></a>

```typescript
public readonly function: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### EventToSNS <a name="EventToSNS" id="raindancers-cdk.eventalerts.EventToSNS"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.eventalerts.EventToSNS.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

new eventalerts.EventToSNS(scope: Construct, id: string, props: EventToSNSProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.eventalerts.EventToSNSProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.eventalerts.EventToSNS.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.eventalerts.EventToSNS.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.eventalerts.EventToSNS.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.eventalerts.EventToSNSProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.eventalerts.EventToSNS.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.eventalerts.EventToSNS.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.eventalerts.EventToSNS.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.eventalerts.EventToSNS.isConstruct"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToSNS.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.eventalerts.EventToSNS.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.eventalerts.EventToSNS.isOwnedResource"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToSNS.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.eventalerts.EventToSNS.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.eventalerts.EventToSNS.isResource"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToSNS.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.eventalerts.EventToSNS.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNS.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.eventalerts.EventToSNS.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.eventalerts.EventToSNS.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.eventalerts.EventToSNS.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `function`<sup>Required</sup> <a name="function" id="raindancers-cdk.eventalerts.EventToSNS.property.function"></a>

```typescript
public readonly function: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### EventToTeams <a name="EventToTeams" id="raindancers-cdk.eventalerts.EventToTeams"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.eventalerts.EventToTeams.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

new eventalerts.EventToTeams(scope: Construct, id: string, props: EventToTeamsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.eventalerts.EventToTeamsProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.eventalerts.EventToTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.eventalerts.EventToTeams.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.eventalerts.EventToTeams.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.eventalerts.EventToTeamsProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.eventalerts.EventToTeams.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.eventalerts.EventToTeams.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.eventalerts.EventToTeams.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.eventalerts.EventToTeams.isConstruct"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToTeams.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.eventalerts.EventToTeams.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.eventalerts.EventToTeams.isOwnedResource"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToTeams.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.eventalerts.EventToTeams.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.eventalerts.EventToTeams.isResource"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.EventToTeams.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.eventalerts.EventToTeams.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeams.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.eventalerts.EventToTeams.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.eventalerts.EventToTeams.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.eventalerts.EventToTeams.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `function`<sup>Required</sup> <a name="function" id="raindancers-cdk.eventalerts.EventToTeams.property.function"></a>

```typescript
public readonly function: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### ExtraSubnets <a name="ExtraSubnets" id="raindancers-cdk.enterprisevpc.ExtraSubnets"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.ExtraSubnets(scope: Construct, id: string, props: ExtraSubnetsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.ExtraSubnetsProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.ExtraSubnets.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.ExtraSubnetsProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.ExtraSubnets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.ExtraSubnets.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.ExtraSubnets.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.ExtraSubnets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnets.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.ExtraSubnets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.enterprisevpc.ExtraSubnets.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

---


### FirewallDashboard <a name="FirewallDashboard" id="raindancers-cdk.nwFirewall.FirewallDashboard"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.nwFirewall.FirewallDashboard.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

new nwFirewall.FirewallDashboard(scope: Construct, id: string, props: FirewallDashboardProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboard.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.nwFirewall.FirewallDashboardProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.nwFirewall.FirewallDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.FirewallDashboard.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.FirewallDashboard.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.FirewallDashboardProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboard.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.nwFirewall.FirewallDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.nwFirewall.FirewallDashboard.isConstruct"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

nwFirewall.FirewallDashboard.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.nwFirewall.FirewallDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.nwFirewall.FirewallDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### FirewallPolicy <a name="FirewallPolicy" id="raindancers-cdk.nwFirewall.FirewallPolicy"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.nwFirewall.FirewallPolicy.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

new nwFirewall.FirewallPolicy(scope: Construct, id: string, props: FirewallPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.nwFirewall.FirewallPolicyProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.nwFirewall.FirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.FirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.FirewallPolicy.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.FirewallPolicyProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.addManagedStatefulRules">addManagedStatefulRules</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.addStatefulRules">addStatefulRules</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.addStatelessRuleGroup">addStatelessRuleGroup</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.addTLSInspection">addTLSInspection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.nwFirewall.FirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addManagedStatefulRules` <a name="addManagedStatefulRules" id="raindancers-cdk.nwFirewall.FirewallPolicy.addManagedStatefulRules"></a>

```typescript
public addManagedStatefulRules(props: AddStatefulRulesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.FirewallPolicy.addManagedStatefulRules.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.AddStatefulRulesProps

---

##### `addStatefulRules` <a name="addStatefulRules" id="raindancers-cdk.nwFirewall.FirewallPolicy.addStatefulRules"></a>

```typescript
public addStatefulRules(props: StatefulRuleProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.FirewallPolicy.addStatefulRules.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.StatefulRuleProps

---

##### `addStatelessRuleGroup` <a name="addStatelessRuleGroup" id="raindancers-cdk.nwFirewall.FirewallPolicy.addStatelessRuleGroup"></a>

```typescript
public addStatelessRuleGroup(props: AddStatelessRulesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.FirewallPolicy.addStatelessRuleGroup.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.AddStatelessRulesProps

---

##### `addTLSInspection` <a name="addTLSInspection" id="raindancers-cdk.nwFirewall.FirewallPolicy.addTLSInspection"></a>

```typescript
public addTLSInspection(tlsInspectionConfiguration: ITLSInspectionConfiguration): void
```

###### `tlsInspectionConfiguration`<sup>Required</sup> <a name="tlsInspectionConfiguration" id="raindancers-cdk.nwFirewall.FirewallPolicy.addTLSInspection.parameter.tlsInspectionConfiguration"></a>

- *Type:* raindancers-cdk.nwFirewall.ITLSInspectionConfiguration

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.nwFirewall.FirewallPolicy.isConstruct"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

nwFirewall.FirewallPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.nwFirewall.FirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.property.firewallpolicy">firewallpolicy</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicy.property.policy">policy</a></code> | <code>raindancers-cdk.nwFirewall.IFirewallPolicyProperty</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.nwFirewall.FirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `firewallpolicy`<sup>Required</sup> <a name="firewallpolicy" id="raindancers-cdk.nwFirewall.FirewallPolicy.property.firewallpolicy"></a>

```typescript
public readonly firewallpolicy: CfnFirewallPolicy;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

---

##### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.nwFirewall.FirewallPolicy.property.policy"></a>

```typescript
public readonly policy: IFirewallPolicyProperty;
```

- *Type:* raindancers-cdk.nwFirewall.IFirewallPolicyProperty

---


### ForwardingRules <a name="ForwardingRules" id="raindancers-cdk.dns.ForwardingRules"></a>

create forwarding rules and associate them with a vpc.

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.ForwardingRules.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.ForwardingRules(scope: Construct, id: string, props: ForwardingRulesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.ForwardingRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ForwardingRules.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ForwardingRules.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.ForwardingRulesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.ForwardingRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.ForwardingRules.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.ForwardingRules.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.ForwardingRulesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.ForwardingRules.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.ForwardingRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.ForwardingRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.ForwardingRules.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.ForwardingRules.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.ForwardingRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.ForwardingRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.ForwardingRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### GwLBTunnel <a name="GwLBTunnel" id="raindancers-cdk.geneve.GwLBTunnel"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.geneve.GwLBTunnel.Initializer"></a>

```typescript
import { geneve } from 'raindancers-cdk'

new geneve.GwLBTunnel(scope: Construct, id: string, props: GwLBTunnelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.geneve.GwLBTunnelProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.geneve.GwLBTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.geneve.GwLBTunnel.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.geneve.GwLBTunnel.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.geneve.GwLBTunnelProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.geneve.GwLBTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.geneve.GwLBTunnel.isConstruct"></a>

```typescript
import { geneve } from 'raindancers-cdk'

geneve.GwLBTunnel.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.geneve.GwLBTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.instanceAvailabilityZone">instanceAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.instancePrivateDnsName">instancePrivateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.instancePrivateIp">instancePrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.instancePublicDnsName">instancePublicDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnel.property.instancePublicIp">instancePublicIp</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.geneve.GwLBTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `instanceAvailabilityZone`<sup>Required</sup> <a name="instanceAvailabilityZone" id="raindancers-cdk.geneve.GwLBTunnel.property.instanceAvailabilityZone"></a>

```typescript
public readonly instanceAvailabilityZone: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="raindancers-cdk.geneve.GwLBTunnel.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instancePrivateDnsName`<sup>Required</sup> <a name="instancePrivateDnsName" id="raindancers-cdk.geneve.GwLBTunnel.property.instancePrivateDnsName"></a>

```typescript
public readonly instancePrivateDnsName: string;
```

- *Type:* string

---

##### `instancePrivateIp`<sup>Required</sup> <a name="instancePrivateIp" id="raindancers-cdk.geneve.GwLBTunnel.property.instancePrivateIp"></a>

```typescript
public readonly instancePrivateIp: string;
```

- *Type:* string

---

##### `instancePublicDnsName`<sup>Required</sup> <a name="instancePublicDnsName" id="raindancers-cdk.geneve.GwLBTunnel.property.instancePublicDnsName"></a>

```typescript
public readonly instancePublicDnsName: string;
```

- *Type:* string

---

##### `instancePublicIp`<sup>Required</sup> <a name="instancePublicIp" id="raindancers-cdk.geneve.GwLBTunnel.property.instancePublicIp"></a>

```typescript
public readonly instancePublicIp: string;
```

- *Type:* string

---


### ImagePipeline <a name="ImagePipeline" id="raindancers-cdk.imagebuilder.ImagePipeline"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.imagebuilder.ImagePipeline.Initializer"></a>

```typescript
import { imagebuilder } from 'raindancers-cdk'

new imagebuilder.ImagePipeline(scope: Construct, id: string, props: ImagePipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.imagebuilder.ImagePipelineProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.imagebuilder.ImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.imagebuilder.ImagePipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.imagebuilder.ImagePipeline.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.imagebuilder.ImagePipelineProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.imagebuilder.ImagePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.imagebuilder.ImagePipeline.isConstruct"></a>

```typescript
import { imagebuilder } from 'raindancers-cdk'

imagebuilder.ImagePipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.imagebuilder.ImagePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.property.builderSnsTopic">builderSnsTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | SNS Topic where the internal ImageBuilder will notify about new builds. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.aws_imagebuilder.CfnImagePipeline</code> | The internal image pipeline created by this construct. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipeline.property.imageRecipeComponents">imageRecipeComponents</a></code> | <code>aws-cdk-lib.aws_imagebuilder.CfnImageRecipe.ComponentConfigurationProperty[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.imagebuilder.ImagePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `builderSnsTopic`<sup>Required</sup> <a name="builderSnsTopic" id="raindancers-cdk.imagebuilder.ImagePipeline.property.builderSnsTopic"></a>

```typescript
public readonly builderSnsTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

SNS Topic where the internal ImageBuilder will notify about new builds.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="raindancers-cdk.imagebuilder.ImagePipeline.property.pipeline"></a>

```typescript
public readonly pipeline: CfnImagePipeline;
```

- *Type:* aws-cdk-lib.aws_imagebuilder.CfnImagePipeline

The internal image pipeline created by this construct.

---

##### `imageRecipeComponents`<sup>Required</sup> <a name="imageRecipeComponents" id="raindancers-cdk.imagebuilder.ImagePipeline.property.imageRecipeComponents"></a>

```typescript
public readonly imageRecipeComponents: ComponentConfigurationProperty[];
```

- *Type:* aws-cdk-lib.aws_imagebuilder.CfnImageRecipe.ComponentConfigurationProperty[]

---


### InspectionRoutes <a name="InspectionRoutes" id="raindancers-cdk.cloudNetwork.InspectionRoutes"></a>

Inspection routes will propogate this VPC's Cidrs into the Inspection VPC's route table so it has a return path.

HOwever the reverse is not true, We do not need the routes of the Inspection VPC, as data is only passing through it,
and it is not an actual endpoint.

In most caases what you need to do is pass a list of routes to the firewall.

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.InspectionRoutes(scope: Construct, id: string, props: InspectionRoutesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudNetwork.InspectionRoutesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.InspectionRoutes.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.InspectionRoutesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutes.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudNetwork.InspectionRoutes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudNetwork.InspectionRoutes.isConstruct"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.InspectionRoutes.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.InspectionRoutes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudNetwork.InspectionRoutes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### IpamVPCPlanningTools <a name="IpamVPCPlanningTools" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools"></a>

- *Implements:* raindancers-cdk.cloudNetwork.IIpamPlanningTool

Creates IPAM planning pools for VPC subnet allocation.

This construct creates IPv4 and IPv6 IPAM pools that are used to allocate
IP addresses to subnets within the VPC. The pools are configured as planning
pools with the VPC as the source resource.

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.IpamVPCPlanningTools(scope: Construct, id: string, props: IpamPlanningTools)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The parent construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct ID. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudNetwork.IpamPlanningTools</code> | - Configuration properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.IpamPlanningTools

Configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.isConstruct"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.IpamVPCPlanningTools.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.ipv4PlanningPool">ipv4PlanningPool</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource \| aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | IPv4 IPAM pool for subnet allocation. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.ipv6PlanningPool">ipv6PlanningPool</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource \| aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | IPv6 IPAM pool for subnet allocation. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.waiter">waiter</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ipv4PlanningPool`<sup>Required</sup> <a name="ipv4PlanningPool" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.ipv4PlanningPool"></a>

```typescript
public readonly ipv4PlanningPool: AwsCustomResource | CfnIPAMPool;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource | aws-cdk-lib.aws_ec2.CfnIPAMPool

IPv4 IPAM pool for subnet allocation.

---

##### `ipv6PlanningPool`<sup>Required</sup> <a name="ipv6PlanningPool" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.ipv6PlanningPool"></a>

```typescript
public readonly ipv6PlanningPool: AwsCustomResource | CfnIPAMPool;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource | aws-cdk-lib.aws_ec2.CfnIPAMPool

IPv6 IPAM pool for subnet allocation.

---

##### `waiter`<sup>Required</sup> <a name="waiter" id="raindancers-cdk.cloudNetwork.IpamVPCPlanningTools.property.waiter"></a>

```typescript
public readonly waiter: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---


### JoinActiveDirectory <a name="JoinActiveDirectory" id="raindancers-cdk.ssm.automation.JoinActiveDirectory"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer"></a>

```typescript
import { ssm } from 'raindancers-cdk'

new ssm.automation.JoinActiveDirectory(scope: Construct, id: string, props: JoinActiveDirectoryAutomationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectory.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.isConstruct"></a>

```typescript
import { ssm } from 'raindancers-cdk'

ssm.automation.JoinActiveDirectory.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.ssm.automation.JoinActiveDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LocalZoneOptIn <a name="LocalZoneOptIn" id="raindancers-cdk.localzone.LocalZoneOptIn"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.localzone.LocalZoneOptIn.Initializer"></a>

```typescript
import { localzone } from 'raindancers-cdk'

new localzone.LocalZoneOptIn(scope: Construct, id: string, props: LocalZoneOptInProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptIn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptIn.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptIn.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.localzone.LocalZoneOptInProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.localzone.LocalZoneOptIn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.localzone.LocalZoneOptIn.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.localzone.LocalZoneOptIn.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.localzone.LocalZoneOptInProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptIn.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.localzone.LocalZoneOptIn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptIn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.localzone.LocalZoneOptIn.isConstruct"></a>

```typescript
import { localzone } from 'raindancers-cdk'

localzone.LocalZoneOptIn.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.localzone.LocalZoneOptIn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptIn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.localzone.LocalZoneOptIn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NestedRouteStack <a name="NestedRouteStack" id="raindancers-cdk.cloudNetwork.NestedRouteStack"></a>

A nested stack that contains routing configurations for a VPC.

This nested stack creates and manages all routing tables and routes for a VPC,
including Transit Gateway routes, firewall inspection routes, and internet routing.
Using a nested stack helps organize complex routing configurations separately
from the main VPC infrastructure.

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.NestedRouteStack(scope: Construct, id: string, props: NestedRouteStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The parent construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct ID. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudNetwork.NestedRouteStackProps</code> | - Configuration properties for the routing stack. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.NestedRouteStack.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.NestedRouteStackProps

Configuration properties for the routing stack.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudNetwork.NestedRouteStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="raindancers-cdk.cloudNetwork.NestedRouteStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="raindancers-cdk.cloudNetwork.NestedRouteStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="raindancers-cdk.cloudNetwork.NestedRouteStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="raindancers-cdk.cloudNetwork.NestedRouteStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="raindancers-cdk.cloudNetwork.NestedRouteStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="raindancers-cdk.cloudNetwork.NestedRouteStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="raindancers-cdk.cloudNetwork.NestedRouteStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="raindancers-cdk.cloudNetwork.NestedRouteStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="raindancers-cdk.cloudNetwork.NestedRouteStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="raindancers-cdk.cloudNetwork.NestedRouteStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="raindancers-cdk.cloudNetwork.NestedRouteStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="raindancers-cdk.cloudNetwork.NestedRouteStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="raindancers-cdk.cloudNetwork.NestedRouteStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="raindancers-cdk.cloudNetwork.NestedRouteStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="raindancers-cdk.cloudNetwork.NestedRouteStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="raindancers-cdk.cloudNetwork.NestedRouteStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="raindancers-cdk.cloudNetwork.NestedRouteStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="raindancers-cdk.cloudNetwork.NestedRouteStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="raindancers-cdk.cloudNetwork.NestedRouteStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="raindancers-cdk.cloudNetwork.NestedRouteStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="raindancers-cdk.cloudNetwork.NestedRouteStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="raindancers-cdk.cloudNetwork.NestedRouteStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="raindancers-cdk.cloudNetwork.NestedRouteStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="raindancers-cdk.cloudNetwork.NestedRouteStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.cloudNetwork.NestedRouteStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="raindancers-cdk.cloudNetwork.NestedRouteStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="raindancers-cdk.cloudNetwork.NestedRouteStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="raindancers-cdk.cloudNetwork.NestedRouteStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="raindancers-cdk.cloudNetwork.NestedRouteStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="raindancers-cdk.cloudNetwork.NestedRouteStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="raindancers-cdk.cloudNetwork.NestedRouteStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="raindancers-cdk.cloudNetwork.NestedRouteStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.cloudNetwork.NestedRouteStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="raindancers-cdk.cloudNetwork.NestedRouteStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudNetwork.NestedRouteStack.isConstruct"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.NestedRouteStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.NestedRouteStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="raindancers-cdk.cloudNetwork.NestedRouteStack.isStack"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.NestedRouteStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.NestedRouteStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="raindancers-cdk.cloudNetwork.NestedRouteStack.of"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.NestedRouteStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.cloudNetwork.NestedRouteStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="raindancers-cdk.cloudNetwork.NestedRouteStack.isNestedStack"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.NestedRouteStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.NestedRouteStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="raindancers-cdk.cloudNetwork.NestedRouteStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### NetworkFirewall <a name="NetworkFirewall" id="raindancers-cdk.nwFirewall.NetworkFirewall"></a>

- *Implements:* raindancers-cdk.nwFirewall.INetworkFirewall

Creates Network Firewalls.

#### Initializers <a name="Initializers" id="raindancers-cdk.nwFirewall.NetworkFirewall.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

new nwFirewall.NetworkFirewall(scope: Construct, id: string, props: NetworkFirewallProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | Scope. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | id. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.nwFirewall.NetworkFirewallProps</code> | props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.nwFirewall.NetworkFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Scope.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.NetworkFirewall.Initializer.parameter.id"></a>

- *Type:* string

id.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.NetworkFirewall.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.NetworkFirewallProps

props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.nwFirewall.NetworkFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.nwFirewall.NetworkFirewall.isConstruct"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

nwFirewall.NetworkFirewall.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.nwFirewall.NetworkFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.alertLogs">alertLogs</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | alert log. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.endPointIds">endPointIds</a></code> | <code>string[]</code> | Gateway Endpoints for the Firewalls. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.firewallArn">firewallArn</a></code> | <code>string</code> | Arn of the firewall. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.firewallId">firewallId</a></code> | <code>string</code> | Firewall ID. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.firewallSubnetIds">firewallSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewall.property.flowLogs">flowLogs</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | flow log. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `alertLogs`<sup>Required</sup> <a name="alertLogs" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.alertLogs"></a>

```typescript
public readonly alertLogs: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

alert log.

---

##### `endPointIds`<sup>Required</sup> <a name="endPointIds" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.endPointIds"></a>

```typescript
public readonly endPointIds: string[];
```

- *Type:* string[]

Gateway Endpoints for the Firewalls.

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

Arn of the firewall.

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

Firewall ID.

---

##### `firewallSubnetIds`<sup>Required</sup> <a name="firewallSubnetIds" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.firewallSubnetIds"></a>

```typescript
public readonly firewallSubnetIds: string[];
```

- *Type:* string[]

---

##### `flowLogs`<sup>Required</sup> <a name="flowLogs" id="raindancers-cdk.nwFirewall.NetworkFirewall.property.flowLogs"></a>

```typescript
public readonly flowLogs: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

flow log.

---


### NWFWSubnetRoutes <a name="NWFWSubnetRoutes" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.NWFWSubnetRoutes(scope: Construct, id: string, props: SubNetRouteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.SubNetRouteProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.SubNetRouteProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.NWFWSubnetRoutes.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.NWFWSubnetRoutes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### OpenAPIProxy <a name="OpenAPIProxy" id="raindancers-cdk.agentCore.OpenAPIProxy"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.agentCore.OpenAPIProxy.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

new agentCore.OpenAPIProxy(scope: Construct, id: string, props: OpenAPIProxyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.agentCore.OpenAPIProxyProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.agentCore.OpenAPIProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.agentCore.OpenAPIProxy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.agentCore.OpenAPIProxy.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.agentCore.OpenAPIProxyProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.agentCore.OpenAPIProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.agentCore.OpenAPIProxy.isConstruct"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

agentCore.OpenAPIProxy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.agentCore.OpenAPIProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.property.functionUrl">functionUrl</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionUrl</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.property.objectUri">objectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxy.property.proxyFunction">proxyFunction</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.agentCore.OpenAPIProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `functionUrl`<sup>Required</sup> <a name="functionUrl" id="raindancers-cdk.agentCore.OpenAPIProxy.property.functionUrl"></a>

```typescript
public readonly functionUrl: FunctionUrl;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrl

---

##### `objectUri`<sup>Required</sup> <a name="objectUri" id="raindancers-cdk.agentCore.OpenAPIProxy.property.objectUri"></a>

```typescript
public readonly objectUri: string;
```

- *Type:* string

---

##### `proxyFunction`<sup>Required</sup> <a name="proxyFunction" id="raindancers-cdk.agentCore.OpenAPIProxy.property.proxyFunction"></a>

```typescript
public readonly proxyFunction: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### OrganizationalUnit <a name="OrganizationalUnit" id="raindancers-cdk.organizations.OrganizationalUnit"></a>

- *Implements:* raindancers-cdk.organizations.IOrganizationalUnit

#### Initializers <a name="Initializers" id="raindancers-cdk.organizations.OrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'raindancers-cdk'

new organizations.OrganizationalUnit(scope: Construct, id: string, props: OrganizationalUnitProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.organizations.OrganizationalUnitProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.organizations.OrganizationalUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.organizations.OrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.organizations.OrganizationalUnit.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.organizations.OrganizationalUnitProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.organizations.OrganizationalUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.fromAttributes">fromAttributes</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.organizations.OrganizationalUnit.isConstruct"></a>

```typescript
import { organizations } from 'raindancers-cdk'

organizations.OrganizationalUnit.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.organizations.OrganizationalUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromAttributes` <a name="fromAttributes" id="raindancers-cdk.organizations.OrganizationalUnit.fromAttributes"></a>

```typescript
import { organizations } from 'raindancers-cdk'

organizations.OrganizationalUnit.fromAttributes(props: OrganizationalUnitAttributes)
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.organizations.OrganizationalUnit.fromAttributes.parameter.props"></a>

- *Type:* raindancers-cdk.organizations.OrganizationalUnitAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnit.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.organizations.OrganizationalUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.organizations.OrganizationalUnit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.organizations.OrganizationalUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.organizations.OrganizationalUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="raindancers-cdk.organizations.OrganizationalUnit.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---


### PermissionSet <a name="PermissionSet" id="raindancers-cdk.sso.PermissionSet"></a>

- *Implements:* raindancers-cdk.sso.IPermissionSet

#### Initializers <a name="Initializers" id="raindancers-cdk.sso.PermissionSet.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

new sso.PermissionSet(scope: Construct, id: string, props: PermissionSetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.sso.PermissionSet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.sso.PermissionSet.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.sso.PermissionSetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.sso.PermissionSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.sso.PermissionSet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.sso.PermissionSet.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.sso.PermissionSetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.grant">grant</a></code> | Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance. |

---

##### `toString` <a name="toString" id="raindancers-cdk.sso.PermissionSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.sso.PermissionSet.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.sso.PermissionSet.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="raindancers-cdk.sso.PermissionSet.grant"></a>

```typescript
public grant(id: string, assignmentOptions: AssignmentOptions): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.sso.PermissionSet.grant.parameter.id"></a>

- *Type:* string

---

###### `assignmentOptions`<sup>Required</sup> <a name="assignmentOptions" id="raindancers-cdk.sso.PermissionSet.grant.parameter.assignmentOptions"></a>

- *Type:* raindancers-cdk.sso.AssignmentOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.fromPermissionSetArn">fromPermissionSetArn</a></code> | Reference an existing permission set by ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.sso.PermissionSet.isConstruct"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.PermissionSet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.sso.PermissionSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.sso.PermissionSet.isOwnedResource"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.PermissionSet.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.sso.PermissionSet.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.sso.PermissionSet.isResource"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.PermissionSet.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.sso.PermissionSet.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPermissionSetArn` <a name="fromPermissionSetArn" id="raindancers-cdk.sso.PermissionSet.fromPermissionSetArn"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.PermissionSet.fromPermissionSetArn(scope: Construct, id: string, permissionSetArn: string)
```

Reference an existing permission set by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.sso.PermissionSet.fromPermissionSetArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.sso.PermissionSet.fromPermissionSetArn.parameter.id"></a>

- *Type:* string

---

###### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-cdk.sso.PermissionSet.fromPermissionSetArn.parameter.permissionSetArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.cfnPermissionSet">cfnPermissionSet</a></code> | <code>aws-cdk-lib.aws_sso.CfnPermissionSet</code> | The underlying CfnPermissionSet resource. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.name">name</a></code> | <code>string</code> | Name of the Permission Set. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#raindancers-cdk.sso.PermissionSet.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance the permission set belongs to. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.sso.PermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.sso.PermissionSet.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.sso.PermissionSet.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnPermissionSet`<sup>Required</sup> <a name="cfnPermissionSet" id="raindancers-cdk.sso.PermissionSet.property.cfnPermissionSet"></a>

```typescript
public readonly cfnPermissionSet: CfnPermissionSet;
```

- *Type:* aws-cdk-lib.aws_sso.CfnPermissionSet

The underlying CfnPermissionSet resource.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.sso.PermissionSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Permission Set.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-cdk.sso.PermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-cdk.sso.PermissionSet.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance the permission set belongs to.

---


### R53Resolverendpoints <a name="R53Resolverendpoints" id="raindancers-cdk.dns.R53Resolverendpoints"></a>

Create Route53 Resolver Endpoints for MultiVPC and Hybrid DNS Resolution.

#### Initializers <a name="Initializers" id="raindancers-cdk.dns.R53Resolverendpoints.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

new dns.R53Resolverendpoints(scope: Construct, id: string, props: R53ResolverendpointsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which these resources are craeted. |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | the id of the construct. |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.dns.R53ResolverendpointsProps</code> | propertys for the R53Resolver Endpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.dns.R53Resolverendpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which these resources are craeted.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.dns.R53Resolverendpoints.Initializer.parameter.id"></a>

- *Type:* string

the id of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.dns.R53Resolverendpoints.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.dns.R53ResolverendpointsProps

propertys for the R53Resolver Endpoints.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.dns.R53Resolverendpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.dns.R53Resolverendpoints.isConstruct"></a>

```typescript
import { dns } from 'raindancers-cdk'

dns.R53Resolverendpoints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.dns.R53Resolverendpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.property.inboundResolver">inboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | inbound resolver. |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.property.inboundResolversIp">inboundResolversIp</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]</code> | list of Resolver IP address's. |
| <code><a href="#raindancers-cdk.dns.R53Resolverendpoints.property.outboundResolver">outboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | outbound resolver. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.dns.R53Resolverendpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `inboundResolver`<sup>Required</sup> <a name="inboundResolver" id="raindancers-cdk.dns.R53Resolverendpoints.property.inboundResolver"></a>

```typescript
public readonly inboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

inbound resolver.

---

##### `inboundResolversIp`<sup>Required</sup> <a name="inboundResolversIp" id="raindancers-cdk.dns.R53Resolverendpoints.property.inboundResolversIp"></a>

```typescript
public readonly inboundResolversIp: TargetAddressProperty[];
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]

list of Resolver IP address's.

---

##### `outboundResolver`<sup>Required</sup> <a name="outboundResolver" id="raindancers-cdk.dns.R53Resolverendpoints.property.outboundResolver"></a>

```typescript
public readonly outboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

outbound resolver.

---


### ReMailer <a name="ReMailer" id="raindancers-cdk.remailer.ReMailer"></a>

Creates a remailing service for an entire Domain.

Typical use case is to collate al

#### Initializers <a name="Initializers" id="raindancers-cdk.remailer.ReMailer.Initializer"></a>

```typescript
import { remailer } from 'raindancers-cdk'

new remailer.ReMailer(scope: Construct, id: string, props: RemailerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.remailer.ReMailer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.remailer.ReMailer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.remailer.ReMailer.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.remailer.RemailerProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.remailer.ReMailer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.remailer.ReMailer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.remailer.ReMailer.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.remailer.RemailerProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.remailer.ReMailer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.remailer.ReMailer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-cdk.remailer.ReMailer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-cdk.remailer.ReMailer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-cdk.remailer.ReMailer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.remailer.ReMailer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.remailer.ReMailer.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-cdk.remailer.ReMailer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.remailer.ReMailer.isConstruct"></a>

```typescript
import { remailer } from 'raindancers-cdk'

remailer.ReMailer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.remailer.ReMailer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-cdk.remailer.ReMailer.isOwnedResource"></a>

```typescript
import { remailer } from 'raindancers-cdk'

remailer.ReMailer.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.remailer.ReMailer.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-cdk.remailer.ReMailer.isResource"></a>

```typescript
import { remailer } from 'raindancers-cdk'

remailer.ReMailer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-cdk.remailer.ReMailer.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.remailer.ReMailer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.remailer.ReMailer.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.remailer.ReMailer.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.remailer.ReMailer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.remailer.ReMailer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.remailer.ReMailer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### ResolveSubnetGroupName <a name="ResolveSubnetGroupName" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName"></a>

Creates a period task to update the SSM Agent on an EC2 Instance.

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.ResolveSubnetGroupName(scope: Construct, id: string, props: ResolveSubnetGroupNameProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.ResolveSubnetGroupName.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `subnetSelection`<sup>Required</sup> <a name="subnetSelection" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupName.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---


### Router <a name="Router" id="raindancers-cdk.cloudNetwork.Router"></a>

Router construct that manages routing configuration for VPC subnets.

Handles routing to Transit Gateway, Internet Gateway, Firewall Endpoints, and other destinations.

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.Router.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.Router(scope: Construct, id: string, props: RouterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The parent construct. |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct identifier. |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudNetwork.RouterProps</code> | - Router configuration properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.Router.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.Router.Initializer.parameter.id"></a>

- *Type:* string

The construct identifier.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.Router.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.RouterProps

Router configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudNetwork.Router.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudNetwork.Router.isConstruct"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.Router.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudNetwork.Router.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.cidrLookup">cidrLookup</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.ipV4CidrLookup">ipV4CidrLookup</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.routerProvider">routerProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.firewall">firewall</a></code> | <code>raindancers-cdk.nwFirewall.NetworkFirewall</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.firewallEndpoints">firewallEndpoints</a></code> | <code>raindancers-cdk.cloudNetwork.IFirewallEndpoints[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.internetGateway">internetGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnInternetGateway</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Router.property.blackhole">blackhole</a></code> | <code>aws-cdk-lib.aws_ec2.CfnNetworkInterface</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudNetwork.Router.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cidrLookup`<sup>Required</sup> <a name="cidrLookup" id="raindancers-cdk.cloudNetwork.Router.property.cidrLookup"></a>

```typescript
public readonly cidrLookup: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `ipV4CidrLookup`<sup>Required</sup> <a name="ipV4CidrLookup" id="raindancers-cdk.cloudNetwork.Router.property.ipV4CidrLookup"></a>

```typescript
public readonly ipV4CidrLookup: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `routerProvider`<sup>Required</sup> <a name="routerProvider" id="raindancers-cdk.cloudNetwork.Router.property.routerProvider"></a>

```typescript
public readonly routerProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.Router.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="raindancers-cdk.cloudNetwork.Router.property.firewall"></a>

```typescript
public readonly firewall: NetworkFirewall;
```

- *Type:* raindancers-cdk.nwFirewall.NetworkFirewall

---

##### `firewallEndpoints`<sup>Optional</sup> <a name="firewallEndpoints" id="raindancers-cdk.cloudNetwork.Router.property.firewallEndpoints"></a>

```typescript
public readonly firewallEndpoints: IFirewallEndpoints[];
```

- *Type:* raindancers-cdk.cloudNetwork.IFirewallEndpoints[]

---

##### `internetGateway`<sup>Optional</sup> <a name="internetGateway" id="raindancers-cdk.cloudNetwork.Router.property.internetGateway"></a>

```typescript
public readonly internetGateway: CfnInternetGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnInternetGateway

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="raindancers-cdk.cloudNetwork.Router.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="raindancers-cdk.cloudNetwork.Router.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `blackhole`<sup>Optional</sup> <a name="blackhole" id="raindancers-cdk.cloudNetwork.Router.property.blackhole"></a>

```typescript
public readonly blackhole: CfnNetworkInterface;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnNetworkInterface

---


### Router <a name="Router" id="raindancers-cdk.enterprisevpc.Router"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.Router.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.Router(scope: Construct, id: string, props: RouterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.RouterProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.Router.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.Router.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.Router.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.RouterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.addRoutes">addRoutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.Router.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addRoutes` <a name="addRoutes" id="raindancers-cdk.enterprisevpc.Router.addRoutes"></a>

```typescript
public addRoutes(props: AddRoutesPropsV2): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.Router.addRoutes.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.AddRoutesPropsV2

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.Router.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.Router.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.Router.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.cloudWanName">cloudWanName</a></code> | <code>any</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.firewallEndpoints">firewallEndpoints</a></code> | <code>any</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.gwlbEndpoints">gwlbEndpoints</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.tgWaiterProvider">tgWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.vpcAttachmentCR">vpcAttachmentCR</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Router.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.Router.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-cdk.enterprisevpc.Router.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `cloudWanName`<sup>Required</sup> <a name="cloudWanName" id="raindancers-cdk.enterprisevpc.Router.property.cloudWanName"></a>

```typescript
public readonly cloudWanName: any;
```

- *Type:* any

---

##### `firewallEndpoints`<sup>Required</sup> <a name="firewallEndpoints" id="raindancers-cdk.enterprisevpc.Router.property.firewallEndpoints"></a>

```typescript
public readonly firewallEndpoints: any;
```

- *Type:* any

---

##### `gwlbEndpoints`<sup>Required</sup> <a name="gwlbEndpoints" id="raindancers-cdk.enterprisevpc.Router.property.gwlbEndpoints"></a>

```typescript
public readonly gwlbEndpoints: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `tgWaiterProvider`<sup>Required</sup> <a name="tgWaiterProvider" id="raindancers-cdk.enterprisevpc.Router.property.tgWaiterProvider"></a>

```typescript
public readonly tgWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.Router.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcAttachmentCR`<sup>Required</sup> <a name="vpcAttachmentCR" id="raindancers-cdk.enterprisevpc.Router.property.vpcAttachmentCR"></a>

```typescript
public readonly vpcAttachmentCR: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `firewallArn`<sup>Optional</sup> <a name="firewallArn" id="raindancers-cdk.enterprisevpc.Router.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="raindancers-cdk.enterprisevpc.Router.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="raindancers-cdk.enterprisevpc.Router.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---


### SecurityLake <a name="SecurityLake" id="raindancers-cdk.securityLake.SecurityLake"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.securityLake.SecurityLake.Initializer"></a>

```typescript
import { securityLake } from 'raindancers-cdk'

new securityLake.SecurityLake(scope: Construct, id: string, props: SecurityLakeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.securityLake.SecurityLakeProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.securityLake.SecurityLake.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.securityLake.SecurityLake.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.securityLake.SecurityLake.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.securityLake.SecurityLakeProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.addAwsSource">addAwsSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.securityLake.SecurityLake.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addAwsSource` <a name="addAwsSource" id="raindancers-cdk.securityLake.SecurityLake.addAwsSource"></a>

```typescript
public addAwsSource(props: AddAwsSourceProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.securityLake.SecurityLake.addAwsSource.parameter.props"></a>

- *Type:* raindancers-cdk.securityLake.AddAwsSourceProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.securityLake.SecurityLake.isConstruct"></a>

```typescript
import { securityLake } from 'raindancers-cdk'

securityLake.SecurityLake.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.securityLake.SecurityLake.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLake.property.arn">arn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.securityLake.SecurityLake.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.securityLake.SecurityLake.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---


### ServerlessClamscan <a name="ServerlessClamscan" id="raindancers-cdk.clamscan.ServerlessClamscan"></a>

An [aws-cdk](https://github.com/aws/aws-cdk) construct that uses [ClamAV®](https://www.clamav.net/). to scan objects in Amazon S3 for viruses. The construct provides a flexible interface for a system to act based on the results of a ClamAV virus scan.

The construct creates a Lambda function with EFS integration to support larger files.
A VPC with isolated subnets, a S3 Gateway endpoint will also be created.

Additionally creates an twice-daily job to download the latest ClamAV definition files to the
Virus Definitions S3 Bucket by utilizing an EventBridge rule and a Lambda function and
publishes CloudWatch Metrics to the 'serverless-clamscan' namespace.

__Important O&M__:
When ClamAV publishes updates to the scanner you will see “Your ClamAV installation is OUTDATED” in your scan results.
While the construct creates a system to keep the database definitions up to date, you must update the scanner to
detect all the latest Viruses.

Update the docker images of the Lambda functions with the latest version of ClamAV by re-running `cdk deploy`.

Successful Scan Event format
```json
{
   "source": "serverless-clamscan",
   "input_bucket": <input_bucket_name>,
   "input_key": <object_key>,
   "status": <"CLEAN"|"INFECTED"|"N/A">,
   "message": <scan_summary>,
 }
```

Note: The Virus Definitions bucket policy will likely cause a deletion error if you choose to delete
the stack associated in the construct. However since the bucket itself gets deleted, you can delete
the stack again to resolve the error.

#### Initializers <a name="Initializers" id="raindancers-cdk.clamscan.ServerlessClamscan.Initializer"></a>

```typescript
import { clamscan } from 'raindancers-cdk'

new clamscan.ServerlessClamscan(scope: Construct, id: string, props: ServerlessClamscanProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent creating construct (usually `this`). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct's name. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.clamscan.ServerlessClamscanProps</code> | A `ServerlessClamscanProps` interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.clamscan.ServerlessClamscan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.clamscan.ServerlessClamscan.Initializer.parameter.id"></a>

- *Type:* string

The construct's name.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.clamscan.ServerlessClamscan.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.clamscan.ServerlessClamscanProps

A `ServerlessClamscanProps` interface.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.addSourceBucket">addSourceBucket</a></code> | Sets the specified S3 Bucket as a s3:ObjectCreate* for the ClamAV function. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.getPolicyStatementForBucket">getPolicyStatementForBucket</a></code> | Returns the statement that should be added to the bucket policy in order to prevent objects to be accessed when they are not clean or there have been scanning errors: this policy should be added manually if external buckets are passed to addSourceBucket(). |

---

##### `toString` <a name="toString" id="raindancers-cdk.clamscan.ServerlessClamscan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addSourceBucket` <a name="addSourceBucket" id="raindancers-cdk.clamscan.ServerlessClamscan.addSourceBucket"></a>

```typescript
public addSourceBucket(bucket: IBucket): void
```

Sets the specified S3 Bucket as a s3:ObjectCreate* for the ClamAV function.

Grants the ClamAV function permissions to get and tag objects.
Adds a bucket policy to disallow GetObject operations on files that are tagged 'IN PROGRESS', 'INFECTED', or 'ERROR'.

###### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-cdk.clamscan.ServerlessClamscan.addSourceBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to add the scanning bucket policy and s3:ObjectCreate* trigger to.

---

##### `getPolicyStatementForBucket` <a name="getPolicyStatementForBucket" id="raindancers-cdk.clamscan.ServerlessClamscan.getPolicyStatementForBucket"></a>

```typescript
public getPolicyStatementForBucket(bucket: IBucket): PolicyStatement
```

Returns the statement that should be added to the bucket policy in order to prevent objects to be accessed when they are not clean or there have been scanning errors: this policy should be added manually if external buckets are passed to addSourceBucket().

###### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-cdk.clamscan.ServerlessClamscan.getPolicyStatementForBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket which you need to protect with the policy.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.clamscan.ServerlessClamscan.isConstruct"></a>

```typescript
import { clamscan } from 'raindancers-cdk'

clamscan.ServerlessClamscan.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.clamscan.ServerlessClamscan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.errorDest">errorDest</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The Lambda Destination for failed on erred scans [ERROR, IN PROGRESS (If error is due to Lambda timeout)]. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.resultDest">resultDest</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The Lambda Destination for completed ClamAV scans [CLEAN, INFECTED]. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.scanAssumedPrincipal">scanAssumedPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.ArnPrincipal</code> | *No description.* |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.cleanRule">cleanRule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | Conditional: An Event Bridge Rule for files that are marked 'CLEAN' by ClamAV if a success destination was not specified. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.defsAccessLogsBucket">defsAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Conditional: The Bucket for access logs for the virus definitions bucket if logging is enabled (defsBucketAccessLogsConfig). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.errorDeadLetterQueue">errorDeadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | Conditional: The SQS Dead Letter Queue for the errorQueue if a failure (onError) destination was not specified. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.errorQueue">errorQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | Conditional: The SQS Queue for erred scans if a failure (onError) destination was not specified. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.infectedRule">infectedRule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | Conditional: An Event Bridge Rule for files that are marked 'INFECTED' by ClamAV if a success destination was not specified. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.resultBus">resultBus</a></code> | <code>aws-cdk-lib.aws_events.EventBus</code> | Conditional: The Event Bridge Bus for completed ClamAV scans if a success (onResult) destination was not specified. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscan.property.useImportedBuckets">useImportedBuckets</a></code> | <code>boolean</code> | Conditional: When true, the user accepted the responsibility for using imported buckets. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.clamscan.ServerlessClamscan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `errorDest`<sup>Required</sup> <a name="errorDest" id="raindancers-cdk.clamscan.ServerlessClamscan.property.errorDest"></a>

```typescript
public readonly errorDest: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination

The Lambda Destination for failed on erred scans [ERROR, IN PROGRESS (If error is due to Lambda timeout)].

---

##### `resultDest`<sup>Required</sup> <a name="resultDest" id="raindancers-cdk.clamscan.ServerlessClamscan.property.resultDest"></a>

```typescript
public readonly resultDest: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination

The Lambda Destination for completed ClamAV scans [CLEAN, INFECTED].

---

##### `scanAssumedPrincipal`<sup>Required</sup> <a name="scanAssumedPrincipal" id="raindancers-cdk.clamscan.ServerlessClamscan.property.scanAssumedPrincipal"></a>

```typescript
public readonly scanAssumedPrincipal: ArnPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.ArnPrincipal

---

##### `cleanRule`<sup>Optional</sup> <a name="cleanRule" id="raindancers-cdk.clamscan.ServerlessClamscan.property.cleanRule"></a>

```typescript
public readonly cleanRule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

Conditional: An Event Bridge Rule for files that are marked 'CLEAN' by ClamAV if a success destination was not specified.

---

##### `defsAccessLogsBucket`<sup>Optional</sup> <a name="defsAccessLogsBucket" id="raindancers-cdk.clamscan.ServerlessClamscan.property.defsAccessLogsBucket"></a>

```typescript
public readonly defsAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

Conditional: The Bucket for access logs for the virus definitions bucket if logging is enabled (defsBucketAccessLogsConfig).

---

##### `errorDeadLetterQueue`<sup>Optional</sup> <a name="errorDeadLetterQueue" id="raindancers-cdk.clamscan.ServerlessClamscan.property.errorDeadLetterQueue"></a>

```typescript
public readonly errorDeadLetterQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

Conditional: The SQS Dead Letter Queue for the errorQueue if a failure (onError) destination was not specified.

---

##### `errorQueue`<sup>Optional</sup> <a name="errorQueue" id="raindancers-cdk.clamscan.ServerlessClamscan.property.errorQueue"></a>

```typescript
public readonly errorQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

Conditional: The SQS Queue for erred scans if a failure (onError) destination was not specified.

---

##### `infectedRule`<sup>Optional</sup> <a name="infectedRule" id="raindancers-cdk.clamscan.ServerlessClamscan.property.infectedRule"></a>

```typescript
public readonly infectedRule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

Conditional: An Event Bridge Rule for files that are marked 'INFECTED' by ClamAV if a success destination was not specified.

---

##### `resultBus`<sup>Optional</sup> <a name="resultBus" id="raindancers-cdk.clamscan.ServerlessClamscan.property.resultBus"></a>

```typescript
public readonly resultBus: EventBus;
```

- *Type:* aws-cdk-lib.aws_events.EventBus

Conditional: The Event Bridge Bus for completed ClamAV scans if a success (onResult) destination was not specified.

---

##### `useImportedBuckets`<sup>Optional</sup> <a name="useImportedBuckets" id="raindancers-cdk.clamscan.ServerlessClamscan.property.useImportedBuckets"></a>

```typescript
public readonly useImportedBuckets: boolean;
```

- *Type:* boolean

Conditional: When true, the user accepted the responsibility for using imported buckets.

---


### StaticSite <a name="StaticSite" id="raindancers-cdk.cloudfront.StaticSite"></a>

Static site infrastructure, which deploys site content to an S3 bucket.

The site redirects from HTTP to HTTPS, using a CloudFront distribution,
Route53 alias record, and ACM certificate.

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudfront.StaticSite.Initializer"></a>

```typescript
import { cloudfront } from 'raindancers-cdk'

new cloudfront.StaticSite(scope: Stack, id: string, props: StaticSiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudfront.StaticSite.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudfront.StaticSite.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudfront.StaticSite.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.cloudfront.StaticSiteProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudfront.StaticSite.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudfront.StaticSite.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudfront.StaticSite.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.cloudfront.StaticSiteProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudfront.StaticSite.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.cloudfront.StaticSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudfront.StaticSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.cloudfront.StaticSite.isConstruct"></a>

```typescript
import { cloudfront } from 'raindancers-cdk'

cloudfront.StaticSite.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.cloudfront.StaticSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudfront.StaticSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.cloudfront.StaticSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SubnetGroup <a name="SubnetGroup" id="raindancers-cdk.enterprisevpc.SubnetGroup"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.SubnetGroup.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.SubnetGroup(scope: Construct, id: string, props: ESubnetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.ESubnetGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.SubnetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.SubnetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.SubnetGroup.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.ESubnetGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.SubnetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.SubnetGroup.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.SubnetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.SubnetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetGroup.property.subnet">subnet</a></code> | <code>raindancers-cdk.enterprisevpc.ESubnetGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.SubnetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-cdk.enterprisevpc.SubnetGroup.property.subnet"></a>

```typescript
public readonly subnet: ESubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.ESubnetGroup

---


### TagVpcRole <a name="TagVpcRole" id="raindancers-cdk.enterprisevpc.TagVpcRole"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.enterprisevpc.TagVpcRole.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

new enterprisevpc.TagVpcRole(scope: Construct, id: string, props: TagVpcRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.enterprisevpc.TagVpcRoleProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.enterprisevpc.TagVpcRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.enterprisevpc.TagVpcRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.enterprisevpc.TagVpcRole.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.enterprisevpc.TagVpcRoleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.enterprisevpc.TagVpcRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.enterprisevpc.TagVpcRole.isConstruct"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

enterprisevpc.TagVpcRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.enterprisevpc.TagVpcRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRole.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.enterprisevpc.TagVpcRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `role`<sup>Required</sup> <a name="role" id="raindancers-cdk.enterprisevpc.TagVpcRole.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---


### TLSInspectionConfiguration <a name="TLSInspectionConfiguration" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration"></a>

- *Implements:* raindancers-cdk.nwFirewall.ITLSInspectionConfiguration

#### Initializers <a name="Initializers" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

new nwFirewall.TLSInspectionConfiguration(scope: Construct, id: string, props: TLSInspectionConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.isConstruct"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

nwFirewall.TLSInspectionConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.TLSInspectionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### TransitGateway <a name="TransitGateway" id="raindancers-cdk.transitGateway.TransitGateway"></a>

- *Implements:* raindancers-cdk.transitGateway.ITransitGateway

Define a TransitGateway.

Implements ITransitGateway

#### Initializers <a name="Initializers" id="raindancers-cdk.transitGateway.TransitGateway.Initializer"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

new transitGateway.TransitGateway(scope: Construct, id: string, props: TransitGatewayProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the transit gateway. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.transitGateway.TransitGatewayProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.transitGateway.TransitGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transitGateway.TransitGateway.Initializer.parameter.id"></a>

- *Type:* string

The ID of the transit gateway.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.transitGateway.TransitGateway.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.transitGateway.TransitGatewayProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.addRouteToRoutingTable">addRouteToRoutingTable</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.addRoutingTable">addRoutingTable</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.attachVpc">attachVpc</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.createDirectConnectGatewayAssociation">createDirectConnectGatewayAssociation</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.shareTransitGateway">shareTransitGateway</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.transitGateway.TransitGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addRouteToRoutingTable` <a name="addRouteToRoutingTable" id="raindancers-cdk.transitGateway.TransitGateway.addRouteToRoutingTable"></a>

```typescript
public addRouteToRoutingTable(route: TransitGatewayRoute): void
```

###### `route`<sup>Required</sup> <a name="route" id="raindancers-cdk.transitGateway.TransitGateway.addRouteToRoutingTable.parameter.route"></a>

- *Type:* raindancers-cdk.transitGateway.TransitGatewayRoute

---

##### `addRoutingTable` <a name="addRoutingTable" id="raindancers-cdk.transitGateway.TransitGateway.addRoutingTable"></a>

```typescript
public addRoutingTable(name: string): ITransitGatewayRouteTable
```

###### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.transitGateway.TransitGateway.addRoutingTable.parameter.name"></a>

- *Type:* string

---

##### `attachVpc` <a name="attachVpc" id="raindancers-cdk.transitGateway.TransitGateway.attachVpc"></a>

```typescript
public attachVpc(vpc: IVpc, subnets: SubnetSelection, options?: TransitGatewayAttachmentOptions): CfnTransitGatewayAttachment
```

###### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.transitGateway.TransitGateway.attachVpc.parameter.vpc"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.transitGateway.TransitGateway.attachVpc.parameter.subnets"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

###### `options`<sup>Optional</sup> <a name="options" id="raindancers-cdk.transitGateway.TransitGateway.attachVpc.parameter.options"></a>

- *Type:* raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions

---

##### `createDirectConnectGatewayAssociation` <a name="createDirectConnectGatewayAssociation" id="raindancers-cdk.transitGateway.TransitGateway.createDirectConnectGatewayAssociation"></a>

```typescript
public createDirectConnectGatewayAssociation(dxGatewayId: string, allowedPrefixes: AllowedPrefixes[]): void
```

###### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="raindancers-cdk.transitGateway.TransitGateway.createDirectConnectGatewayAssociation.parameter.dxGatewayId"></a>

- *Type:* string

---

###### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="raindancers-cdk.transitGateway.TransitGateway.createDirectConnectGatewayAssociation.parameter.allowedPrefixes"></a>

- *Type:* raindancers-cdk.transitGateway.AllowedPrefixes[]

---

##### `shareTransitGateway` <a name="shareTransitGateway" id="raindancers-cdk.transitGateway.TransitGateway.shareTransitGateway"></a>

```typescript
public shareTransitGateway(accounts: string[]): void
```

###### `accounts`<sup>Required</sup> <a name="accounts" id="raindancers-cdk.transitGateway.TransitGateway.shareTransitGateway.parameter.accounts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.fromAttributes">fromAttributes</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.transitGateway.TransitGateway.isConstruct"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

transitGateway.TransitGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.transitGateway.TransitGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromAttributes` <a name="fromAttributes" id="raindancers-cdk.transitGateway.TransitGateway.fromAttributes"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

transitGateway.TransitGateway.fromAttributes(id: string, amazonSideAsn: number)
```

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transitGateway.TransitGateway.fromAttributes.parameter.id"></a>

- *Type:* string

---

###### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="raindancers-cdk.transitGateway.TransitGateway.fromAttributes.parameter.amazonSideAsn"></a>

- *Type:* number

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.property.defaultRoutingTableId">defaultRoutingTableId</a></code> | <code>string</code> | Default Routing Table. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.property.amazonSideAsn">amazonSideAsn</a></code> | <code>number</code> | The Private ASN of the TransitGateway. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.property.arn">arn</a></code> | <code>string</code> | The arn of the transitGateway. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.property.id">id</a></code> | <code>string</code> | The id of the transitGateway. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGateway.property.name">name</a></code> | <code>string</code> | A Name for the TransitGateway. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.transitGateway.TransitGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `defaultRoutingTableId`<sup>Required</sup> <a name="defaultRoutingTableId" id="raindancers-cdk.transitGateway.TransitGateway.property.defaultRoutingTableId"></a>

```typescript
public readonly defaultRoutingTableId: string;
```

- *Type:* string

Default Routing Table.

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="raindancers-cdk.transitGateway.TransitGateway.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: number;
```

- *Type:* number

The Private ASN of the TransitGateway.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.transitGateway.TransitGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The arn of the transitGateway.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transitGateway.TransitGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the transitGateway.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.transitGateway.TransitGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A Name for the TransitGateway.

---


### ZscalerAppSegment <a name="ZscalerAppSegment" id="raindancers-cdk.zscaler.ZscalerAppSegment"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.zscaler.ZscalerAppSegment.Initializer"></a>

```typescript
import { zscaler } from 'raindancers-cdk'

new zscaler.ZscalerAppSegment(scope: Construct, id: string, props: ZscalerAppSegmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.zscaler.ZscalerAppSegmentProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.zscaler.ZscalerAppSegment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.zscaler.ZscalerAppSegment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.zscaler.ZscalerAppSegment.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.zscaler.ZscalerAppSegmentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.zscaler.ZscalerAppSegment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.zscaler.ZscalerAppSegment.isConstruct"></a>

```typescript
import { zscaler } from 'raindancers-cdk'

zscaler.ZscalerAppSegment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.zscaler.ZscalerAppSegment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegment.property.appSegment">appSegment</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.zscaler.ZscalerAppSegment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appSegment`<sup>Required</sup> <a name="appSegment" id="raindancers-cdk.zscaler.ZscalerAppSegment.property.appSegment"></a>

```typescript
public readonly appSegment: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---


## Structs <a name="Structs" id="Structs"></a>

### AccountFactoryLambdaProps <a name="AccountFactoryLambdaProps" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps"></a>

Propertys for AccountFactory.

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const accountFactoryLambdaProps: orgTools.AccountFactoryLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.portfolioArn">portfolioArn</a></code> | <code>string</code> | arn of the AccountFactory Service Catalog. |

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `portfolioArn`<sup>Required</sup> <a name="portfolioArn" id="raindancers-cdk.orgTools.AccountFactoryLambdaProps.property.portfolioArn"></a>

```typescript
public readonly portfolioArn: string;
```

- *Type:* string

arn of the AccountFactory Service Catalog.

---

### AccountFactoryProps <a name="AccountFactoryProps" id="raindancers-cdk.orgTools.AccountFactoryProps"></a>

Propertys for AccountFactory.

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.AccountFactoryProps.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const accountFactoryProps: orgTools.AccountFactoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.accountFactoryProductArn">accountFactoryProductArn</a></code> | <code>string</code> | arn of the AccountFactory Service Catalog. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.awsAccount">awsAccount</a></code> | <code>raindancers-cdk.orgTools.AccountProvisioningParameters</code> | Parameters to create a new account with. |
| <code><a href="#raindancers-cdk.orgTools.AccountFactoryProps.property.provider">provider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | Provider. |

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.orgTools.AccountFactoryProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="raindancers-cdk.orgTools.AccountFactoryProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="raindancers-cdk.orgTools.AccountFactoryProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="raindancers-cdk.orgTools.AccountFactoryProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `accountFactoryProductArn`<sup>Required</sup> <a name="accountFactoryProductArn" id="raindancers-cdk.orgTools.AccountFactoryProps.property.accountFactoryProductArn"></a>

```typescript
public readonly accountFactoryProductArn: string;
```

- *Type:* string

arn of the AccountFactory Service Catalog.

---

##### `awsAccount`<sup>Required</sup> <a name="awsAccount" id="raindancers-cdk.orgTools.AccountFactoryProps.property.awsAccount"></a>

```typescript
public readonly awsAccount: AccountProvisioningParameters;
```

- *Type:* raindancers-cdk.orgTools.AccountProvisioningParameters

Parameters to create a new account with.

---

##### `provider`<sup>Required</sup> <a name="provider" id="raindancers-cdk.orgTools.AccountFactoryProps.property.provider"></a>

```typescript
public readonly provider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

Provider.

---

### AccountProvisioningParameters <a name="AccountProvisioningParameters" id="raindancers-cdk.orgTools.AccountProvisioningParameters"></a>

Provisioning Parameters for creating an AWS Account.

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.AccountProvisioningParameters.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const accountProvisioningParameters: orgTools.AccountProvisioningParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.AccountProvisioningParameters.property.accountEmail">accountEmail</a></code> | <code>string</code> | What Email address to use for the root user. |
| <code><a href="#raindancers-cdk.orgTools.AccountProvisioningParameters.property.accountName">accountName</a></code> | <code>string</code> | What to call the account. |
| <code><a href="#raindancers-cdk.orgTools.AccountProvisioningParameters.property.managedOrganizationalUnit">managedOrganizationalUnit</a></code> | <code>raindancers-cdk.organizations.IOrganizationalUnit</code> | OU where to place this account. |
| <code><a href="#raindancers-cdk.orgTools.AccountProvisioningParameters.property.sSOUserEmail">sSOUserEmail</a></code> | <code>string</code> | SSO user Email. |
| <code><a href="#raindancers-cdk.orgTools.AccountProvisioningParameters.property.sSOUserFirstName">sSOUserFirstName</a></code> | <code>string</code> | SSO user First Name. |
| <code><a href="#raindancers-cdk.orgTools.AccountProvisioningParameters.property.sSOUserLastName">sSOUserLastName</a></code> | <code>string</code> | SSO User Last Name. |

---

##### `accountEmail`<sup>Required</sup> <a name="accountEmail" id="raindancers-cdk.orgTools.AccountProvisioningParameters.property.accountEmail"></a>

```typescript
public readonly accountEmail: string;
```

- *Type:* string

What Email address to use for the root user.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="raindancers-cdk.orgTools.AccountProvisioningParameters.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

What to call the account.

---

##### `managedOrganizationalUnit`<sup>Required</sup> <a name="managedOrganizationalUnit" id="raindancers-cdk.orgTools.AccountProvisioningParameters.property.managedOrganizationalUnit"></a>

```typescript
public readonly managedOrganizationalUnit: IOrganizationalUnit;
```

- *Type:* raindancers-cdk.organizations.IOrganizationalUnit

OU where to place this account.

---

##### `sSOUserEmail`<sup>Required</sup> <a name="sSOUserEmail" id="raindancers-cdk.orgTools.AccountProvisioningParameters.property.sSOUserEmail"></a>

```typescript
public readonly sSOUserEmail: string;
```

- *Type:* string

SSO user Email.

---

##### `sSOUserFirstName`<sup>Required</sup> <a name="sSOUserFirstName" id="raindancers-cdk.orgTools.AccountProvisioningParameters.property.sSOUserFirstName"></a>

```typescript
public readonly sSOUserFirstName: string;
```

- *Type:* string

SSO user First Name.

---

##### `sSOUserLastName`<sup>Required</sup> <a name="sSOUserLastName" id="raindancers-cdk.orgTools.AccountProvisioningParameters.property.sSOUserLastName"></a>

```typescript
public readonly sSOUserLastName: string;
```

- *Type:* string

SSO User Last Name.

---

### Actions <a name="Actions" id="raindancers-cdk.loadbalancer.Actions"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.loadbalancer.Actions.Initializer"></a>

```typescript
import { loadbalancer } from 'raindancers-cdk'

const actions: loadbalancer.Actions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.Actions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.Actions.property.loadbalancerActions">loadbalancerActions</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.AddApplicationActionProps</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.loadbalancer.Actions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadbalancerActions`<sup>Required</sup> <a name="loadbalancerActions" id="raindancers-cdk.loadbalancer.Actions.property.loadbalancerActions"></a>

```typescript
public readonly loadbalancerActions: AddApplicationActionProps;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.AddApplicationActionProps

---

### AddApplicationProps <a name="AddApplicationProps" id="raindancers-cdk.loadbalancer.AddApplicationProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.loadbalancer.AddApplicationProps.Initializer"></a>

```typescript
import { loadbalancer } from 'raindancers-cdk'

const addApplicationProps: loadbalancer.AddApplicationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.AddApplicationProps.property.actions">actions</a></code> | <code>raindancers-cdk.loadbalancer.Actions[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.AddApplicationProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.AddApplicationProps.property.delegatedZone">delegatedZone</a></code> | <code>raindancers-cdk.loadbalancer.DelegatedZone</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.AddApplicationProps.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.HostedZone</code> | *No description.* |

---

##### `actions`<sup>Required</sup> <a name="actions" id="raindancers-cdk.loadbalancer.AddApplicationProps.property.actions"></a>

```typescript
public readonly actions: Actions[];
```

- *Type:* raindancers-cdk.loadbalancer.Actions[]
- *Default:* elbv2.SslPolicy.RECOMMENDED_TLS

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="raindancers-cdk.loadbalancer.AddApplicationProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `delegatedZone`<sup>Optional</sup> <a name="delegatedZone" id="raindancers-cdk.loadbalancer.AddApplicationProps.property.delegatedZone"></a>

```typescript
public readonly delegatedZone: DelegatedZone;
```

- *Type:* raindancers-cdk.loadbalancer.DelegatedZone

---

##### `zone`<sup>Optional</sup> <a name="zone" id="raindancers-cdk.loadbalancer.AddApplicationProps.property.zone"></a>

```typescript
public readonly zone: HostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZone

---

### AddAwsServiceEndPointsProps <a name="AddAwsServiceEndPointsProps" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const addAwsServiceEndPointsProps: cloudNetwork.AddAwsServiceEndPointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.services">services</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.dynamoDbGateway">dynamoDbGateway</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.s3GatewayInterface">s3GatewayInterface</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `services`<sup>Required</sup> <a name="services" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.services"></a>

```typescript
public readonly services: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

##### `dynamoDbGateway`<sup>Optional</sup> <a name="dynamoDbGateway" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.dynamoDbGateway"></a>

```typescript
public readonly dynamoDbGateway: boolean;
```

- *Type:* boolean

---

##### `s3GatewayInterface`<sup>Optional</sup> <a name="s3GatewayInterface" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.s3GatewayInterface"></a>

```typescript
public readonly s3GatewayInterface: boolean;
```

- *Type:* boolean

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### AddAwsServiceEndPointsProps <a name="AddAwsServiceEndPointsProps" id="raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const addAwsServiceEndPointsProps: enterprisevpc.AddAwsServiceEndPointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.services">services</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.dynamoDbGateway">dynamoDbGateway</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.s3GatewayInterface">s3GatewayInterface</a></code> | <code>boolean</code> | *No description.* |

---

##### `services`<sup>Required</sup> <a name="services" id="raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.services"></a>

```typescript
public readonly services: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `dynamoDbGateway`<sup>Optional</sup> <a name="dynamoDbGateway" id="raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.dynamoDbGateway"></a>

```typescript
public readonly dynamoDbGateway: boolean;
```

- *Type:* boolean

---

##### `s3GatewayInterface`<sup>Optional</sup> <a name="s3GatewayInterface" id="raindancers-cdk.enterprisevpc.AddAwsServiceEndPointsProps.property.s3GatewayInterface"></a>

```typescript
public readonly s3GatewayInterface: boolean;
```

- *Type:* boolean

---

### AddAwsSourceProps <a name="AddAwsSourceProps" id="raindancers-cdk.securityLake.AddAwsSourceProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.securityLake.AddAwsSourceProps.Initializer"></a>

```typescript
import { securityLake } from 'raindancers-cdk'

const addAwsSourceProps: securityLake.AddAwsSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.securityLake.AddAwsSourceProps.property.logSources">logSources</a></code> | <code>raindancers-cdk.securityLake.AwsLogSource[]</code> | *No description.* |

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="raindancers-cdk.securityLake.AddAwsSourceProps.property.logSources"></a>

```typescript
public readonly logSources: AwsLogSource[];
```

- *Type:* raindancers-cdk.securityLake.AwsLogSource[]

---

### AddCoreRoutesProps <a name="AddCoreRoutesProps" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const addCoreRoutesProps: enterprisevpc.AddCoreRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.coreName">coreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.destinationCidrBlocks">destinationCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.policyTableArn">policyTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.segments">segments</a></code> | <code>string[]</code> | *No description.* |

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlocks`<sup>Required</sup> <a name="destinationCidrBlocks" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.destinationCidrBlocks"></a>

```typescript
public readonly destinationCidrBlocks: string[];
```

- *Type:* string[]

---

##### `policyTableArn`<sup>Required</sup> <a name="policyTableArn" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.policyTableArn"></a>

```typescript
public readonly policyTableArn: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="raindancers-cdk.enterprisevpc.AddCoreRoutesProps.property.segments"></a>

```typescript
public readonly segments: string[];
```

- *Type:* string[]

---

### AddEnterprizeZoneProps <a name="AddEnterprizeZoneProps" id="raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const addEnterprizeZoneProps: enterprisevpc.AddEnterprizeZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.property.domainname">domainname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.property.hubVpcs">hubVpcs</a></code> | <code>raindancers-cdk.dns.HubVpc[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.property.isHubVpc">isHubVpc</a></code> | <code>boolean</code> | *No description.* |

---

##### `domainname`<sup>Required</sup> <a name="domainname" id="raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.property.domainname"></a>

```typescript
public readonly domainname: string;
```

- *Type:* string

---

##### `hubVpcs`<sup>Required</sup> <a name="hubVpcs" id="raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.property.hubVpcs"></a>

```typescript
public readonly hubVpcs: HubVpc[];
```

- *Type:* raindancers-cdk.dns.HubVpc[]

---

##### `isHubVpc`<sup>Optional</sup> <a name="isHubVpc" id="raindancers-cdk.enterprisevpc.AddEnterprizeZoneProps.property.isHubVpc"></a>

```typescript
public readonly isHubVpc: boolean;
```

- *Type:* boolean

---

### AddNetworkFirewallEndpointProps <a name="AddNetworkFirewallEndpointProps" id="raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const addNetworkFirewallEndpointProps: cloudNetwork.AddNetworkFirewallEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | default 'firewall'. |
| <code><a href="#raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `subnetGroup`<sup>Optional</sup> <a name="subnetGroup" id="raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

default 'firewall'.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### AddR53ZoneProps <a name="AddR53ZoneProps" id="raindancers-cdk.enterprisevpc.AddR53ZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AddR53ZoneProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const addR53ZoneProps: enterprisevpc.AddR53ZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AddR53ZoneProps.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddR53ZoneProps.property.centralVpc">centralVpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `zone`<sup>Required</sup> <a name="zone" id="raindancers-cdk.enterprisevpc.AddR53ZoneProps.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `centralVpc`<sup>Optional</sup> <a name="centralVpc" id="raindancers-cdk.enterprisevpc.AddR53ZoneProps.property.centralVpc"></a>

```typescript
public readonly centralVpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

### AddRoutesProps <a name="AddRoutesProps" id="raindancers-cdk.cloudNetwork.AddRoutesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.AddRoutesProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const addRoutesProps: cloudNetwork.AddRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.AddRoutesProps.property.route">route</a></code> | <code>raindancers-cdk.cloudNetwork.Route</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AddRoutesProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | *No description.* |

---

##### `route`<sup>Required</sup> <a name="route" id="raindancers-cdk.cloudNetwork.AddRoutesProps.property.route"></a>

```typescript
public readonly route: Route;
```

- *Type:* raindancers-cdk.cloudNetwork.Route

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.cloudNetwork.AddRoutesProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

### AddRoutesProps <a name="AddRoutesProps" id="raindancers-cdk.enterprisevpc.AddRoutesProps"></a>

Propertys for Adding Routes in VPC.

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AddRoutesProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const addRoutesProps: enterprisevpc.AddRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.cidr">cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.destination">destination</a></code> | <code>raindancers-cdk.enterprisevpc.Destination</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.subnetGroups">subnetGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.cloudwanName">cloudwanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.ec2Instance">ec2Instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.endpointTag">endpointTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.fwEndpoints">fwEndpoints</a></code> | <code>raindancers-cdk.enterprisevpc.IFirewallEndpoints[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesProps.property.networkFirewallArn">networkFirewallArn</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.cidr"></a>

```typescript
public readonly cidr: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* raindancers-cdk.enterprisevpc.Destination

---

##### `subnetGroups`<sup>Required</sup> <a name="subnetGroups" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: string[];
```

- *Type:* string[]

---

##### `cloudwanName`<sup>Optional</sup> <a name="cloudwanName" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.cloudwanName"></a>

```typescript
public readonly cloudwanName: string;
```

- *Type:* string

---

##### `ec2Instance`<sup>Optional</sup> <a name="ec2Instance" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.ec2Instance"></a>

```typescript
public readonly ec2Instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `endpointTag`<sup>Optional</sup> <a name="endpointTag" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.endpointTag"></a>

```typescript
public readonly endpointTag: string;
```

- *Type:* string

---

##### `fwEndpoints`<sup>Optional</sup> <a name="fwEndpoints" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.fwEndpoints"></a>

```typescript
public readonly fwEndpoints: IFirewallEndpoints[];
```

- *Type:* raindancers-cdk.enterprisevpc.IFirewallEndpoints[]

---

##### `networkFirewallArn`<sup>Optional</sup> <a name="networkFirewallArn" id="raindancers-cdk.enterprisevpc.AddRoutesProps.property.networkFirewallArn"></a>

```typescript
public readonly networkFirewallArn: string;
```

- *Type:* string

---

### AddRoutesPropsV2 <a name="AddRoutesPropsV2" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const addRoutesPropsV2: enterprisevpc.AddRoutesPropsV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.destination">destination</a></code> | <code>raindancers-cdk.enterprisevpc.Destination</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.cloudwanName">cloudwanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.ec2Instance">ec2Instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.endpointTag">endpointTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.networkFirewallArn">networkFirewallArn</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* raindancers-cdk.enterprisevpc.Destination

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

---

##### `cloudwanName`<sup>Optional</sup> <a name="cloudwanName" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.cloudwanName"></a>

```typescript
public readonly cloudwanName: string;
```

- *Type:* string

---

##### `ec2Instance`<sup>Optional</sup> <a name="ec2Instance" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.ec2Instance"></a>

```typescript
public readonly ec2Instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `endpointTag`<sup>Optional</sup> <a name="endpointTag" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.endpointTag"></a>

```typescript
public readonly endpointTag: string;
```

- *Type:* string

---

##### `networkFirewallArn`<sup>Optional</sup> <a name="networkFirewallArn" id="raindancers-cdk.enterprisevpc.AddRoutesPropsV2.property.networkFirewallArn"></a>

```typescript
public readonly networkFirewallArn: string;
```

- *Type:* string

---

### AddStatefulRulesProps <a name="AddStatefulRulesProps" id="raindancers-cdk.nwFirewall.AddStatefulRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.AddStatefulRulesProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const addStatefulRulesProps: nwFirewall.AddStatefulRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.AddStatefulRulesProps.property.awsManagedRules">awsManagedRules</a></code> | <code>raindancers-cdk.nwFirewall.ManagedAwsFirewallRules[]</code> | *No description.* |

---

##### `awsManagedRules`<sup>Required</sup> <a name="awsManagedRules" id="raindancers-cdk.nwFirewall.AddStatefulRulesProps.property.awsManagedRules"></a>

```typescript
public readonly awsManagedRules: ManagedAwsFirewallRules[];
```

- *Type:* raindancers-cdk.nwFirewall.ManagedAwsFirewallRules[]

---

### AddStatelessRulesProps <a name="AddStatelessRulesProps" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const addStatelessRulesProps: nwFirewall.AddStatelessRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.rules">rules</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.rules"></a>

```typescript
public readonly rules: StatelessRuleProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty[]

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="raindancers-cdk.nwFirewall.AddStatelessRulesProps.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

### AgentCoreOpenAPIProps <a name="AgentCoreOpenAPIProps" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps"></a>

Properties for the AgentCore construct.

#### Initializer <a name="Initializer" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

const agentCoreOpenAPIProps: agentCore.AgentCoreOpenAPIProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.apiKey">apiKey</a></code> | <code>raindancers-cdk.agentCore.ApiKey</code> | Secret containing the API token. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.name">name</a></code> | <code>string</code> | The name prefix for all resources. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.credentialLocation">credentialLocation</a></code> | <code>raindancers-cdk.agentCore.CredentialLocation</code> | Credential Location *. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.credentialParameterName">credentialParameterName</a></code> | <code>string</code> | *. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.gatewayDescription">gatewayDescription</a></code> | <code>string</code> | Optional description for the gateway. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.pathToOpenApiSpec">pathToOpenApiSpec</a></code> | <code>string</code> | Path to the OpenAPI specification file. |
| <code><a href="#raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.s3Uri">s3Uri</a></code> | <code>string</code> | S3 URI to the OpenAPI specification file. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.apiKey"></a>

```typescript
public readonly apiKey: ApiKey;
```

- *Type:* raindancers-cdk.agentCore.ApiKey

Secret containing the API token.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name prefix for all resources.

---

##### `credentialLocation`<sup>Optional</sup> <a name="credentialLocation" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.credentialLocation"></a>

```typescript
public readonly credentialLocation: CredentialLocation;
```

- *Type:* raindancers-cdk.agentCore.CredentialLocation

Credential Location *.

---

##### `credentialParameterName`<sup>Optional</sup> <a name="credentialParameterName" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.credentialParameterName"></a>

```typescript
public readonly credentialParameterName: string;
```

- *Type:* string

*.

---

##### `gatewayDescription`<sup>Optional</sup> <a name="gatewayDescription" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.gatewayDescription"></a>

```typescript
public readonly gatewayDescription: string;
```

- *Type:* string

Optional description for the gateway.

---

##### `pathToOpenApiSpec`<sup>Optional</sup> <a name="pathToOpenApiSpec" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.pathToOpenApiSpec"></a>

```typescript
public readonly pathToOpenApiSpec: string;
```

- *Type:* string

Path to the OpenAPI specification file.

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="raindancers-cdk.agentCore.AgentCoreOpenAPIProps.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

S3 URI to the OpenAPI specification file.

---

### AgentCoreOpenAPIv2Props <a name="AgentCoreOpenAPIv2Props" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props"></a>

Properties for the AgentCoreOpenAPIv2 construct.

#### Initializer <a name="Initializer" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

const agentCoreOpenAPIv2Props: agentCore.v2.AgentCoreOpenAPIv2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props.property.name">name</a></code> | <code>string</code> | The name prefix for all resources. |
| <code><a href="#raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props.property.gatewayDescription">gatewayDescription</a></code> | <code>string</code> | Optional description for the gateway. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name prefix for all resources.

---

##### `gatewayDescription`<sup>Optional</sup> <a name="gatewayDescription" id="raindancers-cdk.agentCore.v2.AgentCoreOpenAPIv2Props.property.gatewayDescription"></a>

```typescript
public readonly gatewayDescription: string;
```

- *Type:* string

Optional description for the gateway.

---

### AllowedPrefixes <a name="AllowedPrefixes" id="raindancers-cdk.transitGateway.AllowedPrefixes"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transitGateway.AllowedPrefixes.Initializer"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

const allowedPrefixes: transitGateway.AllowedPrefixes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.AllowedPrefixes.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-cdk.transitGateway.AllowedPrefixes.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

### ApiKey <a name="ApiKey" id="raindancers-cdk.agentCore.ApiKey"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.agentCore.ApiKey.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

const apiKey: agentCore.ApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.ApiKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.ApiKey.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="raindancers-cdk.agentCore.ApiKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="raindancers-cdk.agentCore.ApiKey.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

### ApiKey <a name="ApiKey" id="raindancers-cdk.agentCore.v2.ApiKey"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.agentCore.v2.ApiKey.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

const apiKey: agentCore.v2.ApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.ApiKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.v2.ApiKey.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="raindancers-cdk.agentCore.v2.ApiKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="raindancers-cdk.agentCore.v2.ApiKey.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

### ApplySCPOnAccountCreationProps <a name="ApplySCPOnAccountCreationProps" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.Initializer"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

const applySCPOnAccountCreationProps: serviceControlPolicy.ApplySCPOnAccountCreationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.scp">scp</a></code> | <code>raindancers-cdk.serviceControlPolicy.IServiceControlPolicy[]</code> | ServiceControlPolicys To Be applied when an account is created. |

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `scp`<sup>Required</sup> <a name="scp" id="raindancers-cdk.serviceControlPolicy.ApplySCPOnAccountCreationProps.property.scp"></a>

```typescript
public readonly scp: IServiceControlPolicy[];
```

- *Type:* raindancers-cdk.serviceControlPolicy.IServiceControlPolicy[]

ServiceControlPolicys To Be applied when an account is created.

---

### AssignmentAttributes <a name="AssignmentAttributes" id="raindancers-cdk.sso.AssignmentAttributes"></a>

Attributes for an assignment of which there are none.

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.AssignmentAttributes.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const assignmentAttributes: sso.AssignmentAttributes = { ... }
```


### AssignmentOptions <a name="AssignmentOptions" id="raindancers-cdk.sso.AssignmentOptions"></a>

The options for creating an assignment.

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.AssignmentOptions.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const assignmentOptions: sso.AssignmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.AssignmentOptions.property.principal">principal</a></code> | <code>raindancers-cdk.sso.ISSOPrincipal</code> | The principal to assign the permission set to. |
| <code><a href="#raindancers-cdk.sso.AssignmentOptions.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |
| <code><a href="#raindancers-cdk.sso.AssignmentOptions.property.targetType">targetType</a></code> | <code>raindancers-cdk.sso.TargetTypes</code> | The entity type for which the assignment will be created. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="raindancers-cdk.sso.AssignmentOptions.property.principal"></a>

```typescript
public readonly principal: ISSOPrincipal;
```

- *Type:* raindancers-cdk.sso.ISSOPrincipal

The principal to assign the permission set to.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="raindancers-cdk.sso.AssignmentOptions.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="raindancers-cdk.sso.AssignmentOptions.property.targetType"></a>

```typescript
public readonly targetType: TargetTypes;
```

- *Type:* raindancers-cdk.sso.TargetTypes
- *Default:* TargetTypes.AWS_ACCOUNT

The entity type for which the assignment will be created.

---

### AssignmentProps <a name="AssignmentProps" id="raindancers-cdk.sso.AssignmentProps"></a>

The properties of a new assignment.

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.AssignmentProps.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const assignmentProps: sso.AssignmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.AssignmentProps.property.principal">principal</a></code> | <code>raindancers-cdk.sso.ISSOPrincipal</code> | The principal to assign the permission set to. |
| <code><a href="#raindancers-cdk.sso.AssignmentProps.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |
| <code><a href="#raindancers-cdk.sso.AssignmentProps.property.targetType">targetType</a></code> | <code>raindancers-cdk.sso.TargetTypes</code> | The entity type for which the assignment will be created. |
| <code><a href="#raindancers-cdk.sso.AssignmentProps.property.permissionSet">permissionSet</a></code> | <code>raindancers-cdk.sso.IPermissionSet</code> | The permission set to assign to the principal. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="raindancers-cdk.sso.AssignmentProps.property.principal"></a>

```typescript
public readonly principal: ISSOPrincipal;
```

- *Type:* raindancers-cdk.sso.ISSOPrincipal

The principal to assign the permission set to.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="raindancers-cdk.sso.AssignmentProps.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="raindancers-cdk.sso.AssignmentProps.property.targetType"></a>

```typescript
public readonly targetType: TargetTypes;
```

- *Type:* raindancers-cdk.sso.TargetTypes
- *Default:* TargetTypes.AWS_ACCOUNT

The entity type for which the assignment will be created.

---

##### `permissionSet`<sup>Required</sup> <a name="permissionSet" id="raindancers-cdk.sso.AssignmentProps.property.permissionSet"></a>

```typescript
public readonly permissionSet: IPermissionSet;
```

- *Type:* raindancers-cdk.sso.IPermissionSet

The permission set to assign to the principal.

---

### AssociateSharedResolverRuleProps <a name="AssociateSharedResolverRuleProps" id="raindancers-cdk.dns.AssociateSharedResolverRuleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.AssociateSharedResolverRuleProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const associateSharedResolverRuleProps: dns.AssociateSharedResolverRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRuleProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | domainNames which are to be associated. |
| <code><a href="#raindancers-cdk.dns.AssociateSharedResolverRuleProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | The VPC which will be assocaited with the ResolverRules. |

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="raindancers-cdk.dns.AssociateSharedResolverRuleProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

domainNames which are to be associated.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.dns.AssociateSharedResolverRuleProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

The VPC which will be assocaited with the ResolverRules.

---

### AssociateSharedResolverRulesProps <a name="AssociateSharedResolverRulesProps" id="raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const associateSharedResolverRulesProps: cloudNetwork.AssociateSharedResolverRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### AttachToCloudWanProps <a name="AttachToCloudWanProps" id="raindancers-cdk.enterprisevpc.AttachToCloudWanProps"></a>

Propertys for Attaching to a Cloudwan Core Network.

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AttachToCloudWanProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const attachToCloudWanProps: enterprisevpc.AttachToCloudWanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.coreNetworkName">coreNetworkName</a></code> | <code>string</code> | corenetworkName. |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.applianceMode">applianceMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |

---

##### `coreNetworkName`<sup>Required</sup> <a name="coreNetworkName" id="raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.coreNetworkName"></a>

```typescript
public readonly coreNetworkName: string;
```

- *Type:* string

corenetworkName.

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `applianceMode`<sup>Optional</sup> <a name="applianceMode" id="raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.applianceMode"></a>

```typescript
public readonly applianceMode: boolean;
```

- *Type:* boolean

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-cdk.enterprisevpc.AttachToCloudWanProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

### AttachToTransitGatewayProps <a name="AttachToTransitGatewayProps" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const attachToTransitGatewayProps: cloudNetwork.AttachToTransitGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.routesToTransitGateway">routesToTransitGateway</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.transitGateway">transitGateway</a></code> | <code>raindancers-cdk.transitGateway.ITransitGateway</code> | the TransitGateway to connect to. |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.applianceMode">applianceMode</a></code> | <code>raindancers-cdk.cloudNetwork.ApplianceMode</code> | Will this be connected in appliance mode ( used if you have Network Firewalls ). |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.ipv6Support">ipv6Support</a></code> | <code>raindancers-cdk.cloudNetwork.IpV6Support</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.tgAttachmentSubnetGroup">tgAttachmentSubnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.transitGatewayRoutingTable">transitGatewayRoutingTable</a></code> | <code>raindancers-cdk.transitGateway.ITransitGatewayRouteTable</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `routesToTransitGateway`<sup>Required</sup> <a name="routesToTransitGateway" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.routesToTransitGateway"></a>

```typescript
public readonly routesToTransitGateway: string[];
```

- *Type:* string[]

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: ITransitGateway;
```

- *Type:* raindancers-cdk.transitGateway.ITransitGateway

the TransitGateway to connect to.

---

##### `applianceMode`<sup>Optional</sup> <a name="applianceMode" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.applianceMode"></a>

```typescript
public readonly applianceMode: ApplianceMode;
```

- *Type:* raindancers-cdk.cloudNetwork.ApplianceMode

Will this be connected in appliance mode ( used if you have Network Firewalls ).

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

##### `ipv6Support`<sup>Optional</sup> <a name="ipv6Support" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: IpV6Support;
```

- *Type:* raindancers-cdk.cloudNetwork.IpV6Support

---

##### `tgAttachmentSubnetGroup`<sup>Optional</sup> <a name="tgAttachmentSubnetGroup" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.tgAttachmentSubnetGroup"></a>

```typescript
public readonly tgAttachmentSubnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

##### `transitGatewayRoutingTable`<sup>Optional</sup> <a name="transitGatewayRoutingTable" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.transitGatewayRoutingTable"></a>

```typescript
public readonly transitGatewayRoutingTable: ITransitGatewayRouteTable;
```

- *Type:* raindancers-cdk.transitGateway.ITransitGatewayRouteTable

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### AttachToTransitGatewayProps <a name="AttachToTransitGatewayProps" id="raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps"></a>

Propertys to attach the Vpc To Transit Gateway.

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const attachToTransitGatewayProps: enterprisevpc.AttachToTransitGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.transitGateway">transitGateway</a></code> | <code>raindancers-cdk.transitGateway.ITransitGateway</code> | the TransitGateway to connect to. |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.applicanceMode">applicanceMode</a></code> | <code>raindancers-cdk.enterprisevpc.ApplianceMode</code> | Will this be connected in appliance mode ( used if you have Network Firewalls ). |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.ipv6Support">ipv6Support</a></code> | <code>raindancers-cdk.enterprisevpc.IpV6Support</code> | *No description.* |

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: ITransitGateway;
```

- *Type:* raindancers-cdk.transitGateway.ITransitGateway

the TransitGateway to connect to.

---

##### `applicanceMode`<sup>Optional</sup> <a name="applicanceMode" id="raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.applicanceMode"></a>

```typescript
public readonly applicanceMode: ApplianceMode;
```

- *Type:* raindancers-cdk.enterprisevpc.ApplianceMode

Will this be connected in appliance mode ( used if you have Network Firewalls ).

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

##### `ipv6Support`<sup>Optional</sup> <a name="ipv6Support" id="raindancers-cdk.enterprisevpc.AttachToTransitGatewayProps.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: IpV6Support;
```

- *Type:* raindancers-cdk.enterprisevpc.IpV6Support

---

### AwsLogSource <a name="AwsLogSource" id="raindancers-cdk.securityLake.AwsLogSource"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.securityLake.AwsLogSource.Initializer"></a>

```typescript
import { securityLake } from 'raindancers-cdk'

const awsLogSource: securityLake.AwsLogSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.securityLake.AwsLogSource.property.source">source</a></code> | <code>raindancers-cdk.securityLake.AwsSource</code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsLogSource.property.accounts">accounts</a></code> | <code>aws-cdk-lib.Environment[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsLogSource.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `source`<sup>Required</sup> <a name="source" id="raindancers-cdk.securityLake.AwsLogSource.property.source"></a>

```typescript
public readonly source: AwsSource;
```

- *Type:* raindancers-cdk.securityLake.AwsSource

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="raindancers-cdk.securityLake.AwsLogSource.property.accounts"></a>

```typescript
public readonly accounts: Environment[];
```

- *Type:* aws-cdk-lib.Environment[]

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="raindancers-cdk.securityLake.AwsLogSource.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

### AwsServiceEndPointsProps <a name="AwsServiceEndPointsProps" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps"></a>

Properties to create a set of AWS service Endpoints.

#### Initializer <a name="Initializer" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps.Initializer"></a>

```typescript
import { endpoints } from 'raindancers-cdk'

const awsServiceEndPointsProps: endpoints.AwsServiceEndPointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.services">services</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | An arry of InterfaceVPCEndpoints. |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | Subnet Group in which to create the service. |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | The vpc in which the service is created. |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.dynamoDBGatewayInterface">dynamoDBGatewayInterface</a></code> | <code>boolean</code> | indicate true for a Dynamo Gateway Interface. |
| <code><a href="#raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.s3GatewayInterface">s3GatewayInterface</a></code> | <code>boolean</code> | indicate true for a S3 Gateway Interface. |

---

##### `services`<sup>Required</sup> <a name="services" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.services"></a>

```typescript
public readonly services: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

An arry of InterfaceVPCEndpoints.

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

Subnet Group in which to create the service.

Typically a subnet Dedicated to the task

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

The vpc in which the service is created.

---

##### `dynamoDBGatewayInterface`<sup>Optional</sup> <a name="dynamoDBGatewayInterface" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.dynamoDBGatewayInterface"></a>

```typescript
public readonly dynamoDBGatewayInterface: boolean;
```

- *Type:* boolean

indicate true for a Dynamo Gateway Interface.

---

##### `s3GatewayInterface`<sup>Optional</sup> <a name="s3GatewayInterface" id="raindancers-cdk.endpoints.AwsServiceEndPointsProps.property.s3GatewayInterface"></a>

```typescript
public readonly s3GatewayInterface: boolean;
```

- *Type:* boolean

indicate true for a S3 Gateway Interface.

---

### CdkOrgBootstrapperProps <a name="CdkOrgBootstrapperProps" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const cdkOrgBootstrapperProps: orgTools.CdkOrgBootstrapperProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.cdkBootstrapRootRegions">cdkBootstrapRootRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.cdkBootstrapRootQualifier">cdkBootstrapRootQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.localStacksPath">localStacksPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.localTemplateStacks">localTemplateStacks</a></code> | <code>raindancers-cdk.orgTools.Template[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.templateStacks">templateStacks</a></code> | <code>raindancers-cdk.orgTools.Template[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.trustAccounts">trustAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `cdkBootstrapRootRegions`<sup>Required</sup> <a name="cdkBootstrapRootRegions" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.cdkBootstrapRootRegions"></a>

```typescript
public readonly cdkBootstrapRootRegions: string[];
```

- *Type:* string[]

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `cdkBootstrapRootQualifier`<sup>Optional</sup> <a name="cdkBootstrapRootQualifier" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.cdkBootstrapRootQualifier"></a>

```typescript
public readonly cdkBootstrapRootQualifier: string;
```

- *Type:* string

---

##### `localStacksPath`<sup>Optional</sup> <a name="localStacksPath" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.localStacksPath"></a>

```typescript
public readonly localStacksPath: string;
```

- *Type:* string

---

##### `localTemplateStacks`<sup>Optional</sup> <a name="localTemplateStacks" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.localTemplateStacks"></a>

```typescript
public readonly localTemplateStacks: Template[];
```

- *Type:* raindancers-cdk.orgTools.Template[]

---

##### `templateStacks`<sup>Optional</sup> <a name="templateStacks" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.templateStacks"></a>

```typescript
public readonly templateStacks: Template[];
```

- *Type:* raindancers-cdk.orgTools.Template[]

---

##### `trustAccounts`<sup>Optional</sup> <a name="trustAccounts" id="raindancers-cdk.orgTools.CdkOrgBootstrapperProps.property.trustAccounts"></a>

```typescript
public readonly trustAccounts: string[];
```

- *Type:* string[]
- *Default:* Just trust this account

---

### CentralAccountAssnRoleProps <a name="CentralAccountAssnRoleProps" id="raindancers-cdk.dns.CentralAccountAssnRoleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.CentralAccountAssnRoleProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const centralAccountAssnRoleProps: dns.CentralAccountAssnRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRoleProps.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRoleProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralAccountAssnRoleProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="raindancers-cdk.dns.CentralAccountAssnRoleProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.dns.CentralAccountAssnRoleProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="raindancers-cdk.dns.CentralAccountAssnRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### CentralNotificationTopicProps <a name="CentralNotificationTopicProps" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.Initializer"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

const centralNotificationTopicProps: cloudtrailMonitor.CentralNotificationTopicProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |

---

##### `allowedAccounts`<sup>Optional</sup> <a name="allowedAccounts" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="raindancers-cdk.cloudtrailMonitor.CentralNotificationTopicProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

### CentralResolverRulesProps <a name="CentralResolverRulesProps" id="raindancers-cdk.dns.CentralResolverRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.CentralResolverRulesProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const centralResolverRulesProps: dns.CentralResolverRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CentralResolverRulesProps.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralResolverRulesProps.property.resolvers">resolvers</a></code> | <code>raindancers-cdk.dns.R53Resolverendpoints</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralResolverRulesProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CentralResolverRulesProps.property.vpcSearchTag">vpcSearchTag</a></code> | <code>aws-cdk-lib.Tag</code> | *No description.* |

---

##### `domains`<sup>Required</sup> <a name="domains" id="raindancers-cdk.dns.CentralResolverRulesProps.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="raindancers-cdk.dns.CentralResolverRulesProps.property.resolvers"></a>

```typescript
public readonly resolvers: R53Resolverendpoints;
```

- *Type:* raindancers-cdk.dns.R53Resolverendpoints

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.dns.CentralResolverRulesProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `vpcSearchTag`<sup>Optional</sup> <a name="vpcSearchTag" id="raindancers-cdk.dns.CentralResolverRulesProps.property.vpcSearchTag"></a>

```typescript
public readonly vpcSearchTag: Tag;
```

- *Type:* aws-cdk-lib.Tag

---

### CheckCertificateActions <a name="CheckCertificateActions" id="raindancers-cdk.nwFirewall.CheckCertificateActions"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.CheckCertificateActions.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const checkCertificateActions: nwFirewall.CheckCertificateActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.CheckCertificateActions.property.revokedStatusAction">revokedStatusAction</a></code> | <code>raindancers-cdk.nwFirewall.RevokedAction</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.CheckCertificateActions.property.unknownStatusAction">unknownStatusAction</a></code> | <code>raindancers-cdk.nwFirewall.RevokedAction</code> | *No description.* |

---

##### `revokedStatusAction`<sup>Optional</sup> <a name="revokedStatusAction" id="raindancers-cdk.nwFirewall.CheckCertificateActions.property.revokedStatusAction"></a>

```typescript
public readonly revokedStatusAction: RevokedAction;
```

- *Type:* raindancers-cdk.nwFirewall.RevokedAction

---

##### `unknownStatusAction`<sup>Optional</sup> <a name="unknownStatusAction" id="raindancers-cdk.nwFirewall.CheckCertificateActions.property.unknownStatusAction"></a>

```typescript
public readonly unknownStatusAction: RevokedAction;
```

- *Type:* raindancers-cdk.nwFirewall.RevokedAction

---

### CloudNetworkProps <a name="CloudNetworkProps" id="raindancers-cdk.cloudNetwork.CloudNetworkProps"></a>

Properties for creating a dual-stack VPC with IPAM-managed IP addressing.

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const cloudNetworkProps: cloudNetwork.CloudNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | List of availability zones where subnets will be created. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.ipamConfig">ipamConfig</a></code> | <code>raindancers-cdk.cloudNetwork.IpamConfig</code> | IPAM configuration for IPv4 and IPv6 address allocation. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.subnetConfiguration">subnetConfiguration</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup[]</code> | Configuration for subnet groups to be created in the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.vpcName">vpcName</a></code> | <code>string</code> | The name of the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.createInternetGateway">createInternetGateway</a></code> | <code>boolean</code> | Whether to create an Internet Gateway for the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.createNatGateways">createNatGateways</a></code> | <code>boolean</code> | Whether to create NAT Gateways in public subnets. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.enableDnsHostNames">enableDnsHostNames</a></code> | <code>boolean</code> | enable DnsHostNames. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean</code> | enable dnsSupport. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | IPv4 netmask length for the VPC CIDR block. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | IPv6 netmask length for the VPC CIDR block. |
| <code><a href="#raindancers-cdk.cloudNetwork.CloudNetworkProps.property.waitDuration">waitDuration</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

List of availability zones where subnets will be created.

---

##### `ipamConfig`<sup>Required</sup> <a name="ipamConfig" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.ipamConfig"></a>

```typescript
public readonly ipamConfig: IpamConfig;
```

- *Type:* raindancers-cdk.cloudNetwork.IpamConfig

IPAM configuration for IPv4 and IPv6 address allocation.

---

##### `subnetConfiguration`<sup>Required</sup> <a name="subnetConfiguration" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: ISubnetGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup[]

Configuration for subnet groups to be created in the VPC.

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

The name of the VPC.

---

##### `createInternetGateway`<sup>Optional</sup> <a name="createInternetGateway" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.createInternetGateway"></a>

```typescript
public readonly createInternetGateway: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to create an Internet Gateway for the VPC.

---

##### `createNatGateways`<sup>Optional</sup> <a name="createNatGateways" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.createNatGateways"></a>

```typescript
public readonly createNatGateways: boolean;
```

- *Type:* boolean
- *Default:* undefined

Whether to create NAT Gateways in public subnets.

---

##### `enableDnsHostNames`<sup>Optional</sup> <a name="enableDnsHostNames" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.enableDnsHostNames"></a>

```typescript
public readonly enableDnsHostNames: boolean;
```

- *Type:* boolean

enable DnsHostNames.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean;
```

- *Type:* boolean

enable dnsSupport.

---

##### `ipv4NetmaskLength`<sup>Optional</sup> <a name="ipv4NetmaskLength" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number
- *Default:* 19

IPv4 netmask length for the VPC CIDR block.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number
- *Default:* 56

IPv6 netmask length for the VPC CIDR block.

---

##### `waitDuration`<sup>Optional</sup> <a name="waitDuration" id="raindancers-cdk.cloudNetwork.CloudNetworkProps.property.waitDuration"></a>

```typescript
public readonly waitDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### CloudTrailAlarmsProps <a name="CloudTrailAlarmsProps" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const cloudTrailAlarmsProps: orgTools.CloudTrailAlarmsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.propertyInjectors">propertyInjectors</a></code> | <code>aws-cdk-lib.IPropertyInjector[]</code> | A list of IPropertyInjector attached to this Stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that will be applied to the Stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.alarms">alarms</a></code> | <code>raindancers-cdk.orgTools.OrgAlarms[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.nameSpace">nameSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.alarmSNSTopicName">alarmSNSTopicName</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `propertyInjectors`<sup>Optional</sup> <a name="propertyInjectors" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.propertyInjectors"></a>

```typescript
public readonly propertyInjectors: IPropertyInjector[];
```

- *Type:* aws-cdk-lib.IPropertyInjector[]
- *Default:* no PropertyInjectors

A list of IPropertyInjector attached to this Stack.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Tags that will be applied to the Stack.

These tags are applied to the CloudFormation Stack itself. They will not
appear in the CloudFormation template.

However, at deployment time, CloudFormation will apply these tags to all
resources in the stack that support tagging. You will not be able to exempt
resources from tagging (using the `excludeResourceTypes` property of
`Tags.of(...).add()`) for tags applied in this way.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.alarms"></a>

```typescript
public readonly alarms: OrgAlarms[];
```

- *Type:* raindancers-cdk.orgTools.OrgAlarms[]

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `nameSpace`<sup>Required</sup> <a name="nameSpace" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.nameSpace"></a>

```typescript
public readonly nameSpace: string;
```

- *Type:* string

---

##### `alarmSNSTopicName`<sup>Optional</sup> <a name="alarmSNSTopicName" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.alarmSNSTopicName"></a>

```typescript
public readonly alarmSNSTopicName: string;
```

- *Type:* string

---

### CloudTrailEventRule <a name="CloudTrailEventRule" id="raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.Initializer"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

const cloudTrailEventRule: cloudtrailMonitor.CloudTrailEventRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.property.eventNames">eventNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.property.severity">severity</a></code> | <code>raindancers-cdk.cloudtrailMonitor.Severity</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventNames`<sup>Required</sup> <a name="eventNames" id="raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.property.eventNames"></a>

```typescript
public readonly eventNames: string[];
```

- *Type:* string[]

---

##### `severity`<sup>Required</sup> <a name="severity" id="raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule.property.severity"></a>

```typescript
public readonly severity: Severity;
```

- *Type:* raindancers-cdk.cloudtrailMonitor.Severity

---

### CloudTrailStackSetProps <a name="CloudTrailStackSetProps" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.Initializer"></a>

```typescript
import { cloudtrailMonitor } from 'raindancers-cdk'

const cloudTrailStackSetProps: cloudtrailMonitor.CloudTrailStackSetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.eventRules">eventRules</a></code> | <code>raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.targetAccounts">targetAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.targetRegions">targetRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |

---

##### `eventRules`<sup>Required</sup> <a name="eventRules" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.eventRules"></a>

```typescript
public readonly eventRules: CloudTrailEventRule[];
```

- *Type:* raindancers-cdk.cloudtrailMonitor.CloudTrailEventRule[]

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `targetAccounts`<sup>Required</sup> <a name="targetAccounts" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.targetAccounts"></a>

```typescript
public readonly targetAccounts: string[];
```

- *Type:* string[]

---

##### `targetRegions`<sup>Required</sup> <a name="targetRegions" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.targetRegions"></a>

```typescript
public readonly targetRegions: string[];
```

- *Type:* string[]

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="raindancers-cdk.cloudtrailMonitor.CloudTrailStackSetProps.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

### CloudWanRoutingProtocolProps <a name="CloudWanRoutingProtocolProps" id="raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const cloudWanRoutingProtocolProps: enterprisevpc.CloudWanRoutingProtocolProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.property.subnetGroups">subnetGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.property.acceptRouteFilter">acceptRouteFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.property.denyRouteFilter">denyRouteFilter</a></code> | <code>string[]</code> | *No description.* |

---

##### `subnetGroups`<sup>Required</sup> <a name="subnetGroups" id="raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: string[];
```

- *Type:* string[]

---

##### `acceptRouteFilter`<sup>Optional</sup> <a name="acceptRouteFilter" id="raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.property.acceptRouteFilter"></a>

```typescript
public readonly acceptRouteFilter: string[];
```

- *Type:* string[]

---

##### `denyRouteFilter`<sup>Optional</sup> <a name="denyRouteFilter" id="raindancers-cdk.enterprisevpc.CloudWanRoutingProtocolProps.property.denyRouteFilter"></a>

```typescript
public readonly denyRouteFilter: string[];
```

- *Type:* string[]

---

### ComponentProps <a name="ComponentProps" id="raindancers-cdk.imagebuilder.ComponentProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.imagebuilder.ComponentProps.Initializer"></a>

```typescript
import { imagebuilder } from 'raindancers-cdk'

const componentProps: imagebuilder.ComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.ComponentProps.property.document">document</a></code> | <code>string</code> | Relative path to Image Builder component document. |
| <code><a href="#raindancers-cdk.imagebuilder.ComponentProps.property.name">name</a></code> | <code>string</code> | Name of the Component Document. |
| <code><a href="#raindancers-cdk.imagebuilder.ComponentProps.property.version">version</a></code> | <code>string</code> | Version for each component document. |

---

##### `document`<sup>Required</sup> <a name="document" id="raindancers-cdk.imagebuilder.ComponentProps.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

Relative path to Image Builder component document.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.imagebuilder.ComponentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Component Document.

---

##### `version`<sup>Required</sup> <a name="version" id="raindancers-cdk.imagebuilder.ComponentProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version for each component document.

---

### ConditionalForwarderProps <a name="ConditionalForwarderProps" id="raindancers-cdk.dns.ConditionalForwarderProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.ConditionalForwarderProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const conditionalForwarderProps: dns.ConditionalForwarderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarderProps.property.forwardingRules">forwardingRules</a></code> | <code>raindancers-cdk.dns.OutboundForwardingRule[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarderProps.property.inboundResolverTargets">inboundResolverTargets</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarderProps.property.outboundResolver">outboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ConditionalForwarderProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="raindancers-cdk.dns.ConditionalForwarderProps.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: OutboundForwardingRule[];
```

- *Type:* raindancers-cdk.dns.OutboundForwardingRule[]

---

##### `inboundResolverTargets`<sup>Required</sup> <a name="inboundResolverTargets" id="raindancers-cdk.dns.ConditionalForwarderProps.property.inboundResolverTargets"></a>

```typescript
public readonly inboundResolverTargets: TargetAddressProperty[];
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]

---

##### `outboundResolver`<sup>Required</sup> <a name="outboundResolver" id="raindancers-cdk.dns.ConditionalForwarderProps.property.outboundResolver"></a>

```typescript
public readonly outboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.dns.ConditionalForwarderProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

### CrossAccountProps <a name="CrossAccountProps" id="raindancers-cdk.dns.CrossAccountProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.CrossAccountProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const crossAccountProps: dns.CrossAccountProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.CrossAccountProps.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.CrossAccountProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="raindancers-cdk.dns.CrossAccountProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="raindancers-cdk.dns.CrossAccountProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### CustomerManagedPolicyReference <a name="CustomerManagedPolicyReference" id="raindancers-cdk.sso.CustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.CustomerManagedPolicyReference.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const customerManagedPolicyReference: sso.CustomerManagedPolicyReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.CustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | The name of the IAM policy that you have configured in each account where you want to deploy your permission set. |
| <code><a href="#raindancers-cdk.sso.CustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | The path to the IAM policy that you have configured in each account where you want to deploy your permission set. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.sso.CustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the IAM policy that you have configured in each account where you want to deploy your permission set.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name)

---

##### `path`<sup>Optional</sup> <a name="path" id="raindancers-cdk.sso.CustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the IAM policy that you have configured in each account where you want to deploy your permission set.

The default is `/` . For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide* .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path)

---

### DelegatedZone <a name="DelegatedZone" id="raindancers-cdk.loadbalancer.DelegatedZone"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.loadbalancer.DelegatedZone.Initializer"></a>

```typescript
import { loadbalancer } from 'raindancers-cdk'

const delegatedZone: loadbalancer.DelegatedZone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.DelegatedZone.property.delegationRole">delegationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.DelegatedZone.property.parentZone">parentZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.DelegatedZone.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `delegationRole`<sup>Required</sup> <a name="delegationRole" id="raindancers-cdk.loadbalancer.DelegatedZone.property.delegationRole"></a>

```typescript
public readonly delegationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `parentZone`<sup>Required</sup> <a name="parentZone" id="raindancers-cdk.loadbalancer.DelegatedZone.property.parentZone"></a>

```typescript
public readonly parentZone: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="raindancers-cdk.loadbalancer.DelegatedZone.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

### DocumentProps <a name="DocumentProps" id="raindancers-cdk.ssm.automation.DocumentProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.ssm.automation.DocumentProps.Initializer"></a>

```typescript
import { ssm } from 'raindancers-cdk'

const documentProps: ssm.automation.DocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentProps.property.name">name</a></code> | <code>string</code> | name must be unique. |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentProps.property.path">path</a></code> | <code>string</code> | path to the document. |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentProps.property.documentFormat">documentFormat</a></code> | <code>raindancers-cdk.ssm.automation.DocumentFormat</code> | default is YAML. |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentProps.property.documentType">documentType</a></code> | <code>raindancers-cdk.ssm.automation.DocumentType</code> | default AUTOMATION. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.ssm.automation.DocumentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name must be unique.

---

##### `path`<sup>Required</sup> <a name="path" id="raindancers-cdk.ssm.automation.DocumentProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

path to the document.

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="raindancers-cdk.ssm.automation.DocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* raindancers-cdk.ssm.automation.DocumentFormat

default is YAML.

---

##### `documentType`<sup>Optional</sup> <a name="documentType" id="raindancers-cdk.ssm.automation.DocumentProps.property.documentType"></a>

```typescript
public readonly documentType: DocumentType;
```

- *Type:* raindancers-cdk.ssm.automation.DocumentType

default AUTOMATION.

---

### DynamicTagResourceGroupProps <a name="DynamicTagResourceGroupProps" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const dynamicTagResourceGroupProps: nwFirewall.DynamicTagResourceGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### DynamicTagResourceGroupSet <a name="DynamicTagResourceGroupSet" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupSet"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupSet.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const dynamicTagResourceGroupSet: nwFirewall.DynamicTagResourceGroupSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroupSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.DynamicTagResourceGroupSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.nwFirewall.DynamicTagResourceGroupSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### EastWestFirewallOnTgProps <a name="EastWestFirewallOnTgProps" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const eastWestFirewallOnTgProps: cloudNetwork.EastWestFirewallOnTgProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.firewallName">firewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.ipamConfig">ipamConfig</a></code> | <code>raindancers-cdk.cloudNetwork.IpamConfig</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.transitGateway">transitGateway</a></code> | <code>raindancers-cdk.transitGateway.TransitGateway</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.transitGatewayRoutingTable">transitGatewayRoutingTable</a></code> | <code>raindancers-cdk.transitGateway.ITransitGatewayRouteTable</code> | *No description.* |

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

---

##### `ipamConfig`<sup>Required</sup> <a name="ipamConfig" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.ipamConfig"></a>

```typescript
public readonly ipamConfig: IpamConfig;
```

- *Type:* raindancers-cdk.cloudNetwork.IpamConfig

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: TransitGateway;
```

- *Type:* raindancers-cdk.transitGateway.TransitGateway

---

##### `transitGatewayRoutingTable`<sup>Required</sup> <a name="transitGatewayRoutingTable" id="raindancers-cdk.cloudNetwork.EastWestFirewallOnTgProps.property.transitGatewayRoutingTable"></a>

```typescript
public readonly transitGatewayRoutingTable: ITransitGatewayRouteTable;
```

- *Type:* raindancers-cdk.transitGateway.ITransitGatewayRouteTable

---

### EnableEnterpriseSupportProps <a name="EnableEnterpriseSupportProps" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps"></a>

Propertys for EnableEnterpriseSupport.

#### Initializer <a name="Initializer" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.Initializer"></a>

```typescript
import { enterpriseSupport } from 'raindancers-cdk'

const enableEnterpriseSupportProps: enterpriseSupport.EnableEnterpriseSupportProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.ccEmail">ccEmail</a></code> | <code>string</code> | the Zone where the Remailer's DNS records are. |

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `ccEmail`<sup>Required</sup> <a name="ccEmail" id="raindancers-cdk.enterpriseSupport.EnableEnterpriseSupportProps.property.ccEmail"></a>

```typescript
public readonly ccEmail: string;
```

- *Type:* string

the Zone where the Remailer's DNS records are.

---

### EnterpriseVpcProps <a name="EnterpriseVpcProps" id="raindancers-cdk.enterprisevpc.EnterpriseVpcProps"></a>

Propertys for an Enterprise VPC.

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.EnterpriseVpcProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const enterpriseVpcProps: enterprisevpc.EnterpriseVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcProps.property.evpc">evpc</a></code> | <code>raindancers-cdk.enterprisevpc.EvpcProps</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.EnterpriseVpcProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `evpc`<sup>Optional</sup> <a name="evpc" id="raindancers-cdk.enterprisevpc.EnterpriseVpcProps.property.evpc"></a>

```typescript
public readonly evpc: EvpcProps;
```

- *Type:* raindancers-cdk.enterprisevpc.EvpcProps

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.EnterpriseVpcProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

### EnterpriseZoneProps <a name="EnterpriseZoneProps" id="raindancers-cdk.dns.EnterpriseZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.EnterpriseZoneProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const enterpriseZoneProps: dns.EnterpriseZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.EnterpriseZoneProps.property.enterpriseDomainName">enterpriseDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.EnterpriseZoneProps.property.localVpc">localVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.EnterpriseZoneProps.property.hubVpcs">hubVpcs</a></code> | <code>raindancers-cdk.dns.HubVpc[]</code> | *No description.* |

---

##### `enterpriseDomainName`<sup>Required</sup> <a name="enterpriseDomainName" id="raindancers-cdk.dns.EnterpriseZoneProps.property.enterpriseDomainName"></a>

```typescript
public readonly enterpriseDomainName: string;
```

- *Type:* string

---

##### `localVpc`<sup>Required</sup> <a name="localVpc" id="raindancers-cdk.dns.EnterpriseZoneProps.property.localVpc"></a>

```typescript
public readonly localVpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `hubVpcs`<sup>Optional</sup> <a name="hubVpcs" id="raindancers-cdk.dns.EnterpriseZoneProps.property.hubVpcs"></a>

```typescript
public readonly hubVpcs: HubVpc[];
```

- *Type:* raindancers-cdk.dns.HubVpc[]

---

### ESubnetGroup <a name="ESubnetGroup" id="raindancers-cdk.enterprisevpc.ESubnetGroup"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.ESubnetGroup.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const eSubnetGroup: enterprisevpc.ESubnetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroup.property.cidrMask">cidrMask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroup.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | *No description.* |

---

##### `cidrMask`<sup>Required</sup> <a name="cidrMask" id="raindancers-cdk.enterprisevpc.ESubnetGroup.property.cidrMask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.enterprisevpc.ESubnetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="raindancers-cdk.enterprisevpc.ESubnetGroup.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

---

### ESubnetGroupProps <a name="ESubnetGroupProps" id="raindancers-cdk.enterprisevpc.ESubnetGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.ESubnetGroupProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const eSubnetGroupProps: enterprisevpc.ESubnetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.cidrMask">cidrMask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.ipv6AssignAddressOnCreation">ipv6AssignAddressOnCreation</a></code> | <code>boolean</code> | *No description.* |

---

##### `cidrMask`<sup>Required</sup> <a name="cidrMask" id="raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.cidrMask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

---

##### `ipv6AssignAddressOnCreation`<sup>Optional</sup> <a name="ipv6AssignAddressOnCreation" id="raindancers-cdk.enterprisevpc.ESubnetGroupProps.property.ipv6AssignAddressOnCreation"></a>

```typescript
public readonly ipv6AssignAddressOnCreation: boolean;
```

- *Type:* boolean

---

### EventToSlackProps <a name="EventToSlackProps" id="raindancers-cdk.eventalerts.EventToSlackProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.eventalerts.EventToSlackProps.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

const eventToSlackProps: eventalerts.EventToSlackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlackProps.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlackProps.property.slackUrl">slackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToSlackProps.property.webhookUsername">webhookUsername</a></code> | <code>string</code> | *No description.* |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="raindancers-cdk.eventalerts.EventToSlackProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `slackUrl`<sup>Required</sup> <a name="slackUrl" id="raindancers-cdk.eventalerts.EventToSlackProps.property.slackUrl"></a>

```typescript
public readonly slackUrl: string;
```

- *Type:* string

---

##### `webhookUsername`<sup>Required</sup> <a name="webhookUsername" id="raindancers-cdk.eventalerts.EventToSlackProps.property.webhookUsername"></a>

```typescript
public readonly webhookUsername: string;
```

- *Type:* string

---

### EventToSNSProps <a name="EventToSNSProps" id="raindancers-cdk.eventalerts.EventToSNSProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.eventalerts.EventToSNSProps.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

const eventToSNSProps: eventalerts.EventToSNSProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToSNSProps.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `topic`<sup>Required</sup> <a name="topic" id="raindancers-cdk.eventalerts.EventToSNSProps.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---

### EventToTeamsProps <a name="EventToTeamsProps" id="raindancers-cdk.eventalerts.EventToTeamsProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.eventalerts.EventToTeamsProps.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

const eventToTeamsProps: eventalerts.EventToTeamsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeamsProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeamsProps.property.teamsImage">teamsImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeamsProps.property.teamsUrl">teamsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.EventToTeamsProps.property.snsTopic">snsTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="raindancers-cdk.eventalerts.EventToTeamsProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `teamsImage`<sup>Required</sup> <a name="teamsImage" id="raindancers-cdk.eventalerts.EventToTeamsProps.property.teamsImage"></a>

```typescript
public readonly teamsImage: string;
```

- *Type:* string

---

##### `teamsUrl`<sup>Required</sup> <a name="teamsUrl" id="raindancers-cdk.eventalerts.EventToTeamsProps.property.teamsUrl"></a>

```typescript
public readonly teamsUrl: string;
```

- *Type:* string

---

##### `snsTopic`<sup>Optional</sup> <a name="snsTopic" id="raindancers-cdk.eventalerts.EventToTeamsProps.property.snsTopic"></a>

```typescript
public readonly snsTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---

### EvpcProps <a name="EvpcProps" id="raindancers-cdk.enterprisevpc.EvpcProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.EvpcProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const evpcProps: enterprisevpc.EvpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Availability zones this VPC spans. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR range to use for the VPC, e.g. '10.0.0.0/16'. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.createInternetGateway">createInternetGateway</a></code> | <code>boolean</code> | If set to false then disable the creation of the default internet gateway. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.defaultInstanceTenancy">defaultInstanceTenancy</a></code> | <code>aws-cdk-lib.aws_ec2.DefaultInstanceTenancy</code> | The default tenancy of instances launched into the VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean</code> | Indicates whether the instances launched in the VPC get public DNS hostnames. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean</code> | Indicates whether the DNS resolution is supported for the VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.flowLogs">flowLogs</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}</code> | Flow logs to add to this VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.gatewayEndpoints">gatewayEndpoints</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}</code> | Gateway endpoints to add to this VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | The Provider to use to allocate IPv4 Space to your VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.ipProtocol">ipProtocol</a></code> | <code>aws-cdk-lib.aws_ec2.IpProtocol</code> | The protocol of the vpc. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.ipv6Addresses">ipv6Addresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpv6Addresses</code> | The Provider to use to allocate IPv6 Space to your VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | Define the maximum number of AZs to use in this region. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.natGatewayProvider">natGatewayProvider</a></code> | <code>aws-cdk-lib.aws_ec2.NatProvider</code> | What type of NAT provider to use. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT Gateways/Instances to create. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.natGatewaySubnets">natGatewaySubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Configures the subnets which will have NAT Gateways/Instances. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.reservedAzs">reservedAzs</a></code> | <code>number</code> | Define the number of AZs to reserve. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.restrictDefaultSecurityGroup">restrictDefaultSecurityGroup</a></code> | <code>boolean</code> | If set to true then the default inbound & outbound rules will be removed from the default security group. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.subnetConfiguration">subnetConfiguration</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | Configure the subnets to build for each AZ. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.vpcName">vpcName</a></code> | <code>string</code> | The VPC name. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.vpnConnections">vpnConnections</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}</code> | VPN connections to this VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.vpnGateway">vpnGateway</a></code> | <code>boolean</code> | Indicates whether a VPN gateway should be created and attached to this VPC. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.vpnGatewayAsn">vpnGatewayAsn</a></code> | <code>number</code> | The private Autonomous System Number (ASN) for the VPN gateway. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.vpnRoutePropagation">vpnRoutePropagation</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection[]</code> | Where to propagate VPN routes. |
| <code><a href="#raindancers-cdk.enterprisevpc.EvpcProps.property.subnetGroups">subnetGroups</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup[]</code> | *No description.* |

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="raindancers-cdk.enterprisevpc.EvpcProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]
- *Default:* a subset of AZs of the stack

Availability zones this VPC spans.

Specify this option only if you do not specify `maxAzs`.

---

##### ~~`cidr`~~<sup>Optional</sup> <a name="cidr" id="raindancers-cdk.enterprisevpc.EvpcProps.property.cidr"></a>

- *Deprecated:* Use ipAddresses instead

```typescript
public readonly cidr: string;
```

- *Type:* string
- *Default:* Vpc.DEFAULT_CIDR_RANGE

The CIDR range to use for the VPC, e.g. '10.0.0.0/16'.

Should be a minimum of /28 and maximum size of /16. The range will be
split across all subnets per Availability Zone.

---

##### `createInternetGateway`<sup>Optional</sup> <a name="createInternetGateway" id="raindancers-cdk.enterprisevpc.EvpcProps.property.createInternetGateway"></a>

```typescript
public readonly createInternetGateway: boolean;
```

- *Type:* boolean
- *Default:* true

If set to false then disable the creation of the default internet gateway.

---

##### `defaultInstanceTenancy`<sup>Optional</sup> <a name="defaultInstanceTenancy" id="raindancers-cdk.enterprisevpc.EvpcProps.property.defaultInstanceTenancy"></a>

```typescript
public readonly defaultInstanceTenancy: DefaultInstanceTenancy;
```

- *Type:* aws-cdk-lib.aws_ec2.DefaultInstanceTenancy
- *Default:* DefaultInstanceTenancy.Default (shared) tenancy

The default tenancy of instances launched into the VPC.

By setting this to dedicated tenancy, instances will be launched on
hardware dedicated to a single AWS customer, unless specifically specified
at instance launch time. Please note, not all instance types are usable
with Dedicated tenancy.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="raindancers-cdk.enterprisevpc.EvpcProps.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the instances launched in the VPC get public DNS hostnames.

If this attribute is true, instances in the VPC get public DNS hostnames,
but only if the enableDnsSupport attribute is also set to true.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="raindancers-cdk.enterprisevpc.EvpcProps.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the DNS resolution is supported for the VPC.

If this attribute is false, the Amazon-provided DNS server in the VPC that
resolves public DNS hostnames to IP addresses is not enabled. If this
attribute is true, queries to the Amazon provided DNS server at the
169.254.169.253 IP address, or the reserved IP address at the base of the
VPC IPv4 network range plus two will succeed.

---

##### `flowLogs`<sup>Optional</sup> <a name="flowLogs" id="raindancers-cdk.enterprisevpc.EvpcProps.property.flowLogs"></a>

```typescript
public readonly flowLogs: {[ key: string ]: FlowLogOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}
- *Default:* No flow logs.

Flow logs to add to this VPC.

---

##### `gatewayEndpoints`<sup>Optional</sup> <a name="gatewayEndpoints" id="raindancers-cdk.enterprisevpc.EvpcProps.property.gatewayEndpoints"></a>

```typescript
public readonly gatewayEndpoints: {[ key: string ]: GatewayVpcEndpointOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}
- *Default:* None.

Gateway endpoints to add to this VPC.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="raindancers-cdk.enterprisevpc.EvpcProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses
- *Default:* ec2.IpAddresses.cidr

The Provider to use to allocate IPv4 Space to your VPC.

Options include static allocation or from a pool.

Note this is specific to IPv4 addresses.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="raindancers-cdk.enterprisevpc.EvpcProps.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: IpProtocol;
```

- *Type:* aws-cdk-lib.aws_ec2.IpProtocol
- *Default:* IpProtocol.IPV4_ONLY

The protocol of the vpc.

Options are IPv4 only or dual stack.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="raindancers-cdk.enterprisevpc.EvpcProps.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: IIpv6Addresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpv6Addresses
- *Default:* Ipv6Addresses.amazonProvided

The Provider to use to allocate IPv6 Space to your VPC.

Options include amazon provided CIDR block.

Note this is specific to IPv6 addresses.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="raindancers-cdk.enterprisevpc.EvpcProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number
- *Default:* 3

Define the maximum number of AZs to use in this region.

If the region has more AZs than you want to use (for example, because of
EIP limits), pick a lower number here. The AZs will be sorted and picked
from the start of the list.

If you pick a higher number than the number of AZs in the region, all AZs
in the region will be selected. To use "all AZs" available to your
account, use a high number (such as 99).

Be aware that environment-agnostic stacks will be created with access to
only 2 AZs, so to use more than 2 AZs, be sure to specify the account and
region on your stack.

Specify this option only if you do not specify `availabilityZones`.

---

##### `natGatewayProvider`<sup>Optional</sup> <a name="natGatewayProvider" id="raindancers-cdk.enterprisevpc.EvpcProps.property.natGatewayProvider"></a>

```typescript
public readonly natGatewayProvider: NatProvider;
```

- *Type:* aws-cdk-lib.aws_ec2.NatProvider
- *Default:* NatProvider.gateway()

What type of NAT provider to use.

Select between NAT gateways or NAT instances. NAT gateways
may not be available in all AWS regions.

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="raindancers-cdk.enterprisevpc.EvpcProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number
- *Default:* One NAT gateway/instance per Availability Zone

The number of NAT Gateways/Instances to create.

The type of NAT gateway or instance will be determined by the
`natGatewayProvider` parameter.

You can set this number lower than the number of Availability Zones in your
VPC in order to save on NAT cost. Be aware you may be charged for
cross-AZ data traffic instead.

---

##### `natGatewaySubnets`<sup>Optional</sup> <a name="natGatewaySubnets" id="raindancers-cdk.enterprisevpc.EvpcProps.property.natGatewaySubnets"></a>

```typescript
public readonly natGatewaySubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* All public subnets.

Configures the subnets which will have NAT Gateways/Instances.

You can pick a specific group of subnets by specifying the group name;
the picked subnets must be public subnets.

Only necessary if you have more than one public subnet group.

---

##### `reservedAzs`<sup>Optional</sup> <a name="reservedAzs" id="raindancers-cdk.enterprisevpc.EvpcProps.property.reservedAzs"></a>

```typescript
public readonly reservedAzs: number;
```

- *Type:* number
- *Default:* 0

Define the number of AZs to reserve.

When specified, the IP space is reserved for the azs but no actual
resources are provisioned.

---

##### `restrictDefaultSecurityGroup`<sup>Optional</sup> <a name="restrictDefaultSecurityGroup" id="raindancers-cdk.enterprisevpc.EvpcProps.property.restrictDefaultSecurityGroup"></a>

```typescript
public readonly restrictDefaultSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true if '@aws-cdk/aws-ec2:restrictDefaultSecurityGroup' is enabled, false otherwise

If set to true then the default inbound & outbound rules will be removed from the default security group.

---

##### `subnetConfiguration`<sup>Optional</sup> <a name="subnetConfiguration" id="raindancers-cdk.enterprisevpc.EvpcProps.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]
- *Default:* The VPC CIDR will be evenly divided between 1 public and 1 private subnet per AZ.

Configure the subnets to build for each AZ.

Each entry in this list configures a Subnet Group; each group will contain a
subnet for each Availability Zone.

For example, if you want 1 public subnet, 1 private subnet, and 1 isolated
subnet in each AZ provide the following:

```ts
new ec2.Vpc(this, 'VPC', {
  subnetConfiguration: [
     {
       cidrMask: 24,
       name: 'ingress',
       subnetType: ec2.SubnetType.PUBLIC,
     },
     {
       cidrMask: 24,
       name: 'application',
       subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
     },
     {
       cidrMask: 28,
       name: 'rds',
       subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
     }
  ]
});
```

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="raindancers-cdk.enterprisevpc.EvpcProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string
- *Default:* this.node.path

The VPC name.

Since the VPC resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `vpnConnections`<sup>Optional</sup> <a name="vpnConnections" id="raindancers-cdk.enterprisevpc.EvpcProps.property.vpnConnections"></a>

```typescript
public readonly vpnConnections: {[ key: string ]: VpnConnectionOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}
- *Default:* No connections.

VPN connections to this VPC.

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="raindancers-cdk.enterprisevpc.EvpcProps.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: boolean;
```

- *Type:* boolean
- *Default:* true when vpnGatewayAsn or vpnConnections is specified

Indicates whether a VPN gateway should be created and attached to this VPC.

---

##### `vpnGatewayAsn`<sup>Optional</sup> <a name="vpnGatewayAsn" id="raindancers-cdk.enterprisevpc.EvpcProps.property.vpnGatewayAsn"></a>

```typescript
public readonly vpnGatewayAsn: number;
```

- *Type:* number
- *Default:* Amazon default ASN.

The private Autonomous System Number (ASN) for the VPN gateway.

---

##### `vpnRoutePropagation`<sup>Optional</sup> <a name="vpnRoutePropagation" id="raindancers-cdk.enterprisevpc.EvpcProps.property.vpnRoutePropagation"></a>

```typescript
public readonly vpnRoutePropagation: SubnetSelection[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection[]
- *Default:* On the route tables associated with private subnets. If no private subnets exists, isolated subnets are used. If no isolated subnets exists, public subnets are used.

Where to propagate VPN routes.

---

##### `subnetGroups`<sup>Optional</sup> <a name="subnetGroups" id="raindancers-cdk.enterprisevpc.EvpcProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: SubnetGroup[];
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup[]

---

### ExtraSubnetsProps <a name="ExtraSubnetsProps" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const extraSubnetsProps: enterprisevpc.ExtraSubnetsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.addToSubnetGroupName">addToSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.ipamSourcePoolId">ipamSourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.subnetSize">subnetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.shareToAccounts">shareToAccounts</a></code> | <code>aws-cdk-lib.aws_iam.AccountPrincipal[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.vpcAccount">vpcAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.vpcRegion">vpcRegion</a></code> | <code>string</code> | *No description.* |

---

##### `addToSubnetGroupName`<sup>Required</sup> <a name="addToSubnetGroupName" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.addToSubnetGroupName"></a>

```typescript
public readonly addToSubnetGroupName: string;
```

- *Type:* string

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `ipamSourcePoolId`<sup>Required</sup> <a name="ipamSourcePoolId" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.ipamSourcePoolId"></a>

```typescript
public readonly ipamSourcePoolId: string;
```

- *Type:* string

---

##### `subnetSize`<sup>Required</sup> <a name="subnetSize" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.subnetSize"></a>

```typescript
public readonly subnetSize: number;
```

- *Type:* number

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `shareToAccounts`<sup>Optional</sup> <a name="shareToAccounts" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.shareToAccounts"></a>

```typescript
public readonly shareToAccounts: AccountPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.AccountPrincipal[]

---

##### `vpcAccount`<sup>Optional</sup> <a name="vpcAccount" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.vpcAccount"></a>

```typescript
public readonly vpcAccount: string;
```

- *Type:* string

---

##### `vpcRegion`<sup>Optional</sup> <a name="vpcRegion" id="raindancers-cdk.enterprisevpc.ExtraSubnetsProps.property.vpcRegion"></a>

```typescript
public readonly vpcRegion: string;
```

- *Type:* string

---

### FilterProps <a name="FilterProps" id="raindancers-cdk.orgTools.FilterProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.FilterProps.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const filterProps: orgTools.FilterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.FilterProps.property.alarmSNSTopic">alarmSNSTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.FilterProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.FilterProps.property.nameSpace">nameSpace</a></code> | <code>string</code> | *No description.* |

---

##### `alarmSNSTopic`<sup>Required</sup> <a name="alarmSNSTopic" id="raindancers-cdk.orgTools.FilterProps.property.alarmSNSTopic"></a>

```typescript
public readonly alarmSNSTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="raindancers-cdk.orgTools.FilterProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `nameSpace`<sup>Required</sup> <a name="nameSpace" id="raindancers-cdk.orgTools.FilterProps.property.nameSpace"></a>

```typescript
public readonly nameSpace: string;
```

- *Type:* string

---

### FirewallDashboardProps <a name="FirewallDashboardProps" id="raindancers-cdk.nwFirewall.FirewallDashboardProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.FirewallDashboardProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const firewallDashboardProps: nwFirewall.FirewallDashboardProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallAlertLog">firewallAlertLog</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | Name of the CloudWatch log group where firewall alert logs are stored. |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallFlowLog">firewallFlowLog</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | Name of the CloudWatch log group where firewall flow logs are stored. |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallName">firewallName</a></code> | <code>string</code> | The name of the firewall as seen in the firewall console. |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallSubnets">firewallSubnets</a></code> | <code>string[]</code> | The firewall subnet IDs. |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallDashboardProps.property.contributorInsightsRuleState">contributorInsightsRuleState</a></code> | <code>string</code> | State of the Contributor Insights rules (ENABLED or DISABLED). |

---

##### `firewallAlertLog`<sup>Required</sup> <a name="firewallAlertLog" id="raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallAlertLog"></a>

```typescript
public readonly firewallAlertLog: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

Name of the CloudWatch log group where firewall alert logs are stored.

---

##### `firewallFlowLog`<sup>Required</sup> <a name="firewallFlowLog" id="raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallFlowLog"></a>

```typescript
public readonly firewallFlowLog: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

Name of the CloudWatch log group where firewall flow logs are stored.

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

The name of the firewall as seen in the firewall console.

---

##### `firewallSubnets`<sup>Required</sup> <a name="firewallSubnets" id="raindancers-cdk.nwFirewall.FirewallDashboardProps.property.firewallSubnets"></a>

```typescript
public readonly firewallSubnets: string[];
```

- *Type:* string[]

The firewall subnet IDs.

---

##### `contributorInsightsRuleState`<sup>Optional</sup> <a name="contributorInsightsRuleState" id="raindancers-cdk.nwFirewall.FirewallDashboardProps.property.contributorInsightsRuleState"></a>

```typescript
public readonly contributorInsightsRuleState: string;
```

- *Type:* string
- *Default:* ENABLED

State of the Contributor Insights rules (ENABLED or DISABLED).

---

### FirewallPolicyProps <a name="FirewallPolicyProps" id="raindancers-cdk.nwFirewall.FirewallPolicyProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.FirewallPolicyProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const firewallPolicyProps: nwFirewall.FirewallPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicyProps.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicyProps.property.statelessDefaultActions">statelessDefaultActions</a></code> | <code>raindancers-cdk.nwFirewall.StatelessActions[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicyProps.property.statelessFragmentDefaultActions">statelessFragmentDefaultActions</a></code> | <code>raindancers-cdk.nwFirewall.StatelessActions[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallPolicyProps.property.statefulEngineOptions">statefulEngineOptions</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty</code> | *No description.* |

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="raindancers-cdk.nwFirewall.FirewallPolicyProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `statelessDefaultActions`<sup>Required</sup> <a name="statelessDefaultActions" id="raindancers-cdk.nwFirewall.FirewallPolicyProps.property.statelessDefaultActions"></a>

```typescript
public readonly statelessDefaultActions: StatelessActions[];
```

- *Type:* raindancers-cdk.nwFirewall.StatelessActions[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="statelessFragmentDefaultActions" id="raindancers-cdk.nwFirewall.FirewallPolicyProps.property.statelessFragmentDefaultActions"></a>

```typescript
public readonly statelessFragmentDefaultActions: StatelessActions[];
```

- *Type:* raindancers-cdk.nwFirewall.StatelessActions[]

---

##### `statefulEngineOptions`<sup>Optional</sup> <a name="statefulEngineOptions" id="raindancers-cdk.nwFirewall.FirewallPolicyProps.property.statefulEngineOptions"></a>

```typescript
public readonly statefulEngineOptions: StatefulEngineOptionsProperty;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty

---

### FlowLogProps <a name="FlowLogProps" id="raindancers-cdk.cloudNetwork.FlowLogProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.FlowLogProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const flowLogProps: cloudNetwork.FlowLogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.FlowLogProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | the central s3 location for enterprise flow logs. |
| <code><a href="#raindancers-cdk.cloudNetwork.FlowLogProps.property.localAthenaQuerys">localAthenaQuerys</a></code> | <code>boolean</code> | create in Account Athena Querys for flow logs. |
| <code><a href="#raindancers-cdk.cloudNetwork.FlowLogProps.property.oneMinuteFlowLogs">oneMinuteFlowLogs</a></code> | <code>boolean</code> | 1 minute resolution. |
| <code><a href="#raindancers-cdk.cloudNetwork.FlowLogProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="raindancers-cdk.cloudNetwork.FlowLogProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

the central s3 location for enterprise flow logs.

---

##### `localAthenaQuerys`<sup>Optional</sup> <a name="localAthenaQuerys" id="raindancers-cdk.cloudNetwork.FlowLogProps.property.localAthenaQuerys"></a>

```typescript
public readonly localAthenaQuerys: boolean;
```

- *Type:* boolean

create in Account Athena Querys for flow logs.

---

##### `oneMinuteFlowLogs`<sup>Optional</sup> <a name="oneMinuteFlowLogs" id="raindancers-cdk.cloudNetwork.FlowLogProps.property.oneMinuteFlowLogs"></a>

```typescript
public readonly oneMinuteFlowLogs: boolean;
```

- *Type:* boolean

1 minute resolution.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.FlowLogProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### FlowLogProps <a name="FlowLogProps" id="raindancers-cdk.enterprisevpc.FlowLogProps"></a>

Properties for flow logs *.

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.FlowLogProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const flowLogProps: enterprisevpc.FlowLogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.FlowLogProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | the central s3 location for enterprise flow logs. |
| <code><a href="#raindancers-cdk.enterprisevpc.FlowLogProps.property.localAthenaQuerys">localAthenaQuerys</a></code> | <code>boolean</code> | create in Account Athena Querys for flow logs. |
| <code><a href="#raindancers-cdk.enterprisevpc.FlowLogProps.property.oneMinuteFlowLogs">oneMinuteFlowLogs</a></code> | <code>boolean</code> | 1 minute resolution. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-cdk.enterprisevpc.FlowLogProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

the central s3 location for enterprise flow logs.

---

##### `localAthenaQuerys`<sup>Optional</sup> <a name="localAthenaQuerys" id="raindancers-cdk.enterprisevpc.FlowLogProps.property.localAthenaQuerys"></a>

```typescript
public readonly localAthenaQuerys: boolean;
```

- *Type:* boolean

create in Account Athena Querys for flow logs.

---

##### `oneMinuteFlowLogs`<sup>Optional</sup> <a name="oneMinuteFlowLogs" id="raindancers-cdk.enterprisevpc.FlowLogProps.property.oneMinuteFlowLogs"></a>

```typescript
public readonly oneMinuteFlowLogs: boolean;
```

- *Type:* boolean

1 minute resolution.

---

### ForwardingRule <a name="ForwardingRule" id="raindancers-cdk.remailer.ForwardingRule"></a>

Forward mail sent to an address to an array of of address.

#### Initializer <a name="Initializer" id="raindancers-cdk.remailer.ForwardingRule.Initializer"></a>

```typescript
import { remailer } from 'raindancers-cdk'

const forwardingRule: remailer.ForwardingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.remailer.ForwardingRule.property.forwardTo">forwardTo</a></code> | <code>string[]</code> | where to forward the mail to. |
| <code><a href="#raindancers-cdk.remailer.ForwardingRule.property.priority">priority</a></code> | <code>number</code> | The priority of the rule, lower has a higher priority. |
| <code><a href="#raindancers-cdk.remailer.ForwardingRule.property.sentTo">sentTo</a></code> | <code>string</code> | a regex expression forthe address of the incoming mail to match on. |

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="raindancers-cdk.remailer.ForwardingRule.property.forwardTo"></a>

```typescript
public readonly forwardTo: string[];
```

- *Type:* string[]

where to forward the mail to.

These should be fully specified
eg.   someaddress@somedomain.com

---

##### `priority`<sup>Required</sup> <a name="priority" id="raindancers-cdk.remailer.ForwardingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the rule, lower has a higher priority.

---

##### `sentTo`<sup>Required</sup> <a name="sentTo" id="raindancers-cdk.remailer.ForwardingRule.property.sentTo"></a>

```typescript
public readonly sentTo: string;
```

- *Type:* string

a regex expression forthe address of the incoming mail to match on.

---

### ForwardingRulesProps <a name="ForwardingRulesProps" id="raindancers-cdk.dns.ForwardingRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.ForwardingRulesProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const forwardingRulesProps: dns.ForwardingRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.ForwardingRulesProps.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ForwardingRulesProps.property.resolverId">resolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ForwardingRulesProps.property.resolverIP">resolverIP</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.ForwardingRulesProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `domains`<sup>Required</sup> <a name="domains" id="raindancers-cdk.dns.ForwardingRulesProps.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `resolverId`<sup>Required</sup> <a name="resolverId" id="raindancers-cdk.dns.ForwardingRulesProps.property.resolverId"></a>

```typescript
public readonly resolverId: string;
```

- *Type:* string

---

##### `resolverIP`<sup>Required</sup> <a name="resolverIP" id="raindancers-cdk.dns.ForwardingRulesProps.property.resolverIP"></a>

```typescript
public readonly resolverIP: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.dns.ForwardingRulesProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

### GatewayTarget <a name="GatewayTarget" id="raindancers-cdk.agentCore.v2.GatewayTarget"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.agentCore.v2.GatewayTarget.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

const gatewayTarget: agentCore.v2.GatewayTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.apiKey">apiKey</a></code> | <code>raindancers-cdk.agentCore.v2.ApiKey</code> | Secret containing the API token. |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.name">name</a></code> | <code>string</code> | Target name. |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.credentialLocation">credentialLocation</a></code> | <code>raindancers-cdk.agentCore.v2.CredentialLocation</code> | Credential Location. |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.credentialParameterName">credentialParameterName</a></code> | <code>string</code> | Credential parameter name. |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.description">description</a></code> | <code>string</code> | Target description. |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.pathToOpenApiSpec">pathToOpenApiSpec</a></code> | <code>string</code> | Path to the OpenAPI specification file. |
| <code><a href="#raindancers-cdk.agentCore.v2.GatewayTarget.property.s3Uri">s3Uri</a></code> | <code>string</code> | S3 URI to the OpenAPI specification file. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.apiKey"></a>

```typescript
public readonly apiKey: ApiKey;
```

- *Type:* raindancers-cdk.agentCore.v2.ApiKey

Secret containing the API token.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Target name.

---

##### `credentialLocation`<sup>Optional</sup> <a name="credentialLocation" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.credentialLocation"></a>

```typescript
public readonly credentialLocation: CredentialLocation;
```

- *Type:* raindancers-cdk.agentCore.v2.CredentialLocation

Credential Location.

---

##### `credentialParameterName`<sup>Optional</sup> <a name="credentialParameterName" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.credentialParameterName"></a>

```typescript
public readonly credentialParameterName: string;
```

- *Type:* string

Credential parameter name.

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Target description.

---

##### `pathToOpenApiSpec`<sup>Optional</sup> <a name="pathToOpenApiSpec" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.pathToOpenApiSpec"></a>

```typescript
public readonly pathToOpenApiSpec: string;
```

- *Type:* string

Path to the OpenAPI specification file.

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="raindancers-cdk.agentCore.v2.GatewayTarget.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

S3 URI to the OpenAPI specification file.

---

### GwLBTunnelProps <a name="GwLBTunnelProps" id="raindancers-cdk.geneve.GwLBTunnelProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.geneve.GwLBTunnelProps.Initializer"></a>

```typescript
import { geneve } from 'raindancers-cdk'

const gwLBTunnelProps: geneve.GwLBTunnelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnelProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnelProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |
| <code><a href="#raindancers-cdk.geneve.GwLBTunnelProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="raindancers-cdk.geneve.GwLBTunnelProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.geneve.GwLBTunnelProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.geneve.GwLBTunnelProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### HubVpc <a name="HubVpc" id="raindancers-cdk.dns.HubVpc"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.HubVpc.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const hubVpc: dns.HubVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.HubVpc.property.region">region</a></code> | <code>string</code> | what region is the central account in. |
| <code><a href="#raindancers-cdk.dns.HubVpc.property.crossAccount">crossAccount</a></code> | <code>raindancers-cdk.dns.CrossAccountProps</code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.HubVpc.property.vpcSearchTag">vpcSearchTag</a></code> | <code>aws-cdk-lib.Tag</code> | *No description.* |

---

##### `region`<sup>Required</sup> <a name="region" id="raindancers-cdk.dns.HubVpc.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

what region is the central account in.

---

##### `crossAccount`<sup>Optional</sup> <a name="crossAccount" id="raindancers-cdk.dns.HubVpc.property.crossAccount"></a>

```typescript
public readonly crossAccount: CrossAccountProps;
```

- *Type:* raindancers-cdk.dns.CrossAccountProps

---

##### `vpcSearchTag`<sup>Optional</sup> <a name="vpcSearchTag" id="raindancers-cdk.dns.HubVpc.property.vpcSearchTag"></a>

```typescript
public readonly vpcSearchTag: Tag;
```

- *Type:* aws-cdk-lib.Tag

---

### ImagePipelineProps <a name="ImagePipelineProps" id="raindancers-cdk.imagebuilder.ImagePipelineProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.imagebuilder.ImagePipelineProps.Initializer"></a>

```typescript
import { imagebuilder } from 'raindancers-cdk'

const imagePipelineProps: imagebuilder.ImagePipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.components">components</a></code> | <code>string \| raindancers-cdk.imagebuilder.ComponentProps[]</code> | List of component props. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.parentImage">parentImage</a></code> | <code>string</code> | The source (parent) image that the image recipe uses as its base environment. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.additionalPolicies">additionalPolicies</a></code> | <code>aws-cdk-lib.aws_iam.ManagedPolicy[]</code> | Additional policies to add to the instance profile associated with the Instance Configurations. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.amiIdSsmAccountId">amiIdSsmAccountId</a></code> | <code>string</code> | Account ID for Parameter Store path above. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.amiIdSsmPath">amiIdSsmPath</a></code> | <code>string</code> | Parameter Store path to store latest AMI ID under. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.amiIdSsmRegion">amiIdSsmRegion</a></code> | <code>string</code> | Region for Parameter Store path above. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.distributionAccountIDs">distributionAccountIDs</a></code> | <code>string[]</code> | List of accounts to copy this AMI to, if the option to do so is enabled. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.distributionRegions">distributionRegions</a></code> | <code>string[]</code> | List of regions to copy this AMI to, if the option to do so is enabled. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.ebsVolumeConfigurations">ebsVolumeConfigurations</a></code> | <code>raindancers-cdk.imagebuilder.VolumeProps[]</code> | Configuration for the AMI's EBS volumes. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.email">email</a></code> | <code>string</code> | Email used to receive Image Builder Pipeline Notifications via SNS. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.enableCrossAccountDistribution">enableCrossAccountDistribution</a></code> | <code>boolean</code> | Set to true if you want to copy this AMI to other accounts using a Distribution Configuration. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.enableVulnScans">enableVulnScans</a></code> | <code>boolean</code> | Set to true if you want to enable continuous vulnerability scans through AWS Inpector. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.imageRecipeVersion">imageRecipeVersion</a></code> | <code>string</code> | Image recipe version (Default: 0.0.1). |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | List of instance types used in the Instance Configuration (Default: [ 't3.medium', 'm5.large', 'm5.xlarge' ]). |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS Key used to encrypt the SNS topic. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.platform">platform</a></code> | <code>string</code> | Platform type Linux or Windows (Default: Linux). |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | List of security group IDs for the Infrastructure Configuration. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.subnetId">subnetId</a></code> | <code>string</code> | Subnet ID for the Infrastructure Configuration. |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.userDataScript">userDataScript</a></code> | <code>string</code> | UserData script that will override default one (if specified). |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.vulnScansRepoName">vulnScansRepoName</a></code> | <code>string</code> | Store vulnerability scans through AWS Inpsector in ECR using this repo name (if option is enabled). |
| <code><a href="#raindancers-cdk.imagebuilder.ImagePipelineProps.property.vulnScansRepoTags">vulnScansRepoTags</a></code> | <code>string[]</code> | Store vulnerability scans through AWS Inpsector in ECR using these image tags (if option is enabled). |

---

##### `components`<sup>Required</sup> <a name="components" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.components"></a>

```typescript
public readonly components: string | ComponentProps[];
```

- *Type:* string | raindancers-cdk.imagebuilder.ComponentProps[]

List of component props.

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

The source (parent) image that the image recipe uses as its base environment.

The value can be the parent image ARN or an Image Builder AMI ID

---

##### `additionalPolicies`<sup>Optional</sup> <a name="additionalPolicies" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.additionalPolicies"></a>

```typescript
public readonly additionalPolicies: ManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.ManagedPolicy[]

Additional policies to add to the instance profile associated with the Instance Configurations.

---

##### `amiIdSsmAccountId`<sup>Optional</sup> <a name="amiIdSsmAccountId" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.amiIdSsmAccountId"></a>

```typescript
public readonly amiIdSsmAccountId: string;
```

- *Type:* string

Account ID for Parameter Store path above.

---

##### `amiIdSsmPath`<sup>Optional</sup> <a name="amiIdSsmPath" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.amiIdSsmPath"></a>

```typescript
public readonly amiIdSsmPath: string;
```

- *Type:* string

Parameter Store path to store latest AMI ID under.

---

##### `amiIdSsmRegion`<sup>Optional</sup> <a name="amiIdSsmRegion" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.amiIdSsmRegion"></a>

```typescript
public readonly amiIdSsmRegion: string;
```

- *Type:* string

Region for Parameter Store path above.

---

##### `distributionAccountIDs`<sup>Optional</sup> <a name="distributionAccountIDs" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.distributionAccountIDs"></a>

```typescript
public readonly distributionAccountIDs: string[];
```

- *Type:* string[]

List of accounts to copy this AMI to, if the option to do so is enabled.

---

##### `distributionRegions`<sup>Optional</sup> <a name="distributionRegions" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.distributionRegions"></a>

```typescript
public readonly distributionRegions: string[];
```

- *Type:* string[]

List of regions to copy this AMI to, if the option to do so is enabled.

---

##### `ebsVolumeConfigurations`<sup>Optional</sup> <a name="ebsVolumeConfigurations" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.ebsVolumeConfigurations"></a>

```typescript
public readonly ebsVolumeConfigurations: VolumeProps[];
```

- *Type:* raindancers-cdk.imagebuilder.VolumeProps[]

Configuration for the AMI's EBS volumes.

---

##### `email`<sup>Optional</sup> <a name="email" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email used to receive Image Builder Pipeline Notifications via SNS.

---

##### `enableCrossAccountDistribution`<sup>Optional</sup> <a name="enableCrossAccountDistribution" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.enableCrossAccountDistribution"></a>

```typescript
public readonly enableCrossAccountDistribution: boolean;
```

- *Type:* boolean

Set to true if you want to copy this AMI to other accounts using a Distribution Configuration.

---

##### `enableVulnScans`<sup>Optional</sup> <a name="enableVulnScans" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.enableVulnScans"></a>

```typescript
public readonly enableVulnScans: boolean;
```

- *Type:* boolean

Set to true if you want to enable continuous vulnerability scans through AWS Inpector.

---

##### `imageRecipeVersion`<sup>Optional</sup> <a name="imageRecipeVersion" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.imageRecipeVersion"></a>

```typescript
public readonly imageRecipeVersion: string;
```

- *Type:* string

Image recipe version (Default: 0.0.1).

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

List of instance types used in the Instance Configuration (Default: [ 't3.medium', 'm5.large', 'm5.xlarge' ]).

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS Key used to encrypt the SNS topic.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Platform type Linux or Windows (Default: Linux).

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

List of security group IDs for the Infrastructure Configuration.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Subnet ID for the Infrastructure Configuration.

---

##### `userDataScript`<sup>Optional</sup> <a name="userDataScript" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.userDataScript"></a>

```typescript
public readonly userDataScript: string;
```

- *Type:* string
- *Default:* none

UserData script that will override default one (if specified).

---

##### `vulnScansRepoName`<sup>Optional</sup> <a name="vulnScansRepoName" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.vulnScansRepoName"></a>

```typescript
public readonly vulnScansRepoName: string;
```

- *Type:* string

Store vulnerability scans through AWS Inpsector in ECR using this repo name (if option is enabled).

---

##### `vulnScansRepoTags`<sup>Optional</sup> <a name="vulnScansRepoTags" id="raindancers-cdk.imagebuilder.ImagePipelineProps.property.vulnScansRepoTags"></a>

```typescript
public readonly vulnScansRepoTags: string[];
```

- *Type:* string[]

Store vulnerability scans through AWS Inpsector in ECR using these image tags (if option is enabled).

---

### InspectionRoutesProps <a name="InspectionRoutesProps" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const inspectionRoutesProps: cloudNetwork.InspectionRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.firewallAttachmentId">firewallAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.inspectionRoutes">inspectionRoutes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.inspectionTgRouteTable">inspectionTgRouteTable</a></code> | <code>raindancers-cdk.transitGateway.ITransitGatewayRouteTable</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.localAttachmentId">localAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.localTgRouteTable">localTgRouteTable</a></code> | <code>raindancers-cdk.transitGateway.ITransitGatewayRouteTable</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.vpcIpv4Cidr">vpcIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.vpcIpv6Cidr">vpcIpv6Cidr</a></code> | <code>string</code> | *No description.* |

---

##### `firewallAttachmentId`<sup>Required</sup> <a name="firewallAttachmentId" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.firewallAttachmentId"></a>

```typescript
public readonly firewallAttachmentId: string;
```

- *Type:* string

---

##### `inspectionRoutes`<sup>Required</sup> <a name="inspectionRoutes" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.inspectionRoutes"></a>

```typescript
public readonly inspectionRoutes: string[];
```

- *Type:* string[]

---

##### `inspectionTgRouteTable`<sup>Required</sup> <a name="inspectionTgRouteTable" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.inspectionTgRouteTable"></a>

```typescript
public readonly inspectionTgRouteTable: ITransitGatewayRouteTable;
```

- *Type:* raindancers-cdk.transitGateway.ITransitGatewayRouteTable

---

##### `localAttachmentId`<sup>Required</sup> <a name="localAttachmentId" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.localAttachmentId"></a>

```typescript
public readonly localAttachmentId: string;
```

- *Type:* string

---

##### `localTgRouteTable`<sup>Required</sup> <a name="localTgRouteTable" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.localTgRouteTable"></a>

```typescript
public readonly localTgRouteTable: ITransitGatewayRouteTable;
```

- *Type:* raindancers-cdk.transitGateway.ITransitGatewayRouteTable

---

##### `vpcIpv4Cidr`<sup>Required</sup> <a name="vpcIpv4Cidr" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.vpcIpv4Cidr"></a>

```typescript
public readonly vpcIpv4Cidr: string;
```

- *Type:* string

---

##### `vpcIpv6Cidr`<sup>Required</sup> <a name="vpcIpv6Cidr" id="raindancers-cdk.cloudNetwork.InspectionRoutesProps.property.vpcIpv6Cidr"></a>

```typescript
public readonly vpcIpv6Cidr: string;
```

- *Type:* string

---

### IpamConfig <a name="IpamConfig" id="raindancers-cdk.cloudNetwork.IpamConfig"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.IpamConfig.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const ipamConfig: cloudNetwork.IpamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.eipPool">eipPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.ipv4IpamScope">ipv4IpamScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.ipv6PoolId">ipv6PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.ipv6ScopeId">ipv6ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.regionToMakeAPICalls">regionToMakeAPICalls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamConfig.property.useDirectAPICalls">useDirectAPICalls</a></code> | <code>boolean</code> | Use direct API calls instead of CloudFormation for IPAM resources (for regions without full CloudFormation support). |

---

##### `eipPool`<sup>Required</sup> <a name="eipPool" id="raindancers-cdk.cloudNetwork.IpamConfig.property.eipPool"></a>

```typescript
public readonly eipPool: string;
```

- *Type:* string

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="raindancers-cdk.cloudNetwork.IpamConfig.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

---

##### `ipv4IpamScope`<sup>Required</sup> <a name="ipv4IpamScope" id="raindancers-cdk.cloudNetwork.IpamConfig.property.ipv4IpamScope"></a>

```typescript
public readonly ipv4IpamScope: string;
```

- *Type:* string

---

##### `ipv6PoolId`<sup>Required</sup> <a name="ipv6PoolId" id="raindancers-cdk.cloudNetwork.IpamConfig.property.ipv6PoolId"></a>

```typescript
public readonly ipv6PoolId: string;
```

- *Type:* string

---

##### `ipv6ScopeId`<sup>Required</sup> <a name="ipv6ScopeId" id="raindancers-cdk.cloudNetwork.IpamConfig.property.ipv6ScopeId"></a>

```typescript
public readonly ipv6ScopeId: string;
```

- *Type:* string

---

##### `regionToMakeAPICalls`<sup>Optional</sup> <a name="regionToMakeAPICalls" id="raindancers-cdk.cloudNetwork.IpamConfig.property.regionToMakeAPICalls"></a>

```typescript
public readonly regionToMakeAPICalls: string;
```

- *Type:* string

---

##### `useDirectAPICalls`<sup>Optional</sup> <a name="useDirectAPICalls" id="raindancers-cdk.cloudNetwork.IpamConfig.property.useDirectAPICalls"></a>

```typescript
public readonly useDirectAPICalls: boolean;
```

- *Type:* boolean

Use direct API calls instead of CloudFormation for IPAM resources (for regions without full CloudFormation support).

---

### IpamPlanningTools <a name="IpamPlanningTools" id="raindancers-cdk.cloudNetwork.IpamPlanningTools"></a>

Properties for IPAM VPC planning tools.

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const ipamPlanningTools: cloudNetwork.IpamPlanningTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.ipamConfig">ipamConfig</a></code> | <code>raindancers-cdk.cloudNetwork.IpamConfig</code> | IPAM configuration for the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.CfnVPC</code> | The VPC ID for which planning pools are created. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.vpcName">vpcName</a></code> | <code>string</code> | The name of the VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.defaultipv4allocation">defaultipv4allocation</a></code> | <code>number</code> | Default IPv4 allocation netmask length. |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.regionToCreatePlanningPools">regionToCreatePlanningPools</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IpamPlanningTools.property.useDirectAPICalls">useDirectAPICalls</a></code> | <code>boolean</code> | *No description.* |

---

##### `ipamConfig`<sup>Required</sup> <a name="ipamConfig" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.ipamConfig"></a>

```typescript
public readonly ipamConfig: IpamConfig;
```

- *Type:* raindancers-cdk.cloudNetwork.IpamConfig

IPAM configuration for the VPC.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.vpc"></a>

```typescript
public readonly vpc: CfnVPC;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnVPC

The VPC ID for which planning pools are created.

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

The name of the VPC.

---

##### `defaultipv4allocation`<sup>Optional</sup> <a name="defaultipv4allocation" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.defaultipv4allocation"></a>

```typescript
public readonly defaultipv4allocation: number;
```

- *Type:* number

Default IPv4 allocation netmask length.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

---

##### `regionToCreatePlanningPools`<sup>Optional</sup> <a name="regionToCreatePlanningPools" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.regionToCreatePlanningPools"></a>

```typescript
public readonly regionToCreatePlanningPools: string;
```

- *Type:* string

---

##### `useDirectAPICalls`<sup>Optional</sup> <a name="useDirectAPICalls" id="raindancers-cdk.cloudNetwork.IpamPlanningTools.property.useDirectAPICalls"></a>

```typescript
public readonly useDirectAPICalls: boolean;
```

- *Type:* boolean

---

### JoinActiveDirectoryAutomationProps <a name="JoinActiveDirectoryAutomationProps" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.Initializer"></a>

```typescript
import { ssm } from 'raindancers-cdk'

const joinActiveDirectoryAutomationProps: ssm.automation.JoinActiveDirectoryAutomationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.instances">instances</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.joinUsername">joinUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.joinUserPasswordSSMParameterName">joinUserPasswordSSMParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.targetOU">targetOU</a></code> | <code>string</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.instances"></a>

```typescript
public readonly instances: IInstance[];
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance[]

---

##### `joinUsername`<sup>Required</sup> <a name="joinUsername" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.joinUsername"></a>

```typescript
public readonly joinUsername: string;
```

- *Type:* string

---

##### `joinUserPasswordSSMParameterName`<sup>Required</sup> <a name="joinUserPasswordSSMParameterName" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.joinUserPasswordSSMParameterName"></a>

```typescript
public readonly joinUserPasswordSSMParameterName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetOU`<sup>Required</sup> <a name="targetOU" id="raindancers-cdk.ssm.automation.JoinActiveDirectoryAutomationProps.property.targetOU"></a>

```typescript
public readonly targetOU: string;
```

- *Type:* string

---

### LaunchTemplateProps <a name="LaunchTemplateProps" id="raindancers-cdk.zscaler.LaunchTemplateProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.zscaler.LaunchTemplateProps.Initializer"></a>

```typescript
import { zscaler } from 'raindancers-cdk'

const launchTemplateProps: zscaler.LaunchTemplateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.zscaler.LaunchTemplateProps.property.componentAPIKeySecretName">componentAPIKeySecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.LaunchTemplateProps.property.componentType">componentType</a></code> | <code>raindancers-cdk.zscaler.ComponentType</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.LaunchTemplateProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.LaunchTemplateProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.LaunchTemplateProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |

---

##### `componentAPIKeySecretName`<sup>Required</sup> <a name="componentAPIKeySecretName" id="raindancers-cdk.zscaler.LaunchTemplateProps.property.componentAPIKeySecretName"></a>

```typescript
public readonly componentAPIKeySecretName: string;
```

- *Type:* string

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="raindancers-cdk.zscaler.LaunchTemplateProps.property.componentType"></a>

```typescript
public readonly componentType: ComponentType;
```

- *Type:* raindancers-cdk.zscaler.ComponentType

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.zscaler.LaunchTemplateProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.zscaler.LaunchTemplateProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="raindancers-cdk.zscaler.LaunchTemplateProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

### LoadBalancersProps <a name="LoadBalancersProps" id="raindancers-cdk.loadbalancer.LoadBalancersProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.loadbalancer.LoadBalancersProps.Initializer"></a>

```typescript
import { loadbalancer } from 'raindancers-cdk'

const loadBalancersProps: loadbalancer.LoadBalancersProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.ingressVpc">ingressVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.privateLoadbalancerDomain">privateLoadbalancerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.subnetGroupName">subnetGroupName</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.delegatedZone">delegatedZone</a></code> | <code>raindancers-cdk.loadbalancer.DelegatedZone</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.sslPolicy">sslPolicy</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.SslPolicy</code> | *No description.* |
| <code><a href="#raindancers-cdk.loadbalancer.LoadBalancersProps.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.HostedZone</code> | *No description.* |

---

##### `ingressVpc`<sup>Required</sup> <a name="ingressVpc" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.ingressVpc"></a>

```typescript
public readonly ingressVpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `privateLoadbalancerDomain`<sup>Required</sup> <a name="privateLoadbalancerDomain" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.privateLoadbalancerDomain"></a>

```typescript
public readonly privateLoadbalancerDomain: string;
```

- *Type:* string

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `delegatedZone`<sup>Optional</sup> <a name="delegatedZone" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.delegatedZone"></a>

```typescript
public readonly delegatedZone: DelegatedZone;
```

- *Type:* raindancers-cdk.loadbalancer.DelegatedZone

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: SslPolicy;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.SslPolicy

---

##### `zone`<sup>Optional</sup> <a name="zone" id="raindancers-cdk.loadbalancer.LoadBalancersProps.property.zone"></a>

```typescript
public readonly zone: HostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZone

---

### LocalZoneOptInProps <a name="LocalZoneOptInProps" id="raindancers-cdk.localzone.LocalZoneOptInProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.localzone.LocalZoneOptInProps.Initializer"></a>

```typescript
import { localzone } from 'raindancers-cdk'

const localZoneOptInProps: localzone.LocalZoneOptInProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.localzone.LocalZoneOptInProps.property.zone">zone</a></code> | <code>raindancers-cdk.localzone.LocalZones</code> | *No description.* |

---

##### `zone`<sup>Required</sup> <a name="zone" id="raindancers-cdk.localzone.LocalZoneOptInProps.property.zone"></a>

```typescript
public readonly zone: LocalZones;
```

- *Type:* raindancers-cdk.localzone.LocalZones

---

### NestedRouteStackProps <a name="NestedRouteStackProps" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps"></a>

Properties for creating a nested stack containing routing configurations.

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const nestedRouteStackProps: cloudNetwork.NestedRouteStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | The Simple Notification Service (SNS) topics to publish stack related events. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the nested stack is removed. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.subnetRoutes">subnetRoutes</a></code> | <code>raindancers-cdk.cloudNetwork.RouterGroup[]</code> | Subnet-specific routing configurations. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to configure routing for. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.firewallEndpoints">firewallEndpoints</a></code> | <code>raindancers-cdk.cloudNetwork.IFirewallEndpoints[]</code> | Network Firewall endpoints for traffic inspection. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.internetGateway">internetGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnInternetGateway</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.internetGatewayRoutes">internetGatewayRoutes</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup[]</code> | Subnet groups that should route via Internet Gateway. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.nwfirewall">nwfirewall</a></code> | <code>raindancers-cdk.nwFirewall.NetworkFirewall</code> | Internet Gateway for public subnet routing. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | Transit Gateway attachment ID for this VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Transit Gateway ID for inter-VPC routing. |

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* notifications are not sent for this stack.

The Simple Notification Service (SNS) topics to publish stack related events.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no user-defined parameters are passed to the nested stack

The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.

Each parameter has a name corresponding
to a parameter defined in the embedded template and a value representing
the value that you want to set for the parameter.

The nested stack construct will automatically synthesize parameters in order
to bind references from the parent stack(s) into the nested stack.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the nested stack is removed.

The default is `Destroy`, because all Removal Policies of resources inside the
Nested Stack should already have been set correctly. You normally should
not need to set this value.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no timeout

The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state.

When CloudFormation detects that the nested stack has reached the
CREATE_COMPLETE state, it marks the nested stack resource as
CREATE_COMPLETE in the parent stack and resumes creating the parent stack.
If the timeout period expires before the nested stack reaches
CREATE_COMPLETE, CloudFormation marks the nested stack as failed and rolls
back both the nested stack and parent stack.

---

##### `subnetRoutes`<sup>Required</sup> <a name="subnetRoutes" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.subnetRoutes"></a>

```typescript
public readonly subnetRoutes: RouterGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.RouterGroup[]

Subnet-specific routing configurations.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to configure routing for.

---

##### `firewallEndpoints`<sup>Optional</sup> <a name="firewallEndpoints" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.firewallEndpoints"></a>

```typescript
public readonly firewallEndpoints: IFirewallEndpoints[];
```

- *Type:* raindancers-cdk.cloudNetwork.IFirewallEndpoints[]

Network Firewall endpoints for traffic inspection.

---

##### `internetGateway`<sup>Optional</sup> <a name="internetGateway" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.internetGateway"></a>

```typescript
public readonly internetGateway: CfnInternetGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnInternetGateway

---

##### `internetGatewayRoutes`<sup>Optional</sup> <a name="internetGatewayRoutes" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.internetGatewayRoutes"></a>

```typescript
public readonly internetGatewayRoutes: ISubnetGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup[]

Subnet groups that should route via Internet Gateway.

---

##### `nwfirewall`<sup>Optional</sup> <a name="nwfirewall" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.nwfirewall"></a>

```typescript
public readonly nwfirewall: NetworkFirewall;
```

- *Type:* raindancers-cdk.nwFirewall.NetworkFirewall

Internet Gateway for public subnet routing.

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

Transit Gateway attachment ID for this VPC.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="raindancers-cdk.cloudNetwork.NestedRouteStackProps.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Transit Gateway ID for inter-VPC routing.

---

### NetworkFirewallProps <a name="NetworkFirewallProps" id="raindancers-cdk.nwFirewall.NetworkFirewallProps"></a>

Propertys of a Network Firewall.

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.NetworkFirewallProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const networkFirewallProps: nwFirewall.NetworkFirewallProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewallProps.property.firewallName">firewallName</a></code> | <code>string</code> | the name that will be given to the firewall. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewallProps.property.firewallPolicy">firewallPolicy</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy</code> | the firewalls policy. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewallProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | the subnetGroup where the firewall will be created. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewallProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | the the vpc where the Network firewall is placed. |
| <code><a href="#raindancers-cdk.nwFirewall.NetworkFirewallProps.property.iPStackMode">iPStackMode</a></code> | <code>raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType</code> | Determine how the Firewall stacks will behave. |

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-cdk.nwFirewall.NetworkFirewallProps.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

the name that will be given to the firewall.

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="raindancers-cdk.nwFirewall.NetworkFirewallProps.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: CfnFirewallPolicy;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

the firewalls policy.

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.nwFirewall.NetworkFirewallProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

the subnetGroup where the firewall will be created.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.nwFirewall.NetworkFirewallProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

the the vpc where the Network firewall is placed.

---

##### `iPStackMode`<sup>Optional</sup> <a name="iPStackMode" id="raindancers-cdk.nwFirewall.NetworkFirewallProps.property.iPStackMode"></a>

```typescript
public readonly iPStackMode: FirewallSubnetMappingIPAddressType;
```

- *Type:* raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType

Determine how the Firewall stacks will behave.

---

### OpenAPIProxyProps <a name="OpenAPIProxyProps" id="raindancers-cdk.agentCore.OpenAPIProxyProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.agentCore.OpenAPIProxyProps.Initializer"></a>

```typescript
import { agentCore } from 'raindancers-cdk'

const openAPIProxyProps: agentCore.OpenAPIProxyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxyProps.property.pathToOpenApiSpec">pathToOpenApiSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxyProps.property.proxyFunctionName">proxyFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.OpenAPIProxyProps.property.authHeaderOveride">authHeaderOveride</a></code> | <code>string</code> | *No description.* |

---

##### `pathToOpenApiSpec`<sup>Required</sup> <a name="pathToOpenApiSpec" id="raindancers-cdk.agentCore.OpenAPIProxyProps.property.pathToOpenApiSpec"></a>

```typescript
public readonly pathToOpenApiSpec: string;
```

- *Type:* string

---

##### `proxyFunctionName`<sup>Required</sup> <a name="proxyFunctionName" id="raindancers-cdk.agentCore.OpenAPIProxyProps.property.proxyFunctionName"></a>

```typescript
public readonly proxyFunctionName: string;
```

- *Type:* string

---

##### `authHeaderOveride`<sup>Optional</sup> <a name="authHeaderOveride" id="raindancers-cdk.agentCore.OpenAPIProxyProps.property.authHeaderOveride"></a>

```typescript
public readonly authHeaderOveride: string;
```

- *Type:* string

---

### OrganizationalUnitAttributes <a name="OrganizationalUnitAttributes" id="raindancers-cdk.organizations.OrganizationalUnitAttributes"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.organizations.OrganizationalUnitAttributes.Initializer"></a>

```typescript
import { organizations } from 'raindancers-cdk'

const organizationalUnitAttributes: organizations.OrganizationalUnitAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitAttributes.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitAttributes.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitAttributes.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.organizations.OrganizationalUnitAttributes.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.organizations.OrganizationalUnitAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="raindancers-cdk.organizations.OrganizationalUnitAttributes.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

### OrganizationalUnitProps <a name="OrganizationalUnitProps" id="raindancers-cdk.organizations.OrganizationalUnitProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.organizations.OrganizationalUnitProps.Initializer"></a>

```typescript
import { organizations } from 'raindancers-cdk'

const organizationalUnitProps: organizations.OrganizationalUnitProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.OrganizationalUnitProps.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.organizations.OrganizationalUnitProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="raindancers-cdk.organizations.OrganizationalUnitProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="raindancers-cdk.organizations.OrganizationalUnitProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="raindancers-cdk.organizations.OrganizationalUnitProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.organizations.OrganizationalUnitProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="raindancers-cdk.organizations.OrganizationalUnitProps.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

### OutboundForwardingRule <a name="OutboundForwardingRule" id="raindancers-cdk.dns.OutboundForwardingRule"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.OutboundForwardingRule.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const outboundForwardingRule: dns.OutboundForwardingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.OutboundForwardingRule.property.domain">domain</a></code> | <code>string</code> | domain to forward. |
| <code><a href="#raindancers-cdk.dns.OutboundForwardingRule.property.forwardTo">forwardTo</a></code> | <code>string[]</code> | array of ip address's to forward request to. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="raindancers-cdk.dns.OutboundForwardingRule.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

domain to forward.

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="raindancers-cdk.dns.OutboundForwardingRule.property.forwardTo"></a>

```typescript
public readonly forwardTo: string[];
```

- *Type:* string[]

array of ip address's to forward request to.

---

### PermissionBoundary <a name="PermissionBoundary" id="raindancers-cdk.sso.PermissionBoundary"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.PermissionBoundary.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const permissionBoundary: sso.PermissionBoundary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionBoundary.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty</code> | Specifies the name and path of a customer managed policy. |
| <code><a href="#raindancers-cdk.sso.PermissionBoundary.property.managedPolicyArn">managedPolicyArn</a></code> | <code>string</code> | The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary. |

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="raindancers-cdk.sso.PermissionBoundary.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: IResolvable | CustomerManagedPolicyReferenceProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty

Specifies the name and path of a customer managed policy.

You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference)

---

##### `managedPolicyArn`<sup>Optional</sup> <a name="managedPolicyArn" id="raindancers-cdk.sso.PermissionBoundary.property.managedPolicyArn"></a>

```typescript
public readonly managedPolicyArn: string;
```

- *Type:* string

The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn)

---

### PermissionSetAttributes <a name="PermissionSetAttributes" id="raindancers-cdk.sso.PermissionSetAttributes"></a>

Attributes for a permission set.

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.PermissionSetAttributes.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const permissionSetAttributes: sso.PermissionSetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionSetAttributes.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#raindancers-cdk.sso.PermissionSetAttributes.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance ARN of the permission set. |

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-cdk.sso.PermissionSetAttributes.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

Such as
`arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-cdk.sso.PermissionSetAttributes.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance ARN of the permission set.

---

### PermissionSetProps <a name="PermissionSetProps" id="raindancers-cdk.sso.PermissionSetProps"></a>

The properties of a new permission set.

#### Initializer <a name="Initializer" id="raindancers-cdk.sso.PermissionSetProps.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

const permissionSetProps: sso.PermissionSetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.name">name</a></code> | <code>string</code> | The name of the permission set. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The ARN of the SSO instance under which the operation will be executed. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.awsManagedPolicies">awsManagedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | The AWS managed policies to attach to the `PermissionSet`. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code>raindancers-cdk.sso.CustomerManagedPolicyReference[]</code> | Specifies the names and paths of a customer managed policy. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.description">description</a></code> | <code>string</code> | The description of the `PermissionSet`. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.inlinePolicy">inlinePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The IAM inline policy that is attached to the permission set. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>raindancers-cdk.sso.PermissionBoundary</code> | Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.relayStateType">relayStateType</a></code> | <code>string</code> | Used to redirect users within the application during the federation authentication process. |
| <code><a href="#raindancers-cdk.sso.PermissionSetProps.property.sessionDuration">sessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The length of time that the application user sessions are valid for. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.sso.PermissionSetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the permission set.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-cdk.sso.PermissionSetProps.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The ARN of the SSO instance under which the operation will be executed.

---

##### `awsManagedPolicies`<sup>Optional</sup> <a name="awsManagedPolicies" id="raindancers-cdk.sso.PermissionSetProps.property.awsManagedPolicies"></a>

```typescript
public readonly awsManagedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No AWS managed policies

The AWS managed policies to attach to the `PermissionSet`.

---

##### `customerManagedPolicyReferences`<sup>Optional</sup> <a name="customerManagedPolicyReferences" id="raindancers-cdk.sso.PermissionSetProps.property.customerManagedPolicyReferences"></a>

```typescript
public readonly customerManagedPolicyReferences: CustomerManagedPolicyReference[];
```

- *Type:* raindancers-cdk.sso.CustomerManagedPolicyReference[]
- *Default:* No customer managed policies

Specifies the names and paths of a customer managed policy.

You must have an IAM policy that matches the name and path in each
AWS account where you want to deploy your permission set.

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.sso.PermissionSetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

The description of the `PermissionSet`.

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="raindancers-cdk.sso.PermissionSetProps.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No inline policy

The IAM inline policy that is attached to the permission set.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="raindancers-cdk.sso.PermissionSetProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionBoundary;
```

- *Type:* raindancers-cdk.sso.PermissionBoundary
- *Default:* No permissions boundary

Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary.

Specify either
customerManagedPolicyReference to use the name and path of a customer
managed policy, or managedPolicy to use the ARN of an AWS managed
policy.

A permissions boundary represents the maximum permissions that any
policy can grant your role. For more information, see Permissions boundaries
for IAM entities in the AWS Identity and Access Management User Guide.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `relayStateType`<sup>Optional</sup> <a name="relayStateType" id="raindancers-cdk.sso.PermissionSetProps.property.relayStateType"></a>

```typescript
public readonly relayStateType: string;
```

- *Type:* string
- *Default:* No redirection

Used to redirect users within the application during the federation authentication process.

By default, when a user signs into the AWS access portal, chooses an account,
and then chooses the role that AWS creates from the assigned permission set,
IAM Identity Center redirects the user’s browser to the AWS Management Console.

You can change this behavior by setting the relay state to a different console
URL. Setting the relay state enables you to provide the user with quick access
to the console that is most appropriate for their role. For example, you can
set the relay state to the Amazon EC2 console URL (https://console.aws.amazon.com/ec2/)
to redirect the user to that console when they choose the Amazon EC2
administrator role.

> [https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html](https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html)

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="raindancers-cdk.sso.PermissionSetProps.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

The length of time that the application user sessions are valid for.

---

### PrefixCidr <a name="PrefixCidr" id="raindancers-cdk.enterprisevpc.PrefixCidr"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.PrefixCidr.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const prefixCidr: enterprisevpc.PrefixCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.PrefixCidr.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-cdk.enterprisevpc.PrefixCidr.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

### R53ResolverendpointsProps <a name="R53ResolverendpointsProps" id="raindancers-cdk.dns.R53ResolverendpointsProps"></a>

Properties to for creating inbound resolvers.

#### Initializer <a name="Initializer" id="raindancers-cdk.dns.R53ResolverendpointsProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-cdk'

const r53ResolverendpointsProps: dns.R53ResolverendpointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.dns.R53ResolverendpointsProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | the subnetgroup to place the resolvers in. |
| <code><a href="#raindancers-cdk.dns.R53ResolverendpointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | the vpc that the resolvers will be placed in. |
| <code><a href="#raindancers-cdk.dns.R53ResolverendpointsProps.property.outboundForwardingRules">outboundForwardingRules</a></code> | <code>raindancers-cdk.dns.OutboundForwardingRule[]</code> | An array of Internal domains that can be centrally resolved in this VPC. |
| <code><a href="#raindancers-cdk.dns.R53ResolverendpointsProps.property.tagValue">tagValue</a></code> | <code>string</code> | Value for Sharing. |

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.dns.R53ResolverendpointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

the subnetgroup to place the resolvers in.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.dns.R53ResolverendpointsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

the vpc that the resolvers will be placed in.

---

##### `outboundForwardingRules`<sup>Optional</sup> <a name="outboundForwardingRules" id="raindancers-cdk.dns.R53ResolverendpointsProps.property.outboundForwardingRules"></a>

```typescript
public readonly outboundForwardingRules: OutboundForwardingRule[];
```

- *Type:* raindancers-cdk.dns.OutboundForwardingRule[]

An array of Internal domains that can be centrally resolved in this VPC.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="raindancers-cdk.dns.R53ResolverendpointsProps.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Value for Sharing.

---

### RemailerProps <a name="RemailerProps" id="raindancers-cdk.remailer.RemailerProps"></a>

Propertys for Remailer.

#### Initializer <a name="Initializer" id="raindancers-cdk.remailer.RemailerProps.Initializer"></a>

```typescript
import { remailer } from 'raindancers-cdk'

const remailerProps: remailer.RemailerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.forwardingRules">forwardingRules</a></code> | <code>raindancers-cdk.remailer.ForwardingRule[]</code> | Forwarding rules for the zone. |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.sender">sender</a></code> | <code>string</code> | What is the address of the remailer. |
| <code><a href="#raindancers-cdk.remailer.RemailerProps.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IPublicHostedZone</code> | the Zone where the Remailer's DNS records are. |

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-cdk.remailer.RemailerProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="raindancers-cdk.remailer.RemailerProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="raindancers-cdk.remailer.RemailerProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="raindancers-cdk.remailer.RemailerProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="raindancers-cdk.remailer.RemailerProps.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: ForwardingRule[];
```

- *Type:* raindancers-cdk.remailer.ForwardingRule[]

Forwarding rules for the zone.

---

##### `sender`<sup>Required</sup> <a name="sender" id="raindancers-cdk.remailer.RemailerProps.property.sender"></a>

```typescript
public readonly sender: string;
```

- *Type:* string

What is the address of the remailer.

---

##### `zone`<sup>Required</sup> <a name="zone" id="raindancers-cdk.remailer.RemailerProps.property.zone"></a>

```typescript
public readonly zone: IPublicHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IPublicHostedZone

the Zone where the Remailer's DNS records are.

---

### ResolveSubnetGroupNameProps <a name="ResolveSubnetGroupNameProps" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const resolveSubnetGroupNameProps: enterprisevpc.ResolveSubnetGroupNameProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.property.azcount">azcount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `azcount`<sup>Required</sup> <a name="azcount" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.property.azcount"></a>

```typescript
public readonly azcount: number;
```

- *Type:* number

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.ResolveSubnetGroupNameProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

### Route <a name="Route" id="raindancers-cdk.cloudNetwork.Route"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.Route.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const route: cloudNetwork.Route = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.nextHop">nextHop</a></code> | <code>raindancers-cdk.cloudNetwork.NextHop</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.cloudwanName">cloudwanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.destCidr">destCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.destSubnetGroup">destSubnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.ec2Instance">ec2Instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.endpointTag">endpointTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Route.property.networkFirewallArn">networkFirewallArn</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.cloudNetwork.Route.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="raindancers-cdk.cloudNetwork.Route.property.nextHop"></a>

```typescript
public readonly nextHop: NextHop;
```

- *Type:* raindancers-cdk.cloudNetwork.NextHop

---

##### `cloudwanName`<sup>Optional</sup> <a name="cloudwanName" id="raindancers-cdk.cloudNetwork.Route.property.cloudwanName"></a>

```typescript
public readonly cloudwanName: string;
```

- *Type:* string

---

##### `destCidr`<sup>Optional</sup> <a name="destCidr" id="raindancers-cdk.cloudNetwork.Route.property.destCidr"></a>

```typescript
public readonly destCidr: string;
```

- *Type:* string

---

##### `destSubnetGroup`<sup>Optional</sup> <a name="destSubnetGroup" id="raindancers-cdk.cloudNetwork.Route.property.destSubnetGroup"></a>

```typescript
public readonly destSubnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

##### `ec2Instance`<sup>Optional</sup> <a name="ec2Instance" id="raindancers-cdk.cloudNetwork.Route.property.ec2Instance"></a>

```typescript
public readonly ec2Instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `endpointTag`<sup>Optional</sup> <a name="endpointTag" id="raindancers-cdk.cloudNetwork.Route.property.endpointTag"></a>

```typescript
public readonly endpointTag: string;
```

- *Type:* string

---

##### `networkFirewallArn`<sup>Optional</sup> <a name="networkFirewallArn" id="raindancers-cdk.cloudNetwork.Route.property.networkFirewallArn"></a>

```typescript
public readonly networkFirewallArn: string;
```

- *Type:* string

---

### Route <a name="Route" id="raindancers-cdk.enterprisevpc.Route"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.Route.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const route: enterprisevpc.Route = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.Route.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Route.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Route.property.destination">destination</a></code> | <code>raindancers-cdk.enterprisevpc.Destination</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Route.property.ec2Instance">ec2Instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-cdk.enterprisevpc.Route.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.enterprisevpc.Route.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-cdk.enterprisevpc.Route.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* raindancers-cdk.enterprisevpc.Destination

---

##### `ec2Instance`<sup>Optional</sup> <a name="ec2Instance" id="raindancers-cdk.enterprisevpc.Route.property.ec2Instance"></a>

```typescript
public readonly ec2Instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

### RouterGroup <a name="RouterGroup" id="raindancers-cdk.cloudNetwork.RouterGroup"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.RouterGroup.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const routerGroup: cloudNetwork.RouterGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterGroup.property.routes">routes</a></code> | <code>raindancers-cdk.cloudNetwork.Route[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterGroup.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | *No description.* |

---

##### `routes`<sup>Required</sup> <a name="routes" id="raindancers-cdk.cloudNetwork.RouterGroup.property.routes"></a>

```typescript
public readonly routes: Route[];
```

- *Type:* raindancers-cdk.cloudNetwork.Route[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.cloudNetwork.RouterGroup.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

### RouterGroup <a name="RouterGroup" id="raindancers-cdk.enterprisevpc.RouterGroup"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.RouterGroup.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const routerGroup: enterprisevpc.RouterGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterGroup.property.routes">routes</a></code> | <code>raindancers-cdk.enterprisevpc.Route[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterGroup.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |

---

##### `routes`<sup>Required</sup> <a name="routes" id="raindancers-cdk.enterprisevpc.RouterGroup.property.routes"></a>

```typescript
public readonly routes: Route[];
```

- *Type:* raindancers-cdk.enterprisevpc.Route[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-cdk.enterprisevpc.RouterGroup.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

### RouterProps <a name="RouterProps" id="raindancers-cdk.cloudNetwork.RouterProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.RouterProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const routerProps: cloudNetwork.RouterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.subnetRoutes">subnetRoutes</a></code> | <code>raindancers-cdk.cloudNetwork.RouterGroup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.firewall">firewall</a></code> | <code>raindancers-cdk.nwFirewall.NetworkFirewall</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.firewallEndPoints">firewallEndPoints</a></code> | <code>raindancers-cdk.cloudNetwork.IFirewallEndpoints[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.internetGateway">internetGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnInternetGateway</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.internetGatewayRoutes">internetGatewayRoutes</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterProps.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `subnetRoutes`<sup>Required</sup> <a name="subnetRoutes" id="raindancers-cdk.cloudNetwork.RouterProps.property.subnetRoutes"></a>

```typescript
public readonly subnetRoutes: RouterGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.RouterGroup[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.RouterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="raindancers-cdk.cloudNetwork.RouterProps.property.firewall"></a>

```typescript
public readonly firewall: NetworkFirewall;
```

- *Type:* raindancers-cdk.nwFirewall.NetworkFirewall

---

##### `firewallEndPoints`<sup>Optional</sup> <a name="firewallEndPoints" id="raindancers-cdk.cloudNetwork.RouterProps.property.firewallEndPoints"></a>

```typescript
public readonly firewallEndPoints: IFirewallEndpoints[];
```

- *Type:* raindancers-cdk.cloudNetwork.IFirewallEndpoints[]

---

##### `internetGateway`<sup>Optional</sup> <a name="internetGateway" id="raindancers-cdk.cloudNetwork.RouterProps.property.internetGateway"></a>

```typescript
public readonly internetGateway: CfnInternetGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnInternetGateway

---

##### `internetGatewayRoutes`<sup>Optional</sup> <a name="internetGatewayRoutes" id="raindancers-cdk.cloudNetwork.RouterProps.property.internetGatewayRoutes"></a>

```typescript
public readonly internetGatewayRoutes: ISubnetGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup[]

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="raindancers-cdk.cloudNetwork.RouterProps.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="raindancers-cdk.cloudNetwork.RouterProps.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

### RouterProps <a name="RouterProps" id="raindancers-cdk.enterprisevpc.RouterProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.RouterProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const routerProps: enterprisevpc.RouterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.gwlbEndpoints">gwlbEndpoints</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.routerGroups">routerGroups</a></code> | <code>raindancers-cdk.enterprisevpc.RouterGroup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.twWaiterProvider">twWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.vpcAttachmentCR">vpcAttachmentCR</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.cloudWan">cloudWan</a></code> | <code>any</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.firewallEndPoints">firewallEndPoints</a></code> | <code>raindancers-cdk.nwFirewall.IFirewallEndpoints[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouterProps.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-cdk.enterprisevpc.RouterProps.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `gwlbEndpoints`<sup>Required</sup> <a name="gwlbEndpoints" id="raindancers-cdk.enterprisevpc.RouterProps.property.gwlbEndpoints"></a>

```typescript
public readonly gwlbEndpoints: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `routerGroups`<sup>Required</sup> <a name="routerGroups" id="raindancers-cdk.enterprisevpc.RouterProps.property.routerGroups"></a>

```typescript
public readonly routerGroups: RouterGroup[];
```

- *Type:* raindancers-cdk.enterprisevpc.RouterGroup[]

---

##### `twWaiterProvider`<sup>Required</sup> <a name="twWaiterProvider" id="raindancers-cdk.enterprisevpc.RouterProps.property.twWaiterProvider"></a>

```typescript
public readonly twWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.RouterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcAttachmentCR`<sup>Required</sup> <a name="vpcAttachmentCR" id="raindancers-cdk.enterprisevpc.RouterProps.property.vpcAttachmentCR"></a>

```typescript
public readonly vpcAttachmentCR: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `cloudWan`<sup>Optional</sup> <a name="cloudWan" id="raindancers-cdk.enterprisevpc.RouterProps.property.cloudWan"></a>

```typescript
public readonly cloudWan: any;
```

- *Type:* any

---

##### `firewallArn`<sup>Optional</sup> <a name="firewallArn" id="raindancers-cdk.enterprisevpc.RouterProps.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `firewallEndPoints`<sup>Optional</sup> <a name="firewallEndPoints" id="raindancers-cdk.enterprisevpc.RouterProps.property.firewallEndPoints"></a>

```typescript
public readonly firewallEndPoints: IFirewallEndpoints[];
```

- *Type:* raindancers-cdk.nwFirewall.IFirewallEndpoints[]

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="raindancers-cdk.enterprisevpc.RouterProps.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="raindancers-cdk.enterprisevpc.RouterProps.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

### RouteTableMeta <a name="RouteTableMeta" id="raindancers-cdk.enterprisevpc.RouteTableMeta"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.RouteTableMeta.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const routeTableMeta: enterprisevpc.RouteTableMeta = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.RouteTableMeta.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouteTableMeta.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="raindancers-cdk.enterprisevpc.RouteTableMeta.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="raindancers-cdk.enterprisevpc.RouteTableMeta.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

### RouteTableMetaV2 <a name="RouteTableMetaV2" id="raindancers-cdk.cloudNetwork.RouteTableMetaV2"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.RouteTableMetaV2.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const routeTableMetaV2: cloudNetwork.RouteTableMetaV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.az">az</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `az`<sup>Required</sup> <a name="az" id="raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.az"></a>

```typescript
public readonly az: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="raindancers-cdk.cloudNetwork.RouteTableMetaV2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

### RouteTableMetaV2 <a name="RouteTableMetaV2" id="raindancers-cdk.enterprisevpc.RouteTableMetaV2"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.RouteTableMetaV2.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const routeTableMetaV2: enterprisevpc.RouteTableMetaV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.RouteTableMetaV2.property.az">az</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouteTableMetaV2.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.RouteTableMetaV2.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |

---

##### `az`<sup>Required</sup> <a name="az" id="raindancers-cdk.enterprisevpc.RouteTableMetaV2.property.az"></a>

```typescript
public readonly az: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="raindancers-cdk.enterprisevpc.RouteTableMetaV2.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="raindancers-cdk.enterprisevpc.RouteTableMetaV2.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

### Scope <a name="Scope" id="raindancers-cdk.nwFirewall.Scope"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.Scope.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const scope: nwFirewall.Scope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.Scope.property.destinationPorts">destinationPorts</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.PortRangeProperty[]</code> | needs to be a valid port, or a range of ports. |
| <code><a href="#raindancers-cdk.nwFirewall.Scope.property.destinations">destinations</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.AddressProperty[]</code> | A list of cidrs. |
| <code><a href="#raindancers-cdk.nwFirewall.Scope.property.protocols">protocols</a></code> | <code>raindancers-cdk.nwFirewall.Protocols[]</code> | Which protocols, if any, to decrypt for inspection. |
| <code><a href="#raindancers-cdk.nwFirewall.Scope.property.sourcePorts">sourcePorts</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.PortRangeProperty[]</code> | needs to be a valid port, or a range of ports. |
| <code><a href="#raindancers-cdk.nwFirewall.Scope.property.sources">sources</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.AddressProperty[]</code> | A list of Cidrs. |

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="raindancers-cdk.nwFirewall.Scope.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: PortRangeProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.PortRangeProperty[]

needs to be a valid port, or a range of ports.

eg ['443', '8000:8080']

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="raindancers-cdk.nwFirewall.Scope.property.destinations"></a>

```typescript
public readonly destinations: AddressProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.AddressProperty[]

A list of cidrs.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="raindancers-cdk.nwFirewall.Scope.property.protocols"></a>

```typescript
public readonly protocols: Protocols[];
```

- *Type:* raindancers-cdk.nwFirewall.Protocols[]

Which protocols, if any, to decrypt for inspection.

only supports TCP

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="raindancers-cdk.nwFirewall.Scope.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: PortRangeProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.PortRangeProperty[]

needs to be a valid port, or a range of ports.

eg ['443', '8000:8080']

---

##### `sources`<sup>Optional</sup> <a name="sources" id="raindancers-cdk.nwFirewall.Scope.property.sources"></a>

```typescript
public readonly sources: AddressProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnTLSInspectionConfiguration.AddressProperty[]

A list of Cidrs.

---

### SecurityLakeProps <a name="SecurityLakeProps" id="raindancers-cdk.securityLake.SecurityLakeProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.securityLake.SecurityLakeProps.Initializer"></a>

```typescript
import { securityLake } from 'raindancers-cdk'

const securityLakeProps: securityLake.SecurityLakeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.propertyInjectors">propertyInjectors</a></code> | <code>aws-cdk-lib.IPropertyInjector[]</code> | A list of IPropertyInjector attached to this Stack. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that will be applied to the Stack. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeProps.property.lifecycle">lifecycle</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="raindancers-cdk.securityLake.SecurityLakeProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="raindancers-cdk.securityLake.SecurityLakeProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.securityLake.SecurityLakeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="raindancers-cdk.securityLake.SecurityLakeProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="raindancers-cdk.securityLake.SecurityLakeProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="raindancers-cdk.securityLake.SecurityLakeProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `propertyInjectors`<sup>Optional</sup> <a name="propertyInjectors" id="raindancers-cdk.securityLake.SecurityLakeProps.property.propertyInjectors"></a>

```typescript
public readonly propertyInjectors: IPropertyInjector[];
```

- *Type:* aws-cdk-lib.IPropertyInjector[]
- *Default:* no PropertyInjectors

A list of IPropertyInjector attached to this Stack.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="raindancers-cdk.securityLake.SecurityLakeProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="raindancers-cdk.securityLake.SecurityLakeProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="raindancers-cdk.securityLake.SecurityLakeProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="raindancers-cdk.securityLake.SecurityLakeProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Tags that will be applied to the Stack.

These tags are applied to the CloudFormation Stack itself. They will not
appear in the CloudFormation template.

However, at deployment time, CloudFormation will apply these tags to all
resources in the stack that support tagging. You will not be able to exempt
resources from tagging (using the `excludeResourceTypes` property of
`Tags.of(...).add()`) for tags applied in this way.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="raindancers-cdk.securityLake.SecurityLakeProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `key`<sup>Required</sup> <a name="key" id="raindancers-cdk.securityLake.SecurityLakeProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="raindancers-cdk.securityLake.SecurityLakeProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: string;
```

- *Type:* string

---

### ServerCertificateConfigurations <a name="ServerCertificateConfigurations" id="raindancers-cdk.nwFirewall.ServerCertificateConfigurations"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.ServerCertificateConfigurations.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const serverCertificateConfigurations: nwFirewall.ServerCertificateConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.inspectionScopes">inspectionScopes</a></code> | <code>raindancers-cdk.nwFirewall.Scope[]</code> | Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine. |
| <code><a href="#raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.caCertificate">caCertificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | An imported caCertificate for using for egress inspection, Supply at least of of caCertificate or serverCertificateName. |
| <code><a href="#raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.certRevocationActions">certRevocationActions</a></code> | <code>raindancers-cdk.nwFirewall.CheckCertificateActions</code> | What to do with revoked certificates. |
| <code><a href="#raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.serverCertificates">serverCertificates</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate[]</code> | An certificate for ingress inspection, Supply at least of of caCertificate or serverCertificateName. |

---

##### `inspectionScopes`<sup>Required</sup> <a name="inspectionScopes" id="raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.inspectionScopes"></a>

```typescript
public readonly inspectionScopes: Scope[];
```

- *Type:* raindancers-cdk.nwFirewall.Scope[]

Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.caCertificate"></a>

```typescript
public readonly caCertificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

An imported caCertificate for using for egress inspection, Supply at least of of caCertificate or serverCertificateName.

---

##### `certRevocationActions`<sup>Optional</sup> <a name="certRevocationActions" id="raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.certRevocationActions"></a>

```typescript
public readonly certRevocationActions: CheckCertificateActions;
```

- *Type:* raindancers-cdk.nwFirewall.CheckCertificateActions

What to do with revoked certificates.

---

##### `serverCertificates`<sup>Optional</sup> <a name="serverCertificates" id="raindancers-cdk.nwFirewall.ServerCertificateConfigurations.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: ICertificate[];
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate[]

An certificate for ingress inspection, Supply at least of of caCertificate or serverCertificateName.

---

### ServerlessClamscanLoggingProps <a name="ServerlessClamscanLoggingProps" id="raindancers-cdk.clamscan.ServerlessClamscanLoggingProps"></a>

Interface for ServerlessClamscan Virus Definitions S3 Bucket Logging.

#### Initializer <a name="Initializer" id="raindancers-cdk.clamscan.ServerlessClamscanLoggingProps.Initializer"></a>

```typescript
import { clamscan } from 'raindancers-cdk'

const serverlessClamscanLoggingProps: clamscan.ServerlessClamscanLoggingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanLoggingProps.property.logsBucket">logsBucket</a></code> | <code>boolean \| aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs (Default: Creates a new S3 Bucket for access logs). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanLoggingProps.property.logsPrefix">logsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs, option is ignored if logs_bucket is set to false. |

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="raindancers-cdk.clamscan.ServerlessClamscanLoggingProps.property.logsBucket"></a>

```typescript
public readonly logsBucket: boolean | IBucket;
```

- *Type:* boolean | aws-cdk-lib.aws_s3.IBucket

Destination bucket for the server access logs (Default: Creates a new S3 Bucket for access logs).

---

##### `logsPrefix`<sup>Optional</sup> <a name="logsPrefix" id="raindancers-cdk.clamscan.ServerlessClamscanLoggingProps.property.logsPrefix"></a>

```typescript
public readonly logsPrefix: string;
```

- *Type:* string

Optional log file prefix to use for the bucket's access logs, option is ignored if logs_bucket is set to false.

---

### ServerlessClamscanProps <a name="ServerlessClamscanProps" id="raindancers-cdk.clamscan.ServerlessClamscanProps"></a>

Interface for creating a ServerlessClamscan.

#### Initializer <a name="Initializer" id="raindancers-cdk.clamscan.ServerlessClamscanProps.Initializer"></a>

```typescript
import { clamscan } from 'raindancers-cdk'

const serverlessClamscanProps: clamscan.ServerlessClamscanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.acceptResponsibilityForUsingImportedBucket">acceptResponsibilityForUsingImportedBucket</a></code> | <code>boolean</code> | Allows the use of imported buckets. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.buckets">buckets</a></code> | <code>aws-cdk-lib.aws_s3.IBucket[]</code> | An optional list of S3 buckets to configure for ClamAV Virus Scanning; |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.defsBucketAccessLogsConfig">defsBucketAccessLogsConfig</a></code> | <code>raindancers-cdk.clamscan.ServerlessClamscanLoggingProps</code> | Whether or not to enable Access Logging for the Virus Definitions bucket, you can specify an existing bucket and prefix (Default: Creates a new S3 Bucket for access logs). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.efsEncryption">efsEncryption</a></code> | <code>boolean</code> | Whether or not to enable encryption on EFS filesystem (Default: enabled). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.efsPerformanceMode">efsPerformanceMode</a></code> | <code>aws-cdk-lib.aws_efs.PerformanceMode</code> | Set the performance mode of the EFS file system (Default: GENERAL_PURPOSE). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.onError">onError</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The Lambda Destination for files that fail to scan and are marked 'ERROR' or stuck 'IN PROGRESS' due to a Lambda timeout (Default: Creates and publishes to a new SQS queue if unspecified). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.onResult">onResult</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The Lambda Destination for files marked 'CLEAN' or 'INFECTED' based on the ClamAV Virus scan or 'N/A' for scans triggered by S3 folder creation events marked (Default: Creates and publishes to a new Event Bridge Bus if unspecified). |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.raiseSecurityHubAlerts">raiseSecurityHubAlerts</a></code> | <code>boolean</code> | RaiseSecurityHubAlerts?:. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.reservedConcurrency">reservedConcurrency</a></code> | <code>number</code> | Optionally set a reserved concurrency for the virus scanning Lambda. |
| <code><a href="#raindancers-cdk.clamscan.ServerlessClamscanProps.property.scanFunctionMemorySize">scanFunctionMemorySize</a></code> | <code>number</code> | Optionally set the memory allocation for the scan function. |

---

##### `acceptResponsibilityForUsingImportedBucket`<sup>Optional</sup> <a name="acceptResponsibilityForUsingImportedBucket" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.acceptResponsibilityForUsingImportedBucket"></a>

```typescript
public readonly acceptResponsibilityForUsingImportedBucket: boolean;
```

- *Type:* boolean

Allows the use of imported buckets.

When using imported buckets the user is responsible for adding the required policy statement to the bucket policy: `getPolicyStatementForBucket()` can be used to retrieve the policy statement required by the solution.

---

##### `buckets`<sup>Optional</sup> <a name="buckets" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.buckets"></a>

```typescript
public readonly buckets: IBucket[];
```

- *Type:* aws-cdk-lib.aws_s3.IBucket[]

An optional list of S3 buckets to configure for ClamAV Virus Scanning;

buckets can be added later by calling addSourceBucket.

---

##### `defsBucketAccessLogsConfig`<sup>Optional</sup> <a name="defsBucketAccessLogsConfig" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.defsBucketAccessLogsConfig"></a>

```typescript
public readonly defsBucketAccessLogsConfig: ServerlessClamscanLoggingProps;
```

- *Type:* raindancers-cdk.clamscan.ServerlessClamscanLoggingProps

Whether or not to enable Access Logging for the Virus Definitions bucket, you can specify an existing bucket and prefix (Default: Creates a new S3 Bucket for access logs).

---

##### `efsEncryption`<sup>Optional</sup> <a name="efsEncryption" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.efsEncryption"></a>

```typescript
public readonly efsEncryption: boolean;
```

- *Type:* boolean

Whether or not to enable encryption on EFS filesystem (Default: enabled).

---

##### `efsPerformanceMode`<sup>Optional</sup> <a name="efsPerformanceMode" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.efsPerformanceMode"></a>

```typescript
public readonly efsPerformanceMode: PerformanceMode;
```

- *Type:* aws-cdk-lib.aws_efs.PerformanceMode

Set the performance mode of the EFS file system (Default: GENERAL_PURPOSE).

---

##### `onError`<sup>Optional</sup> <a name="onError" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.onError"></a>

```typescript
public readonly onError: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination

The Lambda Destination for files that fail to scan and are marked 'ERROR' or stuck 'IN PROGRESS' due to a Lambda timeout (Default: Creates and publishes to a new SQS queue if unspecified).

---

##### `onResult`<sup>Optional</sup> <a name="onResult" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.onResult"></a>

```typescript
public readonly onResult: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination

The Lambda Destination for files marked 'CLEAN' or 'INFECTED' based on the ClamAV Virus scan or 'N/A' for scans triggered by S3 folder creation events marked (Default: Creates and publishes to a new Event Bridge Bus if unspecified).

---

##### `raiseSecurityHubAlerts`<sup>Optional</sup> <a name="raiseSecurityHubAlerts" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.raiseSecurityHubAlerts"></a>

```typescript
public readonly raiseSecurityHubAlerts: boolean;
```

- *Type:* boolean

RaiseSecurityHubAlerts?:.

---

##### `reservedConcurrency`<sup>Optional</sup> <a name="reservedConcurrency" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.reservedConcurrency"></a>

```typescript
public readonly reservedConcurrency: number;
```

- *Type:* number

Optionally set a reserved concurrency for the virus scanning Lambda.

> [https://docs.aws.amazon.com/lambda/latest/operatorguide/reserved-concurrency.html](https://docs.aws.amazon.com/lambda/latest/operatorguide/reserved-concurrency.html)

---

##### `scanFunctionMemorySize`<sup>Optional</sup> <a name="scanFunctionMemorySize" id="raindancers-cdk.clamscan.ServerlessClamscanProps.property.scanFunctionMemorySize"></a>

```typescript
public readonly scanFunctionMemorySize: number;
```

- *Type:* number

Optionally set the memory allocation for the scan function.

Note that low memory allocations may cause errors. (Default: 10240).

> [https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html](https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html)

---

### ShareSubnetGroupProps <a name="ShareSubnetGroupProps" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const shareSubnetGroupProps: cloudNetwork.ShareSubnetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.cdkTagResourcesInSharedToAccountRoleName">cdkTagResourcesInSharedToAccountRoleName</a></code> | <code>string</code> | If Defined the method will attempt to use this role to Tag the shared resource in the remote account with cdkTags, so the normal ec2.Vpc methods can be used, such as subnetSelection. |
| <code><a href="#raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.subnetGroups">subnetGroups</a></code> | <code>raindancers-cdk.cloudNetwork.ISubnetGroup[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `cdkTagResourcesInSharedToAccountRoleName`<sup>Optional</sup> <a name="cdkTagResourcesInSharedToAccountRoleName" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.cdkTagResourcesInSharedToAccountRoleName"></a>

```typescript
public readonly cdkTagResourcesInSharedToAccountRoleName: string;
```

- *Type:* string

If Defined the method will attempt to use this role to Tag the shared resource in the remote account with cdkTags, so the normal ec2.Vpc methods can be used, such as subnetSelection.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `subnetGroup`<sup>Optional</sup> <a name="subnetGroup" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

---

##### `subnetGroups`<sup>Optional</sup> <a name="subnetGroups" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: ISubnetGroup[];
```

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup[]

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.ShareSubnetGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### ShareSubnetGroupProps <a name="ShareSubnetGroupProps" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const shareSubnetGroupProps: enterprisevpc.ShareSubnetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.cdkTagResourcesInSharedToAccountRoleName">cdkTagResourcesInSharedToAccountRoleName</a></code> | <code>string</code> | If Defined the method will attempt to use this role to Tag the shared resource in the remote account with cdkTags, so the normal ec2.Vpc methods can be used, such as subnetSelection. |
| <code><a href="#raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.subnetGroups">subnetGroups</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup[]</code> | *No description.* |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `cdkTagResourcesInSharedToAccountRoleName`<sup>Optional</sup> <a name="cdkTagResourcesInSharedToAccountRoleName" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.cdkTagResourcesInSharedToAccountRoleName"></a>

```typescript
public readonly cdkTagResourcesInSharedToAccountRoleName: string;
```

- *Type:* string

If Defined the method will attempt to use this role to Tag the shared resource in the remote account with cdkTags, so the normal ec2.Vpc methods can be used, such as subnetSelection.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `subnetGroup`<sup>Optional</sup> <a name="subnetGroup" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `subnetGroups`<sup>Optional</sup> <a name="subnetGroups" id="raindancers-cdk.enterprisevpc.ShareSubnetGroupProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: SubnetGroup[];
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup[]

---

### StatefulRuleProps <a name="StatefulRuleProps" id="raindancers-cdk.nwFirewall.StatefulRuleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.StatefulRuleProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const statefulRuleProps: nwFirewall.StatefulRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.rulesSourceList">rulesSourceList</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.RulesSourceListProperty</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.ruleVariables">ruleVariables</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.RuleVariablesProperty</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.statefuleRules">statefuleRules</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatefulRuleProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulRuleProps.property.suricataRule">suricataRule</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `priority`<sup>Optional</sup> <a name="priority" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rulesSourceList`<sup>Optional</sup> <a name="rulesSourceList" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.rulesSourceList"></a>

```typescript
public readonly rulesSourceList: RulesSourceListProperty;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.RulesSourceListProperty

---

##### `ruleVariables`<sup>Optional</sup> <a name="ruleVariables" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.ruleVariables"></a>

```typescript
public readonly ruleVariables: RuleVariablesProperty;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.RuleVariablesProperty

---

##### `statefuleRules`<sup>Optional</sup> <a name="statefuleRules" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.statefuleRules"></a>

```typescript
public readonly statefuleRules: StatefulRuleProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatefulRuleProperty[]

---

##### `suricataRule`<sup>Optional</sup> <a name="suricataRule" id="raindancers-cdk.nwFirewall.StatefulRuleProps.property.suricataRule"></a>

```typescript
public readonly suricataRule: string;
```

- *Type:* string

---

### StatelessRuleProps <a name="StatelessRuleProps" id="raindancers-cdk.nwFirewall.StatelessRuleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.StatelessRuleProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const statelessRuleProps: nwFirewall.StatelessRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.actions">actions</a></code> | <code>raindancers-cdk.nwFirewall.StatelessActions[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.destinationPorts">destinationPorts</a></code> | <code>string \| number[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.destinations">destinations</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.protocols">protocols</a></code> | <code>raindancers-cdk.nwFirewall.Protocol[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.sourcePorts">sourcePorts</a></code> | <code>string \| number[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.sources">sources</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRuleProps.property.tcpFlags">tcpFlags</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.TCPFlagFieldProperty[]</code> | *No description.* |

---

##### `actions`<sup>Required</sup> <a name="actions" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.actions"></a>

```typescript
public readonly actions: StatelessActions[];
```

- *Type:* raindancers-cdk.nwFirewall.StatelessActions[]

---

##### `priority`<sup>Required</sup> <a name="priority" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string | number[];
```

- *Type:* string | number[]

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.destinations"></a>

```typescript
public readonly destinations: AddressProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.protocols"></a>

```typescript
public readonly protocols: Protocol[];
```

- *Type:* raindancers-cdk.nwFirewall.Protocol[]

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string | number[];
```

- *Type:* string | number[]

---

##### `sources`<sup>Optional</sup> <a name="sources" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.sources"></a>

```typescript
public readonly sources: AddressProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]

---

##### `tcpFlags`<sup>Optional</sup> <a name="tcpFlags" id="raindancers-cdk.nwFirewall.StatelessRuleProps.property.tcpFlags"></a>

```typescript
public readonly tcpFlags: TCPFlagFieldProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.TCPFlagFieldProperty[]

---

### StaticSiteProps <a name="StaticSiteProps" id="raindancers-cdk.cloudfront.StaticSiteProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudfront.StaticSiteProps.Initializer"></a>

```typescript
import { cloudfront } from 'raindancers-cdk'

const staticSiteProps: cloudfront.StaticSiteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudfront.StaticSiteProps.property.delegationRole">delegationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudfront.StaticSiteProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudfront.StaticSiteProps.property.parentZone">parentZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudfront.StaticSiteProps.property.sitePath">sitePath</a></code> | <code>string</code> | *No description.* |

---

##### `delegationRole`<sup>Required</sup> <a name="delegationRole" id="raindancers-cdk.cloudfront.StaticSiteProps.property.delegationRole"></a>

```typescript
public readonly delegationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="raindancers-cdk.cloudfront.StaticSiteProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `parentZone`<sup>Required</sup> <a name="parentZone" id="raindancers-cdk.cloudfront.StaticSiteProps.property.parentZone"></a>

```typescript
public readonly parentZone: string;
```

- *Type:* string

---

##### `sitePath`<sup>Required</sup> <a name="sitePath" id="raindancers-cdk.cloudfront.StaticSiteProps.property.sitePath"></a>

```typescript
public readonly sitePath: string;
```

- *Type:* string

---

### SubnetAndRoutingTable <a name="SubnetAndRoutingTable" id="raindancers-cdk.cloudNetwork.SubnetAndRoutingTable"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

const subnetAndRoutingTable: cloudNetwork.SubnetAndRoutingTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.cfnSubnet">cfnSubnet</a></code> | <code>aws-cdk-lib.aws_ec2.CfnSubnet</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.routeTable">routeTable</a></code> | <code>aws-cdk-lib.aws_ec2.CfnRouteTable</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.subnet">subnet</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | *No description.* |

---

##### `cfnSubnet`<sup>Required</sup> <a name="cfnSubnet" id="raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.cfnSubnet"></a>

```typescript
public readonly cfnSubnet: CfnSubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnSubnet

---

##### `routeTable`<sup>Required</sup> <a name="routeTable" id="raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.routeTable"></a>

```typescript
public readonly routeTable: CfnRouteTable;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnRouteTable

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.subnet"></a>

```typescript
public readonly subnet: ISubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="raindancers-cdk.cloudNetwork.SubnetAndRoutingTable.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

---

### SubNetRouteProps <a name="SubNetRouteProps" id="raindancers-cdk.enterprisevpc.SubNetRouteProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.SubNetRouteProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const subNetRouteProps: enterprisevpc.SubNetRouteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.SubNetRouteProps.property.destination">destination</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.SubNetRouteProps.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.SubNetRouteProps.property.source">source</a></code> | <code>raindancers-cdk.enterprisevpc.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.SubNetRouteProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-cdk.enterprisevpc.SubNetRouteProps.property.destination"></a>

```typescript
public readonly destination: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="raindancers-cdk.enterprisevpc.SubNetRouteProps.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="raindancers-cdk.enterprisevpc.SubNetRouteProps.property.source"></a>

```typescript
public readonly source: SubnetGroup;
```

- *Type:* raindancers-cdk.enterprisevpc.SubnetGroup

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.enterprisevpc.SubNetRouteProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### TagFilter <a name="TagFilter" id="raindancers-cdk.nwFirewall.TagFilter"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.TagFilter.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const tagFilter: nwFirewall.TagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TagFilter.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TagFilter.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="raindancers-cdk.nwFirewall.TagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="raindancers-cdk.nwFirewall.TagFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

### TagVpcRoleProps <a name="TagVpcRoleProps" id="raindancers-cdk.enterprisevpc.TagVpcRoleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.enterprisevpc.TagVpcRoleProps.Initializer"></a>

```typescript
import { enterprisevpc } from 'raindancers-cdk'

const tagVpcRoleProps: enterprisevpc.TagVpcRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRoleProps.property.assumedby">assumedby</a></code> | <code>string</code> | Account which owns Resource. |
| <code><a href="#raindancers-cdk.enterprisevpc.TagVpcRoleProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `assumedby`<sup>Required</sup> <a name="assumedby" id="raindancers-cdk.enterprisevpc.TagVpcRoleProps.property.assumedby"></a>

```typescript
public readonly assumedby: string;
```

- *Type:* string

Account which owns Resource.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="raindancers-cdk.enterprisevpc.TagVpcRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* tagSharedResources

---

### TargetProps <a name="TargetProps" id="raindancers-cdk.eventalerts.TargetProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.eventalerts.TargetProps.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

const targetProps: eventalerts.TargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.TargetProps.property.eventbus">eventbus</a></code> | <code>aws-cdk-lib.aws_events.EventBus[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.TargetProps.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.Function[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.eventalerts.TargetProps.property.topics">topics</a></code> | <code>aws-cdk-lib.aws_sns.Topic[]</code> | *No description.* |

---

##### `eventbus`<sup>Optional</sup> <a name="eventbus" id="raindancers-cdk.eventalerts.TargetProps.property.eventbus"></a>

```typescript
public readonly eventbus: EventBus[];
```

- *Type:* aws-cdk-lib.aws_events.EventBus[]

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="raindancers-cdk.eventalerts.TargetProps.property.lambda"></a>

```typescript
public readonly lambda: Function[];
```

- *Type:* aws-cdk-lib.aws_lambda.Function[]

---

##### `topics`<sup>Optional</sup> <a name="topics" id="raindancers-cdk.eventalerts.TargetProps.property.topics"></a>

```typescript
public readonly topics: Topic[];
```

- *Type:* aws-cdk-lib.aws_sns.Topic[]

---

### Template <a name="Template" id="raindancers-cdk.orgTools.Template"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.orgTools.Template.Initializer"></a>

```typescript
import { orgTools } from 'raindancers-cdk'

const template: orgTools.Template = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.Template.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.Template.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |

---

##### `regions`<sup>Required</sup> <a name="regions" id="raindancers-cdk.orgTools.Template.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="raindancers-cdk.orgTools.Template.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

### TLSInspectionConfigurationProps <a name="TLSInspectionConfigurationProps" id="raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

const tLSInspectionConfigurationProps: nwFirewall.TLSInspectionConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.property.serverCertificateConfigurations">serverCertificateConfigurations</a></code> | <code>raindancers-cdk.nwFirewall.ServerCertificateConfigurations[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serverCertificateConfigurations`<sup>Required</sup> <a name="serverCertificateConfigurations" id="raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.property.serverCertificateConfigurations"></a>

```typescript
public readonly serverCertificateConfigurations: ServerCertificateConfigurations[];
```

- *Type:* raindancers-cdk.nwFirewall.ServerCertificateConfigurations[]

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.nwFirewall.TLSInspectionConfigurationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### Transistion <a name="Transistion" id="raindancers-cdk.securityLake.Transistion"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.securityLake.Transistion.Initializer"></a>

```typescript
import { securityLake } from 'raindancers-cdk'

const transistion: securityLake.Transistion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.securityLake.Transistion.property.class">class</a></code> | <code>raindancers-cdk.securityLake.SecurityLakeStorageClass</code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.Transistion.property.period">period</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `class`<sup>Required</sup> <a name="class" id="raindancers-cdk.securityLake.Transistion.property.class"></a>

```typescript
public readonly class: SecurityLakeStorageClass;
```

- *Type:* raindancers-cdk.securityLake.SecurityLakeStorageClass

---

##### `period`<sup>Required</sup> <a name="period" id="raindancers-cdk.securityLake.Transistion.property.period"></a>

```typescript
public readonly period: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### TransitGatewayAttachmentOptions <a name="TransitGatewayAttachmentOptions" id="raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.Initializer"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

const transitGatewayAttachmentOptions: transitGateway.TransitGatewayAttachmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.applianceModeSupport">applianceModeSupport</a></code> | <code>raindancers-cdk.transitGateway.ApplianceModeSupport</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.dnsSupport">dnsSupport</a></code> | <code>raindancers-cdk.transitGateway.DnsSupport</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.ipv6Support">ipv6Support</a></code> | <code>raindancers-cdk.transitGateway.Ipv6Support</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>raindancers-cdk.transitGateway.SecurityGroupReferencingSupport</code> | *No description.* |

---

##### `applianceModeSupport`<sup>Optional</sup> <a name="applianceModeSupport" id="raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: ApplianceModeSupport;
```

- *Type:* raindancers-cdk.transitGateway.ApplianceModeSupport

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: DnsSupport;
```

- *Type:* raindancers-cdk.transitGateway.DnsSupport

---

##### `ipv6Support`<sup>Optional</sup> <a name="ipv6Support" id="raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: Ipv6Support;
```

- *Type:* raindancers-cdk.transitGateway.Ipv6Support

---

##### `securityGroupReferencingSupport`<sup>Optional</sup> <a name="securityGroupReferencingSupport" id="raindancers-cdk.transitGateway.TransitGatewayAttachmentOptions.property.securityGroupReferencingSupport"></a>

```typescript
public readonly securityGroupReferencingSupport: SecurityGroupReferencingSupport;
```

- *Type:* raindancers-cdk.transitGateway.SecurityGroupReferencingSupport

---

### TransitGatewayProps <a name="TransitGatewayProps" id="raindancers-cdk.transitGateway.TransitGatewayProps"></a>

Transit Gateway Properties TODO: Add all the properties, you think you need.. Document it properly, with defaults  What properties do you need if you are going to CREATE a new TG?  What is optional? what is required? https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.CfnTransitGateway.html#construct-props.

#### Initializer <a name="Initializer" id="raindancers-cdk.transitGateway.TransitGatewayProps.Initializer"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

const transitGatewayProps: transitGateway.TransitGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.name">name</a></code> | <code>string</code> | name. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.amazonSideAsn">amazonSideAsn</a></code> | <code>number</code> | A private Autonomous System Number (ASN) for the Amazon side of a BGP session. |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>raindancers-cdk.transitGateway.AutoAcceptSharedAttachments</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>raindancers-cdk.transitGateway.DefaultRouteTableAssociation</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>raindancers-cdk.transitGateway.DefaultRouteTablePropagation</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.dnsSupport">dnsSupport</a></code> | <code>raindancers-cdk.transitGateway.DnsSupport</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.multicastSupport">multicastSupport</a></code> | <code>raindancers-cdk.transitGateway.MulticastSupport</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.propagationDefaultRouteTableId">propagationDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.transitGatewayCidrBlocks">transitGatewayCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayProps.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>raindancers-cdk.transitGateway.VpnEcmpSupport</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name.

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="amazonSideAsn" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: number;
```

- *Type:* number
- *Default:* 64512

A private Autonomous System Number (ASN) for the Amazon side of a BGP session.

The range is 64512 to 65534

---

##### `autoAcceptSharedAttachments`<sup>Optional</sup> <a name="autoAcceptSharedAttachments" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.autoAcceptSharedAttachments"></a>

```typescript
public readonly autoAcceptSharedAttachments: AutoAcceptSharedAttachments;
```

- *Type:* raindancers-cdk.transitGateway.AutoAcceptSharedAttachments
- *Default:* disabled

---

##### `defaultRouteTableAssociation`<sup>Optional</sup> <a name="defaultRouteTableAssociation" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.defaultRouteTableAssociation"></a>

```typescript
public readonly defaultRouteTableAssociation: DefaultRouteTableAssociation;
```

- *Type:* raindancers-cdk.transitGateway.DefaultRouteTableAssociation
- *Default:* enabled

---

##### `defaultRouteTablePropagation`<sup>Optional</sup> <a name="defaultRouteTablePropagation" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.defaultRouteTablePropagation"></a>

```typescript
public readonly defaultRouteTablePropagation: DefaultRouteTablePropagation;
```

- *Type:* raindancers-cdk.transitGateway.DefaultRouteTablePropagation
- *Default:* enabled

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: DnsSupport;
```

- *Type:* raindancers-cdk.transitGateway.DnsSupport
- *Default:* enabled

---

##### `multicastSupport`<sup>Optional</sup> <a name="multicastSupport" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.multicastSupport"></a>

```typescript
public readonly multicastSupport: MulticastSupport;
```

- *Type:* raindancers-cdk.transitGateway.MulticastSupport
- *Default:* enabled

---

##### `propagationDefaultRouteTableId`<sup>Optional</sup> <a name="propagationDefaultRouteTableId" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.propagationDefaultRouteTableId"></a>

```typescript
public readonly propagationDefaultRouteTableId: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

---

##### `transitGatewayCidrBlocks`<sup>Optional</sup> <a name="transitGatewayCidrBlocks" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.transitGatewayCidrBlocks"></a>

```typescript
public readonly transitGatewayCidrBlocks: string[];
```

- *Type:* string[]

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="vpnEcmpSupport" id="raindancers-cdk.transitGateway.TransitGatewayProps.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: VpnEcmpSupport;
```

- *Type:* raindancers-cdk.transitGateway.VpnEcmpSupport
- *Default:* enabled

---

### TransitGatewayRoute <a name="TransitGatewayRoute" id="raindancers-cdk.transitGateway.TransitGatewayRoute"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transitGateway.TransitGatewayRoute.Initializer"></a>

```typescript
import { transitGateway } from 'raindancers-cdk'

const transitGatewayRoute: transitGateway.TransitGatewayRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayRoute.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayRoute.property.blackhole">blackhole</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayRoute.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.TransitGatewayRoute.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="raindancers-cdk.transitGateway.TransitGatewayRoute.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `blackhole`<sup>Optional</sup> <a name="blackhole" id="raindancers-cdk.transitGateway.TransitGatewayRoute.property.blackhole"></a>

```typescript
public readonly blackhole: boolean;
```

- *Type:* boolean

---

##### `id`<sup>Optional</sup> <a name="id" id="raindancers-cdk.transitGateway.TransitGatewayRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="raindancers-cdk.transitGateway.TransitGatewayRoute.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableId`<sup>Optional</sup> <a name="transitGatewayRouteTableId" id="raindancers-cdk.transitGateway.TransitGatewayRoute.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

---

### VolumeProps <a name="VolumeProps" id="raindancers-cdk.imagebuilder.VolumeProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.imagebuilder.VolumeProps.Initializer"></a>

```typescript
import { imagebuilder } from 'raindancers-cdk'

const volumeProps: imagebuilder.VolumeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.imagebuilder.VolumeProps.property.deviceName">deviceName</a></code> | <code>string</code> | Name of the volume. |
| <code><a href="#raindancers-cdk.imagebuilder.VolumeProps.property.ebs">ebs</a></code> | <code>aws-cdk-lib.aws_imagebuilder.CfnImageRecipe.EbsInstanceBlockDeviceSpecificationProperty</code> | EBS Block Store Parameters. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="raindancers-cdk.imagebuilder.VolumeProps.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Name of the volume.

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="raindancers-cdk.imagebuilder.VolumeProps.property.ebs"></a>

```typescript
public readonly ebs: EbsInstanceBlockDeviceSpecificationProperty;
```

- *Type:* aws-cdk-lib.aws_imagebuilder.CfnImageRecipe.EbsInstanceBlockDeviceSpecificationProperty

EBS Block Store Parameters.

---

### ZscalerAppSegmentProps <a name="ZscalerAppSegmentProps" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.Initializer"></a>

```typescript
import { zscaler } from 'raindancers-cdk'

const zscalerAppSegmentProps: zscaler.ZscalerAppSegmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.segmentGroupId">segmentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.serverGroupId">serverGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.zscalerAPIKeySecret">zscalerAPIKeySecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.tcpPorts">tcpPorts</a></code> | <code>string[][]</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.udpPorts">udpPorts</a></code> | <code>string[][]</code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.zscalerAPIKmsKey">zscalerAPIKmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | If the Secret Is being called cross account, then you must also, provide the KmsKey. |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `segmentGroupId`<sup>Required</sup> <a name="segmentGroupId" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.segmentGroupId"></a>

```typescript
public readonly segmentGroupId: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `serverGroupId`<sup>Required</sup> <a name="serverGroupId" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.serverGroupId"></a>

```typescript
public readonly serverGroupId: string;
```

- *Type:* string

---

##### `zscalerAPIKeySecret`<sup>Required</sup> <a name="zscalerAPIKeySecret" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.zscalerAPIKeySecret"></a>

```typescript
public readonly zscalerAPIKeySecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `tcpPorts`<sup>Optional</sup> <a name="tcpPorts" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.tcpPorts"></a>

```typescript
public readonly tcpPorts: string[][];
```

- *Type:* string[][]

---

##### `udpPorts`<sup>Optional</sup> <a name="udpPorts" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.udpPorts"></a>

```typescript
public readonly udpPorts: string[][];
```

- *Type:* string[][]

---

##### `zscalerAPIKmsKey`<sup>Optional</sup> <a name="zscalerAPIKmsKey" id="raindancers-cdk.zscaler.ZscalerAppSegmentProps.property.zscalerAPIKmsKey"></a>

```typescript
public readonly zscalerAPIKmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* none

If the Secret Is being called cross account, then you must also, provide the KmsKey.

---

## Classes <a name="Classes" id="Classes"></a>

### DualStackVpcMethods <a name="DualStackVpcMethods" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods"></a>

In programming, a mixin is a class or module that provides a set of methods that can be included in other classes to add functionality without using inheritance.

Mixins are a way to reuse code and share behavior between classes that may not have a direct hierarchical relationship.
They are particularly useful when multiple classes need to share the same functionality but don't share a common parent class

#### Initializers <a name="Initializers" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.Initializer"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

new cloudNetwork.DualStackVpcMethods()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.addNetworkFirewallEndpoint">addNetworkFirewallEndpoint</a></code> | Adds AWS Network Firewall endpoints to the VPC for traffic inspection. |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.addR53Resolvers">addR53Resolvers</a></code> | Creates Route 53 resolver endpoints for DNS resolution in the specified VPC. |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.addServiceEndpoints">addServiceEndpoints</a></code> | Creates AWS service endpoints for the specified VPC and subnet group. |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.associateSharedResolverRules">associateSharedResolverRules</a></code> | Associates shared Route 53 resolver rules with the VPC for DNS resolution. |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.attachToTransitGateway">attachToTransitGateway</a></code> | Attaches a VPC to an AWS Transit Gateway for inter-VPC connectivity. |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.createFlowLogwithAnalysis">createFlowLogwithAnalysis</a></code> | Creates VPC Flow Logs with optional Athena analysis capabilities. |
| <code><a href="#raindancers-cdk.cloudNetwork.DualStackVpcMethods.shareSubnetGroup">shareSubnetGroup</a></code> | Shares subnet groups with other AWS accounts using AWS Resource Access Manager (RAM). |

---

##### `addNetworkFirewallEndpoint` <a name="addNetworkFirewallEndpoint" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addNetworkFirewallEndpoint"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.addNetworkFirewallEndpoint(scope: Construct, id: string, props: AddNetworkFirewallEndpointProps)
```

Adds AWS Network Firewall endpoints to the VPC for traffic inspection.

This static method creates Network Firewall VPC endpoint associations to enable
traffic inspection and filtering. The firewall endpoints are deployed across
multiple availability zones using subnets from the specified subnet group.

*Example*

```typescript
const endpoints = DualStackVpcMethods.addNetworkFirewallEndpoint(this, 'FirewallEndpoints', {
  vpc: myVpc,
  firewallArn: 'arn:aws:network-firewall:region:account:firewall/my-firewall',
  subnetGroup: firewallSubnetGroup
});

// Use endpoint IDs for route table configuration
endpoints.forEach(endpoint => {
  console.log(`Endpoint ${endpoint.endpointId} in AZ ${endpoint.az}`);
});@remarks[object Object]
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addNetworkFirewallEndpoint.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the firewall endpoints will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addNetworkFirewallEndpoint.parameter.id"></a>

- *Type:* string

Unique identifier for the firewall endpoint associations.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addNetworkFirewallEndpoint.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AddNetworkFirewallEndpointProps

Configuration properties for the firewall endpoints.

---

##### `addR53Resolvers` <a name="addR53Resolvers" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addR53Resolvers"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.addR53Resolvers(scope: Construct, id: string, subnet: ISubnetGroup, vpc: IVpc)
```

Creates Route 53 resolver endpoints for DNS resolution in the specified VPC.

This static method provides a convenient way to add Route 53 resolver endpoints
to enable DNS resolution between on-premises networks and AWS VPC. The resolver
endpoints are deployed in the specified subnet group to handle DNS queries.

*Example*

```typescript
const resolvers = DualStackVpcMethods.addR53Resolvers(
  this,
  'DnsResolvers',
  privateSubnetGroup,
  myVpc
);@remarks[object Object]
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addR53Resolvers.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the resolver endpoints will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addR53Resolvers.parameter.id"></a>

- *Type:* string

Unique identifier for the resolver endpoints construct.

---

###### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addR53Resolvers.parameter.subnet"></a>

- *Type:* raindancers-cdk.cloudNetwork.ISubnetGroup

Subnet group configuration where resolver endpoints will be deployed.

---

###### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addR53Resolvers.parameter.vpc"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where resolver endpoints will be created.

---

##### `addServiceEndpoints` <a name="addServiceEndpoints" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addServiceEndpoints"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.addServiceEndpoints(scope: Construct, id: string, props: AddAwsServiceEndPointsProps)
```

Creates AWS service endpoints for the specified VPC and subnet group.

This static method provides a convenient way to add multiple AWS service endpoints
(both interface and gateway endpoints) to a VPC in a single operation. It validates
the required VPC parameter and delegates to the AwsServiceEndPoints construct.

*Example*

```typescript
const endpoints = DualStackVpcMethods.addServiceEndpoints(this, 'ServiceEndpoints', {
  vpc: myVpc,
  services: [AwsService.S3, AwsService.EC2],
  subnetGroup: privateSubnetGroup,
  s3GatewayInterface: true
});
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addServiceEndpoints.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the endpoints will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addServiceEndpoints.parameter.id"></a>

- *Type:* string

Unique identifier for the endpoint construct.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.addServiceEndpoints.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AddAwsServiceEndPointsProps

Configuration properties for the service endpoints.

---

##### `associateSharedResolverRules` <a name="associateSharedResolverRules" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.associateSharedResolverRules"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.associateSharedResolverRules(scope: Construct, id: string, props: AssociateSharedResolverRulesProps)
```

Associates shared Route 53 resolver rules with the VPC for DNS resolution.

This static method creates associations between the VPC and shared Route 53 resolver
rules for specified domain names. This enables the VPC to resolve DNS queries for
domains that have been configured with shared resolver rules from other accounts.

*Example*

```typescript
DualStackVpcMethods.associateSharedResolverRules(this, 'ResolverRules', {
  vpc: myVpc,
  domainNames: ['example.com', 'internal.corp']
});@remarks[object Object]
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.associateSharedResolverRules.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the resolver rule associations will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.associateSharedResolverRules.parameter.id"></a>

- *Type:* string

Unique identifier for the resolver rule associations.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.associateSharedResolverRules.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AssociateSharedResolverRulesProps

Configuration properties for associating resolver rules.

---

##### `attachToTransitGateway` <a name="attachToTransitGateway" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.attachToTransitGateway"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.attachToTransitGateway(scope: Construct, id: string, props: AttachToTransitGatewayProps)
```

Attaches a VPC to an AWS Transit Gateway for inter-VPC connectivity.

This static method creates a Transit Gateway VPC attachment to enable routing
between the specified VPC and other resources connected to the Transit Gateway.
The attachment is created using subnets from the specified subnet group.

*Example*

```typescript
const attachmentId = DualStackVpcMethods.attachToTransitGateway(this, 'TgAttachment', {
  vpc: myVpc,
  transitGateway: transitGw,
  attachmentSubnetGroup: 'private',
  applianceMode: 'enable'
});@remarks[object Object]
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.attachToTransitGateway.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the attachment will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.attachToTransitGateway.parameter.id"></a>

- *Type:* string

Unique identifier for the attachment construct.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.attachToTransitGateway.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.AttachToTransitGatewayProps

Configuration properties for the Transit Gateway attachment.

---

##### `createFlowLogwithAnalysis` <a name="createFlowLogwithAnalysis" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.createFlowLogwithAnalysis"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.createFlowLogwithAnalysis(scope: Construct, id: string, props: FlowLogProps)
```

Creates VPC Flow Logs with optional Athena analysis capabilities.

This static method sets up comprehensive VPC Flow Log monitoring by creating flow logs
stored in S3 with Parquet format for efficient querying. Optionally configures Athena
integration for advanced log analysis and querying capabilities.

*Example*

```typescript
DualStackVpcMethods.createFlowLogwithAnalysis(this, 'VpcFlowLogs', {
  vpc: myVpc,
  oneMinuteFlowLogs: true,
  localAthenaQuerys: true,
  bucket: existingLogBucket
});@remarks[object Object]
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.createFlowLogwithAnalysis.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the flow log resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.createFlowLogwithAnalysis.parameter.id"></a>

- *Type:* string

Unique identifier used as prefix for all created resources.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.createFlowLogwithAnalysis.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.FlowLogProps

Configuration properties for the flow log setup.

---

##### `shareSubnetGroup` <a name="shareSubnetGroup" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.shareSubnetGroup"></a>

```typescript
import { cloudNetwork } from 'raindancers-cdk'

cloudNetwork.DualStackVpcMethods.shareSubnetGroup(scope: Construct, id: string, props: ShareSubnetGroupProps)
```

Shares subnet groups with other AWS accounts using AWS Resource Access Manager (RAM).

This static method creates a RAM resource share to allow other AWS accounts to use
subnets from the specified subnet groups. Optionally configures cross-account tagging
of shared resources using a custom Lambda function.

*Example*

```typescript
DualStackVpcMethods.shareSubnetGroup(this, 'SharePrivateSubnets', {
  vpc: myVpc,
  subnetGroup: privateSubnetGroup,
  accounts: ['123456789012', '987654321098'],
  shareName: 'PrivateSubnetShare',
  cdkTagResourcesInSharedToAccountRoleName: 'CrossAccountTaggingRole'
});@remarks[object Object]
```


###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.shareSubnetGroup.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the resource share will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.shareSubnetGroup.parameter.id"></a>

- *Type:* string

Unique identifier for the resource share.

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.cloudNetwork.DualStackVpcMethods.shareSubnetGroup.parameter.props"></a>

- *Type:* raindancers-cdk.cloudNetwork.ShareSubnetGroupProps

Configuration properties for sharing subnet groups.

---



### MonitoringRule <a name="MonitoringRule" id="raindancers-cdk.eventalerts.MonitoringRule"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.eventalerts.MonitoringRule.Initializer"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

new eventalerts.MonitoringRule()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.MonitoringRule.rootActivity">rootActivity</a></code> | *No description.* |

---

##### `rootActivity` <a name="rootActivity" id="raindancers-cdk.eventalerts.MonitoringRule.rootActivity"></a>

```typescript
import { eventalerts } from 'raindancers-cdk'

eventalerts.MonitoringRule.rootActivity(scope: Construct, props: TargetProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.eventalerts.MonitoringRule.rootActivity.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.eventalerts.MonitoringRule.rootActivity.parameter.props"></a>

- *Type:* raindancers-cdk.eventalerts.TargetProps

---



### PreBuiltServiceControlPolicy <a name="PreBuiltServiceControlPolicy" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.Initializer"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

new serviceControlPolicy.PreBuiltServiceControlPolicy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions">allowedRegions</a></code> | Restrict Actions to all allowed list. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventChangingPublicS3">preventChangingPublicS3</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventCreatingDefaultSubnet">preventCreatingDefaultSubnet</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs">preventDeletingFlowLogs</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys">preventDeletingKMSKeys</a></code> | An SCP that prevents KMS Keys from being modified. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser">preventNewIamUser</a></code> | Prevent creating new IAM user Accounts. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange">preventVPCSettingsChange</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess">preventVPCWithInternetAccess</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictEverything">restrictEverything</a></code> | RestrictRootUser in Account. |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictRootUser">restrictRootUser</a></code> | RestrictRootUser in Account. |

---

##### `allowedRegions` <a name="allowedRegions" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions(scope: Construct, id: string, regions: string[])
```

Restrict Actions to all allowed list.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions.parameter.id"></a>

- *Type:* string

---

###### `regions`<sup>Required</sup> <a name="regions" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.allowedRegions.parameter.regions"></a>

- *Type:* string[]

array of valid regions.

---

##### `preventChangingPublicS3` <a name="preventChangingPublicS3" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventChangingPublicS3"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventChangingPublicS3(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventChangingPublicS3.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventChangingPublicS3.parameter.id"></a>

- *Type:* string

---

##### `preventCreatingDefaultSubnet` <a name="preventCreatingDefaultSubnet" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventCreatingDefaultSubnet"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventCreatingDefaultSubnet(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventCreatingDefaultSubnet.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventCreatingDefaultSubnet.parameter.id"></a>

- *Type:* string

---

##### `preventDeletingFlowLogs` <a name="preventDeletingFlowLogs" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs(scope: Construct, id: string, excludedRoleArns?: string[])
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs.parameter.id"></a>

- *Type:* string

---

###### `excludedRoleArns`<sup>Optional</sup> <a name="excludedRoleArns" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingFlowLogs.parameter.excludedRoleArns"></a>

- *Type:* string[]

---

##### `preventDeletingKMSKeys` <a name="preventDeletingKMSKeys" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys(scope: Construct, id: string, excludedRoleArns?: Role[])
```

An SCP that prevents KMS Keys from being modified.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys.parameter.id"></a>

- *Type:* string

---

###### `excludedRoleArns`<sup>Optional</sup> <a name="excludedRoleArns" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventDeletingKMSKeys.parameter.excludedRoleArns"></a>

- *Type:* aws-cdk-lib.aws_iam.Role[]

---

##### `preventNewIamUser` <a name="preventNewIamUser" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser(scope: Construct, id: string, excludedRoleArns?: string[])
```

Prevent creating new IAM user Accounts.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser.parameter.id"></a>

- *Type:* string

---

###### `excludedRoleArns`<sup>Optional</sup> <a name="excludedRoleArns" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventNewIamUser.parameter.excludedRoleArns"></a>

- *Type:* string[]

, Roles which are excluded from the SCP.

---

##### `preventVPCSettingsChange` <a name="preventVPCSettingsChange" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange(scope: Construct, id: string, excludedRoleArns?: string[])
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange.parameter.id"></a>

- *Type:* string

---

###### `excludedRoleArns`<sup>Optional</sup> <a name="excludedRoleArns" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCSettingsChange.parameter.excludedRoleArns"></a>

- *Type:* string[]

---

##### `preventVPCWithInternetAccess` <a name="preventVPCWithInternetAccess" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess(scope: Construct, id: string, excludedRoleArns?: string[])
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess.parameter.id"></a>

- *Type:* string

---

###### `excludedRoleArns`<sup>Optional</sup> <a name="excludedRoleArns" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.preventVPCWithInternetAccess.parameter.excludedRoleArns"></a>

- *Type:* string[]

---

##### `restrictEverything` <a name="restrictEverything" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictEverything"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.restrictEverything(scope: Construct, id: string)
```

RestrictRootUser in Account.

This should ideally be applyed at the account leel

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictEverything.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictEverything.parameter.id"></a>

- *Type:* string

---

##### `restrictRootUser` <a name="restrictRootUser" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictRootUser"></a>

```typescript
import { serviceControlPolicy } from 'raindancers-cdk'

serviceControlPolicy.PreBuiltServiceControlPolicy.restrictRootUser(scope: Construct, id: string)
```

RestrictRootUser in Account.

This should ideally be applyed at the account leel

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictRootUser.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.PreBuiltServiceControlPolicy.restrictRootUser.parameter.id"></a>

- *Type:* string

---



### SSOGroup <a name="SSOGroup" id="raindancers-cdk.sso.SSOGroup"></a>

- *Implements:* raindancers-cdk.sso.ISSOPrincipal

#### Initializers <a name="Initializers" id="raindancers-cdk.sso.SSOGroup.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

new sso.SSOGroup()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.SSOGroup.fromDisplayName">fromDisplayName</a></code> | *No description.* |

---

##### `fromDisplayName` <a name="fromDisplayName" id="raindancers-cdk.sso.SSOGroup.fromDisplayName"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.SSOGroup.fromDisplayName(scope: Construct, id: string, identityStoreId: string, displayName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.sso.SSOGroup.fromDisplayName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.sso.SSOGroup.fromDisplayName.parameter.id"></a>

- *Type:* string

---

###### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="raindancers-cdk.sso.SSOGroup.fromDisplayName.parameter.identityStoreId"></a>

- *Type:* string

---

###### `displayName`<sup>Required</sup> <a name="displayName" id="raindancers-cdk.sso.SSOGroup.fromDisplayName.parameter.displayName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.SSOGroup.property.principalId">principalId</a></code> | <code>string</code> | The principalId. |
| <code><a href="#raindancers-cdk.sso.SSOGroup.property.principalType">principalType</a></code> | <code>raindancers-cdk.sso.SSOPrincipalType</code> | The type of the principalType. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="raindancers-cdk.sso.SSOGroup.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The principalId.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="raindancers-cdk.sso.SSOGroup.property.principalType"></a>

```typescript
public readonly principalType: SSOPrincipalType;
```

- *Type:* raindancers-cdk.sso.SSOPrincipalType

The type of the principalType.

---


### SSOUser <a name="SSOUser" id="raindancers-cdk.sso.SSOUser"></a>

- *Implements:* raindancers-cdk.sso.ISSOPrincipal

#### Initializers <a name="Initializers" id="raindancers-cdk.sso.SSOUser.Initializer"></a>

```typescript
import { sso } from 'raindancers-cdk'

new sso.SSOUser()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.SSOUser.fromEmailAdddress">fromEmailAdddress</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.sso.SSOUser.fromUserName">fromUserName</a></code> | *No description.* |

---

##### `fromEmailAdddress` <a name="fromEmailAdddress" id="raindancers-cdk.sso.SSOUser.fromEmailAdddress"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.SSOUser.fromEmailAdddress(scope: Construct, identityStoreId: string, email: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.sso.SSOUser.fromEmailAdddress.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="raindancers-cdk.sso.SSOUser.fromEmailAdddress.parameter.identityStoreId"></a>

- *Type:* string

---

###### `email`<sup>Required</sup> <a name="email" id="raindancers-cdk.sso.SSOUser.fromEmailAdddress.parameter.email"></a>

- *Type:* string

---

##### `fromUserName` <a name="fromUserName" id="raindancers-cdk.sso.SSOUser.fromUserName"></a>

```typescript
import { sso } from 'raindancers-cdk'

sso.SSOUser.fromUserName(scope: Construct, identityStoreId: string, userName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.sso.SSOUser.fromUserName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="raindancers-cdk.sso.SSOUser.fromUserName.parameter.identityStoreId"></a>

- *Type:* string

---

###### `userName`<sup>Required</sup> <a name="userName" id="raindancers-cdk.sso.SSOUser.fromUserName.parameter.userName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.SSOUser.property.principalId">principalId</a></code> | <code>string</code> | The principalId. |
| <code><a href="#raindancers-cdk.sso.SSOUser.property.principalType">principalType</a></code> | <code>raindancers-cdk.sso.SSOPrincipalType</code> | The type of the principalType. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="raindancers-cdk.sso.SSOUser.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The principalId.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="raindancers-cdk.sso.SSOUser.property.principalType"></a>

```typescript
public readonly principalType: SSOPrincipalType;
```

- *Type:* raindancers-cdk.sso.SSOPrincipalType

The type of the principalType.

---


### StatelessRule <a name="StatelessRule" id="raindancers-cdk.nwFirewall.StatelessRule"></a>

#### Initializers <a name="Initializers" id="raindancers-cdk.nwFirewall.StatelessRule.Initializer"></a>

```typescript
import { nwFirewall } from 'raindancers-cdk'

new nwFirewall.StatelessRule(props: StatelessRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRule.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.nwFirewall.StatelessRuleProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.nwFirewall.StatelessRule.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.nwFirewall.StatelessRuleProps

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessRule.property.statelessRuleProperty">statelessRuleProperty</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty</code> | *No description.* |

---

##### `statelessRuleProperty`<sup>Required</sup> <a name="statelessRuleProperty" id="raindancers-cdk.nwFirewall.StatelessRule.property.statelessRuleProperty"></a>

```typescript
public readonly statelessRuleProperty: StatelessRuleProperty;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IADJoinedNodeProps <a name="IADJoinedNodeProps" id="raindancers-cdk.microsoft.IADJoinedNodeProps"></a>

- *Implemented By:* raindancers-cdk.microsoft.IADJoinedNodeProps

The properties of an DomainWindowsNodeProps, requires Active Directory parameter to read the Secret to join the domain Default setting: Domain joined, m5.2xlarge, latest windows, Managed by SSM.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.domainName">domainName</a></code> | <code>string</code> | the domain name. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.hostname">hostname</a></code> | <code>string</code> | The hostname to use for the instance. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | The EC2 Instance type to use. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.ouPath">ouPath</a></code> | <code>string</code> | Fully Distinguished Name of the OU. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.passwordObject">passwordObject</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | the secrect that contains the credentials of a AD user than has permissions to join an instance to the domain. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where the instance should be launched. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to use. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | encryption key. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.iamManagedPoliciesList">iamManagedPoliciesList</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | IAM Instance role permissions. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.imdsv2">imdsv2</a></code> | <code>boolean</code> | Enforce the use of imdsv2. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | The name of the AMI to search in SSM (ec2.LookupNodeImage) supports Regex. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | optionally add a securityGroup. |
| <code><a href="#raindancers-cdk.microsoft.IADJoinedNodeProps.property.userData">userData</a></code> | <code>string</code> | Specific UserData to use. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

the domain name.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname to use for the instance.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

The EC2 Instance type to use.

---

##### `ouPath`<sup>Required</sup> <a name="ouPath" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.ouPath"></a>

```typescript
public readonly ouPath: string;
```

- *Type:* string

Fully Distinguished Name of the OU.

---

##### `passwordObject`<sup>Required</sup> <a name="passwordObject" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.passwordObject"></a>

```typescript
public readonly passwordObject: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

the secrect that contains the credentials of a AD user than has permissions to join an instance to the domain.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Private.

Where the instance should be launched.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to use.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

encryption key.

---

##### `iamManagedPoliciesList`<sup>Optional</sup> <a name="iamManagedPoliciesList" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.iamManagedPoliciesList"></a>

```typescript
public readonly iamManagedPoliciesList: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* 'AmazonSSMManagedInstanceCore, AmazonSSMDirectoryServiceAccess'.

IAM Instance role permissions.

---

##### `imdsv2`<sup>Optional</sup> <a name="imdsv2" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.imdsv2"></a>

```typescript
public readonly imdsv2: boolean;
```

- *Type:* boolean
- *Default:* true

Enforce the use of imdsv2.

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.machineImage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage
- *Default:* 'Windows_Server-2022-English-Full'

The name of the AMI to search in SSM (ec2.LookupNodeImage) supports Regex.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup
- *Default:* a new group will be added.

optionally add a securityGroup.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="raindancers-cdk.microsoft.IADJoinedNodeProps.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string
- *Default:* 'undefined'

Specific UserData to use.

The UserData may still be mutated after creation.

---

### IAssignment <a name="IAssignment" id="raindancers-cdk.sso.IAssignment"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* raindancers-cdk.sso.Assignment, raindancers-cdk.sso.IAssignment

The resource interface for an AWS SSO assignment.

This interface has no attributes because the resulting resource has none.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.IAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.sso.IAssignment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.sso.IAssignment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.sso.IAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.sso.IAssignment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.sso.IAssignment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

### IFirewall <a name="IFirewall" id="raindancers-cdk.enterprisevpc.IFirewall"></a>

- *Implemented By:* raindancers-cdk.enterprisevpc.IFirewall


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.IFirewall.property.alertlogs">alertlogs</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.IFirewall.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.IFirewall.property.flowlogs">flowlogs</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | *No description.* |

---

##### `alertlogs`<sup>Required</sup> <a name="alertlogs" id="raindancers-cdk.enterprisevpc.IFirewall.property.alertlogs"></a>

```typescript
public readonly alertlogs: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.enterprisevpc.IFirewall.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `flowlogs`<sup>Required</sup> <a name="flowlogs" id="raindancers-cdk.enterprisevpc.IFirewall.property.flowlogs"></a>

```typescript
public readonly flowlogs: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

---

### IFirewallEndpoints <a name="IFirewallEndpoints" id="raindancers-cdk.cloudNetwork.IFirewallEndpoints"></a>

- *Implemented By:* raindancers-cdk.cloudNetwork.IFirewallEndpoints


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IFirewallEndpoints.property.az">az</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IFirewallEndpoints.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |

---

##### `az`<sup>Required</sup> <a name="az" id="raindancers-cdk.cloudNetwork.IFirewallEndpoints.property.az"></a>

```typescript
public readonly az: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="raindancers-cdk.cloudNetwork.IFirewallEndpoints.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

### IFirewallEndpoints <a name="IFirewallEndpoints" id="raindancers-cdk.enterprisevpc.IFirewallEndpoints"></a>

- *Implemented By:* raindancers-cdk.enterprisevpc.IFirewallEndpoints


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.IFirewallEndpoints.property.az">az</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.IFirewallEndpoints.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |

---

##### `az`<sup>Required</sup> <a name="az" id="raindancers-cdk.enterprisevpc.IFirewallEndpoints.property.az"></a>

```typescript
public readonly az: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="raindancers-cdk.enterprisevpc.IFirewallEndpoints.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

### IFirewallEndpoints <a name="IFirewallEndpoints" id="raindancers-cdk.nwFirewall.IFirewallEndpoints"></a>

- *Implemented By:* raindancers-cdk.nwFirewall.IFirewallEndpoints


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallEndpoints.property.az">az</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallEndpoints.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |

---

##### `az`<sup>Required</sup> <a name="az" id="raindancers-cdk.nwFirewall.IFirewallEndpoints.property.az"></a>

```typescript
public readonly az: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="raindancers-cdk.nwFirewall.IFirewallEndpoints.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

### IFirewallPolicyProperty <a name="IFirewallPolicyProperty" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty"></a>

- *Implemented By:* raindancers-cdk.nwFirewall.IFirewallPolicyProperty


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessDefaultActions">statelessDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessFragmentDefaultActions">statelessFragmentDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statefulDefaultActions">statefulDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statefulEngineOptions">statefulEngineOptions</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statefulRuleGroupReferences">statefulRuleGroupReferences</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulRuleGroupReferenceProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessCustomActions">statelessCustomActions</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.CustomActionProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessRuleGroupReferences">statelessRuleGroupReferences</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatelessRuleGroupReferenceProperty[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.tlsInspectionConfigurationArn">tlsInspectionConfigurationArn</a></code> | <code>string</code> | *No description.* |

---

##### `statelessDefaultActions`<sup>Required</sup> <a name="statelessDefaultActions" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessDefaultActions"></a>

```typescript
public readonly statelessDefaultActions: string[];
```

- *Type:* string[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="statelessFragmentDefaultActions" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessFragmentDefaultActions"></a>

```typescript
public readonly statelessFragmentDefaultActions: string[];
```

- *Type:* string[]

---

##### `statefulDefaultActions`<sup>Optional</sup> <a name="statefulDefaultActions" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statefulDefaultActions"></a>

```typescript
public readonly statefulDefaultActions: string[];
```

- *Type:* string[]

---

##### `statefulEngineOptions`<sup>Optional</sup> <a name="statefulEngineOptions" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statefulEngineOptions"></a>

```typescript
public readonly statefulEngineOptions: IResolvable | StatefulEngineOptionsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty

---

##### `statefulRuleGroupReferences`<sup>Optional</sup> <a name="statefulRuleGroupReferences" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statefulRuleGroupReferences"></a>

```typescript
public readonly statefulRuleGroupReferences: StatefulRuleGroupReferenceProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulRuleGroupReferenceProperty[]

---

##### `statelessCustomActions`<sup>Optional</sup> <a name="statelessCustomActions" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessCustomActions"></a>

```typescript
public readonly statelessCustomActions: IResolvable | IResolvable | CustomActionProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.CustomActionProperty[]

---

##### `statelessRuleGroupReferences`<sup>Optional</sup> <a name="statelessRuleGroupReferences" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.statelessRuleGroupReferences"></a>

```typescript
public readonly statelessRuleGroupReferences: StatelessRuleGroupReferenceProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatelessRuleGroupReferenceProperty[]

---

##### `tlsInspectionConfigurationArn`<sup>Optional</sup> <a name="tlsInspectionConfigurationArn" id="raindancers-cdk.nwFirewall.IFirewallPolicyProperty.property.tlsInspectionConfigurationArn"></a>

```typescript
public readonly tlsInspectionConfigurationArn: string;
```

- *Type:* string

---

### IIpamPlanningTool <a name="IIpamPlanningTool" id="raindancers-cdk.cloudNetwork.IIpamPlanningTool"></a>

- *Implemented By:* raindancers-cdk.cloudNetwork.IpamVPCPlanningTools, raindancers-cdk.cloudNetwork.IIpamPlanningTool


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IIpamPlanningTool.property.ipv4PlanningPool">ipv4PlanningPool</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource \| aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | IPv4 IPAM pool for subnet allocation. |
| <code><a href="#raindancers-cdk.cloudNetwork.IIpamPlanningTool.property.ipv6PlanningPool">ipv6PlanningPool</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource \| aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.IIpamPlanningTool.property.waiter">waiter</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `ipv4PlanningPool`<sup>Required</sup> <a name="ipv4PlanningPool" id="raindancers-cdk.cloudNetwork.IIpamPlanningTool.property.ipv4PlanningPool"></a>

```typescript
public readonly ipv4PlanningPool: AwsCustomResource | CfnIPAMPool;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource | aws-cdk-lib.aws_ec2.CfnIPAMPool

IPv4 IPAM pool for subnet allocation.

---

##### `ipv6PlanningPool`<sup>Required</sup> <a name="ipv6PlanningPool" id="raindancers-cdk.cloudNetwork.IIpamPlanningTool.property.ipv6PlanningPool"></a>

```typescript
public readonly ipv6PlanningPool: AwsCustomResource | CfnIPAMPool;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource | aws-cdk-lib.aws_ec2.CfnIPAMPool

---

##### `waiter`<sup>Required</sup> <a name="waiter" id="raindancers-cdk.cloudNetwork.IIpamPlanningTool.property.waiter"></a>

```typescript
public readonly waiter: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

### IMetricFilter <a name="IMetricFilter" id="raindancers-cdk.orgTools.IMetricFilter"></a>

- *Implemented By:* raindancers-cdk.orgTools.IMetricFilter


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.orgTools.IMetricFilter.property.alarm">alarm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.IMetricFilter.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.IMetricFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.IMetricFilter.property.nameSpace">nameSpace</a></code> | <code>string</code> | *No description.* |

---

##### `alarm`<sup>Required</sup> <a name="alarm" id="raindancers-cdk.orgTools.IMetricFilter.property.alarm"></a>

```typescript
public readonly alarm: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="raindancers-cdk.orgTools.IMetricFilter.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.orgTools.IMetricFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameSpace`<sup>Required</sup> <a name="nameSpace" id="raindancers-cdk.orgTools.IMetricFilter.property.nameSpace"></a>

```typescript
public readonly nameSpace: string;
```

- *Type:* string

---

### IMonitoringRule <a name="IMonitoringRule" id="raindancers-cdk.eventalerts.IMonitoringRule"></a>

- *Implemented By:* raindancers-cdk.eventalerts.IMonitoringRule


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.eventalerts.IMonitoringRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.eventalerts.IMonitoringRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

### INetworkFirewall <a name="INetworkFirewall" id="raindancers-cdk.nwFirewall.INetworkFirewall"></a>

- *Implemented By:* raindancers-cdk.nwFirewall.NetworkFirewall, raindancers-cdk.nwFirewall.INetworkFirewall


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.INetworkFirewall.property.alertLogs">alertLogs</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | alert log. |
| <code><a href="#raindancers-cdk.nwFirewall.INetworkFirewall.property.endPointIds">endPointIds</a></code> | <code>string[]</code> | Gateway Endpoints for the Firewalls. |
| <code><a href="#raindancers-cdk.nwFirewall.INetworkFirewall.property.firewallArn">firewallArn</a></code> | <code>string</code> | Arn of the firewall. |
| <code><a href="#raindancers-cdk.nwFirewall.INetworkFirewall.property.firewallId">firewallId</a></code> | <code>string</code> | Firewall ID. |
| <code><a href="#raindancers-cdk.nwFirewall.INetworkFirewall.property.flowLogs">flowLogs</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | flow log. |

---

##### `alertLogs`<sup>Required</sup> <a name="alertLogs" id="raindancers-cdk.nwFirewall.INetworkFirewall.property.alertLogs"></a>

```typescript
public readonly alertLogs: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

alert log.

---

##### `endPointIds`<sup>Required</sup> <a name="endPointIds" id="raindancers-cdk.nwFirewall.INetworkFirewall.property.endPointIds"></a>

```typescript
public readonly endPointIds: string[];
```

- *Type:* string[]

Gateway Endpoints for the Firewalls.

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="raindancers-cdk.nwFirewall.INetworkFirewall.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

Arn of the firewall.

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="raindancers-cdk.nwFirewall.INetworkFirewall.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

Firewall ID.

---

##### `flowLogs`<sup>Required</sup> <a name="flowLogs" id="raindancers-cdk.nwFirewall.INetworkFirewall.property.flowLogs"></a>

```typescript
public readonly flowLogs: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

flow log.

---

### IOrganizationalUnit <a name="IOrganizationalUnit" id="raindancers-cdk.organizations.IOrganizationalUnit"></a>

- *Implemented By:* raindancers-cdk.organizations.OrganizationalUnit, raindancers-cdk.organizations.IOrganizationalUnit


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.organizations.IOrganizationalUnit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.IOrganizationalUnit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.IOrganizationalUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.organizations.IOrganizationalUnit.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.organizations.IOrganizationalUnit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.organizations.IOrganizationalUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.organizations.IOrganizationalUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="raindancers-cdk.organizations.IOrganizationalUnit.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

### IPermissionSet <a name="IPermissionSet" id="raindancers-cdk.sso.IPermissionSet"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* raindancers-cdk.sso.PermissionSet, raindancers-cdk.sso.IPermissionSet

The resource interface for an AWS SSO permission set.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.grant">grant</a></code> | Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance. |

---

##### `grant` <a name="grant" id="raindancers-cdk.sso.IPermissionSet.grant"></a>

```typescript
public grant(id: string, assignmentOptions: AssignmentOptions): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.sso.IPermissionSet.grant.parameter.id"></a>

- *Type:* string

---

###### `assignmentOptions`<sup>Required</sup> <a name="assignmentOptions" id="raindancers-cdk.sso.IPermissionSet.grant.parameter.assignmentOptions"></a>

- *Type:* raindancers-cdk.sso.AssignmentOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.property.name">name</a></code> | <code>string</code> | THe Name of the permission Set. |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#raindancers-cdk.sso.IPermissionSet.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance ARN of the permission set. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.sso.IPermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-cdk.sso.IPermissionSet.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.sso.IPermissionSet.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.sso.IPermissionSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

THe Name of the permission Set.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-cdk.sso.IPermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

Such as
`arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-cdk.sso.IPermissionSet.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance ARN of the permission set.

---

### IServiceControlPolicy <a name="IServiceControlPolicy" id="raindancers-cdk.serviceControlPolicy.IServiceControlPolicy"></a>

- *Implemented By:* raindancers-cdk.serviceControlPolicy.IServiceControlPolicy


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.IServiceControlPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.IServiceControlPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.serviceControlPolicy.IServiceControlPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.serviceControlPolicy.IServiceControlPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

### ISSOPrincipal <a name="ISSOPrincipal" id="raindancers-cdk.sso.ISSOPrincipal"></a>

- *Implemented By:* raindancers-cdk.sso.SSOGroup, raindancers-cdk.sso.SSOUser, raindancers-cdk.sso.ISSOPrincipal


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.sso.ISSOPrincipal.property.principalId">principalId</a></code> | <code>string</code> | The id of the principal. |
| <code><a href="#raindancers-cdk.sso.ISSOPrincipal.property.principalType">principalType</a></code> | <code>raindancers-cdk.sso.SSOPrincipalType</code> | The type of the principal. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="raindancers-cdk.sso.ISSOPrincipal.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The id of the principal.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="raindancers-cdk.sso.ISSOPrincipal.property.principalType"></a>

```typescript
public readonly principalType: SSOPrincipalType;
```

- *Type:* raindancers-cdk.sso.SSOPrincipalType

The type of the principal.

---

### ISubNetCidrLookup <a name="ISubNetCidrLookup" id="raindancers-cdk.cloudNetwork.ISubNetCidrLookup"></a>

- *Implemented By:* raindancers-cdk.cloudNetwork.ISubNetCidrLookup


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubNetCidrLookup.property.ipv4cidr">ipv4cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubNetCidrLookup.property.ipv6cidr">ipv6cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubNetCidrLookup.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `ipv4cidr`<sup>Required</sup> <a name="ipv4cidr" id="raindancers-cdk.cloudNetwork.ISubNetCidrLookup.property.ipv4cidr"></a>

```typescript
public readonly ipv4cidr: string;
```

- *Type:* string

---

##### `ipv6cidr`<sup>Required</sup> <a name="ipv6cidr" id="raindancers-cdk.cloudNetwork.ISubNetCidrLookup.property.ipv6cidr"></a>

```typescript
public readonly ipv6cidr: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="raindancers-cdk.cloudNetwork.ISubNetCidrLookup.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

### ISubnetGroup <a name="ISubnetGroup" id="raindancers-cdk.cloudNetwork.ISubnetGroup"></a>

- *Implemented By:* raindancers-cdk.cloudNetwork.ISubnetGroup


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubnetGroup.property.ipv4mask">ipv4mask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubnetGroup.property.stack">stack</a></code> | <code>raindancers-cdk.cloudNetwork.StackType</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubnetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubnetGroup.property.personality">personality</a></code> | <code>raindancers-cdk.cloudNetwork.SubnetPersonality</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubnetGroup.property.services">services</a></code> | <code>raindancers-cdk.cloudNetwork.Services[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ISubnetGroup.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | *No description.* |

---

##### `ipv4mask`<sup>Required</sup> <a name="ipv4mask" id="raindancers-cdk.cloudNetwork.ISubnetGroup.property.ipv4mask"></a>

```typescript
public readonly ipv4mask: number;
```

- *Type:* number

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-cdk.cloudNetwork.ISubnetGroup.property.stack"></a>

```typescript
public readonly stack: StackType;
```

- *Type:* raindancers-cdk.cloudNetwork.StackType

---

##### `name`<sup>Optional</sup> <a name="name" id="raindancers-cdk.cloudNetwork.ISubnetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `personality`<sup>Optional</sup> <a name="personality" id="raindancers-cdk.cloudNetwork.ISubnetGroup.property.personality"></a>

```typescript
public readonly personality: SubnetPersonality;
```

- *Type:* raindancers-cdk.cloudNetwork.SubnetPersonality

---

##### `services`<sup>Optional</sup> <a name="services" id="raindancers-cdk.cloudNetwork.ISubnetGroup.property.services"></a>

```typescript
public readonly services: Services[];
```

- *Type:* raindancers-cdk.cloudNetwork.Services[]

---

##### `subnetType`<sup>Optional</sup> <a name="subnetType" id="raindancers-cdk.cloudNetwork.ISubnetGroup.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

---

### ITLSInspectionConfiguration <a name="ITLSInspectionConfiguration" id="raindancers-cdk.nwFirewall.ITLSInspectionConfiguration"></a>

- *Implemented By:* raindancers-cdk.nwFirewall.TLSInspectionConfiguration, raindancers-cdk.nwFirewall.ITLSInspectionConfiguration


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.ITLSInspectionConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ITLSInspectionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.nwFirewall.ITLSInspectionConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.nwFirewall.ITLSInspectionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

### ITransitGateway <a name="ITransitGateway" id="raindancers-cdk.transitGateway.ITransitGateway"></a>

- *Implemented By:* raindancers-cdk.transitGateway.TransitGateway, raindancers-cdk.transitGateway.ITransitGateway

Implmented by `TransitGateway` Obtainable by `TransitGateway.fromTransitGatewayId`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.ITransitGateway.property.amazonSideAsn">amazonSideAsn</a></code> | <code>number</code> | A private Autonomous System Number (ASN) for the Amazon side of a BGP session. |
| <code><a href="#raindancers-cdk.transitGateway.ITransitGateway.property.arn">arn</a></code> | <code>string</code> | Arn. |
| <code><a href="#raindancers-cdk.transitGateway.ITransitGateway.property.id">id</a></code> | <code>string</code> | The ID of the transit gateway. |

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="raindancers-cdk.transitGateway.ITransitGateway.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: number;
```

- *Type:* number

A private Autonomous System Number (ASN) for the Amazon side of a BGP session.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.transitGateway.ITransitGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Arn.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transitGateway.ITransitGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the transit gateway.

---

### ITransitGatewayRouteTable <a name="ITransitGatewayRouteTable" id="raindancers-cdk.cloudNetwork.ITransitGatewayRouteTable"></a>

- *Implemented By:* raindancers-cdk.cloudNetwork.ITransitGatewayRouteTable


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.ITransitGatewayRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.ITransitGatewayRouteTable.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.cloudNetwork.ITransitGatewayRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="raindancers-cdk.cloudNetwork.ITransitGatewayRouteTable.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

### ITransitGatewayRouteTable <a name="ITransitGatewayRouteTable" id="raindancers-cdk.transitGateway.ITransitGatewayRouteTable"></a>

- *Implemented By:* raindancers-cdk.transitGateway.ITransitGatewayRouteTable


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.ITransitGatewayRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.ITransitGatewayRouteTable.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.ITransitGatewayRouteTable.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-cdk.transitGateway.ITransitGatewayRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="raindancers-cdk.transitGateway.ITransitGatewayRouteTable.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="raindancers-cdk.transitGateway.ITransitGatewayRouteTable.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### ApplianceMode <a name="ApplianceMode" id="raindancers-cdk.cloudNetwork.ApplianceMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.ApplianceMode.ENABLED">ENABLED</a></code> | enable Connecting VPC to TransitGateway in Appliance Mode. |

---

##### `ENABLED` <a name="ENABLED" id="raindancers-cdk.cloudNetwork.ApplianceMode.ENABLED"></a>

enable Connecting VPC to TransitGateway in Appliance Mode.

---


### ApplianceMode <a name="ApplianceMode" id="raindancers-cdk.enterprisevpc.ApplianceMode"></a>

Propertys for Appliance Mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.ApplianceMode.ENABLED">ENABLED</a></code> | enable Connecting VPC to TransitGateway in Appliance Mode. |

---

##### `ENABLED` <a name="ENABLED" id="raindancers-cdk.enterprisevpc.ApplianceMode.ENABLED"></a>

enable Connecting VPC to TransitGateway in Appliance Mode.

---


### ApplianceModeSupport <a name="ApplianceModeSupport" id="raindancers-cdk.transitGateway.ApplianceModeSupport"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.ApplianceModeSupport.ENABLE">ENABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.ApplianceModeSupport.DISABLE">DISABLE</a></code> | *No description.* |

---

##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.ApplianceModeSupport.ENABLE"></a>

---


##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.ApplianceModeSupport.DISABLE"></a>

---


### AutoAcceptSharedAttachments <a name="AutoAcceptSharedAttachments" id="raindancers-cdk.transitGateway.AutoAcceptSharedAttachments"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.AutoAcceptSharedAttachments.DISABLE">DISABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.AutoAcceptSharedAttachments.ENABLE">ENABLE</a></code> | *No description.* |

---

##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.AutoAcceptSharedAttachments.DISABLE"></a>

---


##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.AutoAcceptSharedAttachments.ENABLE"></a>

---


### AwsSource <a name="AwsSource" id="raindancers-cdk.securityLake.AwsSource"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.ROUTE_53">ROUTE_53</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.VPC_FLOW">VPC_FLOW</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.SECURITY_HUB">SECURITY_HUB</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.CLOUD_TRAIL_MGMT">CLOUD_TRAIL_MGMT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.LAMBDA">LAMBDA</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.S3_DATA">S3_DATA</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.AwsSource.EKS_AUDIT">EKS_AUDIT</a></code> | *No description.* |

---

##### `ROUTE_53` <a name="ROUTE_53" id="raindancers-cdk.securityLake.AwsSource.ROUTE_53"></a>

---


##### `VPC_FLOW` <a name="VPC_FLOW" id="raindancers-cdk.securityLake.AwsSource.VPC_FLOW"></a>

---


##### `SECURITY_HUB` <a name="SECURITY_HUB" id="raindancers-cdk.securityLake.AwsSource.SECURITY_HUB"></a>

---


##### `CLOUD_TRAIL_MGMT` <a name="CLOUD_TRAIL_MGMT" id="raindancers-cdk.securityLake.AwsSource.CLOUD_TRAIL_MGMT"></a>

---


##### `LAMBDA` <a name="LAMBDA" id="raindancers-cdk.securityLake.AwsSource.LAMBDA"></a>

---


##### `S3_DATA` <a name="S3_DATA" id="raindancers-cdk.securityLake.AwsSource.S3_DATA"></a>

---


##### `EKS_AUDIT` <a name="EKS_AUDIT" id="raindancers-cdk.securityLake.AwsSource.EKS_AUDIT"></a>

---


### ComponentType <a name="ComponentType" id="raindancers-cdk.zscaler.ComponentType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.zscaler.ComponentType.APP_CONNECTOR">APP_CONNECTOR</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.zscaler.ComponentType.PRIVATE_SERVICE_EDGE">PRIVATE_SERVICE_EDGE</a></code> | *No description.* |

---

##### `APP_CONNECTOR` <a name="APP_CONNECTOR" id="raindancers-cdk.zscaler.ComponentType.APP_CONNECTOR"></a>

---


##### `PRIVATE_SERVICE_EDGE` <a name="PRIVATE_SERVICE_EDGE" id="raindancers-cdk.zscaler.ComponentType.PRIVATE_SERVICE_EDGE"></a>

---


### CredentialLocation <a name="CredentialLocation" id="raindancers-cdk.agentCore.CredentialLocation"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.CredentialLocation.HEADER">HEADER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.CredentialLocation.QUERY_PARAMETER">QUERY_PARAMETER</a></code> | *No description.* |

---

##### `HEADER` <a name="HEADER" id="raindancers-cdk.agentCore.CredentialLocation.HEADER"></a>

---


##### `QUERY_PARAMETER` <a name="QUERY_PARAMETER" id="raindancers-cdk.agentCore.CredentialLocation.QUERY_PARAMETER"></a>

---


### CredentialLocation <a name="CredentialLocation" id="raindancers-cdk.agentCore.v2.CredentialLocation"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.agentCore.v2.CredentialLocation.HEADER">HEADER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.agentCore.v2.CredentialLocation.QUERY_PARAMETER">QUERY_PARAMETER</a></code> | *No description.* |

---

##### `HEADER` <a name="HEADER" id="raindancers-cdk.agentCore.v2.CredentialLocation.HEADER"></a>

---


##### `QUERY_PARAMETER` <a name="QUERY_PARAMETER" id="raindancers-cdk.agentCore.v2.CredentialLocation.QUERY_PARAMETER"></a>

---


### DefaultRouteTableAssociation <a name="DefaultRouteTableAssociation" id="raindancers-cdk.transitGateway.DefaultRouteTableAssociation"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.DefaultRouteTableAssociation.DISABLE">DISABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.DefaultRouteTableAssociation.ENABLE">ENABLE</a></code> | *No description.* |

---

##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.DefaultRouteTableAssociation.DISABLE"></a>

---


##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.DefaultRouteTableAssociation.ENABLE"></a>

---


### DefaultRouteTablePropagation <a name="DefaultRouteTablePropagation" id="raindancers-cdk.transitGateway.DefaultRouteTablePropagation"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.DefaultRouteTablePropagation.DISABLE">DISABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.DefaultRouteTablePropagation.ENABLE">ENABLE</a></code> | *No description.* |

---

##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.DefaultRouteTablePropagation.DISABLE"></a>

---


##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.DefaultRouteTablePropagation.ENABLE"></a>

---


### Destination <a name="Destination" id="raindancers-cdk.enterprisevpc.Destination"></a>

The Destinations for Adding Routes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.CLOUDWAN">CLOUDWAN</a></code> | route to the cloudwan that the vpc is attached to. |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.TRANSITGATEWAY">TRANSITGATEWAY</a></code> | route to the transitGateway that the vpc is attached to. |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.NWFIREWALL">NWFIREWALL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.EC2_INSTANCE">EC2_INSTANCE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.INTERNET_GATEWAY">INTERNET_GATEWAY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.IPV6_EGREGSS_ONLY">IPV6_EGREGSS_ONLY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.GLWB_ENDPOINT">GLWB_ENDPOINT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.enterprisevpc.Destination.FIREWALL_ENDPOINT">FIREWALL_ENDPOINT</a></code> | *No description.* |

---

##### `CLOUDWAN` <a name="CLOUDWAN" id="raindancers-cdk.enterprisevpc.Destination.CLOUDWAN"></a>

route to the cloudwan that the vpc is attached to.

---


##### `TRANSITGATEWAY` <a name="TRANSITGATEWAY" id="raindancers-cdk.enterprisevpc.Destination.TRANSITGATEWAY"></a>

route to the transitGateway that the vpc is attached to.

---


##### `NWFIREWALL` <a name="NWFIREWALL" id="raindancers-cdk.enterprisevpc.Destination.NWFIREWALL"></a>

---


##### `EC2_INSTANCE` <a name="EC2_INSTANCE" id="raindancers-cdk.enterprisevpc.Destination.EC2_INSTANCE"></a>

---


##### `INTERNET_GATEWAY` <a name="INTERNET_GATEWAY" id="raindancers-cdk.enterprisevpc.Destination.INTERNET_GATEWAY"></a>

---


##### `IPV6_EGREGSS_ONLY` <a name="IPV6_EGREGSS_ONLY" id="raindancers-cdk.enterprisevpc.Destination.IPV6_EGREGSS_ONLY"></a>

---


##### `GLWB_ENDPOINT` <a name="GLWB_ENDPOINT" id="raindancers-cdk.enterprisevpc.Destination.GLWB_ENDPOINT"></a>

---


##### `FIREWALL_ENDPOINT` <a name="FIREWALL_ENDPOINT" id="raindancers-cdk.enterprisevpc.Destination.FIREWALL_ENDPOINT"></a>

---


### DNSFirewallActions <a name="DNSFirewallActions" id="raindancers-cdk.dns.DNSFirewallActions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.DNSFirewallActions.ALLOW">ALLOW</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.DNSFirewallActions.BLOCK">BLOCK</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.DNSFirewallActions.ALERT">ALERT</a></code> | *No description.* |

---

##### `ALLOW` <a name="ALLOW" id="raindancers-cdk.dns.DNSFirewallActions.ALLOW"></a>

---


##### `BLOCK` <a name="BLOCK" id="raindancers-cdk.dns.DNSFirewallActions.BLOCK"></a>

---


##### `ALERT` <a name="ALERT" id="raindancers-cdk.dns.DNSFirewallActions.ALERT"></a>

---


### DNSFirewallBlockResponse <a name="DNSFirewallBlockResponse" id="raindancers-cdk.dns.DNSFirewallBlockResponse"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.DNSFirewallBlockResponse.NODATA">NODATA</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.DNSFirewallBlockResponse.NXDOMAIN">NXDOMAIN</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.dns.DNSFirewallBlockResponse.OVERRIDE">OVERRIDE</a></code> | *No description.* |

---

##### `NODATA` <a name="NODATA" id="raindancers-cdk.dns.DNSFirewallBlockResponse.NODATA"></a>

---


##### `NXDOMAIN` <a name="NXDOMAIN" id="raindancers-cdk.dns.DNSFirewallBlockResponse.NXDOMAIN"></a>

---


##### `OVERRIDE` <a name="OVERRIDE" id="raindancers-cdk.dns.DNSFirewallBlockResponse.OVERRIDE"></a>

---


### DnsSupport <a name="DnsSupport" id="raindancers-cdk.transitGateway.DnsSupport"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.DnsSupport.DISABLE">DISABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.DnsSupport.ENABLE">ENABLE</a></code> | *No description.* |

---

##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.DnsSupport.DISABLE"></a>

---


##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.DnsSupport.ENABLE"></a>

---


### DocumentFormat <a name="DocumentFormat" id="raindancers-cdk.ssm.automation.DocumentFormat"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentFormat.YAML">YAML</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentFormat.JSON">JSON</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentFormat.TEXT">TEXT</a></code> | *No description.* |

---

##### `YAML` <a name="YAML" id="raindancers-cdk.ssm.automation.DocumentFormat.YAML"></a>

---


##### `JSON` <a name="JSON" id="raindancers-cdk.ssm.automation.DocumentFormat.JSON"></a>

---


##### `TEXT` <a name="TEXT" id="raindancers-cdk.ssm.automation.DocumentFormat.TEXT"></a>

---


### DocumentType <a name="DocumentType" id="raindancers-cdk.ssm.automation.DocumentType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.ssm.automation.DocumentType.AUTOMATION">AUTOMATION</a></code> | *No description.* |

---

##### `AUTOMATION` <a name="AUTOMATION" id="raindancers-cdk.ssm.automation.DocumentType.AUTOMATION"></a>

---


### FirewallSubnetMappingIPAddressType <a name="FirewallSubnetMappingIPAddressType" id="raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType.DUALSTACK">DUALSTACK</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType.IPV4">IPV4</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType.IPV6">IPV6</a></code> | *No description.* |

---

##### `DUALSTACK` <a name="DUALSTACK" id="raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType.DUALSTACK"></a>

---


##### `IPV4` <a name="IPV4" id="raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType.IPV4"></a>

---


##### `IPV6` <a name="IPV6" id="raindancers-cdk.cloudNetwork.FirewallSubnetMappingIPAddressType.IPV6"></a>

---


### FirewallSubnetMappingIPAddressType <a name="FirewallSubnetMappingIPAddressType" id="raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType.DUALSTACK">DUALSTACK</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType.IPV4">IPV4</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType.IPV6">IPV6</a></code> | *No description.* |

---

##### `DUALSTACK` <a name="DUALSTACK" id="raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType.DUALSTACK"></a>

---


##### `IPV4` <a name="IPV4" id="raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType.IPV4"></a>

---


##### `IPV6` <a name="IPV6" id="raindancers-cdk.nwFirewall.FirewallSubnetMappingIPAddressType.IPV6"></a>

---


### GeneratedRulesType <a name="GeneratedRulesType" id="raindancers-cdk.nwFirewall.GeneratedRulesType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.GeneratedRulesType.ALLOWLIST">ALLOWLIST</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.GeneratedRulesType.DENYLIST">DENYLIST</a></code> | *No description.* |

---

##### `ALLOWLIST` <a name="ALLOWLIST" id="raindancers-cdk.nwFirewall.GeneratedRulesType.ALLOWLIST"></a>

---


##### `DENYLIST` <a name="DENYLIST" id="raindancers-cdk.nwFirewall.GeneratedRulesType.DENYLIST"></a>

---


### Ipv6Support <a name="Ipv6Support" id="raindancers-cdk.transitGateway.Ipv6Support"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.Ipv6Support.ENABLE">ENABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.Ipv6Support.DISABLE">DISABLE</a></code> | *No description.* |

---

##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.Ipv6Support.ENABLE"></a>

---


##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.Ipv6Support.DISABLE"></a>

---


### IpV6Support <a name="IpV6Support" id="raindancers-cdk.cloudNetwork.IpV6Support"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.IpV6Support.ENABLED">ENABLED</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="raindancers-cdk.cloudNetwork.IpV6Support.ENABLED"></a>

---


### IpV6Support <a name="IpV6Support" id="raindancers-cdk.enterprisevpc.IpV6Support"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.IpV6Support.ENABLED">ENABLED</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="raindancers-cdk.enterprisevpc.IpV6Support.ENABLED"></a>

---


### LocalZones <a name="LocalZones" id="raindancers-cdk.localzone.LocalZones"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.localzone.LocalZones.AUCKLAND">AUCKLAND</a></code> | *No description.* |

---

##### `AUCKLAND` <a name="AUCKLAND" id="raindancers-cdk.localzone.LocalZones.AUCKLAND"></a>

---


### ManagedAwsFirewallRules <a name="ManagedAwsFirewallRules" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER">ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER">ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.MALWARE_DOMAINS_ACTION_ORDER">MALWARE_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER">BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_ACTION_ORDER">THREAT_SIGNATURES_BOTNET_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER">THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER">THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_DOS_ACTION_ORDER">THREAT_SIGNATURES_DOS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER">THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER">THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_FUP_ACTION_ORDER">THREAT_SIGNATURES_FUP_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_IOC_ACTION_ORDER">THREAT_SIGNATURES_IOC_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_ACTION_ORDER">THREAT_SIGNATURES_MALWARE_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER">THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER">THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER">THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_PHISHING_ACTION_ORDER">THREAT_SIGNATURES_PHISHING_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SCANNERS_ACTION_ORDER">THREAT_SIGNATURES_SCANNERS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SUSPECT_ACTION_ORDER">THREAT_SIGNATURES_SUSPECT_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER">THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER</a></code> | *No description.* |

---

##### `ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER` <a name="ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER"></a>

---


##### `ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER` <a name="ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER"></a>

---


##### `MALWARE_DOMAINS_ACTION_ORDER` <a name="MALWARE_DOMAINS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.MALWARE_DOMAINS_ACTION_ORDER"></a>

---


##### `BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER` <a name="BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_BOTNET_ACTION_ORDER` <a name="THREAT_SIGNATURES_BOTNET_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER` <a name="THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER` <a name="THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_DOS_ACTION_ORDER` <a name="THREAT_SIGNATURES_DOS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_DOS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER` <a name="THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER` <a name="THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_FUP_ACTION_ORDER` <a name="THREAT_SIGNATURES_FUP_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_FUP_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_IOC_ACTION_ORDER` <a name="THREAT_SIGNATURES_IOC_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_IOC_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MALWARE_ACTION_ORDER` <a name="THREAT_SIGNATURES_MALWARE_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER` <a name="THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER` <a name="THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER` <a name="THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_PHISHING_ACTION_ORDER` <a name="THREAT_SIGNATURES_PHISHING_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_PHISHING_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_SCANNERS_ACTION_ORDER` <a name="THREAT_SIGNATURES_SCANNERS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SCANNERS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_SUSPECT_ACTION_ORDER` <a name="THREAT_SIGNATURES_SUSPECT_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SUSPECT_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER` <a name="THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER" id="raindancers-cdk.nwFirewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER"></a>

---


### MulticastSupport <a name="MulticastSupport" id="raindancers-cdk.transitGateway.MulticastSupport"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.MulticastSupport.DISABLE">DISABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.MulticastSupport.ENABLE">ENABLE</a></code> | *No description.* |

---

##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.MulticastSupport.DISABLE"></a>

---


##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.MulticastSupport.ENABLE"></a>

---


### NextHop <a name="NextHop" id="raindancers-cdk.cloudNetwork.NextHop"></a>

The Destinations for Adding Routes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.CLOUDWAN">CLOUDWAN</a></code> | route to the cloudwan that the vpc is alttached to. |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.TRANSITGATEWAY">TRANSITGATEWAY</a></code> | route to the transitGateway that the vpc is attached to. |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.NWFIREWALL">NWFIREWALL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.EC2_INSTANCE">EC2_INSTANCE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.INTERNET_GATEWAY">INTERNET_GATEWAY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.IPV6_EGREGSS_ONLY">IPV6_EGREGSS_ONLY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.GLWB_ENDPOINT">GLWB_ENDPOINT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.FIREWALL_ENDPOINT">FIREWALL_ENDPOINT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.NextHop.BLACKHOLE">BLACKHOLE</a></code> | *No description.* |

---

##### `CLOUDWAN` <a name="CLOUDWAN" id="raindancers-cdk.cloudNetwork.NextHop.CLOUDWAN"></a>

route to the cloudwan that the vpc is alttached to.

---


##### `TRANSITGATEWAY` <a name="TRANSITGATEWAY" id="raindancers-cdk.cloudNetwork.NextHop.TRANSITGATEWAY"></a>

route to the transitGateway that the vpc is attached to.

---


##### `NWFIREWALL` <a name="NWFIREWALL" id="raindancers-cdk.cloudNetwork.NextHop.NWFIREWALL"></a>

---


##### `EC2_INSTANCE` <a name="EC2_INSTANCE" id="raindancers-cdk.cloudNetwork.NextHop.EC2_INSTANCE"></a>

---


##### `INTERNET_GATEWAY` <a name="INTERNET_GATEWAY" id="raindancers-cdk.cloudNetwork.NextHop.INTERNET_GATEWAY"></a>

---


##### `IPV6_EGREGSS_ONLY` <a name="IPV6_EGREGSS_ONLY" id="raindancers-cdk.cloudNetwork.NextHop.IPV6_EGREGSS_ONLY"></a>

---


##### `GLWB_ENDPOINT` <a name="GLWB_ENDPOINT" id="raindancers-cdk.cloudNetwork.NextHop.GLWB_ENDPOINT"></a>

---


##### `FIREWALL_ENDPOINT` <a name="FIREWALL_ENDPOINT" id="raindancers-cdk.cloudNetwork.NextHop.FIREWALL_ENDPOINT"></a>

---


##### `BLACKHOLE` <a name="BLACKHOLE" id="raindancers-cdk.cloudNetwork.NextHop.BLACKHOLE"></a>

---


### OrgAlarms <a name="OrgAlarms" id="raindancers-cdk.orgTools.OrgAlarms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.UNAUTHORIZED_API_CALL">UNAUTHORIZED_API_CALL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.CONSOLE_SIGNIN_WITHOUT_MFA">CONSOLE_SIGNIN_WITHOUT_MFA</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.ROOT_ACCOUNT_USE">ROOT_ACCOUNT_USE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.IAM_USER_CHANGES">IAM_USER_CHANGES</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.IAM_ROLE_CHANGES">IAM_ROLE_CHANGES</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.IAM_POLICY_CHANGES">IAM_POLICY_CHANGES</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.IAM_USER_CHANGES_SSO">IAM_USER_CHANGES_SSO</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.CLOUDTRAIL_CONFIGURATION_CHANGE">CLOUDTRAIL_CONFIGURATION_CHANGE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.SIGNIN_FAILURE">SIGNIN_FAILURE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.DISABLED_CUSTOMER_KEYS">DISABLED_CUSTOMER_KEYS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.S3_POLICY_CHANGE">S3_POLICY_CHANGE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.SECURITY_GROUP_CHANGE">SECURITY_GROUP_CHANGE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.NETWORK_ACL_CHANGE">NETWORK_ACL_CHANGE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.NETWORK_GATEWAY_CHANGE">NETWORK_GATEWAY_CHANGE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.ROUTE_TABLE_CHANGE">ROUTE_TABLE_CHANGE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.orgTools.OrgAlarms.VPC_CHANGE">VPC_CHANGE</a></code> | *No description.* |

---

##### `UNAUTHORIZED_API_CALL` <a name="UNAUTHORIZED_API_CALL" id="raindancers-cdk.orgTools.OrgAlarms.UNAUTHORIZED_API_CALL"></a>

---


##### `CONSOLE_SIGNIN_WITHOUT_MFA` <a name="CONSOLE_SIGNIN_WITHOUT_MFA" id="raindancers-cdk.orgTools.OrgAlarms.CONSOLE_SIGNIN_WITHOUT_MFA"></a>

---


##### `ROOT_ACCOUNT_USE` <a name="ROOT_ACCOUNT_USE" id="raindancers-cdk.orgTools.OrgAlarms.ROOT_ACCOUNT_USE"></a>

---


##### `IAM_USER_CHANGES` <a name="IAM_USER_CHANGES" id="raindancers-cdk.orgTools.OrgAlarms.IAM_USER_CHANGES"></a>

---


##### `IAM_ROLE_CHANGES` <a name="IAM_ROLE_CHANGES" id="raindancers-cdk.orgTools.OrgAlarms.IAM_ROLE_CHANGES"></a>

---


##### `IAM_POLICY_CHANGES` <a name="IAM_POLICY_CHANGES" id="raindancers-cdk.orgTools.OrgAlarms.IAM_POLICY_CHANGES"></a>

---


##### `IAM_USER_CHANGES_SSO` <a name="IAM_USER_CHANGES_SSO" id="raindancers-cdk.orgTools.OrgAlarms.IAM_USER_CHANGES_SSO"></a>

---


##### `CLOUDTRAIL_CONFIGURATION_CHANGE` <a name="CLOUDTRAIL_CONFIGURATION_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.CLOUDTRAIL_CONFIGURATION_CHANGE"></a>

---


##### `SIGNIN_FAILURE` <a name="SIGNIN_FAILURE" id="raindancers-cdk.orgTools.OrgAlarms.SIGNIN_FAILURE"></a>

---


##### `DISABLED_CUSTOMER_KEYS` <a name="DISABLED_CUSTOMER_KEYS" id="raindancers-cdk.orgTools.OrgAlarms.DISABLED_CUSTOMER_KEYS"></a>

---


##### `S3_POLICY_CHANGE` <a name="S3_POLICY_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.S3_POLICY_CHANGE"></a>

---


##### `SECURITY_GROUP_CHANGE` <a name="SECURITY_GROUP_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.SECURITY_GROUP_CHANGE"></a>

---


##### `NETWORK_ACL_CHANGE` <a name="NETWORK_ACL_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.NETWORK_ACL_CHANGE"></a>

---


##### `NETWORK_GATEWAY_CHANGE` <a name="NETWORK_GATEWAY_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.NETWORK_GATEWAY_CHANGE"></a>

---


##### `ROUTE_TABLE_CHANGE` <a name="ROUTE_TABLE_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.ROUTE_TABLE_CHANGE"></a>

---


##### `VPC_CHANGE` <a name="VPC_CHANGE" id="raindancers-cdk.orgTools.OrgAlarms.VPC_CHANGE"></a>

---


### PolicyType <a name="PolicyType" id="raindancers-cdk.serviceControlPolicy.PolicyType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PolicyType.AISERVICES_OPT_OUT_POLICY">AISERVICES_OPT_OUT_POLICY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PolicyType.BACKUP_POLICY">BACKUP_POLICY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PolicyType.SERVICE_CONTROL_POLICY">SERVICE_CONTROL_POLICY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.serviceControlPolicy.PolicyType.TAG_POLICY">TAG_POLICY</a></code> | *No description.* |

---

##### `AISERVICES_OPT_OUT_POLICY` <a name="AISERVICES_OPT_OUT_POLICY" id="raindancers-cdk.serviceControlPolicy.PolicyType.AISERVICES_OPT_OUT_POLICY"></a>

---


##### `BACKUP_POLICY` <a name="BACKUP_POLICY" id="raindancers-cdk.serviceControlPolicy.PolicyType.BACKUP_POLICY"></a>

---


##### `SERVICE_CONTROL_POLICY` <a name="SERVICE_CONTROL_POLICY" id="raindancers-cdk.serviceControlPolicy.PolicyType.SERVICE_CONTROL_POLICY"></a>

---


##### `TAG_POLICY` <a name="TAG_POLICY" id="raindancers-cdk.serviceControlPolicy.PolicyType.TAG_POLICY"></a>

---


### Protocol <a name="Protocol" id="raindancers-cdk.nwFirewall.Protocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.Protocol.ICMP">ICMP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.Protocol.TCP">TCP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.Protocol.UDP">UDP</a></code> | *No description.* |

---

##### `ICMP` <a name="ICMP" id="raindancers-cdk.nwFirewall.Protocol.ICMP"></a>

---


##### `TCP` <a name="TCP" id="raindancers-cdk.nwFirewall.Protocol.TCP"></a>

---


##### `UDP` <a name="UDP" id="raindancers-cdk.nwFirewall.Protocol.UDP"></a>

---


### Protocols <a name="Protocols" id="raindancers-cdk.nwFirewall.Protocols"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.Protocols.TCP">TCP</a></code> | *No description.* |

---

##### `TCP` <a name="TCP" id="raindancers-cdk.nwFirewall.Protocols.TCP"></a>

---


### ResolverDirection <a name="ResolverDirection" id="raindancers-cdk.dns.ResolverDirection"></a>

Direction of Resolver.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.dns.ResolverDirection.INBOUND">INBOUND</a></code> | Resolver is Inbound. |
| <code><a href="#raindancers-cdk.dns.ResolverDirection.OUTBOUND">OUTBOUND</a></code> | Resolver is outbound. |

---

##### `INBOUND` <a name="INBOUND" id="raindancers-cdk.dns.ResolverDirection.INBOUND"></a>

Resolver is Inbound.

---


##### `OUTBOUND` <a name="OUTBOUND" id="raindancers-cdk.dns.ResolverDirection.OUTBOUND"></a>

Resolver is outbound.

---


### ResourceGroupQueryTypes <a name="ResourceGroupQueryTypes" id="raindancers-cdk.nwFirewall.ResourceGroupQueryTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.ResourceGroupQueryTypes.TAG_FILTERS_1_0">TAG_FILTERS_1_0</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.ResourceGroupQueryTypes.CLOUDFORMATION_STACK_1_0">CLOUDFORMATION_STACK_1_0</a></code> | *No description.* |

---

##### `TAG_FILTERS_1_0` <a name="TAG_FILTERS_1_0" id="raindancers-cdk.nwFirewall.ResourceGroupQueryTypes.TAG_FILTERS_1_0"></a>

---


##### `CLOUDFORMATION_STACK_1_0` <a name="CLOUDFORMATION_STACK_1_0" id="raindancers-cdk.nwFirewall.ResourceGroupQueryTypes.CLOUDFORMATION_STACK_1_0"></a>

---


### RevokedAction <a name="RevokedAction" id="raindancers-cdk.nwFirewall.RevokedAction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.RevokedAction.PASS">PASS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.RevokedAction.DROP">DROP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.RevokedAction.UNKNOWN">UNKNOWN</a></code> | *No description.* |

---

##### `PASS` <a name="PASS" id="raindancers-cdk.nwFirewall.RevokedAction.PASS"></a>

---


##### `DROP` <a name="DROP" id="raindancers-cdk.nwFirewall.RevokedAction.DROP"></a>

---


##### `UNKNOWN` <a name="UNKNOWN" id="raindancers-cdk.nwFirewall.RevokedAction.UNKNOWN"></a>

---


### RouterFunctions <a name="RouterFunctions" id="raindancers-cdk.cloudNetwork.RouterFunctions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterFunctions.TGWAITER">TGWAITER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterFunctions.NWFIREWALL">NWFIREWALL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterFunctions.CIDR_LOOKUP">CIDR_LOOKUP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.RouterFunctions.IPV4_LOOKUP">IPV4_LOOKUP</a></code> | *No description.* |

---

##### `TGWAITER` <a name="TGWAITER" id="raindancers-cdk.cloudNetwork.RouterFunctions.TGWAITER"></a>

---


##### `NWFIREWALL` <a name="NWFIREWALL" id="raindancers-cdk.cloudNetwork.RouterFunctions.NWFIREWALL"></a>

---


##### `CIDR_LOOKUP` <a name="CIDR_LOOKUP" id="raindancers-cdk.cloudNetwork.RouterFunctions.CIDR_LOOKUP"></a>

---


##### `IPV4_LOOKUP` <a name="IPV4_LOOKUP" id="raindancers-cdk.cloudNetwork.RouterFunctions.IPV4_LOOKUP"></a>

---


### RoutingStrategy <a name="RoutingStrategy" id="raindancers-cdk.cloudNetwork.RoutingStrategy"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.RoutingStrategy.FIREWALL_INSPECTION">FIREWALL_INSPECTION</a></code> | Route via Network Firewall endpoints (default). |
| <code><a href="#raindancers-cdk.cloudNetwork.RoutingStrategy.TRANSIT_GATEWAY_INSPECTION">TRANSIT_GATEWAY_INSPECTION</a></code> | Route via Transit Gateway for inspection. |
| <code><a href="#raindancers-cdk.cloudNetwork.RoutingStrategy.DIRECT">DIRECT</a></code> | Route directly - respects subnet type (IGW for public, NAT for private). |

---

##### `FIREWALL_INSPECTION` <a name="FIREWALL_INSPECTION" id="raindancers-cdk.cloudNetwork.RoutingStrategy.FIREWALL_INSPECTION"></a>

Route via Network Firewall endpoints (default).

---


##### `TRANSIT_GATEWAY_INSPECTION` <a name="TRANSIT_GATEWAY_INSPECTION" id="raindancers-cdk.cloudNetwork.RoutingStrategy.TRANSIT_GATEWAY_INSPECTION"></a>

Route via Transit Gateway for inspection.

---


##### `DIRECT` <a name="DIRECT" id="raindancers-cdk.cloudNetwork.RoutingStrategy.DIRECT"></a>

Route directly - respects subnet type (IGW for public, NAT for private).

---


### RuleGroupType <a name="RuleGroupType" id="raindancers-cdk.nwFirewall.RuleGroupType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.RuleGroupType.STATEFUL">STATEFUL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.RuleGroupType.STATELESS">STATELESS</a></code> | *No description.* |

---

##### `STATEFUL` <a name="STATEFUL" id="raindancers-cdk.nwFirewall.RuleGroupType.STATEFUL"></a>

---


##### `STATELESS` <a name="STATELESS" id="raindancers-cdk.nwFirewall.RuleGroupType.STATELESS"></a>

---


### SecurityGroupReferencingSupport <a name="SecurityGroupReferencingSupport" id="raindancers-cdk.transitGateway.SecurityGroupReferencingSupport"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.SecurityGroupReferencingSupport.ENABLE">ENABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.SecurityGroupReferencingSupport.DISABLE">DISABLE</a></code> | *No description.* |

---

##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.SecurityGroupReferencingSupport.ENABLE"></a>

---


##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.SecurityGroupReferencingSupport.DISABLE"></a>

---


### SecurityLakeStorageClass <a name="SecurityLakeStorageClass" id="raindancers-cdk.securityLake.SecurityLakeStorageClass"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.STANDARD_IA">STANDARD_IA</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.ONEZONE_IA">ONEZONE_IA</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.INTELLIGENT_TIERING">INTELLIGENT_TIERING</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.GLACIER_IR">GLACIER_IR</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.GLACIER">GLACIER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.DEEP_ARCHIVE">DEEP_ARCHIVE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.securityLake.SecurityLakeStorageClass.EXPIRE">EXPIRE</a></code> | *No description.* |

---

##### `STANDARD_IA` <a name="STANDARD_IA" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.STANDARD_IA"></a>

---


##### `ONEZONE_IA` <a name="ONEZONE_IA" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.ONEZONE_IA"></a>

---


##### `INTELLIGENT_TIERING` <a name="INTELLIGENT_TIERING" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.INTELLIGENT_TIERING"></a>

---


##### `GLACIER_IR` <a name="GLACIER_IR" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.GLACIER_IR"></a>

---


##### `GLACIER` <a name="GLACIER" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.GLACIER"></a>

---


##### `DEEP_ARCHIVE` <a name="DEEP_ARCHIVE" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.DEEP_ARCHIVE"></a>

---


##### `EXPIRE` <a name="EXPIRE" id="raindancers-cdk.securityLake.SecurityLakeStorageClass.EXPIRE"></a>

---


### Services <a name="Services" id="raindancers-cdk.cloudNetwork.Services"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.Services.NWFIREWALL_ENDPOINT">NWFIREWALL_ENDPOINT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.Services.NATGATEWAY">NATGATEWAY</a></code> | *No description.* |

---

##### `NWFIREWALL_ENDPOINT` <a name="NWFIREWALL_ENDPOINT" id="raindancers-cdk.cloudNetwork.Services.NWFIREWALL_ENDPOINT"></a>

---


##### `NATGATEWAY` <a name="NATGATEWAY" id="raindancers-cdk.cloudNetwork.Services.NATGATEWAY"></a>

---


### Severity <a name="Severity" id="raindancers-cdk.cloudtrailMonitor.Severity"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.Severity.LOW">LOW</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.Severity.MEDIUM">MEDIUM</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.Severity.HIGH">HIGH</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudtrailMonitor.Severity.CRITICAL">CRITICAL</a></code> | *No description.* |

---

##### `LOW` <a name="LOW" id="raindancers-cdk.cloudtrailMonitor.Severity.LOW"></a>

---


##### `MEDIUM` <a name="MEDIUM" id="raindancers-cdk.cloudtrailMonitor.Severity.MEDIUM"></a>

---


##### `HIGH` <a name="HIGH" id="raindancers-cdk.cloudtrailMonitor.Severity.HIGH"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="raindancers-cdk.cloudtrailMonitor.Severity.CRITICAL"></a>

---


### SSOPrincipalType <a name="SSOPrincipalType" id="raindancers-cdk.sso.SSOPrincipalType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.SSOPrincipalType.USER">USER</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.sso.SSOPrincipalType.GROUP">GROUP</a></code> | *No description.* |

---

##### `USER` <a name="USER" id="raindancers-cdk.sso.SSOPrincipalType.USER"></a>

---


##### `GROUP` <a name="GROUP" id="raindancers-cdk.sso.SSOPrincipalType.GROUP"></a>

---


### StackType <a name="StackType" id="raindancers-cdk.cloudNetwork.StackType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.StackType.IPV4_ONLY">IPV4_ONLY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.StackType.IPV6_ONLY">IPV6_ONLY</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.StackType.DUAL_STACK">DUAL_STACK</a></code> | *No description.* |

---

##### `IPV4_ONLY` <a name="IPV4_ONLY" id="raindancers-cdk.cloudNetwork.StackType.IPV4_ONLY"></a>

---


##### `IPV6_ONLY` <a name="IPV6_ONLY" id="raindancers-cdk.cloudNetwork.StackType.IPV6_ONLY"></a>

---


##### `DUAL_STACK` <a name="DUAL_STACK" id="raindancers-cdk.cloudNetwork.StackType.DUAL_STACK"></a>

---


### StatefulAction <a name="StatefulAction" id="raindancers-cdk.nwFirewall.StatefulAction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulAction.PASS">PASS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulAction.DROP">DROP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulAction.STATEFUL">STATEFUL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulAction.ALERT">ALERT</a></code> | *No description.* |

---

##### `PASS` <a name="PASS" id="raindancers-cdk.nwFirewall.StatefulAction.PASS"></a>

---


##### `DROP` <a name="DROP" id="raindancers-cdk.nwFirewall.StatefulAction.DROP"></a>

---


##### `STATEFUL` <a name="STATEFUL" id="raindancers-cdk.nwFirewall.StatefulAction.STATEFUL"></a>

---


##### `ALERT` <a name="ALERT" id="raindancers-cdk.nwFirewall.StatefulAction.ALERT"></a>

---


### StatefulDefaultActions <a name="StatefulDefaultActions" id="raindancers-cdk.nwFirewall.StatefulDefaultActions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulDefaultActions.DROP_STRICT">DROP_STRICT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulDefaultActions.DROP_ESTABLISHED">DROP_ESTABLISHED</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulDefaultActions.ALERT_STRICT">ALERT_STRICT</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatefulDefaultActions.ALERT_ESTABLISHED">ALERT_ESTABLISHED</a></code> | *No description.* |

---

##### `DROP_STRICT` <a name="DROP_STRICT" id="raindancers-cdk.nwFirewall.StatefulDefaultActions.DROP_STRICT"></a>

---


##### `DROP_ESTABLISHED` <a name="DROP_ESTABLISHED" id="raindancers-cdk.nwFirewall.StatefulDefaultActions.DROP_ESTABLISHED"></a>

---


##### `ALERT_STRICT` <a name="ALERT_STRICT" id="raindancers-cdk.nwFirewall.StatefulDefaultActions.ALERT_STRICT"></a>

---


##### `ALERT_ESTABLISHED` <a name="ALERT_ESTABLISHED" id="raindancers-cdk.nwFirewall.StatefulDefaultActions.ALERT_ESTABLISHED"></a>

---


### StatelessActions <a name="StatelessActions" id="raindancers-cdk.nwFirewall.StatelessActions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessActions.PASS">PASS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessActions.DROP">DROP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.StatelessActions.STATEFUL">STATEFUL</a></code> | *No description.* |

---

##### `PASS` <a name="PASS" id="raindancers-cdk.nwFirewall.StatelessActions.PASS"></a>

---


##### `DROP` <a name="DROP" id="raindancers-cdk.nwFirewall.StatelessActions.DROP"></a>

---


##### `STATEFUL` <a name="STATEFUL" id="raindancers-cdk.nwFirewall.StatelessActions.STATEFUL"></a>

---


### SubnetPersonality <a name="SubnetPersonality" id="raindancers-cdk.cloudNetwork.SubnetPersonality"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.PRIVATE_WITH_EGRESS">PRIVATE_WITH_EGRESS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.PRIVATE">PRIVATE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.FIREWALL">FIREWALL</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.DMZ">DMZ</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.PUBLIC_INGRESS">PUBLIC_INGRESS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.PUBLIC_EGRESS">PUBLIC_EGRESS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.LINKNET">LINKNET</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.cloudNetwork.SubnetPersonality.ZEROTRUST_INGRESS">ZEROTRUST_INGRESS</a></code> | *No description.* |

---

##### `PRIVATE_WITH_EGRESS` <a name="PRIVATE_WITH_EGRESS" id="raindancers-cdk.cloudNetwork.SubnetPersonality.PRIVATE_WITH_EGRESS"></a>

---


##### `PRIVATE` <a name="PRIVATE" id="raindancers-cdk.cloudNetwork.SubnetPersonality.PRIVATE"></a>

---


##### `FIREWALL` <a name="FIREWALL" id="raindancers-cdk.cloudNetwork.SubnetPersonality.FIREWALL"></a>

---


##### `DMZ` <a name="DMZ" id="raindancers-cdk.cloudNetwork.SubnetPersonality.DMZ"></a>

---


##### `PUBLIC_INGRESS` <a name="PUBLIC_INGRESS" id="raindancers-cdk.cloudNetwork.SubnetPersonality.PUBLIC_INGRESS"></a>

---


##### `PUBLIC_EGRESS` <a name="PUBLIC_EGRESS" id="raindancers-cdk.cloudNetwork.SubnetPersonality.PUBLIC_EGRESS"></a>

---


##### `LINKNET` <a name="LINKNET" id="raindancers-cdk.cloudNetwork.SubnetPersonality.LINKNET"></a>

---


##### `ZEROTRUST_INGRESS` <a name="ZEROTRUST_INGRESS" id="raindancers-cdk.cloudNetwork.SubnetPersonality.ZEROTRUST_INGRESS"></a>

---


### SubnetWildCards <a name="SubnetWildCards" id="raindancers-cdk.enterprisevpc.SubnetWildCards"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.enterprisevpc.SubnetWildCards.ALLSUBNETS">ALLSUBNETS</a></code> | *No description.* |

---

##### `ALLSUBNETS` <a name="ALLSUBNETS" id="raindancers-cdk.enterprisevpc.SubnetWildCards.ALLSUBNETS"></a>

---


### TargetTypes <a name="TargetTypes" id="raindancers-cdk.nwFirewall.TargetTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.TargetTypes.TLS_SNI">TLS_SNI</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.TargetTypes.HTTP_HOST">HTTP_HOST</a></code> | *No description.* |

---

##### `TLS_SNI` <a name="TLS_SNI" id="raindancers-cdk.nwFirewall.TargetTypes.TLS_SNI"></a>

---


##### `HTTP_HOST` <a name="HTTP_HOST" id="raindancers-cdk.nwFirewall.TargetTypes.HTTP_HOST"></a>

---


### TargetTypes <a name="TargetTypes" id="raindancers-cdk.sso.TargetTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.sso.TargetTypes.AWS_ACCOUNT">AWS_ACCOUNT</a></code> | *No description.* |

---

##### `AWS_ACCOUNT` <a name="AWS_ACCOUNT" id="raindancers-cdk.sso.TargetTypes.AWS_ACCOUNT"></a>

---


### TemplateStack <a name="TemplateStack" id="raindancers-cdk.orgTools.TemplateStack"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.orgTools.TemplateStack.IAM_ALIAS">IAM_ALIAS</a></code> | *No description.* |

---

##### `IAM_ALIAS` <a name="IAM_ALIAS" id="raindancers-cdk.orgTools.TemplateStack.IAM_ALIAS"></a>

---


### VpnEcmpSupport <a name="VpnEcmpSupport" id="raindancers-cdk.transitGateway.VpnEcmpSupport"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transitGateway.VpnEcmpSupport.DISABLE">DISABLE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transitGateway.VpnEcmpSupport.ENABLE">ENABLE</a></code> | *No description.* |

---

##### `DISABLE` <a name="DISABLE" id="raindancers-cdk.transitGateway.VpnEcmpSupport.DISABLE"></a>

---


##### `ENABLE` <a name="ENABLE" id="raindancers-cdk.transitGateway.VpnEcmpSupport.ENABLE"></a>

---


### WellKnownPorts <a name="WellKnownPorts" id="raindancers-cdk.nwFirewall.WellKnownPorts"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.nwFirewall.WellKnownPorts.SSH">SSH</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.WellKnownPorts.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.WellKnownPorts.HTTPS">HTTPS</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.nwFirewall.WellKnownPorts.RDP">RDP</a></code> | *No description.* |

---

##### `SSH` <a name="SSH" id="raindancers-cdk.nwFirewall.WellKnownPorts.SSH"></a>

---


##### `HTTP` <a name="HTTP" id="raindancers-cdk.nwFirewall.WellKnownPorts.HTTP"></a>

---


##### `HTTPS` <a name="HTTPS" id="raindancers-cdk.nwFirewall.WellKnownPorts.HTTPS"></a>

---


##### `RDP` <a name="RDP" id="raindancers-cdk.nwFirewall.WellKnownPorts.RDP"></a>

---

