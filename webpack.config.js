// webpack.config.js

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './scripts/app.js',
  output: {
    path: 'build',
    publicPath: '/build/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ]
};
