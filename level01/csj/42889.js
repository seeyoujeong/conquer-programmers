// 실패율

function solution(N, stages) {
  const stageCounts = Array(N + 1).fill(0);
  stages.forEach((stage) => stageCounts[stage - 1]++);

  let totalChallenged = stages.length;

  const fail = Array.from({ length: N }, (_, i) => {
    const challenged = totalChallenged;
    const failed = stageCounts[i];
    totalChallenged -= failed;

    return failed / challenged;
  });

  return Array.from({ length: N }, (_, i) => i + 1).sort(
    (a, b) => fail[b - 1] - fail[a - 1]
  );
}
