---
layout: default
title: App Layer
parent: Control Panel
grand_parent: Nar
nav_order: 4
---

# Application Layer

The **App Layer** is the engine room of your project. If the Data Layer is your hard drive, the App Layer is the processor that runs your application logic and serves your user interface.

## Infrastructure Provisioning

Once your storage is ready, you need to set up the specialized cloud compute resources that will run your code.

Clicking **Setup** builds the professional "skeleton" of your backend, including the secure API endpoints where your code lives and executes.

## Deploying Your Interface (Deploy UI)

This action publishes the visual part of your website—everything your users interact with in their browser.

When you make a frontend change (e.g., in React or Vue) and are ready to share it with the world, simply click **Deploy UI**. Nar builds your project, uploads it to the global CloudFront CDN, and clears old caches so your users see the update instantly.

## Deploying Your Logic (Deploy Service)

Use this for backend updates—the "brain" of your application.

If you’ve updated your backend code:
1. Select the specific service (e.g., `auth`) from the dropdown.
2. Click **Deploy Service**.

Nar zips and publishes your new logic directly to the cloud, providing a fast and reliable deployment without rebuilding your entire system.
