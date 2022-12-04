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

exports.d1p2 = "Day 1 Part 2: " + `${snackList[0] + snackList[1] + snackList[2]}`
