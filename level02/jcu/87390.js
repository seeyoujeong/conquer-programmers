// n^2 배열 자르기

function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; i += 1) {
    arr.push(Math.max(Math.floor(i / n), i % n) + 1);
  }

  return arr;
}
