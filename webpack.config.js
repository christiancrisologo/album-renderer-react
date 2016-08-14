var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  context:path.resolve('js'),

  entry:APP_DIR + '/index.js',
  
  plugins:[
    new ExtractTextPlugin("styles.css")
  ],

  output: {
    path: BUILD_DIR,
    publicPath:'public/',
    filename: 'bundle.js'
  },

   devServer:{
    contentBase:'src/client'
   },

  module : {
    loaders : [
      {
        test:/\.css$/,
        exclude : /node_modules/,
        loader : 'style-loader!css-loader'
      },
      {
        test : /\.jsx?/,
        exclude : /node_modules/,
        loader : 'babel'
      }

    ]
  },

  resovle:{
    extensions:['','.js']
  }
};

module.exports = config;