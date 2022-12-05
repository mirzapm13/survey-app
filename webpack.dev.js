/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].chunk.bundle.js',
  },
  devtool: 'inline-source-map', // Created a source map
  devServer: {
    // Running source files in development server
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile files with Babel and webpack
          options: {
            sourceMap: true,
          },
        },
      },
      {
        // Convert SCSS files into CSS file
        test: /\.(s[ac]ss)$/i,
        use: [
          { loader: 'style-loader' }, // Resolve CSS imports
          { loader: 'css-loader' }, // Resolve CSS imports
          { loader: 'postcss-loader' }, // Transforming styles with JS plugins
          { loader: 'sass-loader' }, // Load SCSS and compile to CSS
        ],
      },
      {
        // Compatibility for images
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
      {
        // Compatibility for fonts
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [],
});
