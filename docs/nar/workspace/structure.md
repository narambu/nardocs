---
sidebar_position: 1
title: Structure
---
sidebar_position: 1

# Workspace Structure

A Nar workspace can contain multiple verticals, each in its own sub-folder.

```text
{workspace}/
├── ral/                            # React Auth Lambda vertical
│   ├── auth/                       # Auth service source code
│   ├── common/                     # Shared Python libraries
│   ├── services_config/            # Service environment variables (nn_env.json)
│   ├── ui/                         # React + Vite frontend source
│   ├── ui_config/                  # UI environment variables (nn_env.json)
│   ├── nnet/                       # Your configuration (preserved across updates)
│   │   ├── code.json
│   │   ├── domain.json
│   │   ├── apex.json
│   │   ├── awsprofile.json
│   │   ├── cors.json
│   │   ├── byv/
│   │   └── site/
│   └── backup/                     # Timestamped backups before updates
└── ppay/                           # Paddle Payment Integration vertical
    ├── auth/
    ├── common/
    ├── sbcs/
    ├── services_config/
    ├── ui/
    ├── ui_config/
    └── nnet/
```

Use the directory names shown above (e.g., `{workspace}/{vertical}/auth/`, `{workspace}/{vertical}/ui/`) when navigating your code.

## Key Directories

| Directory | Purpose |
|:----------|:--------|
| `nnet/` | Your configuration — tells Nar what to deploy and how. Preserved across updates. |
| `services_config/` | Global service environment variables (`nn_env.json`). |
| `ui_config/` | UI environment variables (`nn_env.json`). |