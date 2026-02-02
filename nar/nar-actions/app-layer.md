---
layout: default
title: App Layer
parent: Nar Actions
grand_parent: Nar
nav_order: 4
---

# App Layer

The App Layer contains the compute, delivery, and build resources that run your application.

## Setup

Clicking **Setup** provisions the following AWS resources for the selected site:

- **Lambda functions** — One per service defined in [code.json](../workspace/code-json.html).
- **API Gateway (HTTP)** — Public HTTPS endpoints for each Lambda function.
- **CloudFront distribution** — CDN for serving your frontend UI globally.
- **ECR repository** — Container registry for Lambda deployment images.
- **CodeBuild project** — Builds and packages your service code for Lambda.
- **IAM roles** — Execution roles for Lambda and CodeBuild.
- **CloudWatch log groups** — Logs for Lambda, API Gateway, and CodeBuild.
- **Route 53 records + ACM certificates** — If you've configured a [custom domain](../workspace/domains-json.html).

You typically run Setup once per site. After that, use Deploy UI and Deploy Service for updates.

## Deploy UI

Publishes your React + Vite frontend to the CloudFront CDN.

When you click **Deploy UI**, Nar:
1. Builds your Vite project.
2. Uploads the output to the site's S3 bucket.
3. Invalidates the CloudFront cache so users see the latest version.

## Deploy Service

Updates a specific backend Lambda function.

1. Select the service (e.g., **Auth**, **Subscription and Billing**) from the dropdown.
2. Click **Deploy Service**.

Nar packages the service code along with shared libraries, pushes a container image to ECR, and triggers a CodeBuild job to update the Lambda function.
