---
layout: default
title: Payments UI
parent: Paddle Payment Integration
grand_parent: Verticals
nav_order: 1
---

# Payments UI (PPay)

The Paddle Payment Integration vertical includes a React frontend for managing subscriptions, checkout flows, and billing. [nar.narambu.com](https://nar.narambu.com) is built using Nar itself, and some of the code packaged in this vertical is also used by that website — you can check out the authentication and payments flow there.

## Stack

- React 19, Vite, TypeScript
- Tailwind CSS, MUI
- UI Auth pages from [uicommon](/verticals/common/uicommon.html)
- UI Payment pages from [payments](/verticals/common/payments.html) package

---

## Project Structure

**Location:** `{vertical}/ui/`

```text
ui/src/
├── App.tsx              # Router with protected routes
├── index.tsx            # React entry point
├── components/
│   ├── NavBar.tsx       # Navigation with auth + admin check
│   ├── Footer.tsx       # Page footer
│   └── Notice.tsx       # Alert/notification component
└── pages/
    └── Home.tsx         # Landing page
```

Most pages come from the shared [payments](/verticals/common/payments.html) package.

---

## Routes

| Path | Page | Auth Required | Source |
|:-----|:-----|:--------------|:-------|
| `/` | Home | No | Local |
| `/billing` | Billing | Yes | nnet-payments |
| `/invoices` | Invoices | Yes | nnet-payments |
| `/entities` | Entities | Yes | nnet-payments |
| `/admin` | Admin | Yes | nnet-payments |
| `/paddle/:env/admin/products` | Product Config | Yes | nnet-payments |
| `/token_for_login` | Token Login | Yes | nnet-payments |

---

## Shared Packages

PPay imports both [uicommon](/verticals/common/uicommon.html) and [payments](/verticals/common/payments.html). The aliases are configured in `vite.config.ts`:

```typescript
resolve: {
  alias: {
    'nnet-uicommon': path.resolve(__dirname, '../../../uipackages/uicommon'),
    'nnet-payments': path.resolve(__dirname, '../../../uipackages/payments'),
  },
}
```

---

## Redeployment

After making changes:
1. Click **Deploy UI** in Nar Actions.
2. Nar builds the Vite project, uploads assets to S3, and invalidates the CloudFront cache.
