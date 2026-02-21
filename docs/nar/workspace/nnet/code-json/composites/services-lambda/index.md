---
title: services.lambda
---

# services.lambda

Defines serverless backend services. Each entry becomes an independently deployable function with its own API endpoint.

**AWS:** [Lambda + API Gateway](/nar/workspace/nnet/code-json/composites/services-lambda/aws)

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
        "location": "orig/sbcs",
        "network": {
          "subnets": ["subnet-abc123", "subnet-def456"],
          "securityGroups": ["sg-abc123"]
        }
      }
    ]
  }
}
```

| Field | Description |
|:------|:------------|
| `name` | Service identifier (e.g., `auth`, `sbcs`). Used in resource naming, Deploy Service dropdown, and URL generation. |
| `location` | Path to the service source code, relative to the vertical folder. |
| `dockerfile` | *(Optional)* Path to a custom Dockerfile. Defaults to the provider's built-in Dockerfile. |
| `network` | *(Optional)* Network configuration for private networking. |
| `network.subnets` | Subnet IDs to place the function in. |
| `network.securityGroups` | Security group IDs. Required when `subnets` is set. |

Services without `network` run outside any private network.

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
