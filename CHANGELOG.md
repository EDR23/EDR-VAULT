# EDR-Vault — Changelog

---

## v1.0.1 — 2026-03-10

### 🐛 Bug Fixes

- **"About" and "Customize" buttons did not open their modals**
  The titlebar buttons were unresponsive to clicks under certain conditions within Electron. The modal-opening system was redesigned using `double requestAnimationFrame`, and the CSS was migrated from `display:none/flex` to `opacity/visibility` to ensure the render engine correctly processes the transition before displaying content.

- **All modals opened simultaneously when clicking "Settings"**
  Added a `closeAllModals()` helper that clears the state of all overlays before opening any modal, preventing them from remaining open in the background at the same time.

- **"Close" and "Apply" buttons in Settings scrolled with the content**
  The Settings modal footer was incorrectly nested inside `modal-body`, causing it to scroll along with the content. It is now a sibling element with `flex-shrink:0`, keeping it always fixed at the bottom of the modal.

- **X button click area misaligned from the visible icon**
  Across all modals, `overflow:hidden` combined with the `modalIn` animation (which uses `transform: translateY`) caused Electron to calculate click zones based on the original layout position while content was visually rendered offset. Removed `overflow:hidden` from all modal-box elements.

- **X button in "About" modal unresponsive when using English**
  Switching to English caused longer text to push the modal beyond the screen height. Since the overlay uses `align-items:center`, the top section (where the X lives) was clipped outside the viewport. Added `max-height:88vh` to the modal and `overflow-y:auto` to the body so content scrolls inside instead of pushing the X off-screen.

### ✨ New Features

- **Animated progress bar for update check**
  Clicking "Check Now" now shows an animated progress bar (0→100% over ~3 seconds) with a spinning icon and live percentage counter. The real GitHub API call runs in parallel. The button can be pressed any number of times — each press restarts the animation from 0.

- **Executable requires Administrator privileges (UAC elevation)**
  EDR-Vault now runs as Administrator automatically via a UAC manifest embedded in the executable (`requestedExecutionLevel=requireAdministrator`). This prevents permission errors when launching certain games and ensures full system access. A runtime fallback relaunch is also included for development mode.

- **"Launch at Startup" option now communicates admin requirement**
  The startup setting description was updated in both Spanish and English to clearly indicate that Administrator privileges are required. A shield icon (🛡) was added to the option label as a visual indicator.

### 🎨 Visual Improvements

- **Titlebar buttons redesigned to pill style**
  The flat titlebar buttons were replaced with pill-shaped buttons with distinct colors:
  - 🟣 **About** — purple
  - 🔵 **Settings** — blue (accent)
  - 🟢 **Customize** — green
  Each button features a colored border, semi-transparent background, and a glow effect on hover.

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
