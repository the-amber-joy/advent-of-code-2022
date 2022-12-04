const { input } = require('../input.js');
const data = input(__dirname);

const PLANNED_OUTCOME = {
    X: "lose",
    Y: "draw",
    Z: "win"
}

const MY_CHOICE = {
    ROCK: {
        points: 1,
        A: PLANNED_OUTCOME.draw,
        B: PLANNED_OUTCOME.lose,
        C: PLANNED_OUTCOME.win
    },
    PAPER: {
        points: 2,
        A: PLANNED_OUTCOME.win,
        B: PLANNED_OUTCOME.draw,
        C: PLANNED_OUTCOME.lose
    },
    SCISSORS: {
        points: 3,
        A: PLANNED_OUTCOME.lose,
        B: PLANNED_OUTCOME.win,
        C: PLANNED_OUTCOME.draw
    }
}

const MY_RULES = {
    A: {
        lose: {
            play: MY_CHOICE.SCISSORS
        },
        draw: {
            play: MY_CHOICE.ROCK
        },
        win: {
            play: MY_CHOICE.PAPER
        }
    },
    B: {
        lose: {
            play: MY_CHOICE.ROCK
        },
        draw: {
            play: MY_CHOICE.PAPER
        },
        win: {
            play: MY_CHOICE.SCISSORS
        }
    },
    C: {
        lose: {
            play: MY_CHOICE.PAPER
        },
        draw: {
            play: MY_CHOICE.SCISSORS
        },
        win: {
            play: MY_CHOICE.ROCK
        }
    }
}

const OUTCOME_POINTS = {
    win: 6,
    draw: 3,
    lose: 0
}

const pointsForMove = (round) => {
    const them = round[0]
    const me = round[1]
    const myPlay = PLANNED_OUTCOME[me]
    const pointsForSelection = MY_RULES[them][myPlay].play.points

    return pointsForSelection + OUTCOME_POINTS[myPlay]
}


const matches = data[0].split("\n");

const rounds = matches.map(match => {
    return [match.charAt(0), match.charAt(2)]
})

const final = rounds.map(round => {
    return pointsForMove(round)
})

const totalScore = final.reduce((total, points) => total + parseInt(points, 10), 0)

exports.d2p2 = "Day 2 Part 2: " + totalScore