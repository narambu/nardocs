---
layout: default
title: Sites
parent: Control Panel
grand_parent: Nar
nav_order: 2
---

# Site Environments

A **Site** represents a specific, isolated version of your application running in the cloud—such as `Dev`, `Staging`, or `Production`.

## Managing Your Environments

To create a new environment for your code, simply click the **+ (Plus)** icon. Provide a clear name (like `staging`) and select your preferred AWS region (like `us-east-1`).

Once created, you can toggle between environments using the dropdown menu. Any actions you take—from deploying a UI update to provisioning new resources—will occur only within that selected environment. This allows you to test new features safely in `Dev` and move them to `Production` only when they are perfect.
