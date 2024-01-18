// 피로도

function solution(k, dungeons) {
  const travelDungeon = (current, dungeons, fatigue) => {
    if (dungeons.length === 0) {
      return current;
    }
    const results = [];
    for (let i = 0; i < dungeons.length; i++) {
      const [need, cost] = dungeons[i];
      if (need > fatigue) {
        results.push(current);
      } else {
        const newDeogeons = [...dungeons];
        newDeogeons.splice(i, 1);
        results.push(
          travelDungeon(current + 1, newDeogeons, fatigue - cost)
        );
      }
    }
    return Math.max(...results);
  };

  return travelDungeon(0, dungeons, k);
}
