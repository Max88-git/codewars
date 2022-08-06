/*
  Title:
    Even or Odd
  Description:
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
  Kata Link:
    https://www.codewars.com/kata/even-or-odd
  Discuss Link:
    https://www.codewars.com/kata/even-or-odd/discuss
  Solutions Link:
    https://www.codewars.com/kata/even-or-odd/solutions
*/

// Solution
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Best Practices
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
