---
title: code.json
---

# code.json

`code.json` is what defines a [vertical](/nar/verticals). It declares which [composites](/nar/composites) to activate and where the application code for each one lives. Only composites referenced here get created — nothing more.

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

Each key under `services` and `ui` activates a composite:

| Key | Description |
|:----|:------------|
| [services.lambda](/nar/workspace/nnet/code-json/services-lambda) | Serverless backend functions |
| [ui.vite](/nar/workspace/nnet/code-json/ui-vite) | Vite-built frontend application |

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

After updating paths, run [Fix Paths](/nar/nar-actions/fix-paths) to apply the changes.