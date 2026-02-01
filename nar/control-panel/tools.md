---
layout: default
title: Tools
parent: Control Panel
grand_parent: Nar
nav_order: 6
---

# Tools

Utilities for inspecting and maintaining your deployed infrastructure.

## State Recovery

### Recover
If a deployment was interrupted or your local state is out of sync with AWS, click **Recover**. Nar scans your AWS account for resources tagged with this site and re-imports them into the state file, bringing your local state back in sync with reality.

### State List
Displays a list of every AWS resource Nar is currently tracking for the selected site. Useful for auditing exactly what's been provisioned.

## Storage

### List Buckets
Lists all S3 buckets associated with the selected site and verifies they exist in AWS.

## CORS

### Enable / Disable CORS
Configures Cross-Origin Resource Sharing (CORS) headers on your S3 storage buckets.

If your frontend is getting CORS errors when accessing files from a bucket:
1. Select the bucket prefix.
2. Click **Enable**.

Nar sets the appropriate CORS policy on the bucket so your application can access its contents from the browser.
