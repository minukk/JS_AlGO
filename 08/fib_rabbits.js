function fib_rabbits(n, b) {
  // your code here
  const result = [0, 1];
  const immature = [1, 0];

  for (let i = 2; i <= n; ++i) {
    immature.push(result[i - 1] * b);
    result.push(immature[i - 1] + result[i - 1]);
  }

  return result[n];
}

fib_rabbits(5, 3);