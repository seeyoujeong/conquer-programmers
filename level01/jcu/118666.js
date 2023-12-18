// 성격 유형 검사하기

function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const typesScores = types.reduce((acc, cur) => {
    const [type1, type2] = [...cur];
    acc[type1] = 0;
    acc[type2] = 0;

    return acc;
  }, {});

  for (let i = 0; i < survey.length; i += 1) {
    const [type1, type2] = [...survey[i]];
    const score = choices[i];

    typesScores[score > 4 ? type2 : type1] += Math.abs(score - 4);
  }

  return types.reduce((acc, cur) => {
    const [type1, type2] = [...cur];
    acc += typesScores[type1] >= typesScores[type2] ? type1 : type2;

    return acc;
  }, "");
}
