// 카펫

function solution(brown, yellow) {
  const sum = brown + yellow;
  const sqrtSum = Math.floor(Math.sqrt(sum));

  for (let height = 3; height <= sqrtSum; height += 1) {
    const width = Math.floor(sum / height);

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
