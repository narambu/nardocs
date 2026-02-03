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

## Structure

```json
{
  "services": {
    "lambda": [...],
    "...": [...]
  },
  "ui": {
    "vite": {...},
    "...": {...}
  }
}
```

Each key under `services` and `ui` maps to a deployment type:

| Key | Description |
|:----|:------------|
| [services.lambda](code-json/services-lambda.html) | Serverless backend functions |
| [ui.vite](code-json/ui-vite.html) | Vite-built frontend application |

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
