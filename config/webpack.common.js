var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// var ProvidePlugin = require('webpack/lib/ProvidePlugin');

var helpers = require('./helpers');
var glob = require("glob"); //should del if entries works!
var entry = require('webpack-glob-entry');



//    'bundled_scripts': glob.sync('./src/assets/**/*.js')

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    'bundled_scripts': glob.sync('./src/assets/scripts/**/*.js')
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.(scss|sass)$/,
        include: helpers.root('src', 'assets', 'styles'),
        loader: ExtractTextPlugin.extract(
          'style',
          'css!resolve-url!sass' 
        )
      },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
        {
          context: './src',
          from : {
            glob : 'assets/static_files_to_copy/**/*',
            to : 'dist/assets/[name].[ext]'
          }
        }
      ]),

    new webpack.ProvidePlugin({
     jQuery: 'jquery',
     $: 'jquery',
     jquery: 'jquery'
   }),

  ]
};
