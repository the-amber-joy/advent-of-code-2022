const path = require("path");
const { getInput } = require('../getInput.js');
const matches = getInput(__dirname);

const MY_RULES = {
    A: {
        X: {
            matchScore: 0,
            choicePoints: 3
        },
        Y: {
            matchScore: 3,
            choicePoints: 1
        },
        Z: {
            matchScore: 6,
            choicePoints: 2
        }
    },
    B: {
        X: {
            matchScore: 0,
            choicePoints: 1
        },
        Y: {
            matchScore: 3,
            choicePoints: 2
        },
        Z: {
            matchScore: 6,
            choicePoints: 3
        }
    },
    C: {
        X: {
            matchScore: 0,
            choicePoints: 2
        },
        Y: {
            matchScore: 3,
            choicePoints: 3
        },
        Z: {
            matchScore: 6,
            choicePoints: 1
        }
    }
}

const getPointsForMove = (round) => {
    const [them, me] = round;
    const {choicePoints, matchScore} = MY_RULES[them][me];

    return choicePoints + matchScore;
}

const totalScore = matches
    .map(match => [match.charAt(0), match.charAt(2)])
    .map(round => getPointsForMove(round))
    .reduce((total, matchPoints) => total + matchPoints, 0);


exports.p2 = `${path.parse(__dirname).name} ${path.parse(__filename).name}: ` + totalScore
