const { getInput } = require('../input.js');
const pairs = getInput(__dirname)[0].split("\n");

let pairsWithOverlap = 0;
pairs.forEach((pair, index) => {
    const [group1, group2] = pair.split(",");

    const range1 = group1.split("-")
    const range2 = group2.split("-")

    const range1Numbers = range1.map(r => parseInt(r, 10))
    const range2Numbers = range2.map(r => parseInt(r, 10))

    if(
        range1Numbers[0] <= range2Numbers[0] && range1Numbers[1] >= range2Numbers[1]
        ||
        range2Numbers[0] <= range1Numbers[0] && range2Numbers[1] >= range1Numbers[1]
    ) {
        pairsWithOverlap++
    }
})

exports.d4p1 = "Day 4 Part 1: " + pairsWithOverlap;