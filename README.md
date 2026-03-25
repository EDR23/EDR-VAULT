<div align="center">

<img src="icon.ico" width="80" alt="EDR-Vault logo"/>

# EDR-Vault

**Portable game library & save backup manager for Windows**

[![Version](https://img.shields.io/badge/version-v1.2.2-blue?style=for-the-badge)](https://github.com/EDR23/EDR-VAULT/releases/latest)
[![Platform](https://img.shields.io/badge/Windows-10%20%2F%2011%20x64-0078d4?style=for-the-badge&logo=windows)](https://github.com/EDR23/EDR-VAULT/releases/latest)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge)](LICENSE)
[![VirusTotal](https://img.shields.io/badge/VirusTotal-Clean-brightgreen?style=for-the-badge&logo=virustotal)](https://www.virustotal.com/gui/file/ba96e00859a3e26c3d498282a02a4a06f3bd158044329226df967e8d62fcbbd3)
[![Electron](https://img.shields.io/badge/Electron-Portable-47848f?style=for-the-badge&logo=electron)](https://github.com/EDR23/EDR-VAULT/releases/latest)

**[⬇️ Download latest](https://github.com/EDR23/EDR-VAULT/releases/latest)** &nbsp;·&nbsp; **[📋 Changelog](CHANGELOG.md)** &nbsp;·&nbsp; **[🐛 Report a bug](https://github.com/EDR23/EDR-VAULT/issues)**

</div>

---

## 🗂️ What is EDR-Vault?

EDR-Vault is a **zero-install, single-file portable application** for Windows that lets you manage your entire game library and automatically back up your save files to a personal FTP server — no cloud accounts, no subscriptions, no bloat. Everything stays on your own server.

> **Just drop the `.exe` and run.** No setup wizard, no dependencies, no admin rights required.

---

## ✨ Features at a glance

### 🎮 Game Library
| Feature | Details |
|---|---|
| **Add any game** | Point to any `.exe` — Steam, GOG, Epic, emulators, anything |
| **Launch from app** | Launch with optional custom arguments |
| **Playtime tracking** | Automatic session timer, total hours, session history |
| **Activity heatmaps** | 52-week GitHub-style annual heatmap + Last 4 Weeks per-game grid |
| **Executable health** | Checks every 5 min if the `.exe` still exists — red badge if missing |
| **Cover art** | Built-in Bing HD cover search, drag-and-drop custom covers |
| **Notes** | Per-game freeform notes |
| **Favorites & Categories** | Pin games, filter by recent, backups |
| **🎲 Random Game** | 3D drum-wheel case-opening roll that picks from your installed games |

### 💾 Save Backup System
| Feature | Details |
|---|---|
| **Manual backup** | One click — zips saves and uploads to FTP |
| **Auto-backup** | Scheduled every 20–60 min while the app is open |
| **Differential backup** | Skips games with no save changes since last upload |
| **Auto-restore** | Download any backup and extract to the original save path |
| **Auto-purge** | Keep only N most recent backups per game (configurable) |
| **Config snapshots** | Backs up your entire EDR-Vault library config to FTP |
| **FTPS support** | FTP over TLS for encrypted transfers |
| **Backup on close** | Optional: backs up everything when you exit the app |

### 🌐 FTP Manager
- Visual connection status badge in titlebar
- Upload/download progress bar
- Persistent red error badge after 3 consecutive failures
- Rename, delete and restore individual backups from the UI
- FTP size stats per-game and total usage

### 🎨 Themes — 20+ skins including 16 animated 3D

<details>
<summary><b>Click to expand full theme list</b></summary>

#### Static themes
| ID | Name |
|---|---|
| `abismo` | Abyss Dark |
| `sangre` | Blood Moon |
| `default` | Default |
| `galaxy` | Galaxy ✨ |
| `macos` | macOS Dark |
| `android` | Android Material You |
| `plasma` | Plasma |

#### 3D Animated themes
| ID | Name | Style |
|---|---|---|
| `holograma` | Hologram | Cyan cyberpunk holographic grid |
| `synth` | **Synthwave** 🆕 | Neon pink retrowave grid + city skyline |
| `obsidian` | Obsidian | Volcanic glass, deep purple shimmer |
| `forja` | Forge | Molten metal, red-hot glow |
| `matrix` | Matrix | Digital rain, classic green CRT |
| `aurora3d` | Aurora Borealis | Polar lights, dancing curtains |
| `dusk` | Dusk | Twilight sky, amber horizon |
| `cybgrid` | Cyber Grid | Tron-style neon data highway |
| `inferno` | Inferno | Raging flame vortex |
| `arctic` | Arctic | Frozen tundra, ice crystal shimmer |
| `slate` | Slate | Storm sky, electric teal |
| `voidrift` | Void Rift | Dark matter waves, gravitational lensing |
| `solarflare` | Solar Flare | Coronal mass ejection, magnetic arcs |
| `abyss` | Abyss | Deep ocean bioluminescence |
| `phantom` | Phantom | Interdimensional ghost interference grid |
| `ghostos` | Ghost OS | Silver kanji rain — Matrix × Apple × Fluent |

</details>

### ⌨️ Keyboard Shortcuts
| Key | Action |
|---|---|
| `/` | Focus search bar |
| `Enter` | Launch selected game |
| `E` | Edit selected game |
| `F` | Toggle favorite |
| `Delete` | Remove game |
| `F12` | Open DevTools |
| `Esc` | Close modal / cancel |

---

## 🚀 Getting Started

### 1 — Download
Grab **`EDR-Vault-Portable.exe`** from the [latest release](https://github.com/EDR23/EDR-VAULT/releases/latest). No installation needed.

### 2 — Add your games
Click **+ Add Game** → browse for the `.exe` → optionally set a cover, save folder and launch arguments → Save.

### 3 — Configure FTP
Go to **Settings → FTP** and enter your server credentials. Don't have a server? [ftpgrid.com](https://ftpgrid.com) offers a free FTP account.

### 4 — Enable Auto-Backup
Toggle **Auto-Backup** in Settings, choose your interval, and EDR-Vault will silently back up every game's save folder on schedule.

---

## 📋 Requirements

| | |
|---|---|
| **OS** | Windows 10 or 11 — 64-bit |
| **Install** | None — single portable `.exe` |
| **Admin rights** | Not required (optional for startup task) |
| **FTP server** | Any FTP/FTPS server (e.g. [ftpgrid.com](https://ftpgrid.com) — free) |

---

## 🌍 Languages

| Language | Status |
|---|---|
| 🇬🇧 English | ✅ Full |
| 🇪🇸 Spanish | ✅ Full |

---

## 🛡️ VirusTotal — v1.2.2

The portable executable has been scanned and verified clean.

> 🔗 [View full scan report on VirusTotal](https://www.virustotal.com/gui/file/729760d10ecc09d1e04fda77fe0adff03904574873ac8fa0103487b4206f29cc)

```
SHA-256  729760d10ecc09d1e04fda77fe0adff03904574873ac8fa0103487b4206f29cc
File     EDR-Vault-Portable.exe  (v1.2.2)
```

> ⚠️ Some antivirus engines may flag **any** unsigned portable Electron app as potentially unwanted (PUA/heuristic). This is a known false-positive pattern for self-contained `.exe` builds — EDR-Vault contains no malicious code. The full source is available in this repository for review.

---


→ Full history in [CHANGELOG.md](CHANGELOG.md)

---

## 🏗️ Tech stack

| | |
|---|---|
| **Runtime** | [Electron](https://www.electronjs.org/) v29 |
| **FTP client** | [basic-ftp](https://github.com/patrickjuchli/basic-ftp) |
| **Build** | electron-builder — portable `.exe`, no installer |
| **Frontend** | Vanilla HTML / CSS / JS — zero frameworks |
| **Storage** | `localStorage` via Electron renderer process |

---

## 📄 License

MIT — free for personal and commercial use. See [LICENSE](LICENSE).

---

<div align="center">

Made with ❤️ by **EDR**

[⬇️ Download v1.2.2](https://github.com/EDR23/EDR-VAULT/releases/latest)

</div>
