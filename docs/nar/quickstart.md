---
title: Quick Start
sidebar_position: 1
---

# Quick Start

Deploy a React application with Google OAuth to your AWS account.

**Prerequisite:** [Node.js 20 + AWS credentials](../prerequisites)

---

1. Open the [Nar app](https://nar.narambu.com/nar).
2. Click **Open** and select an empty folder. This becomes your workspace.
3. In the **Vertical** dropdown, select **React Auth Lambda**.
4. Expand **Context** and click **Init**. Answer **Y** to prompts.
5. Confirm `dev` appears in the **Site** dropdown.
6. Expand **Data Layer** and click **Setup**. Answer **Y** to prompts.
7. Expand **App Layer** and click **Setup**. Answer **Y** to prompts.
8. Open the URL from the terminal output. Your React app is live.

---

## Next Steps

- **Configure OAuth** — Follow the [React Auth Lambda Getting Started](/nar/verticals/ral/getting-started) guide to set up Google login.
- **Custom Domain** — Edit [`{workspace}/{vertical}/nnet/domain.json`](workspace/nnet/domains-json).
- **Apex Domain** — Configure [`{workspace}/{vertical}/nnet/apex.json`](workspace/nnet/apex-json).
- **Deploy Changes** — After editing code, click **Deploy UI** in Nar Actions.