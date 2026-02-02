---
layout: default
title: CloudFront + S3
parent: AWS
grand_parent: Composites
nav_order: 2
---

# CloudFront + S3

Your **React + Vite** frontend gets built locally and deployed to **S3** behind a **CloudFront** CDN.

---

## AWS Architecture

Frontend assets are built locally and served globally through **CloudFront CDN** backed by an **S3** origin bucket.

```
User Browser
    │
    ▼
CloudFront CDN (Edge Locations)
    │
    ▼
S3 Bucket (Origin, via OAC)
```

**How it works:**

- When you click Deploy UI, Nar builds your React + Vite project and uploads the output to an S3 bucket.
- **CloudFront** distributes the assets to edge locations worldwide for fast delivery.
- **Origin Access Control (OAC)** ensures the S3 bucket is only accessible through CloudFront, not directly.
- Cache invalidation runs automatically after each deployment so users see the latest version.
- If you configure a [custom domain](domains-json.html), your site is accessible at:

  ```
  {site}.yourdomain.com
  ```

**AWS resources created:**

S3 bucket, CloudFront distribution, Origin Access Control, and optionally Route 53 records + ACM certificates for custom domains.

---

## Deployment Process

When you click **Deploy UI** (or run the CLI equivalent), Nar:

1. Generates `.env.production` and `.env.development` files in the project root
2. Runs `npm install`
3. Runs `npm run build`
4. Clears the UI S3 bucket
5. Uploads the build output to S3
6. Invalidates the CloudFront distribution so users see the latest version

---

## Environment Variables

See [UI Environment Variables](ui-environment-variables.html).
