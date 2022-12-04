const fs = require("fs");

const dirs =
    fs.readdirSync(__dirname, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name != ".git" && dirent.name != "template")
        .map(dirent => dirent.name)

const results = []
dirs.forEach((dayDir, i) => {
    results.push(
        {
            p1: require(`./${dayDir}/part1.js`),
            p2: require(`./${dayDir}/part2.js`),
        }
    )
})

module.exports = {results};