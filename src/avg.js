let sum = require('./sum');

/**
 * Returns the average of the numbers in the input array.
 *
 * Use your own sum function, required above. Assume that
 * the input array is non-empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The average
 */
function avg(array) {
  let total = sum(array);
  let count = 0;
  // This is your job. :)
  // Use the sum function you wrote rather than re-implementing
  // it in this file. We required it above.
  for (let i = 0; i < array.length; i++) {
    count = i + 1;
  }
  return total / count
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log(avg([1, 2, 3, 4, 5]) === 3);
  console.log(avg([-1, -2, -3, -4, -5]) === -3);
  console.log(avg([-5, -3, -1, 1, 3, 5]) === 0);
  console.log(avg([7, 4, 1, -2]) === 2.5);
  console.log(avg([0, 5, 10, -5, -10]) === 0);
  console.log(avg([3, 4, 0, 6, 2]) === 3);
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avg;
