const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let objS1 = {};
  let objS2 = {};
  let sum = 0;
  for (let char of s1) {
    if(char in objS1) {
      objS1[char] += 1;
    } else {
      objS1[char] = 1;
    }
  }

  for (let char of s2) {
    if(char in objS2) {
      objS2[char] += 1;
    } else {
      objS2[char] = 1;
    }
  }

  for (let key in objS1) {
    if (key in objS2) {
      sum += Math.min(objS1[key], objS2[key]);
    }
  }




  return sum;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
