---
layout: default
title: Node.js
parent: Prerequisites
nav_order: 1
---

# Installing Node.js

Nar requires **Node.js 20** or later to build frontend assets.

---

## Option 1: Direct Download (Recommended)

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** version (20.x or later)
3. Run the installer

Verify:
```bash
node --version
```

You should see `v20.x.x` or higher.

---

## Option 2: nvm (Node Version Manager)

nvm lets you install and switch between multiple Node versions.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

Close and reopen your terminal, then:

```bash
nvm install 20
nvm use 20
nvm alias default 20
```

---

## Option 3: Homebrew (macOS)

```bash
brew install node@20
```

---

## npm

npm comes bundled with Node.js — no separate install needed.

```bash
npm --version
```

---

## Troubleshooting

| Problem | Solution |
|:--------|:---------|
| `node: command not found` | Restart your terminal, or check that Node is in your PATH. |
| Wrong Node version | Use nvm to switch: `nvm use 20` |
| Permission errors with npm | Don't use `sudo` with npm. Fix with: `sudo chown -R $(whoami) ~/.npm` |
