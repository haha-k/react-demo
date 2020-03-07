const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        framework:['react','react-dom'],
    },
    output: {
        filename: 'js/[name].[chunkhash:8].bundle.js',
        path: path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader',
                exclude:/node_modules/,
            },
            {
                test:/\.(css)$/,
                use:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
                exclude:/node_modules/,
            }
        ]

    },
};