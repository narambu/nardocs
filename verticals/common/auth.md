---
layout: default
title: Auth Service
parent: Common Sources
grand_parent: Verticals
nav_order: 1
---

# Auth Service

The auth service is a Python Lambda that handles Google OAuth authentication. The same source code is duplicated to all verticals provided by Nar.

## What It Does

- OAuth login flow with Google
- Session management via JWT tokens
- Session validation for authenticated API requests
- Logout

---

## API Endpoints

| Method | Path | Description |
|:-------|:-----|:------------|
| `GET` | `/oauth/login` | Initiate Google OAuth flow (redirects to Google) |
| `GET` | `/oauth/loggedin` | OAuth callback — exchanges code for JWT, sets session cookie |
| `GET` | `/oauth/nn/session` | Get current session (requires auth) — returns username and token |
| `POST` | `/oauth/logout` | Clear session cookie |
| `GET` | `/test` | Health check |
| `GET` | `/version` | Service version |

---

## Project Structure

```text
auth/src/
├── lambda_handler.py       # Entry point + routing
└── lfn/
    ├── routes_impl.py      # OAuth route handlers
    └── serviceenv.py       # Environment variable getters
```

---

## Setup

### 1. Get Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Create an **OAuth 2.0 Client ID** (type: Web application).
3. Copy your **Client ID** and **Client Secret**.

### 2. Add Credentials to Your Config

Add the credentials to the service environment config. The exact path depends on your vertical's [code.json](../../nar/workspace/code-json.html) — specifically the `services.configDir.location` field. Typically:

`{workspace}/{vertical}/services_config/nn_env.json`

```json
{
  "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "your-client-secret"
}
```

### 3. Set Redirect URIs in Google Console

In the Google Cloud Console, add the **Authorized redirect URI**:

- **With a custom domain:**
  `https://auth.{region}.{site}.{vertical}.yourdomain.com/oauth/loggedin`

- **Without a custom domain:**
  `https://{api-id}.execute-api.{region}.amazonaws.com/oauth/loggedin`

{: .note }
After deploying the auth service for the first time, check the terminal output for the exact API Gateway URL. Append `/oauth/loggedin` to get the redirect URI.

### 4. Deploy

In the Control Panel:
1. Select **auth** from the Service dropdown.
2. Click **Deploy Service**.
