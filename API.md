# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### ConstructResourceCriteriaAssertOptions <a name="ConstructResourceCriteriaAssertOptions" id="resource-criteria-validator.ConstructResourceCriteriaAssertOptions"></a>

Options for {@link ResourceCriteriaValidator} assertion helpers.

#### Initializer <a name="Initializer" id="resource-criteria-validator.ConstructResourceCriteriaAssertOptions.Initializer"></a>

```typescript
import { ConstructResourceCriteriaAssertOptions } from 'resource-criteria-validator'

const constructResourceCriteriaAssertOptions: ConstructResourceCriteriaAssertOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#resource-criteria-validator.ConstructResourceCriteriaAssertOptions.property.propPath">propPath</a></code> | <code>string</code> | Property path included in the error message. |

---

##### `propPath`<sup>Optional</sup> <a name="propPath" id="resource-criteria-validator.ConstructResourceCriteriaAssertOptions.property.propPath"></a>

```typescript
public readonly propPath: string;
```

- *Type:* string
- *Default:* tagCriteria

Property path included in the error message.

A single object uses a path such as `tagCriteria`.
A list uses a path such as `props.tags` (indexed as `props.tags[0]`).

---

### ConstructResourceTagCriteria <a name="ConstructResourceTagCriteria" id="resource-criteria-validator.ConstructResourceTagCriteria"></a>

Tag key/value criteria used to match resources.

#### Initializer <a name="Initializer" id="resource-criteria-validator.ConstructResourceTagCriteria.Initializer"></a>

```typescript
import { ConstructResourceTagCriteria } from 'resource-criteria-validator'

const constructResourceTagCriteria: ConstructResourceTagCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#resource-criteria-validator.ConstructResourceTagCriteria.property.tagKey">tagKey</a></code> | <code>string</code> | Tag key to match (for example, `Environment` or `AutoStartPrevent`). |
| <code><a href="#resource-criteria-validator.ConstructResourceTagCriteria.property.tagValues">tagValues</a></code> | <code>string[]</code> | Allowed tag values (for example, `["production"]` or `["YES"]`). |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="resource-criteria-validator.ConstructResourceTagCriteria.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Tag key to match (for example, `Environment` or `AutoStartPrevent`).

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="resource-criteria-validator.ConstructResourceTagCriteria.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

Allowed tag values (for example, `["production"]` or `["YES"]`).

At least one value is required.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceCriteriaValidator <a name="ResourceCriteriaValidator" id="resource-criteria-validator.ResourceCriteriaValidator"></a>

Helpers for construct resource criteria.

#### Initializers <a name="Initializers" id="resource-criteria-validator.ResourceCriteriaValidator.Initializer"></a>

```typescript
import { ResourceCriteriaValidator } from 'resource-criteria-validator'

new ResourceCriteriaValidator()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#resource-criteria-validator.ResourceCriteriaValidator.assertTagCriteria">assertTagCriteria</a></code> | Throws if `criteria` has a blank tag key or an empty/blank tag value list. |
| <code><a href="#resource-criteria-validator.ResourceCriteriaValidator.resolveTagCriteria">resolveTagCriteria</a></code> | Validates a tag criteria list and returns a copy. |

---

##### `assertTagCriteria` <a name="assertTagCriteria" id="resource-criteria-validator.ResourceCriteriaValidator.assertTagCriteria"></a>

```typescript
import { ResourceCriteriaValidator } from 'resource-criteria-validator'

ResourceCriteriaValidator.assertTagCriteria(criteria: ConstructResourceTagCriteria, options?: ConstructResourceCriteriaAssertOptions)
```

Throws if `criteria` has a blank tag key or an empty/blank tag value list.

###### `criteria`<sup>Required</sup> <a name="criteria" id="resource-criteria-validator.ResourceCriteriaValidator.assertTagCriteria.parameter.criteria"></a>

- *Type:* <a href="#resource-criteria-validator.ConstructResourceTagCriteria">ConstructResourceTagCriteria</a>

Tag criteria to validate.

---

###### `options`<sup>Optional</sup> <a name="options" id="resource-criteria-validator.ResourceCriteriaValidator.assertTagCriteria.parameter.options"></a>

- *Type:* <a href="#resource-criteria-validator.ConstructResourceCriteriaAssertOptions">ConstructResourceCriteriaAssertOptions</a>

Assertion options.

---

##### `resolveTagCriteria` <a name="resolveTagCriteria" id="resource-criteria-validator.ResourceCriteriaValidator.resolveTagCriteria"></a>

```typescript
import { ResourceCriteriaValidator } from 'resource-criteria-validator'

ResourceCriteriaValidator.resolveTagCriteria(criteria: ConstructResourceTagCriteria[], options?: ConstructResourceCriteriaAssertOptions)
```

Validates a tag criteria list and returns a copy.

Rejects an empty list. Each entry is validated with
{@link ResourceCriteriaValidator.assertTagCriteria} before `tagKey` uniqueness
is checked. `tagKey` values must be unique by exact match, without trimming.
The result is a new array of new objects, each with a new `tagValues` array.
The input list is left unchanged.

###### `criteria`<sup>Required</sup> <a name="criteria" id="resource-criteria-validator.ResourceCriteriaValidator.resolveTagCriteria.parameter.criteria"></a>

- *Type:* <a href="#resource-criteria-validator.ConstructResourceTagCriteria">ConstructResourceTagCriteria</a>[]

Tag criteria list to validate.

---

###### `options`<sup>Optional</sup> <a name="options" id="resource-criteria-validator.ResourceCriteriaValidator.resolveTagCriteria.parameter.options"></a>

- *Type:* <a href="#resource-criteria-validator.ConstructResourceCriteriaAssertOptions">ConstructResourceCriteriaAssertOptions</a>

Assertion options.

`propPath` defaults to `tagCriteria`.

---




