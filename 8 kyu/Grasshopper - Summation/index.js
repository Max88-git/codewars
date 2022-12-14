/*
  Title:
    Grasshopper - Summation
  Description:
    Write a program that finds the summation of every number between 1 and num.
    The number will always be a positive integer greater than 0.
  Examples:
    summation(2) -> 3
    1 + 2
    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
  Kata Link:
    https://www.codewars.com/kata/grasshopper-summation
  Discuss Link:
    https://www.codewars.com/kata/grasshopper-summation/discuss
  Solutions Link:
    https://www.codewars.com/kata/grasshopper-summation/solutions
*/

// Solution
var summation = function (num) {
  // Code here
  var total = 0;
  for (var i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

// Best Practices
// Same as my solution
