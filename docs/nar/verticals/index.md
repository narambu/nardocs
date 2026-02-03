---
title: Verticals
---

# Verticals

A vertical is a complete application stack — frontend, backend services, and configuration — packaged for deployment via Nar.

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