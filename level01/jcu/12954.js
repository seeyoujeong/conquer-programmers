// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  return Array.from({ length: n }).map((_, idx) => x * (idx + 1));
}
