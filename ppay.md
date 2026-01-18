---
layout: default
title: Paddle Integration
nav_order: 4
---

# Paddle Integration

A complete payment integration vertical using Paddle for subscription billing and license management.

---

## Features

- **Subscription Billing** - Manage recurring payments with Paddle
- **License Management** - Issue and track software licenses
- **Admin Dashboard** - Manage products, subscriptions, and customers
- **Transaction History** - View payment and subscription history

---

## Getting Started

### Prerequisites

- Node.js 18+
- AWS Account with credentials configured
- Paddle account with API credentials

### Deployment

1. Download the Paddle Integration vertical DMG from [nar.narambu.com](https://nar.narambu.com)
2. Install and open in VS Code
3. Run **Init** from the Nar panel to set up your workspace
4. Configure your Paddle API credentials in the config
5. Run **Setup + Deploy** to deploy to AWS

---

## Project Structure

```
ui/
├── src/
│   ├── pages/
│   │   └── Payment/
│   │       └── Paddle/     # Paddle-specific pages
│   ├── services/
│   │   └── sbcs_paddle/    # Paddle API integration
│   └── components/         # React components

services/
└── sbcs/                   # Backend subscription service
```

---

## User Features

### Billing
View and manage your current subscription, update payment methods, and change plans.

### Licenses
View and manage your software licenses issued through the subscription.

### History
View your complete transaction and subscription history.

---

## Admin Features

Access the admin panel to:

- Manage products and pricing
- View all subscriptions
- Handle customer support requests
- Configure Paddle webhook settings

---

## Redeployment

After making changes:

- **UI changes only**: Run **Deploy UI** for a fast frontend update
- **Backend changes**: Run **Deploy Lambda: sbcs** to update the subscription service
- **Full redeploy**: Run **Setup + Deploy** for infrastructure changes
