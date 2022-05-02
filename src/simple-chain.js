const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainString: "",


  getLength() {
    throw new NotImplementedError('Not implemented');
    return this.chainString.split("~~").length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');

    if(value === undefined) {
      this.chainString = this.chainString + "( )~~";
    }

    this.chainString = this.chainString + value  + "~~";


    //    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    if(!Number.isInteger(position) || position > this.getLength() || position <= 0) {
      finishChain();
      throw new Error(`You can't remove incorrect link!`);
    }
    
    
    
    
    
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    this.chainString = this.chainString.split('~~').reverse().join("~~");



    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    let temp = this.chainString;
    this.chainString = "";
    return temp;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
