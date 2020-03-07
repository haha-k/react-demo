const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            //打包之后的html文件名字
            filename: 'index.html',
            // 以我们自己定义的html为模板生成，不然我们还要到打包之后的html文件中写
            template: 'public/index.html',
            // 在body最底部引入js文件
            inject: 'body',
            // 压缩html文件
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
    ],
    optimization: {
        minimizer: [
            // new UglifyJsPlugin({
            //         uglifyOptions: {
            //             compress: false,
            //             mangle: true,
            //             output: {
            //                 comments: false,
            //             },
            //         },
            //         sourceMap: false,
            //         exclude:/node_modules/,
            //     }
            // ),
            new OptimizeCssAssetsPlugin({
                //匹配需要优化压缩的资源名
                assetNameRegExp:/\.css$/g,
                //压缩和优化的处理器
                cssProcessor:require("cssnano"),
                //处理器选项
                cssProcessorPluginOptions:{
                    //预设
                    preset:['default',{
                        //去除注释
                        discardComments: {
                            removeAll:true
                        }
                    }]
                },
                //是否可以控制台输出
                canPrint: true,
            })
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                },
                vendors: {
                    priority: -10,
                    test: /node_modules/,
                    name: "vendor",
                    enforce: true,
                }
            }
        }
    }
})