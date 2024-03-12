// 오픈채팅방

function solution(record) {
  const nicknames = {};
  const log = [];

  for (const str of record) {
    const [status, id, nickname] = str.split(' ');
    if (status === 'Change' || status === 'Enter') {
      nicknames[id] = nickname;
    }
    if (status === 'Enter' || status === 'Leave') {
      log.push([status, id]);
    }
  }

  return log.map(
    ([status, id]) =>
      `${nicknames[id]}님이 ${
        status === 'Enter' ? '들어왔습니다' : '나갔습니다'
      }.`
  );
}
