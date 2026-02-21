---
title: Lambda + API Gateway
---

# Lambda + API Gateway FAQ

## Can I use my own Dockerfile?

Yes. Add a `dockerfile` field to your service in [code.json](/nar/workspace/nnet/code-json):

```json
{
  "name": "my_service",
  "location": "orig/my_service",
  "dockerfile": "orig/my_service/Dockerfile"
}
```

### What your Dockerfile receives

Nar passes these build arguments:

| Argument | Description |
|:---------|:------------|
| `API_NAME` | The service name (e.g., `auth`) |
| `SHARED_DIRS` | Comma-separated shared library names (e.g., `common`) |

### When to use a custom Dockerfile

- Different language (Node.js, Go, Rust, etc.)
- Different Python version
- System dependencies (ffmpeg, imagemagick, etc.)

See the [default Dockerfile](/nar/workspace/nnet/code-json/composites/services-lambda/default-dockerfile) for reference.
