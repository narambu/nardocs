---
layout: default
title: ui_vite
parent: code.json
grand_parent: Workspace
nav_order: 2
---

# ui_vite

The `ui.vite` entry in your [code.json](code-json.html) defines a **React + Vite** project that gets built locally and deployed to **S3** behind a **CloudFront** CDN.

---

## Fields

```json
{
  "ui": {
    "vite": {
      "name": "ui",
      "location": "orig/ui"
    },
    "configDir": {
      "name": "ui_config",
      "location": "orig/ui_config"
    }
  }
}
```

| Field | Description |
|:------|:------------|
| `ui.vite.location` | Path to the Vite project root (must contain `package.json`). Defaults to `orig/ui`. Can be changed to `/your/location/for/ui` — run [Fix Paths](../control-panel/fix-paths.html) after updating. |
| `ui.configDir.location` | Path to the UI configuration directory (contains `nn_env.json`). Defaults to `orig/ui_config`. Can be changed to `/your/location/for/ui_config`. |

---

## Deployment Process

When you click **Deploy UI** (or run the CLI equivalent), Nar:

1. Generates `.env.production` and `.env.development` files in the project root
2. Runs `npm install`
3. Runs `npm run build`
4. Clears the UI S3 bucket
5. Uploads the build output to S3
6. Invalidates the CloudFront distribution so users see the latest version

---

## Environment Variables

See [UI Environment Variables](ui-environment-variables.html).
