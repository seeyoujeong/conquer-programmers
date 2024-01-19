// 오픈채팅방

function solution(record) {
  const users = record.reduce((acc, cur) => {
    const [state, id, nickname] = cur.split(" ");

    if (state === "Enter" || state === "Change") {
      acc[id] = nickname;
    }

    return acc;
  }, {});

  return record
    .filter((value) => !value.startsWith("Change"))
    .map((value) => {
      const [state, id] = value.split(" ");

      if (state === "Enter") {
        return `${users[id]}님이 들어왔습니다.`;
      }

      if (state === "Leave") {
        return `${users[id]}님이 나갔습니다.`;
      }
    });
}
