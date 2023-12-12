// 명예의 전당(1)

function solution(k, score) {
  const scoreList = [];

  return score.map((dayScore) => {
    scoreList.push(dayScore);

    scoreList.sort((a, b) => b - a);

    if (scoreList.length > k) {
      scoreList.pop();
    }

    return scoreList.at(-1);
  });
}
