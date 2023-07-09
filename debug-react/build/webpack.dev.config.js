const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map", // 이거 있어야 확이 ㄴ가능
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../", "dist"),
    clean: true, // dist file을 항상 지우고나서 쓰게함.
  },
  devServer: {
    server: "https",
    port: 8888,
    hot: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
    },
  },
  // https://github.com/webpack/webpack/issues/15988#issuecomment-1167231285
  // 같은 페이지에 여러개의 entry를 사용할 수 없음.
  optimization: {
    runtimeChunk: "single",
  },
};
