const path = require("path");
const { getInput } = require('../getInput.js');
const pairs = getInput(__dirname);

let pairsWithOverlap = 0;
pairs.forEach((pair, index) => {
    const [group1, group2] = pair.split(",");

    const range1 = group1.split("-").map(r => parseInt(r, 10))
    const range2 = group2.split("-").map(r => parseInt(r, 10))

    if(
        range1[0] <= range2[0] && range1[1] >= range2[1]
        ||
        range2[0] <= range1[0] && range2[1] >= range1[1]
    ) {
        pairsWithOverlap++
    }
})

exports.p1 = `${path.parse(__dirname).name} ${path.parse(__filename).name}: ` + pairsWithOverlap;
