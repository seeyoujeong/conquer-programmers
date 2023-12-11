// 최대공약수와 최소공배수

function solution(n, m) {
  const gcdResult = gcd(n, m);

  return [gcdResult, (n * m) / gcdResult];
}

function gcd(a, b) {
  let r;

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return b;
}
