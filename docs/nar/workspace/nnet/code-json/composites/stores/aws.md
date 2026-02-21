---
title: AWS
---

# AWS

Each entry in `stores` becomes an S3 bucket with optional versioning and lifecycle policies.

---

## Resources Created

One S3 bucket per store entry, with:

- **Versioning** — enabled or disabled per bucket
- **Lifecycle rules** — automatic object expiration based on `ttl_days`
- **IAM policy** — grants Lambda services access to all store buckets
