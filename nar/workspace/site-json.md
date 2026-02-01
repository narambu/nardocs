---
layout: default
title: site/*.json
parent: Workspace
grand_parent: Nar
nav_order: 8
---

# site/*.json

Each file in the `nnet/site/` directory represents a deployable site and region combination.

**Location:** `{vertical}/nnet/site/{site}_{region}.json`

---

## Example

A vertical with two sites:

```text
nnet/
└── site/
    ├── dev_us-east-1.json
    └── prod_us-east-1.json
```

## File Contents

Site files are empty JSON objects:

```json
{}
```

The site name and region are derived from the filename — the file contents are not used.

---

## Naming Format

`{site}_{region}.json`

| Part | Description | Examples |
|:-----|:------------|:---------|
| `site` | Environment name | `dev`, `staging`, `prod` |
| `region` | AWS region | `us-east-1`, `eu-west-1` |

---

## Creating Sites

You can create sites either by:
- Clicking the **+ (Plus)** icon in the Control Panel's [Sites](../../nar/control-panel/sites.html) section.
- Manually creating an empty JSON file in `nnet/site/` with the correct naming format.
