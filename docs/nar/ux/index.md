---
title: UX
---

# UX

The Nar UX is the control panel for managing your deployments. Install Nar from the DMG — it opens this UX. From here you can provision infrastructure, deploy code, and manage multiple environments without touching cloud consoles.

![Nar UX](/images/nar-actions-expanded.png)

## Workflow

The typical deployment flow:

1. **[Context](/nar/ux/init)** — Select a region and run Init to create a deploy role and state storage in your cloud account.
2. **[Sites](/nar/ux/sites)** — Create and switch between environments (dev, staging, prod).
3. **[Data Layer](/nar/ux/data-layer)** — Provision storage buckets.
4. **[App Layer](/nar/ux/app-layer)** — Provision [composites](/nar/workspace/nnet/code-json) and deploy your code.

## Maintenance

- **[Fix Paths](/nar/ux/fix-paths)** — Update configuration paths after moving your project folder.
- **[Tools](/nar/ux/tools)** — State recovery, resource listing, CORS configuration.
- **[Vertical](/nar/ux/vertical)** — Understand and manage the active vertical.
- **[Destructive Actions](/nar/ux/destructive-actions)** — Delete resources and tear down sites.
