/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 *  * countItems(['apple', 'goat', 'apple', 'potato']);
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array) {
  // This is your job. :)
  let counts = {};
  for (let i = 0; i < array.length; i++) {
    if (counts.hasOwnProperty(array[i]) === false) {
      counts[array[i]] = 1;
    }
    else {
      counts[array[i]] += 1;
    }
  }
  return counts;
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log(countItems(['a', 'a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'd']));
  console.log(countItems(['cup', 'mug', 'tea', 'sip', 'tea', 'mug', 'tea']));
  console.log(countItems(['apple', 'mango', 'apple', 'apple', 'grape', 'peach', 'lemon', 'peach']));
  console.log(countItems(['mario', 'luigi', 'yoshi', 'mario', 'peach', 'toad', 'luigi', 'bowser', 'toad', 'mario']));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
