// 완주하지 못한 선수

function solution(participant, completion) {
  const participantMap = participant.reduce(
    (acc, cur) => (acc.set(cur, acc.has(cur) ? acc.get(cur) + 1 : 1), acc),
    new Map()
  );

  for (const name of completion) {
    participantMap.set(name, participantMap.get(name) - 1);

    if (participantMap.get(name) === 0) {
      participantMap.delete(name);
    }
  }

  return participantMap.keys().next().value;
}
