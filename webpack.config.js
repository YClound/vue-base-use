var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: path.resolve(__dirname,'./src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};

module.exports = config;