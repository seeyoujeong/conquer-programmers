// 약수의 합

function solution(n) {
  return Array.from({ length: n })
    .map((_, idx) => idx + 1)
    .filter((num) => n % num === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
