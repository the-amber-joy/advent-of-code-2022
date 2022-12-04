const path = require("path");
const fs = require("fs");
const snacks = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8").toString().trim().split("\n\n");

const snackList = snacks
  .map(elf => {
    return elf
      .split("\n")
      .map(item => parseInt(item, 10))
      .reduce((sum, v) => sum + v, 0);
  })
  .sort((a, z) => z - a);

const d1p1 = "Day 1 Part 1: " + snackList[0];

module.exports = {
  snackList,
  d1p1
};

