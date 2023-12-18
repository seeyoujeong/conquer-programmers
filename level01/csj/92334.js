// 신고 결과 받기

function solution(id_list, report, k) {
  const reportedMap = {};
  const userMap = {};

  new Set(report).forEach((str) => {
    const [user, reported] = str.split(' ');

    if (!(reported in reportedMap)) reportedMap[reported] = 0;
    if (!(user in userMap)) userMap[user] = [];

    reportedMap[reported]++;
    userMap[user].push(reported);
  });

  return id_list.map((id) =>
    id in userMap
      ? userMap[id].filter((reported) => reportedMap[reported] >= k)
          .length
      : 0
  );
}
