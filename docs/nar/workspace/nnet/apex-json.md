---
title: apex.json
sidebar_position: 7
---

# apex.json

The `apex.json` file points your root (apex) domain — e.g., `yourdomain.com` without any prefix — to a specific site.

**Location:** `{vertical}/nnet/apex.json`

---

## Example

To serve a specific site at the root domain:

```json
{
  "site": "prod",
  "awsRegion": "us-east-1"
}
```

To disable apex domain routing:

```json
{}
```

---

## Fields

| Field | Description |
|:------|:------------|
| `site` | The site name to serve at the root domain (e.g., `prod`, `dev`). |
| `awsRegion` | The AWS region of that site (e.g., `us-east-1`). |

---

## How It Works

When configured, Nar adds `yourdomain.com` as an alias on the CloudFront distribution for the specified site. Visitors to `yourdomain.com` see the same content as `{region}.{site}.{vertical}.yourdomain.com`.

---

## Prerequisites

- [domain.json](domains-json) must be configured first — apex routing requires a custom domain.
- The domain's hosted zone must exist in Route 53.