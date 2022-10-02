/*
  Title:
    Beginner - Reduce but Grow
  Description:
    Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
    
    For the beginner, try to use the reduce method - it comes in very handy quite a lot so is a good one to know.
    Array will not be empty.
  Kata Link:
    https://www.codewars.com/kata/beginner-reduce-but-grow
  Discuss Link:
    https://www.codewars.com/kata/beginner-reduce-but-grow/discuss
  Solutions Link:
    https://www.codewars.com/kata/beginner-reduce-but-grow/solutions
*/

// Solution
function grow(x) {
  return x.reduce((a, b) => a * b);
}

//Best Practices
const grow = (x) => x.reduce((a, b) => a * b);
