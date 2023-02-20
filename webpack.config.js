const path = require('path');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
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
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    'module': {
        'rules': [{
          'use': 'babel-loader',
          'test': /\.js$/,
          'exclude': /node_modules/,
          'options': {
            'plugins': ['lodash'],
            'presets': [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
          }
        }]
      },
      'plugins': [
        new LodashModuleReplacementPlugin,
        new webpack.optimize.UglifyJsPlugin
      ],
    mode: 'development'
};
new LodashModuleReplacementPlugin({
    'collections': true,
    'paths': true
  });

  