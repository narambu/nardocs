---
layout: default
title: 2 Minutes to Prod
parent: Nar
nav_order: 0
---

# Quick Start

Deploy a React application with Google OAuth to your AWS account.

**Prerequisite:** [Node.js 20 + AWS credentials](../prerequisites.html)

---

- [ ] Open the Nar app
- [ ] Click **Open** and select an empty folder — this becomes your workspace
- [ ] In the **Vertical** dropdown, select **React Auth Lambda**
- [ ] Expand **+ Context**, click **Init**, answer **Y** to prompts
- [ ] Confirm `dev` site appears in the **Site** dropdown
- [ ] Expand **+ Data Layer**, click **Setup**, answer **Y** to prompts
- [ ] Expand **+ App Layer**, click **Setup**, answer **Y** to prompts
- [ ] Open the CloudFront URL from the terminal output — your React app is live

---

## Next Steps

- **Configure OAuth**: Follow the [RAL Getting Started](/verticals/ral/getting-started.html) checklist to set up Google login
- **Custom Domain**: Edit [`{workspace}/{vertical}/nnet/domain.json`](workspace/domains-json.html)
- **Apex Domain**: Configure [`{workspace}/{vertical}/nnet/apex.json`](workspace/apex-json.html)
- **Deploy Changes**: After editing code, click **Deploy UI** in Nar Actions
