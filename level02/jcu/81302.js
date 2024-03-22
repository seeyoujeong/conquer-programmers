// 거리두기 확인하기

function solution(places) {
  let result = [];

  for (const place of places) {
    result.push(checkPlace(place));
  }

  return result;
}

function checkPlace(place) {
  const move = [
    [0, 1],
    [0, 2],
    [0, -1],
    [0, -2],
    [1, 0],
    [2, 0],
    [-1, 0],
    [-2, 0],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];

  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (place[i][j] === "P") {
        for (const [y, x] of move) {
          const [nextY, nextX] = [i + y, j + x];

          if (nextY < 0 || nextX < 0 || nextY > 4 || nextX > 4) continue;
          if (place[nextY][nextX] === "P") {
            if (
              Math.abs(y + x) === 1 ||
              (y === 2 && place[nextY - 1][nextX] !== "X") ||
              (y === -2 && place[nextY + 1][nextX] !== "X") ||
              (x === 2 && place[nextY][nextX - 1] !== "X") ||
              (x === -2 && place[nextY][nextX + 1] !== "X") ||
              (y === 1 &&
                x === 1 &&
                (place[nextY][nextX - 1] !== "X" ||
                  place[nextY - 1][nextX] !== "X")) ||
              (y === -1 &&
                x === 1 &&
                (place[nextY][nextX - 1] !== "X" ||
                  place[nextY + 1][nextX] !== "X")) ||
              (y === 1 &&
                x === -1 &&
                (place[nextY][nextX + 1] !== "X" ||
                  place[nextY - 1][nextX] !== "X")) ||
              (y === -1 &&
                x === -1 &&
                (place[nextY][nextX + 1] !== "X" ||
                  place[nextY + 1][nextX] !== "X"))
            ) {
              return 0;
            }
          }
        }
      }
    }
  }

  return 1;
}
