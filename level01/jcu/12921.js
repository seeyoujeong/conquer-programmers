// 소수 찾기

function solution(n) {
  const isPrime = Array(n + 1).fill(true);
  let count = n - 1;

  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (!isPrime[i]) continue;

    for (let j = i; i * j <= n; j += 1) {
      if (isPrime[i * j]) count -= 1;
      isPrime[i * j] = false;
    }
  }

  return count;
}
