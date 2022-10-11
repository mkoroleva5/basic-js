const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    if (typeof value !== 'undefined') {
      this.value.push(`( ${value} )`);
    } else this.value.push('( )');
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' &&
        position <= this.value.length &&
        position % 1 === 0 &&
        position >= 1) {
          this.value.splice(position - 1, 1);
          return this;
    } else {
      this.value = [];
      throw new Error("You can't remove incorrect link!");
    }
    
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    let res = this.value.join('~~');
    this.value = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
