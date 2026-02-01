---
layout: default
title: Vertical
parent: Control Panel
grand_parent: Nar
nav_order: 7
---

# Understanding Verticals

A **Vertical** is a production-ready blueprint that packages everything your application needs—code, configuration, and infrastructure—into a single, deployable feature. It is always designed to be a complete, self-contained solution to a business requirement, whether that involves a full-stack application or a simple resource connection.

## Example: React Auth Lambda

When you activate a vertical like **React Auth Lambda**, Nar provides the specific components required for that feature:

- **Frontend Interface**: High-performance UI code (e.g., React or Vite).
- **Backend Services**: Robust server-side logic (e.g., Python code running as a **Lambda service** for secure OAuth).
- **Intelligent Configuration**: Best-practice instructions that tell Nar exactly how to provision and secure your AWS resources.

## Example: Paddle Payments

For more complex business requirements like **Paddle Payments**, the vertical packages both frontend and specialized backend components:

- **Payments UI**: A comprehensive React interface for managing subscriptions, checkout flows, and customer billing history.
- **SBCS Service**: A backend "Subscription Billing and Customer Service" component that handles Paddle webhooks, plan logic, and license issuance.
- **Shared Authentication**: Integration with the common Auth service (running as a **Lambda service**) to ensure all payment actions are performed by verified users.

Verticals allow you to deploy sophisticated, enterprise-grade features with just a few clicks, abstracting away the underlying complexity of cloud architecture.
