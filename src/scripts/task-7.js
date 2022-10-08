const calculateTotalBalance = users => {
  return users.reduce((prev, curr) => prev + curr.balance, 0)
};

console.log(calculateTotalBalance(users)); // 20916