const APP_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon2.png',
  './icon-192.png',
  './icon-512.png'
].map(path => new URL(path, APP_BASE).href);