// 귤 고르기

function solution(k, tangerine) {
  const tangerineObj = tangerine.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;

    return acc;
  }, {});

  let sumOfWeight = 0;
  let count = 0;

  for (const weight of Object.values(tangerineObj).sort((a, b) => b - a)) {
    sumOfWeight += weight;
    count += 1;

    if (sumOfWeight >= k) {
      break;
    }
  }

  return count;
}
