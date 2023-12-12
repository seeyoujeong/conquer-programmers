// 과일 장수

function solution(k, m, score) {
  const scoreMap = score.reduce((acc, cur) => {
    if (!(cur in acc)) acc[cur] = 0;
    acc[cur] += 1;
    return acc;
  }, {});

  let res = 0;
  return Object.entries(scoreMap)
    .sort((a, b) => b[0] - a[0])
    .reduce((acc, [score, count]) => {
      acc += score * Math.floor((count + res) / m) * m;
      res = (count + res) % m;
      return acc;
    }, 0);
}
