---
layout: default
title: Getting Started
parent: Paddle Payment Integration
grand_parent: Verticals
nav_order: 0
---

# Getting Started with Paddle Payment Integration

This guide walks you through configuring the Paddle Payment Integration vertical after deploying it with Nar.

---

## 1. Configure Authentication

The auth service uses Google OAuth for user sign-in. You need to provide Google OAuth credentials so your users can log in.

1. Create OAuth credentials in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to your service config (`services_config/nn_env.json`).
3. Set a unique `JWT_SECRET` for session tokens.
4. Set the authorized redirect URI in Google Console.

For full instructions, see the [Auth Service Setup Guide](/verticals/common/auth.html#setup).

---

## 2. Set Up Admin Access

Admin access is required to configure Paddle credentials and manage products. Only emails listed in `admin_emails` are granted admin privileges.

1. Open `services_config/nn_env.json`.
2. Add your email address:
   ```json
   {
     "admin_emails": "your-email@example.com"
   }
   ```
3. Deploy the **sbcs** service from the Control Panel.
4. Log in — the **Admin** link will appear in the navigation bar.

See also: [How do I log in as admin?](/nar/faq/ppay/admin-login.html)

---

## 3. Configure Paddle Keys

Paddle API credentials connect your deployment to your Paddle account. You configure them through the Admin panel in your deployed application.

1. Log in as an admin (see step 2 above).
2. Go to **Admin** and click **Manage Products**.
3. Select the **Credentials** tab.
4. Enter your Paddle credentials:
   - **API Key** — from your Paddle dashboard (Developer Tools > Authentication).
   - **Client Token** — from Paddle (used for frontend checkout).
   - **Webhook Secret** — from Paddle (Developer Tools > Notifications). Set up a webhook endpoint pointing to your sbcs service URL + `/webhook`.

You can configure credentials separately for **Sandbox** and **Live** environments using the Environment dropdown.

---

## 4. Sync Products

After entering credentials:

1. Go to the **Sync** tab and sync your product catalog from Paddle.
2. Go to the **Classify** tab to review and configure which products are shown to users.

---

## 5. Deploy

From the Nar Control Panel, deploy:

1. **auth** service — handles Google OAuth login.
2. **sbcs** service — handles Paddle webhooks, billing, and licensing.
3. **UI** — the React frontend.

---

## Configuration Reference

Your `services_config/nn_env.json` should contain:

```json
{
  "JWT_ALGORITHM": "HS256",
  "JWT_SECRET": "your-unique-secret",
  "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "your-client-secret",
  "admin_emails": "your-email@example.com"
}
```

For details on environment variables, see [Service Environment Variables](/nar/workspace/service-environment-variables.html).
