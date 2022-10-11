/*
  Title:
    Beginner - Lost Without a Map
  Description:
    Given and array of integers (x), return the array with each value doubled.
    For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
  Examples:
    [1, 2, 3] --> [2, 4, 6]
  Kata Link:
    https://www.codewars.com/kata/beginner-lost-without-a-map
  Discuss Link:
    https://www.codewars.com/kata/beginner-lost-without-a-map/discuss
  Solutions Link:
    https://www.codewars.com/kata/beginner-lost-without-a-map/solutions
*/

// Solution
function maps(x) {
  return x.map((v) => v * 2);
}

//Best Practices
const maps = (x) => x.map((number) => number * 2);
