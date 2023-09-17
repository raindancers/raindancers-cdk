# raindancers-cdk
raindancers-cdk

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Structs <a name="Structs" id="Structs"></a>

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



## Protocols <a name="Protocols" id="Protocols"></a>

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

## Enums <a name="Enums" id="Enums"></a>

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

