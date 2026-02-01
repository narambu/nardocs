---
layout: default
title: Auth Service
parent: Common Components
grand_parent: Verticals
nav_exclude: true
nav_order: 1
---

# Auth Service

The `auth` service is a backend codebase provided by **Nar** that implements secure Google OAuth authentication as a **Lambda service**. It is designed as a standardized component that can be integrated into any Nar vertical.

## Configuration

The `auth` service requires valid Google OAuth credentials to function.

### 1. Get Google Credentials
1. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Create an **OAuth 2.0 Client ID** (Web application).
3. Securely copy your **Client ID** and **Client Secret**.

### 2. Update Environment Configuration
Add your credentials to the environment file for your vertical:
`Workspace/[vertical]/nnet/services_config/nn_env.json` or `Workspace/[vertical]/nnet/auth/config/nn_env.json`

```json
{
  "GOOGLE_CLIENT_ID": "YOUR_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET": "YOUR_CLIENT_SECRET"
}
```

### 3. Set Redirect URIs
In the Google Cloud Console, set the **Authorized redirect URI**:
- **With custom domain**: `https://auth.REGION.SITE.[vertical].yourdomain.com/callback`
- **Without custom domain**: `https://RANDOM_ID.execute-api.REGION.amazonaws.com/callback`

> Check your terminal output after deployment for the exact API URL and append `/callback`.

### 4. Deploy
In the Nar Control Panel:
1. Select **auth** from the Service dropdown.
2. Click **Deploy Service**.
