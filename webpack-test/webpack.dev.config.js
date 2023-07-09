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
        options: {
          presets: [
            ["@babel/preset-env", { targets: "defaults" }],
            "@babel/preset-react",
            "@babel/preset-typescript"// 무슨 역할 하는지 확인 필요
          ]
        },
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
  devServer: {
    server: "https",
    port: 9000,
    hot: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      // 모든 react파일들이 현재 디렉토리의 REact를 바라보게함. 외부 에디터 부를때 ..
      // "@": path.resolve(__dirname, "../debug-react"),
      "#": path.resolve(__dirname, "./src"),
      react: path.resolve(__dirname, "node_modules", "react"),
      "my-util/dist": path.resolve(__dirname, "../", "debug-react"),
      // "react-dom": path.resolve(__dirname, "node_modules", "react-dom"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // 명시적으로 써주지 않으면 모름.
    }),
  ],
};
