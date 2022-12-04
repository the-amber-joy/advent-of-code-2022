const {
    results
} = require("./index.js")

results.forEach((day, i) => {
    const part1 = day[`d${i+1}p1`]
    const part2 = day[`d${i+1}p2`]

    console.log(part1[`d${i+1}p1`])
    console.log(part2[`d${i+1}p2`])
}) 