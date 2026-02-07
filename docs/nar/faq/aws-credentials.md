---
title: AWS Credentials - Default Config Profile Not Found
sidebar_position: 1
---

# AWS Credentials - Default Config Profile Not Found

## Problem

When deploying with Nar, you encounter an error indicating that the default config profile could not be found. This suggests that the deployment tool is unable to access the necessary AWS credentials.

## Root Cause

This error occurs when AWS credentials are not properly configured on your system, or when the default profile is not set up correctly.

## Solution

### 1. Ensure AWS Credentials Are Configured

Verify that your home folder `~/.aws` contains the required credentials files:

```bash
ls -la ~/.aws
```

You should see two files:
- `~/.aws/credentials` - Contains your access keys
- `~/.aws/config` - Contains AWS configuration settings

### 2. Verify Default Profile Setup

Check that your `~/.aws/credentials` file contains a `[default]` profile:

```bash
cat ~/.aws/credentials
```

Expected format:
```ini
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

Check your `~/.aws/config` file:

```bash
cat ~/.aws/config
```

Expected format:
```ini
[default]
region = us-east-1
```

### 3. Run Init to Reinitialize

After verifying your credentials are properly configured, run the **Init** action to reinitialize the workspace context and state backend:

```bash
nar init
```

### 4. Verify AWS Credentials in Console

If the issue persists, verify your credentials in the AWS Console:

1. Go to **AWS Console** → **IAM** → **Users**
2. Select your user
3. Navigate to **Security credentials**
4. Check the **Access keys** section
5. If needed, create new access keys and update your `~/.aws/credentials` file

## Need to Set Up AWS Credentials?

If you haven't set up AWS credentials yet, follow the complete guide:

**[AWS Setup Prerequisites](/docs/prerequisites/aws-setup)**

This guide walks you through:
- Creating an IAM user for Nar
- Setting up the required permissions
- Generating and saving access keys
- Configuring the `~/.aws` directory

## Still Having Issues?

If you continue to experience problems after following these steps:

1. Ensure you have the correct IAM permissions (see [AWS Setup Prerequisites](/docs/prerequisites/aws-setup))
2. Verify there are no typos in your access keys
3. Check that your AWS account is active and in good standing
4. Try creating fresh access keys and updating your configuration
