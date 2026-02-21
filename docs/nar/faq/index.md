---
title: FAQ
---

# Frequently Asked Questions

## General

### What AWS regions are supported?

Any region that supports Lambda, API Gateway, S3, CloudFront, ECR, and CodeBuild. Most users deploy to `us-east-1`.

### How much does the AWS infrastructure cost?

The verticals use Lambda, API Gateway, CloudFront, and S3 — all covered by the [AWS Free Tier](https://aws.amazon.com/free/) for light usage. A dev site with minimal traffic costs almost nothing.

### What happens if I stop using Nar?

Your infrastructure keeps running. Nar provisions standard AWS resources (Lambda, S3, CloudFront, etc.) with no proprietary runtime. You can manage them directly in the AWS console, or import them into Terraform/CDK/CloudFormation and continue from there.

### Can I use my existing AWS account?

Yes. Nar creates a dedicated deploy role and state bucket — it doesn't touch your existing resources. See [AWS Setup](/prerequisites/aws-setup) for the minimal IAM permissions needed.

### How do I add a staging or production site?

In the UX, click **+** to create a new site (e.g., `staging`, `prod`). Each site is a fully isolated environment with its own resources. Then run Data Layer Setup and App Layer Setup for the new site.

## Topics

- [Init / AWS Credentials](/nar/faq/init/faq-init)
- [Lambda + API Gateway](/nar/faq/composites/aws/lambda-api-gateway)
- [Paddle Payment Integration](/nar/faq/verticals/ppay)