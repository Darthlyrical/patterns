/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== 'number') return NaN;
  else if (n < 0) return undefined;
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial
  // TODO
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== 'number') return null;
  const builtArr = []
  for (let i = 1; i <= n; i++) {
    builtArr.push(i)
  }
  return builtArr
  // TODO
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  let winner = strings[0]
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > winner.length) {
      winner = strings[i];
    }
  }
  return winner
}
// console.log(getLongestString(['hello', 'goodbye', 'yessssssssssssssssssssssss', 'nooooooooooooo', 'okay']))
/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  let presentCount = 0
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      presentCount += 1;
    }
  }
  return presentCount;

  //using .reduce
  //return attendance.reduce((count, isPresent) => count + (isPresent ? 1:0), 0)
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== 'string') return null; //handles the string assertion
  const complementObject = { // built a key:value to pass through reduce
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  return dna.split('').reduce((newStr, letter2check) => { // converts the dna string into an array with .split so we can use reduce method. 
    //newStr is the accumulator which is starting off as an empty string since I set the last param of reduce to ''.
    // letter2check is the starting position - index[0]- of the array because I did not supply an specific index to start on in the following optional param. 

    return newStr + complementObject[letter2check] // this is what I want reduce to do everytime it iterates through the array.
    //it's essentially using the object/library i created to make a new string with the values of each key that gets passed through. 
  }, '') //this is the initial value of newStr. Since I was building a string, I just assigned it to equal an empty string. 
}
