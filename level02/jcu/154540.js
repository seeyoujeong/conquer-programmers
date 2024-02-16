// 무인도 여행

function solution(maps) {
  let result = [];
  let colLen = maps.length;
  let rowLen = maps[0].length;
  let newMaps = maps.map((row) => [...row]);
  let count = 0;
  const findIsland = (y, x) => {
    count += Number(newMaps[y][x]);
    newMaps[y][x] = "X";

    for (const [dirY, dirX] of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      const nextY = y + dirY;
      const nextX = x + dirX;

      if (
        nextY >= 0 &&
        nextX >= 0 &&
        nextY < colLen &&
        nextX < rowLen &&
        newMaps[nextY][nextX] !== "X"
      ) {
        findIsland(nextY, nextX);
      }
    }
  };

  for (let i = 0; i < colLen; i += 1) {
    for (let j = 0; j < rowLen; j += 1) {
      if (newMaps[i][j] !== "X") {
        findIsland(i, j);
        result.push(count);
        count = 0;
      }
    }
  }

  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
