const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'isDevelopment';
const isDevelopment = NODE_ENV === 'isDevelopment';

module.exports = {
  entry: "./scripts/script.js",
  context: __dirname,
  output: {
    path: __dirname + "/dist",
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-ie']
        }
      }
    ]
  },
  devServer: {  //settings for webpack dev server
    inline: true, //do that we no need to recollect bundle
    hot: true //and no need to update page
  },
  devtool: isDevelopment ? 'eval' : 'source-map',
  plugins: isDevelopment ? [new webpack.HotModuleReplacementPlugin()] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
