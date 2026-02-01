---
layout: default
title: Verticals
parent: Nar
nav_order: 2
has_children: true
has_toc: false
---

# Verticals

A vertical is a complete application stack — frontend, backend services, and configuration — packaged for deployment to AWS via Nar.

## Managing Verticals

- **Activate**: Select a vertical from the dropdown and click **Activate**. This switches your workspace to that vertical. On first activation, Nar unpacks the source code into your project folder.
- **Import**: Click the **+ (Import)** button to add a new vertical from a `.nar` package file.

You can have multiple verticals installed and switch between them.

## Available Verticals

| Vertical | What it includes |
|:---------|:-----------------|
| [React Auth Lambda](../verticals/ral.html) | React + Vite UI with Google OAuth via Lambda. Bundled with Nar. |
| [Paddle Payment Integration](../verticals/ppay.html) | Subscription billing, license management, and admin dashboard using Paddle. |

Both verticals share a common [Auth Service](../verticals/common/auth.html) for Google OAuth.
