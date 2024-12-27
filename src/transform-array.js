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
  if (!Array.isArray(arr)) {
    throw TypeError("'arr' parameter must be an instance of the Array!");
  }
  const res = [...arr];

  for (let i = 0; i < res.length; i += 1) {
    switch (res[i]) {
      case '--discard-prev':
        res[i] = res[i - 1] = null;
        break;

      case '--discard-next':
        res[i] = res[i + 1] = null;
        i += 1;
        break;

      case '--double-prev':
        res[i] = res[i - 1];
        break;

      case '--double-next':
        res[i] = res[i + 1];
        i += 1;
    }
  }

  return res.filter((el) => el != null);
}

module.exports = {
  transform,
};
