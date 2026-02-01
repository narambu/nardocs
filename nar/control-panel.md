---
layout: default
title: Control Panel
parent: Nar
nav_order: 1
has_children: true
has_toc: false
---

# Control Panel

The Nar Control Panel is your mission control for AWS. It provides a visual and intuitive way to manage professional-grade cloud infrastructure and deployments without needing to be an AWS expert.

![Control Panel](../assets/images/control-panel-expanded.png)

## Why Use the Control Panel?

While Nar supports full automation, the Control Panel is the best way to visualize your entire deployment stack at a glance and manage multiple environments like Dev, Staging, and Production. It allows you to update your services and UI with a single click, effectively abstracting away the complexity of the AWS console.

### Reference & Tools

To get started, you'll first establish your **[Context](control-panel/init.html)** to grant Nar the necessary AWS permissions. From there, you can define your **[Sites](control-panel/sites.html)**, provision your **[Data Layer](control-panel/data-layer.html)**, and deploy your latest logic and interfaces through the **[App Layer](control-panel/app-layer.html)**.

If you move source code (e.g. point it to a repo), **[Fix Paths](control-panel/fix-paths.html)** will keep your configurations in sync. For ongoing maintenance, our **[Tools](control-panel/tools.html)** provide site health checks and state recovery. To understand the core logic behind your projects, explore the **[Vertical](control-panel/vertical.html)** definition. Finally, when you need to retire a site, **[Destructive Actions](control-panel/destructive-actions.html)** allows you to safely and permanently remove resources.
