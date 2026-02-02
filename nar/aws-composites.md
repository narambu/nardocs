---
layout: default
title: Composites
parent: Nar
nav_order: 1.5
has_children: true
has_toc: false
---

# Composites

Each application component maps to a **composite** — a set of cloud resources that Nar provisions and manages together. Your [code.json](workspace/code-json.html) maps your source code to these composites.

## AWS

| Composite | What it deploys |
|:----------|:----------------|
| [AWS: Lambda + API Gateway](workspace/service-lambda.html) | Backend services as Lambda functions behind API Gateway. |
| [AWS: CloudFront + S3](workspace/ui-vite.html) | Frontend as a Vite build to S3 behind CloudFront. |
