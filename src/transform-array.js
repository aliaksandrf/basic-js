const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if(!Array.isArray(arr)) {
    throw Error('\'arr\' parameter must be an instance of the Array!');
  }

  let answer = [];

  let isFlag = false;
  let isDeleteNext = false;
  


  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '--double-next') {
      if(i === arr.length - 1) break;
      answer.push(arr[i + 1]);
      isFlag = false;
      isDeleteNext = false;
    } else if(arr[i] === '--double-prev') {
      if(i === 0 || isDeleteNext === true) continue;
      answer.push(arr[i - 1]);
      isFlag = false;
      isDeleteNext = false;
    } else if(arr[i] === '--discard-next') {
      if(i === arr.length - 1) break;
      i++;
      isFlag = true;
      isDeleteNext = true;
    } else if(arr[i] === '--discard-prev') {
      if(i === 0 || isFlag === true) {
        isFlag = false;
        isDeleteNext = false;
        continue;
      }
      answer.pop();
    } else {
      answer.push(arr[i]);
      isFlag = false;
      isDeleteNext === false;
    }
  }

  console.log(answer);

  return answer;





  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
