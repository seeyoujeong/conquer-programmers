// 기능개발

function solution(progresses, speeds) {
  let maxDay;

  return progresses
    .map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]))
    .reduce((acc, cur) => {
      if (maxDay === undefined || maxDay < cur) {
        acc.push(1);
        maxDay = cur;
      } else {
        acc[acc.length - 1] += 1;
      }

      return acc;
    }, []);
}
