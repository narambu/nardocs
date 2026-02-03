---
title: Configuration (nnet/)
sidebar_position: 2
---

# Configuration (nnet/)

Each vertical has an `nnet/` directory that contains all user-editable configuration. This is how you tell Nar what to deploy, where to deploy it, and under what domain.

```text
nnet/
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

Nar preserves the `nnet/` directory when you re-import or update a vertical — your configuration is never overwritten.
