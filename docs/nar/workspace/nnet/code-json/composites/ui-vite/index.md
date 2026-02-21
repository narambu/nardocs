---
title: ui.vite
---

# ui.vite

Defines a Vite-built frontend application.

**AWS:** [CloudFront + S3](/nar/workspace/nnet/code-json/composites/ui-vite/aws)

---

## Configuration

```json
{
  "ui": {
    "vite": {
      "name": "ui",
      "location": "orig/ui"
    }
  }
}
```

| Field | Description |
|:------|:------------|
| `name` | UI identifier. Used in resource naming. |
| `location` | Path to the Vite project root (must contain `package.json`). |

---

## Common UI Libraries

The `common` field defines shared UI code bundled with the main UI:

```json
{
  "ui": {
    "common": {
      "name": "uicommon",
      "location": "orig/uicommon"
    }
  }
}
```

---

## Config Directory

The `configDir` specifies where UI configuration lives:

```json
{
  "ui": {
    "configDir": {
      "name": "ui_config",
      "location": "orig/ui_config"
    }
  }
}
```

This directory contains `nn_env.json` for UI environment variables.