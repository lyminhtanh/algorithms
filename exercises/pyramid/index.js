// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    pyr(n, 1, '')
}
// n = 500 => stack overflowed
const pyr = (n, rowIndex, rowStr) => {
    const maxRowLength = 1+2*(n-1)
    if(rowIndex > n){
        return
    }
    if(rowStr.length === maxRowLength){
        console.log(rowStr)
        pyr(n, rowIndex+1, '')
        return
    }
    if((rowStr.length > Math.floor(maxRowLength/2 - rowIndex)) && (rowStr.length < Math.floor(maxRowLength/2 + rowIndex))){
        rowStr+="#"
    } else {
        rowStr+=' '
    }
    pyr(n, rowIndex, rowStr)
}

module.exports = pyramid;
