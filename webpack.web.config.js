var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    client: './src/client/index.js'
  },
  output: {
    path: path.join(__dirname,'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel'
      }
    ]
  },
};