---
layout: default
title: Composites
parent: FAQ
grand_parent: Nar
nav_order: 1
---

# Composites

## Can I use my own Dockerfile for services?

Yes. The [Lambda + API Gateway](../workspace/service-lambda.html) composite deploys services as container images. Nar provides a [default Dockerfile](../workspace/default-dockerfile.html) for Python 3.13 Lambdas, but you can bring your own.

### How to Use a Custom Dockerfile

Add a `dockerfile` field to your service entry in [code.json](../workspace/code-json.html):

```json
{
  "name": "my_service",
  "location": "orig/my_service",
  "dockerfile": "/your/location/for/Dockerfile"
}
```

### Why Bring Your Own Dockerfile

- **Different language** — Use Node.js, Go, Rust, or any language that supports the AWS Lambda runtime interface. The deploy pipeline (CodeBuild, ECR, Lambda) is language-agnostic.
- **Different Python version** — Pin to a specific Python version instead of the default 3.13.
- **System dependencies** — Install packages like `ffmpeg`, `imagemagick`, or native libraries your code depends on.
- **Binary compilation** — Build native extensions or compiled binaries that require a specific build environment.
- **Custom project layout** — If your service doesn't follow the default `src/` and `scripts/requirements.txt` conventions.

### What Your Custom Dockerfile Receives

When Nar deploys a service, it packages your source code, shared libraries, and generated files into a zip and sends it to CodeBuild. CodeBuild extracts the zip and runs `docker build` with your Dockerfile. The build context looks like this:

```text
build context/
├── auth/                    ← service source (name from code.json)
│   ├── src/
│   └── scripts/
├── common/                  ← shared library (if any)
│   ├── src/
│   └── scripts/
├── nar_env.sh               ← environment variables as shell exports
└── lambda_dockerfile         ← the Dockerfile being used
```

Nar also passes two build arguments so your Dockerfile can locate the right directories:

- `API_NAME` — the service name (e.g., `auth`)
- `SHARED_DIRS` — comma-separated shared library names (e.g., `common`)

### Environment Variables

Nar generates `nar_env.sh` containing all [environment variables](../workspace/service-environment-variables.html) as shell exports (bucket names, service URLs, nn_env.json values). Your Dockerfile should source this file in its entrypoint:

```dockerfile
ARG API_NAME
COPY . /tmp/build/
RUN cp -r /tmp/build/${API_NAME}/src/. /var/task/
RUN cp /tmp/build/${API_NAME}/src/nar_env.sh /var/task/

ENTRYPOINT ["/bin/bash", "-c", "source /var/task/nar_env.sh && exec /var/task/bootstrap"]
```

See the [default Dockerfile](../workspace/default-dockerfile.html) for a complete working example.
