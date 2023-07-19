const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // Entry point for the application
    entry: './src/client/index.js',
    // Output configuration for the bundled files
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        libraryTarget: 'var',
        library: 'Client'
    },
    // Development mode for easy debugging
    mode: 'development',
    // Source map for better error tracking in development
    devtool: 'source-map',
    // Module rules to define how different file types should be handled
    module: {
        rules: [
            // Babel-loader for transpiling JavaScript files using presets
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // Loaders for processing SCSS files
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // File-loader to handle image files
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            },
            // HTML-loader to process HTML files
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    },
    // Plugins for additional tasks during the build process
    plugins: [
        // HTML plugin to generate an index.html file from template
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        // CleanWebpackPlugin to remove old/dist files before each build
        new CleanWebpackPlugin({
            dry: true, // Simulate the removal of files
            verbose: true, // Write logs to the console
            cleanStaleWebpackAssets: true, // Automatically remove all unused webpack assets on rebuild
            protectWebpackAssets: false // Do not remove assets that are imported in the webpack configuration
        })
    ]
};
