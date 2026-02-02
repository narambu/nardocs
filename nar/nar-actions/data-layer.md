---
layout: default
title: Data Layer
parent: Nar Actions
grand_parent: Nar
nav_order: 3
---

# Data Layer

The Data Layer provisions the infrastructure your application uses for persistent storage. This is where any resources that hold data live — separate from the App Layer so your data is safe even if you tear down and rebuild your application.

## Setup

Clicking **Setup** creates the Data Layer for the selected site. Resources in this layer are **protected** — buckets have versioning enabled and force-destroy disabled, meaning they survive App Layer deletion and cannot be accidentally removed with data still inside.

You typically run this once per site.

## What's Created

- [Built-in buckets](/nar/workspace/buckets-json.html#built-in-buckets) that Nar provides automatically (e.g., `perm` for persistent data).
- Any additional buckets you define in [byv/buckets.json](/nar/workspace/buckets-json.html).

## Relationship to the App Layer

The App Layer references the Data Layer's state to discover bucket names and pass them as environment variables to your services. This means you must set up the Data Layer **before** the App Layer.
