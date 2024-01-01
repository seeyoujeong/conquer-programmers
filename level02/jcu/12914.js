// 멀리 뛰기

function solution(n) {
  if (n < 3) return n;

  let [a, b, c] = [1, 2, 3];

  for (let i = 3; i < n; i += 1) {
    [a, b] = [b, c];
    c = (a + b) % 1234567;
  }

  return c;
}
