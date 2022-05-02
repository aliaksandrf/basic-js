const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    let object = this;
    let depthArray = 0; 
    

    if (Array.isArray(arr) && arr.length === 0) return 1;

    if (Array.isArray(arr)) {
      depthArray += (1 + Math.max(...arr.map((item) => object.calculateDepth(item))));
    }
    
    return depthArray;






    





    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
