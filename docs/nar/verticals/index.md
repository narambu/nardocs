---
title: Verticals
---

# Verticals

A **vertical** is a complete application stack defined by a [`code.json`](/nar/workspace/nnet/code-json) file. It declares which [composites](/nar/composites) to use and typically includes default application code for each — infrastructure and code packaged together. A vertical can include multiple services, a frontend, shared libraries, and configuration, all wired together and ready to deploy.

## Managing Verticals

- **Select** — Choose a vertical from the dropdown to switch your workspace to it.
  On first selection, Nar unpacks the source code into your project folder.
- **Import** — Click the **+** button to add a new vertical from a `.nar` package file.

You can have multiple verticals installed and switch between them at any time.

## Available Verticals

| Vertical | What it includes |
|:---------|:-----------------|
| [React Auth Lambda](/nar/verticals/ral) | React + Vite UI with Google OAuth via Lambda. Bundled with Nar. |
| [Paddle Payment Integration](/nar/verticals/ppay) | Subscription billing, license management, and admin dashboard using Paddle. |

Both verticals share a common [Auth Service](/nar/verticals/common/auth) for Google OAuth.