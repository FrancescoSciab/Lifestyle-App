const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './assets/JS/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: './dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                }
              }
        ]
    },
    'module': {
        'rules': [{
          'use': 'babel-loader',
          'test': /\.js$/,
          'exclude': /node_modules/,
        }]
      },
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    mode: 'development'
};

  