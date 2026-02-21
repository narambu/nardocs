---
title: Fix Paths
sidebar_position: 7
---

# Fix Paths

The `location` fields in [code.json](../workspace/nnet/code-json) can point to directories inside or outside the workspace. Nar resolves these paths and creates symlinks in your workspace that point to the actual source code directories.

Whenever you update a `location` in code.json, click **Fix Paths** to recreate the symlinks.