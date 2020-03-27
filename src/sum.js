/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  total = 0;
  // This is your job. :)
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([]) === 0);
  console.log(sum([1, 2, 3, 4, 5]) === 15);
  console.log(sum([-1, -2, -3, -4, -5]) === -15);
  console.log(sum([-5, -3, -1, 1, 3, 5]) === 0);
  console.log(sum([7, 4, 1, -2]) === 10);
  console.log(sum([0, 5, 10, -5, -10]) === 0);
  console.log(sum([3, 4, 0, 6, 1]) === 14);
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
