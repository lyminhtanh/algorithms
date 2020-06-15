// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const array = str.split('')
    debugger
    for (let index = 0; index < array.length/2; index++) {
        const element = array[index];
        temp = array[index]
        array[index] = array[array.length-1-index]
        array[array.length-1-index] = temp
    }
    return array.join('')
}

reverse('abcd')

module.exports = reverse;
