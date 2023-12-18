// 공원 산책

function solution(park, routes) {
  let result = [0, 0];

  const parkMap = park.map((line, i) =>
    [...line].map((block, j) => {
      if (block === 'X') return 0;
      if (block === 'S') result = [i, j];
      return 1;
    })
  );

  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (const route of routes) {
    const [op, n] = route.split(' ');
    let [nextY, nextX] = result;
    const [y, x] = directions[op];
    let count = 0;

    while (count++ < n) {
      nextY += y;
      nextX += x;
      if (
        nextY < 0 ||
        nextY >= parkMap.length ||
        nextX < 0 ||
        nextX >= parkMap[0].length ||
        !parkMap[nextY][nextX]
      )
        break;
    }

    if (count > n) result = [nextY, nextX];
  }

  return result;
}
