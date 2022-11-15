/*
  Title:
    Vowel remover
  Description:
    Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
  Examples:
    "hello"     -->  "hll"
    "codewars"  -->  "cdwrs"
    "goodbye"   -->  "gdby"
    "HELLO"     -->  "HELLO"
  Notes:
    Don't worry about uppercase vowels.
    y is not considered a vowel for this kata
  Kata Link:
    https://www.codewars.com/kata/vowel-remover
  Discuss Link:
    https://www.codewars.com/kata/vowel-remover/discuss
  Solutions Link:
    https://www.codewars.com/kata/vowel-remover/solutions
*/

// Solution
function shortcut(string) {
  return string.replace(/[aeiou]/gi, "");
}

// Best Practices
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
