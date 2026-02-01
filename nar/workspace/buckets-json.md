---
layout: default
title: byv/buckets.json
parent: Your Workspace
grand_parent: Nar
nav_order: 7
---

# byv/buckets.json

The `buckets.json` file defines additional S3 buckets beyond the built-in ones that Nar creates automatically.

**Location:** `{vertical}/nnet/byv/buckets.json`

---

## Example

```json
[
  {
    "name": "uploads",
    "versioning": true,
    "force_destroy": false
  },
  {
    "name": "temp",
    "versioning": false,
    "ttl_days": 30,
    "force_destroy": true
  }
]
```

To not create any additional buckets:

```json
[]
```

---

## Fields

Each entry in the array is a bucket definition:

| Field | Description | Required |
|:------|:------------|:---------|
| `name` | Bucket name prefix. The full bucket name includes the site, vertical, region, and account ID. | Yes |
| `versioning` | Enable S3 versioning on this bucket. | No (default: `false`) |
| `ttl_days` | Lifecycle rule — automatically delete objects after this many days. | No |
| `force_destroy` | Allow Nar to destroy this bucket even if it contains objects. | No (default: `false`) |

---

## Built-in Buckets

Nar automatically creates these buckets without any configuration:

| Prefix | Purpose | Layer |
|:-------|:--------|:------|
| `perm` | Protected persistent data (versioning enabled) | Data |
| `uico` | UI assets served by CloudFront | App |
| `arti` | Build artifacts (7-day TTL) | App |
| `scra` | Scratch/temporary files (7-day TTL) | App |

Use `byv/buckets.json` when you need buckets beyond these defaults.
