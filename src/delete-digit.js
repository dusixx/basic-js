const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = [...`${n}`];

  const numbers = digits.reduce((res, _, i) => {
    const d = [...digits];
    d.splice(i, 1);
    res.push(d.join(''));

    return res;
  }, []);

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
