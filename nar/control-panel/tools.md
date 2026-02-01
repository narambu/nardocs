---
layout: default
title: Tools
parent: Control Panel
grand_parent: Nar
nav_order: 6
---

# Management Tools

Nar includes a suite of utilities to help you maintain your sites, monitor their health, and resolve common configuration issues.

## State Recovery & Monitoring

### Recover
Cloud systems track their resources in a local "state file". If a deployment is interrupted or the local file becomes out of sync, click **Recover**. Nar will scan your real-time cloud account and update your local project to perfectly match the current state of your AWS resources.

### State List
For an in-depth look at your project's infrastructure, click **State List**. This provides a transparent inventory of every professional resource Nar is managing for the selected site.

## Storage Management

### List Buckets
This utility provides an audit report of your file storage buckets, verifying that each represents a healthy, active cloud resource.

## Connectivity & CORS

### Enable/Disable CORS
If your website encounters cross-origin errors (CORS) in the browser console, it means your cloud storage is protecting your files from unauthorized access. To authorize your website to communicate with your storage buckets:
1. Select the appropriate bucket prefix.
2. Click **Enable**.

Nar will automatically configure the necessary security headers so your application can securely and seamlessly serve its assets.
