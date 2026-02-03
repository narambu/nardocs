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

## Configure Credentials

1. Open `{workspace}/{vertical}/services_config/nn_env.json`.
2. Set `JWT_SECRET` to a unique value.
3. Create an **OAuth 2.0 Client ID** (Web application) in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
4. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `nn_env.json`:

   ```json
   {
     "JWT_ALGORITHM": "HS256",
     "JWT_SECRET": "your-unique-secret",
     "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
     "GOOGLE_CLIENT_SECRET": "your-client-secret"
   }
   ```

## Deploy Services

{:start="5"}
5. In Nar Actions, deploy the **Auth** service.
6. Copy the auth service URL from the deploy output.
7. In Google Cloud Console, add the **Authorized redirect URI**:

   ```
   https://<auth-service-url>/oauth/loggedin
   ```

## Deploy UI

{:start="8"}
8. In Nar Actions, deploy the **UI**.
9. Open your site and log in to verify.

---

Your React source files are at `{workspace}/{vertical}/ui/`. See the [React UI guide](/verticals/ral/ui.html) for project structure.

## Related

- [Service Environment Variables](/nar/workspace/code-json/environment-variables/service.html) — details on `nn_env.json`
- [Auth Service Setup](/verticals/common/auth.html#setup) — more on Google OAuth configuration
