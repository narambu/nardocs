---
layout: default
title: Payments UI
parent: Paddle Payments
grand_parent: Verticals
nav_order: 1
---

# PPAY: Payments UI

The **Paddle Payments (PPAY)** vertical includes a comprehensive frontend codebase provided by **Nar**. It provides a professional React interface for managing subscriptions, checkouts, and billing history.

## Features
- **Subscription Management**: Built-in pages for viewing and changing plans.
- **License Tracking**: Dedicated UI for managing issued software licenses.
- **Admin Panel**: Secure dashboard for product and customer management.

## Project Structure
```text
ui/
├── src/
│   ├── pages/
│   │   └── Payment/
│   │       └── Paddle/     # Paddle-specific checkout and status pages
│   ├── services/
│   │   └── sbcs_paddle/    # Integration with the backend SBCS service
│   └── components/         # Shared React components
```

## Redeployment
1. Click **Deploy UI** in the Nar Control Panel.
2. Nar will rebuild your frontend and update the global CloudFront distribution.
