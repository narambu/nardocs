---
title: CLI
sidebar_position: 3
---

# CLI

Run Nar from the command line — on your machine, in a CI pipeline, or on a server. Everything you can do in the UX (the desktop app) is available through the CLI.

This guide walks through a full deployment using the **React Auth Lambda VPC** (`ralvpc`) vertical as an example.

**Prerequisites:** [Node.js 20 + AWS credentials](/before-you-begin)

---

## Download narcli

Download the latest narcli archive from [GitHub Releases](https://github.com/narambu/nardownloads/releases):

```bash
curl -LO https://github.com/narambu/nardownloads/releases/download/latest/narcli-darwin-arm64.zip
```

## Extract

```bash
unzip narcli-darwin-arm64.zip
```

This creates a `narcli/` directory containing the CLI and all supporting files.

## Download a vertical

Download the vertical `.nar` file from the same releases page:

```bash
curl -LO https://github.com/narambu/nardownloads/releases/download/latest/ralvpc.nar
```

## Set up your directories

Choose a **data directory** and a **workspace directory**. The data directory stores Nar's internal state. The workspace holds your project code.

```bash
export NAR_DATA="$HOME/mynar/data"
export NAR_WORKSPACE="$HOME/mynar/workspace"
mkdir -p "$NAR_DATA" "$NAR_WORKSPACE"
```

## Import the vertical

```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --workspace="$NAR_WORKSPACE" \
  --vertical=ralvpc \
  --action=import \
  --nar-file=./ralvpc.nar
```

This unpacks the vertical's UI, services, and configuration into your workspace. After import, your workspace looks like:

```
nar-workspace/ralvpc/
├── orig/          # Launcher code (UI + services)
├── nnet/          # Deployment configuration
│   ├── code.json
│   ├── deployprofile.json
│   └── domain.json
└── ...            # Symlinks to service/UI locations
```

## Authenticate

Actions like deploy and setup require a license or active trial.

1. Open [nar.narambu.com/token_for_login](https://nar.narambu.com/token_for_login) and sign in
2. Download `auth.json`
3. Run:

```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --action=login \
  --token-file=./auth.json
```

This only needs to be done once per data directory.

## Init

Creates a deploy role and Terraform state bucket in your AWS account. Run once per vertical.

```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --workspace="$NAR_WORKSPACE" \
  --vertical=ralvpc \
  --action=init \
  --region=us-east-1
```

Answer **Y** to the prompts, or pass `--auto-approve=yes` to skip them.

## Setup data layer

Provisions S3 buckets for your site's data stores.

```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --workspace="$NAR_WORKSPACE" \
  --vertical=ralvpc \
  --action=setup-data \
  --site=dev \
  --region=us-east-1
```

## Setup app layer

Provisions Lambda functions, API Gateway, CloudFront, and all supporting resources. Builds and deploys both the UI and services on first run.

```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --workspace="$NAR_WORKSPACE" \
  --vertical=ralvpc \
  --action=setup-app \
  --site=dev \
  --region=us-east-1
```

The output prints your deployment URLs. Your app is live.

## Deploy changes

After editing code, redeploy individual layers:

**Deploy UI only:**
```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --workspace="$NAR_WORKSPACE" \
  --vertical=ralvpc \
  --action=deploy-ui \
  --site=dev \
  --region=us-east-1
```

**Deploy a single service:**
```bash
bash narcli/bob/nar.sh \
  --data-dir="$NAR_DATA" \
  --workspace="$NAR_WORKSPACE" \
  --vertical=ralvpc \
  --action=deploy-service \
  --service=auth \
  --site=dev \
  --region=us-east-1
```

---

## Action reference

Every action follows the same pattern:

```bash
bash narcli/bob/nar.sh \
  --data-dir=<path> \
  --workspace=<path> \
  --vertical=<name> \
  --action=<action> \
  [--site=<site>] [--region=<region>] \
  [action-specific flags]
```

### Setup and teardown

| Action | Requires | Description |
|:-------|:---------|:------------|
| `init` | `--region` | Create deploy role + state bucket (run once per vertical) |
| `setup-data` | `--site --region` | Provision data-layer buckets |
| `setup-app` | `--site --region` | Provision app-layer resources + deploy code |
| `destroy-app` | `--site --region` | Tear down app layer (preserves data) |
| `destroy-data` | `--site --region` | Tear down data-layer buckets |
| `nuke` | `--site --region` | Full teardown — app + data + orphaned resources |

### Deployments

| Action | Requires | Description |
|:-------|:---------|:------------|
| `deploy-ui` | `--site --region` | Build and deploy UI to S3 + CloudFront |
| `deploy-service` | `--service --site --region` | Build and deploy a Lambda service |

### Inspection

| Action | Requires | Description |
|:-------|:---------|:------------|
| `deployment-urls` | `--site --region` | Print live URLs from Terraform state |
| `state-list` | `--site --region` | List all Terraform-managed resources |
| `list-buckets` | `--site --region` | Show bucket status (exists, synced, orphaned) |
| `cors-status` | `--site --region` | Print CORS status for all buckets |

### Bucket operations

| Action | Requires | Description |
|:-------|:---------|:------------|
| `empty-bucket` | `--site --region --bucket-prefix=<prefix>` | Empty all objects from a bucket |
| `enable-cors` | `--site --region --bucket-prefix=<prefix>` | Enable CORS on a bucket |
| `disable-cors` | `--site --region --bucket-prefix=<prefix>` | Remove CORS from a bucket |

Common prefixes: `uico` (UI content), `arti` (artifact), `perm`, `scra`.

### Recovery

| Action | Requires | Description |
|:-------|:---------|:------------|
| `recover` | `--site --region` | Find orphaned AWS resources and generate import config |

Run `setup-app` after `recover` to import discovered resources into Terraform state.

### Other

| Action | Requires | Description |
|:-------|:---------|:------------|
| `login` | `--token-file=<path>` | Set auth token from downloaded `auth.json` |
| `import` | `--nar-file=<path>` | Import a `.nar` vertical file |
| `workspace-location-fix` | — | Fix symlinks after moving your workspace |
| `awsconfigure` | — | Recreate the deploy role |
| `awsunconfigure` | — | Delete the deploy role |

---

## Common flags

| Flag | Description |
|:-----|:------------|
| `--auto-approve=yes` | Skip confirmation prompts |
| `--ll=debug` | Verbose logging (`debug`, `info`, `user`, `warn`, `error`) |
| `--runid=<id>` | Group logs into a single run file at `runs/{id}/run.log` |
| `--reset-lock` | Clear a stuck lock from a previous interrupted run |
