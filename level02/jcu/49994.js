// 방문 길이

function solution(dirs) {
  const dirObject = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  let currentLocation = [0, 0];

  return (
    Array.from(dirs).reduce((acc, cur) => {
      const [currentX, currentY] = currentLocation;
      const [dirX, dirY] = dirObject[cur];
      const [nextX, nextY] = [currentX + dirX, currentY + dirY];

      if (-5 <= nextX && nextX <= 5 && -5 <= nextY && nextY <= 5) {
        acc.add(`${currentX}${currentY}${nextX}${nextY}`);
        acc.add(`${nextX}${nextY}${currentX}${currentY}`);
        currentLocation = [nextX, nextY];
      }

      return acc;
    }, new Set()).size / 2
  );
}
