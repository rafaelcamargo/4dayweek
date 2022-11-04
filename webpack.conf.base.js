const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [`${__dirname}/${project.source.scripts.index}`],
  output: {
    filename: project.dist.scripts.filename[env],
    assetModuleFilename: project.dist.images.filename[env]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ]
      },
      {
       test: /\.(jpg|jpeg|png|svg)/,
       type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      '@environment$': `${__dirname}/${project.source.environments.root}/${env}.js`,
      '@src': `${__dirname}/${project.source.root}`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: project.source.index.file,
      favicon: project.source.favicon.file,
      minify: { collapseWhitespace: true }
    }),
    new MiniCssExtractPlugin({
      filename: project.dist.styles.filename[env]
    })
  ]
}
