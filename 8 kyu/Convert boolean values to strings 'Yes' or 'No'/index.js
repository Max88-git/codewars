/*
  Title:
    Convert boolean values to strings 'Yes' or 'No'
  Description:
    Complete the bool_to_word (PHP: boolToWord ) method.
    Given a boolean value return a 'Yes' string for true and a 'No' string for false
  Kata Link:
    https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no
  Discuss Link:
    https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/discuss
  Solutions Link:
    https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/solutions
*/

// Solution
function boolToWord(bool) {
  const str = bool === true ? "Yes" : "No";
  return str;
}

// Best Practices
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
