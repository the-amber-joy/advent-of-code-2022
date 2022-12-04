const { getInput } = require('../input.js');
const { getPriorityScore } = require("./getPriorityScore.js")
const rucksacks = getInput(__dirname);

const findCommonItem = (sack) => {
    const compartment1 = sack.substring(0, sack.length / 2);
    const compartment2 = sack.substring(sack.length / 2);

    for (let i in compartment1) {
        if (compartment2.includes(compartment1[i])) return compartment1[i]
    }
}

const answer = rucksacks
    .map(sack =>
        getPriorityScore(findCommonItem(sack))
    )
    .reduce((acc, curr) => acc + curr, 0)


exports.d3p1 = "Day 3 Part 1: " + answer;