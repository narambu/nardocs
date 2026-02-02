---
layout: default
title: Destructive Actions
parent: Nar Actions
grand_parent: Nar
nav_order: 11
---

# Destructive Actions

{: .warning }
These operations permanently delete AWS resources and data. They cannot be undone.

## Empty Bucket

AWS prevents deleting an S3 bucket that still contains objects. If a layer deletion fails because of non-empty buckets, select the bucket and click **Empty** to delete all objects inside it.

## Delete App Layer

Removes the compute and delivery resources for the selected site — Lambda functions, API Gateway, CloudFront, ECR, CodeBuild, and associated IAM roles. Your Data Layer (storage buckets and their contents) is **not** affected.

## Delete Data Layer

Removes the storage buckets and their contents for the selected site. **All data in these buckets will be permanently deleted.** Make sure you have backups if needed.

## Nuke

Force-deletes all resources for a site when standard deletion fails — for example, if the state file is corrupt or missing. Nuke uses the `discover` action to scan AWS for resources tagged with this site and destroys them directly, bypassing the state file.

Use this as a last resort.
