/*
  Title:
    Reversed Strings
  Description:
    Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'
  Kata Link:
    https://www.codewars.com/kata/reversed-strings
  Discuss Link:
    https://www.codewars.com/kata/reversed-strings/discuss
  Solutions Link:
    https://www.codewars.com/kata/reversed-strings/solutions
*/

// Solution
function solution(str) {
  return str.split("").reverse().join("");
}

// Best Practices
// Same as my solution
