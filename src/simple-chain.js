const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],


  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.chain.length;
  },

  addLink(value = '  ') {
    //throw new NotImplementedError('Not implemented');
    this.chain.push(`( ${String(value)} )`);
    return this;
  },

  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if (position <=0 || position > this.getLength() || !Number(position) || !Number.isInteger(position)) {
      this.chain = [];
      throw Error(`You can't remove incorrect link!`);
    }
    this.chain = this.chain.filter((item, index) => index + 1 !== position);
    return this;
  },

  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }

};

module.exports = {
  chainMaker
};
