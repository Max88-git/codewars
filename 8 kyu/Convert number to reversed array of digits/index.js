/*
  Title:
    Convert number to reversed array of digits
  Description:
    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
  Examples:
    35231 => [1,3,2,5,3]
    0 => [0]
  Kata Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits
  Discuss Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/discuss
  Solutions Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/solutions
*/

// Solution
function digitize(n) {
  let str = String(n);
  return str.split("").map(Number).reverse();
}

//Best Practices
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
