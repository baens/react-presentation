var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
  },
  entry: {
    server: './src/server/index.js'
  },
  output: {
    path: path.join(__dirname,'build'),
    filename: '[name].js'
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        loader: 'babel'
      }
    ]
  },
};