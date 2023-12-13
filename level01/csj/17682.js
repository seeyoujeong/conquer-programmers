// [1차] 다트 게임

function solution(dartResult) {
  const score = {
    S: 1,
    D: 2,
    T: 3,
  };
  const option = {
    '*': 2,
    '#': -1,
  };

  const darts = [];

  for (const cur of dartResult) {
    if (cur in score) {
      darts.push(Number(darts.pop()) ** score[cur]);
    } else if (cur in option) {
      darts[darts.length - 1] *= option[cur];
      if (darts.length > 1 && cur === '*') {
        darts[darts.length - 2] *= option[cur];
      }
    } else {
      if (typeof darts.at(-1) === 'string') {
        darts.push(darts.pop() + cur);
      } else {
        darts.push(cur);
      }
    }
  }
  return darts.reduce((sum, dart) => sum + dart, 0);
}
