const { getInput, getName } = require('../utils.js');
const elves = getInput(__dirname);
const { getPriorityScore } = require("./getPriorityScore.js")

const findCommonItem = (group) => {
    const [sack1, sack2, sack3] = group.sort((a, b) => a.length - b.length);

    const commonItems = []
    let commonItem;

    for (let i in sack1) {
        if (sack2.includes(sack1[i])) {
            commonItems.push(sack1[i])
        }
    }

    for (let i in commonItems) {
        if (sack3.includes(commonItems[i])) {
            commonItem = commonItems[i]
        }
    }

    return commonItem;
}


const groups = [];
// determine the triad groups
for (let i = 0; i < elves.length; i += 3) {
    groups.push(
        [elves[i], elves[i + 1], elves[i + 2]]
    )
}

const answer = groups
    .map(group => findCommonItem(group))
    .map(item => getPriorityScore(item))
    .reduce((acc, curr) => acc + curr, 0);

exports.p2 = getName(__dirname, __filename) + answer
