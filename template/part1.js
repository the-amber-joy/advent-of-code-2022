const path = require("path");
const { getInput } = require('../getInput.js');
const data = getInput(__dirname);

exports.p1 = `${path.parse(__dirname).name} ${path.parse(__filename).name}: ` + "answer"