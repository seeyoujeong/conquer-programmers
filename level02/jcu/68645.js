// 삼각 달팽이

function solution(n) {
  let result = [...Array(n)].map((_) => [...Array(n)].fill(0));
  const move = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let curVal = 1;
  let curY = 0;
  let curX = 0;
  let dir = 0;

  while (true) {
    result[curY][curX] = curVal;
    let nextY = curY + move[dir][0];
    let nextX = curX + move[dir][1];

    if (nextY === n || nextX === n || result[nextY][nextX] !== 0) {
      dir = (dir + 1) % 3;
      nextY = curY + move[dir][0];
      nextX = curX + move[dir][1];

      if (nextY === n || nextX === n || result[nextY][nextX] !== 0) {
        break;
      }
    }

    curY = nextY;
    curX = nextX;
    curVal += 1;
  }

  return result.flat().filter((num) => num !== 0);
}
