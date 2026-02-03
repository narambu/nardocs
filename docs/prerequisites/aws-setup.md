---
title: AWS Setup
sidebar_position: 2
---

# Setting Up AWS for Nar

Create AWS credentials so Nar can deploy to your account.

---

## What You'll Need

- An AWS account ([create one here](https://aws.amazon.com) if you don't have one)

---

## Step 1: Create a User for Nar

1. Sign in to [AWS Console](https://console.aws.amazon.com)
2. Search for **IAM** and open it
3. Click **Users** → **Create user**
4. Username: `nar-deployer`
5. Click **Next**
6. Select **Attach policies directly**
7. Don't select anything yet — click **Next**
8. Click **Create user**

---

## Step 2: Give the User Permissions

1. Click on your new user **nar-deployer**
2. Go to the **Permissions** tab
3. Click **Add permissions** → **Create inline policy**
4. Switch to the **JSON** tab and paste:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "NarIamBootstrap",
            "Effect": "Allow",
            "Action": [
                "iam:AttachRolePolicy",
                "iam:CreatePolicy",
                "iam:CreateRole",
                "iam:DeleteAccessKey",
                "iam:DeletePolicy",
                "iam:DeleteRole",
                "iam:DeleteRolePolicy",
                "iam:DeleteUser",
                "iam:DeleteUserPolicy",
                "iam:DetachRolePolicy",
                "iam:DetachUserPolicy",
                "iam:GetPolicy",
                "iam:GetRole",
                "iam:ListAccessKeys",
                "iam:ListAttachedRolePolicies",
                "iam:ListAttachedUserPolicies",
                "iam:ListPolicies",
                "iam:ListRolePolicies",
                "iam:ListRoles",
                "iam:ListUserPolicies",
                "iam:ListUsers",
                "iam:PutRolePolicy",
                "iam:PutUserPolicy",
                "iam:UpdateAssumeRolePolicy"
            ],
            "Resource": "*"
        }
    ]
}
```

5. Click **Next**
6. Name it: `nar_iam_bootstrap`
7. Click **Create policy**

---

## Step 3: Get Your Access Keys

1. On the **nar-deployer** user page, click **Security credentials**
2. Scroll to **Access keys** → **Create access key**
3. Select **Command Line Interface (CLI)**
4. Check the confirmation box, click **Next**, then **Create access key**


Copy both the **Access key ID** and **Secret access key** now. The secret won't be shown again.

---

## Step 4: Save Keys on Your Machine

Open Terminal:

```bash
mkdir -p ~/.aws
```

Create `~/.aws/config`:
```bash
cat > ~/.aws/config << 'EOF'
[default]
region = us-east-1
EOF
```

Create `~/.aws/credentials` (replace with your keys):
```bash
cat > ~/.aws/credentials << 'EOF'
[default]
aws_access_key_id = PASTE_YOUR_ACCESS_KEY_HERE
aws_secret_access_key = PASTE_YOUR_SECRET_KEY_HERE
EOF
```

---

## Done

Nar uses the `default` AWS profile by default. You're ready to run [Init](../nar/nar-actions/init).

---

## Using a Different Profile

If you already use AWS and want a separate profile for Nar:

**1. Add to `~/.aws/config`:**
```ini
[profile myprofile]
region = us-east-1
```

**2. Add to `~/.aws/credentials`:**
```ini
[myprofile]
aws_access_key_id = PASTE_YOUR_ACCESS_KEY_HERE
aws_secret_access_key = PASTE_YOUR_SECRET_KEY_HERE
```

**3.** Set the profile in your vertical's `nnet/awsprofile.json`:
```json
{
  "iamAwsProfile": "myprofile"
}
```

---

## Troubleshooting

| Problem | Solution |
|:--------|:---------|
| "Unable to locate credentials" | Check that `~/.aws/credentials` exists and has the right format. |
| "AccessDenied" when running Init | Verify you added the `nar_iam_bootstrap` policy in Step 2. |
| "InvalidClientTokenId" | The access key ID is wrong — create new access keys in AWS. |