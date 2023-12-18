// 성격 유형 검사하기

function solution(survey, choices) {
  const scores = { RT: 0, CF: 0, JM: 0, AN: 0 };

  survey.forEach((type, i) => {
    const score = choices[i] - 4;
    if (type in scores) {
      scores[type] += score;
    } else {
      scores[[...type].reverse().join('')] -= score;
    }
  });

  return Object.keys(scores).reduce(
    (result, type) => result + (scores[type] > 0 ? type[1] : type[0]),
    ''
  );
}
