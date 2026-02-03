---
layout: default
title: services.lambda
parent: code.json
grand_parent: Workspace
nav_order: 1
has_children: true
---

# services.lambda

Defines serverless backend services. Each entry becomes an independently deployable function with its own API endpoint.

By default, deploys to the [Lambda + API Gateway](../../composites/aws/lambda-api-gateway.html) composite.

---

## Configuration

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
    ]
  }
}
```

| Field | Description |
|:------|:------------|
| `name` | Service identifier (e.g., `auth`, `sbcs`). Used in resource naming, Deploy Service dropdown, and URL generation. |
| `location` | Path to the service source code, relative to the vertical folder. |
| `dockerfile` | *(Optional)* Path to a custom Dockerfile. Defaults to Nar's built-in Dockerfile. |

---

## Shared Libraries

The `sharedLibs` array defines libraries that get bundled with **every** service during deployment.

```json
{
  "services": {
    "sharedLibs": [
      {
        "name": "common",
        "location": "orig/common"
      }
    ]
  }
}
```

Each shared library is copied into the deployment package alongside the service code.

---

## Config Directory

The `configDir` specifies where global service configuration lives:

```json
{
  "services": {
    "configDir": {
      "name": "services_config",
      "location": "orig/services_config"
    }
  }
}
```

This directory contains `nn_env.json` for environment variables shared across all services.
