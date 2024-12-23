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
function transform(/*arr*/) {
  throw new NotImplementedError('Not implemented');

  if (!Array.isArray(arr)) {
    throw TypeError("'arr' parameter must be an instance of the Array!");
  }
  const mod = {
    doubleNext: '--double-next',
    doublePrev: '--double-prev',
    discardNext: '--discard-next',
    discardPrev: '--discard-prev',
  };
  const res = [...arr];

  res.forEach((el, i, arr) => {
    if (el === mod.discardNext) {
      arr.splice(i, 2);
    } else if (el === mod.discardPrev) {
      arr.splice(i - 1, 2);
    } else if (el === mod.doubleNext) {
      arr[i] = arr[i + 1];
    } else if (el === mod.doublePrev) {
      arr[i] = arr[i - 1];
    }
  });

  return res;
}

module.exports = {
  transform,
};
