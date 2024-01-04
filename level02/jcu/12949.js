// 행렬의 곱셈

function solution(arr1, arr2) {
  const result = [];

  for (const row of arr1) {
    let rowResult = Array(arr2[0].length).fill(0);

    for (let i = 0; i < row.length; i += 1) {
      rowResult = rowResult.map((num, j) => num + row[i] * arr2[i][j]);
    }

    result.push(rowResult);
  }

  return result;
}
