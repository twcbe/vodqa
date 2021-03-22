const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const copyPluginConfig = new CopyPlugin({
  patterns: [
    { from: "src/assets", to: "./" },
    { from: "404.html", to: "./" },
  ],
});
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/index.html"),
  filename: "index.html",
  inject: "body",
  favicon: "src/assets/favicon.ico",
});
const terserPluginConfig = new TerserPlugin({
  parallel: true,
});

module.exports = {
  mode: "development",
  entry: "./src/app.jsx",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    copyPluginConfig,
    HTMLWebpackPluginConfig,
    new CompressionPlugin({ test: /\.js$|\.css$|\.html$/ }),
  ],
  optimization: {
    minimizer: [terserPluginConfig],
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    hot: true,
    port: 8080,
  },
  devtool: "cheap-source-map",
};
