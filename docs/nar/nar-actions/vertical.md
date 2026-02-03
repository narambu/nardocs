---
title: Vertical
sidebar_position: 5
---

# Verticals

A **Vertical** is a packaged application stack — code, configuration, and infrastructure definitions — distributed as a `.nar` file (a zip archive).


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