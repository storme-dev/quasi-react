const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');

execSync('npx babel src --out-dir temp');
execSync('npx webpack');
const api = fs.readFileSync(__dirname + '/api.js').toString();
const code = fs.readFileSync(__dirname + '/dist/bundle.js').toString();
fs.writeFileSync(__dirname + '/dist/bundle.js', api+code.replace(new RegExp('React.createElement', 'g'), 'createElement'));
exec(`start ${path.join(__dirname, 'dist', 'index.html')}`);