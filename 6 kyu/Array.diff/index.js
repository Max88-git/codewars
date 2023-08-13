/*
 Title:
    Array.diff

  Description:
    Your goal in this kata is to implement an difference function, which subtracts one list from another.

    It should remove all values from list a, which are present in list b.

  Examples:
    array_diff([1, 2],[1]) == [2]
    array_diff([1, 2, 2, 2, 3],[2]) == [1, 3]

  Kata Link:
    https://www.codewars.com/kata/array-dot-diff

  Discuss Link:
    https://www.codewars.com/kata/array-dot-diff/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-dot-diff/solutions
*/

// Solution
function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

// Best Practices
// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }
