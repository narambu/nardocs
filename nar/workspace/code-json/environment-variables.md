---
layout: default
title: Environment Variables
parent: code.json
grand_parent: Workspace
nav_order: 3
has_children: true
---

# Environment Variables

Nar generates environment variables for both services and the UI at build time. See the relevant section for details:

- [Service Environment Variables](environment-variables/service.html) — variables available to Lambda functions at runtime
- [Vite Environment Variables](environment-variables/ui.html) — `VITE_` variables available to React code via `import.meta.env`
