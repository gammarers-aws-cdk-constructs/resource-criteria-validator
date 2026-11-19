# Resource Criteria Validator (CDK v2)

[![npm version](https://img.shields.io/npm/v/resource-criteria-validator?style=flat-square)](https://www.npmjs.com/package/resource-criteria-validator)
[![license](https://img.shields.io/npm/l/resource-criteria-validator?style=flat-square)](https://www.npmjs.com/package/resource-criteria-validator)
[![Node.js](https://img.shields.io/node/v/resource-criteria-validator?style=flat-square)](https://www.npmjs.com/package/resource-criteria-validator)
[![build](https://img.shields.io/github/actions/workflow/status/gammarers-aws-cdk-constructs/resource-criteria-validator/build.yml?label=build&style=flat-square)](https://github.com/gammarers-aws-cdk-constructs/resource-criteria-validator/actions/workflows/build.yml)

[![View on Construct Hub](https://constructs.dev/badge?package=resource-criteria-validator)](https://constructs.dev/packages/resource-criteria-validator)

Helpers for CDK construct resource criteria. Validate tag key/value criteria and reject blank strings in property paths.

## Features

- Validate `ConstructResourceTagCriteria` tag key and values
- Validate a list of tag criteria, reject an empty list and duplicate tag keys, and return a copy
- Reject empty or whitespace-only strings and string lists
- Include a property path in thrown `Error` messages

## How it works

Pass tag criteria to `ResourceCriteriaValidator` before using it.

- `assertTagCriteria` checks one criteria object. A blank `tagKey`, or an empty or blank `tagValues` list, throws `Error`. The message includes the property path.
- `resolveTagCriteria` checks a list. An empty list throws before any entry is checked. Each entry is validated, then `tagKey` values must be unique by exact match, including surrounding spaces. A valid list returns a copy. The input list is left unchanged.

## Installation

### npm

```bash
npm install resource-criteria-validator
```

### yarn

```bash
yarn add resource-criteria-validator
```

### pnpm

```bash
pnpm add resource-criteria-validator
```

## Usage

```typescript
import {
  ResourceCriteriaValidator,
  ConstructResourceTagCriteria,
} from 'resource-criteria-validator';

const criteria: ConstructResourceTagCriteria = {
  tagKey: 'Environment',
  tagValues: ['production'],
};

ResourceCriteriaValidator.assertTagCriteria(criteria);
ResourceCriteriaValidator.assertTagCriteria(criteria, {
  propPath: 'props.tagCriteria',
});

const criteriaList: ConstructResourceTagCriteria[] = [
  {
    tagKey: 'Environment',
    tagValues: ['production'],
  },
  {
    tagKey: 'Notify',
    tagValues: ['YES'],
  },
];

const resolved = ResourceCriteriaValidator.resolveTagCriteria(criteriaList);
ResourceCriteriaValidator.resolveTagCriteria(criteriaList, {
  propPath: 'props.tags',
});
```

## Options

### `ConstructResourceCriteriaAssertOptions`

| Option | Type | Description |
| --- | --- | --- |
| `propPath` | `string` | Property path included in the error message. A single object uses a path such as `tagCriteria`. A list uses a path such as `props.tags`, and errors index entries as `props.tags[0]` (default: `tagCriteria`) |

## API

See [API.md](./API.md).

## Requirements

- Node.js `>= 20.0.0`
- `aws-cdk-lib` `^2.232.0`
- `constructs` `^10.5.1`

## License

This project is licensed under the Apache-2.0 License.
