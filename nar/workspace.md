---
layout: default
title: Your Workspace
parent: Nar
nav_order: 3
has_children: true
has_toc: false
---

# Your Workspace

Your workspace is the local folder where Nar manages your project code and configuration. Each sub-folder in the workspace represents a [vertical](control-panel/vertical.html).

## Choosing Your Workspace

When you first launch Nar, you'll be prompted to select a workspace folder. This is where your vertical projects and their `nnet/` configuration directories will live.

![Initial Control Panel](../assets/images/control-panel-initial.png)

## Key Directories

- **[Structure](workspace/structure.html)** — How the workspace is organized.
- **[nnet/ Configuration](workspace/config.html)** — The configuration directory inside each vertical that controls what gets deployed and how.

## Configuration Reference

| File | What it controls |
|:-----|:-----------------|
| [code.json](workspace/code-json.html) | Which services and UI to deploy, and where the source code lives. |
| [domain.json](workspace/domains-json.html) | Custom domain name for your deployment. |
| [apex.json](workspace/apex-json.html) | Root domain routing to a specific site. |
