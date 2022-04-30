const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.log('asdf')
  console.log(matrix);
  let longI = matrix.length;
  let longJ = matrix[0].length;

  let answer = [];

  for (let i = 0; i < longI; i++) {
    let answerLine = [];
    for (let j = 0; j < longJ; j++) {
      let number = 0;
      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i-1][j-1] === true) number++;
      if (j - 1 >= 0 && matrix[i][j-1] === true) number++;
      if (i + 1 < longI && j - 1 >= 0 && matrix[i+1][j-1] === true) number++;
      if (i - 1 >= 0 && matrix[i-1][j] === true) number++;
      if (i + 1 < longI && matrix[i+1][j] === true) number++;
      if (i - 1 >= 0 && j + 1 < longJ && matrix[i-1][j+1] === true) number++;
      if (j + 1 < longI && matrix[i][j+1] === true) number++;
      if (i + 1 < longI && j + 1 < longJ && matrix[i+1][j+1] === true) number++;
      answerLine.push(number);
      console.log(""+ i + j + number);
    }
    answer.push(answerLine);
  }
  return answer;








/*   let long = matrix.length;
  let answer = [];
  for (let i = 0; i < long; i++) {
    
    for (let j = 0; j < long; j ++) {
      let number = 0;
      if(j -1 >= 0 && matrix[i][j - 1] === true) number ++;
      if(j + 1 < long && matrix[i][j - 1] === true) number ++;
      if(i - 1 >= 0 && j - 1 >= 0 && matrix[i-1][j-1] === true) number++;
      if(i - 1 >= 0 && matrix[i-1][j] === true) number++;
      if(i - 1 >= 0 && j + 1 < long && matrix[i-1][j+1] === true) number++;
      if(i + 1 < long && j - 1 >= 0 && matrix[i+1][j-1] === true) number++;
      if(i + 1 < long && matrix[i+1][j] === true) number++;
      if(i + 1 < long && j + 1 < long && matrix[i+1][j+1] === true) number++;
      answer[i][j] = number;

    }
  }

  return answer; */
  
  
  
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
