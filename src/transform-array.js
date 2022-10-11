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
  if (!Array.isArray(arr)) return `'arr' parameter must be an instance of the Array!`;
  let res = arr;
  for (let i = 0; i < arr.length; i++) {
    if (res[i] === '--discard-next') res.splice(i, 2);
    if (res[i] === '--discard-prev') {
      res.splice(i-1, 1);
      res.splice(i, 1);
    }
    if (res[i] === '--double-next') res.splice(i, 1);
    if (res[i] === '--double-prev') res.splice(i, 1);
  }
  return res;
}

module.exports = {
  transform
};
