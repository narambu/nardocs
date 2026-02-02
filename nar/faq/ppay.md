---
layout: default
title: Paddle Payment Integration
parent: FAQ
grand_parent: Nar
nav_order: 2
---

# Paddle Payment Integration

## I edited the price in Paddle but do not see it reflected in users billing options

When you update a price directly in the Paddle dashboard, the change is not automatically picked up by your deployed application. The billing options shown to users are based on the product configuration saved in your admin panel, not fetched live from Paddle on every page load.

### How to fix

1. Log in as an **admin** user (see [How do I log in as admin?](#how-do-i-log-in-as-admin) below).
2. Navigate to the **Admin** page.
3. Go to the **Classify** section — this shows the products and prices pulled from your Paddle catalog.
4. **Save** the products again. This re-syncs the product configuration with the latest Paddle pricing.

After saving, the updated prices will appear in the billing options for your users.

---

## How do I log in as admin?

Admin access is controlled by the `nn_env.json` configuration file in your service config. Only email addresses listed in that file are granted admin privileges.

### Steps

1. Open your service configuration file at `{vertical}/services_config/nn_env.json`.
2. Add your email address to the `admin_emails` list:
   ```json
   {
     "admin_emails": ["your-email@example.com"]
   }
   ```
3. **Redeploy the service** — select **Subscription and Billing** from the Service dropdown in Nar Actions and click **Deploy Service**.
4. Log in to your application using the email address you added.

Once logged in with an admin email, the **Admin** link will appear in the navigation bar.
