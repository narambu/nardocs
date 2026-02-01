---
layout: default
title: SBCS Service
parent: Paddle Payments
grand_parent: Verticals
nav_order: 2
---

The **Subscription Billing and Customer Service (SBCS)** service is a specialized backend codebase provided by **Nar**. It acts as the engine for the Paddle Payments vertical, running as a **Lambda service** that manages the critical integration between your AWS environment and the Paddle payment gateway.

## Features
- **Payment Processing**: Handles one-time and recurring payments securely.
- **Webhook Integration**: Automatically processes Paddle webhooks to keep your user records in sync.
- **License Logic**: Issues and validates software licenses upon successful payment.

## Configuration
The `sbcs` service works in conjunction with the `auth` service. Ensure your Paddle API credentials and webhook secrets are correctly configured in your `nnet/` environment settings.

## Redeployment
If you update the billing logic or Paddle integration:
1. Select **sbcs** from the Service dropdown in the Nar Control Panel.
2. Click **Deploy Service**.
3. Nar publishes the updated Lambda image to ensure your billing logic is current.
