# raindancers-cdk
raindancers-cdk

This is the raindancer cdk collection of constructs that supplment the aws-cdk-lib.

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


### TransferServer <a name="TransferServer" id="raindancers-cdk.transfer.TransferServer"></a>

- *Implements:* raindancers-cdk.transfer.ITransferServer

Define a TransitGateway.

Implements ITransitGateway

#### Initializers <a name="Initializers" id="raindancers-cdk.transfer.TransferServer.Initializer"></a>

```typescript
import { transfer } from 'raindancers-cdk'

new transfer.TransferServer(scope: Construct, id: string, props: TransferServerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the transfer server. |
| <code><a href="#raindancers-cdk.transfer.TransferServer.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.transfer.TransferServerProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.transfer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transfer.TransferServer.Initializer.parameter.id"></a>

- *Type:* string

The ID of the transfer server.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.transfer.TransferServer.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.transfer.TransferServerProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-cdk.transfer.TransferServer.adduser">adduser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-cdk.transfer.TransferServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `adduser` <a name="adduser" id="raindancers-cdk.transfer.TransferServer.adduser"></a>

```typescript
public adduser(props: AddUserProps): ITransferUser
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.transfer.TransferServer.adduser.parameter.props"></a>

- *Type:* raindancers-cdk.transfer.AddUserProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.transfer.TransferServer.isConstruct"></a>

```typescript
import { transfer } from 'raindancers-cdk'

transfer.TransferServer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.transfer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.transfer.TransferServer.property.arn">arn</a></code> | <code>string</code> | The Arn of the Transfer Server. |
| <code><a href="#raindancers-cdk.transfer.TransferServer.property.id">id</a></code> | <code>string</code> | The id of the transitGateway. |
| <code><a href="#raindancers-cdk.transfer.TransferServer.property.hostname">hostname</a></code> | <code>string</code> | Internet Hostname. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.transfer.TransferServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.transfer.TransferServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The Arn of the Transfer Server.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transfer.TransferServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the transitGateway.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="raindancers-cdk.transfer.TransferServer.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Internet Hostname.

---


### TransferUser <a name="TransferUser" id="raindancers-cdk.transfer.TransferUser"></a>

- *Implements:* raindancers-cdk.transfer.ITransferUser

Define a TransitGateway.

Implements ITransitGateway

#### Initializers <a name="Initializers" id="raindancers-cdk.transfer.TransferUser.Initializer"></a>

```typescript
import { transfer } from 'raindancers-cdk'

new transfer.TransferUser(scope: Construct, id: string, props: TransferUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The ID of the transfer user. |
| <code><a href="#raindancers-cdk.transfer.TransferUser.Initializer.parameter.props">props</a></code> | <code>raindancers-cdk.transfer.TransferUserProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-cdk.transfer.TransferUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transfer.TransferUser.Initializer.parameter.id"></a>

- *Type:* string

The ID of the transfer user.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-cdk.transfer.TransferUser.Initializer.parameter.props"></a>

- *Type:* raindancers-cdk.transfer.TransferUserProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferUser.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-cdk.transfer.TransferUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-cdk.transfer.TransferUser.isConstruct"></a>

```typescript
import { transfer } from 'raindancers-cdk'

transfer.TransferUser.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-cdk.transfer.TransferUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-cdk.transfer.TransferUser.property.arn">arn</a></code> | <code>string</code> | The arn of the transfer user. |
| <code><a href="#raindancers-cdk.transfer.TransferUser.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferUser.property.id">id</a></code> | <code>string</code> | The id of the transfer User. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-cdk.transfer.TransferUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.transfer.TransferUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The arn of the transfer user.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-cdk.transfer.TransferUser.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transfer.TransferUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the transfer User.

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

### AddUserProps <a name="AddUserProps" id="raindancers-cdk.transfer.AddUserProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transfer.AddUserProps.Initializer"></a>

```typescript
import { transfer } from 'raindancers-cdk'

const addUserProps: transfer.AddUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.publicKeys">publicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.permissions">permissions</a></code> | <code>raindancers-cdk.transfer.Permission</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Policy. |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.AddUserProps.property.s3LambdaIntegrations">s3LambdaIntegrations</a></code> | <code>raindancers-cdk.transfer.S3LambdaIntegration[]</code> | *No description.* |

---

##### `publicKeys`<sup>Required</sup> <a name="publicKeys" id="raindancers-cdk.transfer.AddUserProps.property.publicKeys"></a>

```typescript
public readonly publicKeys: string[];
```

- *Type:* string[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="raindancers-cdk.transfer.AddUserProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="raindancers-cdk.transfer.AddUserProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="raindancers-cdk.transfer.AddUserProps.property.permissions"></a>

```typescript
public readonly permissions: Permission;
```

- *Type:* raindancers-cdk.transfer.Permission

---

##### `policy`<sup>Optional</sup> <a name="policy" id="raindancers-cdk.transfer.AddUserProps.property.policy"></a>

```typescript
public readonly policy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* Default Policy statement.

Policy.

---

##### `role`<sup>Optional</sup> <a name="role" id="raindancers-cdk.transfer.AddUserProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `s3LambdaIntegrations`<sup>Optional</sup> <a name="s3LambdaIntegrations" id="raindancers-cdk.transfer.AddUserProps.property.s3LambdaIntegrations"></a>

```typescript
public readonly s3LambdaIntegrations: S3LambdaIntegration[];
```

- *Type:* raindancers-cdk.transfer.S3LambdaIntegration[]

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
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
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


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="raindancers-cdk.orgTools.CloudTrailAlarmsProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

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

Stack tags that will be applied to all the taggable resources and the stack itself.

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

### S3LambdaIntegration <a name="S3LambdaIntegration" id="raindancers-cdk.transfer.S3LambdaIntegration"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transfer.S3LambdaIntegration.Initializer"></a>

```typescript
import { transfer } from 'raindancers-cdk'

const s3LambdaIntegration: transfer.S3LambdaIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.S3LambdaIntegration.property.eventTypes">eventTypes</a></code> | <code>aws-cdk-lib.aws_s3.EventType[]</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.S3LambdaIntegration.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.S3LambdaIntegration.property.lambdaRoleArn">lambdaRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.S3LambdaIntegration.property.s3Permission">s3Permission</a></code> | <code>raindancers-cdk.transfer.Permission</code> | *No description.* |

---

##### `eventTypes`<sup>Required</sup> <a name="eventTypes" id="raindancers-cdk.transfer.S3LambdaIntegration.property.eventTypes"></a>

```typescript
public readonly eventTypes: EventType[];
```

- *Type:* aws-cdk-lib.aws_s3.EventType[]

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="raindancers-cdk.transfer.S3LambdaIntegration.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaRoleArn`<sup>Optional</sup> <a name="lambdaRoleArn" id="raindancers-cdk.transfer.S3LambdaIntegration.property.lambdaRoleArn"></a>

```typescript
public readonly lambdaRoleArn: string;
```

- *Type:* string

---

##### `s3Permission`<sup>Optional</sup> <a name="s3Permission" id="raindancers-cdk.transfer.S3LambdaIntegration.property.s3Permission"></a>

```typescript
public readonly s3Permission: Permission;
```

- *Type:* raindancers-cdk.transfer.Permission

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

### TransferServerProps <a name="TransferServerProps" id="raindancers-cdk.transfer.TransferServerProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transfer.TransferServerProps.Initializer"></a>

```typescript
import { transfer } from 'raindancers-cdk'

const transferServerProps: transfer.TransferServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.domain">domain</a></code> | <code>raindancers-cdk.transfer.StorageType</code> | Specifies the domain of the storage system that is used for file transfers. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.protocols">protocols</a></code> | <code>raindancers-cdk.transfer.Protocol[]</code> | Protocols The protocol settings that are configured for your server. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate A certificate is required if the protocol is set to FTP. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.disableLogging">disableLogging</a></code> | <code>boolean</code> | disable logging. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.endpointType">endpointType</a></code> | <code>raindancers-cdk.transfer.EndpointType</code> | The endpoint type that you want your transfer server to be. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.identityProviderType">identityProviderType</a></code> | <code>raindancers-cdk.transfer.IdentityProviderType</code> | identity Provider Type. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.logDestinations">logDestinations</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup[]</code> | log destination. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.loggingRole">loggingRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging  for Amazon S3 or Amazon EFSevents. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>string</code> | This string is displayed after the user authenticates. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>string</code> | This string is displayed before the user authenticates. |
| <code><a href="#raindancers-cdk.transfer.TransferServerProps.property.securityPolicy">securityPolicy</a></code> | <code>raindancers-cdk.transfer.SecurityPolicy</code> | Security Policy. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="raindancers-cdk.transfer.TransferServerProps.property.domain"></a>

```typescript
public readonly domain: StorageType;
```

- *Type:* raindancers-cdk.transfer.StorageType

Specifies the domain of the storage system that is used for file transfers.

See also: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-domain

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="raindancers-cdk.transfer.TransferServerProps.property.protocols"></a>

```typescript
public readonly protocols: Protocol[];
```

- *Type:* raindancers-cdk.transfer.Protocol[]

Protocols The protocol settings that are configured for your server.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="raindancers-cdk.transfer.TransferServerProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate A certificate is required if the protocol is set to FTP.

---

##### `disableLogging`<sup>Optional</sup> <a name="disableLogging" id="raindancers-cdk.transfer.TransferServerProps.property.disableLogging"></a>

```typescript
public readonly disableLogging: boolean;
```

- *Type:* boolean
- *Default:* : false

disable logging.

We have to explicity opt out of logging.

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="raindancers-cdk.transfer.TransferServerProps.property.endpointType"></a>

```typescript
public readonly endpointType: EndpointType;
```

- *Type:* raindancers-cdk.transfer.EndpointType
- *Default:* EndpointType.PUBLIC

The endpoint type that you want your transfer server to be.

---

##### `identityProviderType`<sup>Optional</sup> <a name="identityProviderType" id="raindancers-cdk.transfer.TransferServerProps.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: IdentityProviderType;
```

- *Type:* raindancers-cdk.transfer.IdentityProviderType
- *Default:* SERVICE_MANAGED

identity Provider Type.

---

##### `logDestinations`<sup>Optional</sup> <a name="logDestinations" id="raindancers-cdk.transfer.TransferServerProps.property.logDestinations"></a>

```typescript
public readonly logDestinations: ILogGroup[];
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup[]

log destination.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="raindancers-cdk.transfer.TransferServerProps.property.loggingRole"></a>

```typescript
public readonly loggingRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging  for Amazon S3 or Amazon EFSevents.

---

##### `postAuthenticationLoginBanner`<sup>Optional</sup> <a name="postAuthenticationLoginBanner" id="raindancers-cdk.transfer.TransferServerProps.property.postAuthenticationLoginBanner"></a>

```typescript
public readonly postAuthenticationLoginBanner: string;
```

- *Type:* string

This string is displayed after the user authenticates.

---

##### `preAuthenticationLoginBanner`<sup>Optional</sup> <a name="preAuthenticationLoginBanner" id="raindancers-cdk.transfer.TransferServerProps.property.preAuthenticationLoginBanner"></a>

```typescript
public readonly preAuthenticationLoginBanner: string;
```

- *Type:* string

This string is displayed before the user authenticates.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="raindancers-cdk.transfer.TransferServerProps.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: SecurityPolicy;
```

- *Type:* raindancers-cdk.transfer.SecurityPolicy

Security Policy.

---

### TransferUserProps <a name="TransferUserProps" id="raindancers-cdk.transfer.TransferUserProps"></a>

#### Initializer <a name="Initializer" id="raindancers-cdk.transfer.TransferUserProps.Initializer"></a>

```typescript
import { transfer } from 'raindancers-cdk'

const transferUserProps: transfer.TransferUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.TransferUserProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferUserProps.property.publicKeys">publicKeys</a></code> | <code>string[]</code> | ssh publickeys. |
| <code><a href="#raindancers-cdk.transfer.TransferUserProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferUserProps.property.transferServer">transferServer</a></code> | <code>raindancers-cdk.transfer.ITransferServer</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferUserProps.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.TransferUserProps.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Policy. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-cdk.transfer.TransferUserProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `publicKeys`<sup>Required</sup> <a name="publicKeys" id="raindancers-cdk.transfer.TransferUserProps.property.publicKeys"></a>

```typescript
public readonly publicKeys: string[];
```

- *Type:* string[]

ssh publickeys.

---

##### `role`<sup>Required</sup> <a name="role" id="raindancers-cdk.transfer.TransferUserProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `transferServer`<sup>Required</sup> <a name="transferServer" id="raindancers-cdk.transfer.TransferUserProps.property.transferServer"></a>

```typescript
public readonly transferServer: ITransferServer;
```

- *Type:* raindancers-cdk.transfer.ITransferServer

---

##### `userName`<sup>Required</sup> <a name="userName" id="raindancers-cdk.transfer.TransferUserProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `policy`<sup>Optional</sup> <a name="policy" id="raindancers-cdk.transfer.TransferUserProps.property.policy"></a>

```typescript
public readonly policy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* Default Policy statement.

Policy.

---

## Classes <a name="Classes" id="Classes"></a>

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


## Protocols <a name="Protocols" id="Protocols"></a>

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

### ITransferServer <a name="ITransferServer" id="raindancers-cdk.transfer.ITransferServer"></a>

- *Implemented By:* raindancers-cdk.transfer.TransferServer, raindancers-cdk.transfer.ITransferServer

Implmented by `ITransferServer`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.ITransferServer.property.arn">arn</a></code> | <code>string</code> | A private Autonomous System Number (ASN) for the Amazon side of a BGP session. |
| <code><a href="#raindancers-cdk.transfer.ITransferServer.property.id">id</a></code> | <code>string</code> | The ID of the transfer server. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.transfer.ITransferServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

A private Autonomous System Number (ASN) for the Amazon side of a BGP session.

See also: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-certificate

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transfer.ITransferServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the transfer server.

---

### ITransferUser <a name="ITransferUser" id="raindancers-cdk.transfer.ITransferUser"></a>

- *Implemented By:* raindancers-cdk.transfer.TransferUser, raindancers-cdk.transfer.ITransferUser


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-cdk.transfer.ITransferUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.ITransferUser.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.ITransferUser.property.id">id</a></code> | <code>string</code> | The ID of the transfer user. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="raindancers-cdk.transfer.ITransferUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-cdk.transfer.ITransferUser.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-cdk.transfer.ITransferUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the transfer user.

---

## Enums <a name="Enums" id="Enums"></a>

### EndpointType <a name="EndpointType" id="raindancers-cdk.transfer.EndpointType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.EndpointType.PUBLIC">PUBLIC</a></code> | *No description.* |

---

##### `PUBLIC` <a name="PUBLIC" id="raindancers-cdk.transfer.EndpointType.PUBLIC"></a>

---


### IdentityProviderType <a name="IdentityProviderType" id="raindancers-cdk.transfer.IdentityProviderType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.IdentityProviderType.SERVICE_MANAGED">SERVICE_MANAGED</a></code> | *No description.* |

---

##### `SERVICE_MANAGED` <a name="SERVICE_MANAGED" id="raindancers-cdk.transfer.IdentityProviderType.SERVICE_MANAGED"></a>

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


### Permission <a name="Permission" id="raindancers-cdk.transfer.Permission"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.Permission.READ">READ</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.Permission.WRITE">WRITE</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.Permission.READ_WRITE">READ_WRITE</a></code> | *No description.* |

---

##### `READ` <a name="READ" id="raindancers-cdk.transfer.Permission.READ"></a>

---


##### `WRITE` <a name="WRITE" id="raindancers-cdk.transfer.Permission.WRITE"></a>

---


##### `READ_WRITE` <a name="READ_WRITE" id="raindancers-cdk.transfer.Permission.READ_WRITE"></a>

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


### Protocol <a name="Protocol" id="raindancers-cdk.transfer.Protocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.Protocol.SFTP">SFTP</a></code> | SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH. |

---

##### `SFTP` <a name="SFTP" id="raindancers-cdk.transfer.Protocol.SFTP"></a>

SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH.

---


### SecurityPolicy <a name="SecurityPolicy" id="raindancers-cdk.transfer.SecurityPolicy"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05">TRANSFER_SECURITY_POLICY_2023_05</a></code> | https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html#pq-policies. |
| <code><a href="#raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2022_03">TRANSFER_SECURITY_POLICY_2022_03</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2020_06">TRANSFER_SECURITY_POLICY_2020_06</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2018_11">TRANSFER_SECURITY_POLICY_2018_11</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_PQ_SSH_EXPERIMENTAL_2023_04">TRANSFER_SECURITY_POLICY_PQ_SSH_EXPERIMENTAL_2023_04</a></code> | *No description.* |
| <code><a href="#raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_PQ_SSH_FIPS_2023_04">TRANSFER_SECURITY_POLICY_PQ_SSH_FIPS_2023_04</a></code> | *No description.* |

---

##### `TRANSFER_SECURITY_POLICY_2023_05` <a name="TRANSFER_SECURITY_POLICY_2023_05" id="raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2023_05"></a>

https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html#pq-policies.

---


##### `TRANSFER_SECURITY_POLICY_2022_03` <a name="TRANSFER_SECURITY_POLICY_2022_03" id="raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2022_03"></a>

---


##### `TRANSFER_SECURITY_POLICY_2020_06` <a name="TRANSFER_SECURITY_POLICY_2020_06" id="raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2020_06"></a>

---


##### `TRANSFER_SECURITY_POLICY_2018_11` <a name="TRANSFER_SECURITY_POLICY_2018_11" id="raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_2018_11"></a>

---


##### `TRANSFER_SECURITY_POLICY_PQ_SSH_EXPERIMENTAL_2023_04` <a name="TRANSFER_SECURITY_POLICY_PQ_SSH_EXPERIMENTAL_2023_04" id="raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_PQ_SSH_EXPERIMENTAL_2023_04"></a>

---


##### `TRANSFER_SECURITY_POLICY_PQ_SSH_FIPS_2023_04` <a name="TRANSFER_SECURITY_POLICY_PQ_SSH_FIPS_2023_04" id="raindancers-cdk.transfer.SecurityPolicy.TRANSFER_SECURITY_POLICY_PQ_SSH_FIPS_2023_04"></a>

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


### StorageType <a name="StorageType" id="raindancers-cdk.transfer.StorageType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-cdk.transfer.StorageType.S3">S3</a></code> | *No description.* |

---

##### `S3` <a name="S3" id="raindancers-cdk.transfer.StorageType.S3"></a>

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

