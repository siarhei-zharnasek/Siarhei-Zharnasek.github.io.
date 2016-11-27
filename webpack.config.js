const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const development = NODE_ENV === 'development';

module.exports = {
  entry: "./scripts/script.js",
  output: {
    path: path.join(__dirname, "/dist"),
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
  devtool: development ? 'eval' : 'source-map',
  plugins: [  //plugin for online page update
    new webpack.HotModuleReplacementPlugin()
  ]
};
