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
  entry: "./src/index.js",
  devtool: "inline-source-map", // 이거 있어야 확이 ㄴ가능
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
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // 명시적으로 써주지 않으면 모름.
    }),
  ],
};
