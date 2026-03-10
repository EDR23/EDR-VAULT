# EDR-VAULT
### Personal Game Library & Save Backup Manager

**Version 1.0.0 — Portable · Windows 10 / Windows 11 (x64)**

> ⚠️ This program must be running as **administrator** in order to open every added game.

<img width="600" height="800" alt="{85B6B678-2893-45CF-A71F-9D624DA2E633}" src="https://github.com/user-attachments/assets/754921ff-3167-4893-b97b-f51cac93a5b4" />

Built with **Electron** · Free & Open Source (**MIT License**) · Designed and coded by **Claude AI (Anthropic)**

---

## What is EDR-Vault?

EDR-Vault is a personal game library manager built on Electron. It lets you organise every game you own in one clean interface, manage save game folders, back up those saves to your own FTP server and restore them with a single click.

---

## Key Features

- 🎮 Unified game library with cover art for all your titles
- ▶️ Launch any game directly from the app and track playtime
- 💾 Assign a save-data folder to each game
- ☁️ Manual and automatic FTP backup of save files (zipped)
- 🔁 One-click restore or full folder recovery after a fresh OS install
- ⭐ Favourites, sorting, and quick-search across your library
- 🌐 English / Spanish interface (switch any time in Settings)
- 🎨 Seven visual themes: `Abyss` · `Obsidian` · `Jungle` · `Ember` · `Aurora` · `Storm` · `Dawn`
- 🔌 100% portable — no installation required, runs from a USB drive

---

## How to Use

### 1. Adding Games
Click the **+** button (bottom-left) to add a game. Enter the name, browse for the `.exe`, and optionally add a cover image and the save-game folder path.

### 2. Playing Games
Select a game and click **PLAY**. EDR-Vault records your playtime and last-played date automatically.

### 3. Save Game Backups
1. Open **Settings** (or click the FTP button in the top bar) and enter your FTP server credentials: host, port, username, password.
2. For each game, set the **Save Data** path (where the game stores its save files).
3. Click **"Backup to FTP"** to upload a `.zip` of that game's saves.
4. Enable **Auto-Backup** in Settings to back up on a schedule (every 20–60 minutes).

### 4. Restoring Backups
1. Go to the **Backups** tab in the navigation bar.
2. Filter by game to find the backup you want.
3. Click **RESTORE** to extract the backup to the correct save path.
4. Click **RECOVER** to rebuild the folder structure first, then restore — useful after a clean Windows install.

### 5. FTP Setup
EDR-Vault uses standard FTP for cloud backups. We recommend **[ftpgrid.com](https://ftpgrid.com)** — free FTP hosting, no credit card needed.

1. Sign up at [https://ftpgrid.com](https://ftpgrid.com)
2. Note your host, port, username and password and the remote path.
3. For the remote path use /backup it creates by default this remote path  if you are using ftpgrid as provided.
4. Enter those details in **Settings → FTP Configuration**.
5. Test the connection and then Save & Connect.

### 6. Language
Go to **Settings → Language** to switch between **English** and **Spanish**. The entire UI switches instantly — no restart needed.

### 7. Themes
Click the **Customise** button in the top bar to choose a colour theme.

| Themes  | Abyss | | Jungle | | Aurora | | Obsidian | | Ember | | Storm | | Dawn |

### 8. Notifications

EDR-VAULT uses Windows 10/11 notification system so make sure you enable if you want to get notified when a backup or purge happend.

### 9. Auto-Run

EDR-VAULT Can me launched at Windows startup so make sure you enable that option its on settings.

---

## License

```
MIT License — Free for personal and commercial use.
You may copy, modify and distribute this software freely.
No warranties expressed or implied.
```
