/*
  Title:
    Is it even?
  Description:
    In this Kata we are passing a number (n) into a function.
    Your code will determine if the number passed is even (or not).
    The function needs to return either a true or false.
    Numbers may be positive or negative, integers or floats.
    Floats are considered UNeven for this kata.
  Kata Link:
    https://www.codewars.com/kata/is-it-even
  Discuss Link:
    https://www.codewars.com/kata/is-it-even/discuss
  Solutions Link:
    https://www.codewars.com/kata/is-it-even/solutions
*/

// Solution
function testEven(n) {
  if (n % 2 == 0) return true;
  else return false;
}

// Best Practices
function testEven(n) {
  return n % 2 === 0;
}
