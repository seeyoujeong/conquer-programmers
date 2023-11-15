// 정수 제곱근 판별

function solution(n) {
  const sqrtNum = Math.sqrt(n);
  return Number.isInteger(sqrtNum) ? (sqrtNum + 1) ** 2 : -1;
}
