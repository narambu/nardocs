---
title: React UI
sidebar_position: 2
---

# React UI

The React Auth Lambda vertical includes a frontend built with React 19 and Vite, served globally via CloudFront. [nar.narambu.com](https://nar.narambu.com) is built using Nar itself, and some of the code packaged in this vertical is also used by that website — you can check out the authentication flow there.

## Stack

- React 19, Vite, TypeScript
- Tailwind CSS, MUI
- UI Auth pages from [uicommon](/nar/verticals/common/uipackages/uicommon)

---

## Project Structure

**Location:** `{vertical}/ui/`

```text
ui/src/
├── App.tsx              # Router: /, /versions
├── index.tsx            # React entry point
├── components/
│   ├── NavBar.tsx       # Navigation bar with login/logout
│   └── Footer.tsx       # Page footer
└── pages/
    ├── Home.tsx         # Landing page
    └── Versions.tsx     # Version info
```

---

## Shared Packages

This vertical imports [uicommon](/nar/verticals/common/uipackages/uicommon) for authentication and utilities. The alias is configured in `vite.config.ts`:

```typescript
resolve: {
  alias: {
    'nnet-uicommon': path.resolve(__dirname, '../../../uipackages/uicommon'),
  },
}
```

Components used from uicommon:
- `AuthProvider`, `useAuth` — authentication state management
- `useTheme` — dark mode support

---

## Customization

The code lives at `{workspace}/{vertical}/ui/`. Edit the source files to build your application on top of the auth scaffold.

---

## Redeployment

After making changes:
1. Click **Deploy UI** in Nar Actions.
2. Nar builds the Vite project, uploads assets to S3, and invalidates the CloudFront cache.