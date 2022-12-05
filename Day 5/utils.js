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
};

const parseInstructions = (words) => {
    // "Move N from A to B"
    const split = words.split(" ");
    const num = split[1]
    const orig = split[3]
    const dest = split[5]

    return {num, orig, dest}
}

module.exports = {
    stacks,
    parseInstructions
}