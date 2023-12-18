// 완주하지 못한 선수

const makeCounts = (arr) =>
  arr.reduce((acc, cur) => {
    if (!(cur in acc)) acc[cur] = 0;
    acc[cur] += 1;
    return acc;
  }, {});

function solution(participant, completion) {
  const completionCounts = makeCounts(completion);
  return participant.find((name) => !completionCounts[name]--);
}
