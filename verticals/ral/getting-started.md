---
layout: default
title: Getting Started
parent: React Auth Lambda
grand_parent: Verticals
nav_order: 0
---

# Getting Started with React Auth Lambda

This vertical comes bundled with Nar — no separate download needed.

---

- [ ] Open `{workspace}/{vertical}/services_config/nn_env.json`
- [ ] Set `JWT_SECRET` to a unique value
- [ ] Create an **OAuth 2.0 Client ID** (Web application) in [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- [ ] Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `nn_env.json`:
  ```json
  {
    "JWT_ALGORITHM": "HS256",
    "JWT_SECRET": "your-unique-secret",
    "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
    "GOOGLE_CLIENT_SECRET": "your-client-secret"
  }
  ```
- [ ] In Nar Actions, deploy the **auth** service
- [ ] Copy the auth service URL from the deploy output
- [ ] In Google Cloud Console, add the **Authorized redirect URI**: `https://<auth-service-url>/oauth/loggedin`
- [ ] In Nar Actions, deploy the **UI**
- [ ] Open your site and log in to verify

Your React source files are at `{workspace}/{vertical}/ui/`. See the [React UI guide](/verticals/ral/ui.html) for project structure.

See [Service Environment Variables](/nar/workspace/service-environment-variables.html) for details on `nn_env.json`. See [Auth Service Setup](/verticals/common/auth.html#setup) for more on Google OAuth.
