---
title: code.json
---

# code.json

`code.json` is what defines a [vertical](/nar/verticals). It declares which composites to activate and where the application code for each one lives. Only composites referenced here get created — nothing more.

**Location:** `{vertical}/nnet/code.json`

---

## Structure

```json
{
  "services": {
    "lambda": [...],
    "sharedLibs": [...],
    "configDir": {...}
  },
  "ui": {
    "vite": {...},
    "configDir": {...}
  },
  "stores": [...]
}
```

Each top-level key activates a composite:

| Key | Description |
|:----|:------------|
| [services.lambda](/nar/workspace/nnet/code-json/composites/services-lambda) | Serverless backend functions |
| [ui.vite](/nar/workspace/nnet/code-json/composites/ui-vite) | Vite-built frontend application |
| [stores](/nar/workspace/nnet/code-json/composites/stores) | User-defined data buckets with optional versioning and TTL |

Supporting fields (`sharedLibs`, `configDir`) are not composites — they provide shared code and configuration to the composites above.

---

## Examples

### ppay

> Services + UI, no stores. Two Lambda services with shared libs.

```json
{
  "services": {
    "lambda": [
      {"name": "auth", "location": "orig/auth"},
      {"name": "sbcs", "location": "orig/sbcs"}
    ],
    "sharedLibs": [
      {"name": "common", "location": "orig/common"}
    ],
    "configDir": {"name": "services_config", "location": "orig/services_config"}
  },
  "ui": {
    "vite": {"name": "ui", "location": "orig/ui"},
    "configDir": {"name": "ui_config", "location": "orig/ui_config"}
  },
  "stores": []
}
```

### ral

> Adds stores — two managed buckets with different retention policies.

```json
{
  "services": {
    "lambda": [
      {"name": "auth", "location": "orig/auth"}
    ],
    "sharedLibs": [
      {"name": "common", "location": "orig/common"}
    ],
    "configDir": {"name": "services_config", "location": "orig/services_config"}
  },
  "ui": {
    "vite": {"name": "ui", "location": "orig/ui"},
    "configDir": {"name": "ui_config", "location": "orig/ui_config"}
  },
  "stores": [
    {"name": "images", "versioning": false, "ttl_days": 0},
    {"name": "notes", "versioning": true, "ttl_days": 30}
  ]
}
```

### ralvpc

> VPC-connected Lambda — the `network` block places a service inside a VPC with specific subnets and security groups.

```json
{
  "services": {
    "lambda": [
      {
        "name": "auth",
        "location": "orig/auth",
        "network": {
          "subnets": ["subnet-05678d1d8935059de", "subnet-051cc91d9a896d59f"],
          "securityGroups": ["sg-0f56445ec04a775dd"]
        }
      }
    ],
    "sharedLibs": [
      {"name": "common", "location": "orig/common"}
    ],
    "configDir": {"name": "services_config", "location": "orig/services_config"}
  },
  "ui": {
    "vite": {"name": "ui", "location": "orig/ui"},
    "configDir": {"name": "ui_config", "location": "orig/ui_config"}
  },
  "stores": [
    {"name": "images", "versioning": false, "ttl_days": 0},
    {"name": "notes", "versioning": true, "ttl_days": 30}
  ]
}
```

---

## Custom Paths

All paths are relative to the vertical folder. To deploy code from an existing repo instead of the bundled vertical source, change any `location` to an absolute path. For example, to use your own UI project:

```json
"vite": {
  "name": "ui",
  "location": "/Users/you/repos/my-app/frontend"
}
```

After updating paths, run [Fix Paths](/nar/ux/fix-paths) to apply the changes.