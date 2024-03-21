// 광물 캐기

function solution(picks, minerals) {
  const costs = {
    diamond: 0,
    iron: 1,
    stone: 2,
  };

  const chunks = minerals.reduce((acc, cur, i) => {
    if (i % 5 === 0) return [...acc, [cur]];
    acc[acc.length - 1].push(cur);
    return acc;
  }, []);

  const totalPicks = picks.reduce((acc, cur) => acc + cur, 0);
  chunks.splice(totalPicks);

  const calCost = (minerals, toolIndex) =>
    minerals.reduce((acc, cur) => {
      const diff = toolIndex < costs[cur] ? 0 : toolIndex - costs[cur];
      return acc + 5 ** diff;
    }, 0);

  chunks.sort((a, b) => calCost(b, 2) - calCost(a, 2));

  let result = 0;
  for (let i = 0; i < picks.length; i++) {
    let count = picks[i];
    while (count) {
      if (chunks.length === 0) return result;
      result += calCost(chunks.shift(), i);
      count -= 1;
    }
  }

  return result;
}
