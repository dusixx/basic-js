const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map = {};

  for (let ch of s1) {
    map[ch] = (map[ch] ?? 0) + 1;
  }
  return [...s2].reduce((res, ch) => {
    if (map[ch]) {
      map[ch] -= 1;
      res += 1;
    }
    return res;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
