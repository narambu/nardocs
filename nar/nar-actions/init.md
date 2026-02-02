---
layout: default
title: Context
parent: Nar Actions
grand_parent: Nar
nav_order: 1
---

# Context (Init)

Before Nar can create resources in your cloud account, it needs a one-time initialization.

## What Init Does

Clicking **Init** performs these steps:

1. **Creates the state bucket** — A storage bucket for deployment state, shared across all verticals in the same account.
2. **Creates a deploy role** — A role that Nar assumes to provision infrastructure, created per vertical.
3. **Initializes configurations** — Prepares both the Data Layer and App Layer for deployment.

## When to Run

Run Init once per vertical. You also need to re-run it if you switch accounts or profiles. Answer **Y** to any terminal prompts during the process.
