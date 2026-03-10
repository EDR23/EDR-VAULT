EDR-VAULT
Personal Game Library and Save Backup Manager
Version 1.0.4 - Portable - Windows 10 / Windows 11 (x64)

Built with Electron - Free and Open Source (MIT License)


WHAT IS EDR-VAULT

EDR-Vault is a personal game library manager built on Electron. It lets you organise every game you own in one clean interface, manage save game folders, back up those saves to your own FTP server and restore them with a single click.


KEY FEATURES

Unified game library with cover art for all your titles
Launch any game directly from the app and track playtime
Assign a save-data folder to each game
Manual and automatic FTP backup of save files (zipped)
One-click restore or full folder recovery after a fresh OS install
Favourites, sorting and quick-search across your library
English and Spanish interface, switch any time in Settings
Seven visual themes: Abyss, Obsidian, Jungle, Ember, Aurora, Storm, Dawn
100% portable, no installation required, runs from a USB drive
Runs as Administrator automatically to avoid permission issues with games


HOW TO USE


1. ADDING GAMES

Click the + button at the bottom left to add a game.
Enter the name, browse for the .exe, and optionally add a cover image and the save-game folder path.


2. PLAYING GAMES

Select a game and click Play. EDR-Vault records your playtime and last-played date automatically.


3. SAVE GAME BACKUPS

Open Settings or click the FTP button in the top bar and enter your FTP server credentials: host, port, username and password.
For each game, set the Save Data path where the game stores its save files.
Click Backup to FTP to upload a zip of that game's saves.
Enable Auto-Backup in Settings to back up on a schedule every 20 to 60 minutes.


4. RESTORING BACKUPS

Go to the Backups tab in the navigation bar.
Filter by game to find the backup you want.
Click Restore to extract the backup to the correct save path.
Click Recover to rebuild the folder structure first and then restore. This is useful after a clean Windows install.


5. FTP SETUP

EDR-Vault uses standard FTP for cloud backups.
We recommend ftpgrid.com which offers free FTP hosting with no credit card needed.
Sign up at https://ftpgrid.com, note your host, port, username and password, then enter those details in Settings under FTP Configuration.


6. LANGUAGE

Go to Settings, then Language, and choose English or Español.
The entire interface switches instantly with no restart needed.


7. THEMES

Click the Customise button in the top bar to choose a colour theme.
Available themes: Abyss, Obsidian, Jungle, Ember, Aurora, Storm, Dawn.


8. UPDATES

Open the About panel from the top bar and click Check Now.
EDR-Vault will compare your version against the latest GitHub release and show a download button if an update is available.


9. DEBUG TOOL (Advanced)

If something is not working, right-click the EDR-Vault tray icon and select Open Debug Tool.
The debug page opens automatically with DevTools visible and shows:
- Status of every internal API method (available / missing)
- Live test results for settings, startup task, and update checker
- localStorage contents and game count
- Any console errors or unhandled promise rejections captured at startup


REQUIREMENTS

Windows 10 or Windows 11 (64-bit)
No installation required
No Administrator privileges required


LICENSE

MIT License - Free for personal and commercial use.
You may copy, modify and distribute this software freely.
No warranties expressed or implied.


ENGLISH AND SPANISH DOCUMENTATION FOLLOWS


QUE ES EDR-VAULT

EDR-Vault es un gestor personal de biblioteca de videojuegos creado con Electron. Te permite organizar todos tus juegos en una unica interfaz limpia, gestionar las carpetas de partidas guardadas, hacer copias de seguridad de esas partidas en tu propio servidor FTP y restaurarlas con un solo clic.


CARACTERISTICAS PRINCIPALES

Biblioteca unificada con caratulas para todos tus titulos
Lanza cualquier juego directamente desde la app y registra el tiempo de juego
Asigna una carpeta de partidas guardadas a cada juego
Copia de seguridad FTP manual o automatica en archivos zip
Restauracion en un clic o recuperacion completa de carpetas tras una reinstalacion del sistema
Favoritos, ordenacion y busqueda rapida en tu biblioteca
Interfaz en ingles y espanol, cambiala cuando quieras en Ajustes
Siete temas visuales: Abyss, Obsidian, Jungle, Ember, Aurora, Storm, Dawn
100% portatil, no requiere instalacion, funciona desde un USB
Se ejecuta como Administrador automaticamente para evitar problemas con permisos en juegos


COMO USAR


1. ANADIR JUEGOS

Haz clic en el boton + en la parte inferior izquierda.
Escribe el nombre, selecciona el .exe y opcionalmente anade una caratula y la ruta de la carpeta de partidas guardadas.


2. JUGAR

Selecciona un juego y pulsa Jugar. EDR-Vault registra automaticamente el tiempo de juego y la fecha de la ultima sesion.


3. COPIAS DE SEGURIDAD DE PARTIDAS

Abre Ajustes o el boton FTP de la barra superior e introduce los datos de tu servidor FTP: host, puerto, usuario y contrasena.
Para cada juego, define la ruta de Datos de Partida donde el juego guarda sus archivos.
Haz clic en Copia a FTP para subir un zip con las partidas de ese juego.
Activa la Copia Automatica en Ajustes para hacer backups con un intervalo programado de 20 a 60 minutos.


4. RESTAURAR COPIAS DE SEGURIDAD

Ve a la pestana Copias de Seguridad en la barra de navegacion.
Filtra por juego para localizar la copia que necesitas.
Pulsa Restaurar para extraer la copia en la ruta de partidas.
Pulsa Recuperar para reconstruir primero la estructura de carpetas y luego restaurar. Ideal tras una instalacion limpia de Windows.


5. CONFIGURACION FTP

EDR-Vault usa FTP estandar para las copias en la nube.
Recomendamos ftpgrid.com con alojamiento FTP gratuito sin tarjeta de credito.
Registrate en https://ftpgrid.com, anota host, puerto, usuario y contrasena, e introduzcalos en Ajustes bajo Configuracion FTP.


6. IDIOMA

Ve a Ajustes, luego Idioma, y elige English o Espanol.
Toda la interfaz cambia al instante sin necesidad de reiniciar.


7. TEMAS

Haz clic en el boton Personalizar de la barra superior para elegir un tema de color.
Temas disponibles: Abyss, Obsidian, Jungle, Ember, Aurora, Storm, Dawn.


8. ACTUALIZACIONES

Abre el panel Acerca de desde la barra superior y haz clic en Comprobar ahora.
EDR-Vault comparara tu version con la ultima disponible en GitHub y mostrara un boton de descarga si hay una actualizacion.


9. HERRAMIENTA DE DEPURACION (Avanzado)

Si algo no funciona correctamente, haz clic derecho en el icono de EDR-Vault en la bandeja del sistema y selecciona Abrir herramienta de depuracion.
La pagina de depuracion se abre automaticamente con DevTools visible y muestra:
- Estado de cada metodo interno de la API (disponible / no disponible)
- Pruebas en vivo de ajustes, tarea de inicio y comprobador de actualizaciones
- Contenido de localStorage y recuento de juegos
- Errores de consola y rechazos de promesas no controlados capturados al inicio


REQUISITOS

Windows 10 o Windows 11 de 64 bits
No requiere instalacion
No requiere permisos de Administrador


LICENCIA

Licencia MIT - Libre para uso personal y comercial.
Puedes copiar, modificar y distribuir este software libremente.
Sin garantias expresas ni implicitas.
