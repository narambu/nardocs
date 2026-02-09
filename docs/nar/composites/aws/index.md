---
title: AWS
---

# AWS Composites

Each composite below bundles AWS resources, typically with default application code. Your [`code.json`](/nar/workspace/nnet/code-json) activates composites — only what's declared gets created.

| Composite | code.json key | What it deploys |
|:----------|:-------------|:----------------|
| [Lambda + API Gateway](/nar/composites/aws/lambda-api-gateway) | `services.lambda` | Backend services as Lambda functions behind API Gateway. Each service entry creates its own Lambda, ECR, and API endpoint. |
| [CloudFront + S3](/nar/composites/aws/cloudfront-s3) | `ui.vite` | Frontend as a Vite build to S3 behind CloudFront. |