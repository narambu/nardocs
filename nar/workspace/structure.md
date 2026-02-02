---
layout: default
title: Structure
parent: Workspace
grand_parent: Nar
nav_order: 1
---

# Workspace Structure

A Nar workspace can contain multiple verticals, each in its own sub-folder.

```text
{workspace}/
├── ral/                            # React Auth Lambda vertical
│   ├── auth/                       # → orig/auth (symlink)
│   ├── common/                     # → orig/common (symlink)
│   ├── services_config/            # → orig/services_config (symlink)
│   ├── ui/                         # → orig/ui (symlink)
│   ├── ui_config/                  # → orig/ui_config (symlink)
│   ├── nnet/                       # Your configuration (preserved across updates)
│   │   ├── code.json
│   │   ├── domain.json
│   │   ├── apex.json
│   │   ├── awsprofile.json
│   │   ├── cors.json
│   │   ├── byv/
│   │   └── site/
│   ├── orig/                       # Source code (refreshed on import/activate)
│   └── backup/                     # Timestamped backups of orig/ before updates
└── ppay/                           # Another vertical
    ├── auth/
    ├── common/
    ├── sbcs/
    ├── services_config/
    ├── ui/
    ├── ui_config/
    ├── nnet/
    ├── orig/
    └── backup/
```

Nar creates symlinks at the vertical root that point into `orig/`. Use the symlink names (e.g., `{workspace}/{vertical}/auth/`, `{workspace}/{vertical}/services_config/`) when navigating your code.

## Key Directories

| Directory | Purpose |
|:----------|:--------|
| `nnet/` | Your configuration — tells Nar what to deploy and how. Preserved across updates. |
| `services_config/` | Global service environment variables (`nn_env.json`). |
| `ui_config/` | UI environment variables (`nn_env.json`). |
| `orig/` | Source code — refreshed on import/activate. Accessed via symlinks above. |
