---
layout: default
title: Context
parent: Control Panel
grand_parent: Nar
nav_order: 1
---

# Context (Init)

Before Nar can create resources in your AWS account, it needs a one-time initialization.

## What Init Does

Clicking **Init** performs these steps:

1. **Creates a DeployIAM role** — A temporary IAM role that Nar assumes to provision infrastructure.
2. **Creates the state bucket** — An S3 bucket (`nar-tfstate-{account}`) that stores deployment state, so Nar can track what it has created.
3. **Initializes configurations** — Prepares both the Data Layer and App Layer for deployment.

## When to Run

- **First time** deploying from this workspace to a given AWS account.
- If you switch AWS accounts or profiles.
- Answer **Y** to any terminal prompts during the process.

Once Init completes, you won't need to run it again for this account unless you change your AWS configuration.
