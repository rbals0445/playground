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
};
