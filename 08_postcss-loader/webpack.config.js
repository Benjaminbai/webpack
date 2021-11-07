const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { resolve } = require('path')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    // 提取js中的css
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // css 兼容性处理 postcss -》 postcss-loader postcss-preset-env, 在pakage.json里设置browserlist
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
        ]
    },
    plugins: [
        // 默认创建空的html，自动引入打包后的所有资源
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development',


    devServer: {
        static: {
            directory: resolve(__dirname, "build/")
        },
        compress: true,
        port: 3000,
        open: true
    }
}