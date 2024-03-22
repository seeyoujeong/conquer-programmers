// 과제 진행하기

function solution(plans) {
  const sortedPlans = [...plans]
    .map(([name, start, playtime]) => [
      name,
      convertToMinute(start),
      Number(playtime),
    ])
    .sort((a, b) => a[1] - b[1]);

  let result = [];
  let stack = [];
  let currentPlan = sortedPlans.shift();

  while (sortedPlans.length > 0) {
    const [curName, curStart, curPlaytime] = currentPlan;
    const [, nextStart, nextPlaytime] = sortedPlans[0];

    if (curStart + curPlaytime > nextStart) {
      stack.push([
        curName,
        nextStart + nextPlaytime,
        curStart + curPlaytime - nextStart,
      ]);
      currentPlan = sortedPlans.shift();
    } else {
      result.push(curName);

      if (stack.length > 0) {
        stack = stack.map(([name, time, playtime]) => [
          name,
          curStart + curPlaytime,
          playtime,
        ]);
        currentPlan = stack.pop();
      } else {
        currentPlan = sortedPlans.shift();
      }
    }
  }

  result.push(currentPlan[0]);

  for (const [name] of stack.reverse()) {
    result.push(name);
  }

  return result;
}

function convertToMinute(time) {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
}
