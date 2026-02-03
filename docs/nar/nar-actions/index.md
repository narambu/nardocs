---
title: Nar Actions
---

# Nar Actions

Nar Actions is the visual interface for managing your deployments. It lets you provision infrastructure, deploy code, and manage multiple environments — all without touching cloud consoles. Every action available in Nar Actions can also be run via the CLI for scripted or pipeline-based workflows.

![Nar Actions](/images/nar-actions-expanded.png)

## Workflow

The typical deployment flow through Nar Actions:

1. **[Context (Init)](/nar/nar-actions/init)** — One-time setup: create a role and state storage in your cloud account.
2. **[Sites](/nar/nar-actions/sites)** — Create and switch between environments (dev, staging, prod).
3. **[Data Layer](/nar/nar-actions/data-layer)** — Provision storage buckets.
4. **[App Layer](/nar/nar-actions/app-layer)** — Provision [composites](/nar/composites/aws) and deploy your code.

## Maintenance

- **[Fix Paths](/nar/nar-actions/fix-paths)** — Update configuration paths after moving your project folder.
- **[Tools](/nar/nar-actions/tools)** — State recovery, resource listing, CORS configuration.
- **[Vertical](/nar/nar-actions/vertical)** — Understand and manage the active vertical.
- **[Destructive Actions](/nar/nar-actions/destructive-actions)** — Delete resources and tear down sites.