// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    stepsRe(n, 1, '')
}

const stepsRe = (n, row, rowStep) => {
    if(row > n){
        return
    }
    if(rowStep.length === n){
        console.log(rowStep)
        stepsRe(n, row + 1, '')
        return
    }
    if(rowStep.length < row){
        rowStep+='#'
    } else {
        rowStep+=' '
    }
    stepsRe(n, row, rowStep)
}

module.exports = steps;
