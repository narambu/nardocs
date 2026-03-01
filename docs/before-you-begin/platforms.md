---
title: Supported Platforms
sidebar_position: 0
---

# Supported Platforms

## UX (Desktop App)

| Platform | Architecture | Status |
|:---------|:-------------|:-------|
| macOS | arm64 (Apple Silicon) | Supported — DMG |
| Windows | amd64 | Supported — VS Code Extension (VSIX) |
| Linux | — | Not planned |

**macOS:** Install the DMG from [nar.narambu.com/nar](https://nar.narambu.com/nar). The desktop app includes a built-in editor, terminal, and the full [UX](/nar/ux) control panel.

**Windows:** Install the VSIX in VS Code. Requires [Git for Windows](https://gitforwindows.org/) (provides Git Bash).

## CLI

| Platform | Architecture | Status |
|:---------|:-------------|:-------|
| macOS | arm64 (Apple Silicon) | Supported |
| Windows | amd64 | Supported |
| Linux | amd64 | Supported |

Download narcli from [GitHub Releases](https://github.com/narambu/nardownloads/releases). See the [CLI guide](/nar/cli) for setup and usage.

**Windows prerequisite:** [Git for Windows](https://gitforwindows.org/) must be installed (provides Git Bash to run CLI scripts).

## Architecture

Both the UX and CLI share the same underlying engine. Every action available in the UX can also be run via the CLI — they are functionally equivalent.
