function getPriorityScore(letter) {return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter) + 1;}

module.exports = {
    getPriorityScore
}