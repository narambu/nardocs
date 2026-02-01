---
layout: default
title: Structure
parent: Your Workspace
grand_parent: Nar
nav_order: 1
---

# Workspace Structure

A Nar workspace can contain multiple verticals, each in its own sub-folder.

```text
my-workspace/
├── ral/                    # React Auth Lambda vertical
│   ├── nnet/               # Your configuration (preserved across updates)
│   │   ├── code.json
│   │   ├── domain.json
│   │   ├── apex.json
│   │   ├── awsprofile.json
│   │   ├── byv/
│   │   └── site/
│   ├── orig/               # Source code (refreshed on import/activate)
│   │   ├── ui/             # React + Vite frontend
│   │   ├── auth/           # Auth Lambda service
│   │   └── common/         # Shared Python library
│   └── backup/             # Timestamped backups of orig/ before updates
└── ppay/                   # Another vertical
    ├── nnet/
    ├── orig/
    └── backup/
```

## Key Directories

| Directory | Purpose |
|:----------|:--------|
| `nnet/` | Your configuration — tells Nar what to deploy and how. Preserved across updates. |
