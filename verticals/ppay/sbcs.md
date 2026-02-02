---
layout: default
title: SBCS Service
parent: Paddle Payment Integration
grand_parent: Verticals
nav_order: 2
---

# SBCS Service

The **Subscription and Billing Service (SBCS)** is a Python Lambda that integrates with the Paddle payment gateway. It handles the backend logic for the Paddle Payment Integration vertical.

## What It Does

- **Webhook Processing** — Receives Paddle webhooks and syncs billing data to S3.
- **Subscription Management** — APIs for checking status, cancelling, resuming, and switching plans.
- **One-Time Purchases** — Tracks completed purchases, handles refunds, and grants product access.
- **Entity Licenses** — Allocates named seats or slots per purchase/subscription. Each product price can grant a configurable number of entities. Entities are automatically cleaned up if a subscription lapses or a purchase is refunded.
- **Billing History** — Provides invoice and transaction data to the frontend.

---

## API Endpoints

### User Routes

| Method | Path | Description |
|:-------|:-----|:------------|
| `GET` | `/subscriptions/status` | Get subscription status by product |
| `POST` | `/subscriptions/cancel` | Schedule cancellation at period end |
| `POST` | `/subscriptions/resume` | Resume canceled subscription |
| `POST` | `/subscriptions/update` | Switch to a different plan |
| `GET` | `/billing/history` | Get past transactions |
| `GET` | `/billing/invoice` | Download invoice PDF |
| `GET` | `/products/list` | List products and pricing |
| `GET` | `/products/access` | Check product access (subscriptions and one-time purchases) |
| `POST` | `/licenses/save` | Create entity license |
| `POST` | `/licenses/update` | Update entity license |
| `GET` | `/licenses/list` | List entity licenses |
| `GET` | `/licenses/check` | Verify license validity |
| `GET` | `/sync/status` | Check if billing sync is complete |
| `POST` | `/sync/force` | Force immediate billing data sync |

### Admin Routes

Admin routes require the provider path prefix: `/paddle/{sandbox|live}`.

| Method | Path | Description |
|:-------|:-----|:------------|
| `POST` | `/admin/sync` | Sync customer data from Paddle |
| `GET` | `/admin/catalog` | List Paddle product catalog |
| `GET` | `/config/products` | Get product configuration |
| `POST` | `/config/products` | Save product configuration |
| `GET` | `/config/p_ref` | Get product reference names |
| `POST` | `/config/p_ref` | Save product reference names |
| `GET` | `/config/credentials` | Get Paddle API credentials (masked) |
| `POST` | `/config/credentials` | Update Paddle webhook secret |

### Webhook

| Method | Path | Description |
|:-------|:-----|:------------|
| `POST` | `/webhook` | Process Paddle webhook events |

### Config

| Method | Path | Description |
|:-------|:-----|:------------|
| `GET` | `/config/active` | Get active payment provider |
| `POST` | `/config/active` | Set active payment provider |
| `GET` | `/config/providers` | List available providers |
| `GET` | `/config/is-admin` | Check if current user is admin |

### Device

| Method | Path | Description |
|:-------|:-----|:------------|
| `POST` | `/uuid` | Register device UUID |
| `GET` | `/uuid/{uuid}` | Get device UUID status |

---

## Project Structure

```text
sbcs/src/
├── lambda_handler.py          # Entry point + routing
└── lfn/
    ├── common/                # Provider config, admin check, S3 config
    ├── device/                # UUID registration and tracking
    ├── paddle/
    │   ├── api_client.py      # Paddle HTTP client with retry logic
    │   ├── admin/             # Catalog and product config
    │   └── user/
    │       ├── record/        # Sync engine, webhook handler
    │       ├── status/        # Subscriptions, purchases, history
    │       ├── operations/    # Cancel, resume, switch
    │       └── license/       # Product access, entity licenses
    └── stripe/                # Stripe provider (stub)
```

---

## Configuration

SBCS requires Paddle API credentials. Configure them via the Admin panel at `/admin`, or directly in your environment settings. The service works alongside the [Auth Service](/verticals/common/auth.html) — all user routes require authentication.

---

## Redeployment

After updating the billing logic:
1. Select **sbcs** from the Service dropdown in Nar Actions.
2. Click **Deploy Service**.
