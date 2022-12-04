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

exports.p2 = `${path.parse(__dirname).name} ${path.parse(__filename).name}: ` + `${snackList[0] + snackList[1] + snackList[2]}`
