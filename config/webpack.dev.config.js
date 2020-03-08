const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[name].[hash:8].bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.(css)$/,
                use:[
                    'css-loader',
                ],
                exclude:/node_modules/,
            },
            {
            test: /\.(sass|scss)$/,
            use: [
                'css-loader',
                'sass-loader',
            ],
            exclude: /node_modules/,
        }, ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port: 9000,
        compress: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            //打包之后的html文件名字
            filename: 'index.html',
            // 以我们自己定义的html为模板生成，不然我们还要到打包之后的html文件中写
            template: 'public/index.html',
            // 在body最底部引入js文件
            inject: 'body',
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})