const getNamesSortedByFriendsCount = users => {
  const sortUsers = users.sort((userA, userB) => userA.friends.length - userB.friends.length)
  const names = sortUsers.map(user => user.name)

  return names;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]