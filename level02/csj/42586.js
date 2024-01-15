// 기능개발

function solution(progresses, speeds) {
  const works = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  const result = [];
  while (works.length) {
    const work = works.shift();
    let deploy = 1;
    while (works.length && works[0] <= work) {
      works.shift();
      deploy += 1;
    }
    result.push(deploy);
  }

  return result;
}
