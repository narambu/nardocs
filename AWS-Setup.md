# Setting Up AWS for Nar

This guide walks you through creating AWS credentials so Nar can deploy to your account.

**Time:** About 10 minutes

---

## What You'll Need

- An AWS account ([create one here](https://aws.amazon.com) if you don't have one)
- Your laptop

---

## Step 1: Create a User for Nar

1. Sign in to [AWS Console](https://console.aws.amazon.com)
2. In the search bar at the top, type **IAM** and click on it
3. Click **Users** in the left menu
4. Click **Create user**
5. For username, type: `nar-deployer`
6. Click **Next**
7. Select **Attach policies directly**
8. Don't select anything yet — click **Next**
9. Click **Create user**

---

## Step 2: Give the User Permissions

1. Click on your new user **nar-deployer**
2. Click the **Permissions** tab
3. Click **Add permissions** → **Create inline policy**
4. Click the **JSON** tab
5. Delete everything in the box and paste this:

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

6. Click **Next**
7. Name it: `nar_iam_bootstrap`
8. Click **Create policy**

---

## Step 3: Get Your Access Keys

1. Still on the **nar-deployer** user page, click **Security credentials**
2. Scroll down to **Access keys**
3. Click **Create access key**
4. Select **Command Line Interface (CLI)**
5. Check the confirmation checkbox at the bottom
6. Click **Next**, then **Create access key**

**Important:** Copy both the **Access key ID** and **Secret access key** somewhere safe. You won't be able to see the secret again.

---

## Step 4: Save Keys on Your Laptop

Open Terminal and run:

```bash
mkdir -p ~/.aws
```

Create the config file:
```bash
cat > ~/.aws/config << 'EOF'
[default]
region = us-east-1
EOF
```

Create the credentials file (replace with YOUR keys):
```bash
cat > ~/.aws/credentials << 'EOF'
[default]
aws_access_key_id = PASTE_YOUR_ACCESS_KEY_HERE
aws_secret_access_key = PASTE_YOUR_SECRET_KEY_HERE
EOF
```

---

## Done!

Nar uses the `default` AWS profile. You're ready to run Init.

---

## Using a Different Profile

If you already use AWS and want to keep Nar separate:

**1. Update `~/.aws/config`:**
```ini
[default]
region = us-east-1

[profile myprofile]
region = us-east-1
```

**2. Update `~/.aws/credentials`:**
```ini
[default]
aws_access_key_id = YOUR_OTHER_KEY
aws_secret_access_key = YOUR_OTHER_SECRET

[myprofile]
aws_access_key_id = PASTE_YOUR_ACCESS_KEY_HERE
aws_secret_access_key = PASTE_YOUR_SECRET_KEY_HERE
```

**3. In Nar, update `awsProfile.json`:**
```json
{
    "profile": "myprofile"
}
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Unable to locate credentials" | Check that `~/.aws/credentials` exists and has the right format |
| "AccessDenied" when running init | Make sure you added the `nar_iam_bootstrap` policy in Step 2 |
| "InvalidClientTokenId" | Your access key ID is wrong — create new access keys in AWS |
