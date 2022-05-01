const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainString: "",


  getLength() {
    return this.chainString.split("~~").length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {

    if(value === undefined) {
      this.chainString = this.chainString + "( )~~";
    }

    this.chainString = this.chainString + value  + "~~";


    //    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position > this.getLength() || position <= 0) {
      finishChain();
      throw new Error(`You can't remove incorrect link!`);
    }
    
    
    
    
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chainString = this.chainString.split('~~').reverse().join("~~");



    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
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
