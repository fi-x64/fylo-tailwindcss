const path = require("path");

module.exports = {
  entry: "./js/script.js", // điểm bắt đầu của JS
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // output vào dist/
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"), // để phục vụ index.html ở root
    },
    port: 3000,
    hot: true,
    open: true,
  },
};
