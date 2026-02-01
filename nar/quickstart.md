---
layout: default
title: 2 Minutes to Prod
parent: Nar
nav_order: 0
---

# 2 Minutes to Prod

Ship a production-ready React application with Google OAuth to AWS—from zero to live—in record time.

## Your Deployment at a Glance

By the end of this guide, you'll have a fully functional project featuring:
- **Instant Frontend**: A React UI served globally via CloudFront CDN.
- **Secure Backend**: A Google OAuth authentication service running as a **Lambda service**.
- **Professional Setup**: Best-practice cloud infrastructure, automatically configured.

No complex AWS dashboards. No manual terminal setup. Just a smooth, professional path to production.

---

## Prerequisites

Before diving in, ensure your environment is ready by checking the [Prerequisites](../prerequisites.html).

---

## Step 1: Launch Nar & Select Workspace

1. **Launch Nar**: Open the Nar app locally.
2. **Open Workspace**: Click **Open** and select an empty folder where your code will live.

Now that your workspace is set, the Control Panel is ready for action.

---

## Step 2: Activate

The **React Auth Lambda** vertical comes pre-bundled and ready to deploy.

1. In the **Vertical** dropdown, select **React Auth Lambda**.
2. Click **Activate**.

Nar will instantly unpack your React UI and Python OAuth service code into your project folder.

---

## Step 3: Connect Your AWS Account

1. Expand **+ Context**.
2. Click **Init**.
   - Answer **Y** to any terminal prompts.

This is a one-time "handshake" that grants Nar the professional permissions needed to build on your behalf.

---

## Step 4: Verify Your Site

React Auth Lambda includes a pre-configured `dev` site in the `us-east-1` region. Ensure this site appears in the **Site** dropdown.

---

## Step 5: Provision Your Cloud Stack

1. **Setup Data Layer**: Expand **+ Data Layer** and click **Setup**.
   - Answer **Y** to any prompts and wait for the secure storage resources to be built.
2. **Setup App Layer**: Expand **+ App Layer** and click **Setup**.
   - Answer **Y** to any prompts and wait for your backend services to go live.

Your infrastructure is now live and waiting for you!

---

## Step 6: Visit Your Live Site

Once the setup is complete, the terminal will display the **URLs** for your new deployment.

Find the **Site URL** (CloudFront), open it in your browser, and celebrate—your React UI is officially live!

---

## What Just Happened?

In two minutes, Nar has:
- Built secure, scalable data resources.
- Provisioned enterprise-grade backend services for authentication.
- Deployed a high-performance React UI globally.
- Configured secure edge delivery and endpoints.

Everything is production-ready, automated, and running in *your* account.

---

## Next Steps

- **Enable Custom Domains**: Point your site to a professional domain by editing your **[domains.json](workspace/domains-json.html)**.
- **Enable Apex Domain**: Configure your root domain via **[apex.json](workspace/apex-json.html)**.
- **Customize & Iterate**: The default code is already live, so you only need to redeploy when you make changes. Run **[Deploy UI](../verticals/ral/ui.html#redeployment)** after you make changes to the code.
- **Configure OAuth**: Follow the **[Auth Service Guide](/verticals/common/auth.html)** for details.
