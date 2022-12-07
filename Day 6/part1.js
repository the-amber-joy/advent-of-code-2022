// https://adventofcode.com/2022/day/6
const { getInput, getName } = require('../utils.js');
const { check } = require("./check")
const data = getInput(__dirname)[0];

const answer = check(data, 4)

exports.p1 = getName(__dirname, __filename) + answer;
