# EDR-Vault — Changelog

---

## v1.0.2 — 2026-03-10

### 🐛 Bug Fixes

- **All buttons were unresponsive after startup (click-blocking)**
  Root cause: `window.electronAPI.oauthRefresh` and `window.electronAPI.oauthStart` were called in `index.html` but were missing from `preload.js` and `main.js`. The resulting `TypeError` silently crashed the entire JavaScript runtime on load, making every button non-functional. Fixed by adding stub IPC handlers for `oauth-start` and `oauth-refresh` in `main.js` and exposing them via `preload.js`.

- **`CURRENT_VERSION` and `ALL_MODAL_IDS` — "Cannot access before initialization" errors**
  Both `const` declarations were placed deep in the script, after code that referenced them (notably inside the `STRINGS` object). Since `const`/`let` are not hoisted like `var`, this caused a `ReferenceError` at runtime. Moved all three declarations (`CURRENT_VERSION`, `DOWNLOAD_URL`, `ALL_MODAL_IDS`) and the `closeAllModals()` helper to the very top of the script, before `STRINGS`.

- **Search bar overlapped buttons when resizing the window narrower**
  The search bar was positioned with `position:absolute; left:50%; transform:translateX(-50%)`, which placed it outside the normal flex flow. At narrow window widths it would render on top of the nav buttons and pill buttons. Changed to a proper flex item (`flex:1; min-width:0; overflow:hidden`) so it automatically yields space to its siblings without overlapping.

### 🔧 Changes & Improvements

- **Removed UAC / Administrator elevation requirement**
  The `requireAdministrator` manifest flag and the `checkAdminAndRelaunch()` logic have been removed. EDR-Vault now launches as a standard user process, eliminating the UAC prompt on every start.

- **Startup replaced: shell shortcut (LNK) → Windows Task Scheduler**
  The previous "Launch at Startup" used a startup folder shortcut that required Administrator rights and was unreliable with portable executables. It has been replaced with a Windows Task Scheduler task (`EDR-Vault`), created via PowerShell with a one-time UAC elevation. The task runs at log-on with highest available privileges. The toggle switch has been replaced with a button that creates or removes the task and shows its current status.

- **F12 / Ctrl+Shift+I DevTools shortcut — fixed in packaged `.exe`**
  `globalShortcut.register` did not work reliably inside a packaged Electron executable. Replaced with a `before-input-event` listener on `mainWindow.webContents`, which works correctly in all environments.

- **`asar: false` added to build configuration**
  The build now extracts all files instead of bundling them into an `.asar` archive. This ensures `preload.js` and other files are accessible as real files on disk, preventing path resolution failures in packaged builds.

### 🛠️ Developer

- **Debug Tool added (`debug.html`)**
  A standalone `debug.html` page is included in the build. Accessible via tray icon → right-click → **Open Debug Tool**. Opens with DevTools visible and provides:
  - ✓/✗ status check for every `window.electronAPI` method
  - Live IPC handler tests (`getCloudSettings`, `taskStatus`, `checkUpdate`)
  - localStorage viewer with game count
  - Console error / unhandled promise rejection intercept
  - Buttons: Clear Storage, Export Storage as JSON, Run All Tests

---

## v1.0.1 — 2026-03-10

### 🐛 Bug Fixes

- **Theme colors not applied to modal footer buttons (Cancel / Save Game)**
  Several UI elements had hardcoded hex color values instead of CSS variables, causing them to remain stuck on the default "Abyss" theme colors. Fixed across modal footers, headers, Settings header, titlebar gradient, game list panel, and game grid cards.

- **"About" and "Customize" buttons did not open their modals**
  Redesigned the modal-opening system using `double requestAnimationFrame` and migrated CSS from `display:none/flex` to `opacity/visibility`.

- **All modals opened simultaneously when clicking "Settings"**
  Added a `closeAllModals()` helper that clears all overlays before opening any modal.

- **"Close" and "Apply" buttons in Settings scrolled with content**
  Modal footer was incorrectly nested inside `modal-body`. Now a sibling element with `flex-shrink:0`.

- **X button click area misaligned from the visible icon**
  Removed `overflow:hidden` from all modal-box elements, which was causing Electron to miscalculate click zones during CSS animations.

- **X button in "About" modal unresponsive when using English**
  Added `max-height:88vh` to the modal and `overflow-y:auto` to the body.

### ✨ New Features

- **Animated progress bar for update check**
  Clicking "Check Now" shows an animated progress bar (0→100% over ~3s) with a spinning icon and live percentage counter.

- **Titlebar buttons redesigned to pill style**
  🟣 About · 🔵 Settings · 🟢 Customize

---

## v1.0.0 — 2026-03-10

- Initial release of EDR-Vault
- Game library with play session tracking
- Automatic and manual save game backup via FTP
- Standalone FTP window for connection management
- Settings modal with auto-backup, auto-purge, Windows notifications and startup with system
- Multi-language support (Spanish / English)
- Theme and visual customization system
- Built-in update checker
- Portable build for Windows 10/11 x64 (no installation required)
