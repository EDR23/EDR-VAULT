# EDR-Vault Changelog

---

## [v1.0.6] — 2026-03-11

### 🎨 UI Redesign

- **Backups tab — unified list** — Game saves and Config Snapshots are now displayed together in a single chronological list. A new filter bar with **All / Saves / Config** chips (each showing a live count) lets you switch views instantly. Each item carries a colour-coded type badge (Save · Config) so you can tell entries apart at a glance.
- **FTP/Cloud settings pane redesign** — The FTP tab in Settings now features a connection card showing server status badge, hostname and remote path at a glance, with a direct "Open FTP Config" button alongside it.

### ⚡ Improvements

- **Auto-backup now includes Config JSON** — Every auto-backup cycle automatically uploads a full config snapshot (`vault_config_*.json`) to FTP alongside game saves, keeping your library and settings always protected without any manual action.
- **Auto-backup status text updated** — The info box below the Backup Interval setting now confirms that config JSON is also included in each auto-backup cycle.

### 🐛 Bug Fixes

- **Backup counter accuracy fixed** — The Backups counter in the Save Data panel now always reflects the actual number of backups on FTP (capped at 3, consistent with the FTP purge policy). Previously the local counter could display a higher number than the real backup count after a purge.
- Updated all internal version-bump references from 1.0.5 → 1.0.6.

---

## [v1.0.5] — 2026-03-11

### 🆕 New Features

- **In-app Toasts** — Beautiful slide-in notifications replace system popups for quick, non-intrusive feedback.
- **Game Notes** — Add personal notes to any game, visible directly in the detail panel.
- **Live Session Timer** — See how long you've been playing in real time, displayed in the detail panel during an active session.
- **Library Stats Bar** — Footer bar shows total games, total playtime and FTP connection status at a glance.
- **Copy Path Buttons** — One-click copy buttons for the save folder path and executable path in the game detail panel.
- **FTPS Support** — Added FTP over TLS (FTPS) option for encrypted, secure connections.
- **New Theme: Sangre** — A bold deep-crimson theme, bringing the total to 8 visual themes.

### ⚡ Improvements

- **Keyboard Shortcuts** — Press `/` to focus search, `Space` to launch the selected game, `F` to toggle favourite.
- **Auto-name from EXE** — The game name field is now auto-filled when you browse and select an executable.
- **Multi-result Save Scan** — When the save-folder scanner finds multiple candidate folders, a selection list is shown instead of picking one silently.
- **Extended Save Scan Paths** — Scanner now also checks OneDrive game-save locations and D: drive Steam library folders.

### 🐛 Bug Fixes

- Fixed empty `onclick` handlers on cloud modal close buttons that caused silent JS errors.
- Updated all internal version-bump references from 1.0.4 → 1.0.5.

---

## [v1.0.4] — 2026-03-10

### 🆕 New Features

- **Config Snapshots** — Back up and restore your full app configuration (library + settings) to/from FTP, keeping the 3 most recent versions.
- **FTP Save Purge** — Automatically keep only the 3 most recent backups per game on FTP; older backups are deleted automatically.
- **Purge Config Files from FTP** — Manually delete old config backups from FTP, keeping only the 3 most recent.
- **Backup Config to FTP** — Upload a full config snapshot to your FTP server on demand.

### ⚡ Improvements

- Improved session history display.
- Minor UI polish across settings panel.

---

## [v1.0.3] — Earlier

- Initial public release with core library management, FTP backup/restore, 7 themes, English/Spanish UI and portable Electron build.

---

*EDR-Vault is free and open source — MIT License.*
*Releases and source: https://github.com/EDR23/EDR-VAULT*
