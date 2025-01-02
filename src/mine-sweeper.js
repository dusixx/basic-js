const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const setup = matrix.map((row) => row.map(Number));

  const setNeighbors = (arr, i, j) => {
    for (let x = i - 1, n = x + 3; x < n; x += 1) {
      for (let y = j - 1, m = y + 3; y < m; y += 1) {
        // strict equality to ignore 'undefined' when x|y is invalid
        if (matrix[x]?.[y] === false) {
          arr[x][y] += 1;
        }
      }
    }
  };
  return matrix.reduce((res, row, i) => {
    row.forEach((b, j) => b && setNeighbors(res, i, j));
    return res;
  }, setup);
}

module.exports = {
  minesweeper,
};
