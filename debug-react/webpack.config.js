const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./index.js",
    gyumin_util: "./utils.ts",
    gyumin_test: "./test.ts",
    Counter: "./entry/Counter.ts",
  },
  // template string 사용 https://webpack.kr/configuration/output/#template-strings
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist file을 항상 지우고나서 쓰게함.
    // libraryTarget: "commonjs",
  },
  resolve: {
    // 이게 없으면 빌드시에 import ~~ from "./test" 를 했을때 못알아먹음.
    extensions: [".tsx", ".ts", ".js"],
  },
  // externals: {
  //   react: "react",
  //   "react-dom": "react-dom",
  // },
  // prettier-ignore
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              "@babel/preset-react",
              "@babel/preset-typescript"// 무슨 역할 하는지 확인 필요
            ]
          },
        },
      },
      { test: /\.css$/, use: "css-loader" },
      { test: /\.(ts|tsx)$/, use: "ts-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // 명시적으로 써주지 않으면 모름.
    }),
  ],
};
