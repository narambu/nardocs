---
title: Context
sidebar_position: 1
---

# Context (Init)

Before Nar can create resources in your cloud account, it needs a one-time initialization.

## What Init Does

Clicking **Init** performs these steps:

1. **Creates a deploy role** — An IAM role that Nar assumes to provision infrastructure, created per vertical.
2. **Creates the state bucket** — An S3 bucket for deployment state, shared across all verticals in the same account.

## Region

Expand **Context** and select a region from the dropdown. The region determines where the state bucket and deploy role are created. Click **Init** to run.

## When to Run

Run Init once per vertical. You also need to re-run it if you switch accounts or profiles. Answer **Y** to any terminal prompts during the process.
