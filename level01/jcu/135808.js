// 과일 장수

function solution(k, m, score) {
  return score
    .sort((a, b) => b - a)
    .filter((num, idx) => (idx + 1) % m === 0)
    .reduce((acc, cur) => acc + cur * m, 0);
}
