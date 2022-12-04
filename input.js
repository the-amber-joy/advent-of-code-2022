const path = require("path");
const fs = require("fs");

const getInput = (dir) => fs.readFileSync(path.join(`${dir}`, "input.txt"), "utf8").toString().trim().split("\n\n");

module.exports = {
  getInput
};
