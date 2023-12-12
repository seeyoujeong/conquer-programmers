// 콜라 문제

function solution(a, b, n) {
  let totalCount = 0;

  while (n >= a) {
    const receivedCount = parseInt(n / a, 10) * b;
    totalCount += receivedCount;
    n = receivedCount + (n % a);
  }

  return totalCount;
}
