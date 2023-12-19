// 공원 산책

function solution(park, routes) {
  let currentPosition;
  const obstacles = [];
  const rowLength = park.length;
  const colLength = park[0].length;

  for (let i = 0; i < rowLength; i += 1) {
    for (let j = 0; j < colLength; j += 1) {
      const position = park[i][j];

      if (position === "S") {
        currentPosition = [i, j];
      }

      if (position === "X") {
        obstacles.push([i, j]);
      }
    }
  }

  for (const route of routes) {
    const [direction, move] = route.split(" ");

    if (
      checkPosition({
        position: currentPosition,
        range: [rowLength, colLength],
        direction,
        move: Number(move),
      }) &&
      checkObstacle({
        position: currentPosition,
        obstacles,
        direction,
        move: Number(move),
      })
    ) {
      currentPosition = movePosition({
        position: currentPosition,
        direction,
        move: Number(move),
      });

      console.log(currentPosition);
    }
  }

  return currentPosition;
}

function checkObstacle({ position, obstacles, direction, move }) {
  const [y, x] = position;

  if (obstacles.length === 0) {
    return true;
  }

  for (const [obstacleY, obstacleX] of obstacles) {
    switch (direction) {
      case "N": {
        if (x === obstacleX && obstacleY < y && y - move <= obstacleY) {
          return false;
        }
        break;
      }
      case "S": {
        if (x === obstacleX && obstacleY > y && obstacleY <= y + move) {
          return false;
        }
        break;
      }
      case "W": {
        if (y === obstacleY && obstacleX < x && x - move <= obstacleX) {
          return false;
        }
        break;
      }
      case "E": {
        if (y === obstacleY && obstacleX > x && obstacleX <= x + move) {
          return false;
        }
        break;
      }
    }
  }

  return true;
}

function checkPosition({ position, range, direction, move }) {
  const [y, x] = position;
  const [rowLength, colLength] = range;

  switch (direction) {
    case "N": {
      if (y - move < 0) return false;
      break;
    }
    case "S": {
      if (y + move >= rowLength) return false;
      break;
    }
    case "W": {
      if (x - move < 0) return false;
      break;
    }
    case "E": {
      if (x + move >= colLength) return false;
      break;
    }
  }

  return true;
}

function movePosition({ position, direction, move }) {
  let [y, x] = position;

  switch (direction) {
    case "N": {
      y -= move;
      break;
    }
    case "S": {
      y += move;
      break;
    }
    case "W": {
      x -= move;
      break;
    }
    case "E": {
      x += move;
      break;
    }
  }

  return [y, x];
}
