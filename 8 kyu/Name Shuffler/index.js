/*
  Title:
    Name Shuffler
  Description:
    Write a function that returns a string in which firstname is swapped with last name.
  Examples:
    nameShuffler('john McClane'); => "McClane john"
  Kata Link:
    https://www.codewars.com/kata/name-shuffler
  Discuss Link:
    https://www.codewars.com/kata/name-shuffler/discuss
  Solutions Link:
    https://www.codewars.com/kata/name-shuffler/solutions
*/

// Solution
function nameShuffler(str) {
  const fullName = str.split(" ");
  return [fullName[1], fullName[0]].join(" ");
}

// Best Practices
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
