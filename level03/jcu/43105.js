// 정수 삼각형

function solution(triangle) {
  for (let i = 1; i < triangle.length; i += 1) {
    const row = [...triangle[i]];
    for (let j = 0; j < triangle[i].length - 1; j += 1) {
      for (let k = j; k <= j + 1; k += 1) {
        const tmp = row[k] + triangle[i - 1][j];

        triangle[i][k] = Math.max(tmp, triangle[i][k]);
      }
    }
  }

  return Math.max(...triangle.at(-1));
}
