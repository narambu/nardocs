---
title: Introduction
sidebar_position: 0
slug: /
---

# Nar: Deploy without the complexity

**Nar** is a deployment tool that ships applications to your own cloud account — without wrestling with cloud consoles or writing complex IaC. Use the visual interface to deploy interactively, or run the CLI to automate deployments in your CI/CD pipelines.

![Nar Screenshot](/images/nar-screenshot.png)

## Philosophy

- **True Ownership** — Everything runs in your own cloud account. You own the code, the data, and the infrastructure.
- **Zero Lock-in** — Nar provisions standard cloud resources. There's no proprietary runtime or abstraction layer. If you stop using Nar, your infrastructure keeps running — and you can import your resources into any IaC tool of your choice and continue from there.
- **Opinionated by Design** — Nar makes deliberate choices about how your application is deployed. That means fewer decisions for you and tested paths that work every time. We're confident that once you experience the simplicity, you'll want to stay.

## What Nar Does

| Feature | Description |
|:--------|:------------|
| **Nar Actions** | Visual interface for managing sites, environments, and deployments. |
| **CLI** | Run `nar.sh` with `--auto-approve` for scripted or pipeline-based deployments. |
| **Verticals** | Ready-to-deploy application stacks — like Paddle-based subscription billing — that you can select and customize. |
| **Infrastructure Management** | Provisions and connects the cloud resources your application needs. See [Composites](nar/composites/aws) for currently supported infrastructure. |

---

## Quick Start

**[Quick Start](nar/quickstart)** — Deploy a React app with Google OAuth from scratch.