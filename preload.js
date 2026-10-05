// preload.js
//
// bridge between main process and renderer

const { contextBridge, ipcRenderer } = require('electron');
const { SerialPort } = require('serialport');

contextBridge.exposeInMainWorld('electronAPI', {
    getSerialPorts: () => SerialPort.list(),
	sendLoadMain: (newPage) => ipcRenderer.send('load-main', newPage),
});