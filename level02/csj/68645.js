// 삼각 달팽이

function solution(n) {
  const stairs = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let [top, bottom] = [0, n - 1];
  let num = 1;

  let cnt = 0;
  while (top < bottom) {
    for (let index = top; index < bottom; index++) {
      stairs[index][cnt] = num++;
    }
    for (let index = cnt; index < bottom - cnt; index++) {
      stairs[bottom][index] = num++;
    }
    for (let index = bottom; index > top; index--) {
      stairs[index][index - cnt] = num++;
    }
    cnt += 1;
    top += 2;
    bottom -= 1;
  }
  if (num === ((n + 1) * n) / 2) {
    stairs[top][top / 2] = num;
  }
  return stairs.reduce((acc, cur) => [...acc, ...cur], []);
}
