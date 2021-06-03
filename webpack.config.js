const path = require('path');

module.exports = {
    mode: 'production',
    entry: './temp',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
};