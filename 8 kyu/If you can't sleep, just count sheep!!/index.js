/*
  Title:
    If you can't sleep, just count sheep!!
  Description:
    Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."
  Notes:
    You will always receive a positive integer.
  Kata Link:
    https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep
  Discuss Link:
    https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/discuss
  Solutions Link:
    https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/solutions
*/

// Solution
var countSheep = function (num) {
  let sheepString = "";
  for (let i = 1; i <= num; i++) {
    sheepString += i.toString() + " sheep...";
  }
  return sheepString;
};

//Best Practices
// var countSheep = function (num) {
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     str += `${i} sheep...`;
//   }
//   return str;
// };
