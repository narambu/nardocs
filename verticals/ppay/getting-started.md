---
layout: default
title: Getting Started
parent: Paddle Payment Integration
grand_parent: Verticals
nav_order: 0
---

# Getting Started with Paddle Payment Integration

---

- [ ] Open `{workspace}/{vertical}/services_config/nn_env.json`
- [ ] Set `JWT_SECRET` to a unique value
- [ ] Create an **OAuth 2.0 Client ID** (Web application) in [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- [ ] Add credentials and admin email to `nn_env.json`:
  ```json
  {
    "JWT_ALGORITHM": "HS256",
    "JWT_SECRET": "your-unique-secret",
    "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
    "GOOGLE_CLIENT_SECRET": "your-client-secret",
    "admin_emails": "your-email@example.com"
  }
  ```
- [ ] In Nar Actions, deploy the **auth** service
- [ ] In Nar Actions, deploy the **sbcs** service
- [ ] Copy the auth service URL from the deploy output
- [ ] In Google Cloud Console, add the **Authorized redirect URI**: `https://<auth-service-url>/oauth/loggedin`
- [ ] In Nar Actions, deploy the **UI**
- [ ] Open your site and log in — you should see the **Admin** link in the nav bar
- [ ] Go to **Admin** → **Manage Products** → **Credentials** tab
- [ ] Enter your Paddle credentials:
  - **API Key** — from [Paddle dashboard](https://vendors.paddle.com/) (Developer Tools → Authentication)
  - **Client Token** — from Paddle (used for frontend checkout)
  - **Webhook Secret** — from Paddle (Developer Tools → Notifications). Set webhook URL to your sbcs service URL + `/webhook`
- [ ] Use the **Environment** dropdown to configure **Sandbox** or **Live** separately
- [ ] Go to the **Sync** tab and sync your product catalog from Paddle
- [ ] Go to the **Classify** tab to select which products are shown to users

See [Service Environment Variables](/nar/workspace/service-environment-variables.html) for details on `nn_env.json`. See [Auth Service Setup](/verticals/common/auth.html#setup) for more on Google OAuth.
