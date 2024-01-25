// 2 x n 타일링

function solution(n) {
  if (n === 1) {
    return n;
  }

  const DIVIDE_NUMBER = 1_000_000_007;
  let count = 0;
  let [a, b] = [1, 1];

  for (let i = 2; i <= n; i += 1) {
    count = (a + b) % DIVIDE_NUMBER;
    [a, b] = [b % DIVIDE_NUMBER, count];
  }

  return count;
}
