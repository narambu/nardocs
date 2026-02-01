---
layout: default
title: Nar
nav_order: 1
has_children: true
has_toc: false
---

# Nar: Deploy to AWS without the complexity

**Nar** is a deployment tool that ships serverless applications to your own AWS account — without wrestling with the AWS console or writing complex IaC. Use the visual interface to deploy interactively, or run the CLI to automate deployments in your CI/CD pipelines.

![Nar Screenshot](assets/images/nar-screenshot.png)

## Philosophy

- **True Ownership** — Everything runs in your AWS account. You own the code, the data, and the infrastructure.
- **Zero Lock-in** — Nar provisions standard AWS resources (Lambda, CloudFront, S3, API Gateway). There's no proprietary runtime or abstraction layer. If you stop using Nar, your infrastructure keeps running — and you can import your resources into any IaC tool of your choice and continue from there.
- **Opinionated by Design** — Nar makes deliberate choices about how your application is deployed. That means fewer decisions for you and tested paths that work every time. We're confident that once you experience the simplicity, you'll want to stay.

## What Nar Does

| Feature | Description |
|:--------|:------------|
| **Control Panel** | Visual interface for managing sites, environments, and deployments. |
| **CLI** | Run `nar.sh` with `--auto-approve` for scripted or pipeline-based deployments. |
| **Verticals** | Ready-to-deploy application stacks — like Google OAuth or Paddle-based subscription billing — that you can activate and customize. |
| **Infrastructure Management** | Provisions and connects the AWS resources your application needs: Lambda, API Gateway, CloudFront, S3, ECR, CodeBuild, IAM roles, and more. |

---

## Quick Start

**[2 Minutes to Prod](nar/quickstart.html)** — Deploy a React app with Google OAuth to AWS from scratch.
