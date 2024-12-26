const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  #depth = 0;
  #maxDepth = 0;

  calculateDepth(arr) {
    if (!this.#depth) {
      this.#maxDepth = 0;
    }
    this.#depth += 1;
    this.#maxDepth = Math.max(this.#depth, this.#maxDepth);

    arr.forEach((v) => {
      if (Array.isArray(v)) {
        this.calculateDepth(v);
      }
    });
    this.#depth -= 1;

    return this.#maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
