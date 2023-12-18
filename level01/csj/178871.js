// 달리기 경주

function solution(players, callings) {
  const rankByName = {};
  const nameByRank = {};

  players.forEach((name, rank) => {
    rankByName[name] = rank;
    nameByRank[rank] = name;
  });

  callings.forEach((name) => {
    const rank = rankByName[name]; //현재name등수
    const prevName = nameByRank[rank - 1]; //추월당한사람이름

    nameByRank[rank] = prevName;
    nameByRank[rank - 1] = name;

    rankByName[prevName] += 1;
    rankByName[name] -= 1;
  });

  return Object.values(nameByRank);
}
