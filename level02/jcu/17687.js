// [3차] n진수 게임

function solution(n, t, m, p) {
  return Array(t * m)
    .fill(0)
    .flatMap((_, idx) => [...idx.toString(n).toUpperCase()])
    .reduce((acc, cur, idx) => (idx % m === p - 1 && (acc += cur), acc), "")
    .slice(0, t);
}
