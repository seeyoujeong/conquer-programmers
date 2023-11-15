// 정수 제곱근 판별

function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1;
}
