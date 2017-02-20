const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const VENDORS_LIBS = ['react', 'react-dom', 'izap-youtube-search'];

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDORS_LIBS
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'build/')
    },
    module: {
        rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })

    ]
}


module.exports = config;