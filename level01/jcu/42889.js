// 실패율

function solution(N, stages) {
  let reached = stages.length;
  const stageCount = Array(N + 1).fill(0);

  stages.forEach((stage) => (stageCount[stage] += 1));

  return Array.from({ length: N }, (_, i) => {
    const currentReached = reached;
    const notClear = stageCount[i + 1];
    reached -= notClear;

    return [i + 1, notClear / currentReached];
  })
    .sort((a, b) => b[1] - a[1])
    .map(([stage]) => stage);
}
