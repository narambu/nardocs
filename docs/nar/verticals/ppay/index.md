---
title: Paddle Payment Integration
---

# Paddle Payment Integration

A complete payment integration vertical using Paddle for subscriptions, one-time purchases, and license management.

**[Getting Started](/nar/verticals/ppay/getting-started)** — Configure auth, Paddle keys, and admin access.

**Includes:**
- **[Payments UI](/nar/verticals/ppay/ui)** — React frontend for checkout, billing, subscriptions, and admin.
- **[Subscription and Billing Service](/nar/verticals/ppay/sbcs)** — Backend Lambda for Paddle webhook processing, license logic, and customer management.
- **[Auth Service](/nar/verticals/common/auth)** — Shared Google OAuth authentication.

---

## FAQ

**I edited the price in Paddle but do not see it reflected in users billing options**

When you update a price in Paddle, the change isn't automatically picked up. Log in as admin, go to **Admin > Classify**, and **Save** the products again to re-sync.

**How do I log in as admin?**

Add your email to `admin_emails` in `services_config/nn_env.json` and redeploy the Subscription and Billing service.