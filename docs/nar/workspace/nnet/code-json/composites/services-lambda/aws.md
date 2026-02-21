---
title: AWS
---

# AWS

Each service entry in `services.lambda` becomes a standalone **Lambda function** behind an **API Gateway** endpoint. Services are packaged as container images stored in **ECR** and built by **CodeBuild**.

---

## Architecture

```
Client Request
    |
    v
API Gateway (HTTP)
    |
    v
Lambda Function (Container Image)
    |
    +-- Reads/writes to S3
    +-- CloudWatch Logs
```

- Each service becomes its own Lambda function with a public HTTPS endpoint.
- **CodeBuild** packages and deploys new versions when you run Deploy Service.
- With a custom domain in `domains.json`, each service gets its own subdomain:

  ```
  {service}.{region}.{site}.{vertical}.yourdomain.com
  ```

---

## Resources Created

Lambda, API Gateway (HTTP), ECR repository, CodeBuild project, IAM roles, CloudWatch log groups, and optionally Route 53 records + ACM certificates for custom domains.

---

## Dockerfile

The [default Dockerfile](/nar/workspace/nnet/code-json/composites/services-lambda/default-dockerfile) supports **Python 3.13**. To use a different language or Python version, set the `dockerfile` field in your service entry.

---

## VPC

When [`network`](/nar/workspace/nnet/code-json/composites/services-lambda) is configured, Lambda functions run inside a VPC. Nar maps `network.subnets` to VPC subnet IDs, `network.securityGroups` to security group IDs, and attaches the `AWSLambdaVPCAccessExecutionRole` managed policy automatically.
