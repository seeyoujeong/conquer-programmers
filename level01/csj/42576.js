const makeCounts = (arr) =>
  arr.reduce((acc, cur) => {
    if (!(cur in acc)) acc[cur] = 0;
    acc[cur] += 1;
    return acc;
  }, {});

function solution(participant, completion) {
  const participantCounts = makeCounts(participant);
  const completionCounts = makeCounts(completion);

  return Object.entries(participantCounts).find(
    ([name, count]) =>
      !(name in completionCounts && count === completionCounts[name])
  )[0];
}
