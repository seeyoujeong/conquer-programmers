// 숫자의 표현

function solution(n) {
  let count = 0;

  for (let i = 0; 0 < n; i += 1) {
    if (n % i === 0) count += 1;

    n -= i;
  }

  return count;
}
