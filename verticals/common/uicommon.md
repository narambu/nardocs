---
layout: default
title: uicommon
parent: UI Packages
grand_parent: Common Sources
nav_order: 1
---

# uicommon

Used by **all verticals**. Provides authentication, HTTP utilities, and theming.

---

## Project Structure

```text
uicommon/
├── auth/
│   ├── auth.tsx           # AuthProvider, useAuth, ProtectedRoute, LoginButton
│   └── logout.tsx         # performLogout
├── config/
│   └── runtimeConfig.ts   # getRuntimeConfig, useRuntimeConfig
├── services/
│   └── auth_api.ts        # get_session, logout (calls Auth Service)
└── utils/
    ├── ffb_api.ts         # fetchJson, postJson, uploadToS3
    ├── ffb_cache.ts       # Client-side caching with TTL
    ├── result.ts          # Result<T> response type
    └── useTheme.ts        # Dark mode hook
```

---

## Key Exports

| Module | Exports | Description |
|:-------|:--------|:------------|
| `auth/auth` | `AuthProvider`, `useAuth`, `ProtectedRoute`, `LoginButton` | Authentication state and route protection |
| `utils/useTheme` | `useTheme` | Dark/light mode based on system preference |
| `utils/ffb_api` | `fetchJson`, `postJson`, `uploadToS3` | HTTP client with built-in caching |
| `services/auth_api` | `get_session`, `logout` | Calls the [Auth Service](/verticals/common/auth.html) |
