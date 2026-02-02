---
layout: default
title: AWS Architectures
parent: Nar
nav_order: 1.5
---

# Supported AWS Architectures

Nar deploys your application using proven, serverless AWS architectures. Each architecture is fully provisioned and managed through the Nar [UI](nar-actions.html) or [CLI](../index.html).

---

## Services: Lambda (non-VPC) via API Gateway

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
- Each service defined in your [code.json](workspace/code-json.html) becomes its own Lambda function.
- Lambda functions run as container images stored in **ECR** (Elastic Container Registry).
- **CodeBuild** handles packaging and deploying new versions when you click Deploy Service.
- API Gateway provides a public HTTPS endpoint for each service.
- If you configure a [custom domain](workspace/domains-json.html), each service gets a subdomain: `{service}.{region}.{site}.{vertical}.yourdomain.com`

**AWS resources created:**
Lambda, API Gateway (HTTP), ECR repository, CodeBuild project, IAM roles, CloudWatch log groups, and optionally Route 53 records + ACM certificates for custom domains.

---

## UI: CloudFront → S3

Frontend assets are built locally and served globally through **CloudFront CDN** backed by an **S3** origin bucket.

```
User Browser
    │
    ▼
CloudFront CDN (Edge Locations)
    │
    ▼
S3 Bucket (Origin, via OAC)
```

**How it works:**
- When you click Deploy UI, Nar builds your React + Vite project and uploads the output to an S3 bucket.
- **CloudFront** distributes the assets to edge locations worldwide for fast delivery.
- **Origin Access Control (OAC)** ensures the S3 bucket is only accessible through CloudFront, not directly.
- Cache invalidation runs automatically after each deployment so users see the latest version.
- If you configure a [custom domain](workspace/domains-json.html), your site is accessible at `{site}.yourdomain.com`

**AWS resources created:**
S3 bucket, CloudFront distribution, Origin Access Control, and optionally Route 53 records + ACM certificates for custom domains.

---

## Coming Soon

We're actively expanding the set of supported architectures. Stay tuned.
