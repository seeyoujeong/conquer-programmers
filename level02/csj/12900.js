// 2 x n 타일링

function solution(n) {
  if (n <= 2) return n;
  const divider = 1000000007;

  let prev = 1;
  let cur = 2;
  for (let i = 3; i <= n; i++) {
    [prev, cur] = [cur, (prev + cur) % divider];
  }
  return cur % divider;
}
