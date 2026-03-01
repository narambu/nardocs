---
title: Introduction
sidebar_position: 1
slug: /
---

# Nar: Deploy without the complexity

:::info Coming Soon

- **Agentic Deployments** — Deploy infrastructure using natural language. Describe what you need, and Nar provisions it.
- **Webhook Pipelines** — SQS, S3, and Lambda wired together as event-driven workflows.
- **Managed Databases** — RDS setup with automated networking, security groups, and secret management.
- **Container Workloads** — ECS with UI, services, and NLB — production-ready container deployments.

:::

**Nar** is a deployment tool that ships applications to your own cloud account — without wrestling with cloud consoles or writing complex IaC. Use the visual interface to deploy interactively, or run the CLI to automate deployments in your CI/CD pipelines.

![Nar Screenshot](/images/nar-screenshot.png)

## How Nar Works

Infrastructure alone is useless without code running on it. Nar solves this by packaging **infrastructure and application code together**.

A **vertical** is defined by a `code.json` file that declares both which cloud infrastructure to provision *and* what default application code to deploy on it. Each vertical is made up of **composites** — bundles of cloud resources paired with starter code that work as a unit.

| Composite | code.json key | AWS resources | Launcher code |
|:----------|:-------------|:-------------|:-------------|
| [Serverless Backend](/nar/workspace/nnet/code-json/composites/services-lambda) | `services.lambda` | Lambda, API Gateway, CodeBuild, ECR, IAM, CloudWatch | Python service |
| [Static Frontend](/nar/workspace/nnet/code-json/composites/ui-vite) | `ui.vite` | S3, CloudFront, OAC | Vite/React app |
| [Data Stores](/nar/workspace/nnet/code-json/composites/stores) | `stores` | S3 buckets with versioning and lifecycle | — |

A vertical picks the composites it needs. Only what's declared in `code.json` gets created — nothing more. You can start with just a frontend, just an API, or both. As your application grows, add composites to `code.json` and Nar provisions the infrastructure and wires it together.

Each vertical ships with launcher UI and services — working implementations that handle common concerns (auth, routing, deployment wiring) so you can focus on your business logic.

Composites and verticals are provider-agnostic. Nar currently implements AWS.

## Philosophy

- **True Ownership** — Everything runs in your own cloud account. You own the code, the data, and the infrastructure.
- **Zero Lock-in** — Nar provisions standard cloud resources. There's no proprietary runtime or abstraction layer. If you stop using Nar, your infrastructure keeps running — and you can import your resources into any IaC tool of your choice and continue from there.
- **Opinionated by Design** — Nar makes deliberate choices about how your application is deployed. That means fewer decisions for you and tested paths that work every time. We're confident that once you experience the simplicity, you'll want to stay.

## What Nar Does

| Feature | Description |
|:--------|:------------|
| **[UX](/nar/ux)** | Visual interface for managing sites, environments, and deployments. |
| **[CLI](/nar/cli)** | Run deployments from the command line or your CI/CD pipeline. |
| **Verticals** | Ready-to-deploy application stacks — like Paddle-based subscription billing — that you can select and customize. |
| **Infrastructure Management** | Provisions and connects the cloud resources your application needs. See [code.json](/nar/workspace/nnet/code-json) for currently supported composites. |

---

## Quick Start

**[Quick Start](/nar/quickstart)** — Deploy a React app with Google OAuth from scratch.