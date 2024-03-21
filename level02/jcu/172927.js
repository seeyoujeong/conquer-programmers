// 광물 캐기

function solution(picks, minerals) {
  let result = Infinity;
  const mining = [
    {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  ];

  const working = (picks, minerals, count) => {
    if (picks.every((pick) => pick === 0) || minerals.length === 0) {
      result = Math.min(result, count);
      return;
    }

    for (let i = 0; i < picks.length; i += 1) {
      if (picks[i] !== 0) {
        const currentPicks = picks.map((pick, idx) =>
          idx === i ? pick - 1 : pick
        );
        const fatigue = minerals
          .slice(0, 5)
          .reduce((acc, cur) => acc + mining[i][cur], 0);
        working(currentPicks, minerals.slice(5), count + fatigue);
      }
    }
  };

  working([...picks], [...minerals], 0);

  return result;
}
