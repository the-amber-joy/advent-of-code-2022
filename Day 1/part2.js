const { input } = require("./input.js");

const sumsSorted = input
  .map(elf => {
    return elf
      .split("\n")
      .map(item => parseInt(item, 10))
      .reduce((sum, v) => sum + v, 0);
  })
  .sort((a, z) => z - a);

console.log(sumsSorted[0] + sumsSorted[1] + sumsSorted[2]);
