---
title: AWS
---

# AWS

Your frontend gets built locally and deployed to **S3** behind a **CloudFront** CDN.

---

## Architecture

```
User Browser
    |
    v
CloudFront CDN (Edge Locations)
    |
    v
S3 Bucket (Origin, via OAC)
```

- **CloudFront** distributes assets to edge locations worldwide for fast delivery.
- **Origin Access Control (OAC)** ensures the S3 bucket is only accessible through CloudFront, not directly.
- Cache invalidation runs automatically after each deployment.
- With a custom domain in `domains.json`, your site is accessible at:

  ```
  {site}.yourdomain.com
  ```

---

## Resources Created

S3 bucket, CloudFront distribution, Origin Access Control, and optionally Route 53 records + ACM certificates for custom domains.

---

## Deployment Process

When you run **Deploy UI**, Nar:

1. Generates `.env.production` and `.env.development` files in the project root
2. Runs `npm install`
3. Runs `npm run build`
4. Clears the UI S3 bucket
5. Uploads the build output to S3
6. Invalidates the CloudFront distribution so users see the latest version
