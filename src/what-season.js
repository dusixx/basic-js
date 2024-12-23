const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  if (Number.isNaN(Date.parse(date)) || date[Symbol.toStringTag] === 'Date') {
    throw TypeError('Invalid date!');
  }

  const month = date.getMonth();
  const season = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };

  for (let [name, nums] of Object.entries(season)) {
    if (nums.includes(month)) {
      return name;
    }
  }
}

module.exports = {
  getSeason,
};
