// 명예의 전당

function solution(k, score) {
  return score.map((_, i) => {
    const sortedScore = score.slice(0, i + 1).sort((a, b) => b - a);
    return i >= k ? sortedScore[k - 1] : sortedScore[i];
  });
}
