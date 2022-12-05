const fs = require("fs");

const dirs =
    fs.readdirSync(__dirname, { withFileTypes: true })
        .filter(dir => dir.isDirectory() && dir.name != ".git" && dir.name != "template")
        .map(dir => dir.name)

const results = []
dirs.forEach((dayDir, i) => {
    results.push(
        {
            p1: require(`./${dayDir}/part1.js`),
            p2: require(`./${dayDir}/part2.js`),
        }
    )
})

results.forEach((day, i) => {
    const part1 = day[`p1`]
    const part2 = day[`p2`]

    console.log(part1["p1"])
    console.log(part2["p2"])
}) 