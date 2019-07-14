let reverseNumber = n => {
  let balance;
  let result = 0;

  while (n !== 0) {
    balance = n % 10;
    result = result * 10 + balance;
    n = parseInt(n / 10);
  }

  return result;
}

reverseNumber(-437);
