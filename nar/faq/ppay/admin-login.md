---
layout: default
title: How do I log in as admin?
parent: FAQ
grand_parent: Nar
nav_order: 3
---

# How do I log in as admin?

Admin access is controlled by the `nn_env.json` configuration file in your service config. Only email addresses listed in that file are granted admin privileges.

## Steps

1. Open your service configuration file at `services/config/nn_env.json`.
2. Add your email address to the `admin_emails` list:
   ```json
   {
     "admin_emails": ["your-email@example.com"]
   }
   ```
3. **Redeploy the service** — select **sbcs** from the Service dropdown in the Control Panel and click **Deploy Service**.
4. Log in to your application using the email address you added.

Once logged in with an admin email, the **Admin** link will appear in the navigation bar.
