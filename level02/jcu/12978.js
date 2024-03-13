// 배달

function solution(N, road, K) {
  let totalHoursEachVillage = Array(N + 1).fill(Infinity);
  let connectedEachVillage = Array.from({ length: N + 1 }, () => []);

  for (const [village1, village2, hours] of road) {
    connectedEachVillage[village1].push({ to: village2, hours });
    connectedEachVillage[village2].push({ to: village1, hours });
  }

  let queue = [{ to: 1, hours: 0 }];
  totalHoursEachVillage[1] = 0;

  while (queue.length) {
    const { to: currentTo } = queue.pop();

    for (const { to, hours } of connectedEachVillage[currentTo]) {
      if (
        totalHoursEachVillage[to] >
        totalHoursEachVillage[currentTo] + hours
      ) {
        totalHoursEachVillage[to] = totalHoursEachVillage[currentTo] + hours;
        queue.push({ to, hours });
      }
    }
  }

  return totalHoursEachVillage.filter((hours) => hours <= K).length;
}
