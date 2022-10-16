/*
  Title:
    Quarter of the year
  Description:
    Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

    For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
  Kata Link:
    https://www.codewars.com/kata/quarter-of-the-year
  Discuss Link:
    https://www.codewars.com/kata/quarter-of-the-year
  Solutions Link:
    https://www.codewars.com/kata/quarter-of-the-year
*/

// Solution
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

//Best Practices
const quarterOf = (m) => Math.ceil(m / 3);
