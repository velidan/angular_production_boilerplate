var webpack = require("webpack"),
  helpers = require("./helpers"),
  glob = require("glob"),

  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  SpritesmithPlugin = require("webpack-spritesmith"),
  SvgStore = require("webpack-svgstore-plugin"),

  srcName = "src",
  assetsPath = srcName + "/assets/";

// var ProvidePlugin = require("webpack/lib/ProvidePlugin");






module.exports = {
  entry : {
    "polyfills" : "./" + srcName + "/polyfills.ts",
    "vendor" : "./" + srcName + "/vendor.ts",
    "app" : "./" + srcName + "/main.ts",
    "bundled_scripts": glob.sync("./" + assetsPath + "/scripts/**/*.js")
  },

  resolve : {
    extensions : ["", ".js", ".ts"],
     modulesDirectories : ["web_modules", "node_modules", "spritesmith-generated"]
  },

  module : {
    loaders : [
      {
        test : /\.ts$/,
        exclude : [/node_modules/],
        loaders : ["awesome-typescript-loader", "angular2-template-loader", "angular2-router-loader"]
      },
      {
        test : /\.html$/,
        loader : "html"
      },
      {
        test : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader : "file?name=assets/[name].[hash].[ext]"
      },
      {
        test : /\.css$/,
        include : helpers.root(srcName, "app"),
        loader : "raw"
      },
      {
        test : /\.css$/,
        exclude : helpers.root(srcName, "app"),
        loader : ExtractTextPlugin.extract("style", "css?sourceMap")
      },
      {
        test : /\.(scss|sass)$/,
        include : helpers.root(srcName, "assets", "styles"),
        loader : ExtractTextPlugin.extract(
          "style",
          "css!resolve-url!sass" 
        )
      },
    ]
  },

  plugins : [
    new webpack.optimize.CommonsChunkPlugin({
      name : ["app", "vendor", "polyfills"]
    }),

    new HtmlWebpackPlugin({
      template : "src/index.html"
    }),

    new CopyWebpackPlugin([
        {
          context : "./" + srcName,
          from : {
            glob : "assets/static_files_to_copy/**/*",
            to : "dist/assets/[name].[ext]"
          }
        }
      ]),

    new webpack.ProvidePlugin({
     jQuery : "jquery",
     $ : "jquery",
     jquery : "jquery"
   }),

    new SpritesmithPlugin({
        src : {
            cwd: helpers.root(assetsPath + "/ico"),
            glob: "*.png"
        },
        target : {
            image : helpers.root(assetsPath + "/spritesmith-generated/sprite.png"),
            css : helpers.root(assetsPath + "/spritesmith-generated/sprite.scss")
        },
        apiOptions : {
            cssImageRef: "~sprite.png"
        }
    }),

    new SvgStore({
      svgoOptions : {
        plugins : [
          { removeTitle : true }
        ]
      },
      prefix : "icon-"
    })

  ]
};
