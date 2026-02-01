---
layout: default
title: Fix Paths
parent: Control Panel
grand_parent: Nar
nav_order: 5
---

# Fix Paths

Configuration files in Nar use absolute paths to link resources correctly.

## Fix Paths

Configuration files in Nar often rely on absolute paths. This means if you move your project folder, rename a parent directory, or clone the repo to a new machine, things might break.

If you've moved your project, just click **Fix Paths**.

Nar will scan the `nnet` configuration files and automatically update all the old paths to match your current workspace location. It's a quick fix that saves you from manually editing config files.
