# EDR-Vault

**Personal Game Library & Save Backup Manager**

> Portable · No installation required · Runs from USB · Windows 10 / 11 (x64)

[![Version](https://img.shields.io/badge/version-1.0.5-blue?style=flat-square)](https://github.com/EDR23/EDR-VAULT/releases/latest)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%2010%2F11-lightgrey?style=flat-square)]()
[![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F?style=flat-square&logo=electron)](https://electronjs.org)

---

## What is EDR-Vault?

EDR-Vault is a personal game library manager built on Electron. It lets you organise every game you own in one clean dark interface, manage save-game folders, back up those saves to your own FTP server and restore them with a single click — all from a portable `.exe` that needs no installation.

---

## ✨ Features

### Library
- Unified game library with cover art
- Launch games directly and track total playtime automatically
- **Live session timer** — see how long you've been playing in the detail panel
- **Game Notes** — add personal notes to any game
- One-click **copy buttons** for save folder and exe paths
- Favourites, sorting, and instant search
- **Keyboard shortcuts**: `/` search · `Space` play · `F` favourite
- **Auto-name from EXE** — game name fills in automatically when you pick the executable

### FTP Backup & Restore
- Manual and **automatic FTP backup** of save files (zipped, on a 20–60 min schedule)
- **FTPS support** — FTP over TLS for encrypted connections
- One-click **Restore** or full **Recover** (rebuilds folder structure — great after a clean Windows install)
- **Save folder scanner** with multi-result selection, OneDrive paths and D: drive Steam libraries
- **FTP Save Purge** — keeps only the 3 most recent backups per game automatically
- **Config Snapshots** — back up and restore your full library + settings to FTP (keeps last 3 versions)

### Interface
- **9 visual themes**: Abyss · Obsidian · Jungle · Ember · Aurora · Storm · Dawn · Sangre · Midnight
- English / Spanish UI — switch instantly in Settings, no restart needed
- In-app **toast notifications** — smooth slide-in alerts replace system popups
- Built-in **Update Checker** — compares your version against the latest GitHub release

---

## 🚀 Getting Started

1. Download the latest `Build.zip` from [Releases](https://github.com/EDR23/EDR-VAULT/releases/latest)
2. Extract anywhere — USB, desktop, wherever you like
3. Run build.bat to generate your own `EDR-Vault-Portable.exe`
4. Click **+ ADD GAME** and start building your library

No admin rights required. No registry entries. No traces left behind.

---

## ☁️ FTP Setup

EDR-Vault uses standard FTP or FTPS for cloud backups. We recommend **[ftpgrid.com](https://ftpgrid.com)** — free FTP hosting with no credit card needed.

1. Sign up at [ftpgrid.com](https://ftpgrid.com)
2. Note your host, port, username and password
3. Open **Settings → FTP Configuration** in EDR-Vault and fill in the details
4. Optionally enable **FTPS** for TLS-encrypted transfers

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search bar |
| `Space` | Launch selected game |
| `F` | Toggle favourite |

---

## 🎨 Themes

| Theme | Style |
|-------|-------|
| Abyss | Deep blue-black |
| Obsidian | Dark neutral |
| Jungle | Green accent |
| Ember | Orange warm |
| Aurora | Teal/purple |
| Storm | Cold grey-blue |
| Dawn | Light soft |
| Sangre | Deep crimson |
| Midnight | Ultra dark |

---

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

**v1.0.5 highlights:** Game Notes · Live Session Timer · Toast Notifications · FTPS · New Sangre theme · Keyboard shortcuts · Copy path buttons · Extended save scanner

---

## 🔧 Building from Source

Requirements: **Node.js 18+** and **npm**

```bash
# Install dependencies
npm install

# Run in development
npm start

# Build portable .exe
BUILD.bat
```

Or run `BUILD.bat` directly — it handles the full `electron-builder` process.

---

## 📁 Repository Structure

```
EDR-VAULT/
├── index.html          # Main renderer — entire UI
├── main.js             # Electron main process
├── preload.js          # IPC bridge (main window)
├── preload-cloud.js    # IPC bridge (FTP window)
├── ftp.html            # FTP configuration window
├── debug.html          # Debug & diagnostics tool
├── package.json        # Electron build config
├── BUILD.bat           # One-click build script
├── CHANGELOG.md        # Version history
└── README.md
```

---

## 📜 License

MIT License — free for personal and commercial use.
You may copy, modify and distribute this software freely.

---

*EDR-Vault — because your saves deserve a backup.*
