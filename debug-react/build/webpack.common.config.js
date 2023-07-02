const { merge } = require("webpack-merge");
const developmentConfig = require("./webpack.dev.config.js");
const productionConfig = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
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

  resolve: {
    // 이거 없으면, import시에 확장자를 적어줘야함.
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 명시적으로 써주지 않으면 모름.
    }),
  ],
};

// https://github.com/survivejs/webpack-merge
if (process.env.NODE_ENV === "production") {
  module.exports = merge(commonConfig, productionConfig);
} else {
  module.exports = merge(commonConfig, developmentConfig);
}
