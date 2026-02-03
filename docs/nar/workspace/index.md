---
title: Workspace
---

# Workspace

Your workspace is the local folder where Nar manages your project code and configuration. Each sub-folder in the workspace represents a [vertical](nar-actions/vertical).

## Choosing Workspace

When you first launch Nar, you'll be prompted to select a workspace folder. This is where your vertical projects and their `nnet/` configuration directories will live.

![Initial Nar Actions](/images/nar-actions-initial.png)

## Key Directories

- **[Structure](workspace/structure)** — How the workspace is organized.
- **[nnet/ Configuration](workspace/nnet)** — The configuration directory inside each vertical that controls what gets deployed and how.

## Configuration Reference

| File | What it controls |
|:-----|:-----------------|
| [code.json](workspace/nnet/code-json) | Which services and UI to deploy, and where the source code lives. |
| [domain.json](workspace/nnet/domains-json) | Custom domain name for your deployment. |
| [apex.json](workspace/nnet/apex-json) | Root domain routing to a specific site. |