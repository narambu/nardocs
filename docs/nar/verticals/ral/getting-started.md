---
title: Getting Started
sidebar_position: 1
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


5. In Nar Actions, deploy the **Auth** service.
6. Copy the auth service URL from the deploy output.
7. In Google Cloud Console, add the **Authorized redirect URI**:

   ```
   https://<auth-service-url>/oauth/loggedin
   ```

## Deploy UI


8. In Nar Actions, deploy the **UI**.
9. Open your site and log in to verify.

---

Your React source files are at `{workspace}/{vertical}/ui/`. See the [React UI guide](/nar/verticals/ral/ui) for project structure.

## Related

- **Environment Variables** — Services receive region, site, bucket names, and service URLs automatically. Custom variables go in `nn_env.json`.
- [Auth Service](/nar/verticals/common/auth) — more on Google OAuth configuration