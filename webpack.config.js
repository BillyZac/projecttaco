var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/, query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime'],
        }, },
      { test: /\.s?css$/, loader: 'style!css!sass' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      notifications: path.join(__dirname, 'src/notifications'),
    }
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'aws': {
        'accessKeyId': JSON.stringify('AKIAII47F3M5KTOZSPXA'),
        'secretAccessKey': JSON.stringify('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'),
        'region': JSON.stringify('us-east-1'),
      }
    }),
  ]
};
