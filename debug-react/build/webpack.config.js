const path = require("path");

console.log(process.env.NODE_ENV);

module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  // template string 사용 https://webpack.kr/configuration/output/#template-strings
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../", "dist"),
    clean: true, // dist file을 항상 지우고나서 쓰게함.
    libraryTarget: "commonjs",
  },
  externals: {
    // 이렇게 안하면 react가 번들에 포함되어서, 다른곳에서 Import시에 2개의 react가 생기게 된다.
    react: "react",
    "react-dom": "react-dom",
    // dev환경에서는 빼면 안됨. React를 못찾으면 실행이 안되니까..
  },
};
