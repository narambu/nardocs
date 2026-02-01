---
layout: default
title: Data Layer
parent: Control Panel
grand_parent: Nar
nav_order: 3
---

# Data Layer

The Data Layer creates the S3 storage buckets your application needs for persistent data.

## Setup

Clicking **Setup** provisions versioned S3 buckets for the selected site. These buckets are **protected** — they have versioning enabled and `force_destroy` disabled, meaning they survive App Layer deletion and cannot be accidentally removed with data still inside.

You typically run this once per site. The Data Layer is separate from the App Layer so that your stored data is safe even if you tear down and rebuild your application infrastructure.

## What's Created

- **Protected S3 buckets** with versioning enabled.
- Any additional buckets defined in `nnet/byv/buckets.json`.

## Relationship to the App Layer

The App Layer references the Data Layer's state to discover bucket names and pass them as environment variables to your Lambda functions. This means you must set up the Data Layer **before** the App Layer.
