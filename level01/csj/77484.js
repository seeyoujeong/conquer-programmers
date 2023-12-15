function solution(lottos, win_nums) {
  const minWins = lottos.filter((lotto) =>
    win_nums.includes(lotto)
  ).length;
  const maxWins =
    minWins + lottos.filter((lotto) => lotto === 0).length;

  const minRate = 6 - (maxWins < 2 ? 1 : maxWins) + 1;
  const maxRate = 6 - (minWins < 2 ? 1 : minWins) + 1;
  return [minRate, maxRate];
}
