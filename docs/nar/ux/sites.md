---
title: Sites
sidebar_position: 2
---

# Sites

A **Site** is an isolated deployment of your application — typically representing an environment like `dev`, `staging`, or `prod`.

## Region and Sites

Sites are scoped to the region selected in **Context**. When you change the region, the site dropdown updates to show only sites in that region.

## Creating a Site

Click the **+ (Plus)** icon and provide a name (e.g., `staging`). The site is created in the currently selected region.

## Switching Between Sites

Use the dropdown to select the active site. All actions — Setup, Deploy, Delete — apply only to the currently selected site.

## How Sites Are Isolated

Each site gets its own independent set of resources — separate storage, separate services, separate CDN. This means you can deploy and test in `dev` without affecting `prod`.
