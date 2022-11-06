const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PrerenderSPAPlugin = require('prerender-spa-plugin-next');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const prerenderConfig = require('./webpack.conf.prerender');
const project = require('./project.json');

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
      }),
      new PrerenderSPAPlugin({
        staticDir: `${__dirname}/${project.dist.root}`,
        routes: prerenderConfig.getRoutes(),
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        },
        renderer: require('@prerenderer/renderer-puppeteer'),
        rendererOptions: {
          headless: true,
          args: ['–no-sandbox', '–disable-setuid-sandbox']
        }
      })
    ]
  }
}
