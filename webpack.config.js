const path = require('path');

module.exports = {
  entry: {
    server: './src/routes/index.js',
    client: './src/main.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};