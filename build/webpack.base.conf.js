var path = require('path')
var config = require('../config')
var utils = require('../utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS Sourcemaps for
// the various precessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.prod.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.prod.assetsRoot,
  },
  resolve: {
    symlinks: false,
    modules:
    extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
    },
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/,
    }, {
      test: /\.json/,
      loader: 'json',
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 1000,
        name: utils.assetsPath('img/[name].[ext]'),
      },
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
      },
    }],
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: useCssSourceMap,
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 10 versions'],
      }),
    ],
  },
}
