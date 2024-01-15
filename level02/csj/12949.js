// 행렬의 곱셈

function solution(arr1, arr2) {
  return arr1.map((_, i) =>
    arr2[0].map((_, j) =>
      Array(arr2.length)
        .fill(0)
        .reduce((acc, _, k) => acc + arr1[i][k] * arr2[k][j], 0)
    )
  );
}
