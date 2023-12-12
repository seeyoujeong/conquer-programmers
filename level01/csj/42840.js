// 모의고사

function solution(answers) {
  const scores = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ].map(
    (pattern) =>
      answers.filter(
        (answer, i) => answer === pattern[i % pattern.length]
      ).length
  );
  const maxScore = Math.max(...scores);
  return scores
    .map((score, i) => (score === maxScore ? i + 1 : false))
    .filter(Boolean);
}
