---
layout: default
title: Lambda + API Gateway
parent: AWS
nav_order: 1
---

# Lambda + API Gateway

Each backend service becomes a standalone **Lambda function** behind an **API Gateway** endpoint. Services are packaged as container images. The default Dockerfile supports Python 3.13. You can [customize Dockerfiles](../faq/aws.html).

{: .note }
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
- If you configure a [custom domain](domains-json.html), each service gets its own subdomain:

  ```
  {service}.{region}.{site}.{vertical}.yourdomain.com
  ```

**AWS resources created:**

Lambda, API Gateway (HTTP), ECR repository, CodeBuild project, IAM roles, CloudWatch log groups, and optionally Route 53 records + ACM certificates for custom domains.

---

## Dockerfile

The [default Dockerfile](default-dockerfile.html) expects Python source code in `{service}/src/` and pip dependencies in `{service}/scripts/requirements.txt`. It supports **Python 3.13**.

To use a different Python version, add system packages, or use a non-Python language, provide a [custom Dockerfile](../faq/aws.html).

---

## Environment Variables

See [Service Environment Variables](service-environment-variables.html).
