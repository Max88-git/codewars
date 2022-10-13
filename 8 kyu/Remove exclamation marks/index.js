/*
  Title:
    Remove exclamation marks
  Description:
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
  Kata Link:
    https://www.codewars.com/kata/remove-exclamation-marks
  Discuss Link:
    https://www.codewars.com/kata/remove-exclamation-marks/discuss
  Solutions Link:
    https://www.codewars.com/kata/remove-exclamation-marks/solutions
*/

// Solution
function removeExclamationMarks(s) {
  return s.replace(/\!/g, "");
}

//Best Practices
const removeExclamationMarks = (s) => s.replace(/!/g, "");
