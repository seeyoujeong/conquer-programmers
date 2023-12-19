// 달리기 경주

function solution(players, callings) {
  const rankOfPlayers = players.reduce(
    (acc, cur, idx) => ((acc[cur] = idx), acc),
    {}
  );

  for (const name of callings) {
    const rank = rankOfPlayers[name];
    const frontPlayer = players[rank - 1];

    rankOfPlayers[name] = rank - 1;
    rankOfPlayers[frontPlayer] = rank;
    players[rank - 1] = name;
    players[rank] = frontPlayer;
  }

  return players;
}

// TODO 키패드 누르기
