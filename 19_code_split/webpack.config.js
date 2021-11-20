const { resolve } = require('path')

module.exports = {
  // 第一种
  // entry: {
  //   main: './src/index.js',
  //   test: './src/test.js'
  // },

  // 第二种

  // 第三种方式，通过js方式
  // import(/* webpackChunkName: 'test' */'./test.js').then((result) => {})
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
    ]
  },
  plugins: [
  ],
  // 可以将node_modules中代码单独打包
  // 也会分析多入口模式中有没有公共文件依赖，如果有，会单独打包成一个文件，方便复用
  optimization: {
    splitChunks: {
      chunks: 'all'
    },

  },
  mode: 'production'
}