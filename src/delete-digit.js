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
  //throw new NotImplementedError('Not implemented');

  let stringNumber = ""+n;
  let arr = [];

  arr.push(+stringNumber.slice(1));
  for (let i = 1; i < stringNumber.length; i++) {
    let temp = stringNumber.slice(0, i) + stringNumber.slice(i + 1);
    arr.push(+temp);
  }


  let max = arr.sort((a, b) => b - a)
  return max[0];







/*   let arr = (''+n).split('').map(Number);
  let max = 0;
  console.log(arr.slice(0, 1));
  console.log(arr.slice(0, 0) + arr.slice(1));

  arr.forEach((item, index) => {
    let tempNumber = +(arr.slice(0, index).join('') + arr.slice(index + 1).join(''));
    console.log(+tempNumber);
    if(tempNumber > max) max = tempNumber;
  })

  return max; */

/* console.log(n);
  
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

return +answer.join(""); */
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
