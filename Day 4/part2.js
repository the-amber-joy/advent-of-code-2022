const { getInput } = require('../input.js');
const pairs = getInput(__dirname)[0].split("\n");

let pairsWithOverlap = 0;

const totalOverlap = (r1, r2) => {
    /**
     * Case 1:
     * r1 has equal or smaller start
     * AND
     * r1 has eqaul or bigger end
     * 
     * Case 2:
     * r2 has equal or smaller start
     * AND
     * r2 has equal or bigger end
     */
    return r1[0] <= r2[0] && r1[1] >= r2[1]
    ||
    r2[0] <= r1[0] && r2[1] >= r1[1]
}

const partialOverlap = (r1, r2) => {
    /**
     * Case 1:
     * r1 start is smaller or equal to r2 end
     * AND
     * r1 end is greater or equal to r2 start
     * 
     * Case 2:
     * r2 start is smaller or equal to r1 end
     * AND
     * r2 end is greater or equal to r1 start
     */
    return r1[0] <= r2[1] && r1[1] >= r2[0]
    ||
    r2[0] <= r1[1] && r2[1] >= r1[0]
}

pairs.forEach((pair, index) => {
    const [group1, group2] = pair.split(",");

    const range1 = group1.split("-")
    const range2 = group2.split("-")

    const range1Numbers = range1.map(r => parseInt(r, 10))
    const range2Numbers = range2.map(r => parseInt(r, 10))

    if(
        totalOverlap(range1Numbers, range2Numbers)
        ||
        partialOverlap(range1Numbers, range2Numbers)
    ) {
        pairsWithOverlap++
    }
})

exports.d4p2 = "Day 4 Part 2: " + pairsWithOverlap;