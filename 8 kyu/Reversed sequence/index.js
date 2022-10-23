/*
  Title:
    Reversed sequence
  Description:
    Get the number n to return the reversed sequence from n to 1.
  Examples:
    n=5 >> [5,4,3,2,1]
  Kata Link:
    https://www.codewars.com/kata/reversed-sequence
  Discuss Link:
    https://www.codewars.com/kata/reversed-sequence/discuss
  Solutions Link:
    https://www.codewars.com/kata/reversed-sequence/solutions
*/

// Solution
const reverseSeq = (n) => {
  const results = [];
  for (i = n; i > 0; i--) {
    results.push(i);
  }
  return results;
};

// Best Practices
// const reverseSeq = (n) => {
//   let arr = [];
//   for (let i = n; i > 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// };
