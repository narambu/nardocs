---
layout: default
title: code.json
parent: Workspace
grand_parent: Nar
nav_order: 3
has_children: true
---

# code.json

`code.json` is the high-level configuration that connects your source code to [composites](../composites.html). It tells Nar where your code lives and which composite deploys it.

**Location:** `{vertical}/nnet/code.json`

---

## Example

```json
{
  "services": {
    "lambda": [
      {
        "name": "auth",
        "location": "orig/auth"
      },
      {
        "name": "sbcs",
        "location": "orig/sbcs"
      }
    ],
    "sharedLibs": [
      {
        "name": "common",
        "location": "orig/common"
      }
    ],
    "configDir": {
      "name": "services_config",
      "location": "orig/services_config"
    }
  },
  "ui": {
    "vite": {
      "name": "ui",
      "location": "orig/ui"
    },
    "common": {
      "name": "uicommon",
      "location": "orig/uicommon"
    },
    "configDir": {
      "name": "ui_config",
      "location": "orig/ui_config"
    }
  }
}
```

In this example:

- The `auth` and `sbcs` codebases are mapped to **`services.lambda`** — each is deployed as a serverless function.
- The `ui` codebase is mapped to **`ui.vite`** — a Vite-built frontend deployed to a CDN.
- `common` is a shared library bundled with every service at deploy time.

---

## services.lambda

Defines serverless backend services. Each entry becomes an independently deployable function with its own API endpoint.

By default, deploys to the [Lambda + API Gateway](../composites/aws/lambda-api-gateway.html) composite.

| Field | Description |
|:------|:------------|
| `name` | Service identifier (e.g., `auth`, `sbcs`). Used in resource naming, Deploy Service dropdown, and URL generation. |
| `location` | Path to the service source code, relative to the vertical folder. |
| `dockerfile` | *(Optional)* Path to a custom Dockerfile. Defaults to Nar's built-in Dockerfile for Python Lambdas. |

### Shared Libraries

The `sharedLibs` array defines libraries that get bundled with **every** service during deployment. Each shared library is copied into the deployment package alongside the service code.

---

## ui.vite

Defines a Vite-built frontend application.

By default, deploys to the [CloudFront + S3](../composites/aws/cloudfront-s3.html) composite.

| Field | Description |
|:------|:------------|
| `ui.vite.location` | Path to the Vite project root (must contain `package.json`). |
| `ui.configDir.location` | Path to the UI configuration directory (contains `nn_env.json`). |

---

## Custom Paths

All paths are relative to the vertical folder. To deploy code from an existing repo instead of the bundled vertical source, change any `location` to point there. For example, to use your own UI project:

```json
"vite": {
  "name": "ui",
  "location": "/Users/you/repos/my-app/frontend"
}
```

After updating paths, run [Fix Paths](../nar-actions/fix-paths.html) to apply the changes.
