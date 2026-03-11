╔══════════════════════════════════════════════════════════════════════╗
║                          EDR-VAULT                                   ║
║           Personal Game Library & Save Backup Manager                ║
║                   Version 1.0.5 — Portable                           ║
║               Windows 10 / Windows 11  (x64)                         ║
╚══════════════════════════════════════════════════════════════════════╝

  Built with Electron · Free & Open Source (MIT License)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        [  E N G L I S H  ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT IS EDR-VAULT?
──────────────────
EDR-Vault is a personal game library manager built on Electron. It lets
you organise every game you own in one clean interface, manage save game
folders, back up those saves to your own FTP server and restore them with
a single click. 100% portable — no installation required.

KEY FEATURES
────────────
  • Unified game library with cover art for all your titles
  • Launch any game directly from the app and track playtime
  • Live session timer — see how long you've been playing in real time
  • Game Notes — add personal notes to any game in the detail panel
  • Assign a save-data folder to each game with one-click copy buttons
  • Manual and automatic FTP backup of save files (zipped)
  • FTPS support — FTP over TLS for secure encrypted connections
  • One-click restore or full folder recovery after a fresh OS install
  • Favourites, sorting, and quick-search across your library
  • Keyboard shortcuts: / to search · Space to play · F to favourite
  • English / Spanish interface (switch any time in Settings)
  • Nine visual themes: Abyss · Obsidian · Jungle · Ember · Aurora ·
    Storm · Dawn · Sangre · Midnight
  • Config snapshots — back up and restore your full configuration to FTP
  • Auto-name from EXE — game name is filled automatically when browsing
  • 100% portable — no installation required, runs from a USB drive

HOW TO USE
──────────

1. ADDING GAMES
   Click the + ADD GAME button to add a new entry.
   Enter the name (auto-filled if you browse the .exe first), browse for
   the .exe, and optionally add a cover image and the save-game folder
   path. Add personal notes in the Notes field.

2. PLAYING GAMES
   Select a game and click PLAY. EDR-Vault records your playtime and
   last-played date automatically. A live session timer runs in the
   detail panel while the game is open.

3. SAVE GAME BACKUPS
   - Open Settings (or click the FTP button in the top bar) and enter
     your FTP server credentials: host, port, username, password.
   - For each game, set the Save Data path (where the game stores its
     save files). Use the scan button to auto-detect it.
   - Click "Backup to FTP" to upload a .zip of that game's saves.
   - Enable Auto-Backup in Settings to back up on a schedule
     (every 20–60 minutes).

4. RESTORING BACKUPS
   - Go to the Backups tab in the navigation bar.
   - Filter by game to find the backup you want.
   - Click RESTORE to extract the backup to the correct save path.
   - Click RECOVER to rebuild the folder structure first, then
     restore — useful after a clean Windows install.

5. FTP SETUP
   EDR-Vault uses standard FTP (or FTPS) for cloud backups.
   We recommend ftpgrid.com — free FTP hosting, no credit card needed.
     → Sign up at https://ftpgrid.com
     → Note your host, port, username and password
     → Enter those details in Settings → FTP Configuration
     → Enable FTPS toggle for encrypted connections

6. LANGUAGE
   Settings → Language → English / Español.
   The entire UI switches instantly, no restart needed.

7. THEMES
   Click the Customise button in the top bar to choose a colour theme.
   Available: Abyss · Obsidian · Jungle · Ember · Aurora · Storm ·
              Dawn · Sangre · Midnight

8. KEYBOARD SHORTCUTS
   /         Focus the search bar
   Space     Launch the selected game
   F         Toggle favourite on the selected game

9. CONFIG SNAPSHOTS
   Settings → Backup Config to FTP saves your full library + settings
   to FTP (keeps last 3 versions). Use Restore Config to roll back.

10. DEBUG TOOL (for developers / troubleshooting)
    Right-click the system tray icon → Open Debug Tool.
    A standalone panel opens with DevTools already visible.
    It checks every electronAPI method, runs IPC handler tests,
    shows localStorage contents, and intercepts console errors.

LICENSE
───────
MIT License — Free for personal and commercial use.
You may copy, modify and distribute this software freely.
No warranties expressed or implied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        [  E S P A Ñ O L  ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

¿QUÉ ES EDR-VAULT?
──────────────────
EDR-Vault es un gestor personal de biblioteca de videojuegos creado con
Electron. Te permite organizar todos tus juegos en una única interfaz
limpia, gestionar las carpetas de partidas guardadas, hacer copias de
seguridad de esas partidas en tu propio servidor FTP y restaurarlas con
un solo clic. 100% portátil, sin instalación.

CARACTERÍSTICAS PRINCIPALES
────────────────────────────
  • Biblioteca unificada con carátulas para todos tus títulos
  • Lanza cualquier juego directamente desde la app y registra el tiempo
    de juego
  • Temporizador de sesión en vivo — ve cuánto llevas jugando en tiempo
    real directamente en el panel de detalle
  • Notas de juego — añade notas personales a cualquier juego
  • Asigna una carpeta de partidas guardadas a cada juego con botones de
    copia rápida de rutas
  • Copia de seguridad FTP manual o automática (archivos .zip)
  • Soporte FTPS — FTP sobre TLS para conexiones seguras y cifradas
  • Restauración en un clic o recuperación completa de carpetas tras una
    reinstalación del sistema operativo
  • Favoritos, ordenación y búsqueda rápida en tu biblioteca
  • Atajos de teclado: / buscar · Space jugar · F favorito
  • Interfaz en inglés y español (cámbiala cuando quieras en Ajustes)
  • Nueve temas visuales: Abyss · Obsidian · Jungle · Ember · Aurora ·
    Storm · Dawn · Sangre · Midnight
  • Snapshots de configuración — haz copia de seguridad de toda tu
    config en FTP y restáurala cuando necesites
  • Auto-nombre desde el EXE — el nombre se rellena automáticamente al
    seleccionar el ejecutable
  • 100% portátil — no requiere instalación, funciona desde un USB

CÓMO USAR
──────────

1. AÑADIR JUEGOS
   Haz clic en el botón + AÑADIR JUEGO.
   Escribe el nombre (se rellena solo si primero seleccionas el .exe),
   busca el ejecutable, y opcionalmente añade carátula, ruta de partidas
   guardadas y notas personales.

2. JUGAR
   Selecciona un juego y pulsa JUGAR. EDR-Vault registra automáticamente
   el tiempo de juego y la fecha de la última sesión. Un temporizador en
   vivo muestra el tiempo de la sesión actual.

3. COPIAS DE SEGURIDAD DE PARTIDAS
   - Abre Ajustes (o el botón FTP de la barra superior) e introduce los
     datos de tu servidor FTP: host, puerto, usuario, contraseña.
   - Para cada juego, define la ruta de Datos de Partida. Usa el botón
     de escaneo para detectarla automáticamente.
   - Haz clic en "Copia a FTP" para subir un .zip con las partidas.
   - Activa la Copia Automática en Ajustes para backups programados
     (cada 20–60 minutos).

4. RESTAURAR COPIAS DE SEGURIDAD
   - Ve a la pestaña Copias de Seguridad en la barra de navegación.
   - Filtra por juego para localizar la copia que necesitas.
   - Pulsa RESTAURAR para extraer la copia en la ruta de partidas.
   - Pulsa RECUPERAR para reconstruir primero la estructura de carpetas
     y luego restaurar — ideal tras una instalación limpia de Windows.

5. CONFIGURACIÓN FTP
   EDR-Vault usa FTP estándar (o FTPS) para las copias en la nube.
   Recomendamos ftpgrid.com — alojamiento FTP gratuito, sin tarjeta.
     → Regístrate en https://ftpgrid.com
     → Anota host, puerto, usuario y contraseña
     → Introdúcelos en Ajustes → Configuración FTP
     → Activa FTPS para conexiones cifradas

6. IDIOMA
   Ajustes → Idioma → English / Español.
   Toda la interfaz cambia al instante, sin reiniciar.

7. TEMAS
   Haz clic en Personalizar en la barra superior para elegir un tema.
   Disponibles: Abyss · Obsidian · Jungle · Ember · Aurora · Storm ·
                Dawn · Sangre · Midnight

8. ATAJOS DE TECLADO
   /         Enfocar el buscador
   Space     Lanzar el juego seleccionado
   F         Marcar/desmarcar favorito

9. SNAPSHOTS DE CONFIGURACIÓN
   Ajustes → Backup Config to FTP guarda toda tu biblioteca y ajustes
   en el servidor FTP (conserva las 3 últimas versiones). Usa Restore
   Config para recuperar una versión anterior.

10. HERRAMIENTA DE DEPURACIÓN (para desarrolladores / diagnóstico)
    Clic derecho en el icono de la bandeja → Abrir Debug Tool.
    Se abre un panel independiente con DevTools ya visible.
    Comprueba métodos de electronAPI, ejecuta pruebas IPC, muestra
    localStorage e intercepta errores de consola.

LICENCIA
────────
Licencia MIT — Libre para uso personal y comercial.
Puedes copiar, modificar y distribuir este software libremente.
Sin garantías expresas ni implícitas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
