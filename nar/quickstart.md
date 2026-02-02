---
layout: default
title: 2 Minutes to Prod
parent: Nar
nav_order: 0
---

# Quick Start

Deploy a React application with Google OAuth to your AWS account from scratch.

## What You'll End Up With

- A **React + Vite** frontend served globally via CloudFront CDN.
- A **Python Lambda** auth service handling Google OAuth login and session management.
- S3 buckets, API Gateway endpoints, IAM roles, and all the supporting infrastructure — provisioned automatically.

---

## Prerequisites

Make sure you've completed the [Prerequisites](../prerequisites.html) (Node.js 20 + AWS credentials).

---

## Step 1: Launch Nar & Select Workspace

1. Open the Nar app.
2. Click **Open** and select an empty folder — this becomes your workspace.

---

## Step 2: Activate the Vertical

The **React Auth Lambda** vertical comes bundled with Nar.

1. In the **Vertical** dropdown, select **React Auth Lambda**.
2. Click **Activate**.

Nar unpacks the React UI and Python auth service code into your workspace folder.

---

## Step 3: Initialize (Connect AWS)

1. Expand **+ Context**.
2. Click **Init**.
3. Answer **Y** to any terminal prompts.

This creates a DeployIAM role and state bucket in your AWS account. It's a one-time step per AWS account.

---

## Step 4: Verify Your Site

React Auth Lambda includes a pre-configured `dev` site in `us-east-1`. Confirm it appears in the **Site** dropdown.

---

## Step 5: Provision Infrastructure

1. **Data Layer**: Expand **+ Data Layer**, click **Setup**, and answer **Y** to prompts.
   - Creates versioned S3 storage buckets.
2. **App Layer**: Expand **+ App Layer**, click **Setup**, and answer **Y** to prompts.
   - Creates Lambda functions, API Gateway, CloudFront distribution, ECR, CodeBuild, and IAM roles.

---

## Step 6: Visit Your Site

When the App Layer setup completes, the terminal displays your deployment URLs. Open the CloudFront URL in your browser — your React app is live.

---

## What Was Created

| AWS Resource | Purpose |
|:-------------|:--------|
| S3 buckets (versioned) | Persistent data storage |
| S3 bucket (UI) | Hosts frontend assets |
| CloudFront distribution | Serves UI globally from edge locations |
| Lambda function | Runs the auth service |
| API Gateway (HTTP) | Public HTTPS endpoint for the auth service |
| ECR repository | Stores Lambda container images |
| CodeBuild project | Builds and deploys service updates |
| IAM roles | Execution permissions for Lambda and CodeBuild |
| CloudWatch log groups | Logs for Lambda, API Gateway, CodeBuild |

---

## Next Steps

- **Custom Domain**: Edit [domain.json](workspace/domains-json.html) to use your own domain.
- **Apex Domain**: Configure [apex.json](workspace/apex-json.html) to serve from the root domain.
- **Deploy Changes**: After editing the frontend code, click **[Deploy UI](../verticals/ral/ui.html#redeployment)** in Nar Actions.
- **Configure OAuth**: Follow the [Auth Service Guide](/verticals/common/auth.html) to set up Google credentials.
