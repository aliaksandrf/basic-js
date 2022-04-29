const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrTemp = arr.map((item) => {
    if(item != -1) return item
  });

  arrTemp.sort((a, b) => a -b);
  let j = 0; 

  let arrAnswer = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == -1) {
      arrAnswer.push(-1);
    } else {
      arrAnswer.push(arrTemp[j]);
      j++;
    }
  }

  return arrAnswer;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
