const { getInput } = require('../input.js');
const elves = getInput(__dirname)[0].split("\n");
const { a1 } = require("./part1") 

///////////////
// functions
///////////////
const findCommonItem = (group) => {
    const [sack1, sack2, sack3] = group.sort((a, b) =>  a.length - b.length);

    const commonItems = []
    let commonItem;

    for(let i in sack1){
        if (sack2.includes(sack1[i])) {
            commonItems.push(sack1[i])
        }
    }

    for(let i in commonItems) {
        if (sack3.includes(commonItems[i])) {
            commonItem = commonItems[i]
        }
    }

    return commonItem;
}

const groups = [];

///////////////
// do stuff
///////////////


// determine the triad groups
for (let i=0; i < elves.length; i += 3) {
    groups.push(
        [elves[i], elves[i+1], elves[i+2]]
    )
}

const items = groups.map(group => findCommonItem(group))
const points = items.map(item => a1(item))
const answer = points.reduce((a, c) => a + c, 0);

exports.d3p2 = "Day 3 Part 1: " + answer;