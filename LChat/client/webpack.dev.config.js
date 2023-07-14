const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // prettier-ignore
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      { test: /\.css$/, use: "css-loader" },
      { test: /\.(ts|tsx)$/, use: "ts-loader" },
    ],
  },
  mode: "development",
  entry: "./src/index",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "web",
  devServer: {
    server: "https",
    port: 9000,
    hot: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@home": path.resolve(__dirname, "./src/home"),
      "@chat/*": path.resolve(__dirname, "./src/chat"),
      "@base/*": path.resolve(__dirname, "./src/base"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
