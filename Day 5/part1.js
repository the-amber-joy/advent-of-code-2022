const { getInput, getName } = require('../utils.js');
const instructions = getInput(__dirname);

const stacks = {
    1: ["Q", "F", "L", "S", "R"],
    2: ["T", "P", "G", "Q", "Z", "N"],
    3: ["B", "Q", "M", "S"],
    4: ["Q", "B", "C", "H", "J", "Z", "G", "T"],
    5: ["S", "F", "N", "B", "M", "H", "P"],
    6: ["G", "V", "L", "S", "N", "Q", "C", "P"],
    7: ["F", "C", "W"],
    8: ["M", "P", "V", "W", "Z", "G", "H", "Q"],
    9: ["R", "N", "C", "L", "D", "Z", "G"],
}

const parseInstructions = (words) => {
    const split = words.split(" ");
    const num = split[1]
    const orig = split[3]
    const dest = split[5]

    return {num, orig, dest}
}

const makeTheMove = (num, orig, dest) => {
    const cratesToMove = stacks[orig].splice(0,`${num}`)
    for(i=0; i < cratesToMove.length; i++){
        stacks[dest].unshift(...cratesToMove.slice(i,i+1))
    }
}

// move N from A to B
// stacks[B].unshift(...stacks[A].splice(0,N))
instructions.forEach(instruction => {
    const {num, orig, dest} = parseInstructions(instruction)
    makeTheMove(num, orig, dest)
})

let answer = ""
for (let i in stacks){
    answer += stacks[i][0]
}

exports.p1 = getName(__dirname, __filename) + answer