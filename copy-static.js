const fs = require('fs');
const path = require('path');

// Копируем статические файлы
const staticPath = path.join(__dirname, '.next/static');
const standalonePath = path.join(__dirname, '.next/standalone/.next/static');

if (!fs.existsSync(standalonePath)) {
  fs.mkdirSync(standalonePath, { recursive: true });
}

fs.cpSync(staticPath, standalonePath, { recursive: true });

// Копируем public директорию
const publicPath = path.join(__dirname, 'public');
const standalonePublicPath = path.join(__dirname, '.next/standalone/public');

if (fs.existsSync(publicPath)) {
  if (!fs.existsSync(standalonePublicPath)) {
    fs.mkdirSync(standalonePublicPath, { recursive: true });
  }
  fs.cpSync(publicPath, standalonePublicPath, { recursive: true });
} 