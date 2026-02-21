---
title: stores
---

# stores

Defines user-managed S3 buckets for application data. Unlike other composites, stores has no app code — it creates only infrastructure.

---

## Configuration

```json
{
  "stores": [
    {"name": "images", "versioning": false, "ttl_days": 0},
    {"name": "notes", "versioning": true, "ttl_days": 30}
  ]
}
```

| Field | Description |
|:------|:------------|
| `name` | Bucket identifier. Used in resource naming and as the `{PREFIX}_BUCKET` env var (e.g., `IMAGES_BUCKET`). |
| `versioning` | Enable S3 versioning on this bucket. |
| `ttl_days` | Lifecycle rule: automatically delete objects after this many days. `0` means no expiration. |

An empty array (`"stores": []`) means no store buckets are created.

---

## How Services Access Stores

Each store bucket is automatically exposed as an environment variable to Lambda services:

```
{NAME}_BUCKET=images-dev-ral-us-east-1-059279877465
```

The IAM policy generated from `deployiam.json` grants services read/write access to all store buckets.
