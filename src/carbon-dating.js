const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const isValidActivity = (v) =>
  typeof v === 'string' &&
  !Number.isNaN(parseFloat(v)) &&
  v <= MODERN_ACTIVITY &&
  v > 0;

function dateSample(sampleActivity) {
  if (!isValidActivity(sampleActivity)) {
    return false;
  }
  const age =
    (Math.log(sampleActivity / MODERN_ACTIVITY) / -Math.log(2)) *
    HALF_LIFE_PERIOD;

  return Math.ceil(age);
}

module.exports = {
  dateSample,
};
