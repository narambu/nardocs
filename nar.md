---
layout: default
title: Nar
nav_order: 2
---

# Nar - Production Ready Verticals

Install the Nar desktop app (.dmg). Once launched, click the Nar icon in the side panel to open the control panel. From there you can run the actions below to deploy and manage your vertical.

---

## Profile

| Action | Description |
|:-------|:------------|
| **Login** | Sign in to your Nar account. |
| **Open Login Page** | Opens browser to authenticate. |
| **Clear Token** | Signs you out of the current session. |
| **View Logs** | Opens authentication logs for debugging. |
| **Use Token** | Paste and apply a token from browser. |

---

## Workspace

| Action | Description |
|:-------|:------------|
| **Init** | One-time setup. Run this once before any other action. |
| **Fix Workspace Locations** | Re-links paths after editing nnet/code.json. |
| **Open Existing Workspace** | Opens a folder with existing Nar config. |
| **New Workspace** | Creates a fresh workspace scaffold. |

---

## Site

| Action | Description |
|:-------|:------------|
| **Site Selector** | Choose which site/region to target. |
| **+ (Add Site)** | Create a new site or reactivate a deleted one. |
| **Setup + Deploy** | Creates infrastructure and deploys all code. Use for initial setup or full redeploy. |
| **Deploy UI** | Builds and deploys only the frontend. Fast update for UI changes. |
| **Deploy Lambda: [service]** | Builds and deploys a single backend service. |
| **Delete Site** | Removes all resources for this site. Marks site as deleted. |

---

## System

| Action | Description |
|:-------|:------------|
| **Nuke All** | Full cleanup. Deletes all sites, removes orphaned resources, clears all state. Irreversible. |

---

{: .note }
After editing config files or adding sites/services, reload: `Cmd+Shift+P` then `Developer: Reload Window`
