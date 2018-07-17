const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
require('electron-reload')(__dirname);

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    transparent: false,
    frame: true,
    width: 1000,
    height: 600,
    webPreferences: { webSecurity: false },
    icon: path.join(__dirname, 'src/assets/icons/logo/linux/logo.png'),
    show: true,
    darkTheme: true,
  });
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('browser-window-created', (e, window) => {
  window.setMenu(null);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
