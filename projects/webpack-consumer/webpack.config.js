const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "webpack-consumer.js",
    path: outputPath
  },
  plugins: [
    new CleanWebpackPlugin([outputPath]),
    new HtmlWebpackPlugin({
      title: "Webpack Consumer"
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: outputPath
  }
};
