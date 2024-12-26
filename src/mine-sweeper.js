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
  const mines = {};
  const setup = matrix.map((row, i) =>
    row.map((b, j) => (mines[[i, j]] = Number(b)))
  );
  const setNeighbors = (i, j) => {
    for (let n = 0, x = i - 1; n < 3; n += 1, x += 1) {
      for (let m = 0, y = j - 1; m < 3; m += 1, y += 1) {
        if (mines[[x, y]] === 0) {
          setup[x][y] += 1;
        }
      }
    }
  };
  return matrix.reduce((res, row, i) => {
    row.forEach((b, j) => b && setNeighbors(i, j));
    return res;
  }, setup);
}

module.exports = {
  minesweeper,
};
