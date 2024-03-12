// 땅따먹기

function solution(land) {
  for (let col = 1; col < land.length; col++) {
    for (let row = 0; row < 4; row++) {
      land[col][row] += Math.max(
        ...[0, 1, 2, 3]
          .filter((prev) => prev !== row)
          .map((prev) => land[col - 1][prev])
      );
    }
  }
  return Math.max(...land[land.length - 1]);
}
