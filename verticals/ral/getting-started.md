---
layout: default
title: Getting Started
parent: React Auth Lambda
grand_parent: Verticals
nav_order: 0
---

# Getting Started with React Auth Lambda

This guide walks you through configuring the React Auth Lambda vertical after deploying it with Nar.

---

## 1. Configure Authentication

The auth service uses Google OAuth for user sign-in. You need to provide Google OAuth credentials so your users can log in.

1. Create OAuth credentials in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to your service config (`services_config/nn_env.json`).
3. Set a unique `JWT_SECRET` for session tokens.
4. Set the authorized redirect URI in Google Console.

For full instructions, see the [Auth Service Setup Guide](/verticals/common/auth.html#setup).

---

## 2. Deploy

From the Nar Control Panel, deploy:

1. **auth** service — handles Google OAuth login.
2. **UI** — the React frontend.

After deploying, visit your site URL to verify login works.

---

## 3. Customize

This vertical is your starting point. The code lives at `{workspace}/{vertical}/ui/` — edit the React source files to build your application on top of the auth scaffold.

See the [React UI guide](/verticals/ral/ui.html) for project structure and shared packages.

---

## Configuration Reference

Your `services_config/nn_env.json` should contain:

```json
{
  "JWT_ALGORITHM": "HS256",
  "JWT_SECRET": "your-unique-secret",
  "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "your-client-secret"
}
```

For details on environment variables, see [Service Environment Variables](/nar/workspace/service-environment-variables.html).
