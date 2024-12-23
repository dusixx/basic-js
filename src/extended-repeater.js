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
const repeat = (str = '', times = 1, sep = '') =>
  Array.from({ length: times }).fill(String(str)).join(sep);

function repeater(str, options) {
  const {
    repeatTimes: count,
    separator: sep = '+',
    addition: substr,
    additionRepeatTimes: substrCount,
    additionSeparator: substrSep = '|',
  } = options ?? {};

  return repeat(`${str}${repeat(substr, substrCount, substrSep)}`, count, sep);
}

module.exports = {
  repeater,
};
