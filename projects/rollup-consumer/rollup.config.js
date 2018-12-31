import nodeResolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";
// const pkg = require('./package.json');

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/rollup-consumer.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/rollup-consumer.mjs",
      format: "es",
      sourcemap: true
    },
    {
      file: "dist/rollup-consumer.umd.js",
      name: "rollupConsumer",
      format: "umd",
      sourcemap: true
    }
  ],
  plugins: [nodeResolve()]
};
