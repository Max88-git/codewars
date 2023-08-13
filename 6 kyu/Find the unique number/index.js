/*
  Title:
    Find the unique number

  Description:
    There is an array with some numbers. All numbers are equal except for one. Try to find it!

    It’s guaranteed that array contains more than 3 numbers.

  Examples:
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

  Notes:
    The tests contain some very huge arrays, so think about performance.

  Kata Link:
    https://www.codewars.com/kata/find-the-unique-number-1

  Discuss Link:
    https://www.codewars.com/kata/find-the-unique-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-unique-number-1/solutions
*/

// Solution
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

// Best practices
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }
