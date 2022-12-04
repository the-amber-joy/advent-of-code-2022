const path = require("path");
const { getInput } = require('../getInput.js');
const pairs = getInput(__dirname);

let pairsWithOverlap = 0;

const totalOverlap = (r1, r2) =>
    r1[0] <= r2[0] && r1[1] >= r2[1]
    ||
    r2[0] <= r1[0] && r2[1] >= r1[1]


const partialOverlap = (r1, r2) =>
    r1[0] <= r2[1] && r1[1] >= r2[0]
    ||
    r2[0] <= r1[1] && r2[1] >= r1[0]


pairs.forEach(pair => {
    const [group1, group2] = pair.split(",");

    const range1 = group1.split("-").map(r => parseInt(r, 10))
    const range2 = group2.split("-").map(r => parseInt(r, 10))

    if (
        totalOverlap(range1, range2)
        ||
        partialOverlap(range1, range2)
    ) {
        pairsWithOverlap++
    }
})

exports.p2 = `${path.parse(__dirname).name} ${path.parse(__filename).name}: ` + pairsWithOverlap;