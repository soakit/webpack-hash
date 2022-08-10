const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 新增
const path = require("path");

module.exports = {
  mode: "production", // 如果不添加就会警告
  entry: {
    main: "./src/main.js", // 一个入口文件
    vendors: "./src/common.js", // 两一个入口文件
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[name].[contenthash:8].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    // 提取css插件
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      chunkFilename: "[name].[contenthash:8].css",
    }),
  ],
};
