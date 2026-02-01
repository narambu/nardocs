---
layout: default
title: service_lambda
parent: code.json
grand_parent: Workspace
nav_order: 1
---

# service_lambda

Each entry in `services.lambda[]` of your [code.json](code-json.html) becomes a standalone **Lambda function** behind an **API Gateway** endpoint. Services are packaged as container images. The default Dockerfile supports Python 3.13. You can [customize Dockerfiles](../faq/dockerfile-faq.html) by providing a custom path.

{: .note }
VPC support for Lambda functions is coming soon.

---

## Fields

```json
{
  "services": {
    "lambda": [
      {
        "name": "auth",
        "location": "orig/auth"
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
  }
}
```

| Field | Description |
|:------|:------------|
| `name` | Service identifier (e.g., `auth`, `sbcs`). Used in resource naming, Deploy Service dropdown, and URL generation. |
| `location` | Path to the service source code. Defaults to `orig/{service}`. Can be changed to `/your/location/for/service` — run [Fix Paths](../control-panel/fix-paths.html) after updating. |
| `dockerfile` | *(Optional)* Path to a custom Dockerfile. Defaults to Nar's built-in Dockerfile for Python Lambdas. Can be changed to `/your/location/for/Dockerfile`. |

---

## Shared Libraries

The `sharedLibs` array defines Python libraries that get bundled with **every** service during deployment.

```json
"sharedLibs": [
  {
    "name": "common",
    "location": "orig/common"
  }
]
```

Each shared library is copied into the deployment package alongside the service code.

---

## Dockerfile

The [default Dockerfile](default-dockerfile.html) expects Python source code in `{service}/src/` and pip dependencies in `{service}/scripts/requirements.txt`. It supports **Python 3.13**.

To use a different Python version, add system packages, or use a non-Python language, provide a [custom Dockerfile](../faq/dockerfile-faq.html).

---

## Environment Variables

See [Service Environment Variables](service-environment-variables.html).
