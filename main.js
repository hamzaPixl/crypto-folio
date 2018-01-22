const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    transparent: true,
    frame: false,
    width: 400,
    height: 850,
    icon: path.join(__dirname, 'app/assets/icons/logo/24x24.png'),
    show: true,
  });
  mainWindow.loadURL(url.format({
    pathname: 'localhost:8080',
    protocol: 'http:',
    slashes: true,
  }));
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
