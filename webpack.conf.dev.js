const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {host: '0.0.0.0', hot: true},
  plugins: [
    new webpack.SourceMapDevToolPlugin()
  ]
}
