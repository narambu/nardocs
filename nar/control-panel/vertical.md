---
layout: default
title: Vertical
parent: Control Panel
grand_parent: Nar
nav_order: 7
---

# Verticals

A **Vertical** is a packaged application stack — code, configuration, and infrastructure definitions — distributed as a `.nar` file (a zip archive).

## What's Inside a Vertical

| Component | Description |
|:----------|:------------|
| `vertical_ui/` | Frontend source code (React + Vite). |
| `vertical_service/` | Backend service code (Python Lambda functions). |
| `vertical_shared/` | Shared libraries bundled with every service. |
| `vertical_conf/` | Configuration templates (environment variables, service config). |
| `resources/` | Nar metadata — default site definitions, display name, code mappings. |

## Example: React Auth Lambda

Activating this vertical gives you:
- A **React + Vite** frontend with Google OAuth integration.
- A **Python Lambda** auth service handling OAuth login, session management, and token validation.
- Pre-configured `nnet/` files that wire everything together.

## Example: Paddle Payment Integration

A more complete vertical with:
- A **React + Vite** frontend for subscriptions, checkout, billing history, and admin management.
- An **SBCS** (Subscription Billing and Customer Service) Lambda that processes Paddle webhooks, manages licenses, and handles payment logic.
- A shared **auth** service for user authentication.

## Activating and Importing

- **Activate**: Select a vertical from the dropdown and click Activate. If it's your first time using this vertical in this workspace, Nar unpacks the code into your project folder.
- **Import**: Click the **+** button to import a `.nar` package file into your vertical library.
