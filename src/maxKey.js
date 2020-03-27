/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  // This is your job. :)
  let biggest = Object.values(obj)[0];
  let index = 0;
  for (let i = 0; i < Object.values(obj).length; i++) {
    if (biggest < Object.values(obj)[i]) {
      biggest = Object.values(obj)[i];
      index = i;
    }
  }
  return Object.keys(obj)[index];
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log(maxKey({a: 1, b: 2, c: 3, d: 4, e: 5}) === 'e');
  console.log(maxKey({a: -1, b: -2, c: -3, d: -4, e: -5}) === 'a');
  console.log(maxKey({a: -5, b: -3, c: -1, d: 1, e: 3, f: 5}) === 'f');
  console.log(maxKey({a: 7, b: 4, c: 1, d: -2}) === 'a');
  console.log(maxKey({a: 0, b: 5, c: 10, d: -5, e: -10}) === 'c');
  console.log(maxKey({d: 3, e: 4, o: 0, p: 6, q: 2}) === 'p');
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
