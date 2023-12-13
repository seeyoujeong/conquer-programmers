// [1차] 다트 게임

function solution(dartResult) {
  const scoreList = [];
  let score = 0;
  const bonus = {
    S: 1,
    D: 2,
    T: 3,
  };
  const option = {
    "#": -1,
    "*": 2,
  };

  for (const current of dartResult) {
    if (Number(current)) {
      score += Number(current);
    }

    if (current === "0") {
      score *= 10;
    }

    if (current === "S" || current === "D" || current === "T") {
      score = score ** bonus[current];
      scoreList.push(score);
      score = 0;
    }

    if (current === "#" || current === "*") {
      scoreList[scoreList.length - 1] *= option[current];

      if (current === "*") {
        scoreList[scoreList.length - 2] *= option[current];
      }
    }
  }

  return scoreList.reduce((acc, cur) => acc + cur, 0);
}
