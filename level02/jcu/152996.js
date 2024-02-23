// 시소 짝꿍

function solution(weights) {
  const weightsObj = weights.reduce(
    (acc, cur) => (!acc[cur] ? (acc[cur] = 1) : (acc[cur] += 1), acc),
    {}
  );

  return Object.keys(weightsObj).reduce((count, weight) => {
    const weightCount = weightsObj[weight];

    count += Math.floor((weightCount * (weightCount - 1)) / 2);
    count += weightCount * (weightsObj[(weight * 3) / 2] || 0);
    count += weightCount * (weightsObj[weight * 2] || 0);
    count += weightCount * (weightsObj[(weight * 4) / 3] || 0);

    return count;
  }, 0);
}
