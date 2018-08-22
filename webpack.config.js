const path = require('path');
const CopyWebpackPlugin = require ('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        name: '[name].css',
                        outputStyle: 'compressed',
                        includePaths: [
                            './node_modules'
                        ] }
                }]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'file-loader', options: { name: '[name].css' } },
                    { loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed',
                            includePaths: [
                                './node_modules'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                },
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader',
                    options: {
                        name: '[name].less',
                        outputStyle: 'compressed',
                        includePaths: [
                            './node_modules'
                        ] }
                }]
            }
        ]
    }
};
