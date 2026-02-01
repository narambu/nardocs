---
layout: default
title: Node.js
parent: Prerequisites
nav_order: 1
---

# Installing Node.js

Nar requires **Node.js 20** or later.

---

## Option 1: Direct Download (Recommended)

Download and install from [nodejs.org](https://nodejs.org/):

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** version (20.x or later)
3. Run the installer

Verify installation:
```bash
node --version
```

You should see `v20.x.x` or higher.

---

## Option 2: Using nvm (Node Version Manager)

nvm lets you install and switch between multiple Node versions.

### Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Close and reopen your terminal, then:

```bash
nvm install 20
nvm use 20
```

### Set Default Version

To always use Node 20:
```bash
nvm alias default 20
```

---

## Option 3: Using Homebrew (macOS)

```bash
brew install node@20
```

---

## What About npm?

npm (Node Package Manager) comes bundled with Node.js. When you install Node.js, you automatically get npm.

Verify npm:
```bash
npm --version
```

---

## Troubleshooting

| Problem | Solution |
|:--------|:---------|
| `node: command not found` | Restart your terminal, or check that Node is in your PATH |
| Wrong Node version | Use nvm to switch: `nvm use 20` |
| Permission errors with npm | Don't use `sudo` with npm. Fix with: `sudo chown -R $(whoami) ~/.npm` |
