const path = require("path");
const { getInput } = require('../getInput.js');
const matches = getInput(__dirname);

const MY_CHOICE = {
    X: {
        choicePoints: 1,
        A: 3,
        B: 0,
        C: 6
    },
    Y: {
        choicePoints: 2,
        A: 6,
        B: 3,
        C: 0
    },
    Z: {
        choicePoints: 3,
        A: 0,
        B: 6,
        C: 3
    }
}

const getScore = (round) => {
    const [them, me] = round
    return MY_CHOICE[me].choicePoints + MY_CHOICE[me][them]
}

const totalScore = matches
    .map(match => getScore([match.charAt(0), match.charAt(2)]))
    .reduce((total, matchPoints) => total + matchPoints, 0)

exports.p1 = `${path.parse(__dirname).name} ${path.parse(__filename).name}: ` + totalScore
