const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpg|cur)$/i,
                loader: 'url-loader', options: { limit: 8192 }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL || "http://192.168.0.113:8000/api"),
            SOCKET_IO_URL: JSON.stringify(process.env.SOCKET_IO_URL || "http://192.168.0.113:8000")
        })
    ]
};