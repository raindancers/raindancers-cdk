# raindancers-cdk
raindancers-cdk

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Structs <a name="Structs" id="Structs"></a>

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
| <code><a href="#raindancers-cdk.eventalerts.EventToTeamsProps.property.teamsUrl">teamsUrl</a></code> | <code>string</code> | *No description.* |

---

##### `teamsUrl`<sup>Required</sup> <a name="teamsUrl" id="raindancers-cdk.eventalerts.EventToTeamsProps.property.teamsUrl"></a>

```typescript
public readonly teamsUrl: string;
```

- *Type:* string

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



## Protocols <a name="Protocols" id="Protocols"></a>

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

