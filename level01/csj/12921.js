// 소수 찾기

function solution(n) {
  const isPrime = Array(n + 1).fill(true);
  let answer = n - 1;

  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (!isPrime[i]) continue;

    for (let j = i; i * j <= n; j++) {
      if (isPrime[i * j]) answer -= 1;
      isPrime[i * j] = false;
    }
  }
  return answer;
}
