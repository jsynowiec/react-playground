// webpack.config.js

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
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
