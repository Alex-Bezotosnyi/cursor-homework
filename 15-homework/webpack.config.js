// const path = require('path');
const WebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: ["./src/scripts/index.js"],
    output: {
        path: __dirname + "/dist",
        filename: 'cursor.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },
    plugins: [
        new WebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
};