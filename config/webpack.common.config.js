const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './src/index.tsx',
        framework: ['react', 'react-dom'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    output: {
        filename: 'js/[name].[chunkhash:8].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        esModule: false,
                        outputPath: 'img/',
                        publicPath: "/dist/img/",
                        limit: 8192,
                    },
                }
            }
        ]
    },
};