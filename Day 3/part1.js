const { input } = require('../input.js');
const rucksacks = input(__dirname)[0].split("\n");

const findCommonItem = (sack) => {
    const compartment1 = sack.substring(0, sack.length/2);
    const compartment2 = sack.substring(sack.length/2);

    for(let i in compartment1){
        if (compartment2.includes(compartment1[i])) return compartment1[i]
    }
}

function a1(letter){
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .indexOf(letter)+1;
}

// split each sack into 2 comparments
const foo = rucksacks.map(sack => {
    const commonItem = findCommonItem(sack);
    const priorityScore = a1(commonItem)

    return priorityScore;
})



const answer = foo.reduce((a, c) => a+c, 0);

const d3p1 = "Day 3 Part 1: " + answer;

module.exports = {
    a1,
    d3p1
}