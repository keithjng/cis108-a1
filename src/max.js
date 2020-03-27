/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  // This is your job. :)
  // Don't use the built-in Math.max
  let largest = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest
  }

if (require.main === module) {
  console.log('Running sanity checks for max:');
  console.log(max([1, 2, 3, 4, 5]) === 5);
  console.log(max([-1, -2, -3, -4, -5]) === -1);
  console.log(max([-5, -3, -1, 1, 3, 5]) === 5);
  console.log(max([7, 4, 1, -2]) === 7);
  console.log(max([0, 5, 10, -5, -10]) === 10);
  console.log(max([3, 4, 0, 6, 1]) === 6);
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = max;
