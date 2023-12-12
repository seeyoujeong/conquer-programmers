// 실패율

function solution(N, stages) {
  return Array.from({ length: N }, (_, idx) => idx + 1)
    .map((stage) => [stage, getFailureRate(stage, stages)])
    .sort((a, b) => b[1] - a[1])
    .map(([stage, _]) => stage);
}

function getNotClearedCount(stage, stages) {
  return stages.filter((currentStage) => stage === currentStage).length;
}

function getReachedCount(stage, stages) {
  return stages.filter((currentStage) => currentStage >= stage).length;
}

function getFailureRate(stage, stages) {
  return getNotClearedCount(stage, stages) / getReachedCount(stage, stages);
}
