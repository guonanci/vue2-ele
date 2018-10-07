const path = require('path')

module.exports = {
  build: {
    mode: '"production"',
    index: path.resolve(__dirname, '../elm/index.html'),
    assetsRoot: path.resolve(__dirname, '../elm'),
    assetsSubDir: 'static',
    assetsPublicPath: '/elm/',
    sourceMap: true,
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    gzip: false,
    gzipExts: ['js', 'css'],
  },

  dev: {
    mode: 'development',
    useEslint: true,
    showEslintErrorsInOverlay: false,
    port: 8000,
    assetsSubDir: 'static',
    assetsPublicPath: '/',
    context: [ // proxy path
      '/shopping',
      '/ugc',
      '/v1',
      '/v2',
      '/v3',
      '/v4',
      '/bos',
      '/member',
      '/promotion',
      '/eus',
      '/payapi',
      '/img',
    ],
    proxypath: 'http://cangdu.org:8001',
    // CSS Sourcemaps off by default becase relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experiences, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
}
