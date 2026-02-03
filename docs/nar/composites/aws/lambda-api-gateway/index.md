---
title: Lambda + API Gateway
---

# Lambda + API Gateway

Each backend service becomes a standalone **Lambda function** behind an **API Gateway** endpoint. Services are packaged as container images. The default Dockerfile supports Python 3.13. You can provide a custom Dockerfile for other languages or dependencies.


VPC support for Lambda functions is coming soon.

---

## AWS Architecture

Backend services run as **AWS Lambda** functions fronted by **HTTP API Gateway** endpoints.

```
Client Request
    │
    ▼
API Gateway (HTTP)
    │
    ▼
Lambda Function (Container Image)
    │
    ├── Reads/writes to S3
    └── CloudWatch Logs
```

**How it works:**

- Each backend service you define becomes its own Lambda function.
- Lambda functions run as container images stored in **ECR** (Elastic Container Registry).
- **CodeBuild** handles packaging and deploying new versions when you click Deploy Service.
- API Gateway provides a public HTTPS endpoint for each service.
- If you configure a custom domain in `domains.json`, each service gets its own subdomain:

  ```
  {service}.{region}.{site}.{vertical}.yourdomain.com
  ```

**AWS resources created:**

Lambda, API Gateway (HTTP), ECR repository, CodeBuild project, IAM roles, CloudWatch log groups, and optionally Route 53 records + ACM certificates for custom domains.

---

## Dockerfile

The [default Dockerfile](/nar/composites/aws/lambda-api-gateway/default-dockerfile) expects Python source code in `{service}/src/` and pip dependencies in `{service}/scripts/requirements.txt`. It supports **Python 3.13**.

To use a different Python version, add system packages, or use a non-Python language, add a `dockerfile` field to your service entry in `code.json`.

---

## Environment Variables

Nar injects environment variables into every Lambda function at runtime:

| Variable | Example | Description |
|:---------|:--------|:------------|
| `SERVICE_AWS_REGION` | `us-east-1` | Deployment region |
| `site` | `dev` | Site name |
| `{PREFIX}_BUCKET` | `perm-dev-ral-...` | S3 bucket for each prefix in `buckets.json` |
| `{SERVICE}_SERVICE_URL` | `https://auth.us-east-1.dev...` | URL of each sibling service |

Custom variables are defined in `{vertical}/services_config/nn_env.json` (global) or `{vertical}/{service}/config/nn_env.json` (per-service).