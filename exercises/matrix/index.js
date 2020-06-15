// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const array2D = []
    for (let index = 0; index < n; index++) {
        array2D.push([])
    }
    let startCount = 1
    for (let index = n; index > 0; index-=2) {
        border(startCount, index, array2D)
    }
    return array2D
}

const border = (startCount, size, results) => {
    const offset = Math.floor((results.length - size)/2)
    if(offset){
        startCount = results[offset][offset-1] + 1
    }
    if(size === 1){
        results[offset][offset] = startCount
        return
    }
    // top
    for (let index = offset; index < size+offset; index++) {
        results[offset][index] = startCount
        startCount++
    }
    // right
    for (let index = 1+offset; index < size+offset; index++) {
        results[index][size-1-offset] = startCount
        startCount++
    }
    // bottom
    for (let index = size-2-offset; index >= offset; index--) {
        results[size-1-offset][index] = startCount
        startCount++
    }
    // left
    for (let index = size-2-offset; index > offset; index--) {
        results[index][offset] = startCount
        startCount++
    }

}

module.exports = matrix;
