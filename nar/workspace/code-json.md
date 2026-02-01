---
layout: default
title: code.json
parent: Your Workspace
grand_parent: Nar
nav_order: 3
has_children: true
---

# code.json

The `code.json` file tells Nar what to deploy. It defines two composites — **service_lambda** for backend services and **ui_vite** for the frontend — along with their shared libraries and configuration directories.

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

All paths are relative to the vertical folder. If you want to deploy code from an existing repo instead of the bundled vertical source, change any `location` to point there. For example, to use your own UI project:

```json
"vite": {
  "name": "ui",
  "location": "/Users/you/repos/my-app/frontend"
}
```

After updating paths, run [Fix Paths](../control-panel/fix-paths.html) to apply the changes.

---

## Supported Composites

As of writing, Nar supports the following composites:

- **[service_lambda](service-lambda.html)** — Backend services deployed as Lambda functions behind API Gateway.
- **[ui_vite](ui-vite.html)** — Frontend deployed as a Vite build to S3 behind CloudFront.
