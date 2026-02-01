---
layout: default
title: Destructive Actions
parent: Control Panel
grand_parent: Nar
nav_order: 11
---

# Destructive Actions

⚠ **Warning**: These buttons effectively delete your website and data.

## Empty Bucket
Cloud rules prevent you from deleting a storage bucket if it still has files inside.

If you are trying to delete a site and it fails, it might be because the buckets are full. Select the bucket and click **Empty** to permanently wipe all files inside it.

## Delete App/Data Layer

Use these to dismantle parts of your site.

- **Delete App Layer**: Removes the compute resources and API endpoints. Your user data remains safe.
- **Delete Data Layer**: Removes the data resources and file storage. **Your data will be deleted forever.**

## Nuke
When standard deletion fails.

If "Delete" isn't working—maybe the tracking file is corrupt—click **Nuke**.

This is the "Force Delete" option. It ignores the tracking files, scans the cloud for anything tagged with this site, and destroys it immediately. Use with extreme caution.
