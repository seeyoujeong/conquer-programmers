// 모의고사

function solution(answers) {
  const spjAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const spjResult = spjAnswers.map(
    (spjAnswer) =>
      answers.filter(
        (answer, idx) => answer === spjAnswer[idx % spjAnswer.length]
      ).length
  );

  const topRate = Math.max(...spjResult);

  return spjResult.reduce(
    (acc, cur, idx) => (cur === topRate && acc.push(idx + 1), acc),
    []
  );
}
