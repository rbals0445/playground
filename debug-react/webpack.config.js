const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./index.js",
    utils: "./utils.ts",
    test: "./test.ts",
    Counter: {
      import: "./src/components/Counter/Counter.tsx",
      filename: "src/components/Counter/[name].js",
    },
    Counter2: {
      import: "./src/components/Counter/Counter2.tsx",
      filename: "src/components/Counter/[name].js",
    },
  },
  // template string 사용 https://webpack.kr/configuration/output/#template-strings
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist file을 항상 지우고나서 쓰게함.
    libraryTarget: "commonjs",
  },
  resolve: {
    // 이거 없으면, import시에 확장자를 적어줘야함.
    extensions: [".tsx", ".ts", ".js"],
  },
  // prettier-ignore
  // externals: /^(react|react-dom)(\/.*)?$/,

  externals: { // 이렇게 안하면 react가 번들에 포함되어서, 다른곳에서 Import시에 2개의 react가 생기게 된다.
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // include: [
        //   path.resolve("./node_modules/react"),
        //   path.resolve("./node_modules/react-dom"),
        // ],
        // include node_modules react file in webpack
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.css$/, use: "css-loader" },
      { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
    ],
  },
  // target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // 명시적으로 써주지 않으면 모름.
    }),
  ],
};
