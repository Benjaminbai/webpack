const { resolve } = require('path')
module.exports = {
    entry: './src/index',
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
                    // 将less资源转换成css资源
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    // 将js中的样式文件，插入head中
                    'style-loader',
                    // 将css文件，以commonjs方式加载到js中，转成样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    mode: 'development'
}