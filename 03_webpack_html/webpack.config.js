const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        // 默认创建空的html，自动引入打包后的所有资源
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}