// n^2 배열 자르기

function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => {
    const index = i + left;
    return Math.max(parseInt(index / n), index % n) + 1;
  });
}
