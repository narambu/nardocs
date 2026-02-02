---
layout: default
title: Sites
parent: Nar Actions
grand_parent: Nar
nav_order: 2
---

# Sites

A **Site** is an isolated deployment of your application — typically representing an environment like `dev`, `staging`, or `prod`.

## Creating a Site

Click the **+ (Plus)** icon, provide a name (e.g., `staging`) and select a region (e.g., `us-east-1`). This creates a site configuration file at `{vertical}/nnet/site/{name}_{region}.json`.

## Switching Between Sites

Use the dropdown to select the active site. All actions in Nar Actions — Setup, Deploy, Delete — apply only to the currently selected site.

## How Sites Are Isolated

Each site gets its own independent set of resources — separate storage, separate services, separate CDN. This means you can deploy and test in `dev` without affecting `prod`.
