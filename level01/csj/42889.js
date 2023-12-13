// 실패율

function solution(N, stages) {
  const fail = Array.from(
    { length: N },
    (_, i) =>
      stages.filter((stage) => stage === i + 1).length /
      stages.filter((stage) => stage > i).length
  );
  return Array.from({ length: N }, (_, i) => i + 1).sort(
    (a, b) => fail[b - 1] - fail[a - 1]
  );
}
