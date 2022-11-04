const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new webpack.SourceMapDevToolPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            warnings: false,
          },
          sourceMap: true
        }
      })
    ]
  }
}
