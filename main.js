const { app, BrowserWindow, ipcMain, shell, dialog, net, Tray, Menu, nativeImage, Notification } = require('electron');
app.setAppUserModelId('com.edr.vault');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');

let mainWindow;
let cloudWindow = null;
let tray = null;
let isQuitting = false;
let startHidden = process.argv.includes('--hidden');

// ── REQUIRE ADMIN ELEVATION ───────────────────────────────
// If not running as administrator, relaunch with UAC elevation prompt.
// The exe manifest (requestedExecutionLevel=requireAdministrator) handles
// this automatically for packaged builds. This is a runtime fallback for dev.
function checkAdminAndRelaunch() {
  if (app.isPackaged) return; // packaged exe already has UAC manifest
  try {
    require('child_process').execSync('net session', { stdio: 'ignore' });
  } catch(e) {
    // Not admin — relaunch with elevation
    const args = process.argv.slice(1).join(' ');
    require('child_process').exec(
      `powershell -WindowStyle Hidden -Command "Start-Process -FilePath '${process.execPath}' -ArgumentList '${args}' -Verb RunAs"`,
      () => {}
    );
    app.quit();
  }
}
checkAdminAndRelaunch();

// ── TRAY ──────────────────────────────────────────────────
function createTray() {
  const iconPath = path.join(__dirname, 'icon.ico');
  const trayIcon = nativeImage.createFromPath(iconPath).resize({ width: 16, height: 16 });
  tray = new Tray(trayIcon);
  tray.setToolTip('Vault — Game Library');

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open Vault',
      click: () => {
        mainWindow.show();
        mainWindow.focus();
      }
    },
    { type: 'separator' },
    {
      label: 'Exit Vault',
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.focus();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
}

// ── WINDOW ────────────────────────────────────────────────
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, height: 800, minWidth: 920, minHeight: 620,
    frame: false, backgroundColor: '#0d1117',
    webPreferences: { nodeIntegration: false, contextIsolation: true, preload: path.join(__dirname, 'preload.js') },
    icon: path.join(__dirname, 'icon.ico'), show: false
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.once('ready-to-show', () => {
    createTray();
    if (!startHidden) {
      mainWindow.show();
    }
  });

  // Intercept native close (Alt+F4, taskbar right-click Close, etc.)
  mainWindow.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault();
      showCloseDialog();
    }
  });

  mainWindow.on('maximize',   () => mainWindow.webContents.send('window-maximized', true));
  mainWindow.on('unmaximize', () => mainWindow.webContents.send('window-maximized', false));
  mainWindow.on('restore',    () => mainWindow.webContents.send('window-maximized', false));

  // Forward OS-level context menu event to renderer with click position
  mainWindow.webContents.on('context-menu', (event, params) => {
    mainWindow.webContents.send('native-context-menu', { x: params.x, y: params.y });
  });
}

ipcMain.handle('show-game-ctx-menu', async (_, { gameId, gameName, isRunning, isFav, hasSave, isConnected, lang }) => {
  const es = lang === 'es';
  const send = (action) => mainWindow.webContents.send('ctx-action', { action, gameId });
  const items = [];
  if (isRunning) {
    items.push({ label: es ? '● En Ejecución' : '● Running', enabled: false });
    items.push({ label: es ? 'Forzar Cierre' : 'Force Close', click: () => send('kill') });
  } else {
    items.push({ label: es ? '▶  Jugar' : '▶  Play', click: () => send('play') });
  }
  items.push({ type: 'separator' });
  items.push({ label: isFav ? (es ? '★  Quitar Favorito' : '★  Remove Favorite') : (es ? '☆  Añadir Favorito' : '☆  Add to Favorites'), click: () => send('favorite') });
  items.push({ label: es ? '📁  Ubicación del EXE' : '📁  EXE Location', click: () => send('location') });
  items.push({ label: es ? '📂  Ruta de Partidas' : '📂  Set Save Path', click: () => send('setpath') });
  items.push({ label: es ? '✏️  Editar' : '✏️  Edit', click: () => send('edit') });
  items.push({ type: 'separator' });
  if (hasSave) {
    items.push({ label: es ? '💾  Abrir Carpeta Partidas' : '💾  Open Save Folder', click: () => send('saves') });
  }
  if (isConnected && hasSave) {
    items.push({ label: es ? '☁️  Backup a FTP' : '☁️  Backup to FTP', click: () => send('backup') });
  }
  items.push({ type: 'separator' });
  items.push({ label: es ? '🗑️  Eliminar' : '🗑️  Remove', click: () => send('remove') });
  const menu = Menu.buildFromTemplate(items);
  menu.popup({ window: mainWindow });
  return true;
});

// ── CLOSE DIALOG ─────────────────────────────────────────
function showCloseDialog() {
  dialog.showMessageBox(mainWindow, {
    type: 'question',
    title: 'Vault',
    message: 'What would you like to do?',
    detail: 'Vault can keep running in the background so your library is always ready.',
    buttons: ['Minimize to Tray', 'Exit Vault'],
    defaultId: 0,
    cancelId: 0,
    icon: path.join(__dirname, 'icon.ico'),
    noLink: true
  }).then(({ response }) => {
    if (response === 0) {
      mainWindow.hide();
      if (tray) {
        tray.displayBalloon({
          iconType: 'info',
          title: 'Vault is still running',
          content: 'Click the Vault icon in the system tray to reopen.'
        });
      }
    } else {
      isQuitting = true;
      app.quit();
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' && isQuitting) {
    app.quit();
  }
});

app.on('before-quit', () => {
  isQuitting = true;
});

// ── WINDOW CONTROLS ───────────────────────────────────────
ipcMain.on('window-minimize', () => mainWindow.minimize());
ipcMain.on('window-maximize', () => mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize());
ipcMain.on('window-close', () => showCloseDialog());

// ── CLOUD WINDOW ──────────────────────────────────────────
ipcMain.handle('open-cloud-window', async (_, lang) => {
  if (cloudWindow && !cloudWindow.isDestroyed()) { cloudWindow.focus(); return; }
  cloudWindow = new BrowserWindow({
    width: 520, height: 580, minWidth: 460, minHeight: 520,
    parent: mainWindow, frame: false, backgroundColor: '#0f1520',
    resizable: true, title: 'EDR-Vault — FTP Backup',
    webPreferences: { nodeIntegration: false, contextIsolation: true, preload: path.join(__dirname, 'preload-cloud.js') },
    autoHideMenuBar: true, show: false,
  });
  cloudWindow.loadFile(path.join(__dirname, 'ftp.html'), { query: { lang: lang || 'en' } });
  cloudWindow.once('ready-to-show', () => cloudWindow.show());
  cloudWindow.on('closed', () => {
    cloudWindow = null;
    try {
      if (mainWindow && !mainWindow.isDestroyed()) {
        const wc = mainWindow.webContents;
        if (wc && !wc.isDestroyed()) wc.send('cloud-settings-updated');
      }
    } catch(e) {}
  });
});

ipcMain.on('close-cloud-window', () => {
  if (cloudWindow && !cloudWindow.isDestroyed()) cloudWindow.close();
});

// ── GAME HANDLERS ─────────────────────────────────────────
// Map of gameId -> { child, startTime }
const runningProcesses = new Map();

ipcMain.handle('launch-exe', async (_, { exePath, gameId }) => {
  if (!fs.existsSync(exePath)) return { success: false, error: 'File not found: ' + exePath };
  if (runningProcesses.has(gameId)) return { success: false, error: 'Already running.' };
  const { spawn } = require('child_process');
  try {
    const child = spawn(exePath, [], {
      detached: false,
      stdio: 'ignore',
      cwd: path.dirname(exePath),
      shell: false,
    });
    const startTime = Date.now();
    runningProcesses.set(gameId, { child, startTime });
    const cleanup = (elapsed, error, forced) => {
      runningProcesses.delete(gameId);
      try {
        if (mainWindow && !mainWindow.isDestroyed())
          mainWindow.webContents.send('game-exited', { gameId, elapsed, error, forced });
      } catch(e) {}
    };
    child.on('close', () => cleanup(Date.now() - startTime));
    child.on('error', (err) => cleanup(0, err.message));
    return { success: true };
  } catch(err) {
    runningProcesses.delete(gameId);
    return { success: false, error: err.message };
  }
});

ipcMain.handle('kill-game', async (_, gameId) => {
  const entry = runningProcesses.get(gameId);
  if (!entry) return { success: false, error: 'Not running' };
  const { child } = entry;
  runningProcesses.delete(gameId);
  try {
    const { execSync } = require('child_process');
    try { execSync(`taskkill /PID ${child.pid} /T /F`, { stdio: 'ignore' }); } catch(e) {}
    try { child.kill('SIGKILL'); } catch(e) {}
    try {
      if (mainWindow && !mainWindow.isDestroyed())
        mainWindow.webContents.send('game-exited', { gameId, elapsed: 0, forced: true });
    } catch(e) {}
    return { success: true };
  } catch(err) {
    return { success: true };
  }
});
ipcMain.handle('open-folder', async (_, p) => { shell.showItemInFolder(p); return { success: true }; });
ipcMain.handle('open-external', async (_, url) => { shell.openExternal(url); return { success: true }; });

ipcMain.handle('show-notification', (_, { title, body, url }) => {
  try {
    if (!Notification.isSupported()) return;
    const iconPath = path.join(__dirname, 'icon.ico');
    const n = new Notification({
      title: title || 'EDR-Vault',
      body: body || '',
      icon: fs.existsSync(iconPath) ? iconPath : undefined,
      silent: false,
    });
    if (url) n.on('click', () => shell.openExternal(url));
    n.show();
  } catch(e) {}
});

ipcMain.handle('check-update', async () => {
  return new Promise((resolve) => {
    try {
      const req = net.request({
        method: 'GET',
        url: 'https://api.github.com/repos/EDR23/EDR-VAULT/releases/latest',
        headers: { 'User-Agent': 'EDR-Vault', 'Accept': 'application/vnd.github.v3+json' }
      });
      let data = '';
      req.on('response', (res) => {
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            resolve({ success: true, tag: json.tag_name || '' });
          } catch(e) { resolve({ success: false, error: 'Parse error' }); }
        });
      });
      req.on('error', (e) => resolve({ success: false, error: e.message }));
      req.end();
    } catch(e) { resolve({ success: false, error: e.message }); }
  });
});
ipcMain.handle('browse-exe', async () => {
  const r = await dialog.showOpenDialog(mainWindow, { title: 'Select Executable', filters: [{ name: 'Executables', extensions: ['exe','bat','cmd'] }, { name: 'All', extensions: ['*'] }], properties: ['openFile'] });
  return r.canceled ? null : r.filePaths[0];
});
ipcMain.handle('browse-image', async () => {
  const r = await dialog.showOpenDialog(mainWindow, { title: 'Select Cover Image', filters: [{ name: 'Images', extensions: ['png','jpg','jpeg','webp','gif'] }], properties: ['openFile'] });
  if (r.canceled) return null;
  const p = r.filePaths[0], data = fs.readFileSync(p), ext = path.extname(p).slice(1).toLowerCase();
  return { path: p, name: path.basename(p), dataUrl: `data:image/${ext==='jpg'?'jpeg':ext};base64,${data.toString('base64')}` };
});
ipcMain.handle('browse-save-folder', async () => {
  const r = await dialog.showOpenDialog(mainWindow, { title: 'Select Save Folder', properties: ['openDirectory'] });
  return r.canceled ? null : r.filePaths[0];
});
ipcMain.handle('get-save-info', async (_, folderPath) => {
  if (!folderPath || !fs.existsSync(folderPath)) return { exists: false, size: 0, count: 0 };
  let size = 0, count = 0;
  const walk = dir => { try { for (const it of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, it.name); it.isDirectory() ? walk(p) : (size += fs.statSync(p).size, count++); } } catch(e){} };
  walk(folderPath);
  return { exists: true, size, count };
});
ipcMain.handle('zip-saves', async (_, folderPath, gameName) => {
  if (!folderPath || !fs.existsSync(folderPath)) return { success: false, error: 'Save folder not found' };
  const safe = gameName.replace(/[^a-z0-9]/gi,'_').toLowerCase();
  const ts = new Date().toISOString().replace(/[:.]/g,'-');
  const zipName = `vault_${safe}_${ts}.zip`;
  const tmpZip = path.join(app.getPath('temp'), zipName);
  return new Promise(resolve => {
    const cmd = `powershell -NoProfile -NonInteractive -Command "Compress-Archive -Path '${folderPath.replace(/'/g,"''")}\\*' -DestinationPath '${tmpZip.replace(/'/g,"''")}' -Force"`;
    exec(cmd, { timeout: 60000 }, (err, _, stderr) => {
      if (err) { resolve({ success: false, error: err.message || stderr }); return; }
      if (!fs.existsSync(tmpZip)) { resolve({ success: false, error: 'Zip not created – folder may be empty' }); return; }
      const data = fs.readFileSync(tmpZip); fs.unlinkSync(tmpZip);
      resolve({ success: true, data: data.toString('base64'), size: data.length, filename: zipName });
    });
  });
});

// ── SETTINGS ──────────────────────────────────────────────
const settingsPath = () => path.join(app.getPath('userData'), 'vault_cloud.json');
ipcMain.handle('get-cloud-settings', async () => {
  try { return fs.existsSync(settingsPath()) ? JSON.parse(fs.readFileSync(settingsPath(),'utf8')) : null; } catch(e) { return null; }
});
ipcMain.handle('save-cloud-settings', async (_, s) => {
  try { fs.writeFileSync(settingsPath(), JSON.stringify(s,null,2)); return { success: true }; } catch(e) { return { success: false, error: e.message }; }
});

// ── FTP ───────────────────────────────────────────────────
function makeFtpClient() {
  const ftp = require('basic-ftp');
  const client = new ftp.Client();
  client.ftp.verbose = false;
  return client;
}

async function ftpConnect(client, cfg) {
  if (!cfg || !cfg.host) throw new Error('FTP not configured');
  await client.access({
    host:     cfg.host,
    port:     parseInt(cfg.port) || 21,
    user:     cfg.user,
    password: cfg.password,
    secure:   false,
  });
  const remotePath = (cfg.remotePath || '/vault-saves').replace(/\\/g, '/');
  await client.ensureDir(remotePath);
  return remotePath;
}

ipcMain.handle('ftp-test', async (_, cfg) => {
  const client = makeFtpClient();
  try { await ftpConnect(client, cfg); return { success: true }; }
  catch(e) { return { success: false, error: e.message }; }
  finally { client.close(); }
});

ipcMain.handle('upload-to-cloud', async (_, { cfg, base64Data, filename }) => {
  const client = makeFtpClient();
  try {
    const remotePath = await ftpConnect(client, cfg);
    const buffer = Buffer.from(base64Data, 'base64');
    const { Readable } = require('stream');
    const readable = Readable.from(buffer);
    await client.uploadFrom(readable, remotePath + '/' + filename);
    return { success: true };
  } catch(e) { return { success: false, error: e.message }; }
  finally { client.close(); }
});

ipcMain.handle('list-cloud-backups', async (_, { cfg }) => {
  const client = makeFtpClient();
  try {
    const remotePath = await ftpConnect(client, cfg);
    const list = await client.list(remotePath);
    const files = list
      .filter(f => f.type !== 2 && f.name.endsWith('.zip'))
      .sort((a, b) => { const da = a.modifiedAt ? new Date(a.modifiedAt) : new Date(0); const db = b.modifiedAt ? new Date(b.modifiedAt) : new Date(0); return db - da; })
      .map(f => ({ id: f.name, name: f.name, size: f.size || 0, date: f.modifiedAt ? f.modifiedAt.toISOString() : '' }));
    return { success: true, files };
  } catch(e) { return { success: false, error: e.message }; }
  finally { client.close(); }
});

ipcMain.handle('download-cloud-backup', async (_, { cfg, filename }) => {
  const client = makeFtpClient();
  try {
    const remotePath = await ftpConnect(client, cfg);
    const tmpPath = path.join(app.getPath('temp'), filename);
    await client.downloadTo(tmpPath, remotePath + '/' + filename);
    return { success: true, tmpPath };
  } catch(e) { return { success: false, error: e.message }; }
  finally { client.close(); }
});

ipcMain.handle('delete-cloud-backup', async (_, { cfg, filename }) => {
  const client = makeFtpClient();
  try {
    const remotePath = await ftpConnect(client, cfg);
    await client.remove(remotePath + '/' + filename);
    return { success: true };
  } catch(e) { return { success: false, error: e.message }; }
  finally { client.close(); }
});

ipcMain.handle('purge-ftp-saves', async (_, { cfg }) => {
  const client = makeFtpClient();
  try {
    const remotePath = await ftpConnect(client, cfg);
    const list = await client.list(remotePath);
    const files = list
      .filter(f => f.type !== 2 && f.name.endsWith('.zip'))
      .map(f => ({ name: f.name, date: f.modifiedAt || new Date(0), size: f.size || 0 }));
    const groups = {};
    for (const f of files) {
      const m = f.name.match(/^vault_(.+?)_\d{4}/);
      const key = m ? m[1] : '__other__';
      if (!groups[key]) groups[key] = [];
      groups[key].push(f);
    }
    let deleted = 0;
    for (const key of Object.keys(groups)) {
      const sorted = groups[key].sort((a, b) => b.date - a.date);
      const toDelete = sorted.slice(3);
      for (const f of toDelete) {
        try { await client.remove(remotePath + '/' + f.name); deleted++; } catch(e2) {}
      }
    }
    return { success: true, deleted };
  } catch(e) { return { success: false, error: e.message, deleted: 0 }; }
  finally { client.close(); }
});

// ── STARTUP ON BOOT ───────────────────────────────────────
// --hidden flag makes the app start silently in the tray (no window shown)
ipcMain.handle('get-login-item', () => {
  try {
    const startupFolder = require('path').join(
      require('os').homedir(),
      'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup'
    );
    const lnkPath = require('path').join(startupFolder, 'EDR-Vault.lnk');
    return require('fs').existsSync(lnkPath);
  } catch(e) { return false; }
});

ipcMain.handle('set-login-item', (_, enable) => {
  try {
    const startupFolder = require('path').join(
      require('os').homedir(),
      'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup'
    );
    const lnkPath = require('path').join(startupFolder, 'EDR-Vault.lnk');
    if (enable) {
      const exePath = process.execPath;
      shell.writeShortcutLink(lnkPath, 'create', {
        target: exePath,
        args: '--hidden',
        description: 'EDR-Vault Game Library',
        icon: exePath,
        iconIndex: 0,
        workingDirectory: require('path').dirname(exePath),
      });
    } else {
      if (require('fs').existsSync(lnkPath)) require('fs').unlinkSync(lnkPath);
    }
    return true;
  } catch(e) { return false; }
});

// ── SCAN FOR SAVE FOLDER ──────────────────────────────────
ipcMain.handle('scan-save-folder', async (_, gameName) => {
  const os   = require('os');
  const home = os.homedir();
  const safe = gameName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const roots = [
    path.join(home, 'AppData', 'Roaming'),
    path.join(home, 'AppData', 'Local'),
    path.join(home, 'AppData', 'LocalLow'),
    path.join(home, 'Documents', 'My Games'),
    path.join(home, 'Documents'),
    path.join(home, 'Saved Games'),
    'C:\\Program Files (x86)\\Steam\\userdata',
    'C:\\Program Files\\Steam\\userdata',
  ];
  function scoreName(dirName) {
    const dn = dirName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (dn === safe) return 100;
    if (dn.includes(safe) || safe.includes(dn)) return 60;
    const words = safe.match(/.{3,}/g) || [];
    for (const w of words) { if (dn.includes(w)) return 40; }
    return 0;
  }
  const results = [];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    try {
      const entries = fs.readdirSync(root, { withFileTypes: true });
      for (const e of entries) {
        if (!e.isDirectory()) continue;
        const score = scoreName(e.name);
        if (score > 0) results.push({ path: path.join(root, e.name), score });
        if (score === 0 && (root.includes('Steam') || root.includes('userdata'))) {
          try {
            const sub = fs.readdirSync(path.join(root, e.name), { withFileTypes: true });
            for (const s of sub) {
              if (s.isDirectory()) {
                const subScore = scoreName(s.name);
                if (subScore > 0) results.push({ path: path.join(root, e.name, s.name), score: subScore });
              }
            }
          } catch(e2) {}
        }
      }
    } catch(e) {}
  }
  if (!results.length) return { found: false };
  results.sort((a, b) => b.score - a.score);
  return { found: true, path: results[0].path, all: results.slice(0, 5).map(r => r.path) };
});

// ── PURGE FTP BACKUPS ─────────────────────────────────────
ipcMain.handle('purge-ftp-backups', async (_, { cfg, keepCount = 3 }) => {
  const client = makeFtpClient();
  try {
    const remotePath = await ftpConnect(client, cfg);
    const list = await client.list(remotePath);
    const zipFiles = list
      .filter(f => f.type !== 2 && f.name.endsWith('.zip'))
      .map(f => ({ name: f.name, size: f.size || 0, date: f.modifiedAt || new Date(0) }));
    const gameMap = {};
    for (const f of zipFiles) {
      const m = f.name.match(/^vault_(.+?)_\d{4}-\d{2}-\d{2}/);
      const key = m ? m[1] : '__unknown__';
      if (!gameMap[key]) gameMap[key] = [];
      gameMap[key].push(f);
    }
    let deleted = 0;
    const deletedNames = [];
    for (const key of Object.keys(gameMap)) {
      const group = gameMap[key].sort((a, b) => b.date - a.date);
      const toDelete = group.slice(keepCount);
      for (const f of toDelete) {
        try { await client.remove(remotePath + '/' + f.name); deleted++; deletedNames.push(f.name); } catch(e) {}
      }
    }
    return { success: true, deleted, deletedNames };
  } catch(e) { return { success: false, error: e.message }; }
  finally { client.close(); }
});

ipcMain.handle('restore-backup', async (_, { tmpPath, restorePath }) => {
  if (!fs.existsSync(tmpPath)) return { success:false, error:'Temp file not found' };
  try { fs.mkdirSync(restorePath, { recursive:true }); } catch(e){}
  return new Promise(resolve => {
    exec(`powershell -NoProfile -NonInteractive -Command "Expand-Archive -Path '${tmpPath.replace(/'/g,"''")}' -DestinationPath '${restorePath.replace(/'/g,"''")}' -Force"`, { timeout:60000 }, (err,_,stderr) => {
      try { fs.unlinkSync(tmpPath); } catch(e){}
      err ? resolve({ success:false, error:err.message||stderr }) : resolve({ success:true });
    });
  });
});

ipcMain.handle('ensure-save-path', async (_, savePath) => {
  try {
    fs.mkdirSync(savePath, { recursive: true });
    return { success: true };
  } catch(e) {
    return { success: false, error: e.message };
  }
});
