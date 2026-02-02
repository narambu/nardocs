---
layout: default
title: Getting Started
parent: Paddle Payment Integration
grand_parent: Verticals
nav_order: 0
---

# Getting Started with Paddle Payment Integration

Follow these steps in order after importing the vertical into your workspace.

---

1. Open `<workspace>/<vertical>/nnet/services_config/nn_env.json`.

2. Set a unique value for `JWT_SECRET`.

3. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and create an **OAuth 2.0 Client ID** (Web application).

4. Copy the **Client ID** and **Client Secret** into `nn_env.json`:
   ```json
   {
     "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
     "GOOGLE_CLIENT_SECRET": "your-client-secret"
   }
   ```

5. Add your email to `admin_emails` so you can access the Admin panel:
   ```json
   {
     "admin_emails": "your-email@example.com"
   }
   ```

6. In Nar Actions, deploy the **auth** service.

7. In Nar Actions, deploy the **sbcs** service.

8. Copy the auth service URL from the deploy output. In the Google Cloud Console, add the **Authorized redirect URI**:
   `https://<auth-service-url>/oauth/loggedin`

9. In Nar Actions, deploy the **UI**.

10. Open your site and log in. You should see the **Admin** link in the navigation bar.

11. Go to **Admin** → **Manage Products** → **Credentials** tab.

12. Enter your Paddle credentials:
    - **API Key** — from your [Paddle dashboard](https://vendors.paddle.com/) (Developer Tools → Authentication).
    - **Client Token** — from Paddle (used for frontend checkout).
    - **Webhook Secret** — from Paddle (Developer Tools → Notifications). Set the webhook URL to your sbcs service URL + `/webhook`.

13. Use the **Environment** dropdown to configure credentials for **Sandbox** or **Live** separately.

14. Go to the **Sync** tab and sync your product catalog from Paddle.

15. Go to the **Classify** tab to review and select which products are shown to users.

---

## Full nn_env.json reference

```json
{
  "JWT_ALGORITHM": "HS256",
  "JWT_SECRET": "your-unique-secret",
  "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "your-client-secret",
  "admin_emails": "your-email@example.com"
}
```

See [Service Environment Variables](/nar/workspace/service-environment-variables.html) for details.

See [Auth Service Setup](/verticals/common/auth.html#setup) for more on Google OAuth configuration.
