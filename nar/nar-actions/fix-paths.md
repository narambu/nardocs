---
layout: default
title: Fix Paths
parent: Nar Actions
grand_parent: Nar
nav_order: 5
---

# Fix Paths

The `location` fields in [code.json](../workspace/code-json.html) can point to directories inside or outside the workspace. Nar resolves these paths and creates symlinks in your workspace that point to the actual source code directories.

Whenever you update a `location` in code.json, click **Fix Paths** to recreate the symlinks.
