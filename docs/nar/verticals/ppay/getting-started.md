---
title: Getting Started
sidebar_position: 1
---

# Getting Started with Paddle Payment Integration

---

## Configure Credentials

1. Open `{workspace}/{vertical}/services_config/nn_env.json`.
2. Set `JWT_SECRET` to a unique value.
3. Create an **OAuth 2.0 Client ID** (Web application) in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
4. Add credentials and admin email to `nn_env.json`:

   ```json
   {
     "JWT_ALGORITHM": "HS256",
     "JWT_SECRET": "your-unique-secret",
     "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
     "GOOGLE_CLIENT_SECRET": "your-client-secret",
     "admin_emails": "your-email@example.com"
   }
   ```

## Deploy Services


5. In Nar Actions, deploy the **Auth** service.
6. In Nar Actions, deploy the **Subscription and Billing** service.
7. Copy the auth service URL from the deploy output.
8. In Google Cloud Console, add the **Authorized redirect URI**:

   ```
   https://<auth-service-url>/oauth/loggedin
   ```

## Deploy UI and Configure Paddle


9. In Nar Actions, deploy the **UI**.
10. Open your site and log in. You should see the **Admin** link in the nav bar.
11. Go to **Admin** > **Manage Products** > **Credentials** tab.
12. Enter your Paddle credentials:
    - **API Key** — from the [Paddle dashboard](https://vendors.paddle.com/) (Developer Tools > Authentication)
    - **Client Token** — from Paddle (used for frontend checkout)
    - **Webhook Secret** — from Paddle (Developer Tools > Notifications)
13. In Paddle, set the webhook URL to your Subscription and Billing service endpoint:

    ```
    https://sbcs.us-east-1.{site}.{vertical}.narambu.com/webhook
    ```
14. Use the **Environment** dropdown to configure **Sandbox** or **Live** separately.

## Sync Product Catalog


15. Go to the **Sync** tab and sync your product catalog from Paddle.
16. Go to the **Classify** tab to select which products are shown to users.

---

## Related

- **Environment Variables** — Services receive region, site, bucket names, and service URLs automatically. Custom variables go in `nn_env.json`.
- [Auth Service](/nar/verticals/common/auth) — more on Google OAuth configuration