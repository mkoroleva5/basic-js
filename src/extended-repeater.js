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
  let arr = [];
  while (options.repeatTimes > 0) {
    arr.push(str);
    if (options.repeatTimes > 1) {
      if (!options.separator) arr.push('+');
      else arr.push(options.separator);
    }
    while (options.additionRepeatTimes > 0) {
      arr.push(options.addition);
      if (options.additionRepeatTimes > 0) { 
        if (!options.additionSeparator) arr.push('|')
        else arr.push(options.additionSeparator);
      }
      options.additionRepeatTimes--;
    }
    options.repeatTimes--;
  }
  return arr.join('');
}

module.exports = {
  repeater
};
