// 행렬 테두리 회전하기

function solution(rows, columns, queries) {
  let array = [];

  for (let row = 0; row < rows; row += 1) {
    let temp = [];

    for (let col = 1; col <= columns; col += 1) {
      temp.push(row * columns + col);
    }

    array.push(temp);
  }

  let result = [];

  for (const query of queries) {
    const [x1, y1, x2, y2] = query.map((q) => q - 1);
    let minNum = Infinity;
    let temp = array[x1][y1];

    for (let i = y1; i < y2; i += 1) {
      minNum = Math.min(minNum, temp);
      [array[x1][i + 1], temp] = [temp, array[x1][i + 1]];
    }

    for (let i = x1; i < x2; i += 1) {
      minNum = Math.min(minNum, temp);
      [array[i + 1][y2], temp] = [temp, array[i + 1][y2]];
    }

    for (let i = y2; i > y1; i -= 1) {
      minNum = Math.min(minNum, temp);
      [array[x2][i - 1], temp] = [temp, array[x2][i - 1]];
    }

    for (let i = x2; i > x1; i -= 1) {
      minNum = Math.min(minNum, temp);
      [array[i - 1][y1], temp] = [temp, array[i - 1][y1]];
    }

    result.push(minNum);
  }

  return result;
}
