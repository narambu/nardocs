---
title: uicommon
---

# uicommon

Used by **all verticals**. Provides authentication, HTTP utilities, and theming.

---

## Project Structure

Resolved via the `nnet-uicommon` alias in `{workspace}/{vertical}/ui/vite.config.ts`.

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
| `services/auth_api` | `get_session`, `logout` | Calls the [Auth Service](/nar/verticals/common/auth) |