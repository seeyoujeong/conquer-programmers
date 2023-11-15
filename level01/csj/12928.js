// 약수의 합

function solution(n) {
  const numbers = Array.from({ length: n + 1 }, (_, num) => num);
  return numbers.reduce(
    (sum, num) => (n % num === 0 ? sum + num : sum),
    0
  );
}
