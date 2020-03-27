/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */
function smallestPrimeFactor(num) {
  // This is your job. :)
  let primeFactor = 1
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      primeFactor = i
    }
  }
  if (primeFactor === 1) {
    return num
  }
  else {
    return primeFactor
  }
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactor(1) === 1);
  console.log(smallestPrimeFactor(2) === 2);
  console.log(smallestPrimeFactor(3) === 3);
  console.log(smallestPrimeFactor(4) === 2);
  console.log(smallestPrimeFactor(15) === 3);
  console.log(smallestPrimeFactor(21) === 3);
  console.log(smallestPrimeFactor(75) === 3);
  console.log(smallestPrimeFactor(91) === 7);
  console.log(smallestPrimeFactor(121) === 11);
  console.log(smallestPrimeFactor(336) === 2);
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = smallestPrimeFactor;
