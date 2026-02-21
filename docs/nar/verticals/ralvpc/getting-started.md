---
title: Getting Started
sidebar_position: 1
---

# Getting Started with React Auth Lambda VPC

This vertical comes bundled with Nar — no separate download needed.

---

## Configure Credentials

1. Open `{workspace}/{vertical}/services_config/nn_env.json`.
2. Set `JWT_SECRET` to a unique value.
3. Create an **OAuth 2.0 Client ID** (Web application) in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
4. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `nn_env.json`:

   ```json
   {
     "JWT_ALGORITHM": "HS256",
     "JWT_SECRET": "your-unique-secret",
     "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
     "GOOGLE_CLIENT_SECRET": "your-client-secret"
   }
   ```

## Configure VPC

This vertical's `code.json` includes a `network` block that places Lambda functions inside a VPC. Update the subnet and security group IDs in `code.json` to match your AWS environment:

```json
{
  "name": "auth",
  "location": "orig/auth",
  "network": {
    "subnets": ["subnet-your-id-1", "subnet-your-id-2"],
    "securityGroups": ["sg-your-id"]
  }
}
```

See [services.lambda — Network Configuration](/nar/workspace/nnet/code-json/composites/services-lambda#network-configuration) for details.

## Deploy Services


5. In the UX, deploy the **Auth** service.
6. Copy the auth service URL from the deploy output.
7. In Google Cloud Console, add the **Authorized redirect URI**:

   ```
   https://<auth-service-url>/oauth/loggedin
   ```

## Deploy UI


8. In the UX, deploy the **UI**.
9. Open your site and log in to verify.

---

Your React source files are at `{workspace}/{vertical}/ui/`. See the [React UI guide](/nar/verticals/ralvpc/ui) for project structure.

## Related

- **Environment Variables** — Services receive region, site, bucket names, and service URLs automatically. Custom variables go in `nn_env.json`.
- [Auth Service](/nar/verticals/common/auth) — more on Google OAuth configuration
- [VPC Configuration](/nar/workspace/nnet/code-json/composites/services-lambda/aws#vpc) — how `network` maps to AWS VPC resources
