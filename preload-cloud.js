const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('cloudAPI', {
  getSettings:      ()       => ipcRenderer.invoke('get-cloud-settings'),
  saveSettings:     (s)      => ipcRenderer.invoke('save-cloud-settings', s),
  ftpTest:          (cfg)    => ipcRenderer.invoke('ftp-test', cfg),
  uploadToCloud:    (args)   => ipcRenderer.invoke('upload-to-cloud', args),
  listBackups:      (args)   => ipcRenderer.invoke('list-cloud-backups', args),
  downloadBackup:   (args)   => ipcRenderer.invoke('download-cloud-backup', args),
  deleteBackup:     (args)   => ipcRenderer.invoke('delete-cloud-backup', args),
  restoreBackup:    (args)   => ipcRenderer.invoke('restore-backup', args),
  close:            ()       => ipcRenderer.send('close-cloud-window'),
});
