/*
  Title:
    Remove String Spaces
  Description:
    Simple, remove the spaces from the string, then return the resultant string.
  Kata Link:
    https://www.codewars.com/kata/remove-string-spaces
  Discuss Link:
    https://www.codewars.com/kata/remove-string-spaces/discuss
  Solutions Link:
    https://www.codewars.com/kata/remove-string-spaces/solutions
*/

// Solution
function noSpace(x) {
  return x.split(" ").join("");
}

//Best Practices
function noSpace(x) {
  return x.replace(/\s/g, "");
}
