const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // 保证当 vendor 内容不变时，hash也不会改变
  plugins: [new webpack.HashedModuleIdsPlugin()],
});
