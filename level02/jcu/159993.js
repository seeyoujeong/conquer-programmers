// 미로 탈출

function solution(maps) {
  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [maxY, maxX] = [maps.length, maps[0].length];
  let start = [];
  let lever = [];
  let end = [];

  const convertedMaps = maps.map((row, rowIdx) => {
    const indexOfS = row.indexOf("S");
    const indexOfL = row.indexOf("L");
    const indexOfE = row.indexOf("E");

    if (indexOfS !== -1) start = [rowIdx, indexOfS];
    if (indexOfL !== -1) lever = [rowIdx, indexOfL];
    if (indexOfE !== -1) end = [rowIdx, indexOfE];

    return [...row].map((col) => (col === "X" ? 0 : 1));
  });

  const moveTo = (from, to, maps) => {
    let queue = [from];

    while (queue.length > 0) {
      const [curY, curX] = queue.shift();
      if (curY === to[0] && curX === to[1]) return maps[curY][curX] - 1;

      for (const [y, x] of moves) {
        const [nextY, nextX] = [curY + y, curX + x];

        if (nextY < 0 || nextX < 0 || nextY >= maxY || nextX >= maxX) continue;
        if (maps[nextY][nextX] !== 1) continue;

        maps[nextY][nextX] += maps[curY][curX];
        queue.push([nextY, nextX]);
      }
    }

    return -1;
  };

  const startToLever = moveTo(
    start,
    lever,
    convertedMaps.map((row) => [...row])
  );
  const leverToEnd = moveTo(
    lever,
    end,
    convertedMaps.map((row) => [...row])
  );

  return startToLever < 0 || leverToEnd < 0 ? -1 : startToLever + leverToEnd;
}
