---
layout: default
title: Default Dockerfile
parent: code.json
grand_parent: Workspace
nav_order: 5
---

# Default Dockerfile

Nar's default Dockerfile builds a **Python 3.13** Lambda container image. It expects the following project layout for each service and shared library:

```text
{service}/
├── src/                        # Python source code
│   └── lambda_handler.py       # Lambda entry point
└── scripts/
    └── requirements.txt        # pip dependencies
```

Shared libraries follow the same convention:

```text
{shared_lib}/
├── src/                        # Reusable Python modules
└── scripts/
    └── requirements.txt        # pip dependencies
```

During the build, Nar:

1. Installs `requirements.txt` from each shared library
2. Installs `requirements.txt` from the service
3. Copies all `src/` directories to the Lambda task root (`/var/task/`)
4. Sets the entrypoint with Nar-generated [environment variables](environment-variables/service.html)

To use a different Python version, add system packages, or use a non-Python language, provide a [custom Dockerfile](../../faq/aws.html).

<details markdown="block">
<summary>View the default Dockerfile</summary>

```dockerfile
# syntax=docker/dockerfile:1.6
FROM public.ecr.aws/docker/library/python:3.13-slim-bookworm

ENV PYTHONPATH=/var/task
ARG API_NAME
ARG SHARED_DIRS

ENV PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    HOME=/tmp

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    fontconfig \
    fonts-dejavu \
    fonts-liberation \
    fonts-noto-cjk \
    fonts-noto-color-emoji \
    && rm -rf /var/lib/apt/lists/* \
    && fc-cache -f

RUN pip install --no-cache-dir awslambdaric==3.1.1

# Copy everything to temp build directory
COPY . /tmp/build/

# Install requirements from each shared directory (if SHARED_DIRS is provided)
RUN if [ -n "$SHARED_DIRS" ]; then \
      for dir in $(echo "$SHARED_DIRS" | tr ',' ' '); do \
        if [ -f "/tmp/build/${dir}/scripts/requirements.txt" ] && [ -s "/tmp/build/${dir}/scripts/requirements.txt" ]; then \
          pip install --no-cache-dir -r "/tmp/build/${dir}/scripts/requirements.txt"; \
        fi; \
      done; \
    fi

# Install service-specific requirements
RUN if [ -f "/tmp/build/${API_NAME}/scripts/requirements.txt" ] && [ -s "/tmp/build/${API_NAME}/scripts/requirements.txt" ]; then \
      pip install --no-cache-dir -r "/tmp/build/${API_NAME}/scripts/requirements.txt"; \
    fi

# Copy shared directories to /var/task
RUN if [ -n "$SHARED_DIRS" ]; then \
      for dir in $(echo "$SHARED_DIRS" | tr ',' ' '); do \
        if [ -d "/tmp/build/${dir}/src" ]; then \
          cp -r /tmp/build/${dir}/src/. /var/task/; \
        fi; \
      done; \
    fi

# Copy service source
RUN cp -r /tmp/build/${API_NAME}/src/. /var/task/

# Cleanup
RUN rm -rf /tmp/build

WORKDIR /var/task

ENTRYPOINT ["/var/task/start_lambda.sh"]
```

</details>
