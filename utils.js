const path = require("path");
const fs = require("fs");

const getInput = (dir) => fs
  .readFileSync(path.join(`${dir}`, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n\n")[0]
  .split("\n");

const getName = (dir, file) => `${path.parse(dir).name} ${path.parse(file).name}: `

module.exports = {
  getInput,
  getName
};

