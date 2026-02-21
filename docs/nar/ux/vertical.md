---
title: Vertical
sidebar_position: 5
---

# Verticals

A **vertical** is defined by a [`code.json`](/nar/workspace/nnet/code-json) that declares which [composites](/nar/workspace/nnet/code-json) to use and typically includes default application code — infrastructure and code packaged together. Verticals are distributed as `.nar` files (zip archives).


## Example: React Auth Lambda

Selecting this vertical gives you:
- A **React + Vite** frontend with Google OAuth integration.
- A **Python Lambda** auth service handling OAuth login, session management, and token validation.
- Pre-configured `nnet/` files that wire everything together.

## Example: Paddle Payment Integration

A more complete vertical with:
- A **React + Vite** frontend for subscriptions, checkout, billing history, and admin management.
- A **Subscription and Billing Service** Lambda that processes Paddle webhooks, manages licenses, and handles payment logic.
- A shared **auth** service for user authentication.

## Selecting and Importing

- **Select**: Choose a vertical from the dropdown. If it's your first time using this vertical in this workspace, Nar unpacks the code into your project folder.
- **Import**: Click the **+** button to import a `.nar` package file into your vertical library.