---
title: Tools
sidebar_position: 6
---

# Tools

Utilities for inspecting and maintaining your deployed infrastructure.

## State Recovery

### Recover

Recover re-syncs your local state with what actually exists in AWS. It **does not create, modify, or delete** anything in your AWS account — it only reads from AWS and imports resources into your local state file.

If something feels off after a deployment — errors about resources already existing, Route53 records out of sync, or state that doesn't match what you see in the AWS console — click **Recover** as a first step. It's safe to run at any time and is the recommended first resort before investigating further.

#### When to use it

A common example is Route53 inconsistency: DNS records exist in AWS but your local state doesn't know about them, so the next deployment fails trying to create records that are already there. Recover finds those records in AWS and imports them, resolving the conflict without any manual cleanup.

More generally, use Recover whenever a deployment was interrupted, your state file is out of sync, or you simply want to make sure your local view matches reality.

#### What it does

1. Refreshes terraform configuration from a clean copy in the extension bundle.
2. Initializes the state backend (same as Init).
3. Discovers resources in AWS using naming patterns derived from your site configuration.
4. Generates Terraform `import` blocks for each discovered resource.
5. Applies the imports to bring your local state in sync.

#### Safety measures

- **Purely additive** — Recover uses Terraform's native `import` mechanism. It adds resources to your state file. There is no deletion code involved.
- **AWS is untouched** — Nothing in your AWS account is created, modified, or removed. Recover only reads.
- **DNS record filtering** — Only safe record types (A, CNAME) are imported. MX, NS, SOA, TXT, SRV, and SPF records are explicitly blocked to protect your email and DNS infrastructure.
- **Existence validation** — Each resource is looked up in AWS before importing. If a resource doesn't exist, it's skipped.
- **Clean config** — Terraform files are refreshed from the extension bundle before running, so stale local modifications can't interfere.

#### Recover vs Nuke

Recover and [Nuke](destructive-actions) are opposites. Recover **imports** what exists in AWS into your local state — nothing in AWS changes. Nuke **destroys** resources in AWS permanently. Recover is safe to run anytime; Nuke is a last resort.

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

Nar sets the appropriate CORS policy on the bucket so your application can access its contents from the browser. Additional CORS origins can be configured per bucket in `cors.json`.