---
layout: default
title: payments
parent: UI Packages
grand_parent: Common Sources
nav_order: 2
---

# payments

Used by **PPay vertical**. Provides billing pages and Paddle API client for subscriptions and one-time purchases.

---

## Project Structure

```text
payments/
├── pages/Payment/
│   ├── Admin.tsx                # Admin dashboard
│   └── Paddle/
│       ├── Billing.tsx          # Subscription, purchase, and billing management
│       ├── Invoices.tsx         # Invoice history
│       ├── Entities.tsx         # Entity/customer management
│       └── AdminProducts.tsx    # Product and pricing configuration
├── services/
│   ├── sbcs_paddle/             # SBCS API client
│   │   ├── products.ts          # Product queries
│   │   ├── subscriptions.ts     # Subscription operations
│   │   ├── billing.ts           # Billing history
│   │   ├── entities.ts          # Entity management
│   │   ├── config.ts            # Credentials and product config
│   │   └── admin.ts             # Admin operations
│   ├── sbcs_config.ts           # Active provider config, admin check
│   └── paddle/
│       └── paddleService.ts     # Paddle SDK integration
└── components/
    └── Notice.tsx               # Alert/notification component
```
