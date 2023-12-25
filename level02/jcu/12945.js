// 피보나치 수

function solution(n) {
  const Fibonacci = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    Fibonacci[i] = (Fibonacci[i - 1] + Fibonacci[i - 2]) % 1234567;
  }

  return Fibonacci[n];
}
