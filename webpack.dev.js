const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    // 动态导入分割 决定了非入口 chunk 的名称
    chunkFilename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
