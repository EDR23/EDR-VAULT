<div align="center">

# EDR-Vault

**Personal Game Library & Save Backup Manager**

![Version](https://img.shields.io/badge/version-1.2.0-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Windows%2010%20%2F%2011%20x64-lightgrey?style=flat-square&logo=windows)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Electron](https://img.shields.io/badge/built%20with-Electron-47848f?style=flat-square&logo=electron)](https://www.electronjs.org/)
![Portable](https://img.shields.io/badge/portable-no%20install%20needed-orange?style=flat-square)

*Organise every game you own. Back up your saves to your own FTP server. Restore with one click.*

[**⬇ Download from GitHub**](https://github.com/EDR23/EDR-VAULT/releases/latest) · [**⬇ Download from MEGA**](https://mega.nz/folder/Wk1llCaZ#HReYn_KrsIQEe4kq68-lUw) · [Changelog](CHANGELOG.md)

</div>

---

## What is EDR-Vault?

EDR-Vault is a **portable, single-file Electron app** for Windows that gives you a clean unified view of your entire game collection — regardless of platform or store. Organise your library, track playtime, visualise your activity, and keep your save files safely backed up to your own FTP server with automatic scheduling and one-click restore.

No installation. No account required. No subscription. Just your games, your saves, your server.

---

## Features

### Library Management
- Add any game with a custom name, cover art, and executable path
- Launch games directly from the app and track playtime automatically
- **Executable health monitor** — checks every 5 minutes whether each game's `.exe` still exists; shows a warning badge if it disappears (useful after Steam updates or moves)
- Search, sort and filter your library instantly
- Mark games as **Favourites** for quick access
- Add personal notes to any game
- **3D Drum Wheel** random game picker with physics easing and animated countdown
- Keyboard shortcuts: `/` to search · `Space` to launch · `F` to favourite

### Activity & Stats
- **Annual heatmap** (Global Stats) — 52-week GitHub-style activity grid with year selector, hover tooltip and intensity legend
- **Last 4 Weeks heatmap** per game — 4-column × 7-row Mon–Sun grid with today highlighted
- Live session timer in the titlebar while a game is running
- Library stats bar — total games, total playtime and FTP status at a glance

### Save Game Backups (FTP)
- Assign a save-data folder to each game
- **Manual backup** — one-click zip & upload to your FTP server
- **Auto-backup** — schedule backups every 20–60 minutes (or custom interval)
- **Differential backup** — skips games and covers unchanged since the last upload
- Auto-backup also uploads a full **config snapshot** on every cycle
- **FTPS support** — FTP over TLS for encrypted connections
- Configurable auto-purge — keeps only the backups you want per game
- **Independent item selection** — choose to back up Saves, Config and Covers independently

### Backups Panel
- Unified chronological list of all save backups and config snapshots
- Filter chips: **All · Saves · Config** with live count badges
- **One-click restore** — download and extract any backup
- Delete individual backups directly from the panel

### Cover Art
- Built-in **Cover Search** window — Bing HD image search without leaving the app
- Drag-and-drop or paste covers from clipboard
- Cover differential backup — only re-uploads if the image actually changed

### Themes
12 built-in animated and static themes with live preview:
`Obsidian` · `Jungle` · `Ember` · `Aurora` · `Storm` · `Dawn` · `Sangre` · `Galaxy` · `Void Rift` · `Solar Flare` · `Abyss` · `Ghost OS`

### Settings & Customisation
- **Language** — English / Español, switch instantly without restart
- **Auto-Backup** — toggle and set interval with live countdown status box
- **Auto-Purge** — keep your FTP tidy automatically
- **FTP Configuration** — host, port, user, encrypted password, remote path, FTPS toggle
- **Startup with Windows** — creates a Task Scheduler entry (`OnLogon`, no installer needed)
- **Auto-Update Check** — manual or automatic with customisable interval
- Per-tab Apply button — changes require explicit confirmation before saving

### Updates
- Checks for new versions via MEGA and GitHub Releases
- Titlebar badge pulses when a new version is found — click to choose **MEGA** or **GitHub** download
- Silent check at launch + background check on a configurable schedule

---

## Requirements

| | |
|---|---|
| OS | Windows 10 / Windows 11 (64-bit) |
| Installation | None — fully portable single `.exe` |
| Admin rights | Not required (startup task requests UAC once, optional) |
| FTP server | Your own — [ftpgrid.com](https://ftpgrid.com) offers free hosting |

---

## Getting Started

### 1 — Download & Run
Download **EDR-Vault-Portable.exe** from [GitHub Releases](https://github.com/EDR23/EDR-VAULT/releases/latest) or [MEGA](https://mega.nz/folder/Wk1llCaZ#HReYn_KrsIQEe4kq68-lUw). Double-click it — no setup wizard, no registry entries.

### 2 — Add Your First Game
Click the **`+`** button at the bottom of the game list, enter a name, browse for the `.exe`, and optionally attach a cover image and save-data folder path.

### 3 — Set Up FTP Backup
Open Settings → FTP Configuration and enter your server credentials. A free FTP host with no credit card required is available at [ftpgrid.com](https://ftpgrid.com).

### 4 — Assign Save Paths & Back Up
For each game, click **Set Path** to point EDR-Vault at the folder where that game stores its saves. Click **Backup to FTP** — the folder is zipped and uploaded automatically.

### 5 — Enable Auto-Backup (optional)
In Settings → Backup, toggle **Auto-Backup** on and pick an interval. EDR-Vault backs up all games with assigned save paths in the background on your schedule.

---

## Restoring Saves

1. Click **Backups** in the top navigation bar
2. Find the backup you want (filter by type if needed)
3. Click **Restore** — the zip is downloaded and extracted to the correct folder

---

## Security & Antivirus

EDR-Vault is an unsigned portable Electron app. Some antivirus engines flag unsigned Electron portables as potentially unwanted — this is a **false positive** common to all unsigned Electron builds.

You can verify the release binary on VirusTotal:

[**View scan on VirusTotal — v1.2.0**](https://www.virustotal.com/gui/file/93cc056092ab0f7d988c08cac5ba5d46393e1b904685be3dd37c356bb45ea9c5?nocache=1)


---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

**v1.2.0 highlights:**
- Annual 52-week heatmap + per-game Last 4 Weeks heatmap
- Executable health monitor with warning badge
- Windows startup via Task Scheduler (works on hardened Windows 11 LTSC)
- GitHub Releases download button alongside MEGA
- 20+ bug fixes across heatmaps, animations, backups and UI

---

## License

MIT License — free for personal and commercial use.
You may copy, modify and distribute this software freely.
No warranties expressed or implied.

---

<div align="center">Made with ☕</div>
