---
layout: default
title: Configuration (nnet/)
parent: Workspace
grand_parent: Nar
nav_order: 2
---

# Configuration (nnet/)

Each vertical has an `nnet/` directory that contains all user-editable configuration. This is how you tell Nar what to deploy, where to deploy it, and under what domain.

```text
ral/
└── nnet/
    ├── code.json           # What services and UI to deploy
    ├── domain.json         # Custom domain name
    ├── apex.json           # Root (apex) domain settings
    ├── awsprofile.json     # Which AWS CLI profile to use
    ├── cors.json           # Extra CORS origins per bucket (optional)
    ├── byv/
    │   └── buckets.json    # Additional S3 buckets to create
    └── site/
        └── dev_us-east-1.json   # Site definition (one file per site+region)
```

| File | Purpose |
|:-----|:--------|
| [code.json](code-json.html) | Defines your Lambda services, shared libraries, UI location, and config directories. |
| [domain.json](domains-json.html) | Sets a custom domain for your deployment (requires a Route 53 hosted zone). |
| [apex.json](apex-json.html) | Ties your root domain (e.g., `yourdomain.com`) to a specific site. |
| [awsprofile.json](awsprofile-json.html) | Specifies which AWS CLI profile Nar should use (defaults to `default`). |
| [cors.json](cors-json.html) | Extra allowed origins for CORS on your S3 buckets (optional). |
| [byv/buckets.json](buckets-json.html) | Defines additional S3 buckets beyond the built-in ones. |
| [site/*.json](site-json.html) | Each file represents a deployable site+region combination. Filename format: `{site}_{region}.json`. |

Nar preserves the `nnet/` directory when you re-import or update a vertical — your configuration is never overwritten.
