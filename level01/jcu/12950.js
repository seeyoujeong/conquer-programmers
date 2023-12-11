// 행렬의 덧셈

function solution(arr1, arr2) {
  return arr1.map((row, idx0) =>
    row.map((col, idx1) => col + arr2[idx0][idx1])
  );
}
