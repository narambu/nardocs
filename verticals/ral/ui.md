---
layout: default
title: React UI
parent: React Auth Lambda
grand_parent: Verticals
nav_order: 1
---

# RAL: React UI

The **React Auth Lambda (RAL)** vertical includes a production-ready frontend codebase provided by **Nar**. Built with React 19 and Vite, it serves as a high-performance interface that integrates seamlessly with backend Lambda services and is served globally via CloudFront.

## Features
- **Fast & Modern**: Built with React 19, Vite, and Tailwind CSS.
- **Integrated Auth**: Pre-configured to communicate with the shared `auth` service.
- **Customizable**: Clean structure ready for your specific features.

## Project Structure
```text
ui/
├── src/
│   ├── auth/          # Authentication hooks and logic
│   ├── components/    # Reusable React components
│   ├── pages/         # Page components (Home, Dashboard)
│   └── common/        # Shared utilities
```

## Redeployment
When you make visual or logic changes to your frontend:
1. In the Nar Control Panel, click **Deploy UI**.
2. Nar builds your assets and publishes them to the global CDN.
