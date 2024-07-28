const { app, BrowserWindow, screen } = require('electron');

let win

function createWindow() {
  const displays = screen.getAllDisplays();
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0;
  });

    win = new BrowserWindow({
        x: externalDisplay.bounds.x,
        y: externalDisplay.bounds.y,
        width: 900,
        height: 700,
        frame: false,
        resizable: false,
        webPreferences: {
        nodeIntegration: true
        }
    });

  win.loadURL('https://dzen.ru/pogoda/moscow/maps/nowcast?via=mmapw');

  win.webContents.on('dom-ready', () => {
    win.webContents.executeJavaScript(`
      const elements = document.evaluate("/html/body/div[2]/div[1]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      
      for (let i = 0; i < elements.snapshotLength; i++) {
        elements.snapshotItem(i).remove();
      }
      document.head.innerHTML += '<style> body { overflow-x: hidden; overflow-y: hidden;} </style>';
    `);
  });

}

setInterval(() => {
    win.reload()
    }, 600000) 

app.on('ready', createWindow);
