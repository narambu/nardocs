---
layout: default
title: App Layer
parent: Nar Actions
grand_parent: Nar
nav_order: 4
---

# App Layer

The App Layer provisions the [composites](../aws.html) that run your application and provides actions to deploy your code.

## Setup

Clicking **Setup** provisions all composite resources for the selected site. This includes the backend service infrastructure, frontend CDN, build pipeline, and (optionally) [custom domain](../workspace/domains-json.html) records.

See [Composites](../aws.html) for the full list of resources created.

You typically run Setup once per site. After that, use Deploy UI and Deploy Service for updates.

## Deploy UI

Publishes your frontend to the CDN.

When you click **Deploy UI**, Nar builds your Vite project, uploads the output, and invalidates the CDN cache so users see the latest version.

## Deploy Service

Updates a specific backend service.

1. Select the service (e.g., **Auth**, **Subscription and Billing**) from the dropdown.
2. Click **Deploy Service**.

Nar packages the service code along with shared libraries, builds a container image, and deploys the updated function.
