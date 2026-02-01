---
layout: default
title: awsprofile.json
parent: Your Workspace
grand_parent: Nar
nav_order: 6
---

# awsprofile.json

The `awsprofile.json` file tells Nar which AWS CLI profile to use for deployments.

**Location:** `{vertical}/nnet/awsprofile.json`

---

## Example

To use a specific profile:

```json
{
  "iamAwsProfile": "myprofile"
}
```

To use the default profile:

```json
{
  "iamAwsProfile": "default"
}
```

---

## Fields

| Field | Description |
|:------|:------------|
| `iamAwsProfile` | The name of the AWS CLI profile from `~/.aws/credentials` that Nar should use. |

---

## When to Use

If you have multiple AWS accounts or profiles configured in `~/.aws/credentials` and want Nar to use a specific one instead of `default`, set it here.

See [AWS Setup](../../prerequisites/aws-setup.html#using-a-different-profile) for how to configure multiple AWS profiles.
