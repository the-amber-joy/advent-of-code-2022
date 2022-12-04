const {
    results
} = require("./index.js")

results.forEach((day, i) => {
    const part1 = day[`p1`]
    const part2 = day[`p2`]

    console.log(part1["p1"])
    console.log(part2["p2"])
}) 