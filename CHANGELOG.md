# Changelog — EDR-Vault

## [v1.2.0] — 2026-03-22

### Added
- **Annual activity heatmap** (Global Stats modal): The 30-day bar chart replaced with a 52-week GitHub-style heatmap, year selector, hover tooltip, and intensity legend.
- **"Last 4 Weeks" heatmap** in each game's detail panel: 4-column × 7-row grid with real Mon–Sun weeks, tooltip, and today highlighted with an accent outline.
- **Executable health monitor**: Checks every 5 minutes whether each game's .exe still exists. Shows a red "⚠ not found" badge next to the path if it disappears (useful after Steam updates).
- **Save path notification**: Info toast when a save path is set on a game for the first time, confirming it will be included in the next auto-backup.
- **Copy path buttons** in detail panel: Copy button for the executable path and a Copy button in the save path row (they existed in code but had no `onclick`).
- **Galaxy animated theme**: Galaxy particles now activate correctly when selected (previously `startGalaxyElements` existed but was never called).

### Fixed
- **`migrateData()` ran 3 times** on startup — reduced to 1 call.
- **`exeHealth` was saved to `vault_v2`** — Runtime-only field now excluded from storage to prevent false red badges after restart.
- **`save()` wrote covers to disk on every save call** — Now only writes if cover actually changed (hash comparison via `_coverCache`).
- **`renderDetail()` built heatmap and sessions twice** — `updatePlaytimeChartCard` and `updateSessionsCard` now called once each.
- **`_runFullAutoBackup` without `try/finally`** — `_showBackupRunning(false)` now always runs even if an exception is thrown.
- **`_coverCache` stale** after changing cover in edit modal.
- **`runAutoPurge()` accumulated timers** if backup was running — Now uses a single `_purgeDeferTimer`.
- **`stopSessionTicker()` not called** on app close.
- **Auto-backup/purge/update counters showed "Every 1 hour(s)"** when opening Settings before async init completed — Status boxes now read `localStorage` as fallback; timers restart if `nextAt` is null.
- **Config differential backup** — Hash now excludes `exportedAt` (changed every cycle) so config is only uploaded when actual data changes.
- **Cover differential backup** — Changed from time-based to hash-based comparison of `dataUrl`.
- **"Last 4 Weeks" heatmap broken after DST change** — `+86400000ms` arithmetic broke around Spain's daylight saving time change. All date calculations normalized to local midnight with `setHours(0,0,0,0)`.
- **Heatmap tooltip appeared in wrong position** — Tooltip `div` was inside a `container-type:inline-size` element, which breaks `position:fixed`. Moved to `<body>` level.
- **Tooltip did not appear on hover** — Replaced per-cell listeners with single grid-level event delegation; cell size increased to 13×13px.
- **`replaceChild` crash** when restoring cover — `grid.parentNode.replaceChild(newGrid, newGrid)` removed (cannot replace a node with itself).
- **Random Game animation blank** — `drawFrame` and all canvas logic inside `_drumRun` were lost when `easeOutCubic` was deleted. Fully restored.
- **Matrix and Ghost OS animations had no effect** — Both `startMatrixRain` and `startGhostOsRain` called `requestAnimationFrame(draw)` after internal functions were renamed to `drawMatrix`/`drawGhostOs`. References corrected.
- **`+ Add Game` button did nothing** — `openAddModal()` had disappeared from the code. Restored.
- **Pressing Enter on the Backups tab launched the selected game** — Game keyboard shortcuts now blocked when `filter === 'backups'`.
- **Switching to Favorites kept a non-favorite game selected** — When switching tabs, if the selected game is not in the new list it is automatically deselected.
- **Modals (Settings, Customize, Stats, About) closed on outside click** — Now only closeable via X or Close button, same as Add Game modal.

### Changed
- **Maximum cover resolution**: Reduced from 4K (3840×2160) to 256×256 — Covers are used only as small thumbnails; smaller size saves ~30× disk and memory space.
- **Auto-Update Check status box**: Redesigned to match Auto-Backup style (countdown `55m 59s`, current version pill, last check row).
- **Code cleanup**: 11 dead functions removed, orphaned `countdownTicker` variable removed, unused IPC handlers removed from `ipc/ftp.js`.
- **Windows startup via Task Scheduler**: Replaced registry Run key and Startup folder shortcut with a `Register-ScheduledTask` task (`EDR-Vault-Startup`) running at logon with RunLevel Highest. Resolves startup failures on hardened Windows 11 LTSC systems where the Startup folder and HKCU Run key are blocked by security policy. Task creation requires a one-time UAC elevation (auto-granted when UAC is disabled).

## [v1.1.8] — 2026-03-17

### Added
- 4 new 3D animated themes: Void Rift, Solar Flare, Abyss, Ghost OS.
- Ghost OS theme: falling kanji rain with Microsoft Fluent palette.
- Auto-backup and auto-purge item selection (Saves / Config / Covers independently).
- Redesigned status boxes with countdown timer and item pills.
- Differential backup: skips games/covers unchanged since last upload.
- FTP error badge: persistent red badge after 3 consecutive failures.
- 3D Drum Wheel for Random Game: canvas with physics easing and animated countdown.
- Cover search window: standalone Bing HD image search.
- Session counter in titlebar.

### Fixed
- 7-day activity chart always empty.
- FTP deadlock — 30-second timeout added.
- Cover search blocked by CORS.
- Matrix characters corrupted.

## [v1.1.7] — 2026-03-16

### Fixed
- Backup/purge interval selects empty on first use.
- All buttons unresponsive due to JS syntax errors.
- Matrix characters rendering as `?`.
- Auto-backup counters reimplemented.
- Encoding artifacts in Settings sidebar labels.

### Changed
- Library panel widened (260 → 300 px).
