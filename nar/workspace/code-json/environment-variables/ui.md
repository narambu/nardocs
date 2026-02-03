---
layout: default
title: UI
parent: Environment Variables
grand_parent: code.json
nav_order: 2
---

# UI Environment Variables

Nar generates `VITE_` environment variables available to your React code at build time via `import.meta.env`.

All JSON values are converted to strings: arrays become comma-separated, booleans become `"true"` or `"false"`, and nulls become empty strings.

---

## Variables Nar Provides

| Variable | Example | Description |
|:---------|:--------|:------------|
| `VITE_{SERVICE}_SERVICE_URL` | `https://auth.us-east-1.dev.ral.narambu.com` | URL of each service defined in `services.lambda[]`. |
| `VITE_HOME_URL` | `https://daw8sipu4p6qe.cloudfront.net` | The CloudFront distribution domain. |

With a [custom domain](../../domains-json.html), `VITE_{SERVICE}_SERVICE_URL` values follow this pattern:

```
https://{service}.{region}.{site}.{vertical}.{domain}
```

Without a custom domain, they contain the raw API Gateway endpoint URL.

Any values you define in `nn_env.json` are also injected, automatically prefixed with `VITE_`.

---

## nn_env.json — UI Config

`{vertical}/ui_config/nn_env.json` defines additional environment variables for the UI.

Example:

```json
{
  "name": "myapp",
  "FEATURE_FLAGS": "dark_mode,notifications"
}
```

This produces:

```bash
VITE_name=myapp
VITE_FEATURE_FLAGS=dark_mode,notifications
```

---

## Merge Priority

| Priority | Source | Description |
|:---------|:-------|:------------|
| 1 (highest) | `{vertical}/ui_config/nn_env.json` | UI config |
| 2 (lowest) | Nar-provided | Service URLs and CloudFront domain |

---

## Accessing Variables in React

Use `import.meta.env` to access any `VITE_` variable:

```typescript
const authUrl = import.meta.env.VITE_AUTH_SERVICE_URL;
const appName = import.meta.env.VITE_name;
```
