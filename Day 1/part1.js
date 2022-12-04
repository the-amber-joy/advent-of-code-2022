
const { input } = require('../input.js');
const snacks = input(__dirname);

const sumsSorted = snacks
  .map(elf => {
    return elf
      .split("\n")
      .map(item => parseInt(item, 10))
      .reduce((sum, v) => sum + v, 0);
  })
  .sort((a, z) => z - a);

const d1p1 = "Day 1 Part 1: " + sumsSorted[0];

module.exports = {
  sumsSorted,
  d1p1
};

