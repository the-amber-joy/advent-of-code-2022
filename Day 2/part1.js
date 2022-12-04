const { getInput } = require('../input.js');
const data = getInput(__dirname);

const OUTCOME = {
    win: 6,
    draw: 3,
    lose: 0
}
const MY_CHOICE = {
    X: {
        points: 1,
        A: OUTCOME.draw,
        B: OUTCOME.lose,
        C: OUTCOME.win
    },
    Y: {
        points: 2,
        A: OUTCOME.win,
        B: OUTCOME.draw,
        C: OUTCOME.lose
    },
    Z: {
        points: 3,
        A: OUTCOME.lose,
        B: OUTCOME.win,
        C: OUTCOME.draw
    }
}

const getScore = (round) => {
    const them = round[0]
    const me = round[1]
    // get score for what I picked
    const myPickPoints = MY_CHOICE[me].points;

    // // find result of match
    const matchResult = MY_CHOICE[me][them]

    // // get score for result
    return myPickPoints + matchResult
}

const matches = data[0].split("\n");

const rounds = matches.map(match => {
    const play = [match.charAt(0), match.charAt(2)]
    return getScore(play)
})

const totalScore = rounds.reduce((total, points) => total + parseInt(points, 10), 0)

exports.d2p1 = "Day 2 Part 2: " + totalScore