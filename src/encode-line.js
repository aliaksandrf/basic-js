const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sumTemp = 1;
  let answer = [];

  for (let i = 0; i < str.length - 1; i++) {
    if(str[i] != str[i + 1] && sumTemp == 1) answer.push(str[i]);
    if(str[i] == str[i + 1]) {
      sumTemp++;
    }
    if(str[i] != str[i + 1] && sumTemp !=1) {
      answer.push(sumTemp + str[i]);
      sumTemp = 1;
    }
  }

  if(sumTemp == 1) {
    answer.push(str[str.length - 1]);
  } else {
    answer.push(sumTemp + str[str.length - 1]);
  }

return answer.join("");
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
