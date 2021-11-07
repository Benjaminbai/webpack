
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

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
                    'style-loader',
                    'css-loader',
                ]
            },
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     // 处理img资源, 依赖file-loader
            //     loader: 'url-loader',
            //     options: {
            //         limit: 8 * 1024,
            //         esModule: false,
            //         name: '[hash:10].[ext]'
            //     }
            // },
            {
                test: /\.html$/,
                // 处理html中引入的图片
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}