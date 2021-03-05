const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 静态导入
  // entry: {
  //     app: './src/index',
  //     another: './src/another'
  // },
  // 动态导入
  entry: {
    app: path.join(__dirname, "./src/lazyIndex.js"),
  },
  output: {
    filename: "[name].[contenthash].js",
    // 动态导入分割 决定了非入口 chunk 的名称
    chunkFilename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // 代码分割需要配置
  optimization: {
    // 树摇，这里配置后，虽然没有使用还是会被打包进 chunk 还需要配置 side-effects
    // side-effects中需要排除在js中引入的css文件，否则会被认为没有使用而去掉
    // 在 prod 环境中默认开启 树摇
    usedExports: true,
    // 把 引入模板 单独提取为 chunk，并且为所有chunk创建一个runtime bundle
    runtimeChunk: "single",
    // 某些不需要改动的代码可以直接缓存
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          // 避免重复引入
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "渐进式网络应用",
    }),
  ],
};
