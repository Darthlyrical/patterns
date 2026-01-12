/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}


/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *
 * @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */
export function makeTriangle(size) {
  if (typeof size !== 'number') return null; // handles the type assertion
  if (size <= 0) return []; // handles the 0 or negative number assertion 
  const triangle = [] // the array we are accumulating to return 
  for (let i = 0; i < size; i++){ // loop for building the array. as long as i is less than the number provided, do the following then add 1 to i and repeat. 
    const row = Array(i + 1).fill('-'); // made a variable to contain each array that will be added to the triangle array.
    //Array method is being used to create an array based on the param fed through it. 
    // If only one param is provided (ex i + 1), then it creates an array with each index undefined.
    // example: Array(3) would create [undefined,undefined,undefined]. 
    //.fill method instructs what to fill the undefined spaces with. using the same example as above, if I append .fill('-') then the array is now ['-','-','-']
    triangle.push(row); // this then takes the array called 'row' and pushes it to the empty triangle array until the loop concludes. 

  }
  return triangle
  // TODO
}


/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 */
export function countLetter(words, letter) {
  if(typeof letter !== 'string') return 0; // handles the type assertion for letter
  const combinedStr = words.join(''); // combined all the words into one long string
  const combinedArr = combinedStr.split('');// broke that now combined string into an array filled with every letter as an individual index point

  // used reduce to iterate through combinedArr[]. This is going to check every letter(or index of the array). I set the starting value to 0.
  return combinedArr.reduce((total,currentLetter) => {

    //used ternary since there is only one condition. currentLetter === letter is the condition. if true(?) add 1 to the total(accumulator). 
    // if false(:) total stays the same for the iteration. 
    return currentLetter === letter ? total + 1 : total;
  },0)
}
