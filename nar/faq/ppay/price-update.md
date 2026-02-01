---
layout: default
title: Price not reflected after editing in Paddle?
parent: FAQ
grand_parent: Nar
nav_order: 2
---

# I edited the price in Paddle but do not see it reflected in users billing options

When you update a price directly in the Paddle dashboard, the change is not automatically picked up by your deployed application. The billing options shown to users are based on the product configuration saved in your admin panel, not fetched live from Paddle on every page load.

## How to fix

1. Log in as an **admin** user (see [How do I log in as admin?](admin-login.html)).
2. Navigate to the **Admin** page.
3. Go to the **Classify** section — this shows the products and prices pulled from your Paddle catalog.
4. **Save** the products again. This re-syncs the product configuration with the latest Paddle pricing.

After saving, the updated prices will appear in the billing options for your users.
