

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // html 压缩
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],

  // 生产环境下，会自动压缩js代码，用的uglifyPlugin
  // mode: 'development'
  mode: 'production'
}