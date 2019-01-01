const { name: customPreact } = require("custom-preact");
const { name: hooks } = require("custom-preact/hooks");

const name = "commonjs-consumer: index.js";
console.log("executing", name);
console.log("using", customPreact);
console.log("using", hooks);
