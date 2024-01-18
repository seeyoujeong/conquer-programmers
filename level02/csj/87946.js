// 피로도

function solution(k, dungeons) {
  const travelDungeon = (current, dungeons, fatigue) => {
    if (dungeons.length === 0) {
      return current;
    }
    const results = dungeons.map(([need, cost], i) => {
      if (need > fatigue) return current;

      const newDeogeons = [...dungeons];
      newDeogeons.splice(i, 1);

      return travelDungeon(current + 1, newDeogeons, fatigue - cost);
    });
    return Math.max(...results);
  };

  return travelDungeon(0, dungeons, k);
}
