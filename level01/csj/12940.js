// 최대공약수와 최소공배수

const getGCD = (x, y) => (x % y ? getGCD(y, x % y) : y);

function solution(n, m) {
  return [getGCD(n, m), (n * m) / getGCD(n, m)];
}
