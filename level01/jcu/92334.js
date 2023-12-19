// 신고 결과 받기

function solution(id_list, report, k) {
  const infoList = id_list.reduce(
    (acc, cur) => ({ ...acc, [cur]: { reportedBy: [], mailCount: 0 } }),
    {}
  );

  new Set(report).forEach((value) => {
    const [reportId, reportedId] = value.split(" ");

    infoList[reportedId].reportedBy.push(reportId);
  });

  Object.values(infoList).forEach(({ reportedBy }) => {
    if (reportedBy.length >= k) {
      reportedBy.forEach((id) => {
        infoList[id].mailCount += 1;
      });
    }
  });

  return Object.values(infoList).map(({ mailCount }) => mailCount);
}
