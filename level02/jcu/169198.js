// 당구 연습
function solution(m, n, startX, startY, balls) {
  let result = [];

  for (const [ballX, ballY] of balls) {
    const distanceDownX = (ballX - startX) ** 2 + (ballY + startY) ** 2;
    const distanceUpX = (ballX - startX) ** 2 + (ballY - 2 * n + startY) ** 2;
    const distanceLeftY = (ballX + startX) ** 2 + (ballY - startY) ** 2;
    const distanceRightY =
      (ballX - 2 * m + startX) ** 2 + (ballY - startY) ** 2;

    if (ballX === startX) {
      if (ballY > startY) {
        result.push(Math.min(distanceDownX, distanceLeftY, distanceRightY));
      } else {
        result.push(Math.min(distanceUpX, distanceLeftY, distanceRightY));
      }
    } else if (ballY === startY) {
      if (ballX > startX) {
        result.push(Math.min(distanceDownX, distanceUpX, distanceLeftY));
      } else {
        result.push(Math.min(distanceDownX, distanceUpX, distanceRightY));
      }
    } else {
      result.push(
        Math.min(distanceDownX, distanceUpX, distanceLeftY, distanceRightY)
      );
    }
  }

  return result;
}
