/*
  Title:
    Friend or Foe?

  Description:
    Make a program that filters a list of strings and returns a list with only your friends name in it.

    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

  Examples:
    Input = ["Ryan", "Kieran", "Jason", "Yous"]
    Output = ["Ryan", "Yous"]

  Notes:
    Keep the original order of the names in the output.

  Kata Link:
    https://www.codewars.com/kata/friend-or-foe

  Discuss Link:
    https://www.codewars.com/kata/friend-or-foe/discuss

  Solutions Link:
    https://www.codewars.com/kata/friend-or-foe/solutions
*/

// Solution
function friend(friends) {
  const friendList = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      friendList.push(friends[i]);
    }
  }

  return friendList;
}

// Best Practices
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
