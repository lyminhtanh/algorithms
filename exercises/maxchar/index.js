// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxCount = 0
    let maxCharr
    const count = {}
   
   for(let char of str){
       count[char] = count[char] + 1 || 1
   }

   for(let char of str){
        if(count[char] > maxCount){
           maxCount =count[char]
           maxCharr = char
       }
   }
   return maxCharr
}

module.exports = maxChar;
