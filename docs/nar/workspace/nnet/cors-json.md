---
title: cors.json
sidebar_position: 5
---

# cors.json

The `cors.json` file lets you add extra allowed origins for Cross-Origin Resource Sharing (CORS) on your S3 buckets. This is optional — Nar automatically configures CORS with your deployment URLs and localhost origins when you use the [CORS tool](../../nar-actions/tools#cors).

**Location:** `{vertical}/nnet/cors.json`

---

## Example

```json
{
  "buckets": {
    "perm": [
      "https://myapp.example.com",
      "https://staging.example.com"
    ],
    "uploads": [
      "https://myapp.example.com"
    ]
  }
}
```

To not add any extra origins (or if you don't need custom CORS):

```json
{}
```

Or simply omit the file — it's entirely optional.

---

## Fields

| Field | Description | Required |
|:------|:------------|:---------|
| `buckets` | An object where each key is a bucket prefix and each value is a list of allowed origin URLs. | No |

Each key under `buckets` is a bucket prefix (e.g., `perm`, `uico`, `arti`, `scra`, or any custom bucket defined in [byv/buckets.json](buckets-json)). The value is an array of origin URLs that should be allowed to make cross-origin requests to that bucket.

---

## How It Works

When you click **Enable CORS** in the [Tools](../../nar-actions/tools#cors) panel for a bucket, Nar merges three sets of origins:

1. **Deployment origins** — Your CloudFront and custom domain URLs (detected automatically).
2. **Localhost origins** — `http://localhost:5173`, `http://localhost:3000`, and their `127.0.0.1` equivalents (for local development).
3. **Extra origins from cors.json** — Any additional origins you specify here for that bucket prefix.

All three are combined and applied as the CORS policy on the S3 bucket.