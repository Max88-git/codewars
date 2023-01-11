/*
  Title:
    Simple multiplication
  Description:
    This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
  Kata Link:
    https://www.codewars.com/kata/simple-multiplication
  Discuss Link:
    https://www.codewars.com/kata/simple-multiplication/discuss
  Solutions Link:
    https://www.codewars.com/kata/simple-multiplication/solutions
*/

// Solution
function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

// Best Practices
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
