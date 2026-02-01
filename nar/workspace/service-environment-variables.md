---
layout: default
title: Service
parent: Environment Variables
grand_parent: code.json
nav_order: 1
---

# Service Environment Variables

Nar provides environment variables to every service at runtime. Variables come from two sources: infrastructure that Nar discovers automatically, and your `nn_env.json` configuration files.

All JSON values are converted to strings: arrays become comma-separated, booleans become `"true"` or `"false"`, and nulls become empty strings.

---

## Variables Nar Provides

| Variable | Example | Description |
|:---------|:--------|:------------|
| `SERVICE_AWS_REGION` | `us-east-1` | The region where this service is deployed. |
| `site` | `dev` | The site name. |
| `{PREFIX}_BUCKET` | `perm-dev-ral-us-east-1-059279877465` | One variable per S3 bucket prefix defined in [buckets.json](buckets-json.html) (e.g., `IMAGES_BUCKET`, `NOTES_BUCKET`, `PERM_BUCKET`, `SCRA_BUCKET`). |
| `{SERVICE}_SERVICE_URL` | `https://auth.us-east-1.dev.ral.narambu.com` | URL of each sibling service defined in `services.lambda[]` (e.g., `AUTH_SERVICE_URL`, `SBCS_SERVICE_URL`). |

Any values you define in `nn_env.json` are also injected as environment variables.

---

## nn_env.json — Global Config

`services_config/nn_env.json` applies to **all** services.

Example:

```json
{
  "JWT_ALGORITHM": "HS256",
  "JWT_SECRET": "your-secret-here",
  "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "your-client-secret"
}
```

---

## nn_env.json — Per-Service Config

Each service can have its own `{service}/config/nn_env.json`. These values override the global config for that service only.

---

## Merge Priority

When the same key appears in multiple sources, the highest-priority source wins:

| Priority | Source | Scope |
|:---------|:-------|:------|
| 1 (highest) | `{service}/config/nn_env.json` | Per-service |
| 2 | `services_config/nn_env.json` | All services |
| 3 (lowest) | Nar-provided | Buckets, service URLs, region, site |

---

## Example

A service deployed to site `dev` with the above configuration would see:

```bash
SERVICE_AWS_REGION=us-east-1
site=dev
IMAGES_BUCKET=images-dev-ral-us-east-1-059279877465
PERM_BUCKET=perm-dev-ral-us-east-1-059279877465
AUTH_SERVICE_URL=https://auth.us-east-1.dev.ral.narambu.com
SBCS_SERVICE_URL=https://sbcs.us-east-1.dev.ral.narambu.com
JWT_ALGORITHM=HS256
JWT_SECRET=your-secret-here
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
```
