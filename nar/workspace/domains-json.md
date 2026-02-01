---
layout: default
title: domain.json
parent: Workspace
grand_parent: Nar
nav_order: 4
---

# domain.json

The `domain.json` file connects your deployment to a custom domain name.

**Location:** `{vertical}/nnet/domain.json`

---

## Example

To use a custom domain:

```json
{
  "name": "yourdomain.com"
}
```

To deploy without a custom domain (uses default AWS-generated URLs):

```json
{}
```

---

## What Happens When You Set a Domain

Nar creates **Route 53 DNS records** and **ACM certificates** to map your deployment to the domain. The URL patterns generated are:

| Resource | URL Pattern |
|:---------|:------------|
| **UI (CloudFront)** | `{region}.{site}.{vertical}.yourdomain.com` |
| **Service (API Gateway)** | `{service}.{region}.{site}.{vertical}.yourdomain.com` |

For example, with domain `example.com`, vertical `ral`, site `dev`, region `us-east-1`:
- UI: `us-east-1.dev.ral.example.com`
- Auth service: `auth.us-east-1.dev.ral.example.com`

---

## Prerequisites

- The domain must have a **hosted zone** in Route 53. If you registered your domain elsewhere, create a hosted zone in Route 53 and update your domain's nameservers to point to it.
- DNS propagation and certificate validation can add a few minutes to the first deployment with a new domain.

---

## Without a Custom Domain

If `domain.json` is empty (`{}`), your services and UI are accessible through default AWS-generated URLs:
- **UI**: A CloudFront distribution URL (e.g., `d1234abcdef.cloudfront.net`)
- **Services**: API Gateway URLs (e.g., `abc123.execute-api.us-east-1.amazonaws.com`)
