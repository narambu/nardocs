---
layout: default
title: React Auth Lambda
nav_order: 3
---

# React Auth Lambda

A minimal React + Vite starter with Google OAuth authentication via AWS Lambda.

---

## Features

- **Secure Auth** - Google OAuth via AWS Lambda backend
- **Fast & Modern** - React 19 + Vite + Tailwind CSS
- **Customizable** - Clean structure ready for your features

---

## Getting Started

### Prerequisites

- Node.js 18+
- AWS Account with credentials configured
- Google OAuth credentials (Client ID and Secret)

### Deployment

1. Download the React Auth Lambda vertical DMG from [nar.narambu.com](https://nar.narambu.com)
2. Install and open in VS Code
3. Run **Init** from the Nar panel to set up your workspace
4. Configure your Google OAuth credentials in the config
5. Run **Setup + Deploy** to deploy to AWS

---

## Project Structure

```
ui/
├── src/
│   ├── auth/          # Authentication logic
│   ├── components/    # React components
│   ├── pages/         # Page components
│   └── common/        # Shared utilities
```

---

## Customization

This is your code. After deployment, you can:

- Modify the UI in `ui/src/`
- Add new pages and routes
- Customize the authentication flow
- Use your favorite LLM to extend functionality

---

## Redeployment

After making changes:

- **UI changes only**: Run **Deploy UI** for a fast frontend update
- **Backend changes**: Run **Deploy Lambda: auth** to update the auth service
- **Full redeploy**: Run **Setup + Deploy** for infrastructure changes
