/*
  Title:
    Opposite number
  Description:
    Very simple, given a number, find its opposite.
  But can you do it in 1 line of code and without any conditionals?
  Examples:
    1: -1
    14: -14
    -34: 34
  Kata Link:
    https://www.codewars.com/kata/opposite-number
  Discuss Link:
    https://www.codewars.com/kata/opposite-number/discuss
  Solutions Link:
    https://www.codewars.com/kata/opposite-number/solutions
*/

// Solution

function opposite(number) {
  let oppNum = 0 - number;
  return oppNum;
}

//Best Practices
function opposite(number) {
  return -number;
}
