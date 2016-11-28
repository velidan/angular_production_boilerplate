var helpers = require("./helpers"),
  webpack = require("webpack"),
  
  webpackMerge = require("webpack-merge"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  commonConfig = require("./webpack.common.js");

var BabiliPlugin = require("babili-webpack-plugin");

const ENV = process.env.NODE_ENV = process.env.ENV = "production";

module.exports = webpackMerge(commonConfig, {
  devtool : false,

  output : {
    path : helpers.root("dist"),
    publicPath : "/",
    filename : "[name].[hash].js",
    chunkFilename : "[id].[hash].chunk.js"
  },

  plugins : [
    new webpack.LoaderOptionsPlugin({
      options: {
        htmlLoader : {
          minimize : true // workaround for ng2
        }
      }
    }),
    new webpack.NoErrorsPlugin(),
new BabiliPlugin(),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.DefinePlugin({
      "process.env" : {
        "ENV" : JSON.stringify(ENV)
      }
    })
  ]
});