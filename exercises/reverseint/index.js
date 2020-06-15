// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reverse = 0
    let index = 0
    const sign = Math.sign(n)
    n= Math.abs(n)
    const nLength = n.toString().length
    while (n > 0) {
        let mod = n%10
        reverse+= mod*Math.pow(10, nLength - 1 - index)
        index++
        n = Math.floor(n/10)
    }
    return sign*reverse
}

module.exports = reverseInt;
