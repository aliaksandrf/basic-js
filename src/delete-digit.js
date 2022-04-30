const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  throw new NotImplementedError('Not implemented');
  
console.log(n);
  
let arr = (""+n).split("").map(Number);
console.log(arr);
let min = Math.min(...arr);
console.log(min)
let i = 0;
let answer = arr.map((item) => {
  if (item != min) {
    return item;
  } else {
    i++;
    if(i > 1) return item;
  }
})

return +answer.join("");
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
