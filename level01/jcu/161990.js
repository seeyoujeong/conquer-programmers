// 바탕화면 정리

function solution(wallpaper) {
  const xIndexes = [];
  const yIndexes = [];

  wallpaper.forEach((row, rowIdx) => {
    [...row].forEach((col, colIdx) => {
      if (col === "#") {
        xIndexes.push(rowIdx);
        yIndexes.push(colIdx);
      }
    });
  });

  xIndexes.sort((a, b) => a - b);
  yIndexes.sort((a, b) => a - b);

  return [xIndexes[0], yIndexes[0], xIndexes.at(-1) + 1, yIndexes.at(-1) + 1];
}
