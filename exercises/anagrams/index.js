// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let str = "dd"
    
    stringA = convert(stringA)
    stringB = convert(stringB)

    let countA = {}, countB = {}

    if(stringA.length !== stringB.length){
        return false
    }

    for (let index = 0; index < stringA.length; index++) {      
        countA[`${stringA[index]}`] = countA[`${stringA[index]}`]+1 || 1
        countB[`${stringB[index]}`] = countB[`${stringB[index]}`]+1 || 1
    }

console.log(Object.entries(countB).sort())
console.log(Object.entries(countA).sort())

    return JSON.stringify(Object.entries(countB).sort()) 
    === JSON.stringify(Object.entries(countA).sort())
}

const convert = str => str.toLowerCase()
.replace(/\W/g, '')
.replace(' ','');

module.exports = anagrams;
