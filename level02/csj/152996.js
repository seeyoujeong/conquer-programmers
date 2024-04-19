// 시소 짝꿍

function solution(weights) {
  const counts = {};

  for (const weight of weights) {
    if (!(weight in counts)) counts[weight] = 0;
    counts[weight] += 1;
  }

  let mateCount = 0;

  const uniqueWeights = Object.keys(counts).sort((a, b) => a - b);
  const n = uniqueWeights.length;

  for (let i = 0; i < n; i++) {
    const w1 = uniqueWeights[i];
    const count1 = counts[w1];

    mateCount += (count1 * (count1 - 1)) / 2;

    for (let j = i + 1; j < n; j++) {
      const w2 = uniqueWeights[j];
      const count2 = counts[w2];

      if (3 * w1 === 2 * w2 || 4 * w1 === 3 * w2 || 4 * w1 === 2 * w2) {
        mateCount += count1 * count2;
      }
    }
  }

  return mateCount;
}
