const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "webpack-consumer.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map"
};
