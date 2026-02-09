---
title: Default Config Profile Not Found
sidebar_position: 1
---

# Default Config Profile Not Found

## Error

```
The root cause of the failure is that the default config profile could not be found.
```

## Cause

This suggests that the deployment tool is unable to access the necessary AWS credentials.

## Fix

To fix this issue, consider the following:
* Ensure that the AWS credentials are properly configured.
* Verify that the default profile is set up correctly.
* Ensure home folder `~/.aws` has required credentials.

See: **[AWS Setup Prerequisites](../../../prerequisites/aws-setup)**

Once credentials are configured:
* Run **[Init](../../nar-actions/init)** to reinitialize the workspace context and state backend.

Additional check:
* Check the AWS credentials configuration in the AWS Console: IAM > Users > Your User > Security credentials > Access keys.
