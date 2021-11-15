const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: resolve(__dirname, 'build/')
    },
    compress: true,
    port: 3000,
    open: true,
  },
  /**
   * inline-source-map:         内连，相比外部速度快，只生成一个文件
   *    错误代码的准确信息，定位到错误位置
   * hidden-source-map:         外部
   *    错误代码的准确信息，不能定位到源代码错误代码位置
   * eval-source-map:           内联，每个文件都会生成map文件
   *    错误代码的准确信息，定位到错误位置
   * nosources-source-map:      外部
   *    错误代码的准确信息，找不到代码位置
   * cheap-source-map:          外部
   *    错误代码的准确信息，定位到错误位置的那一行，只能精确的行
   * cheap-module-source-map:   外部
   *    错误代码的准确信息，定位到错误位置的那一行，只能精确的行
   * 
   * 
   * 开发环境：速度快，调试友好
   *  eval>inline>cheap
   *  eval-source-map / eval-cheap-module-sorce-map
   *    
   * 生产环境：
   *  内连会让体积变大
   *  source-map / cheap-module-source-map
   */
  devtool: 'source-map'
}