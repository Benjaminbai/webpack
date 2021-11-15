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
    // 开启HMR功能
    // hot module replacement 热模块替换，一个模块发生变化，只会更新这一个模块，而不是打包所有
    // js/html 默认不支持hmr，并且html文件不更新了, 修改entry入口就可以了
    // html不要做hmr，因为只有一个
    // hmr一般只会对非入口文件生效
    hot: true,
  }
}