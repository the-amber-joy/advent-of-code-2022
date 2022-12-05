// https://adventofcode.com/2022/day/5
const { getInput, getName } = require('../utils.js');
const instructions = getInput(__dirname);
const { stacks, parseInstructions } = require("./utils")

// move N from A to B 
// stacks[B].unshift(...stacks[A].splice(0,N))
const makeTheMove = (num, orig, dest) => {
    const cratesToMove = stacks[orig].splice(0,`${num}`)
    // MOVE ONE AT A TIME!
    for(i=0; i < cratesToMove.length; i++){
        stacks[dest].unshift(...cratesToMove.slice(i,i+1))
    }
}

instructions.forEach(instruction => {
    const {num, orig, dest} = parseInstructions(instruction)
    makeTheMove(num, orig, dest)
})

let answer = ""
for (let i in stacks){
    answer += stacks[i][0]
}

exports.p1 = getName(__dirname, __filename) + answer
