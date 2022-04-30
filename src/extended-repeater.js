const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str1 = String(str);
  let repeatTimes = options.repeatTimes || 0;
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let separator = options.separator || "+";
  let addition = String(options.addition);
  let additionSeparator = options.additionSeparator || "|";

  let answer = "";


  for (let i = 0; i < repeatTimes; i++) {
    answer += str1;
    for (let j = 0; j < additionRepeatTimes; j++) {
      answer += addition;
      if(j < additionRepeatTimes - 1) answer += additionSeparator;
    }

    if(i != repeatTimes - 1) {
      answer += separator;
    }
  } 

  return answer;





  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
