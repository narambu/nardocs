---
layout: default
title: Getting Started
parent: React Auth Lambda
grand_parent: Verticals
nav_order: 0
---

# Getting Started with React Auth Lambda

Follow these steps in order. This vertical comes bundled with Nar — no separate download needed.

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

5. In Nar Actions, deploy the **auth** service.

6. Copy the auth service URL from the deploy output. In the Google Cloud Console, add the **Authorized redirect URI**:
   `https://<auth-service-url>/oauth/loggedin`

7. In Nar Actions, deploy the **UI**.

8. Open your site and log in to verify everything works.

9. Edit the React source files at `<workspace>/<vertical>/ui/` to build your application. See the [React UI guide](/verticals/ral/ui.html) for project structure.

---

## Full nn_env.json reference

```json
{
  "JWT_ALGORITHM": "HS256",
  "JWT_SECRET": "your-unique-secret",
  "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "your-client-secret"
}
```

See [Service Environment Variables](/nar/workspace/service-environment-variables.html) for details.

See [Auth Service Setup](/verticals/common/auth.html#setup) for more on Google OAuth configuration.
