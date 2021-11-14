const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/wink-encrypt.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wink-encrypt.min.js',
    libraryTarget: 'umd',
    library: 'winkEncrypt'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
}