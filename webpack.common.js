/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: (pathData) => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name].[hash][ext][query]`;
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            store: path.resolve(__dirname, './src/store'),
            features: path.resolve(__dirname, './src/features'),
        },
        extensions: ['.js', '.jsx'],
        fallback: {
            fs: false,
        },
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        mainFields: ['loader', 'main'],
    },
    plugins: [
        // Generate HTML files from template
        new HtmlWebpackPlugin({
            title: 'Test React',
            template: './public/index.html',
            filename: 'index.html',
        }),
        // Checking & fixing JavaScript code
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            formatter: 'visualstudio',
        }),
        new NodePolyfillPlugin(),
    ],
};
