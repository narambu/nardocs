---
layout: default
title: UI Packages
parent: Common Sources
grand_parent: Verticals
has_children: true
has_toc: false
nav_order: 2
---

# UI Packages

Shared React packages imported by verticals via `vite.config.ts` path aliases. The same source code is duplicated to all verticals provided by Nar.

- **[uicommon](/verticals/common/uicommon.html)** — Authentication, HTTP utilities, and theming. Used by all verticals.
- **[payments](/verticals/common/payments.html)** — Billing pages and Paddle API client. Used by PPay.

---

## How Verticals Import Packages

Each vertical configures path aliases in `vite.config.ts`:

**RAL** — imports `uicommon` only:

```typescript
resolve: {
  alias: {
    'nnet-uicommon': path.resolve(__dirname, '../../../uipackages/uicommon'),
  },
}
```

**PPay** — imports `uicommon` + `payments`:

```typescript
resolve: {
  alias: {
    'nnet-uicommon': path.resolve(__dirname, '../../../uipackages/uicommon'),
    'nnet-payments': path.resolve(__dirname, '../../../uipackages/payments'),
  },
}
```

Then import in code:

```typescript
import { AuthProvider } from 'nnet-uicommon/auth/auth';
import PaddleBilling from 'nnet-payments/pages/Payment/Paddle/Billing';
```

A custom Vite plugin (`resolvePackageDeps`) ensures that npm dependencies imported by these packages resolve from the vertical's own `node_modules`.
